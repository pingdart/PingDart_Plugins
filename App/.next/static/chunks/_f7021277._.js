(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/chat/InAppChatToast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeToastBody",
    ()=>sanitizeToastBody,
    "showInAppChatToast",
    ()=>showInAppChatToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Comment01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/LockIcon.js [app-client] (ecmascript)");
"use client";
;
;
;
function sanitizeToastBody(rawBody) {
    if (!rawBody || typeof rawBody !== "string") return "You received a new message";
    const trimmed = rawBody.trim();
    if (!trimmed) return "You received a new message";
    // If payload is a JSON string (e.g. E2EE payload, pushPreview, or structured object)
    if (trimmed.startsWith("{")) {
        try {
            const parsed = JSON.parse(trimmed);
            if (parsed.pushPreview && typeof parsed.pushPreview === "string" && !parsed.pushPreview.startsWith("{")) {
                return parsed.pushPreview.length > 80 ? parsed.pushPreview.slice(0, 80) + "…" : parsed.pushPreview;
            }
            if (parsed.preview && typeof parsed.preview === "string" && !parsed.preview.startsWith("{")) {
                return parsed.preview.length > 80 ? parsed.preview.slice(0, 80) + "…" : parsed.preview;
            }
            if (parsed.text && typeof parsed.text === "string" && !parsed.text.startsWith("{")) {
                return parsed.text.length > 80 ? parsed.text.slice(0, 80) + "…" : parsed.text;
            }
            if (parsed.__e2ee || parsed._e2ee || parsed.ciphertext || parsed.senderBody || parsed.type && parsed.body) {
                return "🔒 Encrypted message";
            }
        } catch (_) {}
    }
    // If string contains raw cryptographic/E2EE signatures
    if (trimmed.includes("__e2ee") || trimmed.includes("_e2ee") || trimmed.includes('"ciphertext"') || trimmed.includes('"senderBody"') || trimmed.includes('"type"') && trimmed.includes('"body"')) {
        return "🔒 Encrypted message";
    }
    return trimmed.length > 80 ? trimmed.slice(0, 80) + "…" : trimmed;
}
function showInAppChatToast({ roomId, senderId, title, body, avatarUrl, senderName, isLocked = false }) {
    // If this message was sent by the current logged-in user, never show a toast
    if ("object" !== "undefined" && senderId) {
        try {
            let currentUserId = null;
            try {
                var _useAuthStore_getState_user;
                const { useAuthStore } = __turbopack_context__.r("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
                currentUserId = (_useAuthStore_getState_user = useAuthStore.getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
            } catch (_) {}
            if (!currentUserId) {
                try {
                    var _JSON_parse;
                    const storedUser = localStorage.getItem("user");
                    if (storedUser) currentUserId = (_JSON_parse = JSON.parse(storedUser)) === null || _JSON_parse === void 0 ? void 0 : _JSON_parse.id;
                } catch (_) {}
            }
            if (!currentUserId) {
                currentUserId = localStorage.getItem("userId");
            }
            if (currentUserId && String(senderId) === String(currentUserId)) {
                return;
            }
        } catch (_) {}
    }
    // Only suppress the toast if this exact chat room is currently open and
    // visible in the foreground (ChatDetail mounted with this roomId).
    // We rely on sessionStorage written by ChatDetail on mount/unmount.
    if ("TURBOPACK compile-time truthy", 1) {
        try {
            const activeRoomId = sessionStorage.getItem("pingdart_active_chat_room");
            if (activeRoomId && String(activeRoomId) === String(roomId) && document.visibilityState === "visible") {
                return;
            }
        } catch (_) {}
    }
    // When the chat is locked, never reveal the real sender or message content
    const displayName = isLocked ? "Someone" : senderName || title || "New Message";
    const displayBody = isLocked ? "🔒 New message" : sanitizeToastBody(body);
    const displayAvatar = isLocked ? null : avatarUrl;
    const initials = displayName.substring(0, 2).toUpperCase();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].custom((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(t);
                if ("TURBOPACK compile-time truthy", 1) {
                    try {
                        window.dispatchEvent(new CustomEvent("select_chat_room", {
                            detail: {
                                roomId: Number(roomId)
                            }
                        }));
                        const { encodeMsgId } = __turbopack_context__.r("[project]/src/lib/utils.ts [app-client] (ecmascript)");
                        const encoded = encodeMsgId(Number(roomId));
                        if (window.location.pathname.startsWith('/user')) {
                            window.history.pushState(null, "", `/user?tab=Chats&msgId=${encoded}`);
                        } else {
                            window.location.href = `/user?tab=Chats&msgId=${encoded}`;
                        }
                    } catch (_) {
                        if (window.location.pathname.startsWith('/user')) {
                            window.history.pushState(null, "", `/user?tab=Chats&msgId=${roomId}`);
                        } else {
                            window.location.href = `/user?tab=Chats&msgId=${roomId}`;
                        }
                    }
                }
            },
            className: "w-full max-w-[390px] mx-auto md:ml-auto md:mr-0 p-3.5 rounded-2xl bg-white/95 dark:bg-[#181a20]/95 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl dark:shadow-2xl dark:shadow-black/60 cursor-pointer transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center gap-3 select-none",
            style: {
                pointerEvents: "auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative shrink-0",
                    children: [
                        displayAvatar ? // eslint-disable-next-line @next/next/no-img-element
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: displayAvatar,
                            alt: displayName,
                            className: "w-11 h-11 rounded-full object-cover border border-slate-200 dark:border-slate-700",
                            onError: (e)=>{
                                // Fallback to initials if image fails
                                e.currentTarget.style.display = "none";
                                if (e.currentTarget.nextElementSibling) {
                                    e.currentTarget.nextElementSibling.style.display = "flex";
                                }
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/InAppChatToast.tsx",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: displayAvatar ? "none" : "flex"
                            },
                            className: isLocked ? "w-11 h-11 rounded-full bg-gradient-to-tr from-slate-400 to-slate-500 dark:from-slate-600 dark:to-slate-700 text-white font-bold text-sm items-center justify-center shadow-sm" : "w-11 h-11 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-sm items-center justify-center shadow-sm",
                            children: isLocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockIcon"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/InAppChatToast.tsx",
                                lineNumber: 167,
                                columnNumber: 25
                            }, this) : initials
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/InAppChatToast.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        isLocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-slate-400 dark:bg-slate-600 border-2 border-white dark:border-[#181a20] rounded-full flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockIcon"], {
                                size: 7,
                                className: "text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/InAppChatToast.tsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/InAppChatToast.tsx",
                            lineNumber: 171,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#00a884] border-2 border-white dark:border-[#181a20] rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/InAppChatToast.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/InAppChatToast.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 min-w-0 pr-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-1 mb-0.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold text-slate-900 dark:text-white truncate",
                                    children: displayName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/InAppChatToast.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-medium text-slate-400 dark:text-slate-500 shrink-0",
                                    children: "now"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/chat/InAppChatToast.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/chat/InAppChatToast.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-600 dark:text-slate-300 line-clamp-1 break-words",
                            children: displayBody
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/InAppChatToast.tsx",
                            lineNumber: 189,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/InAppChatToast.tsx",
                    lineNumber: 180,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Comment01Icon"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/InAppChatToast.tsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/InAppChatToast.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: (e)=>{
                                e.stopPropagation();
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].dismiss(t);
                            },
                            className: "p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors",
                            title: "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/chat/InAppChatToast.tsx",
                                lineNumber: 208,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/chat/InAppChatToast.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/chat/InAppChatToast.tsx",
                    lineNumber: 195,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/chat/InAppChatToast.tsx",
            lineNumber: 115,
            columnNumber: 7
        }, this), {
        duration: 4500,
        position: "object" !== "undefined" && (window.innerWidth < 768 || document.documentElement.classList.contains("is-native") || document.documentElement.getAttribute("data-is-native") === "true") ? "top-center" : "top-right"
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@hugeicons/core-free-icons/dist/esm/Comment01Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Comment01Icon
]);
const Comment01Icon = /*#__PURE__*/ [
    [
        "path",
        {
            d: "M8 13.5H16M8 8.5H12",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5",
            key: "0"
        }
    ],
    [
        "path",
        {
            d: "M6.09881 19C4.7987 18.8721 3.82475 18.4816 3.17157 17.8284C2 16.6569 2 14.7712 2 11V10.5C2 6.72876 2 4.84315 3.17157 3.67157C4.34315 2.5 6.22876 2.5 10 2.5H14C17.7712 2.5 19.6569 2.5 20.8284 3.67157C22 4.84315 22 6.72876 22 10.5V11C22 14.7712 22 16.6569 20.8284 17.8284C19.6569 19 17.7712 19 14 19C13.4395 19.0125 12.9931 19.0551 12.5546 19.155C11.3562 19.4309 10.2465 20.0441 9.14987 20.5789C7.58729 21.3408 6.806 21.7218 6.31569 21.3651C5.37769 20.6665 6.29454 18.5019 6.5 17.5",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "1.5",
            key: "1"
        }
    ]
];
;
 //# sourceMappingURL=Comment01Icon.js.map
}),
"[project]/node_modules/@hugeicons/core-free-icons/dist/esm/Comment01Icon.js [app-client] (ecmascript) <export default as Comment01Icon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Comment01Icon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$core$2d$free$2d$icons$2f$dist$2f$esm$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$core$2d$free$2d$icons$2f$dist$2f$esm$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hugeicons/core-free-icons/dist/esm/Comment01Icon.js [app-client] (ecmascript)");
}),
"[project]/node_modules/hugeicons-react/dist/esm/icons/Comment01Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license hugeicons-react v0.4.0
 *
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "Comment01Icon",
    ()=>Comment01Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@hugeicons/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$react$2f$dist$2f$esm$2f$HugeiconsIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hugeicons/react/dist/esm/HugeiconsIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$core$2d$free$2d$icons$2f$dist$2f$esm$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Comment01Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/@hugeicons/core-free-icons/dist/esm/Comment01Icon.js [app-client] (ecmascript) <export default as Comment01Icon>");
;
;
;
const Comment01Icon = (props)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$react$2f$dist$2f$esm$2f$HugeiconsIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HugeiconsIcon"], {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$core$2d$free$2d$icons$2f$dist$2f$esm$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Comment01Icon$3e$__["Comment01Icon"],
        ...props
    });
};
Comment01Icon.displayName = "Comment01Icon";
;
}),
]);

//# sourceMappingURL=_f7021277._.js.map