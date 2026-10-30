module.exports = [
"[project]/src/services/livekitApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "livekitApi",
    ()=>livekitApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
;
const livekitApi = {
    getToken: async (roomId, callType)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].post("/call/livekit-token", {
            roomId,
            callType
        });
        return response.data;
    }
};
}),
"[project]/src/services/meshService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeshService",
    ()=>MeshService,
    "default",
    ()=>__TURBOPACK__default__export__,
    "meshService",
    ()=>meshService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
;
// Register native plugin
const PingDartMesh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerPlugin"])('PingDartMesh');
class MeshService {
    static instance;
    activeListeners = [];
    constructor(){}
    static getInstance() {
        if (!MeshService.instance) {
            MeshService.instance = new MeshService();
        }
        return MeshService.instance;
    }
    isAvailable() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform() && (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform() === 'android' || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform() === 'ios');
    }
    async checkPermissions() {
        if (!this.isAvailable()) return false;
        try {
            const res = await PingDartMesh.checkPermissions();
            return res.bluetooth === 'granted';
        } catch  {
            return false;
        }
    }
    async requestPermissions() {
        if (!this.isAvailable()) return false;
        try {
            const res = await PingDartMesh.requestPermissions();
            return res.bluetooth === 'granted';
        } catch  {
            return false;
        }
    }
    async startMesh(deviceId, requestPermissions = false) {
        if (!this.isAvailable()) {
            return {
                success: false,
                deviceId: '',
                isAdvertising: false,
                isScanning: false
            };
        }
        return await PingDartMesh.startMesh(deviceId ? {
            deviceId,
            requestPermissions
        } : {
            requestPermissions
        });
    }
    async stopMesh() {
        if (!this.isAvailable()) return {
            success: false
        };
        return await PingDartMesh.stopMesh();
    }
    async getStatus() {
        if (!this.isAvailable()) return null;
        return await PingDartMesh.getMeshStatus();
    }
    async getDiscoveredPeers() {
        if (!this.isAvailable()) return [];
        const res = await PingDartMesh.getDiscoveredPeers();
        return res.peers || [];
    }
    /**
   * Sprint 1 Acceptance Testing Helper:
   * Sends a synthetic test packet to a peer's Bluetooth MAC address
   * without requiring any existing chat UI, Signal E2EE, or API connectivity.
   */ async sendTestPacket(targetAddress, receiverId = 'peer_test', payload = 'SYNTHETIC_TEST_PACKET_PINGDART_BLE') {
        if (!this.isAvailable()) {
            return {
                success: false,
                error: 'Mesh not available on this platform'
            };
        }
        return await PingDartMesh.sendTestPacket({
            targetAddress,
            receiverId,
            payload
        });
    }
    async sendPacket(targetAddress, receiverId, payload, messageId, ttl) {
        if (!this.isAvailable()) {
            return {
                success: false,
                error: 'Mesh not available on this platform'
            };
        }
        return await PingDartMesh.sendPacket({
            targetAddress,
            receiverId,
            payload,
            messageId,
            ttl
        });
    }
    async onPeerDiscovered(callback) {
        if (!this.isAvailable()) return null;
        const handle = await PingDartMesh.addListener('peerDiscovered', callback);
        this.activeListeners.push(handle);
        return handle;
    }
    async onPacketReceived(callback) {
        if (!this.isAvailable()) return null;
        const handle = await PingDartMesh.addListener('packetReceived', callback);
        this.activeListeners.push(handle);
        return handle;
    }
    async onPacketSent(callback) {
        if (!this.isAvailable()) return null;
        const handle = await PingDartMesh.addListener('packetSent', callback);
        this.activeListeners.push(handle);
        return handle;
    }
    async onStatusChanged(callback) {
        if (!this.isAvailable()) return null;
        const handle = await PingDartMesh.addListener('meshStatusChanged', callback);
        this.activeListeners.push(handle);
        return handle;
    }
    async removeAllListeners() {
        if (!this.isAvailable()) return;
        for (const handle of this.activeListeners){
            await handle.remove();
        }
        this.activeListeners = [];
        await PingDartMesh.removeAllListeners();
    }
}
const meshService = MeshService.getInstance();
const __TURBOPACK__default__export__ = meshService;
}),
"[project]/src/services/meshChatManager.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "meshChatManager",
    ()=>meshChatManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/meshService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/localChatDb.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioTones$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/audioTones.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
;
;
;
;
;
class MeshChatManager {
    static instance;
    initialized = false;
    currentUserId = null;
    processedPacketIds = new Set();
    constructor(){}
    static getInstance() {
        if (!MeshChatManager.instance) {
            MeshChatManager.instance = new MeshChatManager();
        }
        return MeshChatManager.instance;
    }
    isAvailable() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshService"].isAvailable();
    }
    cachedPeers = new Map();
    async hasPermissions() {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshService"].checkPermissions();
    }
    async requestPermissions() {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshService"].requestPermissions();
    }
    /**
   * Initializes the Mesh service and attaches incoming packet listeners.
   * By default, requestPermissions is false so cold-boot background initialization
   * never prompts the user with the system Nearby Devices dialog.
   */ async init(userId, requestPermissions = false) {
        if (!this.isAvailable()) return;
        const resolvedUserId = userId ? String(userId) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id ? String(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user.id) : null;
        this.currentUserId = resolvedUserId;
        if (this.initialized) {
            return;
        }
        try {
            const hasPerms = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshService"].checkPermissions();
            if (!hasPerms) {
                if (requestPermissions) {
                    const granted = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshService"].requestPermissions();
                    if (!granted) {
                        console.log('[MeshChatManager] Bluetooth permission request dismissed or denied.');
                        return;
                    }
                } else {
                    console.log('[MeshChatManager] Bluetooth permissions not granted. Skipping background auto-start to avoid prompting user.');
                    return;
                }
            }
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshService"].startMesh(resolvedUserId || undefined, requestPermissions);
            if (!res.success) {
                console.log('[MeshChatManager] Mesh engine did not start:', res.error || 'Permission or adapter issue');
                return;
            }
            console.log('[MeshChatManager] Mesh engine started:', res);
            this.initialized = true;
            // Attach peer discovery listener
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshService"].onPeerDiscovered((peer)=>{
                this.cachedPeers.set(peer.address, peer);
                console.log(`[MeshChatManager] 🔍 BLE Peer discovered: ${peer.address} (deviceId: ${peer.deviceId}, RSSI: ${peer.rssi}dBm)`);
            });
            // Attach packet listener
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshService"].onPacketReceived(async (packet)=>{
                await this.handleIncomingPacket(packet);
            });
            console.log('[MeshChatManager] Attached incoming packet and peer discovery listeners successfully');
        } catch (err) {
            console.warn('[MeshChatManager] Error initializing mesh engine:', err);
        }
    }
    async stop() {
        if (!this.isAvailable()) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshService"].stopMesh();
            this.initialized = false;
        } catch (err) {
            console.warn('[MeshChatManager] Error stopping mesh engine:', err);
        }
    }
    /**
   * Attempts to send an offline message via PingDart BLE Mesh.
   * Returns true if sent successfully over BLE, false otherwise.
   */ async sendOfflineMessage(options) {
        if (!this.isAvailable()) {
            return false;
        }
        const { chat, tempId, textToSend, msgText, payload, currentReplyTarget, replyToText, replyToSender, currentLinkPreview } = options;
        try {
            const pluginPeers = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshService"].getDiscoveredPeers();
            pluginPeers.forEach((p)=>this.cachedPeers.set(p.address, p));
            const peers = Array.from(this.cachedPeers.values());
            const targetUserIdStr = chat.otherUserId ? String(chat.otherUserId) : '';
            // Find the best peer to send to
            let targetPeer = undefined;
            if (targetUserIdStr) {
                // Look for exact deviceId match or prefix match (as advertiser advertises first 8 chars)
                targetPeer = peers.find((p)=>p.deviceId === targetUserIdStr || p.deviceId.startsWith(targetUserIdStr) || targetUserIdStr.startsWith(p.deviceId));
            }
            // If only 1 peer is discovered in range (typical direct 2-phone physical test), use that peer
            if (!targetPeer && peers.length === 1) {
                targetPeer = peers[0];
            }
            // Fallback: pick the peer with the highest signal strength (RSSI closest to 0)
            if (!targetPeer && peers.length > 0) {
                targetPeer = [
                    ...peers
                ].sort((a, b)=>b.rssi - a.rssi)[0];
            }
            const targetAddress = targetPeer ? targetPeer.address : targetUserIdStr;
            if (!targetAddress) {
                console.warn('[MeshChatManager] No discovered peers available for offline send');
                return false;
            }
            const currentAuthUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
            const myId = currentAuthUser?.id ? String(currentAuthUser.id) : this.currentUserId || 'me';
            const myName = currentAuthUser?.name || 'You';
            const meshPayload = JSON.stringify({
                type: 'chat_message',
                roomId: chat.id,
                messageId: String(tempId),
                senderId: myId,
                senderName: myName,
                receiverId: targetUserIdStr,
                text: textToSend,
                preview: msgText,
                createdAt: new Date().toISOString(),
                replyTo: currentReplyTarget ? {
                    id: currentReplyTarget.id,
                    text: replyToText,
                    sender: replyToSender
                } : null,
                linkPreview: currentLinkPreview || null,
                payload
            });
            console.log(`[MeshChatManager] Transmitting offline message over BLE to ${targetAddress} (receiver: ${targetUserIdStr})...`);
            const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshService"].sendPacket(targetAddress, targetUserIdStr || 'peer', meshPayload, String(tempId));
            if (result.success) {
                console.log(`[MeshChatManager] ✅ Offline message transmitted over BLE successfully (id: ${tempId})`);
                return true;
            } else {
                console.warn('[MeshChatManager] ⚠️ BLE packet transmission failed:', result.error);
                return false;
            }
        } catch (err) {
            console.warn('[MeshChatManager] Exception during offline BLE transmission:', err);
            return false;
        }
    }
    /**
   * Internal handler for incoming packets from GATT server.
   */ async handleIncomingPacket(packet) {
        if (!packet || !packet.payload) return;
        try {
            const data = JSON.parse(packet.payload);
            if (data.type === 'chat_message') {
                await this.handleIncomingChatMessage(data, packet);
            } else if (data.type === 'delivery_ack') {
                await this.handleIncomingDeliveryAck(data);
            } else if (data.type === 'read_ack') {
                await this.handleIncomingReadAck(data);
            }
        } catch (e) {
            console.warn('[MeshChatManager] Non-JSON or unsupported mesh packet received:', packet.payload);
        }
    }
    async handleIncomingChatMessage(data, packet) {
        const rawMsgId = data.messageId || data.id || packet.messageId;
        const dedupKey = `${data.roomId}:${rawMsgId}`;
        if (this.processedPacketIds.has(dedupKey)) {
            return;
        }
        this.processedPacketIds.add(dedupKey);
        if (this.processedPacketIds.size > 500) {
            const oldest = this.processedPacketIds.values().next().value;
            if (oldest) this.processedPacketIds.delete(oldest);
        }
        console.log('[MeshChatManager] 📥 Processing incoming offline chat message:', data);
        let rawText = data.text;
        let finalText = rawText;
        // Check for Signal E2EE ciphertext
        if (typeof rawText === 'string' && (rawText.includes('__e2ee') || rawText.includes('_e2ee')) && rawText.startsWith('{')) {
            try {
                const decrypted = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decryptMessage"](Number(data.senderId), rawText, false, data.roomId, rawMsgId);
                if (decrypted) {
                    try {
                        const parsed = JSON.parse(decrypted);
                        if (parsed && typeof parsed.text === 'string') {
                            finalText = parsed.text;
                        } else {
                            finalText = decrypted;
                        }
                    } catch  {
                        finalText = decrypted;
                    }
                }
            } catch (err) {
                console.warn('[MeshChatManager] Error decrypting incoming Signal mesh ciphertext:', err);
            }
        }
        // Resolve target room
        let targetRoomId = Number(data.roomId);
        try {
            const localRooms = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalRooms"]();
            const matchedRoom = localRooms.find((r)=>String(r.id) === String(data.roomId) || data.senderId && String(r.otherUserId) === String(data.senderId));
            if (matchedRoom) {
                targetRoomId = matchedRoom.id;
            }
        } catch (_) {}
        const now = new Date();
        const timeStr = now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
        const newMsgObj = {
            id: rawMsgId,
            roomId: targetRoomId,
            from: 'them',
            senderId: Number(data.senderId),
            senderName: data.senderName || 'Peer',
            text: finalText,
            type: data.type || 'text',
            data: {
                isMesh: true,
                ...data.payload || {},
                ...data.replyTo ? {
                    replyToId: data.replyTo.id,
                    replyToText: data.replyTo.text,
                    replyToSender: data.replyTo.sender
                } : {}
            },
            time: timeStr,
            createdAt: data.createdAt || now.toISOString(),
            status: 'delivered'
        };
        // Save to local IndexedDB/SQLite
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveLocalMessage"](targetRoomId, newMsgObj);
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateLocalRoomPreview"](targetRoomId, finalText, timeStr, false);
        } catch (dbErr) {
            console.warn('[MeshChatManager] Error persisting message to local storage:', dbErr);
        }
        // Dispatch real-time events to active UI components
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Play incoming message audio tone
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioTones$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playConversationTone"])('incoming');
        } catch (_) {}
        // Send delivery ACK back to sender over BLE if address is available
        if (packet.senderAddress && data.senderId) {
            const ackPayload = JSON.stringify({
                type: 'delivery_ack',
                messageId: rawMsgId,
                roomId: targetRoomId
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshService"].sendPacket(packet.senderAddress, String(data.senderId), ackPayload).catch(()=>{});
        }
    }
    async handleIncomingDeliveryAck(data) {
        const messageId = data.messageId;
        if (!messageId) return;
        console.log('[MeshChatManager] 📬 Received BLE delivery ACK for message:', messageId);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateLocalMessageStatus"](messageId, 'delivered');
        } catch (_) {}
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    async handleIncomingReadAck(data) {
        const roomId = data.roomId;
        if (!roomId) return;
        console.log('[MeshChatManager] 👁️ Received BLE read ACK for room:', roomId);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    /**
   * Transmits a read receipt over BLE Mesh to the peer for this room.
   */ async sendReadReceipt(roomId, targetUserId) {
        if (!this.isAvailable()) return;
        try {
            const peers = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshService"].getDiscoveredPeers();
            peers.forEach((p)=>this.cachedPeers.set(p.address, p));
            const targetUserIdStr = targetUserId ? String(targetUserId) : '';
            let targetPeer = targetUserIdStr ? Array.from(this.cachedPeers.values()).find((p)=>p.deviceId === targetUserIdStr || p.deviceId.startsWith(targetUserIdStr) || targetUserIdStr.startsWith(p.deviceId)) : undefined;
            if (!targetPeer && this.cachedPeers.size === 1) {
                targetPeer = Array.from(this.cachedPeers.values())[0];
            }
            if (!targetPeer && peers.length > 0) {
                targetPeer = [
                    ...peers
                ].sort((a, b)=>b.rssi - a.rssi)[0];
            }
            if (!targetPeer) {
                // No offline BLE peer found nearby — skip BLE transmission
                return;
            }
            const targetAddress = targetPeer.address;
            const currentAuthUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
            const myId = currentAuthUser?.id ? String(currentAuthUser.id) : this.currentUserId || 'me';
            const readPayload = JSON.stringify({
                type: 'read_ack',
                roomId: String(roomId),
                readerId: myId
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshService"].sendPacket(targetAddress, targetUserIdStr || 'peer', readPayload);
            console.log(`[MeshChatManager] 👁️ Sent BLE read receipt to ${targetAddress} for room ${roomId}`);
        } catch (err) {
            console.warn('[MeshChatManager] Error sending read receipt:', err);
        }
    }
}
const meshChatManager = MeshChatManager.getInstance();
const __TURBOPACK__default__export__ = meshChatManager;
}),
"[project]/src/services/incomingChatSync.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "syncIncomingChatHistory",
    ()=>syncIncomingChatHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/localChatDb.ts [app-ssr] (ecmascript)");
;
;
const activeSyncs = new Map();
async function syncIncomingChatHistory(roomId) {
    if (!roomId) return false;
    const existingSync = activeSyncs.get(roomId);
    if (existingSync) return existingSync;
    const sync = (async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].getMessages(roomId, 50);
            if (!response?.success || !Array.isArray(response.data) || response.data.length === 0) {
                return false;
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveLocalMessages"](roomId, response.data);
            return true;
        } catch (error) {
            console.warn(`[ChatSync] Failed to hydrate room ${roomId}:`, error);
            return false;
        } finally{
            activeSyncs.delete(roomId);
        }
    })();
    activeSyncs.set(roomId, sync);
    return sync;
}
}),
"[project]/src/services/contactSyncService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDevicePhoneContacts",
    ()=>getDevicePhoneContacts,
    "inviteContactToPingDart",
    ()=>inviteContactToPingDart,
    "syncDeviceContacts",
    ()=>syncDeviceContacts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$share$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/share/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
;
;
;
let isSyncing = false;
async function getDevicePhoneContacts() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
async function inviteContactToPingDart(contact) {
    const inviteText = `Hey ${contact.name}! Join me on PingDart to chat and call: https://pingdart.com`;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$share$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Share"].share({
                title: "Invite to PingDart",
                text: inviteText,
                url: "https://pingdart.com",
                dialogTitle: `Invite ${contact.name} to PingDart`
            });
            return;
        } catch  {
        // Fallback to SMS link
        }
    }
    if (contact.phone) {
        window.open(`sms:${contact.phone}?body=${encodeURIComponent(inviteText)}`, "_blank");
    } else if (contact.email) {
        window.open(`mailto:${contact.email}?subject=Join me on PingDart&body=${encodeURIComponent(inviteText)}`, "_blank");
    } else {
        try {
            await navigator.clipboard.writeText(inviteText);
        } catch  {}
    }
}
async function syncDeviceContacts() {
    if ("TURBOPACK compile-time truthy", 1) return {
        success: false,
        syncedCount: 0
    };
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/utils/devicePermissions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requestDevicePermissions",
    ()=>requestDevicePermissions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
;
async function requestDevicePermissions(type) {
    const platform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform();
    const isNative = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform();
    console.log(`[DevicePermissions] Checking permissions for type: ${type} on platform: ${platform} (isNative: ${isNative})`);
    // 1. Native Mobile Platform handling via Capacitor Camera Plugin
    if (isNative && type === 'video') {
        try {
            const { Camera } = await __turbopack_context__.A("[project]/node_modules/@capacitor/camera/dist/esm/index.js [app-ssr] (ecmascript, async loader)");
            if (Camera && typeof Camera.requestPermissions === 'function') {
                const check = await Camera.checkPermissions().catch(()=>null);
                if (check?.camera !== 'granted') {
                    const res = await Camera.requestPermissions();
                    if (res?.camera === 'granted') {
                        return {
                            granted: true,
                            platform
                        };
                    }
                } else {
                    return {
                        granted: true,
                        platform
                    };
                }
            }
        } catch (capErr) {
            console.warn('[DevicePermissions] Capacitor camera permission error:', capErr);
        }
    }
    // 2. Web / Browser / WebView getUserMedia permission check
    if ("undefined" === 'undefined' || !navigator?.mediaDevices) {
        return {
            granted: false,
            error: 'Media devices are not available in this environment.',
            platform
        };
    }
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/utils/audioOutput.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// PingDart — Production-Ready Audio Output & Speaker/Bluetooth Routing Utility
// Handles switching audio between Speaker, Bluetooth, and Default/Earpiece
// with browser fallbacks, auto-recovery on disconnect, and preference persistence.
// ============================================================
__turbopack_context__.s([
    "classifyAudioDevice",
    ()=>classifyAudioDevice,
    "getAvailableAudioOutputs",
    ()=>getAvailableAudioOutputs,
    "getSavedAudioOutputPreference",
    ()=>getSavedAudioOutputPreference,
    "handleDeviceDisconnectRecovery",
    ()=>handleDeviceDisconnectRecovery,
    "isSetSinkIdSupported",
    ()=>isSetSinkIdSupported,
    "routeAudioOutput",
    ()=>routeAudioOutput,
    "routeAudioToDefault",
    ()=>routeAudioToDefault,
    "saveAudioOutputPreference",
    ()=>saveAudioOutputPreference,
    "toggleSpeakerphone",
    ()=>toggleSpeakerphone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
;
const PREFERRED_OUTPUT_KEY = 'pingdart_preferred_audio_output';
// Comprehensive keywords for classifying device labels
const BLUETOOTH_KEYWORDS = [
    'airpods',
    'buds',
    'bluetooth',
    'headset',
    'wireless',
    'earbuds',
    'freebuds',
    'pixel buds',
    'galaxy buds',
    'wh-',
    'wf-',
    'bose',
    'sony',
    'jabra',
    'beats',
    'hands-free',
    'neckband',
    'audio device'
];
const SPEAKER_KEYWORDS = [
    'speaker',
    'loudspeaker',
    'internal speaker',
    'built-in speaker',
    'external speaker',
    'audioout'
];
const EARPIECE_KEYWORDS = [
    'earpiece',
    'receiver',
    'handset',
    'phone'
];
function isSetSinkIdSupported() {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
function classifyAudioDevice(label, isDefault) {
    const lower = (label || '').toLowerCase();
    for (const kw of BLUETOOTH_KEYWORDS){
        if (lower.includes(kw)) return 'bluetooth';
    }
    for (const kw of SPEAKER_KEYWORDS){
        if (lower.includes(kw)) return 'speaker';
    }
    if (lower.includes('headphone') || lower.includes('earphone')) {
        return 'headphones';
    }
    for (const kw of EARPIECE_KEYWORDS){
        if (lower.includes(kw)) return 'earpiece';
    }
    return isDefault ? 'default' : 'speaker';
}
async function getAvailableAudioOutputs() {
    if ("undefined" === 'undefined' || !navigator?.mediaDevices?.enumerateDevices) {
        return [];
    }
    //TURBOPACK unreachable
    ;
}
async function routeAudioOutput(element, room, deviceId = 'default') {
    let liveKitRouted = false;
    let elementRouted = false;
    // 1. Route on LiveKit Room if available
    if (room && typeof room.switchActiveDevice === 'function') {
        try {
            await room.switchActiveDevice('audiooutput', deviceId);
            liveKitRouted = true;
        } catch (roomErr) {
            console.warn('[AudioOutput] LiveKit switchActiveDevice warning:', roomErr?.message);
        }
    }
    // 2. Route on all passed HTMLAudioElements
    const elements = Array.isArray(element) ? element : [
        element
    ];
    const setSinkIdSupported = isSetSinkIdSupported();
    for (const el of elements){
        if (!el) continue;
        if (setSinkIdSupported && typeof el.setSinkId === 'function') {
            try {
                await el.setSinkId(deviceId);
                elementRouted = true;
            } catch (sinkErr) {
                console.warn('[AudioOutput] HTMLAudioElement.setSinkId warning:', sinkErr?.message);
            }
        } else {
            // Browser fallback (iOS Safari, older WebViews)
            // Audio follows OS-level routing or default output
            elementRouted = true;
        }
    }
    // Save successful preference
    if (deviceId && deviceId !== 'default') {
        saveAudioOutputPreference(deviceId);
    }
    return liveKitRouted || elementRouted;
}
async function routeAudioToDefault(element) {
    return await routeAudioOutput(element, null, 'default');
}
function getSavedAudioOutputPreference() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
function saveAudioOutputPreference(deviceId) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
async function handleDeviceDisconnectRecovery(activeDeviceId, elements, room) {
    if (!activeDeviceId || activeDeviceId === 'default') {
        return {
            recovered: false,
            newDeviceLabel: 'Default'
        };
    }
    const currentOutputs = await getAvailableAudioOutputs();
    const stillExists = currentOutputs.some((d)=>d.deviceId === activeDeviceId);
    if (!stillExists) {
        console.warn(`[AudioOutput] ⚠️ Active device ${activeDeviceId} was disconnected. Auto-recovering to default output.`);
        await routeAudioOutput(elements, room, 'default');
        return {
            recovered: true,
            newDeviceLabel: 'Default (Auto-recovered)'
        };
    }
    return {
        recovered: false,
        newDeviceLabel: activeDeviceId
    };
}
async function toggleSpeakerphone(element, room, currentlyOnSpeaker = false) {
    const isNative = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform();
    const availableDevices = await getAvailableAudioOutputs();
    // If currently on speaker -> Switch back to Bluetooth or Default / Earpiece
    if (currentlyOnSpeaker) {
        const bluetoothDevice = availableDevices.find((d)=>d.type === 'bluetooth');
        const targetDevice = bluetoothDevice || availableDevices.find((d)=>d.type === 'earpiece') || availableDevices.find((d)=>d.isDefault);
        const targetId = targetDevice?.deviceId || 'default';
        const label = targetDevice?.label || (bluetoothDevice ? 'Bluetooth Headset' : 'Default Output');
        await routeAudioOutput(element, room, targetId);
        return {
            success: true,
            isSpeaker: false,
            activeDeviceLabel: label,
            activeDeviceId: targetId
        };
    }
    // If NOT on speaker -> Switch to Speaker
    const speakerDevice = availableDevices.find((d)=>d.type === 'speaker' && !d.isDefault) || availableDevices.find((d)=>d.type === 'speaker');
    if (speakerDevice) {
        await routeAudioOutput(element, room, speakerDevice.deviceId);
        return {
            success: true,
            isSpeaker: true,
            activeDeviceLabel: speakerDevice.label || 'Speaker',
            activeDeviceId: speakerDevice.deviceId
        };
    }
    // If browser supports navigator.mediaDevices.selectAudioOutput, prompt device selection
    if (typeof navigator.mediaDevices?.selectAudioOutput === 'function') {
        try {
            const selected = await navigator.mediaDevices.selectAudioOutput();
            if (selected?.deviceId) {
                await routeAudioOutput(element, room, selected.deviceId);
                const isSpk = classifyAudioDevice(selected.label, false) === 'speaker';
                return {
                    success: true,
                    isSpeaker: isSpk,
                    activeDeviceLabel: selected.label || 'Selected Output',
                    activeDeviceId: selected.deviceId
                };
            }
        } catch (_) {}
    }
    // Fallback: Attempt routing to 'default' or available output
    const supported = await routeAudioOutput(element, room, 'default');
    if (supported || isNative) {
        return {
            success: true,
            isSpeaker: true,
            activeDeviceLabel: 'Speaker (Default)',
            activeDeviceId: 'default'
        };
    }
    return {
        success: false,
        isSpeaker: false,
        activeDeviceLabel: 'Default',
        activeDeviceId: 'default',
        error: 'Audio output switching is not supported by this browser. Bluetooth audio follows your system default output.'
    };
}
}),
"[project]/src/utils/userPrivacy.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * User Privacy & Protected Internal Email Visibility
 * Compliant with PingDart PRD Requirement 13
 *
 * Hidden Domains:
 * - @pingdart.com : Main system domain (protected on public profiles, search, radar)
 * - @meddylist.com : Demo domain (visible ONLY to main admin / superadmin)
 */ __turbopack_context__.s([
    "DEMO_DOMAIN",
    ()=>DEMO_DOMAIN,
    "INTERNAL_SYSTEM_DOMAIN",
    ()=>INTERNAL_SYSTEM_DOMAIN,
    "formatDisplayEmail",
    ()=>formatDisplayEmail,
    "isProtectedInternalEmail",
    ()=>isProtectedInternalEmail
]);
const INTERNAL_SYSTEM_DOMAIN = "pingdart.com";
const DEMO_DOMAIN = "meddylist.com";
function isProtectedInternalEmail(email, viewerRole, isSelf = false) {
    if (!email || typeof email !== "string") return false;
    if (isSelf) return false; // Users can always see their own email
    const lower = email.trim().toLowerCase();
    const isSuperAdmin = viewerRole === "superadmin";
    // @meddylist.com: Demo domain — visible ONLY to main superadmin
    if (lower.endsWith(`@${DEMO_DOMAIN}`)) {
        return !isSuperAdmin;
    }
    // @pingdart.com: Main system domain — always protected on other user profiles
    if (lower.endsWith(`@${INTERNAL_SYSTEM_DOMAIN}`)) {
        return true;
    }
    return false;
}
function formatDisplayEmail(email, viewerRole, isSelf = false, fallbackText = "Email Hidden") {
    if (!email) return fallbackText;
    if (isProtectedInternalEmail(email, viewerRole, isSelf)) {
        return fallbackText;
    }
    return email;
}
}),
"[project]/src/utils/audioTones.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Helper to play Conversation Tones (In-Chat incoming/outgoing message sounds)
 * Respects user's notification_settings (conversationTones setting)
 */ __turbopack_context__.s([
    "playConversationTone",
    ()=>playConversationTone
]);
function playConversationTone(type = 'incoming') {
    try {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        // Check user setting from localStorage
        const saved = undefined;
        const AudioCtx = undefined;
        const ctx = undefined;
    } catch (err) {
        console.warn("[audioTones] Could not play conversation tone:", err);
    }
}
}),
"[project]/src/utils/pinnedMessages.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPinnedMessages",
    ()=>getPinnedMessages,
    "isMessagePinned",
    ()=>isMessagePinned,
    "isMessagePinnedByMe",
    ()=>isMessagePinnedByMe,
    "pinMessage",
    ()=>pinMessage,
    "togglePinMessage",
    ()=>togglePinMessage,
    "unpinMessage",
    ()=>unpinMessage
]);
function getPinnedMessages(roomId) {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
function isMessagePinned(roomId, msgId) {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
    const list = undefined;
}
function isMessagePinnedByMe(roomId, msgId, userId, userName) {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
    const list = undefined;
    const match = undefined;
}
function pinMessage(roomId, msg, durationDays = 7, pinnedByName) {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
function unpinMessage(roomId, msgId) {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
function togglePinMessage(roomId, msg, durationDays = 7) {
    if (isMessagePinned(roomId, msg.id)) {
        unpinMessage(roomId, msg.id);
        return false;
    } else {
        pinMessage(roomId, msg, durationDays);
        return true;
    }
}
}),
"[project]/src/lib/linkPreview.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractClientLinkMetadata",
    ()=>extractClientLinkMetadata,
    "fetchLinkPreview",
    ()=>fetchLinkPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
;
const previewCache = new Map();
function extractClientLinkMetadata(url) {
    if (!url || typeof url !== 'string') return null;
    const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
    if (ytMatch && ytMatch[1]) {
        const videoId = ytMatch[1];
        return {
            url,
            title: 'YouTube Video',
            description: 'Watch video on YouTube',
            image: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
            domain: 'youtube.com',
            siteName: 'YouTube',
            videoId
        };
    }
    return null;
}
async function fetchLinkPreview(url) {
    if (!url || typeof url !== 'string') return null;
    const cleanUrl = url.trim();
    if (previewCache.has(cleanUrl)) {
        return previewCache.get(cleanUrl);
    }
    // 1. Instant client-side check for YouTube
    const clientMeta = extractClientLinkMetadata(cleanUrl);
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/chat/link-preview`, {
            params: {
                url: cleanUrl
            }
        });
        if (res.data?.success && res.data?.data) {
            const data = {
                ...clientMeta,
                ...res.data.data
            };
            previewCache.set(cleanUrl, data);
            return data;
        }
    } catch (e) {
        console.warn('[LinkPreview] Failed to fetch server preview:', e);
    }
    if (clientMeta) {
        previewCache.set(cleanUrl, clientMeta);
        return clientMeta;
    }
    // Fallback domain preview
    try {
        const parsed = new URL(cleanUrl.startsWith('http') ? cleanUrl : `https://${cleanUrl}`);
        const fallbackData = {
            url: cleanUrl,
            title: parsed.hostname.replace(/^www\./, ''),
            domain: parsed.hostname.replace(/^www\./, '')
        };
        previewCache.set(cleanUrl, fallbackData);
        return fallbackData;
    } catch  {
        return null;
    }
}
}),
"[project]/src/lib/db/outboxWorker.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * outboxWorker.ts
 * Enterprise-grade background worker that drains the IndexedDB outboxQueue with:
 * - Multi-tab lock protection (status: 'sending' & Web Locks API)
 * - Server-side idempotency (clientMessageId)
 * - Exponential backoff retry scheduling
 * - TempId -> ServerId reconciliation
 */ __turbopack_context__.s([
    "outboxWorker",
    ()=>outboxWorker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/localChatDb.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-ssr] (ecmascript)");
;
;
class OutboxWorker {
    isProcessing = false;
    isListening = false;
    init() {
        if ("undefined" === 'undefined' || this.isListening) return;
        //TURBOPACK unreachable
        ;
    }
    async processQueue() {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }
}
const outboxWorker = new OutboxWorker();
}),
"[project]/src/core/module-loader/moduleRegistry.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "moduleRegistry",
    ()=>moduleRegistry
]);
class ModuleRegistry {
    modules = new Map();
    enabledModuleIds = new Set();
    isServerSynced = false;
    /**
   * Register a module manifest into the platform registry
   */ register(manifest) {
        if (!manifest || !manifest.id) {
            console.error('[ModuleRegistry] Invalid manifest attempted to register', manifest);
            return;
        }
        const id = manifest.id.toLowerCase();
        this.modules.set(id, manifest);
        // By default, enable registered modules until server hydration syncs workspace preferences
        if (!this.isServerSynced) {
            this.enabledModuleIds.add(id);
        }
    }
    get(id) {
        return this.modules.get(id.toLowerCase());
    }
    has(id) {
        return this.modules.has(id.toLowerCase());
    }
    getAll() {
        return Array.from(this.modules.values());
    }
    /**
   * Returns only modules that are active/enabled in the current workspace
   */ getActiveModules() {
        return this.getAll().filter((m)=>this.isEnabled(m.id));
    }
    isEnabled(id) {
        return this.enabledModuleIds.has(id.toLowerCase());
    }
    /**
   * Dynamically sync active module states from backend
   */ syncWithServer(activeIds) {
        this.enabledModuleIds = new Set(activeIds.map((id)=>id.toLowerCase()));
        this.isServerSynced = true;
    }
    /**
   * Client-side toggle for instant UI reactivity
   */ toggleModuleState(id, enabled) {
        const norm = id.toLowerCase();
        const shouldEnable = enabled !== undefined ? enabled : !this.enabledModuleIds.has(norm);
        if (shouldEnable) {
            this.enabledModuleIds.add(norm);
        } else {
            this.enabledModuleIds.delete(norm);
        }
    }
    /**
   * Query all widgets registered across active workspace modules for a specific zone
   */ getWidgetsByZone(zone) {
        const active = this.getActiveModules();
        const widgets = [];
        active.forEach((manifest)=>{
            if (Array.isArray(manifest.widgets)) {
                manifest.widgets.forEach((w)=>{
                    if (w.zone === zone) {
                        widgets.push(w);
                    }
                });
            }
        });
        return widgets;
    }
}
const moduleRegistry = new ModuleRegistry();
const __TURBOPACK__default__export__ = moduleRegistry;
}),
];

//# sourceMappingURL=src_6810ad28._.js.map