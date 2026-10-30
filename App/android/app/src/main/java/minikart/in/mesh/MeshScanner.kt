package minikart.`in`.mesh

import android.bluetooth.BluetoothAdapter
import android.bluetooth.BluetoothDevice
import android.bluetooth.le.BluetoothLeScanner
import android.bluetooth.le.ScanCallback
import android.bluetooth.le.ScanFilter
import android.bluetooth.le.ScanResult
import android.bluetooth.le.ScanSettings
import android.os.ParcelUuid
import java.util.concurrent.ConcurrentHashMap

class MeshScanner(
    private val bluetoothAdapter: BluetoothAdapter?,
    private val onPeerFound: (BluetoothDevice, String, Int) -> Unit,
    private val onStatusChange: (Boolean, String?) -> Unit
) {
    private var scanner: BluetoothLeScanner? = null
    private var isScanning = false
    private val discoveredPeers = ConcurrentHashMap<String, Long>()

    private val callback = object : ScanCallback() {
        override fun onScanResult(callbackType: Int, result: ScanResult?) {
            result ?: return
            val device = result.device ?: return
            val address = device.address ?: return
            val rssi = result.rssi

            // Throttle discovery events per address (once per 2 seconds)
            val now = System.currentTimeMillis()
            val lastSeen = discoveredPeers[address] ?: 0L
            if (now - lastSeen < 2000) return
            discoveredPeers[address] = now

            val pUuid = ParcelUuid(MeshAdvertiser.MESH_SERVICE_UUID)
            val serviceData = result.scanRecord?.getServiceData(pUuid)
            val peerDeviceId = if (serviceData != null && serviceData.isNotEmpty()) {
                String(serviceData, Charsets.UTF_8)
            } else {
                address
            }

            onPeerFound(device, peerDeviceId, rssi)
        }

        override fun onScanFailed(errorCode: Int) {
            isScanning = false
            onStatusChange(false, "Scan failed with error: $errorCode")
        }
    }

    fun start() {
        if (isScanning) return

        scanner = bluetoothAdapter?.bluetoothLeScanner
        if (scanner == null) {
            onStatusChange(false, "Bluetooth scanner not available")
            return
        }

        val filter = ScanFilter.Builder()
            .setServiceUuid(ParcelUuid(MeshAdvertiser.MESH_SERVICE_UUID))
            .build()

        val settings = ScanSettings.Builder()
            .setScanMode(ScanSettings.SCAN_MODE_LOW_LATENCY)
            .build()

        try {
            scanner?.startScan(listOf(filter), settings, callback)
            isScanning = true
            onStatusChange(true, null)
        } catch (e: SecurityException) {
            onStatusChange(false, "Missing Bluetooth Scan permission: ${e.message}")
        } catch (e: Exception) {
            onStatusChange(false, e.message)
        }
    }

    fun stop() {
        if (!isScanning) return
        try {
            scanner?.stopScan(callback)
        } catch (_: Exception) {}
        isScanning = false
        onStatusChange(false, null)
    }

    fun isRunning(): Boolean = isScanning
}
