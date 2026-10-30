(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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

//# sourceMappingURL=_b3409839._.js.map