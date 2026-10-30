(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/notifications/notificationChannels.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
        const { PushNotifications } = await __turbopack_context__.A("[project]/node_modules/@capacitor/push-notifications/dist/esm/index.js [app-client] (ecmascript, async loader)");
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
        const { LocalNotifications } = await __turbopack_context__.A("[project]/node_modules/@capacitor/local-notifications/dist/esm/index.js [app-client] (ecmascript, async loader)");
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/notifications/offlineReplyQueue.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(OFFLINE_REPLY_QUEUE_KEY);
        const queue = raw ? JSON.parse(raw) : [];
        queue.push({
            id: `reply_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
            roomId,
            text,
            timestamp: Date.now()
        });
        localStorage.setItem(OFFLINE_REPLY_QUEUE_KEY, JSON.stringify(queue));
        console.log(`[OfflineQueue] 💾 Saved quick reply for room ${roomId} to offline queue (Count: ${queue.length})`);
    } catch (err) {
        console.error("[OfflineQueue] Error enqueuing reply:", err);
    }
}
async function flushOfflineQuickReplies() {
    if ("object" === "undefined" || !navigator.onLine) return;
    try {
        const raw = localStorage.getItem(OFFLINE_REPLY_QUEUE_KEY);
        if (!raw) return;
        const queue = JSON.parse(raw);
        if (!Array.isArray(queue) || queue.length === 0) return;
        console.log(`[OfflineQueue] 🔄 Connection restored! Flushing ${queue.length} pending reply(s)...`);
        const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
        const remaining = [];
        for (const item of queue){
            try {
                let textToSend = item.text;
                try {
                    const membersRes = await chatApi.getRoomMembers(item.roomId);
                    if ((membersRes === null || membersRes === void 0 ? void 0 : membersRes.success) && Array.isArray(membersRes.data)) {
                        const currentUserId = Number(localStorage.getItem("userId") || 0);
                        const otherMember = membersRes.data.find((m)=>Number(m.userId) !== currentUserId);
                        if (otherMember === null || otherMember === void 0 ? void 0 : otherMember.userId) {
                            const e2ee = await __turbopack_context__.A("[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript, async loader)");
                            const encrypted = await e2ee.encryptMessage(Number(otherMember.userId), item.text);
                            if (encrypted) textToSend = encrypted;
                        }
                    }
                } catch (_) {}
                await chatApi.sendMessage(item.roomId, textToSend, "text", {
                    pushPreview: item.text
                });
                console.log(`[OfflineQueue] ✓ Sent offline quick reply to room ${item.roomId}`);
            } catch (sendErr) {
                remaining.push(item);
            }
        }
        if (remaining.length > 0) {
            localStorage.setItem(OFFLINE_REPLY_QUEUE_KEY, JSON.stringify(remaining));
        } else {
            localStorage.removeItem(OFFLINE_REPLY_QUEUE_KEY);
            console.log("[OfflineQueue] 🎉 All offline replies sent successfully!");
        }
    } catch (flushErr) {
        console.error("[OfflineQueue] Error flushing replies:", flushErr);
    }
}
// Auto-flush when window goes back online
if ("TURBOPACK compile-time truthy", 1) {
    window.addEventListener("online", ()=>{
        flushOfflineQuickReplies();
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/db/localChatDb.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/idb/build/index.js [app-client] (ecmascript)");
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        // 1. Direct Zustand storage (pingdart-auth)
        const rawAuth = localStorage.getItem('pingdart-auth');
        if (rawAuth) {
            var _JSON_parse_state, _JSON_parse;
            const u = (_JSON_parse = JSON.parse(rawAuth)) === null || _JSON_parse === void 0 ? void 0 : (_JSON_parse_state = _JSON_parse.state) === null || _JSON_parse_state === void 0 ? void 0 : _JSON_parse_state.user;
            if (u === null || u === void 0 ? void 0 : u.id) return String(u.id);
            if (u === null || u === void 0 ? void 0 : u.email) return String(u.email).replace(/[^a-zA-Z0-9]/g, '_');
        }
    } catch (_) {}
    try {
        const raw = localStorage.getItem('auth-storage');
        if (raw) {
            var _JSON_parse_state1, _JSON_parse1;
            const u = (_JSON_parse1 = JSON.parse(raw)) === null || _JSON_parse1 === void 0 ? void 0 : (_JSON_parse_state1 = _JSON_parse1.state) === null || _JSON_parse_state1 === void 0 ? void 0 : _JSON_parse_state1.user;
            if (u === null || u === void 0 ? void 0 : u.id) return String(u.id);
            if (u === null || u === void 0 ? void 0 : u.email) return String(u.email).replace(/[^a-zA-Z0-9]/g, '_');
        }
    } catch (_) {}
    try {
        const raw = localStorage.getItem('user');
        if (raw) {
            const u = JSON.parse(raw);
            if (u === null || u === void 0 ? void 0 : u.id) return String(u.id);
            if (u === null || u === void 0 ? void 0 : u.email) return String(u.email).replace(/[^a-zA-Z0-9]/g, '_');
        }
    } catch (_) {}
    return 'guest';
}
const dbPromiseMap = new Map();
function getChatDb() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const userId = getCurrentUserId();
    const dbName = `pingdart_local_chat_db_${userId}`;
    if (!dbPromiseMap.has(dbName)) {
        const promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openDB"])(dbName, DB_VERSION, {
            upgrade (db, oldVersion, newVersion, transaction) {
                console.log(`[LocalChatDB] Upgrading database from v${oldVersion} to v${newVersion}`);
                // 1. Messages Store
                let msgStore;
                if (!db.objectStoreNames.contains('messages')) {
                    msgStore = db.createObjectStore('messages', {
                        keyPath: 'id'
                    });
                    msgStore.createIndex('roomId', 'roomId', {
                        unique: false
                    });
                    msgStore.createIndex('senderId', 'senderId', {
                        unique: false
                    });
                    msgStore.createIndex('type', 'type', {
                        unique: false
                    });
                    msgStore.createIndex('status', 'status', {
                        unique: false
                    });
                    msgStore.createIndex('createdAt', 'createdAt', {
                        unique: false
                    });
                    msgStore.createIndex('updatedAt', 'updatedAt', {
                        unique: false
                    });
                    msgStore.createIndex('isDeleted', 'isDeleted', {
                        unique: false
                    });
                    msgStore.createIndex('room_created', [
                        'roomId',
                        'createdAt'
                    ], {
                        unique: false
                    });
                    msgStore.createIndex('room_seq', [
                        'roomId',
                        'roomSeq'
                    ], {
                        unique: false
                    });
                } else {
                    msgStore = transaction.objectStore('messages');
                    if (!msgStore.indexNames.contains('room_seq')) {
                        msgStore.createIndex('room_seq', [
                            'roomId',
                            'roomSeq'
                        ], {
                            unique: false
                        });
                    }
                }
                // 2. Rooms Store
                if (!db.objectStoreNames.contains('rooms')) {
                    const roomStore = db.createObjectStore('rooms', {
                        keyPath: 'id'
                    });
                    roomStore.createIndex('lastMessageTimestamp', 'lastMessageTimestamp', {
                        unique: false
                    });
                    roomStore.createIndex('unreadCount', 'unreadCount', {
                        unique: false
                    });
                    roomStore.createIndex('type', 'type', {
                        unique: false
                    });
                }
                // 3. Media Files Store
                if (!db.objectStoreNames.contains('media_files')) {
                    const mediaStore = db.createObjectStore('media_files', {
                        keyPath: 'id'
                    });
                    mediaStore.createIndex('messageId', 'messageId', {
                        unique: false
                    });
                    mediaStore.createIndex('roomId', 'roomId', {
                        unique: false
                    });
                    mediaStore.createIndex('createdAt', 'createdAt', {
                        unique: false
                    });
                }
                if (!db.objectStoreNames.contains('media')) {
                    const legacyMedia = db.createObjectStore('media', {
                        keyPath: 'id'
                    });
                    legacyMedia.createIndex('messageId', 'messageId', {
                        unique: false
                    });
                }
                // 4. Outbox Queue Store
                if (!db.objectStoreNames.contains('outboxQueue')) {
                    const outboxStore = db.createObjectStore('outboxQueue', {
                        keyPath: 'queueId'
                    });
                    outboxStore.createIndex('roomId', 'roomId', {
                        unique: false
                    });
                    outboxStore.createIndex('status', 'status', {
                        unique: false
                    });
                    outboxStore.createIndex('createdAt', 'createdAt', {
                        unique: false
                    });
                }
                // 5. Sync Meta Store
                if (!db.objectStoreNames.contains('syncMeta')) {
                    db.createObjectStore('syncMeta', {
                        keyPath: 'roomId'
                    });
                }
                if (!db.objectStoreNames.contains('globalSyncMeta')) {
                    db.createObjectStore('globalSyncMeta', {
                        keyPath: 'key'
                    });
                }
                // 6. Message Status Store
                if (!db.objectStoreNames.contains('message_status')) {
                    const statusStore = db.createObjectStore('message_status', {
                        keyPath: 'id'
                    });
                    statusStore.createIndex('messageId', 'messageId', {
                        unique: false
                    });
                }
                // 7. Room Members & Device Stores
                if (!db.objectStoreNames.contains('room_members')) {
                    db.createObjectStore('room_members', {
                        keyPath: [
                            'roomId',
                            'userId'
                        ]
                    });
                }
                if (!db.objectStoreNames.contains('user_devices')) {
                    db.createObjectStore('user_devices', {
                        keyPath: 'deviceId'
                    });
                }
                if (!db.objectStoreNames.contains('room_user_state')) {
                    db.createObjectStore('room_user_state', {
                        keyPath: [
                            'roomId',
                            'userId'
                        ]
                    });
                }
            }
        });
        dbPromiseMap.set(dbName, promise);
    }
    return dbPromiseMap.get(dbName);
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
        var _existing_version, _msg_version;
        if (existing && ((_existing_version = existing.version) !== null && _existing_version !== void 0 ? _existing_version : 1) > ((_msg_version = msg.version) !== null && _msg_version !== void 0 ? _msg_version : 1)) return;
        var _msg_version1, _msg_roomSeq, _msg_globalSeq;
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
            version: (_msg_version1 = msg.version) !== null && _msg_version1 !== void 0 ? _msg_version1 : 1,
            roomSeq: (_msg_roomSeq = msg.roomSeq) !== null && _msg_roomSeq !== void 0 ? _msg_roomSeq : 0,
            globalSeq: (_msg_globalSeq = msg.globalSeq) !== null && _msg_globalSeq !== void 0 ? _msg_globalSeq : 0,
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
            var _msg_version, _msg_roomSeq, _msg_globalSeq;
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
                version: (_msg_version = msg.version) !== null && _msg_version !== void 0 ? _msg_version : 1,
                roomSeq: (_msg_roomSeq = msg.roomSeq) !== null && _msg_roomSeq !== void 0 ? _msg_roomSeq : 0,
                globalSeq: (_msg_globalSeq = msg.globalSeq) !== null && _msg_globalSeq !== void 0 ? _msg_globalSeq : 0,
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
        return (meta === null || meta === void 0 ? void 0 : meta.data) || [];
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/incomingChatSync.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "syncIncomingChatHistory",
    ()=>syncIncomingChatHistory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/localChatDb.ts [app-client] (ecmascript)");
;
;
const activeSyncs = new Map();
async function syncIncomingChatHistory(roomId) {
    if (!roomId) return false;
    const existingSync = activeSyncs.get(roomId);
    if (existingSync) return existingSync;
    const sync = (async ()=>{
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].getMessages(roomId, 50);
            if (!(response === null || response === void 0 ? void 0 : response.success) || !Array.isArray(response.data) || response.data.length === 0) {
                return false;
            }
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveLocalMessages"](roomId, response.data);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/notifications/notificationListeners.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$offlineReplyQueue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/offlineReplyQueue.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$incomingChatSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/incomingChatSync.ts [app-client] (ecmascript)");
;
;
;
async function setupNotificationListeners() {
    const { PushNotifications } = await __turbopack_context__.A("[project]/node_modules/@capacitor/push-notifications/dist/esm/index.js [app-client] (ecmascript, async loader)");
    const { LocalNotifications } = await __turbopack_context__.A("[project]/node_modules/@capacitor/local-notifications/dist/esm/index.js [app-client] (ecmascript, async loader)");
    // 1. Listen for action button taps on local notifications
    LocalNotifications.removeAllListeners();
    LocalNotifications.addListener("localNotificationActionPerformed", async (action)=>{
        var _action_notification;
        const data = (_action_notification = action.notification) === null || _action_notification === void 0 ? void 0 : _action_notification.extra;
        const roomId = data === null || data === void 0 ? void 0 : data.roomId;
        const actionId = action.actionId;
        const userInputValue = action.inputValue;
        if (actionId === "reply" && roomId && userInputValue) {
            try {
                const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
                let textToSend = userInputValue;
                try {
                    const membersRes = await chatApi.getRoomMembers(Number(roomId));
                    if ((membersRes === null || membersRes === void 0 ? void 0 : membersRes.success) && Array.isArray(membersRes.data)) {
                        const currentUserId = Number(localStorage.getItem("userId") || 0);
                        const otherMember = membersRes.data.find((m)=>Number(m.userId) !== currentUserId);
                        if (otherMember === null || otherMember === void 0 ? void 0 : otherMember.userId) {
                            const e2ee = await __turbopack_context__.A("[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript, async loader)");
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
                const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
                await chatApi.markAsRead(Number(roomId));
                console.log(`[FCM] ✓ Marked room ${roomId} as read`);
            } catch (err) {
                console.error("[FCM] Mark read error:", err.message);
            }
        } else if (actionId === "mute" && roomId) {
            try {
                const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
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
                        var _useAuthStore_getState_user;
                        const { useAuthStore } = await __turbopack_context__.A("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript, async loader)");
                        currentUserId = (_useAuthStore_getState_user = useAuthStore.getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
                    } catch (_) {}
                    if (!currentUserId && "object" !== "undefined") {
                        try {
                            var _JSON_parse;
                            const stored = localStorage.getItem("user");
                            if (stored) currentUserId = (_JSON_parse = JSON.parse(stored)) === null || _JSON_parse === void 0 ? void 0 : _JSON_parse.id;
                        } catch (_) {}
                        if (!currentUserId) currentUserId = localStorage.getItem("userId");
                    }
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
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$incomingChatSync$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncIncomingChatHistory"])(roomId);
                // Immediately notify server that message is delivered to this mobile device (shows ✓✓ to sender)
                try {
                    const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
                    const messageId = data.messageId ? Number(data.messageId) : undefined;
                    chatApi.markAsDelivered(roomId, messageId ? [
                        messageId
                    ] : undefined).catch(()=>{});
                } catch (_) {}
                // When app is open in foreground, show sleek in-app toast instead of intrusive OS push notification
                try {
                    const { showInAppChatToast } = await __turbopack_context__.A("[project]/src/components/chat/InAppChatToast.tsx [app-client] (ecmascript, async loader)");
                    // Check if this chat is PIN-locked
                    let isRoomLocked = false;
                    try {
                        const { getChatDb } = await __turbopack_context__.A("[project]/src/lib/db/localChatDb.ts [app-client] (ecmascript, async loader)");
                        const db = await getChatDb();
                        const room = await db.get("rooms", roomId);
                        isRoomLocked = !!(room === null || room === void 0 ? void 0 : room.isLocked);
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
        var _action_notification;
        const data = (_action_notification = action.notification) === null || _action_notification === void 0 ? void 0 : _action_notification.data;
        const roomId = data === null || data === void 0 ? void 0 : data.roomId;
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
                const { getApiV1Url } = await __turbopack_context__.A("[project]/src/lib/utils.ts [app-client] (ecmascript, async loader)");
                fetch(`${getApiV1Url()}/notifications/events`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        notificationId: (data === null || data === void 0 ? void 0 : data.messageId) || `room_${roomId}`,
                        roomId: roomId ? Number(roomId) : null,
                        type: (data === null || data === void 0 ? void 0 : data.type) || "chat",
                        event: isReply ? "replied" : isAcceptCall || isDeclineCall ? "opened" : "opened",
                        platform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform()
                    })
                }).catch(()=>{});
            }
        } catch (_) {}
        if (isReply && roomId && userInputValue) {
            const numRoomId = Number(roomId);
            if (typeof navigator !== "undefined" && !navigator.onLine) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$offlineReplyQueue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enqueueOfflineQuickReply"])(numRoomId, userInputValue);
                return;
            }
            try {
                const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
                let textToSend = userInputValue;
                try {
                    const membersRes = await chatApi.getRoomMembers(numRoomId);
                    if ((membersRes === null || membersRes === void 0 ? void 0 : membersRes.success) && Array.isArray(membersRes.data)) {
                        const currentUserId = Number(localStorage.getItem("userId") || 0);
                        const otherMember = membersRes.data.find((m)=>Number(m.userId) !== currentUserId);
                        if (otherMember === null || otherMember === void 0 ? void 0 : otherMember.userId) {
                            const e2ee = await __turbopack_context__.A("[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript, async loader)");
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
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$offlineReplyQueue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enqueueOfflineQuickReply"])(numRoomId, userInputValue);
            }
        } else if (isMarkRead && roomId) {
            try {
                const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
                await chatApi.markAsRead(Number(roomId));
                console.log(`[FCM] ✓ Marked room ${roomId} as read`);
            } catch (err) {
                console.error("[FCM] Mark read error:", err.message);
            }
        } else if (isMute && roomId) {
            try {
                const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
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
                    callId: data === null || data === void 0 ? void 0 : data.callId,
                    targetUserId: data === null || data === void 0 ? void 0 : data.callerId
                }
            }));
        } else if (roomId) {
            window.dispatchEvent(new CustomEvent("notificationDeepLink", {
                detail: {
                    type: (data === null || data === void 0 ? void 0 : data.type) || "chat",
                    roomId,
                    deepLink: data === null || data === void 0 ? void 0 : data.deepLink
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
    if ("object" === "undefined" || window.__pingNotificationBridgeInitialized) return;
    window.__pingNotificationBridgeInitialized = true;
    window.addEventListener("notificationQuickReply", async (e)=>{
        const { roomId, text } = e.detail || {};
        if (!roomId || !text) return;
        try {
            const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
            let textToSend = text;
            try {
                const membersRes = await chatApi.getRoomMembers(Number(roomId));
                if ((membersRes === null || membersRes === void 0 ? void 0 : membersRes.success) && Array.isArray(membersRes.data)) {
                    const currentUserId = Number(localStorage.getItem("userId") || 0);
                    const otherMember = membersRes.data.find((m)=>Number(m.userId) !== currentUserId);
                    if (otherMember === null || otherMember === void 0 ? void 0 : otherMember.userId) {
                        const e2ee = await __turbopack_context__.A("[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript, async loader)");
                        const encrypted = await e2ee.encryptMessage(Number(otherMember.userId), text);
                        if (encrypted) textToSend = encrypted;
                    }
                }
            } catch (_) {}
            await chatApi.sendMessage(Number(roomId), textToSend, "text", {
                pushPreview: text
            });
        } catch (err) {
            console.error("[Bridge] Error in notificationQuickReply:", err);
        }
    });
    window.addEventListener("markRoomAsRead", async (e)=>{
        const { roomId } = e.detail || {};
        if (!roomId) return;
        try {
            const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
            await chatApi.markAsRead(Number(roomId));
        } catch (err) {
            console.error("[Bridge] Error in markRoomAsRead:", err);
        }
    });
    window.addEventListener("muteChatRoom", async (e)=>{
        const { roomId } = e.detail || {};
        if (!roomId) return;
        try {
            const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
            await chatApi.muteRoom(Number(roomId));
        } catch (err) {
            console.error("[Bridge] Error in muteChatRoom:", err);
        }
    });
    window.addEventListener("declineIncomingCall", (e)=>{
        const { callId, targetUserId } = e.detail || {};
        console.log("[Bridge] Call decline requested for callId/targetUserId:", callId, targetUserId);
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/notifications/firebaseTokenService.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationChannels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/notificationChannels.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationListeners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/notificationListeners.ts [app-client] (ecmascript)");
;
;
;
;
let isRegistering = false;
async function registerDeviceFcmToken() {
    if ("object" === "undefined" || isRegistering) return false;
    try {
        isRegistering = true;
        const tokenKey = "pingdart_fcm_token";
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
            const { PushNotifications } = await __turbopack_context__.A("[project]/node_modules/@capacitor/push-notifications/dist/esm/index.js [app-client] (ecmascript, async loader)");
            // Check / request permissions
            let permStatus = await PushNotifications.checkPermissions();
            if (permStatus.receive !== "granted") {
                permStatus = await PushNotifications.requestPermissions();
            }
            if (permStatus.receive === "granted") {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationChannels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupNotificationChannels"])();
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationChannels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupNotificationActionTypes"])();
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationListeners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupNotificationListeners"])();
                // Register with Google FCM / Apple APNS
                await PushNotifications.register();
                return new Promise((resolve)=>{
                    PushNotifications.addListener("registration", async (tokenData)=>{
                        const fcmToken = tokenData.value;
                        if (fcmToken) {
                            localStorage.setItem(tokenKey, fcmToken);
                            try {
                                const { getApiV1Url } = await __turbopack_context__.A("[project]/src/lib/utils.ts [app-client] (ecmascript, async loader)");
                                const { safeStorage } = await __turbopack_context__.A("[project]/src/utils/safeStorage.ts [app-client] (ecmascript, async loader)");
                                const v1Url = getApiV1Url();
                                localStorage.setItem("api_base_url", v1Url);
                                safeStorage.setItem("api_base_url", v1Url).catch(()=>{});
                            } catch (_) {}
                            const platform = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].getPlatform(); // 'android' | 'ios'
                            const deviceId = `${platform}_${window.navigator.userAgent.replace(/[^a-zA-Z0-9]/g, "").slice(0, 30)}`;
                            const authToken = localStorage.getItem("access_token") || localStorage.getItem("auth_token") || localStorage.getItem("token");
                            if (authToken) {
                                try {
                                    const { safeStorage } = await __turbopack_context__.A("[project]/src/utils/safeStorage.ts [app-client] (ecmascript, async loader)");
                                    safeStorage.setItem("access_token", authToken).catch(()=>{});
                                } catch (_) {}
                                try {
                                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/devices/register-fcm", {
                                        token: fcmToken,
                                        platform,
                                        deviceId,
                                        deviceModel: window.navigator.userAgent.slice(0, 60)
                                    });
                                    console.log(`[FCM] 🚀 Connected Firebase device token on ${platform}:`, fcmToken.slice(0, 15) + "...");
                                } catch (err) {
                                    console.warn("[FCM] Failed to post token to backend:", err.message);
                                }
                            }
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    });
                    PushNotifications.addListener("registrationError", (err)=>{
                        console.warn("[FCM] Push registration error:", err.error);
                        resolve(false);
                    });
                    // Timeout fallback in case addListener doesn't fire immediately
                    setTimeout(()=>resolve(false), 5000);
                });
            }
        } else {
            // Web / Browser platform: Register active web FCM token or web client device token
            let webToken = localStorage.getItem(tokenKey);
            if (!webToken) {
                webToken = `web_fcm_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
            }
            localStorage.setItem(tokenKey, webToken);
            const authToken = localStorage.getItem("access_token") || localStorage.getItem("auth_token") || localStorage.getItem("token");
            if (authToken) {
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/devices/register-fcm", {
                        token: webToken,
                        platform: "web",
                        deviceId: "web_browser",
                        deviceModel: window.navigator.userAgent.slice(0, 60)
                    });
                    console.log("[FCM] 🌐 Connected Firebase web token:", webToken);
                } catch (err) {
                    console.warn("[FCM] Web token registration failed:", err.message);
                }
            }
            return true;
        }
        return false;
    } catch (err) {
        console.warn("[FCM] Device registration error (non-fatal):", err.message);
        return false;
    } finally{
        isRegistering = false;
    }
}
async function unregisterDeviceFcmToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const token = localStorage.getItem("pingdart_fcm_token");
        if (token) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/devices/unregister-fcm", {
                token
            });
            localStorage.removeItem("pingdart_fcm_token");
            console.log("[FCM] 🛑 Unregistered Firebase device token.");
        }
    } catch (err) {
        console.warn("[FCM] Failed to unregister device token:", err.message);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/notificationApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "notificationApi",
    ()=>notificationApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
const notificationApi = {
    // Get list of notifications from DB
    getNotifications: async (unreadOnly = false, limit = 50)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/notifications?unreadOnly=${unreadOnly}&limit=${limit}`);
        return response.data;
    },
    // Get unread badge count
    getUnreadCount: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/notifications/unread-count');
        return response.data;
    },
    // Mark a single notification as read
    markAsRead: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/notifications/${id}/read`);
        return response.data;
    },
    // Mark all notifications as read
    markAllAsRead: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch('/notifications/read-all');
        return response.data;
    },
    // Delete single notification
    deleteNotification: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/notifications/${id}`);
        return response.data;
    },
    // Clear all notifications
    clearAll: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete('/notifications/clear-all');
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/notificationRouter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
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
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
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
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
                            tab: "Chats",
                            msgId: idNum
                        });
                    } else {
                        handlers.setActiveNav("Calls");
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
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
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
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
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
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
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/notifications/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// ============================================================
// PingDart App — Unified Notifications & Firebase Push Module
// ============================================================
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$firebaseTokenService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/firebaseTokenService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$offlineReplyQueue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/offlineReplyQueue.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationChannels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/notificationChannels.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationListeners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/notificationListeners.ts [app-client] (ecmascript)");
// Re-export REST API & Router for convenient unified access
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/notificationApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationRouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/notificationRouter.ts [app-client] (ecmascript)");
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/notifications/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OFFLINE_REPLY_QUEUE_KEY",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$offlineReplyQueue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OFFLINE_REPLY_QUEUE_KEY"],
    "enqueueOfflineQuickReply",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$offlineReplyQueue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enqueueOfflineQuickReply"],
    "flushOfflineQuickReplies",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$offlineReplyQueue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushOfflineQuickReplies"],
    "notificationApi",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationApi"],
    "notificationRouter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationRouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationRouter"],
    "registerDeviceFcmToken",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$firebaseTokenService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerDeviceFcmToken"],
    "setupNativeBridgeListeners",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationListeners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupNativeBridgeListeners"],
    "setupNotificationActionTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationChannels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupNotificationActionTypes"],
    "setupNotificationChannels",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationChannels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupNotificationChannels"],
    "setupNotificationListeners",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationListeners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setupNotificationListeners"],
    "unregisterDeviceFcmToken",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$firebaseTokenService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unregisterDeviceFcmToken"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/notifications/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$firebaseTokenService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/firebaseTokenService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$offlineReplyQueue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/offlineReplyQueue.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationChannels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/notificationChannels.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$notifications$2f$notificationListeners$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/notifications/notificationListeners.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/notificationApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationRouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/notificationRouter.ts [app-client] (ecmascript)");
}),
"[project]/node_modules/idb/build/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteDB",
    ()=>deleteDB,
    "openDB",
    ()=>openDB,
    "unwrap",
    ()=>unwrap,
    "wrap",
    ()=>wrap
]);
const instanceOfAny = (object, constructors)=>constructors.some((c)=>object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
        IDBDatabase,
        IDBObjectStore,
        IDBIndex,
        IDBCursor,
        IDBTransaction
    ]);
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey
    ]);
}
const transactionDoneMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = ()=>{
            resolve(wrap(request.result));
            unlisten();
        };
        const error = ()=>{
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    // This mapping exists in reverseTransformCache but doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx)) return;
    const done = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = ()=>{
            resolve();
            unlisten();
        };
        const error = ()=>{
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get (target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done') return transactionDoneMap.get(target);
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set (target, prop, value) {
        target[prop] = value;
        return true;
    },
    has (target, prop) {
        if (target instanceof IDBTransaction && (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    }
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function(...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(this.request);
        };
    }
    return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function') return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest) return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value)) return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value)=>reverseTransformCache.get(value);
/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */ function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = wrap(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event)=>{
            upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
        });
    }
    if (blocked) {
        request.addEventListener('blocked', (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
            event.oldVersion, event.newVersion, event));
    }
    openPromise.then((db)=>{
        if (terminated) db.addEventListener('close', ()=>terminated());
        if (blocking) {
            db.addEventListener('versionchange', (event)=>blocking(event.oldVersion, event.newVersion, event));
        }
    }).catch(()=>{});
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */ function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
        request.addEventListener('blocked', (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
            event.oldVersion, event));
    }
    return wrap(request).then(()=>undefined);
}
const readMethods = [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
];
const writeMethods = [
    'put',
    'add',
    'delete',
    'clear'
];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop)) return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (// Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function(storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex) target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
replaceTraps((oldTraps)=>({
        ...oldTraps,
        get: (target, prop, receiver)=>getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop)=>!!getMethod(target, prop) || oldTraps.has(target, prop)
    }));
const advanceMethodProps = [
    'continue',
    'continuePrimaryKey',
    'advance'
];
const methodMap = {};
const advanceResults = new WeakMap();
const ittrProxiedCursorToOriginalProxy = new WeakMap();
const cursorIteratorTraps = {
    get (target, prop) {
        if (!advanceMethodProps.includes(prop)) return target[prop];
        let cachedFunc = methodMap[prop];
        if (!cachedFunc) {
            cachedFunc = methodMap[prop] = function(...args) {
                advanceResults.set(this, ittrProxiedCursorToOriginalProxy.get(this)[prop](...args));
            };
        }
        return cachedFunc;
    }
};
async function* iterate(...args) {
    // tslint:disable-next-line:no-this-assignment
    let cursor = this;
    if (!(cursor instanceof IDBCursor)) {
        cursor = await cursor.openCursor(...args);
    }
    if (!cursor) return;
    cursor = cursor;
    const proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
    ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor);
    // Map this double-proxy back to the original, so other cursor methods work.
    reverseTransformCache.set(proxiedCursor, unwrap(cursor));
    while(cursor){
        yield proxiedCursor;
        // If one of the advancing methods was not called, call continue().
        cursor = await (advanceResults.get(proxiedCursor) || cursor.continue());
        advanceResults.delete(proxiedCursor);
    }
}
function isIteratorProp(target, prop) {
    return prop === Symbol.asyncIterator && instanceOfAny(target, [
        IDBIndex,
        IDBObjectStore,
        IDBCursor
    ]) || prop === 'iterate' && instanceOfAny(target, [
        IDBIndex,
        IDBObjectStore
    ]);
}
replaceTraps((oldTraps)=>({
        ...oldTraps,
        get (target, prop, receiver) {
            if (isIteratorProp(target, prop)) return iterate;
            return oldTraps.get(target, prop, receiver);
        },
        has (target, prop) {
            return isIteratorProp(target, prop) || oldTraps.has(target, prop);
        }
    }));
;
}),
]);

//# sourceMappingURL=_48a973be._.js.map