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

//# sourceMappingURL=src_1ca3c11c._.js.map