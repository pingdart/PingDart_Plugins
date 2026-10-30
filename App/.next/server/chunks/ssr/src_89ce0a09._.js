module.exports = [
"[project]/src/notifications/notificationChannels.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// PingDart — Notification Channels & Action Types
// Configures Android FCM notification channels and iOS action types
// ============================================================
__turbopack_context__.s([
    "setupNotificationActionTypes",
    ()=>setupNotificationActionTypes,
    "setupNotificationChannels",
    ()=>setupNotificationChannels
]);
async function setupNotificationChannels() {
    try {
        const { PushNotifications } = await __turbopack_context__.A("[project]/node_modules/@capacitor/push-notifications/dist/esm/index.js [app-ssr] (ecmascript, async loader)");
        await PushNotifications.createChannel({
            id: "chat_notifications",
            name: "Chat Messages",
            description: "Notifications for incoming chat messages",
            importance: 5,
            visibility: 1,
            vibration: true,
            lights: true
        });
    } catch (e) {
        console.warn("[FCM] Channel creation warning:", e);
    }
}
async function setupNotificationActionTypes() {
    try {
        const { LocalNotifications } = await __turbopack_context__.A("[project]/node_modules/@capacitor/local-notifications/dist/esm/index.js [app-ssr] (ecmascript, async loader)");
        await LocalNotifications.registerActionTypes({
            types: [
                {
                    id: "CHAT_MESSAGE_ACTIONS",
                    actions: [
                        {
                            id: "reply",
                            title: "Reply",
                            input: true
                        },
                        {
                            id: "mark_read",
                            title: "Mark as read"
                        },
                        {
                            id: "mute",
                            title: "Mute"
                        }
                    ]
                }
            ]
        });
    } catch (e) {
        console.warn("[FCM] LocalNotifications action types registration warning:", e);
    }
}
}),
"[project]/src/notifications/offlineReplyQueue.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// PingDart — Offline Quick-Reply Queue
// Stores and flushes replies queued while device is offline
// ============================================================
__turbopack_context__.s([
    "OFFLINE_REPLY_QUEUE_KEY",
    ()=>OFFLINE_REPLY_QUEUE_KEY,
    "enqueueOfflineQuickReply",
    ()=>enqueueOfflineQuickReply,
    "flushOfflineQuickReplies",
    ()=>flushOfflineQuickReplies
]);
const OFFLINE_REPLY_QUEUE_KEY = "ping_offline_quick_replies";
function enqueueOfflineQuickReply(roomId, text) {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
async function flushOfflineQuickReplies() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
// Auto-flush when window goes back online
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
}),
"[project]/src/lib/db/localChatDb.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * localChatDb.ts
 * Enterprise-grade client-side IndexedDB database for PingDart Chat (WhatsApp/Telegram Architecture).
 * Features:
 *  - 0ms instant local rendering
 *  - Offline Outbox Queue with exponential backoff & multi-tab locking
 *  - Idempotency & TempId -> ServerId reconciliation
 *  - Native Blob media storage
 *  - Offline full-text search
 *  - Storage retention policy
 */ __turbopack_context__.s([
    "clearLocalRoomMessages",
    ()=>clearLocalRoomMessages,
    "deleteLocalMessage",
    ()=>deleteLocalMessage,
    "dequeueOutbox",
    ()=>dequeueOutbox,
    "enqueueOutbox",
    ()=>enqueueOutbox,
    "getChatDb",
    ()=>getChatDb,
    "getGlobalSyncMeta",
    ()=>getGlobalSyncMeta,
    "getLocalMedia",
    ()=>getLocalMedia,
    "getLocalMessages",
    ()=>getLocalMessages,
    "getLocalRooms",
    ()=>getLocalRooms,
    "getLocalStatuses",
    ()=>getLocalStatuses,
    "getPendingOutbox",
    ()=>getPendingOutbox,
    "getSyncMeta",
    ()=>getSyncMeta,
    "incrementOutboxRetry",
    ()=>incrementOutboxRetry,
    "lockOutboxItem",
    ()=>lockOutboxItem,
    "pruneOldMessages",
    ()=>pruneOldMessages,
    "reconcileMessageId",
    ()=>reconcileMessageId,
    "saveGlobalSyncMeta",
    ()=>saveGlobalSyncMeta,
    "saveLocalMedia",
    ()=>saveLocalMedia,
    "saveLocalMessage",
    ()=>saveLocalMessage,
    "saveLocalMessages",
    ()=>saveLocalMessages,
    "saveLocalRooms",
    ()=>saveLocalRooms,
    "saveLocalStatuses",
    ()=>saveLocalStatuses,
    "saveSyncMeta",
    ()=>saveSyncMeta,
    "searchLocalMessages",
    ()=>searchLocalMessages,
    "updateLocalMessageStatus",
    ()=>updateLocalMessageStatus,
    "updateLocalRoomPreview",
    ()=>updateLocalRoomPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/idb/build/index.js [app-ssr] (ecmascript)");
;
const DB_NAME = 'pingdart_local_chat_db';
const DB_VERSION = 3; // v3: normalized 7-store schema & room_seq indexing
// Exponential backoff delays: 5s, 30s, 2m, 10m, 1h
const RETRY_DELAYS = [
    5000,
    30000,
    120000,
    600000,
    3600000
];
function getCurrentUserId() {
    if ("TURBOPACK compile-time truthy", 1) return 'guest';
    //TURBOPACK unreachable
    ;
}
const dbPromiseMap = new Map();
function getChatDb() {
    if ("TURBOPACK compile-time truthy", 1) {
        return Promise.reject(new Error('IndexedDB is only available in browser environment'));
    }
    //TURBOPACK unreachable
    ;
    const userId = undefined;
    const dbName = undefined;
}
async function getLocalMessages(roomId, beforeTimestamp, limit = 50) {
    try {
        const db = await getChatDb();
        const range = beforeTimestamp ? IDBKeyRange.bound([
            roomId,
            ''
        ], [
            roomId,
            beforeTimestamp
        ], false, true) : IDBKeyRange.bound([
            roomId,
            ''
        ], [
            roomId,
            '\uffff'
        ], false, false);
        const tx = db.transaction('messages', 'readonly');
        const index = tx.store.index('room_created');
        const results = [];
        let cursor = await index.openCursor(range, 'prev');
        while(cursor && results.length < limit){
            results.push(cursor.value);
            cursor = await cursor.continue();
        }
        return results.reverse();
    } catch (err) {
        console.warn('[LocalChatDB] getLocalMessages fallback error:', err);
        return [];
    }
}
async function saveLocalMessage(roomId, msg) {
    try {
        const db = await getChatDb();
        // Version-aware upsert: only overwrite if incoming version is newer
        const existing = await db.get('messages', String(msg.id));
        if (existing && (existing.version ?? 1) > (msg.version ?? 1)) return;
        const cleanMsg = {
            id: String(msg.id),
            roomId: Number(roomId),
            senderId: msg.senderId ? Number(msg.senderId) : undefined,
            senderName: msg.senderName,
            from: msg.from || (msg.senderId ? 'them' : 'me'),
            text: msg.text || '',
            type: msg.type || 'text',
            data: msg.data || null,
            status: msg.status || 'sent',
            time: msg.time || new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }),
            createdAt: msg.createdAt ? new Date(msg.createdAt).toISOString() : new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            isDeleted: !!msg.isDeleted,
            version: msg.version ?? 1,
            roomSeq: msg.roomSeq ?? 0,
            globalSeq: msg.globalSeq ?? 0,
            replyTo: msg.replyTo,
            replyToText: msg.replyToText,
            replyToSender: msg.replyToSender,
            linkPreview: msg.linkPreview,
            clientMessageId: msg.clientMessageId
        };
        await db.put('messages', cleanMsg);
    } catch (err) {
        console.warn('[LocalChatDB] saveLocalMessage error:', err);
    }
}
async function saveLocalMessages(roomId, messages) {
    if (!messages || messages.length === 0) return;
    try {
        const db = await getChatDb();
        const tx = db.transaction('messages', 'readwrite');
        const store = tx.store;
        for (const msg of messages){
            // Preserve the explicit 'from' field set by the API processor — do NOT guess from senderId
            const fromVal = msg.from === 'me' ? 'me' : msg.from === 'system' ? 'system' : 'them';
            const cleanMsg = {
                id: String(msg.id),
                roomId: Number(roomId),
                senderId: msg.senderId ? Number(msg.senderId) : undefined,
                senderName: msg.senderName,
                from: fromVal,
                text: msg.text || '',
                type: msg.type || 'text',
                data: msg.data || null,
                // Don't overwrite a 'sending'/'failed' status with a blank fallback
                status: msg.status && msg.status !== 'sending' ? msg.status : 'sent',
                time: msg.time || new Date().toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                }),
                createdAt: msg.createdAt ? new Date(msg.createdAt).toISOString() : new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                isDeleted: !!msg.isDeleted,
                version: msg.version ?? 1,
                roomSeq: msg.roomSeq ?? 0,
                globalSeq: msg.globalSeq ?? 0,
                replyTo: msg.replyTo,
                replyToText: msg.replyToText,
                replyToSender: msg.replyToSender,
                linkPreview: msg.linkPreview,
                clientMessageId: msg.clientMessageId
            };
            store.put(cleanMsg);
        }
        await tx.done;
    } catch (err) {
        console.warn('[LocalChatDB] saveLocalMessages batch error:', err);
    }
}
async function reconcileMessageId(roomId, tempId, serverId, status = 'sent') {
    try {
        const db = await getChatDb();
        const oldKey = String(tempId);
        const newKey = String(serverId);
        const oldMsg = await db.get('messages', oldKey);
        if (oldMsg) {
            const updated = {
                ...oldMsg,
                id: newKey,
                clientMessageId: oldKey,
                status,
                updatedAt: new Date().toISOString()
            };
            const tx = db.transaction('messages', 'readwrite');
            await tx.store.delete(oldKey);
            await tx.store.put(updated);
            await tx.done;
        }
    } catch (err) {
        console.warn('[LocalChatDB] reconcileMessageId error:', err);
    }
}
async function updateLocalMessageStatus(messageId, status) {
    try {
        const db = await getChatDb();
        const msg = await db.get('messages', String(messageId));
        if (msg) {
            msg.status = status;
            msg.updatedAt = new Date().toISOString();
            await db.put('messages', msg);
        }
    } catch (err) {
        console.warn('[LocalChatDB] updateLocalMessageStatus error:', err);
    }
}
async function deleteLocalMessage(messageId, scope = 'all') {
    try {
        const db = await getChatDb();
        const key = String(messageId);
        if (scope === 'all') {
            const msg = await db.get('messages', key);
            if (msg) {
                msg.isDeleted = true;
                msg.text = '🚫 This message was deleted';
                msg.type = 'deleted';
                msg.data = null;
                msg.updatedAt = new Date().toISOString();
                await db.put('messages', msg);
            }
        } else {
            await db.delete('messages', key);
        }
    } catch (err) {
        console.warn('[LocalChatDB] deleteLocalMessage error:', err);
    }
}
async function clearLocalRoomMessages(roomId) {
    try {
        const db = await getChatDb();
        const tx = db.transaction('messages', 'readwrite');
        const index = tx.store.index('roomId');
        for (const targetId of [
            Number(roomId),
            String(roomId)
        ]){
            try {
                let cursor = await index.openCursor(IDBKeyRange.only(targetId));
                while(cursor){
                    await cursor.delete();
                    cursor = await cursor.continue();
                }
            } catch (_) {}
        }
        await tx.done;
    } catch (err) {
        console.warn('[LocalChatDB] clearLocalRoomMessages error:', err);
    }
}
async function searchLocalMessages(query, roomId, limit = 50) {
    if (!query || !query.trim()) return [];
    try {
        const db = await getChatDb();
        const cleanQuery = query.toLowerCase().trim();
        const allMsgs = roomId ? await db.getAllFromIndex('messages', 'roomId', Number(roomId)) : await db.getAll('messages');
        const matches = allMsgs.filter((m)=>{
            if (m.isDeleted || m.type === 'deleted') return false;
            return typeof m.text === 'string' && m.text.toLowerCase().includes(cleanQuery);
        });
        // Sort descending by time
        matches.sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        return matches.slice(0, limit);
    } catch (err) {
        console.warn('[LocalChatDB] searchLocalMessages error:', err);
        return [];
    }
}
async function getLocalRooms() {
    try {
        const db = await getChatDb();
        const rooms = await db.getAll('rooms');
        return rooms.map((r)=>({
                ...r,
                isOnline: false
            })).sort((a, b)=>{
            const tA = a.lastMessageTimestamp ? new Date(a.lastMessageTimestamp).getTime() : 0;
            const tB = b.lastMessageTimestamp ? new Date(b.lastMessageTimestamp).getTime() : 0;
            return tB - tA;
        });
    } catch (err) {
        console.warn('[LocalChatDB] getLocalRooms error:', err);
        return [];
    }
}
async function saveLocalRooms(rooms) {
    if (!rooms || rooms.length === 0) return;
    try {
        const db = await getChatDb();
        const tx = db.transaction('rooms', 'readwrite');
        for (const r of rooms){
            if (r && r.id) {
                tx.store.put({
                    id: Number(r.id),
                    name: r.name || r.title || r.subject,
                    sender: r.sender || r.name || r.title || r.subject || 'User',
                    preview: r.preview || '',
                    time: r.time || '',
                    unread: !!r.unread,
                    unreadCount: Number(r.unreadCount) || 0,
                    lastMessageTimestamp: r.lastMessageTimestamp || new Date(),
                    lastMessageId: r.lastMessageId,
                    lastRoomSeq: Number(r.lastRoomSeq) || 0,
                    avatar: r.avatar || r.avatarUrl,
                    avatarUrl: r.avatarUrl || r.avatar,
                    isOnline: !!r.isOnline,
                    isMuted: !!r.isMuted,
                    isLocked: !!r.isLocked,
                    isPinned: !!r.isPinned,
                    isFavorite: !!r.isFavorite,
                    isArchived: !!r.isArchived,
                    type: r.type || 'direct',
                    otherUserId: r.otherUserId ? Number(r.otherUserId) : undefined,
                    subject: r.subject,
                    isMe: !!r.isMe,
                    countryCode: r.countryCode
                });
            }
        }
        await tx.done;
    } catch (err) {
        console.warn('[LocalChatDB] saveLocalRooms error:', err);
    }
}
async function updateLocalRoomPreview(roomId, preview, time = '', isMe = false) {
    try {
        const db = await getChatDb();
        const room = await db.get('rooms', Number(roomId));
        if (room) {
            room.preview = preview;
            room.time = time;
            room.isMe = isMe;
            room.lastMessageTimestamp = new Date().toISOString();
            await db.put('rooms', room);
        }
    } catch (err) {
        console.warn('[LocalChatDB] updateLocalRoomPreview error:', err);
    }
}
async function enqueueOutbox(item) {
    const queueId = `outbox_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    try {
        const db = await getChatDb();
        const record = {
            ...item,
            queueId,
            retryCount: 0,
            status: 'pending',
            nextRetryAt: new Date().toISOString(),
            createdAt: new Date().toISOString()
        };
        await db.put('outboxQueue', record);
        return queueId;
    } catch (err) {
        console.warn('[LocalChatDB] enqueueOutbox error:', err);
        return queueId;
    }
}
async function getPendingOutbox() {
    try {
        const db = await getChatDb();
        const all = await db.getAll('outboxQueue');
        const now = Date.now();
        return all.filter((item)=>{
            if (item.status === 'failed') return false;
            // If currently locked as 'sending', check if stale (> 30 seconds)
            if (item.status === 'sending') {
                const lockTime = item.lockedAt ? new Date(item.lockedAt).getTime() : 0;
                if (now - lockTime < 30000) return false; // Active lock held by another tab
            }
            // Check exponential backoff timer
            if (item.nextRetryAt && new Date(item.nextRetryAt).getTime() > now) {
                return false;
            }
            return true;
        });
    } catch (err) {
        console.warn('[LocalChatDB] getPendingOutbox error:', err);
        return [];
    }
}
async function lockOutboxItem(queueId) {
    try {
        const db = await getChatDb();
        const item = await db.get('outboxQueue', queueId);
        if (!item) return false;
        item.status = 'sending';
        item.lockedAt = new Date().toISOString();
        await db.put('outboxQueue', item);
        return true;
    } catch (err) {
        console.warn('[LocalChatDB] lockOutboxItem error:', err);
        return false;
    }
}
async function dequeueOutbox(queueId) {
    try {
        const db = await getChatDb();
        await db.delete('outboxQueue', queueId);
    } catch (err) {
        console.warn('[LocalChatDB] dequeueOutbox error:', err);
    }
}
async function incrementOutboxRetry(queueId) {
    try {
        const db = await getChatDb();
        const item = await db.get('outboxQueue', queueId);
        if (item) {
            const nextCount = (item.retryCount || 0) + 1;
            item.retryCount = nextCount;
            const delayMs = RETRY_DELAYS[Math.min(nextCount - 1, RETRY_DELAYS.length - 1)];
            item.nextRetryAt = new Date(Date.now() + delayMs).toISOString();
            item.status = nextCount >= 5 ? 'failed' : 'pending';
            item.lockedAt = undefined;
            await db.put('outboxQueue', item);
        }
    } catch (err) {
        console.warn('[LocalChatDB] incrementOutboxRetry error:', err);
    }
}
async function saveLocalMedia(item) {
    try {
        const db = await getChatDb();
        await db.put('media', item);
    } catch (err) {
        console.warn('[LocalChatDB] saveLocalMedia error:', err);
    }
}
async function getLocalMedia(messageId) {
    try {
        const db = await getChatDb();
        const tx = db.transaction('media', 'readonly');
        const index = tx.store.index('messageId');
        return await index.get(String(messageId));
    } catch (err) {
        console.warn('[LocalChatDB] getLocalMedia error:', err);
        return undefined;
    }
}
async function pruneOldMessages(maxDays = 180) {
    try {
        const db = await getChatDb();
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - maxDays);
        const cutoffIso = cutoffDate.toISOString();
        const tx = db.transaction('messages', 'readwrite');
        const index = tx.store.index('createdAt');
        const range = IDBKeyRange.upperBound(cutoffIso);
        let count = 0;
        let cursor = await index.openCursor(range);
        while(cursor){
            cursor.delete();
            count++;
            cursor = await cursor.continue();
        }
        await tx.done;
        if (count > 0) {
            console.log(`[LocalChatDB] 🧹 Pruned ${count} old messages older than ${maxDays} days`);
        }
        return count;
    } catch (err) {
        console.warn('[LocalChatDB] pruneOldMessages error:', err);
        return 0;
    }
}
async function getSyncMeta(roomId) {
    try {
        const db = await getChatDb();
        return await db.get('syncMeta', Number(roomId));
    } catch (err) {
        console.warn('[LocalChatDB] getSyncMeta error:', err);
        return undefined;
    }
}
async function saveSyncMeta(roomId, lastRoomSeq) {
    try {
        const db = await getChatDb();
        await db.put('syncMeta', {
            roomId: Number(roomId),
            lastRoomSeq: Number(lastRoomSeq),
            lastSyncedAt: new Date().toISOString()
        });
    } catch (err) {
        console.warn('[LocalChatDB] saveSyncMeta error:', err);
    }
}
async function getGlobalSyncMeta(key = 'main') {
    try {
        const db = await getChatDb();
        return await db.get('globalSyncMeta', key);
    } catch (err) {
        console.warn('[LocalChatDB] getGlobalSyncMeta error:', err);
        return undefined;
    }
}
async function saveGlobalSyncMeta(globalSeq, key = 'main') {
    try {
        const db = await getChatDb();
        await db.put('globalSyncMeta', {
            key,
            globalSeq: Number(globalSeq),
            lastSyncedAt: new Date().toISOString()
        });
    } catch (err) {
        console.warn('[LocalChatDB] saveGlobalSyncMeta error:', err);
    }
}
async function getLocalStatuses() {
    try {
        const db = await getChatDb();
        const meta = await db.get('globalSyncMeta', 'cached_statuses');
        return meta?.data || [];
    } catch (err) {
        console.warn('[LocalChatDB] getLocalStatuses error:', err);
        return [];
    }
}
async function saveLocalStatuses(statuses) {
    try {
        const db = await getChatDb();
        await db.put('globalSyncMeta', {
            key: 'cached_statuses',
            data: statuses,
            lastSyncedAt: new Date().toISOString()
        });
    } catch (err) {
        console.warn('[LocalChatDB] saveLocalStatuses error:', err);
    }
}
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
"[project]/src/notifications/notificationListeners.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// PingDart — Notification Listeners & Action Handlers
// Handles Push and Local Notification actions, quick-replies, and deep linking
// ============================================================
__turbopack_context__.s([
    "setupNativeBridgeListeners",
    ()=>setupNativeBridgeListeners,
    "setupNotificationListeners",
    ()=>setupNotificationListeners
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$offlineReplyQueue$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/offlineReplyQueue.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$incomingChatSync$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/incomingChatSync.ts [app-ssr] (ecmascript)");
;
;
;
async function setupNotificationListeners() {
    const { PushNotifications } = await __turbopack_context__.A("[project]/node_modules/@capacitor/push-notifications/dist/esm/index.js [app-ssr] (ecmascript, async loader)");
    const { LocalNotifications } = await __turbopack_context__.A("[project]/node_modules/@capacitor/local-notifications/dist/esm/index.js [app-ssr] (ecmascript, async loader)");
    // 1. Listen for action button taps on local notifications
    LocalNotifications.removeAllListeners();
    LocalNotifications.addListener("localNotificationActionPerformed", async (action)=>{
        const data = action.notification?.extra;
        const roomId = data?.roomId;
        const actionId = action.actionId;
        const userInputValue = action.inputValue;
        if (actionId === "reply" && roomId && userInputValue) {
            try {
                const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)");
                let textToSend = userInputValue;
                try {
                    const membersRes = await chatApi.getRoomMembers(Number(roomId));
                    if (membersRes?.success && Array.isArray(membersRes.data)) {
                        const currentUserId = Number(localStorage.getItem("userId") || 0);
                        const otherMember = membersRes.data.find((m)=>Number(m.userId) !== currentUserId);
                        if (otherMember?.userId) {
                            const e2ee = await __turbopack_context__.A("[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript, async loader)");
                            const encrypted = await e2ee.encryptMessage(Number(otherMember.userId), userInputValue);
                            if (!encrypted) {
                                console.error("[FCM QuickReply] E2EE encryption failed — aborting quick reply send.");
                                return;
                            }
                            textToSend = encrypted;
                        }
                    }
                } catch (_) {}
                await chatApi.sendMessage(Number(roomId), textToSend, "text", {
                    pushPreview: userInputValue
                });
                console.log(`[FCM] 🚀 Quick reply sent to room ${roomId}:`, userInputValue);
            } catch (err) {
                console.error("[FCM] Quick reply error:", err.message);
            }
        } else if (actionId === "mark_read" && roomId) {
            try {
                const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)");
                await chatApi.markAsRead(Number(roomId));
                console.log(`[FCM] ✓ Marked room ${roomId} as read`);
            } catch (err) {
                console.error("[FCM] Mark read error:", err.message);
            }
        } else if (actionId === "mute" && roomId) {
            try {
                const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)");
                await chatApi.muteRoom(Number(roomId));
                console.log(`[FCM] 🔕 Muted room ${roomId}`);
            } catch (err) {
                console.error("[FCM] Mute room error:", err.message);
            }
        } else if (roomId) {
            window.location.href = `/user?chatId=${roomId}`;
        }
    });
    // 2. Listen for incoming push notification packets
    PushNotifications.removeAllListeners();
    PushNotifications.addListener("pushNotificationReceived", async (notification)=>{
        try {
            const data = notification.data;
            if (!data) return;
            const notifType = data.type || notification.type;
            // Silent sync events (multi-device dismissal, read receipts, call cancellation)
            if (notifType === "notification:dismiss" || notifType === "notification:read_sync" || notifType === "call:answered_elsewhere" || notifType === "call:ended") {
                return;
            }
            if (data.roomId) {
                const roomId = Number(data.roomId);
                const senderId = data.senderId;
                // Safeguard: Never display an in-app notification if the message was sent by the current user
                try {
                    let currentUserId = null;
                    try {
                        const { useAuthStore } = await __turbopack_context__.A("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript, async loader)");
                        currentUserId = useAuthStore.getState().user?.id;
                    } catch (_) {}
                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                    ;
                    if (senderId && currentUserId && String(senderId) === String(currentUserId)) {
                        return;
                    }
                } catch (_) {}
                // Crucial safeguard: Only notify if there is genuine incoming message text
                const messageText = data.pushPreview || notification.body || data.body || data.text;
                if (!messageText) {
                    return;
                }
                const title = notification.title || data.title || data.senderName || "New Message";
                const body = messageText;
                // Push delivery is also the history hydration trigger on Android/iOS.
                // Do not mark the room read here; opening the conversation does that.
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$incomingChatSync$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["syncIncomingChatHistory"])(roomId);
                // Immediately notify server that message is delivered to this mobile device (shows ✓✓ to sender)
                try {
                    const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)");
                    const messageId = data.messageId ? Number(data.messageId) : undefined;
                    chatApi.markAsDelivered(roomId, messageId ? [
                        messageId
                    ] : undefined).catch(()=>{});
                } catch (_) {}
                // When app is open in foreground, show sleek in-app toast instead of intrusive OS push notification
                try {
                    const { showInAppChatToast } = await __turbopack_context__.A("[project]/src/components/chat/InAppChatToast.tsx [app-ssr] (ecmascript, async loader)");
                    // Check if this chat is PIN-locked
                    let isRoomLocked = false;
                    try {
                        const { getChatDb } = await __turbopack_context__.A("[project]/src/lib/db/localChatDb.ts [app-ssr] (ecmascript, async loader)");
                        const db = await getChatDb();
                        const room = await db.get("rooms", roomId);
                        isRoomLocked = !!room?.isLocked;
                    } catch (_) {}
                    showInAppChatToast({
                        roomId,
                        senderId,
                        title,
                        body,
                        avatarUrl: data.avatarUrl || data.senderAvatarUrl || data.largeIcon || null,
                        senderName: data.senderName || title,
                        isLocked: isRoomLocked
                    });
                } catch (_) {}
            }
        } catch (e) {
            console.warn("[FCM] Error displaying local notification:", e);
        }
    });
    // 3. Listen for notification action perform taps
    PushNotifications.addListener("pushNotificationActionPerformed", async (action)=>{
        const data = action.notification?.data;
        const roomId = data?.roomId;
        const actionId = action.actionId;
        const userInputValue = action.inputValue;
        const isReply = actionId === "reply" || actionId === "ACTION_REPLY";
        const isMarkRead = actionId === "mark_read" || actionId === "ACTION_MARK_READ";
        const isMute = actionId === "mute" || actionId === "ACTION_MUTE";
        const isAcceptCall = actionId === "accept_call" || actionId === "ACTION_ACCEPT_CALL" || actionId === "ACTION_JOIN_GROUP_CALL";
        const isDeclineCall = actionId === "decline_call" || actionId === "ACTION_DECLINE_CALL" || actionId === "ACTION_DISMISS";
        // Telemetry: Report notification opened/acted
        try {
            const token = localStorage.getItem("access_token") || localStorage.getItem("auth_token");
            if (token) {
                const { getApiV1Url } = await __turbopack_context__.A("[project]/src/lib/utils.ts [app-ssr] (ecmascript, async loader)");
                fetch(`${getApiV1Url()}/notifications/events`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        notificationId: data?.messageId || `room_${roomId}`,
                        roomId: roomId ? Number(roomId) : null,
                        type: data?.type || "chat",
                        event: isReply ? "replied" : isAcceptCall || isDeclineCall ? "opened" : "opened",
                        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform()
                    })
                }).catch(()=>{});
            }
        } catch (_) {}
        if (isReply && roomId && userInputValue) {
            const numRoomId = Number(roomId);
            if (typeof navigator !== "undefined" && !navigator.onLine) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$offlineReplyQueue$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enqueueOfflineQuickReply"])(numRoomId, userInputValue);
                return;
            }
            try {
                const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)");
                let textToSend = userInputValue;
                try {
                    const membersRes = await chatApi.getRoomMembers(numRoomId);
                    if (membersRes?.success && Array.isArray(membersRes.data)) {
                        const currentUserId = Number(localStorage.getItem("userId") || 0);
                        const otherMember = membersRes.data.find((m)=>Number(m.userId) !== currentUserId);
                        if (otherMember?.userId) {
                            const e2ee = await __turbopack_context__.A("[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript, async loader)");
                            const encrypted = await e2ee.encryptMessage(Number(otherMember.userId), userInputValue);
                            if (encrypted) textToSend = encrypted;
                        }
                    }
                } catch (_) {}
                await chatApi.sendMessage(numRoomId, textToSend, "text", {
                    pushPreview: userInputValue
                });
                console.log(`[FCM] 🚀 Quick reply sent to room ${numRoomId}:`, userInputValue);
            } catch (err) {
                console.warn("[FCM] Quick reply send failed, saving to offline queue:", err.message);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$offlineReplyQueue$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enqueueOfflineQuickReply"])(numRoomId, userInputValue);
            }
        } else if (isMarkRead && roomId) {
            try {
                const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)");
                await chatApi.markAsRead(Number(roomId));
                console.log(`[FCM] ✓ Marked room ${roomId} as read`);
            } catch (err) {
                console.error("[FCM] Mark read error:", err.message);
            }
        } else if (isMute && roomId) {
            try {
                const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)");
                await chatApi.muteRoom(Number(roomId));
                console.log(`[FCM] 🔕 Muted room ${roomId}`);
            } catch (err) {
                console.error("[FCM] Mute room error:", err.message);
            }
        } else if (isAcceptCall) {
            window.dispatchEvent(new CustomEvent("notificationDeepLink", {
                detail: {
                    type: "call",
                    roomId,
                    ...data
                }
            }));
        } else if (isDeclineCall) {
            window.dispatchEvent(new CustomEvent("declineIncomingCall", {
                detail: {
                    callId: data?.callId,
                    targetUserId: data?.callerId
                }
            }));
        } else if (roomId) {
            window.dispatchEvent(new CustomEvent("notificationDeepLink", {
                detail: {
                    type: data?.type || "chat",
                    roomId,
                    deepLink: data?.deepLink
                }
            }));
            window.dispatchEvent(new CustomEvent("openChatRoom", {
                detail: {
                    roomId: String(roomId)
                }
            }));
        }
    });
    // 4. Global window native bridge dispatches
    setupNativeBridgeListeners();
}
function setupNativeBridgeListeners() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/notifications/firebaseTokenService.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// Firebase Cloud Messaging (FCM) — Client Token Service
// Handles device token registration and unregistration with backend
// ============================================================
__turbopack_context__.s([
    "registerDeviceFcmToken",
    ()=>registerDeviceFcmToken,
    "unregisterDeviceFcmToken",
    ()=>unregisterDeviceFcmToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationChannels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/notificationChannels.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationListeners$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/notificationListeners.ts [app-ssr] (ecmascript)");
;
;
;
;
let isRegistering = false;
async function registerDeviceFcmToken() {
    if ("TURBOPACK compile-time truthy", 1) return false;
    //TURBOPACK unreachable
    ;
}
async function unregisterDeviceFcmToken() {
    if ("TURBOPACK compile-time truthy", 1) return;
    //TURBOPACK unreachable
    ;
}
}),
"[project]/src/services/notificationApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "notificationApi",
    ()=>notificationApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
;
const notificationApi = {
    // Get list of notifications from DB
    getNotifications: async (unreadOnly = false, limit = 50)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get(`/notifications?unreadOnly=${unreadOnly}&limit=${limit}`);
        return response.data;
    },
    // Get unread badge count
    getUnreadCount: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get('/notifications/unread-count');
        return response.data;
    },
    // Mark a single notification as read
    markAsRead: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].patch(`/notifications/${id}/read`);
        return response.data;
    },
    // Mark all notifications as read
    markAllAsRead: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].patch('/notifications/read-all');
        return response.data;
    },
    // Delete single notification
    deleteNotification: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete(`/notifications/${id}`);
        return response.data;
    },
    // Clear all notifications
    clearAll: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].delete('/notifications/clear-all');
        return response.data;
    }
};
}),
"[project]/src/services/notificationRouter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Central Notification Deep Link Router
 *
 * Routes incoming notification clicks to the exact target screen,
 * eliminating blank screens or lost parameters:
 * - type=chat / group -> Opens Chat Conversation (?tab=Chats&msgId=123)
 * - type=call -> Opens Call Screen (?tab=Calls)
 * - type=missed_call -> Opens Chat or Call History (?tab=Calls)
 * - type=post_comment / post -> Opens Feed / Post Details
 * - type=profile -> Opens Profile
 */ __turbopack_context__.s([
    "notificationRouter",
    ()=>notificationRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
class NotificationRouter {
    handle(payload, handlers) {
        if (!payload) return;
        const type = payload.type || (payload.roomId ? "chat" : "general");
        const roomId = payload.roomId || payload.chatId;
        console.log("[NotificationRouter] Routing notification tap:", {
            type,
            roomId,
            payload
        });
        switch(type){
            case "chat":
            case "chat:message":
            case "group":
                {
                    if (roomId) {
                        const idNum = Number(roomId);
                        handlers.setActiveNav("Chats");
                        handlers.setSelectedMsgId(idNum);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                            tab: "Chats",
                            msgId: idNum
                        });
                    }
                    break;
                }
            case "call":
            case "call:incoming":
                {
                    handlers.setActiveNav("Calls");
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                        tab: "Calls"
                    });
                    break;
                }
            case "missed_call":
                {
                    if (roomId) {
                        const idNum = Number(roomId);
                        handlers.setActiveNav("Chats");
                        handlers.setSelectedMsgId(idNum);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                            tab: "Chats",
                            msgId: idNum
                        });
                    } else {
                        handlers.setActiveNav("Calls");
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                            tab: "Calls"
                        });
                    }
                    break;
                }
            case "post":
            case "post_comment":
                {
                    handlers.setActiveNav("Home");
                    if (payload.postId) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                            tab: "Home",
                            postId: payload.postId
                        });
                    }
                    break;
                }
            case "profile":
                {
                    handlers.setActiveNav("Profile");
                    if (payload.userId) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                            tab: "Profile",
                            userId: payload.userId
                        });
                    }
                    break;
                }
            default:
                {
                    if (payload.deepLink && handlers.router) {
                        try {
                            handlers.router.push(payload.deepLink);
                        } catch (_) {}
                    } else if (roomId) {
                        const idNum = Number(roomId);
                        handlers.setActiveNav("Chats");
                        handlers.setSelectedMsgId(idNum);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                            tab: "Chats",
                            msgId: idNum
                        });
                    }
                    break;
                }
        }
    }
}
const notificationRouter = new NotificationRouter();
}),
"[project]/src/notifications/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// ============================================================
// PingDart App — Unified Notifications & Firebase Push Module
// ============================================================
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$firebaseTokenService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/firebaseTokenService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$offlineReplyQueue$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/offlineReplyQueue.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationChannels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/notificationChannels.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationListeners$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/notificationListeners.ts [app-ssr] (ecmascript)");
// Re-export REST API & Router for convenient unified access
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/notificationApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationRouter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/notificationRouter.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/src/notifications/index.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OFFLINE_REPLY_QUEUE_KEY",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$offlineReplyQueue$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OFFLINE_REPLY_QUEUE_KEY"],
    "enqueueOfflineQuickReply",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$offlineReplyQueue$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["enqueueOfflineQuickReply"],
    "flushOfflineQuickReplies",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$offlineReplyQueue$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flushOfflineQuickReplies"],
    "notificationApi",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notificationApi"],
    "notificationRouter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationRouter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["notificationRouter"],
    "registerDeviceFcmToken",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$firebaseTokenService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["registerDeviceFcmToken"],
    "setupNativeBridgeListeners",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationListeners$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupNativeBridgeListeners"],
    "setupNotificationActionTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationChannels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupNotificationActionTypes"],
    "setupNotificationChannels",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationChannels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupNotificationChannels"],
    "setupNotificationListeners",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationListeners$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setupNotificationListeners"],
    "unregisterDeviceFcmToken",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$firebaseTokenService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unregisterDeviceFcmToken"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/notifications/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$firebaseTokenService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/firebaseTokenService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$offlineReplyQueue$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/offlineReplyQueue.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationChannels$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/notificationChannels.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationListeners$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/notificationListeners.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/notificationApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationRouter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/notificationRouter.ts [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=src_89ce0a09._.js.map