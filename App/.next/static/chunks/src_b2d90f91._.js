(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/app/user/components/screens/NotificationsScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationsScreen",
    ()=>NotificationsScreen,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FavouriteIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FavouriteIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Comment01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserAdd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserAdd01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Notification01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Notification01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkBadge01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mail01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CallIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PlayIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/File01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$BookOpen01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/BookOpen01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Time02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/notificationApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function NotificationsScreen({ onBack, onNavigateTab }) {
    _s();
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    const [unreadOnly, setUnreadOnly] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isSendingTest, setIsSendingTest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Map API response to clean NotificationItem
    const mapApiItem = (n)=>({
            id: n.id,
            type: n.type || 'system',
            user: n.senderName || n.title || 'System',
            avatar: n.senderAvatar || '',
            action: n.body || n.action || '',
            target: n.target || '',
            actionUrl: n.actionUrl || null,
            aggregationKey: n.aggregationKey || null,
            time: n.createdAt ? new Date(n.createdAt).toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }) : 'Just now',
            unread: !n.isRead,
            timestamp: n.createdAt ? new Date(n.createdAt).getTime() : Date.now(),
            metadata: n.metadata || {}
        });
    // Load from real API with fallback to local cache (ZERO mock demo data)
    const loadNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationsScreen.useCallback[loadNotifications]": async ()=>{
            setIsLoading(true);
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationApi"].getNotifications();
                if (res && res.data && Array.isArray(res.data)) {
                    const mapped = res.data.map(mapApiItem);
                    setNotifications(mapped);
                    try {
                        localStorage.setItem("app_notifications", JSON.stringify(mapped));
                    } catch (_) {}
                    setIsLoading(false);
                    return;
                }
            } catch (e) {
                console.warn("[NotificationsScreen] API fetch warning:", e === null || e === void 0 ? void 0 : e.message);
            }
            // Load from local cache if API is offline
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const stored = localStorage.getItem("app_notifications");
                    if (stored) {
                        const parsed = JSON.parse(stored);
                        if (Array.isArray(parsed)) {
                            setNotifications(parsed);
                        }
                    }
                } catch (_) {}
            }
            setIsLoading(false);
        }
    }["NotificationsScreen.useCallback[loadNotifications]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationsScreen.useEffect": ()=>{
            loadNotifications();
            // Listen to real-time events broadcasted from Socket.IO bridge
            const handleUpdate = {
                "NotificationsScreen.useEffect.handleUpdate": ()=>loadNotifications()
            }["NotificationsScreen.useEffect.handleUpdate"];
            const handleNewNotif = {
                "NotificationsScreen.useEffect.handleNewNotif": (e)=>{
                    const raw = e.detail;
                    if (!raw) return;
                    const mapped = mapApiItem(raw);
                    setNotifications({
                        "NotificationsScreen.useEffect.handleNewNotif": (prev)=>{
                            const existingIdx = prev.findIndex({
                                "NotificationsScreen.useEffect.handleNewNotif.existingIdx": (item)=>item.id === mapped.id || mapped.aggregationKey && item.aggregationKey === mapped.aggregationKey
                            }["NotificationsScreen.useEffect.handleNewNotif.existingIdx"]);
                            if (existingIdx >= 0) {
                                const updated = [
                                    ...prev
                                ];
                                updated[existingIdx] = mapped;
                                return updated;
                            }
                            return [
                                mapped,
                                ...prev
                            ];
                        }
                    }["NotificationsScreen.useEffect.handleNewNotif"]);
                }
            }["NotificationsScreen.useEffect.handleNewNotif"];
            window.addEventListener("notification:new", handleNewNotif);
            window.addEventListener("notification:updated", handleUpdate);
            window.addEventListener("app_notifications_updated", handleUpdate);
            window.addEventListener("app_notifications_new", handleNewNotif);
            return ({
                "NotificationsScreen.useEffect": ()=>{
                    window.removeEventListener("notification:new", handleNewNotif);
                    window.removeEventListener("notification:updated", handleUpdate);
                    window.removeEventListener("app_notifications_updated", handleUpdate);
                    window.removeEventListener("app_notifications_new", handleNewNotif);
                }
            })["NotificationsScreen.useEffect"];
        }
    }["NotificationsScreen.useEffect"], [
        loadNotifications
    ]);
    const handleBack = ()=>{
        if (onBack) {
            onBack();
        } else if (onNavigateTab) {
            onNavigateTab("Home");
        } else if ("object" !== "undefined" && window.history.length > 1) {
            window.history.back();
        }
    };
    const markAllRead = async ()=>{
        const updated = notifications.map((n)=>({
                ...n,
                unread: false
            }));
        setNotifications(updated);
        try {
            localStorage.setItem("app_notifications", JSON.stringify(updated));
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationApi"].markAllAsRead();
        } catch (_) {}
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Marked all notifications as read");
    };
    const markSingleRead = async (id, e)=>{
        e.stopPropagation();
        const target = notifications.find((n)=>n.id === id);
        if (!target) return;
        const newUnreadState = !target.unread;
        const updated = notifications.map((n)=>n.id === id ? {
                ...n,
                unread: newUnreadState
            } : n);
        setNotifications(updated);
        try {
            localStorage.setItem("app_notifications", JSON.stringify(updated));
            if (!newUnreadState) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationApi"].markAsRead(id);
            }
        } catch (_) {}
    };
    const deleteSingleNotification = async (id, e)=>{
        e.stopPropagation();
        const updated = notifications.filter((n)=>n.id !== id);
        setNotifications(updated);
        try {
            localStorage.setItem("app_notifications", JSON.stringify(updated));
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationApi"].deleteNotification(id);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Notification dismissed");
        } catch (_) {}
    };
    const clearAll = async ()=>{
        setNotifications([]);
        try {
            localStorage.removeItem("app_notifications");
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$notificationApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["notificationApi"].clearAll();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Cleared all notifications");
        } catch (_) {}
    };
    const sendTestNotification = async ()=>{
        setIsSendingTest(true);
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/notifications/test", {
                type: "system",
                title: "🔔 Real-Time Notification Test",
                body: `Test notification successfully delivered via Socket.IO at ${new Date().toLocaleTimeString()}`,
                actionUrl: "/user?tab=Notifications"
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Test notification emitted to your device!");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to trigger test notification");
        } finally{
            setIsSendingTest(false);
        }
    };
    const handleNotificationClick = (n)=>{
        // Mark as read immediately on click
        if (n.unread) {
            markSingleRead(n.id, {
                stopPropagation: ()=>{}
            });
        }
        if (n.actionUrl && onNavigateTab) {
            if (n.actionUrl.includes("tab=Chats")) {
                onNavigateTab("Chats");
            } else if (n.actionUrl.includes("tab=Mail")) {
                onNavigateTab("Mail");
            } else if (n.actionUrl.includes("tab=Calls")) {
                onNavigateTab("Calls");
            } else if (n.actionUrl.includes("tab=Reels")) {
                onNavigateTab("Reels");
            } else if (n.actionUrl.includes("tab=AiDiary")) {
                onNavigateTab("AiDiary");
            } else if (n.actionUrl.includes("tab=Contacts")) {
                onNavigateTab("Contacts");
            } else if (n.actionUrl.includes("tab=AiBlog")) {
                onNavigateTab("AiBlog");
            } else {
                onNavigateTab("Home");
            }
        } else if (onNavigateTab) {
            switch(n.type){
                case 'chat':
                case 'group':
                    onNavigateTab("Chats");
                    break;
                case 'mail':
                case 'campaign_completed':
                    onNavigateTab("Mail");
                    break;
                case 'call':
                case 'missed_call':
                    onNavigateTab("Calls");
                    break;
                case 'reels':
                case 'reel_like':
                case 'reel_comment':
                    onNavigateTab("Reels");
                    break;
                case 'community':
                case 'community_like':
                case 'community_comment':
                    onNavigateTab("Communities");
                    break;
                case 'ai_diary':
                    onNavigateTab("AiDiary");
                    break;
                default:
                    break;
            }
        }
    };
    const isSocialType = (type)=>{
        return type.startsWith("reel") || type.startsWith("community") || type === "like" || type === "comment" || type === "reels" || type === "follow";
    };
    const getCategoryCount = (cat)=>{
        if (cat === 'all') return notifications.length;
        return notifications.filter((n)=>{
            if (cat === 'chats') return n.type === 'chat' || n.type === 'group';
            if (cat === 'calls') return n.type === 'call' || n.type === 'missed_call';
            if (cat === 'mail') return n.type === 'mail' || n.type.startsWith('campaign');
            if (cat === 'social') return isSocialType(n.type);
            if (cat === 'system') return ![
                'chat',
                'group',
                'call',
                'missed_call',
                'mail'
            ].includes(n.type) && !isSocialType(n.type);
            return false;
        }).length;
    };
    const filteredNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NotificationsScreen.useMemo[filteredNotifications]": ()=>{
            return notifications.filter({
                "NotificationsScreen.useMemo[filteredNotifications]": (n)=>{
                    if (unreadOnly && !n.unread) return false;
                    if (activeCategory === 'all') return true;
                    if (activeCategory === 'chats') return n.type === 'chat' || n.type === 'group';
                    if (activeCategory === 'calls') return n.type === 'call' || n.type === 'missed_call';
                    if (activeCategory === 'mail') return n.type === 'mail' || n.type.startsWith('campaign');
                    if (activeCategory === 'social') return isSocialType(n.type);
                    if (activeCategory === 'system') return ![
                        'chat',
                        'group',
                        'call',
                        'missed_call',
                        'mail'
                    ].includes(n.type) && !isSocialType(n.type);
                    return true;
                }
            }["NotificationsScreen.useMemo[filteredNotifications]"]);
        }
    }["NotificationsScreen.useMemo[filteredNotifications]"], [
        notifications,
        activeCategory,
        unreadOnly
    ]);
    const getIcon = (type)=>{
        switch(type){
            case 'mail':
            case 'campaign_completed':
            case 'campaign_failed':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-5 h-5 rounded-[6px] bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mail01Icon"], {
                        size: 11,
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 322,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                    lineNumber: 321,
                    columnNumber: 11
                }, this);
            case 'chat':
            case 'group':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-5 h-5 rounded-[6px] bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Comment01Icon"], {
                        size: 11,
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 329,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                    lineNumber: 328,
                    columnNumber: 11
                }, this);
            case 'call':
            case 'missed_call':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-5 h-5 rounded-[6px] bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white shadow-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallIcon"], {
                        size: 11,
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 336,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                    lineNumber: 335,
                    columnNumber: 11
                }, this);
            case 'reel_like':
            case 'community_like':
            case 'like':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-5 h-5 rounded-[6px] bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FavouriteIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FavouriteIcon"], {
                        size: 11,
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 344,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                    lineNumber: 343,
                    columnNumber: 11
                }, this);
            case 'reel_comment':
            case 'community_comment':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-5 h-5 rounded-[6px] bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Comment01Icon"], {
                        size: 11,
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 351,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                    lineNumber: 350,
                    columnNumber: 11
                }, this);
            case 'reels':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-5 h-5 rounded-[6px] bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-white shadow-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlayIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayIcon"], {
                        size: 11,
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 357,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                    lineNumber: 356,
                    columnNumber: 11
                }, this);
            case 'community':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-5 h-5 rounded-[6px] bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white shadow-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"], {
                        size: 11,
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 363,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                    lineNumber: 362,
                    columnNumber: 11
                }, this);
            case 'contact_request':
            case 'contact_accepted':
            case 'follow':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-5 h-5 rounded-[6px] bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserAdd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserAdd01Icon"], {
                        size: 11,
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 371,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                    lineNumber: 370,
                    columnNumber: 11
                }, this);
            case 'diary':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-5 h-5 rounded-[6px] bg-gradient-to-br from-amber-600 to-yellow-600 flex items-center justify-center text-white shadow-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$BookOpen01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookOpen01Icon"], {
                        size: 11,
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 377,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                    lineNumber: 376,
                    columnNumber: 11
                }, this);
            case 'task_reminder':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-5 h-5 rounded-[6px] bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Time02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Time02Icon"], {
                        size: 11,
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 383,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                    lineNumber: 382,
                    columnNumber: 11
                }, this);
            case 'file_shared':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-5 h-5 rounded-[6px] bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center text-white shadow-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File01Icon"], {
                        size: 11,
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 389,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                    lineNumber: 388,
                    columnNumber: 11
                }, this);
            case 'welcome':
            case 'blog_generated':
            case 'blog_published':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-5 h-5 rounded-[6px] bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                        size: 11,
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 397,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                    lineNumber: 396,
                    columnNumber: 11
                }, this);
            case 'system':
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-5 h-5 rounded-[6px] bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center text-white shadow-xs",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Notification01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notification01Icon"], {
                        size: 11,
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 404,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                    lineNumber: 403,
                    columnNumber: 11
                }, this);
        }
    };
    const unreadCount = notifications.filter((n)=>n.unread).length;
    const categories = [
        {
            id: 'all',
            label: 'All'
        },
        {
            id: 'chats',
            label: 'Chats'
        },
        {
            id: 'calls',
            label: 'Calls'
        },
        {
            id: 'mail',
            label: 'Mail'
        },
        {
            id: 'social',
            label: 'Social'
        },
        {
            id: 'system',
            label: 'System'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full w-full bg-[#f8fafc] dark:bg-[#0b141a] select-none",
        children: [
            isNative ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-b-[24px] shadow-md shrink-0 sticky top-0 z-40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 pt-[calc(0.75rem+env(safe-area-inset-top,12px))] pb-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleBack,
                                        className: "w-8 h-8 rounded-[8px] bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all active:scale-95 shadow-xs cursor-pointer shrink-0",
                                        title: "Back",
                                        "aria-label": "Back",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                        lineNumber: 428,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-base font-black text-white leading-tight",
                                                children: "Notifications"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                                lineNumber: 437,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-blue-100 font-medium",
                                                children: unreadCount === 0 ? "All caught up" : `${unreadCount} unread`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                                lineNumber: 438,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                        lineNumber: 436,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                lineNumber: 427,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: markAllRead,
                                        className: "text-xs font-bold px-2.5 py-1.5 rounded-[8px] bg-white/20 hover:bg-white/30 text-white transition active:scale-95 cursor-pointer shadow-xs",
                                        title: "Mark all as read",
                                        children: "Mark Read"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                        lineNumber: 447,
                                        columnNumber: 17
                                    }, this),
                                    notifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: clearAll,
                                        className: "w-8 h-8 rounded-[8px] bg-white/15 hover:bg-red-500/80 flex items-center justify-center text-white transition active:scale-95 cursor-pointer border border-white/20",
                                        title: "Clear all",
                                        "aria-label": "Clear all",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                            lineNumber: 462,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                        lineNumber: 456,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                lineNumber: 445,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 426,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 px-4 pb-3 overflow-x-auto no-scrollbar",
                        children: [
                            categories.map((cat)=>{
                                const count = getCategoryCount(cat.id);
                                const isActive = activeCategory === cat.id;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveCategory(cat.id),
                                    className: `px-3 py-1 rounded-[8px] text-[11px] font-bold transition-all cursor-pointer shrink-0 flex items-center gap-1 ${isActive ? 'bg-white text-blue-700 shadow-xs' : 'bg-white/15 text-white hover:bg-white/25'}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: cat.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                            lineNumber: 482,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[10px] px-1 py-0.2 rounded-[4px] font-black ${isActive ? 'bg-blue-100 text-blue-800' : 'bg-white/20 text-white'}`,
                                            children: count
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                            lineNumber: 483,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, cat.id, true, {
                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                    lineNumber: 474,
                                    columnNumber: 17
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setUnreadOnly(!unreadOnly),
                                className: `px-3 py-1 rounded-[8px] text-[11px] font-bold transition-all cursor-pointer shrink-0 border ml-1 ${unreadOnly ? 'bg-amber-400 text-slate-900 border-amber-300 shadow-xs' : 'bg-transparent text-white/80 border-white/20 hover:bg-white/10'}`,
                                children: "Unread only"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                lineNumber: 491,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 469,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                lineNumber: 425,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-header card-header sticky top-0 z-50 px-4 sm:px-6 py-3.5 bg-white dark:bg-[#111827] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shadow-xs shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleBack,
                                className: "p-1.5 rounded-[8px] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer",
                                title: "Back",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                    lineNumber: 510,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                lineNumber: 505,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Notification01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notification01Icon"], {
                                                size: 18,
                                                className: "text-blue-600 dark:text-blue-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                                lineNumber: 514,
                                                columnNumber: 17
                                            }, this),
                                            " Notifications"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                        lineNumber: 513,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-400 font-medium",
                                        children: unreadCount === 0 ? "All caught up" : `${unreadCount} unread`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                        lineNumber: 516,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                lineNumber: 512,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 504,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-[8px] border border-slate-200/60 dark:border-slate-700/60",
                                children: categories.map((cat)=>{
                                    const count = getCategoryCount(cat.id);
                                    const isActive = activeCategory === cat.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setActiveCategory(cat.id),
                                        className: `px-2.5 py-1 rounded-[6px] text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${isActive ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs' : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: cat.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                                lineNumber: 537,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] opacity-70",
                                                children: [
                                                    "(",
                                                    count,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                                lineNumber: 538,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, cat.id, true, {
                                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                        lineNumber: 529,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                lineNumber: 524,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setUnreadOnly(!unreadOnly),
                                className: `px-2.5 py-1 rounded-[8px] text-xs font-bold transition cursor-pointer border ${unreadOnly ? 'bg-blue-600 text-white border-blue-600 shadow-xs' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`,
                                children: "Unread"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                lineNumber: 544,
                                columnNumber: 13
                            }, this),
                            unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: markAllRead,
                                className: "text-xs font-bold px-3 py-1.5 rounded-[8px] bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 transition cursor-pointer border border-blue-200 dark:border-blue-900",
                                title: "Mark all read",
                                children: "Mark Read"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                lineNumber: 555,
                                columnNumber: 15
                            }, this),
                            notifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: clearAll,
                                className: "p-1.5 rounded-[8px] text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition cursor-pointer",
                                title: "Clear all",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                    lineNumber: 570,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                lineNumber: 565,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 523,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                lineNumber: 503,
                columnNumber: 9
            }, this),
            !isNative && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sm:hidden flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-[#111827] border-b border-slate-200 dark:border-slate-800 overflow-x-auto no-scrollbar shrink-0",
                children: categories.map((cat)=>{
                    const count = getCategoryCount(cat.id);
                    const isActive = activeCategory === cat.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveCategory(cat.id),
                        className: `px-2.5 py-1 rounded-[8px] text-xs font-bold transition cursor-pointer shrink-0 flex items-center gap-1 ${isActive ? 'bg-blue-600 text-white shadow-xs' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: cat.label
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                lineNumber: 592,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] opacity-80",
                                children: [
                                    "(",
                                    count,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                lineNumber: 593,
                                columnNumber: 17
                            }, this)
                        ]
                    }, cat.id, true, {
                        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                        lineNumber: 584,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                lineNumber: 579,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex-1 overflow-y-auto w-full max-w-3xl mx-auto py-3 sm:py-5 px-3 sm:px-6 ${isNative ? "pb-[calc(6.5rem+env(safe-area-inset-bottom,0px))]" : "pb-12"} no-scrollbar`,
                children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2.5",
                    children: [
                        1,
                        2,
                        3,
                        4
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full bg-white dark:bg-[#111827] rounded-[10px] p-3.5 border border-slate-200/80 dark:border-slate-800 animate-pulse flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-[8px] bg-slate-200 dark:bg-slate-800 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                    lineNumber: 609,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 space-y-1.5 pt-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-3 w-3/5 bg-slate-200 dark:bg-slate-800 rounded-[6px]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                            lineNumber: 611,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-2.5 w-4/5 bg-slate-100 dark:bg-slate-800/60 rounded-[6px]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                            lineNumber: 612,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                    lineNumber: 610,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                            lineNumber: 605,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                    lineNumber: 603,
                    columnNumber: 11
                }, this) : filteredNotifications.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2.5",
                    children: filteredNotifications.map((notification, idx)=>{
                        var _notification_metadata;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>handleNotificationClick(notification),
                            style: {
                                animationDelay: `${idx * 25}ms`
                            },
                            className: `relative flex items-start gap-3 p-3.5 rounded-[10px] transition-all duration-200 cursor-pointer group hover:scale-[1.006] border shadow-xs ${notification.unread ? 'bg-white dark:bg-[#111827] border-blue-200 dark:border-blue-900/60' : 'bg-white dark:bg-[#111827] border-slate-200/80 dark:border-slate-800 opacity-85 hover:opacity-100'}`,
                            children: [
                                notification.unread && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-3 bottom-3 left-0 w-1 bg-blue-600 rounded-r-[4px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                    lineNumber: 631,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative shrink-0 mt-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                            className: "w-10 h-10 rounded-[8px] border border-slate-200 dark:border-slate-700 shadow-2xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                    src: notification.avatar,
                                                    className: "object-cover rounded-[8px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                                    lineNumber: 637,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                    className: "rounded-[8px] bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-sm",
                                                    children: (notification.user || 'N').substring(0, 1).toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                                    lineNumber: 638,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                            lineNumber: 636,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute -bottom-1 -right-1 group-hover:scale-110 transition-transform",
                                            children: getIcon(notification.type)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                            lineNumber: 642,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                    lineNumber: 635,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0 pt-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs leading-relaxed text-slate-800 dark:text-slate-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-slate-900 dark:text-white",
                                                    children: notification.user
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                                    lineNumber: 650,
                                                    columnNumber: 21
                                                }, this),
                                                ' ',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-500 dark:text-slate-400 font-medium",
                                                    children: notification.action
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                                    lineNumber: 651,
                                                    columnNumber: 21
                                                }, this),
                                                notification.target && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-blue-600 dark:text-blue-400",
                                                    children: [
                                                        " ",
                                                        notification.target
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                                    lineNumber: 653,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                            lineNumber: 649,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-400 font-semibold",
                                                    children: notification.time
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                                    lineNumber: 657,
                                                    columnNumber: 21
                                                }, this),
                                                ((_notification_metadata = notification.metadata) === null || _notification_metadata === void 0 ? void 0 : _notification_metadata.aggregatedCount) > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] px-1.5 py-0.2 rounded-[4px] bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold border border-blue-200 dark:border-blue-900",
                                                    children: [
                                                        notification.metadata.aggregatedCount,
                                                        " updates"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                                    lineNumber: 661,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                            lineNumber: 656,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                    lineNumber: 648,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 shrink-0 ml-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>markSingleRead(notification.id, e),
                                            className: `p-1 rounded-[6px] transition-colors cursor-pointer ${notification.unread ? 'text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/50' : 'text-slate-300 dark:text-slate-600 hover:text-slate-500'}`,
                                            title: notification.unread ? 'Mark as read' : 'Mark as unread',
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                                lineNumber: 678,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                            lineNumber: 670,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>deleteSingleNotification(notification.id, e),
                                            className: "p-1 rounded-[6px] text-slate-300 dark:text-slate-600 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors cursor-pointer",
                                            title: "Dismiss notification",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                                lineNumber: 685,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                            lineNumber: 680,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                    lineNumber: 669,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, notification.id, true, {
                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                            lineNumber: 620,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                    lineNumber: 618,
                    columnNumber: 11
                }, this) : /* ── Premium Zero-Demo Empty State With Real-time Test Trigger ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center text-center px-4 py-16 sm:py-24 bg-white dark:bg-[#111827] rounded-[10px] border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 rounded-[10px] bg-gradient-to-br from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center border border-blue-500/20 shadow-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Notification01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notification01Icon"], {
                                size: 24
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                lineNumber: 695,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                            lineNumber: 694,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-slate-900 dark:text-white",
                                    children: activeCategory === 'all' ? "You're all caught up!" : `No ${activeCategory} notifications`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                    lineNumber: 698,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-400 max-w-xs leading-relaxed mt-1",
                                    children: "Live alerts for incoming chats, calls, social activity, emails, and system updates will appear here in real time."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                    lineNumber: 701,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                            lineNumber: 697,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 pt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: sendTestNotification,
                                    disabled: isSendingTest,
                                    className: "px-3.5 py-1.5 rounded-[8px] bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs shadow-xs transition-all cursor-pointer active:scale-95 border border-slate-200/80 dark:border-slate-700 flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                            size: 13,
                                            className: "text-purple-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                            lineNumber: 711,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: isSendingTest ? "Sending..." : "Send Test Notification"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                            lineNumber: 712,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                    lineNumber: 706,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleBack,
                                    className: "px-4 py-1.5 rounded-[8px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-xs hover:opacity-90 transition-all cursor-pointer active:scale-95",
                                    children: "Back to Home"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                                    lineNumber: 714,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                            lineNumber: 705,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                    lineNumber: 693,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
                lineNumber: 601,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/screens/NotificationsScreen.tsx",
        lineNumber: 422,
        columnNumber: 5
    }, this);
}
_s(NotificationsScreen, "qC4IlO+z4F74Z+pv74C0CWkGtQo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = NotificationsScreen;
const __TURBOPACK__default__export__ = NotificationsScreen;
var _c;
__turbopack_context__.k.register(_c, "NotificationsScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b2d90f91._.js.map