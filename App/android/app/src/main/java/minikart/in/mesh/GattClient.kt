package minikart.`in`.mesh

import android.annotation.SuppressLint
import android.bluetooth.BluetoothDevice
import android.bluetooth.BluetoothGatt
import android.bluetooth.BluetoothGattCallback
import android.bluetooth.BluetoothGattCharacteristic
import android.bluetooth.BluetoothProfile
import android.content.Context
import android.os.Handler
import android.os.Looper
import android.util.Log
import java.util.LinkedList
import java.util.Queue

@SuppressLint("MissingPermission")
class GattClient(private val context: Context) {

    companion object {
        private const val TAG = "PingDartMesh:GattClient"
        private const val TIMEOUT_MS = 25000L
    }

    private val mainHandler = Handler(Looper.getMainLooper())

    data class SendTask(
        val device: BluetoothDevice,
        val packet: MeshPacket,
        val callback: (Boolean, String?) -> Unit
    )

    private val taskQueue: Queue<SendTask> = LinkedList()
    private var isBusy = false

    private var activeGatt: BluetoothGatt? = null
    private var activeTask: SendTask? = null
    private var activeFragments: List<ByteArray> = emptyList()
    private var currentFragmentIndex = 0
    private var writeCharacteristic: BluetoothGattCharacteristic? = null
    private var negotiatedMtu = MeshConstants.DEFAULT_ATT_MTU

    private val timeoutRunnable = Runnable {
        Log.w(TAG, "Transmission timed out")
        finishCurrentTask(false, "Transmission timed out after ${TIMEOUT_MS / 1000}s")
    }

    private val gattCallback = object : BluetoothGattCallback() {
        override fun onConnectionStateChange(gatt: BluetoothGatt?, status: Int, newState: Int) {
            super.onConnectionStateChange(gatt, status, newState)
            if (gatt == null) return

            Log.d(TAG, "onConnectionStateChange: status=$status, newState=$newState")

            if (newState == BluetoothProfile.STATE_CONNECTED) {
                if (status == BluetoothGatt.GATT_SUCCESS) {
                    // Attempt MTU negotiation up to 512 bytes
                    val mtuRequested = gatt.requestMtu(MeshConstants.DESIRED_MTU)
                    if (!mtuRequested) {
                        Log.d(TAG, "requestMtu failed or not supported, proceeding to discoverServices")
                        gatt.discoverServices()
                    }
                } else {
                    finishCurrentTask(false, "Connection failed with status $status")
                }
            } else if (newState == BluetoothProfile.STATE_DISCONNECTED) {
                if (activeTask != null) {
                    finishCurrentTask(false, "Device disconnected prematurely (status: $status)")
                }
            }
        }

        override fun onMtuChanged(gatt: BluetoothGatt?, mtu: Int, status: Int) {
            super.onMtuChanged(gatt, mtu, status)
            if (status == BluetoothGatt.GATT_SUCCESS) {
                negotiatedMtu = mtu
                Log.d(TAG, "MTU negotiated successfully: $negotiatedMtu bytes")
            } else {
                negotiatedMtu = MeshConstants.DEFAULT_ATT_MTU
                Log.w(TAG, "MTU negotiation failed, fallback to $negotiatedMtu bytes")
            }
            gatt?.discoverServices()
        }

        override fun onServicesDiscovered(gatt: BluetoothGatt?, status: Int) {
            super.onServicesDiscovered(gatt, status)
            if (gatt == null) return

            if (status != BluetoothGatt.GATT_SUCCESS) {
                finishCurrentTask(false, "Service discovery failed with status $status")
                return
            }

            val service = gatt.getService(MeshConstants.SERVICE_UUID)
            if (service == null) {
                finishCurrentTask(false, "Mesh service not found on peer")
                return
            }

            val characteristic = service.getCharacteristic(MeshConstants.WRITE_CHAR_UUID)
            if (characteristic == null) {
                finishCurrentTask(false, "Mesh write characteristic not found on peer")
                return
            }

            writeCharacteristic = characteristic

            val current = activeTask ?: return
            val jsonBytes = current.packet.toJson().toByteArray(Charsets.UTF_8)
            activeFragments = MeshFragmenter.fragment(jsonBytes, negotiatedMtu)
            currentFragmentIndex = 0

            Log.d(TAG, "Starting transfer: ${activeFragments.size} fragments, total size ${jsonBytes.size} bytes")
            sendNextFragment()
        }

        override fun onCharacteristicWrite(
            gatt: BluetoothGatt?,
            characteristic: BluetoothGattCharacteristic?,
            status: Int
        ) {
            super.onCharacteristicWrite(gatt, characteristic, status)
            if (status == BluetoothGatt.GATT_SUCCESS) {
                currentFragmentIndex++
                if (currentFragmentIndex < activeFragments.size) {
                    sendNextFragment()
                } else {
                    Log.d(TAG, "All ${activeFragments.size} fragments sent successfully")
                    finishCurrentTask(true, null)
                }
            } else {
                finishCurrentTask(false, "Fragment write failed at index $currentFragmentIndex with status $status")
            }
        }
    }

    @Synchronized
    fun enqueueSend(device: BluetoothDevice, packet: MeshPacket, callback: (Boolean, String?) -> Unit) {
        val task = SendTask(device, packet, callback)
        taskQueue.add(task)
        processNextInQueue()
    }

    @Synchronized
    private fun processNextInQueue() {
        if (isBusy || taskQueue.isEmpty()) return

        isBusy = true
        val task = taskQueue.poll() ?: return
        activeTask = task
        currentFragmentIndex = 0
        negotiatedMtu = MeshConstants.DEFAULT_ATT_MTU

        mainHandler.postDelayed(timeoutRunnable, TIMEOUT_MS)

        try {
            Log.d(TAG, "Connecting to peer: ${task.device.address}")
            activeGatt = task.device.connectGatt(
                context,
                false,
                gattCallback,
                BluetoothDevice.TRANSPORT_LE
            )
        } catch (e: Exception) {
            Log.e(TAG, "Failed to connect to GATT device: ${e.message}")
            finishCurrentTask(false, e.message)
        }
    }

    @Suppress("DEPRECATION")
    private fun sendNextFragment() {
        val gatt = activeGatt ?: return
        val char = writeCharacteristic ?: return
        if (currentFragmentIndex >= activeFragments.size) return

        val chunk = activeFragments[currentFragmentIndex]
        char.value = chunk
        char.writeType = BluetoothGattCharacteristic.WRITE_TYPE_DEFAULT

        val success = gatt.writeCharacteristic(char)
        if (!success) {
            Log.e(TAG, "writeCharacteristic returned false for fragment $currentFragmentIndex")
            finishCurrentTask(false, "GATT stack rejected write for fragment $currentFragmentIndex")
        }
    }

    private fun finishCurrentTask(success: Boolean, errorMessage: String?) {
        mainHandler.removeCallbacks(timeoutRunnable)

        val task = activeTask
        activeTask = null
        activeFragments = emptyList()
        currentFragmentIndex = 0
        writeCharacteristic = null

        try {
            activeGatt?.disconnect()
            activeGatt?.close()
        } catch (e: Exception) {
            Log.e(TAG, "Error closing GATT client: ${e.message}")
        } finally {
            activeGatt = null
        }

        task?.let {
            mainHandler.post {
                it.callback(success, errorMessage)
            }
        }

        isBusy = false
        // Process any queued items
        mainHandler.post {
            processNextInQueue()
        }
    }

    fun cancelAll() {
        mainHandler.removeCallbacks(timeoutRunnable)
        taskQueue.clear()
        finishCurrentTask(false, "Cancelled by user")
    }
}
