package minikart.`in`.mesh

import org.json.JSONObject
import java.util.UUID

data class MeshPacket(
    val messageId: String = UUID.randomUUID().toString(),
    val senderId: String,
    val receiverId: String,
    val timestamp: Long = System.currentTimeMillis(),
    val payload: String,
    val ttl: Int = 10,
    val hopCount: Int = 0
) {
    fun toJson(): String {
        val obj = JSONObject()
        obj.put("messageId", messageId)
        obj.put("senderId", senderId)
        obj.put("receiverId", receiverId)
        obj.put("timestamp", timestamp)
        obj.put("payload", payload)
        obj.put("ttl", ttl)
        obj.put("hopCount", hopCount)
        return obj.toString()
    }

    companion object {
        fun fromJson(jsonStr: String): MeshPacket {
            val obj = JSONObject(jsonStr)
            return MeshPacket(
                messageId = obj.optString("messageId", UUID.randomUUID().toString()),
                senderId = obj.optString("senderId", "unknown"),
                receiverId = obj.optString("receiverId", "unknown"),
                timestamp = obj.optLong("timestamp", System.currentTimeMillis()),
                payload = obj.optString("payload", ""),
                ttl = obj.optInt("ttl", 10),
                hopCount = obj.optInt("hopCount", 0)
            )
        }
    }
}
