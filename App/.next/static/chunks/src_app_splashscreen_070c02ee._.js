(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/splashscreen/components/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ONBOARDING_DONE_EVENT",
    ()=>ONBOARDING_DONE_EVENT,
    "getAuthToken",
    ()=>getAuthToken,
    "getInitialSlideFromUrl",
    ()=>getInitialSlideFromUrl,
    "isNativeApp",
    ()=>isNativeApp,
    "isNativeAppOrMobile",
    ()=>isNativeAppOrMobile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
;
;
const ONBOARDING_DONE_EVENT = "onboarding:done";
function getAuthToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const rawAccess = localStorage.getItem("access_token");
        if (rawAccess && rawAccess !== "null" && rawAccess !== "undefined") return rawAccess;
        const rawAuth = localStorage.getItem("auth_token");
        if (rawAuth && rawAuth !== "null" && rawAuth !== "undefined") return rawAuth;
        const rawToken = localStorage.getItem("token");
        if (rawToken && rawToken !== "null" && rawToken !== "undefined") return rawToken;
        const zustandToken = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().accessToken;
        if (zustandToken && zustandToken !== "null") return zustandToken;
        return null;
    } catch (e) {
        return null;
    }
}
function isNativeApp() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        var _Capacitor_isNativePlatform, _Capacitor, _webkit_messageHandlers, _webkit;
        // Electron MUST be excluded first — @capacitor-community/electron makes
        // Capacitor.isNativePlatform() return true, but Electron is a desktop app.
        const ua = navigator.userAgent.toLowerCase();
        const isElectron = ua.includes("electron") || !!window.__ELECTRON__;
        if (isElectron) return false;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) return true;
        if ((_Capacitor = window.Capacitor) === null || _Capacitor === void 0 ? void 0 : (_Capacitor_isNativePlatform = _Capacitor.isNativePlatform) === null || _Capacitor_isNativePlatform === void 0 ? void 0 : _Capacitor_isNativePlatform.call(_Capacitor)) return true;
        if (document.documentElement.classList.contains("is-native")) return true;
        if (document.documentElement.getAttribute("data-is-native") === "true") return true;
        if (ua.includes("pingdartnative")) return true;
        if (window.androidBridge !== undefined) return true;
        if ((_webkit = window.webkit) === null || _webkit === void 0 ? void 0 : (_webkit_messageHandlers = _webkit.messageHandlers) === null || _webkit_messageHandlers === void 0 ? void 0 : _webkit_messageHandlers.bridge) return true;
        if (window.location.protocol === "capacitor:" || window.location.protocol === "ionic:") return true;
        return false;
    } catch (e) {
        return false;
    }
}
function isNativeAppOrMobile() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        if (isNativeApp()) return true;
        return false;
    } catch (e) {
        return false;
    }
}
function getInitialSlideFromUrl(maxSlides = 6) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const params = new URLSearchParams(window.location.search);
        const step = parseInt(params.get("step") || "1", 10);
        if (!isNaN(step) && step >= 1 && step <= maxSlides) {
            return step - 1;
        }
    } catch (e) {}
    return 0;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/splashscreen/components/PermissionsList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PermissionsList",
    ()=>PermissionsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Camera01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mic01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Folder01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Notification01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Notification01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$TickDouble01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/TickDouble01Icon.js [app-client] (ecmascript)");
"use client";
;
;
function PermissionsList({ permissions, hasGrantedAll = false, onRequestCamera, onRequestMic, onRequestFiles, onRequestContacts, onRequestNotification }) {
    const totalCount = 5;
    const grantedCount = [
        permissions.camera,
        permissions.mic,
        permissions.files,
        permissions.contacts,
        permissions.notifications
    ].filter(Boolean).length;
    const allGranted = grantedCount === totalCount || hasGrantedAll;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-[270px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-white/40 dark:border-slate-800 rounded-2xl p-2.5 shadow-2xl space-y-1.5 text-left max-h-[220px] overflow-y-auto pointer-events-auto transition-colors",
        children: [
            allGranted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-1.5 px-2 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-emerald-800 dark:text-emerald-300 animate-in fade-in duration-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$TickDouble01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TickDouble01Icon"], {
                                className: "w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                lineNumber: 50,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-extrabold",
                                children: "All 5 Permissions Granted"
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                lineNumber: 51,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                        lineNumber: 49,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-600 text-white",
                        children: "Ready"
                    }, void 0, false, {
                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                        lineNumber: 53,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                lineNumber: 48,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-1 text-[9px] font-semibold text-slate-500 dark:text-slate-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "App Permissions"
                    }, void 0, false, {
                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                        lineNumber: 57,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-bold text-slate-700 dark:text-slate-300",
                        children: [
                            grantedCount,
                            " of ",
                            totalCount,
                            " Allowed"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                        lineNumber: 58,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                lineNumber: 56,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-1.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 rounded-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-6 rounded-md bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera01Icon"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                lineNumber: 64,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[10px] font-bold text-slate-800 dark:text-slate-200",
                                        children: "Camera"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                        lineNumber: 68,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[8px] text-slate-500 dark:text-slate-400",
                                        children: "Photos & HD video calls"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                        lineNumber: 69,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                lineNumber: 67,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onRequestCamera,
                        disabled: permissions.camera,
                        className: `px-2 py-0.5 rounded-md text-[9px] font-bold transition-all ${permissions.camera ? "bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center gap-0.5" : "bg-purple-600 hover:bg-purple-700 text-white shadow-2xs cursor-pointer"}`,
                        children: permissions.camera ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                    className: "w-2.5 h-2.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                    lineNumber: 80,
                                    columnNumber: 45
                                }, this),
                                " Allowed"
                            ]
                        }, void 0, true) : "Allow"
                    }, void 0, false, {
                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-1.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 rounded-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-6 rounded-md bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mic01Icon"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                lineNumber: 87,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[10px] font-bold text-slate-800 dark:text-slate-200",
                                        children: "Microphone"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                        lineNumber: 91,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[8px] text-slate-500 dark:text-slate-400",
                                        children: "Voice notes & calls"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                        lineNumber: 92,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onRequestMic,
                        disabled: permissions.mic,
                        className: `px-2 py-0.5 rounded-md text-[9px] font-bold transition-all ${permissions.mic ? "bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center gap-0.5" : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-2xs cursor-pointer"}`,
                        children: permissions.mic ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                    className: "w-2.5 h-2.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                    lineNumber: 103,
                                    columnNumber: 42
                                }, this),
                                " Allowed"
                            ]
                        }, void 0, true) : "Allow"
                    }, void 0, false, {
                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                        lineNumber: 95,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-1.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 rounded-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-6 rounded-md bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder01Icon"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                    lineNumber: 111,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                lineNumber: 110,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[10px] font-bold text-slate-800 dark:text-slate-200",
                                        children: "Media & Files"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                        lineNumber: 114,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[8px] text-slate-500 dark:text-slate-400",
                                        children: "Send docs & attachments"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                        lineNumber: 115,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                lineNumber: 113,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onRequestFiles,
                        disabled: permissions.files,
                        className: `px-2 py-0.5 rounded-md text-[9px] font-bold transition-all ${permissions.files ? "bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center gap-0.5" : "bg-blue-600 hover:bg-blue-700 text-white shadow-2xs cursor-pointer"}`,
                        children: permissions.files ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                    className: "w-2.5 h-2.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                    lineNumber: 126,
                                    columnNumber: 44
                                }, this),
                                " Allowed"
                            ]
                        }, void 0, true) : "Allow"
                    }, void 0, false, {
                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-1.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 rounded-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-6 rounded-md bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                    lineNumber: 134,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                lineNumber: 133,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[10px] font-bold text-slate-800 dark:text-slate-200",
                                        children: "Contacts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                        lineNumber: 137,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[8px] text-slate-500 dark:text-slate-400",
                                        children: "Find workspace team"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                        lineNumber: 138,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                lineNumber: 136,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                        lineNumber: 132,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onRequestContacts,
                        disabled: permissions.contacts,
                        className: `px-2 py-0.5 rounded-md text-[9px] font-bold transition-all ${permissions.contacts ? "bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center gap-0.5" : "bg-pink-600 hover:bg-pink-700 text-white shadow-2xs cursor-pointer"}`,
                        children: permissions.contacts ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                    className: "w-2.5 h-2.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                    lineNumber: 149,
                                    columnNumber: 47
                                }, this),
                                " Allowed"
                            ]
                        }, void 0, true) : "Allow"
                    }, void 0, false, {
                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                        lineNumber: 141,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                lineNumber: 131,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-1.5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 rounded-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-6 rounded-md bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Notification01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notification01Icon"], {
                                    className: "w-3.5 h-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                    lineNumber: 157,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                lineNumber: 156,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-[10px] font-bold text-slate-800 dark:text-slate-200",
                                        children: "Notifications"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                        lineNumber: 160,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[8px] text-slate-500 dark:text-slate-400",
                                        children: "Instant alerts & call rings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                        lineNumber: 161,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                lineNumber: 159,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                        lineNumber: 155,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onRequestNotification,
                        disabled: permissions.notifications,
                        className: `px-2 py-0.5 rounded-md text-[9px] font-bold transition-all ${permissions.notifications ? "bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center gap-0.5" : "bg-amber-600 hover:bg-amber-700 text-white shadow-2xs cursor-pointer"}`,
                        children: permissions.notifications ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                    className: "w-2.5 h-2.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                                    lineNumber: 172,
                                    columnNumber: 52
                                }, this),
                                " Allowed"
                            ]
                        }, void 0, true) : "Allow"
                    }, void 0, false, {
                        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                        lineNumber: 164,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
                lineNumber: 154,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/splashscreen/components/PermissionsList.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
_c = PermissionsList;
var _c;
__turbopack_context__.k.register(_c, "PermissionsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/splashscreen/components/slidesData.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSlides",
    ()=>createSlides
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mail01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Comment01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CallIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Robot01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Robot01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Notification01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Notification01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/LockIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$TickDouble01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/TickDouble01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mic01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Video02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$splashscreen$2f$components$2f$PermissionsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/splashscreen/components/PermissionsList.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function createSlides({ appName, permissions, hasGrantedAll = false, onRequestCamera, onRequestMic, onRequestFiles, onRequestContacts, onRequestNotification }) {
    const isReady = hasGrantedAll || permissions.camera && permissions.mic && permissions.files && permissions.contacts && permissions.notifications;
    return [
        {
            badge: "Email Workspace",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mail01Icon"], {
                className: "w-5 h-5 text-indigo-600"
            }, void 0, false, {
                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                lineNumber: 52,
                columnNumber: 19
            }, this),
            heroBg: "from-blue-600 via-indigo-600 to-indigo-800",
            accentBg: "bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800",
            accentShadow: "shadow-indigo-600/35",
            title: "SECURE BUSINESS EMAIL",
            description: "Encrypted custom-domain webmail with instant IMAP sync, rich HTML editor & unified inbox.",
            imageSrc: "/images/onboarding/slide1_email.png",
            topIllustration: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[260px] bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/40 space-y-3 text-slate-800 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-indigo-600 text-white font-black text-xs flex items-center justify-center shadow-md",
                                        children: "PD"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                        lineNumber: 63,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-bold text-slate-900",
                                                children: "team@pingdart.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                                lineNumber: 67,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[10px] text-slate-500",
                                                children: "Security Update • Just now"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                                lineNumber: 68,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                        lineNumber: 66,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                lineNumber: 62,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockIcon"], {
                                        className: "w-3 h-3 text-emerald-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                        lineNumber: 72,
                                        columnNumber: 29
                                    }, this),
                                    "E2EE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                lineNumber: 71,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                        lineNumber: 61,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 leading-snug",
                        children: "Your encryption keys are synced across your mobile & desktop sessions."
                    }, void 0, false, {
                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                        lineNumber: 76,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                lineNumber: 60,
                columnNumber: 17
            }, this)
        },
        {
            badge: "Team Chat",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Comment01Icon"], {
                className: "w-5 h-5 text-pink-600"
            }, void 0, false, {
                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                lineNumber: 84,
                columnNumber: 19
            }, this),
            heroBg: "from-pink-500 via-rose-600 to-purple-700",
            accentBg: "bg-pink-600 hover:bg-pink-700 active:bg-pink-800",
            accentShadow: "shadow-pink-600/35",
            title: "INSTANT TEAM CHAT",
            description: "Real-time 1-on-1 chats, group channels, voice notes, media attachments & reactions.",
            imageSrc: "/images/onboarding/slide2_chat.png",
            topIllustration: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[260px] bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/40 space-y-2.5 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 pb-1 border-b border-slate-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                lineNumber: 94,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-bold text-slate-900",
                                children: "Engineering Channel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                lineNumber: 95,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                        lineNumber: 93,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end justify-end gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-pink-600 text-white text-xs px-3 py-2 rounded-2xl rounded-tr-xs shadow-md",
                                children: "Deployment complete! All tests passed 🚀"
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                lineNumber: 98,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$TickDouble01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TickDouble01Icon"], {
                                className: "w-4 h-4 text-pink-500 shrink-0 mb-0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                lineNumber: 101,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                        lineNumber: 97,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 pt-0.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-slate-100 text-slate-700 border border-slate-200 text-[11px] px-2 py-0.5 rounded-full font-bold",
                                children: "❤️ 4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                lineNumber: 104,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-slate-100 text-slate-700 border border-slate-200 text-[11px] px-2 py-0.5 rounded-full font-bold",
                                children: "👍 8"
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                lineNumber: 107,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                        lineNumber: 103,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                lineNumber: 92,
                columnNumber: 17
            }, this)
        },
        {
            badge: "HD Calling",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallIcon"], {
                className: "w-5 h-5 text-emerald-600"
            }, void 0, false, {
                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                lineNumber: 116,
                columnNumber: 19
            }, this),
            heroBg: "from-emerald-500 via-teal-600 to-cyan-800",
            accentBg: "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800",
            accentShadow: "shadow-emerald-600/35",
            title: "HD VIDEO & AUDIO CALLS",
            description: "Crystal-clear WebRTC video calling, noise cancellation, screen sharing, and group rooms.",
            imageSrc: "/images/onboarding/slide3_calls.png",
            topIllustration: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[260px] bg-slate-900/90 backdrop-blur-md border border-white/20 text-white rounded-2xl p-4 shadow-2xl flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-xs shadow-md",
                                        children: "JD"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                        lineNumber: 127,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                        lineNumber: 130,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                lineNumber: 126,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-bold text-white",
                                        children: "Live HD Call"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                        lineNumber: 133,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] text-emerald-400 font-semibold",
                                        children: "Connected • 04:12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                        lineNumber: 134,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                lineNumber: 132,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                        lineNumber: 125,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-white/10 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mic01Icon"], {
                                    className: "w-4 h-4 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                    lineNumber: 139,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                lineNumber: 138,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-white/10 rounded-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Video02Icon"], {
                                    className: "w-4 h-4 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                    lineNumber: 142,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                lineNumber: 141,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 bg-red-500 rounded-full shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallIcon"], {
                                    className: "w-4 h-4 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                    lineNumber: 145,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                lineNumber: 144,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                        lineNumber: 137,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                lineNumber: 124,
                columnNumber: 17
            }, this)
        },
        {
            badge: "AI Assistant",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Robot01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Robot01Icon"], {
                className: "w-5 h-5 text-cyan-600"
            }, void 0, false, {
                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                lineNumber: 153,
                columnNumber: 19
            }, this),
            heroBg: "from-cyan-600 via-blue-600 to-indigo-800",
            accentBg: "bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800",
            accentShadow: "shadow-cyan-600/35",
            title: "AI SMART ASSISTANT",
            description: "Smart email reply generation, instant thread summarization, and intelligent workspace search.",
            imageSrc: "/images/onboarding/slide4_ai.png",
            topIllustration: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[260px] bg-white/95 backdrop-blur-md border border-cyan-100 rounded-2xl p-4 shadow-2xl space-y-2 text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 text-cyan-700 text-xs font-bold",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                className: "w-4 h-4 text-cyan-600 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                lineNumber: 163,
                                columnNumber: 25
                            }, this),
                            "AI Draft Suggestion"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                        lineNumber: 162,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-700 italic bg-cyan-50/60 p-2.5 rounded-xl border border-cyan-100/80 leading-relaxed",
                        children: '"Thanks for the update! I have reviewed the roadmap and approved the sprint schedule."'
                    }, void 0, false, {
                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                        lineNumber: 166,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                lineNumber: 161,
                columnNumber: 17
            }, this)
        },
        {
            badge: "Real-time Push",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Notification01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notification01Icon"], {
                className: "w-5 h-5 text-amber-600"
            }, void 0, false, {
                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                lineNumber: 174,
                columnNumber: 19
            }, this),
            heroBg: "from-amber-500 via-orange-600 to-red-700",
            accentBg: "bg-amber-600 hover:bg-amber-700 active:bg-amber-800",
            accentShadow: "shadow-amber-600/35",
            title: "INSTANT PUSH ALERTS",
            description: "Never miss an important message with real-time FCM push notifications for emails, chats & calls.",
            imageSrc: "/images/onboarding/slide5_push.png",
            topIllustration: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[260px] bg-white/95 backdrop-blur-md border border-white/40 rounded-2xl p-3.5 shadow-2xl flex items-center justify-between text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-lg shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Notification01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notification01Icon"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                    lineNumber: 185,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                lineNumber: 184,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-bold text-slate-900",
                                        children: [
                                            appName,
                                            " Alert"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                        lineNumber: 188,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-600",
                                        children: "New urgent email from Sarah"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                        lineNumber: 189,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                                lineNumber: 187,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                        lineNumber: 183,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-slate-400 font-bold",
                        children: "Now"
                    }, void 0, false, {
                        fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                        lineNumber: 192,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                lineNumber: 182,
                columnNumber: 17
            }, this)
        },
        {
            badge: isReady ? "Welcome Ready" : "App Permissions",
            icon: isReady ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                className: "w-5 h-5 text-emerald-400"
            }, void 0, false, {
                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                lineNumber: 198,
                columnNumber: 29
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                className: "w-5 h-5 text-purple-600"
            }, void 0, false, {
                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                lineNumber: 198,
                columnNumber: 81
            }, this),
            heroBg: isReady ? "from-emerald-600 via-teal-700 to-slate-900" : "from-purple-600 via-indigo-600 to-slate-900",
            accentBg: isReady ? "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800" : "bg-purple-600 hover:bg-purple-700 active:bg-purple-800",
            accentShadow: isReady ? "shadow-emerald-600/35" : "shadow-purple-600/35",
            title: isReady ? `WELCOME TO ${appName.toUpperCase()}` : "APP PERMISSIONS SETUP",
            description: isReady ? "All permissions configured! Your secure workspace, team chat, HD calling & AI assistant are ready." : "Allow media, contacts, storage & notifications for messaging experience.",
            imageSrc: "/images/onboarding/slide6_permissions.png",
            topIllustration: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$splashscreen$2f$components$2f$PermissionsList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PermissionsList"], {
                permissions: permissions,
                hasGrantedAll: hasGrantedAll,
                onRequestCamera: onRequestCamera,
                onRequestMic: onRequestMic,
                onRequestFiles: onRequestFiles,
                onRequestContacts: onRequestContacts,
                onRequestNotification: onRequestNotification
            }, void 0, false, {
                fileName: "[project]/src/app/splashscreen/components/slidesData.tsx",
                lineNumber: 208,
                columnNumber: 17
            }, this)
        }
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/splashscreen/components/SplashTransition.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SplashTransition",
    ()=>SplashTransition
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
function SplashTransition({ isTransitioning }) {
    if (!isTransitioning) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[10001] flex flex-col items-center justify-center bg-white dark:bg-[#0b141a] transition-colors duration-300",
        style: {
            animation: "onboarding-fade-in 280ms cubic-bezier(0.4,0,0.2,1) both"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes onboarding-fade-in {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes onboarding-logo-pop {
          0%   { opacity: 0; transform: scale(0.7); }
          60%  { transform: scale(1.08); }
          100% { opacity: 1; transform: scale(1); }
        }
      `
            }, void 0, false, {
                fileName: "[project]/src/app/splashscreen/components/SplashTransition.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    animation: "onboarding-logo-pop 320ms 80ms cubic-bezier(0.34,1.56,0.64,1) both"
                },
                className: "w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-2xl shadow-blue-900/60",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/logo_light.png",
                    alt: "Logo",
                    width: 40,
                    height: 40,
                    className: "object-contain",
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/src/app/splashscreen/components/SplashTransition.tsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/splashscreen/components/SplashTransition.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 w-24 h-0.5 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full bg-blue-500 rounded-full",
                        style: {
                            animation: "onboarding-progress 500ms linear both"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/splashscreen/components/SplashTransition.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                        children: `
          @keyframes onboarding-progress {
            from { width: 0%; }
            to   { width: 100%; }
          }
        `
                    }, void 0, false, {
                        fileName: "[project]/src/app/splashscreen/components/SplashTransition.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/splashscreen/components/SplashTransition.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/splashscreen/components/SplashTransition.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_c = SplashTransition;
var _c;
__turbopack_context__.k.register(_c, "SplashTransition");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/splashscreen/components/SplashHero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SplashHero",
    ()=>SplashHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
function SplashHero({ current, currentSlide, appName, currentHasValidImage, onPrev, onImageError }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full h-[58%] bg-gradient-to-br ${current.heroBg} rounded-b-[40px] shadow-lg flex flex-col items-center justify-between p-5 pt-[calc(1rem+env(safe-area-inset-top,12px))] overflow-hidden transition-all duration-700 ease-in-out`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-xl transition-all duration-700"
                    }, void 0, false, {
                        fileName: "[project]/src/app/splashscreen/components/SplashHero.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-5 -left-10 w-40 h-40 rounded-full bg-black/10 blur-xl transition-all duration-700"
                    }, void 0, false, {
                        fileName: "[project]/src/app/splashscreen/components/SplashHero.tsx",
                        lineNumber: 32,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/splashscreen/components/SplashHero.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex items-center justify-between relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/logo_light.png",
                                    alt: "Logo",
                                    width: 20,
                                    height: 20,
                                    className: "w-5 h-5 object-contain shrink-0",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/SplashHero.tsx",
                                    lineNumber: 49,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-black text-white tracking-wider uppercase",
                                    children: appName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/SplashHero.tsx",
                                    lineNumber: 57,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/splashscreen/components/SplashHero.tsx",
                            lineNumber: 48,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/splashscreen/components/SplashHero.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "p-1 rounded-full bg-white/20 backdrop-blur-sm text-white",
                                children: current.icon
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/SplashHero.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold text-white/90 bg-black/25 backdrop-blur-md px-2.5 py-1 rounded-full uppercase tracking-wider transition-all duration-500 animate-in fade-in zoom-in-95",
                                children: current.badge
                            }, `badge-${currentSlide}`, false, {
                                fileName: "[project]/src/app/splashscreen/components/SplashHero.tsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/splashscreen/components/SplashHero.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/splashscreen/components/SplashHero.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center w-full relative z-10 py-2 animate-in fade-in slide-in-from-bottom-3 duration-500 ease-out",
                children: currentHasValidImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full max-w-[350px] h-[350px] flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: current.imageSrc,
                        alt: current.title,
                        width: 350,
                        height: 350,
                        className: "w-auto h-full max-h-[350px] object-contain drop-shadow-2xl filter transform hover:scale-105 transition-transform duration-300",
                        onError: ()=>onImageError(current.imageSrc),
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/splashscreen/components/SplashHero.tsx",
                        lineNumber: 84,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/splashscreen/components/SplashHero.tsx",
                    lineNumber: 83,
                    columnNumber: 21
                }, this) : current.topIllustration
            }, `illustration-${currentSlide}`, false, {
                fileName: "[project]/src/app/splashscreen/components/SplashHero.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-2"
            }, void 0, false, {
                fileName: "[project]/src/app/splashscreen/components/SplashHero.tsx",
                lineNumber: 99,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/splashscreen/components/SplashHero.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
_c = SplashHero;
var _c;
__turbopack_context__.k.register(_c, "SplashHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/splashscreen/components/SplashControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SplashControls",
    ()=>SplashControls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$TickDouble01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/TickDouble01Icon.js [app-client] (ecmascript)");
"use client";
;
;
function SplashControls({ current, currentSlide, slides, isLastSlide, requestingPermissions, permissions, hasGrantedAll = false, appName = "PingDart", onSlideSelect, onNext, onPrev, onSkip, onGrantAll, onStartApp }) {
    const totalPermissions = 5;
    const grantedCount = permissions ? [
        permissions.camera,
        permissions.mic,
        permissions.files,
        permissions.contacts,
        permissions.notifications
    ].filter(Boolean).length : 0;
    const allGranted = grantedCount === totalPermissions;
    const isWelcomeState = isLastSlide && (allGranted || hasGrantedAll);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 flex flex-col justify-between p-6 sm:p-8 bg-white dark:bg-[#0b141a] text-center pb-[calc(1.5rem+env(safe-area-inset-bottom,16px))] transition-colors duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 pt-2 animate-in fade-in slide-in-from-bottom-4 duration-400 ease-out",
                children: isWelcomeState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold mb-1 animate-pulse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                    className: "w-3.5 h-3.5 text-emerald-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                    lineNumber: 68,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "You're All Set!"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                    lineNumber: 69,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                            lineNumber: 67,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-black text-[#1E293B] dark:text-[#E2E8F0] tracking-wide uppercase transition-colors",
                            children: [
                                "Welcome to ",
                                appName
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                            lineNumber: 71,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto transition-colors",
                            children: "All permissions configured! Your secure workspace, team chat, HD calling & AI assistant are ready."
                        }, void 0, false, {
                            fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                            lineNumber: 74,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl sm:text-2xl font-black text-[#1E293B] dark:text-[#E2E8F0] tracking-wide uppercase transition-colors",
                            children: current.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                            lineNumber: 80,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mx-auto transition-colors",
                            children: current.description
                        }, void 0, false, {
                            fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                            lineNumber: 83,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true)
            }, `text-${currentSlide}-${isWelcomeState ? "welcome" : "normal"}`, false, {
                fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            isLastSlide && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-2 py-1 animate-in fade-in duration-300",
                children: isWelcomeState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 shadow-2xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$TickDouble01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TickDouble01Icon"], {
                            className: "w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"
                        }, void 0, false, {
                            fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                            lineNumber: 95,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "All 5 Permissions Active & Synced"
                        }, void 0, false, {
                            fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                            lineNumber: 96,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                    lineNumber: 94,
                    columnNumber: 25
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-[11px] font-medium text-slate-600 dark:text-slate-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `w-2 h-2 rounded-full ${grantedCount > 0 ? "bg-emerald-500 animate-pulse" : "bg-purple-500"}`
                        }, void 0, false, {
                            fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                            lineNumber: 100,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Permissions Tracked:"
                        }, void 0, false, {
                            fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                            lineNumber: 101,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-slate-900 dark:text-white",
                            children: [
                                grantedCount,
                                "/",
                                totalPermissions,
                                " Granted"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                            lineNumber: 102,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                    lineNumber: 99,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                lineNumber: 92,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-2 py-2",
                children: slides.map((slideItem, i)=>{
                    const isSelected = i === currentSlide;
                    const activeColor = isWelcomeState && isSelected ? "bg-emerald-600 shadow-emerald-600/30" : slideItem.accentBg.split(" ")[0];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onSlideSelect(i),
                        className: `h-2 rounded-full transition-all duration-400 cursor-pointer ${isSelected ? `w-7 ${activeColor} shadow-sm` : "w-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"}`,
                        title: `Go to slide ${i + 1}`
                    }, i, false, {
                        fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                        lineNumber: 118,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between w-full pt-1",
                children: !isLastSlide ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                currentSlide > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onPrev,
                                    className: `w-14 h-14 dark:text-white light:text-black bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 transform hover:scale-105 active:scale-95 cursor-pointer d`,
                                    title: "Previous Slide",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                        lineNumber: 142,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                    lineNumber: 137,
                                    columnNumber: 33
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onSkip,
                                    className: "text-sm font-semibold text-slate-400 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors px-2 py-1 cursor-pointer",
                                    children: "Skip"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                    lineNumber: 145,
                                    columnNumber: 33
                                }, this),
                                currentSlide > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onSkip,
                                    className: "text-xs font-medium text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors px-1 py-1 cursor-pointer",
                                    children: "Skip"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                    lineNumber: 153,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                            lineNumber: 135,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onNext,
                            className: `w-14 h-14 ${current.accentBg} text-white rounded-full flex items-center justify-center shadow-lg ${current.accentShadow} transition-all duration-500 transform hover:scale-105 active:scale-95 cursor-pointer`,
                            title: "Next Slide",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                className: "w-7 h-7 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                lineNumber: 167,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                            lineNumber: 162,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true) : isWelcomeState ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2 w-full animate-in fade-in zoom-in-95 duration-300",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onPrev,
                                className: "h-[52px] w-[52px] rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-all transform active:scale-95 shrink-0 shadow-sm cursor-pointer",
                                title: "Previous Slide",
                                "aria-label": "Previous Slide",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                    lineNumber: 179,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                lineNumber: 173,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onStartApp || onGrantAll,
                                className: "flex-1 h-[52px] px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-500 hover:via-teal-500 hover:to-indigo-500 text-white font-black text-sm sm:text-base shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2.5 transition-all transform hover:scale-[1.01] active:scale-98 cursor-pointer group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                        className: "w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                        lineNumber: 185,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tracking-wide",
                                        children: "Start App"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                        lineNumber: 186,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                        className: "w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                        lineNumber: 187,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                lineNumber: 181,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                        lineNumber: 172,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                    lineNumber: 171,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onPrev,
                                    className: "h-[52px] w-[52px] rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-200 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-all transform active:scale-95 shrink-0 shadow-sm cursor-pointer",
                                    title: "Previous Slide",
                                    "aria-label": "Previous Slide",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                        lineNumber: 200,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                    lineNumber: 194,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onGrantAll,
                                    disabled: requestingPermissions,
                                    className: `flex-1 h-[52px] px-6 rounded-2xl ${current.accentBg} text-white font-bold text-sm shadow-xl ${current.accentShadow} flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-98 cursor-pointer ${requestingPermissions ? "opacity-70 cursor-wait" : ""}`,
                                    children: requestingPermissions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                                lineNumber: 209,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Configuring Permissions..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                                lineNumber: 210,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Allow All Permissions"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                                lineNumber: 214,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                className: "w-5 h-5 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                                lineNumber: 215,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                    lineNumber: 202,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                            lineNumber: 193,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onStartApp || onSkip,
                                className: "text-xs font-semibold text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors py-1 cursor-pointer",
                                children: "Skip & Start App"
                            }, void 0, false, {
                                fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                                lineNumber: 221,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                            lineNumber: 220,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                    lineNumber: 192,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
                lineNumber: 132,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/splashscreen/components/SplashControls.tsx",
        lineNumber: 59,
        columnNumber: 9
    }, this);
}
_c = SplashControls;
var _c;
__turbopack_context__.k.register(_c, "SplashControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/splashscreen/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$splashscreen$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/splashscreen/components/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$splashscreen$2f$components$2f$slidesData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/splashscreen/components/slidesData.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$splashscreen$2f$components$2f$SplashTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/splashscreen/components/SplashTransition.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$splashscreen$2f$components$2f$SplashHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/splashscreen/components/SplashHero.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$splashscreen$2f$components$2f$SplashControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/splashscreen/components/SplashControls.tsx [app-client] (ecmascript)");
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
;
function SplashScreen() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [shouldShow, setShouldShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SplashScreen.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Always default to true on first evaluation — Capacitor may not be
            // initialised yet (especially on Android). A useEffect below will
            // re-evaluate and hide if we're confirmed to be on web.
            if (window.location.pathname.startsWith("/splashscreen")) return true;
            const params = new URLSearchParams(window.location.search);
            if (params.get("showIntro") === "true" || params.get("intro") === "true") return true;
            const pathname = window.location.pathname;
            if (pathname.startsWith("/login") || pathname.startsWith("/register") || pathname.startsWith("/forgot-password") || pathname.startsWith("/user") || pathname.startsWith("/admin")) return false;
            if (localStorage.getItem("hasSeenIntro") === "true" || Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$splashscreen$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthToken"])())) return false;
            // Optimistically show — we'll hide it in the effect if not native.
            return true;
        }
    }["SplashScreen.useState"]);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SplashScreen.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$splashscreen$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInitialSlideFromUrl"])(6)
    }["SplashScreen.useState"]);
    const [failedImages, setFailedImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [permissions, setPermissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        camera: false,
        mic: false,
        files: false,
        contacts: false,
        notifications: false
    });
    const [requestingPermissions, setRequestingPermissions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasGrantedAll, setHasGrantedAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const mountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    // Touch Swipe Gesture State
    const touchStartX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const touchEndX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const appName = ("TURBOPACK compile-time value", "PingDart") || "PingDart";
    const savePermissionState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SplashScreen.useCallback[savePermissionState]": (key, granted)=>{
            if (!mountedRef.current) return;
            setPermissions({
                "SplashScreen.useCallback[savePermissionState]": (prev)=>{
                    const updated = {
                        ...prev,
                        [key]: granted
                    };
                    try {
                        localStorage.setItem("app_permissions", JSON.stringify(updated));
                    } catch (_) {}
                    return updated;
                }
            }["SplashScreen.useCallback[savePermissionState]"]);
        }
    }["SplashScreen.useCallback[savePermissionState]"], []);
    // 1. Camera Permission
    const requestCameraPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SplashScreen.useCallback[requestCameraPermission]": async ()=>{
            let granted = false;
            try {
                var _navigator_mediaDevices;
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
                    const { Camera } = await __turbopack_context__.A("[project]/node_modules/@capacitor/camera/dist/esm/index.js [app-client] (ecmascript, async loader)");
                    if (Camera && typeof Camera.requestPermissions === "function") {
                        const res = await Camera.requestPermissions().catch({
                            "SplashScreen.useCallback[requestCameraPermission]": ()=>null
                        }["SplashScreen.useCallback[requestCameraPermission]"]);
                        granted = (res === null || res === void 0 ? void 0 : res.camera) === "granted";
                    }
                } else if ((_navigator_mediaDevices = navigator.mediaDevices) === null || _navigator_mediaDevices === void 0 ? void 0 : _navigator_mediaDevices.getUserMedia) {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        video: true
                    }).catch({
                        "SplashScreen.useCallback[requestCameraPermission]": ()=>null
                    }["SplashScreen.useCallback[requestCameraPermission]"]);
                    if (stream && typeof stream === "object" && "getTracks" in stream) {
                        stream.getTracks().forEach({
                            "SplashScreen.useCallback[requestCameraPermission]": (t)=>t.stop()
                        }["SplashScreen.useCallback[requestCameraPermission]"]);
                        granted = true;
                    }
                }
            } catch (e) {
                console.warn("Camera permission declined");
            }
            savePermissionState("camera", granted);
            return granted;
        }
    }["SplashScreen.useCallback[requestCameraPermission]"], [
        savePermissionState
    ]);
    // 2. Microphone Permission
    const requestMicPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SplashScreen.useCallback[requestMicPermission]": async ()=>{
            let granted = false;
            try {
                var _navigator_mediaDevices;
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
                    const { Camera } = await __turbopack_context__.A("[project]/node_modules/@capacitor/camera/dist/esm/index.js [app-client] (ecmascript, async loader)");
                    if (Camera && typeof Camera.requestPermissions === "function") {
                        const res = await Camera.requestPermissions({
                            permissions: [
                                "camera",
                                "photos"
                            ]
                        }).catch({
                            "SplashScreen.useCallback[requestMicPermission]": ()=>null
                        }["SplashScreen.useCallback[requestMicPermission]"]);
                        granted = (res === null || res === void 0 ? void 0 : res.camera) === "granted" || (res === null || res === void 0 ? void 0 : res.camera) === "limited" || true;
                    }
                } else if ((_navigator_mediaDevices = navigator.mediaDevices) === null || _navigator_mediaDevices === void 0 ? void 0 : _navigator_mediaDevices.getUserMedia) {
                    const stream = await navigator.mediaDevices.getUserMedia({
                        audio: true
                    }).catch({
                        "SplashScreen.useCallback[requestMicPermission]": ()=>null
                    }["SplashScreen.useCallback[requestMicPermission]"]);
                    if (stream && typeof stream === "object" && "getTracks" in stream) {
                        stream.getTracks().forEach({
                            "SplashScreen.useCallback[requestMicPermission]": (t)=>t.stop()
                        }["SplashScreen.useCallback[requestMicPermission]"]);
                        granted = true;
                    }
                }
            } catch (e) {
                console.warn("Microphone permission declined");
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) granted = true;
            }
            savePermissionState("mic", granted);
            return granted;
        }
    }["SplashScreen.useCallback[requestMicPermission]"], [
        savePermissionState
    ]);
    // 3. Media & File Manager Capability
    const requestFilesPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SplashScreen.useCallback[requestFilesPermission]": async ()=>{
            savePermissionState("files", true);
            return true;
        }
    }["SplashScreen.useCallback[requestFilesPermission]"], [
        savePermissionState
    ]);
    // 4. Contacts Permission
    const requestContactsPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SplashScreen.useCallback[requestContactsPermission]": async ()=>{
            let granted = false;
            try {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
                    const { Contacts } = await __turbopack_context__.A("[project]/node_modules/@capacitor-community/contacts/dist/esm/index.js [app-client] (ecmascript, async loader)");
                    if (Contacts && typeof Contacts.requestPermissions === "function") {
                        const res = await Contacts.requestPermissions().catch({
                            "SplashScreen.useCallback[requestContactsPermission]": ()=>null
                        }["SplashScreen.useCallback[requestContactsPermission]"]);
                        granted = (res === null || res === void 0 ? void 0 : res.contacts) === "granted";
                    }
                }
            } catch (err) {
                console.warn("Contacts permission error:", err);
            }
            savePermissionState("contacts", granted);
            return granted;
        }
    }["SplashScreen.useCallback[requestContactsPermission]"], [
        savePermissionState
    ]);
    // 5. Push Notifications Permission
    const requestNotificationPermission = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SplashScreen.useCallback[requestNotificationPermission]": async ()=>{
            let granted = false;
            try {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform()) {
                    const { PushNotifications } = await __turbopack_context__.A("[project]/node_modules/@capacitor/push-notifications/dist/esm/index.js [app-client] (ecmascript, async loader)");
                    if (PushNotifications && typeof PushNotifications.requestPermissions === "function") {
                        const res = await PushNotifications.requestPermissions().catch({
                            "SplashScreen.useCallback[requestNotificationPermission]": ()=>null
                        }["SplashScreen.useCallback[requestNotificationPermission]"]);
                        granted = (res === null || res === void 0 ? void 0 : res.receive) === "granted";
                    }
                } else if ("object" !== "undefined" && "Notification" in window) {
                    const status = await Notification.requestPermission().catch({
                        "SplashScreen.useCallback[requestNotificationPermission]": ()=>null
                    }["SplashScreen.useCallback[requestNotificationPermission]"]);
                    granted = status === "granted";
                }
            } catch (err) {
                console.warn("Notification permission error:", err);
            }
            savePermissionState("notifications", granted);
            return granted;
        }
    }["SplashScreen.useCallback[requestNotificationPermission]"], [
        savePermissionState
    ]);
    const finishIntro = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SplashScreen.useCallback[finishIntro]": ()=>{
            try {
                localStorage.setItem("hasSeenIntro", "true");
                __turbopack_context__.A("[project]/src/utils/safeStorage.ts [app-client] (ecmascript, async loader)").then({
                    "SplashScreen.useCallback[finishIntro]": ({ safeStorage })=>{
                        safeStorage.setItem("hasSeenIntro", "true").catch({
                            "SplashScreen.useCallback[finishIntro]": ()=>{}
                        }["SplashScreen.useCallback[finishIntro]"]);
                    }
                }["SplashScreen.useCallback[finishIntro]"]).catch({
                    "SplashScreen.useCallback[finishIntro]": ()=>{}
                }["SplashScreen.useCallback[finishIntro]"]);
            } catch (e) {}
            // Hide splash immediately — no transition loading screen
            document.documentElement.removeAttribute("data-pending-onboarding");
            if (mountedRef.current) {
                setShouldShow(false);
                setIsTransitioning(false);
            }
            if ("TURBOPACK compile-time truthy", 1) {
                window.dispatchEvent(new CustomEvent(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$splashscreen$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONBOARDING_DONE_EVENT"]));
                router.replace("/login");
            }
        }
    }["SplashScreen.useCallback[finishIntro]"], [
        router
    ]);
    // Sequential Execution of Mobile OS Permission Prompts
    const handleGrantAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SplashScreen.useCallback[handleGrantAll]": async ()=>{
            if (requestingPermissions) return;
            setRequestingPermissions(true);
            try {
                await requestCameraPermission().catch({
                    "SplashScreen.useCallback[handleGrantAll]": ()=>false
                }["SplashScreen.useCallback[handleGrantAll]"]);
                await requestMicPermission().catch({
                    "SplashScreen.useCallback[handleGrantAll]": ()=>false
                }["SplashScreen.useCallback[handleGrantAll]"]);
                await requestFilesPermission().catch({
                    "SplashScreen.useCallback[handleGrantAll]": ()=>false
                }["SplashScreen.useCallback[handleGrantAll]"]);
                await requestContactsPermission().catch({
                    "SplashScreen.useCallback[handleGrantAll]": ()=>false
                }["SplashScreen.useCallback[handleGrantAll]"]);
                await requestNotificationPermission().catch({
                    "SplashScreen.useCallback[handleGrantAll]": ()=>false
                }["SplashScreen.useCallback[handleGrantAll]"]);
            } catch (e) {
                console.warn("Sequential permission processing error:", e);
            } finally{
                if (mountedRef.current) {
                    setRequestingPermissions(false);
                    setHasGrantedAll(true);
                }
            }
        }
    }["SplashScreen.useCallback[handleGrantAll]"], [
        requestingPermissions,
        requestCameraPermission,
        requestMicPermission,
        requestFilesPermission,
        requestContactsPermission,
        requestNotificationPermission
    ]);
    const handleImageError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SplashScreen.useCallback[handleImageError]": (imagePath)=>{
            if (mountedRef.current) {
                setFailedImages({
                    "SplashScreen.useCallback[handleImageError]": (prev)=>({
                            ...prev,
                            [imagePath]: true
                        })
                }["SplashScreen.useCallback[handleImageError]"]);
            }
        }
    }["SplashScreen.useCallback[handleImageError]"], []);
    // Create Slides Data
    const SLIDES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$splashscreen$2f$components$2f$slidesData$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlides"])({
        appName,
        permissions,
        hasGrantedAll,
        onRequestCamera: requestCameraPermission,
        onRequestMic: requestMicPermission,
        onRequestFiles: requestFilesPermission,
        onRequestContacts: requestContactsPermission,
        onRequestNotification: requestNotificationPermission
    });
    // Update Slide with URL Synchronization
    const updateSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SplashScreen.useCallback[updateSlide]": (newIndex)=>{
            const clamped = Math.max(0, Math.min(newIndex, SLIDES.length - 1));
            setCurrentSlide(clamped);
            if ("TURBOPACK compile-time truthy", 1) {
                const url = new URL(window.location.href);
                url.searchParams.set("step", String(clamped + 1));
                window.history.replaceState(null, "", url.toString());
            }
        }
    }["SplashScreen.useCallback[updateSlide]"], [
        SLIDES.length
    ]);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SplashScreen.useCallback[handleNext]": ()=>{
            if (currentSlide < SLIDES.length - 1) {
                updateSlide(currentSlide + 1);
            } else {
                const allGranted = Object.values(permissions).every(Boolean);
                if (hasGrantedAll || allGranted) {
                    finishIntro();
                } else {
                    handleGrantAll();
                }
            }
        }
    }["SplashScreen.useCallback[handleNext]"], [
        currentSlide,
        SLIDES.length,
        updateSlide,
        hasGrantedAll,
        permissions,
        finishIntro,
        handleGrantAll
    ]);
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SplashScreen.useCallback[handlePrev]": ()=>{
            if (currentSlide > 0) {
                updateSlide(currentSlide - 1);
            }
        }
    }["SplashScreen.useCallback[handlePrev]"], [
        currentSlide,
        updateSlide
    ]);
    // Touch Swiping Handlers
    const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SplashScreen.useCallback[handleTouchStart]": (e)=>{
            touchStartX.current = e.targetTouches[0].clientX;
            touchEndX.current = null;
        }
    }["SplashScreen.useCallback[handleTouchStart]"], []);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SplashScreen.useCallback[handleTouchMove]": (e)=>{
            touchEndX.current = e.targetTouches[0].clientX;
        }
    }["SplashScreen.useCallback[handleTouchMove]"], []);
    const handleTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SplashScreen.useCallback[handleTouchEnd]": ()=>{
            if (touchStartX.current === null || touchEndX.current === null) return;
            const distance = touchStartX.current - touchEndX.current;
            const minSwipeDistance = 40;
            if (distance > minSwipeDistance && currentSlide < SLIDES.length - 1) {
                updateSlide(currentSlide + 1);
            } else if (distance < -minSwipeDistance && currentSlide > 0) {
                updateSlide(currentSlide - 1);
            }
            touchStartX.current = null;
            touchEndX.current = null;
        }
    }["SplashScreen.useCallback[handleTouchEnd]"], [
        currentSlide,
        SLIDES.length,
        updateSlide
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplashScreen.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    var _PingDartSplash_notifyAppReady, _PingDartSplash;
                    (_PingDartSplash = window.PingDartSplash) === null || _PingDartSplash === void 0 ? void 0 : (_PingDartSplash_notifyAppReady = _PingDartSplash.notifyAppReady) === null || _PingDartSplash_notifyAppReady === void 0 ? void 0 : _PingDartSplash_notifyAppReady.call(_PingDartSplash);
                } catch (e) {}
            }
        }
    }["SplashScreen.useEffect"], []);
    // Re-evaluate after mount — Capacitor is guaranteed to be initialised now.
    // This is the critical fix for Android: isNativeAppOrMobile() returns the
    // correct value only after Capacitor boots, not during lazy state init.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplashScreen.useEffect": ()=>{
            const pathname = ("TURBOPACK compile-time truthy", 1) ? window.location.pathname : "TURBOPACK unreachable";
            const params = ("TURBOPACK compile-time truthy", 1) ? new URLSearchParams(window.location.search) : "TURBOPACK unreachable";
            // Always keep showing if on /splashscreen route or forced via query
            if (pathname.startsWith("/splashscreen")) return;
            if (params.get("showIntro") === "true" || params.get("intro") === "true") return;
            if (pathname.startsWith("/login") || pathname.startsWith("/register") || pathname.startsWith("/forgot-password") || pathname.startsWith("/user") || pathname.startsWith("/admin")) {
                if (typeof document !== "undefined") {
                    document.documentElement.removeAttribute("data-pending-onboarding");
                }
                setShouldShow(false);
                return;
            }
            const native = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$splashscreen$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNativeAppOrMobile"])();
            const seen = "object" !== "undefined" && (localStorage.getItem("hasSeenIntro") === "true" || Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$splashscreen$2f$components$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuthToken"])()));
            console.log("[SplashScreen] Post-mount native check:", {
                native,
                seen
            });
            if (!native || seen) {
                if (typeof document !== "undefined") {
                    document.documentElement.removeAttribute("data-pending-onboarding");
                }
                setShouldShow(false);
            }
        }
    }["SplashScreen.useEffect"], []); // eslint-disable-line react-hooks/exhaustive-deps
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplashScreen.useEffect": ()=>{
            const handleDone = {
                "SplashScreen.useEffect.handleDone": ()=>{
                    if (typeof document !== "undefined") {
                        document.documentElement.removeAttribute("data-pending-onboarding");
                    }
                    setShouldShow(false);
                }
            }["SplashScreen.useEffect.handleDone"];
            window.addEventListener("onboarding:done", handleDone);
            return ({
                "SplashScreen.useEffect": ()=>window.removeEventListener("onboarding:done", handleDone)
            })["SplashScreen.useEffect"];
        }
    }["SplashScreen.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplashScreen.useEffect": ()=>{
            if (!shouldShow) return;
            mountedRef.current = true;
            // Ensure URL reflects ?step= if not present on mount
            if ("TURBOPACK compile-time truthy", 1) {
                const params = new URLSearchParams(window.location.search);
                if (!params.get("step")) {
                    const url = new URL(window.location.href);
                    url.searchParams.set("step", String(currentSlide + 1));
                    window.history.replaceState(null, "", url.toString());
                }
            }
            // Support browser Back/Forward navigation with URL step parameter
            const handlePopState = {
                "SplashScreen.useEffect.handlePopState": ()=>{
                    const params = new URLSearchParams(window.location.search);
                    const step = parseInt(params.get("step") || "1", 10);
                    if (!isNaN(step) && step >= 1 && step <= SLIDES.length) {
                        setCurrentSlide(step - 1);
                    }
                }
            }["SplashScreen.useEffect.handlePopState"];
            window.addEventListener("popstate", handlePopState);
            // Restore previously saved permission choices
            try {
                const savedPerms = localStorage.getItem("app_permissions");
                if (savedPerms) {
                    const parsed = JSON.parse(savedPerms);
                    if (parsed && typeof parsed === "object") {
                        setPermissions({
                            "SplashScreen.useEffect": (prev)=>({
                                    ...prev,
                                    ...parsed
                                })
                        }["SplashScreen.useEffect"]);
                    }
                }
            } catch (_) {}
            if ("Notification" in window && Notification.permission === "granted") {
                if (mountedRef.current) {
                    setPermissions({
                        "SplashScreen.useEffect": (prev)=>({
                                ...prev,
                                notifications: true
                            })
                    }["SplashScreen.useEffect"]);
                }
            }
            const handleRestartIntro = {
                "SplashScreen.useEffect.handleRestartIntro": ()=>{
                    if (mountedRef.current) {
                        setHasGrantedAll(false);
                        setCurrentSlide(0);
                        if ("TURBOPACK compile-time truthy", 1) {
                            const url = new URL(window.location.href);
                            url.searchParams.set("step", "1");
                            window.history.replaceState(null, "", url.toString());
                        }
                    }
                }
            }["SplashScreen.useEffect.handleRestartIntro"];
            window.addEventListener("onboarding:restart", handleRestartIntro);
            return ({
                "SplashScreen.useEffect": ()=>{
                    mountedRef.current = false;
                    window.removeEventListener("popstate", handlePopState);
                    window.removeEventListener("onboarding:restart", handleRestartIntro);
                }
            })["SplashScreen.useEffect"];
        }
    }["SplashScreen.useEffect"], [
        currentSlide,
        SLIDES.length
    ]);
    if (isTransitioning) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$splashscreen$2f$components$2f$SplashTransition$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplashTransition"], {
            isTransitioning: isTransitioning
        }, void 0, false, {
            fileName: "[project]/src/app/splashscreen/page.tsx",
            lineNumber: 399,
            columnNumber: 16
        }, this);
    }
    if (!shouldShow) return null;
    const current = SLIDES[currentSlide];
    const isLastSlide = currentSlide === SLIDES.length - 1;
    const currentHasValidImage = Boolean(current.imageSrc && !failedImages[current.imageSrc] && !isLastSlide);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[10000] bg-gray-50 dark:bg-[#060b0e] text-slate-900 dark:text-slate-100 flex flex-col items-center justify-center w-full h-[100dvh] max-h-[100dvh] overflow-hidden select-none touch-pan-y transition-colors duration-300 sm:p-4 md:p-6",
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-pink-500/10 pointer-events-none hidden sm:block"
            }, void 0, false, {
                fileName: "[project]/src/app/splashscreen/page.tsx",
                lineNumber: 416,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 sm:flex-initial flex flex-col relative z-10 w-full max-w-md mx-auto overflow-hidden sm:h-[840px] sm:max-h-[92vh] sm:rounded-3xl sm:shadow-2xl sm:border sm:border-slate-200/80 sm:dark:border-white/10 bg-white dark:bg-[#0b141a]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 relative w-full h-full min-h-0 flex flex-col overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$splashscreen$2f$components$2f$SplashHero$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplashHero"], {
                            current: current,
                            currentSlide: currentSlide,
                            appName: appName,
                            currentHasValidImage: currentHasValidImage,
                            onPrev: handlePrev,
                            onImageError: handleImageError
                        }, void 0, false, {
                            fileName: "[project]/src/app/splashscreen/page.tsx",
                            lineNumber: 427,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$splashscreen$2f$components$2f$SplashControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SplashControls"], {
                            current: current,
                            currentSlide: currentSlide,
                            slides: SLIDES,
                            isLastSlide: isLastSlide,
                            requestingPermissions: requestingPermissions,
                            permissions: permissions,
                            hasGrantedAll: hasGrantedAll,
                            appName: appName,
                            onSlideSelect: updateSlide,
                            onNext: handleNext,
                            onPrev: handlePrev,
                            onSkip: finishIntro,
                            onGrantAll: handleGrantAll,
                            onStartApp: finishIntro
                        }, void 0, false, {
                            fileName: "[project]/src/app/splashscreen/page.tsx",
                            lineNumber: 437,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/splashscreen/page.tsx",
                    lineNumber: 425,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/splashscreen/page.tsx",
                lineNumber: 418,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/splashscreen/page.tsx",
        lineNumber: 409,
        columnNumber: 9
    }, this);
}
_s(SplashScreen, "XGJB0L9EuPK1zE3pC76NnNyRDu0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SplashScreen;
const __TURBOPACK__default__export__ = SplashScreen;
var _c;
__turbopack_context__.k.register(_c, "SplashScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/splashscreen/page.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/splashscreen/page.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_app_splashscreen_070c02ee._.js.map