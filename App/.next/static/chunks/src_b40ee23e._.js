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
]);

//# sourceMappingURL=src_b40ee23e._.js.map