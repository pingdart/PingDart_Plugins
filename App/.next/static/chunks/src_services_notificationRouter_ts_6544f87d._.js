(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
]);

//# sourceMappingURL=src_services_notificationRouter_ts_6544f87d._.js.map