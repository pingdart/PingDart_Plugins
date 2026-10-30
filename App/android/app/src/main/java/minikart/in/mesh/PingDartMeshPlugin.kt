package minikart.`in`.mesh

import android.Manifest
import android.annotation.SuppressLint
import android.bluetooth.BluetoothAdapter
import android.bluetooth.BluetoothDevice
import android.bluetooth.BluetoothManager
import android.content.Context
import android.os.Build
import android.util.Log
import com.getcapacitor.JSArray
import com.getcapacitor.JSObject
import com.getcapacitor.PermissionState
import com.getcapacitor.Plugin
import com.getcapacitor.PluginCall
import com.getcapacitor.PluginMethod
import com.getcapacitor.annotation.CapacitorPlugin
import com.getcapacitor.annotation.Permission
import com.getcapacitor.annotation.PermissionCallback
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap

@SuppressLint("MissingPermission")
@CapacitorPlugin(
    name = "PingDartMesh",
    permissions = [
        Permission(
            strings = [
                Manifest.permission.BLUETOOTH_SCAN,
                Manifest.permission.BLUETOOTH_ADVERTISE,
                Manifest.permission.BLUETOOTH_CONNECT
            ],
            alias = "bluetooth"
        )
    ]
)
class PingDartMeshPlugin : Plugin() {

    companion object {
        private const val TAG = "PingDartMesh:Plugin"
    }

    private var bluetoothAdapter: BluetoothAdapter? = null
    private var advertiser: MeshAdvertiser? = null
    private var scanner: MeshScanner? = null
    private var gattServer: GattServer? = null
    private var gattClient: GattClient? = null

    private var localDeviceId: String = "pd_" + UUID.randomUUID().toString().substring(0, 6)
    private val discoveredPeers = ConcurrentHashMap<String, DiscoveredPeerInfo>()

    data class DiscoveredPeerInfo(
        val device: BluetoothDevice,
        val peerDeviceId: String,
        val rssi: Int,
        val lastSeen: Long = System.currentTimeMillis()
    )

    override fun load() {
        super.load()
        val context = context ?: return
        val bm = context.getSystemService(Context.BLUETOOTH_SERVICE) as? BluetoothManager
        bluetoothAdapter = bm?.adapter

        gattClient = GattClient(context)

        gattServer = GattServer(
            context,
            onPacketReceived = { packet, device ->
                handlePacketReceived(packet, device)
            },
            onStatusChange = { isRunning, err ->
                notifyStatusChange()
            }
        )

        advertiser = MeshAdvertiser(bluetoothAdapter) { isRunning, err ->
            notifyStatusChange()
        }

        scanner = MeshScanner(
            bluetoothAdapter,
            onPeerFound = { device, peerDeviceId, rssi ->
                handlePeerFound(device, peerDeviceId, rssi)
            },
            onStatusChange = { isRunning, err ->
                notifyStatusChange()
            }
        )

        Log.d(TAG, "PingDartMeshPlugin initialized successfully")
    }

    @PluginMethod
    fun startMesh(call: PluginCall) {
        val autoRequestPerms = call.getBoolean("requestPermissions", false) ?: false
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            if (getPermissionState("bluetooth") != PermissionState.GRANTED) {
                if (autoRequestPerms) {
                    requestPermissionForAlias("bluetooth", call, "bluetoothPermsCallback")
                    return
                } else {
                    val ret = JSObject().apply {
                        put("success", false)
                        put("deviceId", localDeviceId)
                        put("isAdvertising", false)
                        put("isScanning", false)
                        put("error", "Bluetooth permissions not granted")
                    }
                    call.resolve(ret)
                    return
                }
            }
        }

        executeStartMesh(call)
    }

    @PermissionCallback
    private fun bluetoothPermsCallback(call: PluginCall) {
        if (getPermissionState("bluetooth") == PermissionState.GRANTED) {
            executeStartMesh(call)
        } else {
            call.reject("Bluetooth permissions were denied")
        }
    }

    private fun executeStartMesh(call: PluginCall) {
        val customDeviceId = call.getString("deviceId")
        if (!customDeviceId.isNullOrBlank()) {
            localDeviceId = customDeviceId
        }

        val adapter = bluetoothAdapter
        if (adapter == null || !adapter.isEnabled) {
            call.reject("Bluetooth is not enabled on this device")
            return
        }

        try {
            gattServer?.start()
            advertiser?.start(localDeviceId)
            scanner?.start()

            val ret = JSObject().apply {
                put("success", true)
                put("deviceId", localDeviceId)
                put("isAdvertising", advertiser?.isRunning() == true)
                put("isScanning", scanner?.isRunning() == true)
            }
            call.resolve(ret)
            notifyStatusChange()
        } catch (e: Exception) {
            call.reject("Failed to start mesh: ${e.message}", e)
        }
    }

    @PluginMethod
    fun stopMesh(call: PluginCall) {
        try {
            scanner?.stop()
            advertiser?.stop()
            gattServer?.stop()
            gattClient?.cancelAll()
            discoveredPeers.clear()

            val ret = JSObject().apply {
                put("success", true)
            }
            call.resolve(ret)
            notifyStatusChange()
        } catch (e: Exception) {
            call.reject("Failed to stop mesh: ${e.message}", e)
        }
    }

    @PluginMethod
    fun getMeshStatus(call: PluginCall) {
        val ret = JSObject().apply {
            put("deviceId", localDeviceId)
            put("isAdvertising", advertiser?.isRunning() == true)
            put("isScanning", scanner?.isRunning() == true)
            put("isServerRunning", gattServer?.isRunning() == true)
            put("connectedServerClients", gattServer?.getConnectedDeviceCount() ?: 0)
            put("discoveredPeersCount", discoveredPeers.size)
        }
        call.resolve(ret)
    }

    @PluginMethod
    fun getDiscoveredPeers(call: PluginCall) {
        val peersArray = JSArray()
        for ((address, info) in discoveredPeers) {
            val peerObj = JSObject().apply {
                put("address", address)
                put("deviceId", info.peerDeviceId)
                put("rssi", info.rssi)
                put("lastSeen", info.lastSeen)
            }
            peersArray.put(peerObj)
        }
        val ret = JSObject().apply {
            put("peers", peersArray)
        }
        call.resolve(ret)
    }

    @PluginMethod
    fun sendTestPacket(call: PluginCall) {
        val targetAddress = call.getString("targetAddress")
        if (targetAddress.isNullOrBlank()) {
            call.reject("targetAddress is required")
            return
        }

        val testPayload = call.getString("payload") ?: "SYNTHETIC_TEST_PACKET_PINGDART_BLE"
        val receiverId = call.getString("receiverId") ?: "peer_b"

        val packet = MeshPacket(
            senderId = localDeviceId,
            receiverId = receiverId,
            payload = testPayload
        )

        dispatchSendPacket(targetAddress, packet, call)
    }

    @PluginMethod
    fun sendPacket(call: PluginCall) {
        val targetAddress = call.getString("targetAddress")
        if (targetAddress.isNullOrBlank()) {
            call.reject("targetAddress is required")
            return
        }

        val payload = call.getString("payload")
        if (payload == null) {
            call.reject("payload is required")
            return
        }

        val receiverId = call.getString("receiverId") ?: "unknown"
        val messageId = call.getString("messageId") ?: UUID.randomUUID().toString()
        val ttl = call.getInt("ttl") ?: 10

        val packet = MeshPacket(
            messageId = messageId,
            senderId = localDeviceId,
            receiverId = receiverId,
            payload = payload,
            ttl = ttl
        )

        dispatchSendPacket(targetAddress, packet, call)
    }

    private fun dispatchSendPacket(targetAddress: String, packet: MeshPacket, call: PluginCall) {
        val adapter = bluetoothAdapter
        if (adapter == null) {
            call.reject("BluetoothAdapter not available")
            return
        }

        val device: BluetoothDevice? = discoveredPeers[targetAddress]?.device
            ?: discoveredPeers.values.find {
                it.peerDeviceId == targetAddress ||
                it.peerDeviceId.startsWith(targetAddress) ||
                targetAddress.startsWith(it.peerDeviceId)
            }?.device
            ?: (if (BluetoothAdapter.checkBluetoothAddress(targetAddress)) {
                try { adapter.getRemoteDevice(targetAddress) } catch (_: Exception) { null }
            } else null)
            ?: (if (discoveredPeers.size == 1) discoveredPeers.values.first().device else null)

        if (device == null) {
            call.reject("Target device not found in active discovery cache: $targetAddress")
            return
        }

        gattClient?.enqueueSend(device, packet) { success, errorMsg ->
            if (success) {
                val ret = JSObject().apply {
                    put("success", true)
                    put("messageId", packet.messageId)
                    put("targetAddress", targetAddress)
                }
                call.resolve(ret)

                // Also notify listeners
                val event = JSObject().apply {
                    put("messageId", packet.messageId)
                    put("targetAddress", targetAddress)
                    put("success", true)
                }
                notifyListeners("packetSent", event)
            } else {
                call.reject("Failed to send packet: $errorMsg")

                val event = JSObject().apply {
                    put("messageId", packet.messageId)
                    put("targetAddress", targetAddress)
                    put("success", false)
                    put("error", errorMsg)
                }
                notifyListeners("packetSent", event)
            }
        }
    }

    private fun handlePeerFound(device: BluetoothDevice, peerDeviceId: String, rssi: Int) {
        val address = device.address ?: return
        discoveredPeers[address] = DiscoveredPeerInfo(device, peerDeviceId, rssi)

        val event = JSObject().apply {
            put("address", address)
            put("deviceId", peerDeviceId)
            put("rssi", rssi)
        }
        notifyListeners("peerDiscovered", event)
    }

    private fun handlePacketReceived(packet: MeshPacket, device: BluetoothDevice) {
        val event = JSObject().apply {
            put("messageId", packet.messageId)
            put("senderId", packet.senderId)
            put("receiverId", packet.receiverId)
            put("timestamp", packet.timestamp)
            put("payload", packet.payload)
            put("ttl", packet.ttl)
            put("hopCount", packet.hopCount)
            put("senderAddress", device.address)
        }
        notifyListeners("packetReceived", event)
    }

    private fun notifyStatusChange() {
        val event = JSObject().apply {
            put("deviceId", localDeviceId)
            put("isAdvertising", advertiser?.isRunning() == true)
            put("isScanning", scanner?.isRunning() == true)
            put("isServerRunning", gattServer?.isRunning() == true)
        }
        notifyListeners("meshStatusChanged", event)
    }
}
