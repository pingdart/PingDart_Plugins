package minikart.`in`.mesh

import java.util.UUID

object MeshConstants {
    val SERVICE_UUID: UUID = UUID.fromString("0000FD68-0000-1000-8000-00805F9B34FB")
    val WRITE_CHAR_UUID: UUID = UUID.fromString("0000FD69-0000-1000-8000-00805F9B34FB")
    val NOTIFY_CHAR_UUID: UUID = UUID.fromString("0000FD6A-0000-1000-8000-00805F9B34FB")
    val CLIENT_CONFIG_DESCRIPTOR_UUID: UUID = UUID.fromString("00002902-0000-1000-8000-00805F9B34FB")

    const val DEFAULT_ATT_MTU = 23
    const val DESIRED_MTU = 512
    const val MAX_FRAGMENT_PAYLOAD_OFFSET = 12 // transferId (4) + index (2) + total (2) + crc32 (4)
}
