package minikart.`in`.mesh

import android.bluetooth.BluetoothAdapter
import android.bluetooth.le.AdvertiseCallback
import android.bluetooth.le.AdvertiseData
import android.bluetooth.le.AdvertiseSettings
import android.bluetooth.le.BluetoothLeAdvertiser
import android.os.ParcelUuid
import java.util.UUID

class MeshAdvertiser(
    private val bluetoothAdapter: BluetoothAdapter?,
    private val onStatusChange: (Boolean, String?) -> Unit
) {
    companion object {
        val MESH_SERVICE_UUID: UUID = MeshConstants.SERVICE_UUID
    }

    private var advertiser: BluetoothLeAdvertiser? = null
    private var isAdvertising = false

    private val callback = object : AdvertiseCallback() {
        override fun onStartSuccess(settingsInEffect: AdvertiseSettings?) {
            isAdvertising = true
            onStatusChange(true, null)
        }

        override fun onStartFailure(errorCode: Int) {
            isAdvertising = false
            val msg = when (errorCode) {
                ADVERTISE_FAILED_ALREADY_STARTED -> "Already started"
                ADVERTISE_FAILED_DATA_TOO_LARGE -> "Data too large"
                ADVERTISE_FAILED_FEATURE_UNSUPPORTED -> "Feature unsupported"
                ADVERTISE_FAILED_INTERNAL_ERROR -> "Internal error"
                ADVERTISE_FAILED_TOO_MANY_ADVERTISERS -> "Too many advertisers"
                else -> "Error code: $errorCode"
            }
            onStatusChange(false, msg)
        }
    }

    fun start(deviceId: String) {
        if (isAdvertising) return

        advertiser = bluetoothAdapter?.bluetoothLeAdvertiser
        if (advertiser == null) {
            onStatusChange(false, "BLE Advertising not supported on this device")
            return
        }

        val settings = AdvertiseSettings.Builder()
            .setAdvertiseMode(AdvertiseSettings.ADVERTISE_MODE_LOW_LATENCY)
            .setTxPowerLevel(AdvertiseSettings.ADVERTISE_TX_POWER_HIGH)
            .setConnectable(true)
            .setTimeout(0)
            .build()

        val pUuid = ParcelUuid(MESH_SERVICE_UUID)
        val data = AdvertiseData.Builder()
            .setIncludeDeviceName(false)
            .setIncludeTxPowerLevel(false)
            .addServiceUuid(pUuid)
            .addServiceData(pUuid, deviceId.take(8).toByteArray(Charsets.UTF_8))
            .build()

        try {
            advertiser?.startAdvertising(settings, data, callback)
        } catch (e: SecurityException) {
            onStatusChange(false, "Missing Bluetooth permission: ${e.message}")
        } catch (e: Exception) {
            onStatusChange(false, e.message)
        }
    }

    fun stop() {
        if (!isAdvertising) return
        try {
            advertiser?.stopAdvertising(callback)
        } catch (_: Exception) {}
        isAdvertising = false
        onStatusChange(false, null)
    }

    fun isRunning(): Boolean = isAdvertising
}
