package minikart.`in`.mesh

import android.annotation.SuppressLint
import android.bluetooth.BluetoothDevice
import android.bluetooth.BluetoothGatt
import android.bluetooth.BluetoothGattCharacteristic
import android.bluetooth.BluetoothGattDescriptor
import android.bluetooth.BluetoothGattServer
import android.bluetooth.BluetoothGattServerCallback
import android.bluetooth.BluetoothGattService
import android.bluetooth.BluetoothManager
import android.bluetooth.BluetoothProfile
import android.content.Context
import android.util.Log
import java.util.concurrent.ConcurrentHashMap

@SuppressLint("MissingPermission")
class GattServer(
    private val context: Context,
    private val onPacketReceived: (MeshPacket, BluetoothDevice) -> Unit,
    private val onStatusChange: (Boolean, String?) -> Unit
) {
    companion object {
        private const val TAG = "PingDartMesh:GattServer"
    }

    private val bluetoothManager = context.getSystemService(Context.BLUETOOTH_SERVICE) as? BluetoothManager
    private var gattServer: BluetoothGattServer? = null
    private val connectedDevices = ConcurrentHashMap<String, BluetoothDevice>()

    private val serverCallback = object : BluetoothGattServerCallback() {
        override fun onConnectionStateChange(device: BluetoothDevice?, status: Int, newState: Int) {
            super.onConnectionStateChange(device, status, newState)
            if (device == null) return
            val address = device.address ?: return

            if (newState == BluetoothProfile.STATE_CONNECTED) {
                Log.d(TAG, "Device connected to GATT server: $address")
                connectedDevices[address] = device
            } else if (newState == BluetoothProfile.STATE_DISCONNECTED) {
                Log.d(TAG, "Device disconnected from GATT server: $address")
                connectedDevices.remove(address)
            }
        }

        override fun onCharacteristicWriteRequest(
            device: BluetoothDevice?,
            requestId: Int,
            characteristic: BluetoothGattCharacteristic?,
            preparedWrite: Boolean,
            responseNeeded: Boolean,
            offset: Int,
            value: ByteArray?
        ) {
            super.onCharacteristicWriteRequest(device, requestId, characteristic, preparedWrite, responseNeeded, offset, value)

            if (responseNeeded && device != null) {
                try {
                    gattServer?.sendResponse(device, requestId, BluetoothGatt.GATT_SUCCESS, offset, value)
                } catch (e: Exception) {
                    Log.e(TAG, "Failed to send GATT write response: ${e.message}")
                }
            }

            if (characteristic?.uuid == MeshConstants.WRITE_CHAR_UUID && value != null && device != null) {
                try {
                    // Feed raw fragment into reassembler with CRC verification
                    val fullPayloadBytes = MeshFragmenter.processFragment(value)
                    if (fullPayloadBytes != null) {
                        val jsonStr = String(fullPayloadBytes, Charsets.UTF_8)
                        val packet = MeshPacket.fromJson(jsonStr)
                        Log.d(TAG, "Successfully reassembled packet: id=${packet.messageId}, sender=${packet.senderId}")
                        onPacketReceived(packet, device)
                    }
                } catch (e: Exception) {
                    Log.e(TAG, "Error processing incoming fragment: ${e.message}", e)
                }
            }
        }

        override fun onCharacteristicReadRequest(
            device: BluetoothDevice?,
            requestId: Int,
            offset: Int,
            characteristic: BluetoothGattCharacteristic?
        ) {
            super.onCharacteristicReadRequest(device, requestId, offset, characteristic)
            if (device != null) {
                try {
                    gattServer?.sendResponse(
                        device,
                        requestId,
                        BluetoothGatt.GATT_SUCCESS,
                        0,
                        "PINGDART_MESH_V1".toByteArray(Charsets.UTF_8)
                    )
                } catch (e: Exception) {
                    Log.e(TAG, "Failed to send GATT read response: ${e.message}")
                }
            }
        }

        override fun onDescriptorWriteRequest(
            device: BluetoothDevice?,
            requestId: Int,
            descriptor: BluetoothGattDescriptor?,
            preparedWrite: Boolean,
            responseNeeded: Boolean,
            offset: Int,
            value: ByteArray?
        ) {
            super.onDescriptorWriteRequest(device, requestId, descriptor, preparedWrite, responseNeeded, offset, value)
            if (responseNeeded && device != null) {
                try {
                    gattServer?.sendResponse(device, requestId, BluetoothGatt.GATT_SUCCESS, offset, value)
                } catch (e: Exception) {
                    Log.e(TAG, "Failed to send descriptor write response: ${e.message}")
                }
            }
        }
    }

    fun start(): Boolean {
        if (gattServer != null) return true

        if (bluetoothManager == null) {
            onStatusChange(false, "BluetoothManager not available")
            return false
        }

        try {
            gattServer = bluetoothManager.openGattServer(context, serverCallback)
            if (gattServer == null) {
                onStatusChange(false, "Unable to open GATT server")
                return false
            }

            val service = BluetoothGattService(
                MeshConstants.SERVICE_UUID,
                BluetoothGattService.SERVICE_TYPE_PRIMARY
            )

            val writeChar = BluetoothGattCharacteristic(
                MeshConstants.WRITE_CHAR_UUID,
                BluetoothGattCharacteristic.PROPERTY_WRITE or
                        BluetoothGattCharacteristic.PROPERTY_WRITE_NO_RESPONSE,
                BluetoothGattCharacteristic.PERMISSION_WRITE
            )

            val notifyChar = BluetoothGattCharacteristic(
                MeshConstants.NOTIFY_CHAR_UUID,
                BluetoothGattCharacteristic.PROPERTY_NOTIFY or
                        BluetoothGattCharacteristic.PROPERTY_READ,
                BluetoothGattCharacteristic.PERMISSION_READ
            )

            val configDescriptor = BluetoothGattDescriptor(
                MeshConstants.CLIENT_CONFIG_DESCRIPTOR_UUID,
                BluetoothGattDescriptor.PERMISSION_READ or BluetoothGattDescriptor.PERMISSION_WRITE
            )
            notifyChar.addDescriptor(configDescriptor)

            service.addCharacteristic(writeChar)
            service.addCharacteristic(notifyChar)

            val added = gattServer?.addService(service) ?: false
            if (added) {
                Log.d(TAG, "PingDart GATT Server initialized and service registered")
                onStatusChange(true, null)
                return true
            } else {
                onStatusChange(false, "Failed to add service to GATT server")
                return false
            }
        } catch (e: SecurityException) {
            onStatusChange(false, "Bluetooth permissions missing: ${e.message}")
            return false
        } catch (e: Exception) {
            onStatusChange(false, "Exception starting GATT server: ${e.message}")
            return false
        }
    }

    fun stop() {
        try {
            gattServer?.clearServices()
            gattServer?.close()
        } catch (e: Exception) {
            Log.e(TAG, "Error closing GATT server: ${e.message}")
        } finally {
            gattServer = null
            connectedDevices.clear()
            onStatusChange(false, null)
        }
    }

    fun isRunning(): Boolean = gattServer != null

    fun getConnectedDeviceCount(): Int = connectedDevices.size
}
