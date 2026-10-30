package minikart.`in`.mesh

import java.nio.ByteBuffer
import java.util.concurrent.ConcurrentHashMap
import java.util.zip.CRC32
import kotlin.random.Random

object MeshFragmenter {

    private const val HEADER_SIZE = 12 // 4 (transferId) + 2 (index) + 2 (total) + 4 (crc32)

    data class IncomingSession(
        val transferId: Int,
        val totalFragments: Short,
        val expectedCrc32: Long,
        val fragments: ConcurrentHashMap<Short, ByteArray> = ConcurrentHashMap(),
        val createdAt: Long = System.currentTimeMillis()
    )

    private val incomingSessions = ConcurrentHashMap<Int, IncomingSession>()

    /**
     * Splits data into fragments based on negotiated BLE MTU.
     * Safe chunk size = max(20, mtu - 3 (ATT) - 12 (Header))
     */
    fun fragment(data: ByteArray, negotiatedMtu: Int = 23): List<ByteArray> {
        val transferId = Random.nextInt()
        val effectivePayloadSize = (negotiatedMtu - 3 - HEADER_SIZE).coerceAtLeast(10)

        val crc = CRC32()
        crc.update(data)
        val crcValue = crc.value

        val totalFragments = ((data.size + effectivePayloadSize - 1) / effectivePayloadSize).toShort()
        val result = mutableListOf<ByteArray>()

        for (i in 0 until totalFragments) {
            val offset = i * effectivePayloadSize
            val length = (data.size - offset).coerceAtMost(effectivePayloadSize)
            val chunk = data.copyOfRange(offset, offset + length)

            val buffer = ByteBuffer.allocate(HEADER_SIZE + length)
            buffer.putInt(transferId)
            buffer.putShort(i.toShort())
            buffer.putShort(totalFragments)
            buffer.putInt(crcValue.toInt())
            buffer.put(chunk)

            result.add(buffer.array())
        }

        return result
    }

    /**
     * Reassembles an incoming fragment. Returns the complete ByteArray when all fragments
     * have been successfully received and CRC32 verified, or null if incomplete/corrupt.
     */
    fun processFragment(rawFragment: ByteArray): ByteArray? {
        if (rawFragment.size <= HEADER_SIZE) return null

        val buffer = ByteBuffer.wrap(rawFragment)
        val transferId = buffer.int
        val index = buffer.short
        val total = buffer.short
        val crcInt = buffer.int
        val expectedCrc = crcInt.toLong() and 0xFFFFFFFFL

        val chunk = ByteArray(rawFragment.size - HEADER_SIZE)
        buffer.get(chunk)

        // Clean up expired sessions (> 60 seconds old)
        val now = System.currentTimeMillis()
        incomingSessions.entries.removeIf { now - it.value.createdAt > 60_000 }

        val session = incomingSessions.computeIfAbsent(transferId) {
            IncomingSession(transferId, total, expectedCrc)
        }

        session.fragments[index] = chunk

        if (session.fragments.size == session.totalFragments.toInt()) {
            incomingSessions.remove(transferId)

            var totalSize = 0
            for (i in 0 until session.totalFragments) {
                val f = session.fragments[i.toShort()] ?: return null
                totalSize += f.size
            }

            val fullBuffer = ByteBuffer.allocate(totalSize)
            for (i in 0 until session.totalFragments) {
                val f = session.fragments[i.toShort()] ?: return null
                fullBuffer.put(f)
            }

            val assembled = fullBuffer.array()

            // Verify CRC32 checksum
            val verifyCrc = CRC32()
            verifyCrc.update(assembled)
            if (verifyCrc.value != session.expectedCrc32) {
                return null // Corrupted transmission
            }

            return assembled
        }

        return null
    }
}
