(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProviderDeliveryAnalytics",
    ()=>ProviderDeliveryAnalytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.mjs [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mailApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ProviderDeliveryAnalytics({ initialPeriod = "24h" }) {
    _s();
    const [period, setPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPeriod);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [resettingProvider, setResettingProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchAnalytics = async (selectedPeriod = period)=>{
        setLoading(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].getProviderDeliveryAnalytics(selectedPeriod);
            if ((res === null || res === void 0 ? void 0 : res.success) || (res === null || res === void 0 ? void 0 : res.providers)) {
                setData(res);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((res === null || res === void 0 ? void 0 : res.message) || "Failed to load provider delivery analytics");
            }
        } catch (err) {
            console.error("[ProviderDeliveryAnalytics] Fetch error:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Network error loading analytics");
        } finally{
            setLoading(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProviderDeliveryAnalytics.useEffect": ()=>{
            fetchAnalytics(period);
        }
    }["ProviderDeliveryAnalytics.useEffect"], [
        period
    ]);
    const handleResetThrottle = async (providerKey)=>{
        setResettingProvider(providerKey);
        try {
            var _res_data;
            // Call reset endpoint via API proxy
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/mail-server/analytics/throttling/reset/${providerKey}`);
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Throttling reset for ${providerKey.toUpperCase()} successfully`);
                fetchAnalytics(period);
            } else {
                var _res_data1;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.message) || "Failed to reset throttle");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || err.message || "Failed to reset throttle");
        } finally{
            setResettingProvider(null);
        }
    };
    const providers = (data === null || data === void 0 ? void 0 : data.providers) || {
        google: {
            name: "Google Workspace / Gmail",
            sent: 0,
            accepted: 0,
            deferred: 0,
            bounced: 0,
            bounce_rate_pct: 0,
            deferral_rate_pct: 0,
            throttle_level: 0,
            throttle_status: "normal",
            concurrency: 10,
            rate_limit_per_min: 600
        },
        microsoft: {
            name: "Microsoft 365 / Outlook",
            sent: 0,
            accepted: 0,
            deferred: 0,
            bounced: 0,
            bounce_rate_pct: 0,
            deferral_rate_pct: 0,
            throttle_level: 0,
            throttle_status: "normal",
            concurrency: 8,
            rate_limit_per_min: 300
        },
        yahoo: {
            name: "Yahoo Mail / AOL",
            sent: 0,
            accepted: 0,
            deferred: 0,
            bounced: 0,
            bounce_rate_pct: 0,
            deferral_rate_pct: 0,
            throttle_level: 0,
            throttle_status: "normal",
            concurrency: 5,
            rate_limit_per_min: 150
        },
        generic: {
            name: "Generic / Custom MTAs",
            sent: 0,
            accepted: 0,
            deferred: 0,
            bounced: 0,
            bounce_rate_pct: 0,
            deferral_rate_pct: 0,
            throttle_level: 0,
            throttle_status: "normal",
            concurrency: 15,
            rate_limit_per_min: 600
        }
    };
    const totals = (data === null || data === void 0 ? void 0 : data.totals) || {
        sent: 0,
        accepted: 0,
        deferred: 0,
        bounced: 0,
        overall_bounce_rate_pct: 0,
        overall_deferral_rate_pct: 0
    };
    const getProviderBrand = (key)=>{
        switch(key){
            case "google":
                return {
                    title: "Google Workspace / Gmail",
                    badge: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
                    color: "#EA4335"
                };
            case "microsoft":
                return {
                    title: "Microsoft 365 / Outlook",
                    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
                    color: "#00A4EF"
                };
            case "yahoo":
                return {
                    title: "Yahoo Mail / AOL",
                    badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
                    color: "#6001D2"
                };
            default:
                return {
                    title: "Generic / Custom MTAs",
                    badge: "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20",
                    color: "#64748B"
                };
        }
    };
    const getThrottleStatusBadge = (status, level)=>{
        switch(status){
            case "throttled":
            case "cooldown":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                            lineNumber: 126,
                            columnNumber: 13
                        }, this),
                        " Level ",
                        level,
                        " (",
                        status.toUpperCase(),
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                    lineNumber: 125,
                    columnNumber: 11
                }, this);
            case "warning":
            case "recovering":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                            lineNumber: 133,
                            columnNumber: 13
                        }, this),
                        " Level ",
                        level,
                        " (",
                        status.toUpperCase(),
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                    lineNumber: 132,
                    columnNumber: 11
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                            className: "w-3 h-3"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this),
                        " Level 0 (NORMAL)"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full space-y-6 text-slate-800 dark:text-slate-100 p-4 sm:p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-black text-slate-900 dark:text-white flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                        className: "w-6 h-6 text-indigo-600 dark:text-indigo-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                        lineNumber: 151,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Destination Provider Delivery Analytics"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 dark:text-slate-400 mt-1",
                                children: "Real-time MTA telemetry, 4xx/5xx responses, and dynamic throttle health across major destination lanes."
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold",
                                children: [
                                    "24h",
                                    "7d",
                                    "30d"
                                ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setPeriod(p),
                                        className: `px-3 py-1 rounded-md transition-all cursor-pointer ${period === p ? "bg-white dark:bg-slate-700 text-indigo-600 dark:text-indigo-400 shadow-2xs font-bold" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`,
                                        children: p.toUpperCase()
                                    }, p, false, {
                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>fetchAnalytics(period),
                                disabled: loading,
                                className: "p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all cursor-pointer shadow-2xs",
                                title: "Refresh Data",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    className: `w-4 h-4 ${loading ? "animate-spin text-indigo-600" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                    lineNumber: 182,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-3.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-[10px] bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] font-bold uppercase tracking-wider text-slate-500",
                                children: "Outbound Messages"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-black text-slate-900 dark:text-white mt-1",
                                children: totals.sent.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] text-slate-500 mt-0.5",
                                children: [
                                    "Attempted in ",
                                    period
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-[10px] bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400",
                                children: "Accepted (250 OK)"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1",
                                children: totals.accepted.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] text-slate-500 mt-0.5",
                                children: totals.sent > 0 ? `${(totals.accepted / totals.sent * 100).toFixed(1)}% accepted` : "No traffic"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-[10px] bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400",
                                children: "4xx Deferrals (Retrying)"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-black text-amber-600 dark:text-amber-400 mt-1",
                                children: totals.deferred.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] text-slate-500 mt-0.5",
                                children: [
                                    totals.overall_deferral_rate_pct,
                                    "% deferral rate"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-[10px] bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400",
                                children: "5xx Permanent Bounces"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-black text-rose-600 dark:text-rose-400 mt-1",
                                children: totals.bounced.toLocaleString()
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 211,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] text-slate-500 mt-0.5",
                                children: [
                                    totals.overall_bounce_rate_pct,
                                    "% bounce rate ",
                                    totals.overall_bounce_rate_pct > 2 ? "⚠️" : "✓"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: Object.entries(providers).map(([key, prov])=>{
                    const brand = getProviderBrand(key);
                    const isThrottled = prov.throttle_level > 0;
                    const bounceHealthy = prov.bounce_rate_pct <= 2.0;
                    var _prov_count_421, _prov_count_451, _prov_queue_depth;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5 rounded-[10px] bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 shadow-xs space-y-4 transition-all hover:border-slate-300 dark:hover:border-slate-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-700/60 pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3.5 h-3.5 rounded-full",
                                                style: {
                                                    backgroundColor: brand.color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 233,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm font-bold text-slate-900 dark:text-white leading-tight",
                                                        children: brand.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] text-slate-500 flex items-center gap-2 mt-0.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Rate limit: ",
                                                                    prov.rate_limit_per_min,
                                                                    "/min"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                                lineNumber: 243,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Concurrency: ",
                                                                    prov.concurrency
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 237,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                        lineNumber: 232,
                                        columnNumber: 17
                                    }, this),
                                    getThrottleStatusBadge(prov.throttle_status, prov.throttle_level)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 231,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-4 gap-2 text-center py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 rounded-lg bg-slate-50 dark:bg-slate-900/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] uppercase font-bold text-slate-500",
                                                children: "Sent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 255,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-base font-black text-slate-800 dark:text-slate-100",
                                                children: prov.sent
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 256,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                        lineNumber: 254,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 rounded-lg bg-emerald-50/60 dark:bg-emerald-950/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400",
                                                children: "Accepted"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 259,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-base font-black text-emerald-600 dark:text-emerald-400",
                                                children: prov.accepted
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 260,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                        lineNumber: 258,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 rounded-lg bg-amber-50/60 dark:bg-amber-950/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400",
                                                children: "Deferred"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 263,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-base font-black text-amber-600 dark:text-amber-400",
                                                children: prov.deferred
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 264,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                        lineNumber: 262,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 rounded-lg bg-rose-50/60 dark:bg-rose-950/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] uppercase font-bold text-rose-600 dark:text-rose-400",
                                                children: "Bounced"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 267,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-base font-black text-rose-600 dark:text-rose-400",
                                                children: prov.bounced
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 268,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                        lineNumber: 266,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 253,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 pt-1 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center text-slate-600 dark:text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: "Bounce Rate (Industry limit: 2%):"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-bold ${bounceHealthy ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`,
                                                children: [
                                                    prov.bounce_rate_pct,
                                                    "% ",
                                                    bounceHealthy ? "✓" : "⚠️ High"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 276,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                        lineNumber: 274,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-slate-100 dark:bg-slate-700/80 rounded-full h-1.5 overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `h-full rounded-full ${bounceHealthy ? "bg-emerald-500" : "bg-rose-500"}`,
                                            style: {
                                                width: `${Math.min(100, prov.bounce_rate_pct * 10)}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                            lineNumber: 281,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                        lineNumber: 280,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center text-slate-600 dark:text-slate-300 pt-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: "4xx Deferral Rate:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 288,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-amber-600 dark:text-amber-400",
                                                children: [
                                                    prov.deferral_rate_pct,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 289,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                        lineNumber: 287,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 273,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                title: "MTA Busy responses",
                                                children: [
                                                    "421: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-slate-700 dark:text-slate-200",
                                                        children: (_prov_count_421 = prov.count_421) !== null && _prov_count_421 !== void 0 ? _prov_count_421 : 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 57
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 296,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                title: "Greylisting or rate exceed responses",
                                                children: [
                                                    "451: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-slate-700 dark:text-slate-200",
                                                        children: (_prov_count_451 = prov.count_451) !== null && _prov_count_451 !== void 0 ? _prov_count_451 : 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 75
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 297,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Queue depth: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-slate-700 dark:text-slate-200",
                                                        children: (_prov_queue_depth = prov.queue_depth) !== null && _prov_queue_depth !== void 0 ? _prov_queue_depth : 0
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 38
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 298,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                        lineNumber: 295,
                                        columnNumber: 17
                                    }, this),
                                    isThrottled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleResetThrottle(key),
                                        disabled: resettingProvider === key,
                                        className: "flex items-center gap-1 text-xs text-rose-600 dark:text-rose-400 hover:underline font-bold cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                className: `w-3 h-3 ${resettingProvider === key ? "animate-spin" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 307,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Reset Throttle"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                                lineNumber: 308,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                        lineNumber: 302,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 294,
                                columnNumber: 15
                            }, this)
                        ]
                    }, key, true, {
                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                        lineNumber: 226,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-[10px] p-4 bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-900/40 flex items-start gap-3 text-xs text-indigo-900 dark:text-indigo-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        className: "w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: "Transparent Deliverability Notice:"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this),
                            " Metrics reflect real-world MTA transmission receipts and RFC SMTP responses (250 OK, 4xx temporary deferral, 5xx permanent bounce). Final Inbox vs. Spam placement is determined by proprietary recipient mailbox algorithms and cannot be 100% guaranteed."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                        lineNumber: 320,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
                lineNumber: 318,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/mail/ProviderDeliveryAnalytics.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
_s(ProviderDeliveryAnalytics, "3jpkZBzJrL881fKsW81Z7Ne7UcI=");
_c = ProviderDeliveryAnalytics;
var _c;
__turbopack_context__.k.register(_c, "ProviderDeliveryAnalytics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/mail/OrgAdminAuditLogView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrgAdminAuditLogView",
    ()=>OrgAdminAuditLogView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.mjs [app-client] (ecmascript) <export default as Filter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/terminal.mjs [app-client] (ecmascript) <export default as Terminal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.mjs [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$braces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileJson$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-braces.mjs [app-client] (ecmascript) <export default as FileJson>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/laptop.mjs [app-client] (ecmascript) <export default as Laptop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mailApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function OrgAdminAuditLogView() {
    _s();
    const [logs, setLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [summary, setSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [refreshing, setRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLiveStreaming, setIsLiveStreaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Filters
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedPeriod, setSelectedPeriod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ALL");
    const [selectedSeverity, setSelectedSeverity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ALL");
    const [expandedLogId, setExpandedLogId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchAuditData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OrgAdminAuditLogView.useCallback[fetchAuditData]": async (isSilent = false)=>{
            if (!isSilent) setLoading(true);
            setRefreshing(true);
            try {
                const [logsRes, summaryRes] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].getAuditLogs({
                        period: selectedPeriod,
                        category: selectedCategory === "ALL" ? undefined : selectedCategory,
                        severity: selectedSeverity === "ALL" ? undefined : selectedSeverity,
                        search: searchQuery.trim() || undefined,
                        limit: 100
                    }),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].getAuditSummary()
                ]);
                if ((logsRes === null || logsRes === void 0 ? void 0 : logsRes.success) && Array.isArray(logsRes.data)) {
                    setLogs(logsRes.data);
                } else if (Array.isArray(logsRes)) {
                    setLogs(logsRes);
                }
                if ((summaryRes === null || summaryRes === void 0 ? void 0 : summaryRes.success) && summaryRes.data) {
                    setSummary(summaryRes.data);
                }
            } catch (err) {
                console.error("[OrgAdminAuditLogView] Fetch error:", err);
            } finally{
                setLoading(false);
                setRefreshing(false);
            }
        }
    }["OrgAdminAuditLogView.useCallback[fetchAuditData]"], [
        selectedPeriod,
        selectedCategory,
        selectedSeverity,
        searchQuery
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrgAdminAuditLogView.useEffect": ()=>{
            fetchAuditData();
        }
    }["OrgAdminAuditLogView.useEffect"], [
        fetchAuditData
    ]);
    // Live streaming auto-refresh interval
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OrgAdminAuditLogView.useEffect": ()=>{
            if (!isLiveStreaming) return;
            const interval = setInterval({
                "OrgAdminAuditLogView.useEffect.interval": ()=>{
                    fetchAuditData(true);
                }
            }["OrgAdminAuditLogView.useEffect.interval"], 12000);
            return ({
                "OrgAdminAuditLogView.useEffect": ()=>clearInterval(interval)
            })["OrgAdminAuditLogView.useEffect"];
        }
    }["OrgAdminAuditLogView.useEffect"], [
        isLiveStreaming,
        fetchAuditData
    ]);
    // Filter logs locally if fast instant search is performed
    const filteredLogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "OrgAdminAuditLogView.useMemo[filteredLogs]": ()=>{
            return logs.filter({
                "OrgAdminAuditLogView.useMemo[filteredLogs]": (log)=>{
                    if (selectedSeverity !== "ALL" && log.severity !== selectedSeverity) {
                        return false;
                    }
                    if (searchQuery.trim()) {
                        const q = searchQuery.toLowerCase();
                        const actionMatch = log.action_type.toLowerCase().includes(q);
                        const userMatch = (log.user_id || "").toLowerCase().includes(q);
                        const ipMatch = log.ip_address.toLowerCase().includes(q);
                        const resMatch = (log.resource_id || "").toLowerCase().includes(q);
                        if (!actionMatch && !userMatch && !ipMatch && !resMatch) return false;
                    }
                    return true;
                }
            }["OrgAdminAuditLogView.useMemo[filteredLogs]"]);
        }
    }["OrgAdminAuditLogView.useMemo[filteredLogs]"], [
        logs,
        selectedSeverity,
        searchQuery
    ]);
    const handleExportCSV = ()=>{
        if (!filteredLogs.length) return;
        const headers = [
            "ID",
            "Timestamp",
            "Action",
            "Severity",
            "Actor",
            "IP Address",
            "Resource",
            "Metadata"
        ];
        const rows = filteredLogs.map((l)=>[
                l.id,
                l.timestamp,
                l.action_type,
                l.severity,
                l.user_id || "system",
                l.ip_address,
                l.resource_id || "-",
                JSON.stringify(l.metadata_payload || {}).replace(/"/g, '""')
            ]);
        const csvContent = [
            headers.join(","),
            ...rows.map((r)=>r.map((c)=>`"${c}"`).join(","))
        ].join("\n");
        const blob = new Blob([
            csvContent
        ], {
            type: "text/csv;charset=utf-8;"
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `org_audit_trail_${new Date().toISOString().slice(0, 10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    const getActionIcon = (action, severity)=>{
        const act = action.toUpperCase();
        if (severity === "CRITICAL" || act.includes("BAN") || act.includes("BLOCK")) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                className: "w-4 h-4 text-rose-400"
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                lineNumber: 158,
                columnNumber: 14
            }, this);
        }
        if (act.includes("LOGIN") || act.includes("AUTH")) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                className: "w-4 h-4 text-sky-400"
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                lineNumber: 161,
                columnNumber: 14
            }, this);
        }
        if (act.includes("DOMAIN") || act.includes("DNS")) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                className: "w-4 h-4 text-emerald-400"
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                lineNumber: 164,
                columnNumber: 14
            }, this);
        }
        if (act.includes("WEBHOOK") || act.includes("DISPATCH")) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                className: "w-4 h-4 text-purple-400"
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                lineNumber: 167,
                columnNumber: 14
            }, this);
        }
        if (act.includes("THROTTLE") || act.includes("COOLDOWN")) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                className: "w-4 h-4 text-amber-400"
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                lineNumber: 170,
                columnNumber: 14
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
            className: "w-4 h-4 text-slate-400"
        }, void 0, false, {
            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
            lineNumber: 172,
            columnNumber: 12
        }, this);
    };
    var _summary_total_records, _summary_critical_events, _summary_warning_events;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-col space-y-6 animate-in fade-in duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950/80 p-6 shadow-xs relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2 rounded-xl bg-blue-600/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                className: "w-6 h-6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                lineNumber: 185,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            className: "text-xl font-bold tracking-tight text-slate-900 dark:text-white",
                                                            children: "Org Admin Audit Trail & Security Stream"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                            lineNumber: 189,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 21
                                                                }, this),
                                                                "Immutable SOC-2 Ready"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                                    children: "Cryptographic chronological audit records of authentication, administration, delivery events, and security policy triggers."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                    lineNumber: 183,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 self-start md:self-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsLiveStreaming(!isLiveStreaming),
                                        className: `px-3 py-2 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition-all shadow-2xs ${isLiveStreaming ? "bg-rose-500/10 text-rose-500 border-rose-500/30" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                                className: `w-3.5 h-3.5 ${isLiveStreaming ? "animate-pulse text-rose-500" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, this),
                                            isLiveStreaming ? "Live Polling Active" : "Live Stream"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>fetchAuditData(),
                                        disabled: refreshing,
                                        className: "p-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-2xs",
                                        title: "Refresh logs",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            className: `w-4 h-4 ${refreshing ? "animate-spin text-blue-500" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 218,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleExportCSV,
                                        className: "px-3 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1.5 transition-all shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                className: "w-3.5 h-3.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this),
                                            "Export CSV"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-200 dark:border-slate-800/80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 rounded-xl bg-slate-100/60 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] font-medium text-slate-500 dark:text-slate-400",
                                        children: "Total Audited Events"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl font-black text-slate-900 dark:text-white mt-0.5",
                                        children: (_summary_total_records = summary === null || summary === void 0 ? void 0 : summary.total_records) !== null && _summary_total_records !== void 0 ? _summary_total_records : filteredLogs.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 rounded-xl bg-rose-500/5 border border-rose-500/15",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] font-medium text-rose-600 dark:text-rose-400 flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                lineNumber: 248,
                                                columnNumber: 15
                                            }, this),
                                            " Critical Blocks & Bans"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl font-black text-rose-600 dark:text-rose-400 mt-0.5",
                                        children: (_summary_critical_events = summary === null || summary === void 0 ? void 0 : summary.critical_events) !== null && _summary_critical_events !== void 0 ? _summary_critical_events : filteredLogs.filter((l)=>l.severity === "CRITICAL").length
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 rounded-xl bg-amber-500/5 border border-amber-500/15",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] font-medium text-amber-600 dark:text-amber-400 flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                lineNumber: 257,
                                                columnNumber: 15
                                            }, this),
                                            " Warnings & Cooldowns"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl font-black text-amber-600 dark:text-amber-400 mt-0.5",
                                        children: (_summary_warning_events = summary === null || summary === void 0 ? void 0 : summary.warning_events) !== null && _summary_warning_events !== void 0 ? _summary_warning_events : filteredLogs.filter((l)=>l.severity === "WARN").length
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 rounded-xl bg-sky-500/5 border border-sky-500/15",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] font-medium text-sky-600 dark:text-sky-400 flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this),
                                            " Retention SLA"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-bold text-sky-600 dark:text-sky-400 mt-1 truncate",
                                        children: "365 Days Guaranteed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 268,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                className: "w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                lineNumber: 279,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search by actor, action, IP, or resource ID...",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                className: "w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500/40"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0",
                        children: [
                            "all",
                            "24h",
                            "7d",
                            "30d"
                        ].map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedPeriod(p),
                                className: `px-3 py-1.5 text-xs font-semibold rounded-lg transition-all capitalize ${selectedPeriod === p ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-2xs" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"}`,
                                children: p === "all" ? "All Time" : p
                            }, p, false, {
                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                lineNumber: 292,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                        lineNumber: 290,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                                className: "w-3.5 h-3.5 text-slate-400 hidden sm:block"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedSeverity,
                                onChange: (e)=>setSelectedSeverity(e.target.value),
                                className: "text-xs font-medium px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ALL",
                                        children: "All Severities"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "CRITICAL",
                                        children: "🔴 Critical Only"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 315,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "WARN",
                                        children: "🟡 Warnings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 316,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "INFO",
                                        children: "🔵 Info"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: selectedCategory,
                                onChange: (e)=>setSelectedCategory(e.target.value),
                                className: "text-xs font-medium px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 focus:outline-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "ALL",
                                        children: "All Categories"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "AUTH",
                                        children: "Authentication"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "SECURITY",
                                        children: "Security & Bans"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 328,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "DOMAIN",
                                        children: "Domains & DNS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "WEBHOOK",
                                        children: "Webhooks"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "MAILBOX",
                                        children: "Mailbox Ops"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "CAMPAIGN",
                                        children: "Campaigns"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-2xs",
                children: loading && !refreshing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-16 text-center space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            className: "w-8 h-8 text-blue-500 animate-spin mx-auto opacity-70"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                            lineNumber: 341,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500 dark:text-slate-400 font-medium",
                            children: "Loading cryptographic audit records..."
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                            lineNumber: 342,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                    lineNumber: 340,
                    columnNumber: 11
                }, this) : filteredLogs.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-16 text-center space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                            className: "w-8 h-8 text-slate-400 mx-auto opacity-60"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                            lineNumber: 348,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-slate-700 dark:text-slate-300",
                            children: "No audit records match the selected filters."
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                            lineNumber: 349,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-500",
                            children: "Try adjusting your date range, search query, or severity filter."
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                            lineNumber: 352,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                    lineNumber: 347,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y divide-slate-100 dark:divide-slate-800/80",
                    children: filteredLogs.map((log)=>{
                        const isExpanded = expandedLogId === log.id;
                        const hasMetadata = log.metadata_payload && Object.keys(log.metadata_payload).length > 0;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `transition-colors duration-150 ${isExpanded ? "bg-slate-50/80 dark:bg-slate-800/30" : "hover:bg-slate-50/50 dark:hover:bg-slate-800/20"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: ()=>setExpandedLogId(isExpanded ? null : log.id),
                                    className: "p-4 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2 rounded-lg bg-slate-100 dark:bg-slate-800 shrink-0",
                                                    children: getActionIcon(log.action_type, log.severity)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 flex-wrap",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono font-bold text-slate-900 dark:text-white",
                                                                    children: log.action_type
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                                    lineNumber: 383,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${log.severity === "CRITICAL" ? "bg-rose-500/10 text-rose-500 border border-rose-500/20" : log.severity === "WARN" ? "bg-amber-500/10 text-amber-500 border border-amber-500/20" : "bg-sky-500/10 text-sky-500 border border-sky-500/20"}`,
                                                                    children: log.severity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                                    lineNumber: 388,
                                                                    columnNumber: 27
                                                                }, this),
                                                                log.resource_id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[11px] text-slate-500 dark:text-slate-400 font-mono truncate max-w-[200px]",
                                                                    children: log.resource_id
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                                    lineNumber: 401,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                            lineNumber: 382,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400 mt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                            className: "w-3 h-3 text-slate-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                                            lineNumber: 409,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        log.user_id || "System Worker"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                                    lineNumber: 408,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex items-center gap-1 font-mono",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"], {
                                                                            className: "w-3 h-3 text-slate-400"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                                            lineNumber: 413,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        log.ip_address
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                                    lineNumber: 412,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                            lineNumber: 407,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                            lineNumber: 376,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 self-end sm:self-center shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right text-[11px] text-slate-500 dark:text-slate-400 font-mono",
                                                    children: new Date(log.timestamp).toLocaleString("en-US", {
                                                        month: "short",
                                                        day: "numeric",
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                        second: "2-digit",
                                                        hour12: false
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                    lineNumber: 422,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",
                                                    children: isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                        lineNumber: 434,
                                                        columnNumber: 39
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                        lineNumber: 434,
                                                        columnNumber: 77
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                            lineNumber: 421,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                    lineNumber: 371,
                                    columnNumber: 19
                                }, this),
                                isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 pb-4 pt-1 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/60 space-y-3 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-3 gap-2 py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400 text-[11px] block",
                                                            children: "Audit Event ID"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                            lineNumber: 444,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-slate-800 dark:text-slate-200 font-semibold",
                                                            children: log.id
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                            lineNumber: 445,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400 text-[11px] block",
                                                            children: "Client User Agent"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-700 dark:text-slate-300 truncate block max-w-xs",
                                                            children: log.user_agent || "Direct Server MTA"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                            lineNumber: 449,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400 text-[11px] block",
                                                            children: "Tenant Scope"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                            lineNumber: 452,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-slate-700 dark:text-slate-300",
                                                            children: log.tenant_id || "default"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                            lineNumber: 453,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                    lineNumber: 451,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                            lineNumber: 442,
                                            columnNumber: 23
                                        }, this),
                                        hasMetadata && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 text-[11px] font-bold text-slate-600 dark:text-slate-400 mb-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$braces$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileJson$3e$__["FileJson"], {
                                                            className: "w-3.5 h-3.5 text-blue-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 29
                                                        }, this),
                                                        "Payload Metadata & Attributes"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    className: "p-3 rounded-lg bg-slate-900 text-slate-200 text-[11px] font-mono overflow-x-auto border border-slate-800",
                                                    children: JSON.stringify(log.metadata_payload, null, 2)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                            lineNumber: 458,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                    lineNumber: 441,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, log.id, true, {
                            fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                            lineNumber: 363,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                    lineNumber: 357,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$terminal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Terminal$3e$__["Terminal"], {
                                className: "w-4 h-4 text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                lineNumber: 480,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Audit logs are digitally signed, hash-chained, and immutable in compliance with enterprise audit policies."
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                                lineNumber: 481,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                        lineNumber: 479,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-mono text-[11px] text-slate-400",
                        children: [
                            "Showing ",
                            filteredLogs.length,
                            " event(s)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                        lineNumber: 483,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
                lineNumber: 478,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/mail/OrgAdminAuditLogView.tsx",
        lineNumber: 176,
        columnNumber: 5
    }, this);
}
_s(OrgAdminAuditLogView, "NdAjeDLMfcbxtH2PZkQi8QyPvLU=");
_c = OrgAdminAuditLogView;
var _c;
__turbopack_context__.k.register(_c, "OrgAdminAuditLogView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/mail/MailSettings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MailSettings",
    ()=>MailSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$QrCodeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/QrCodeIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlusSignCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PlusSignCircleIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Key01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Key01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/LockIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ListViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ListViewIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Comment01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ColorsIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ColorsIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RadioIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/RadioIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Notification01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Notification01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$HelpCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/HelpCircleIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Logout01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Logout01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Folder01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Activity01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Activity01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$mail$2d$server$2f$DiagnosticsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/mail-server/DiagnosticsPanel.tsx [app-client] (ecmascript)");
// Import the sub-settings (we will create these next)
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$ProfileSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/ProfileSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$AccountSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/AccountSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$PrivacySettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/PrivacySettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$NotificationSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/NotificationSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$ChatSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/ChatSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$AppearanceSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/AppearanceSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$ListsSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/ListsSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BroadcastsSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/BroadcastsSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$HelpSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/HelpSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$FolderSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/settings/FolderSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function MailSettings({ onClose }) {
    var _this, _this1, _this2, _this3;
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, transientPassword } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const isMobileUI = isNative || isMobile;
    // Domain Admin Guard
    const userRole = ((_this = user) === null || _this === void 0 ? void 0 : _this.role) || "user";
    const userEmail = ((user === null || user === void 0 ? void 0 : user.email) || "").toLowerCase();
    const userDomain = userEmail.split("@")[1] || "pingdart.com";
    const isSystemDomain = userDomain === "pingdart.com" || userDomain === "meddylist.com";
    const isDomainAdmin = userRole === "superadmin" || !isSystemDomain && (userRole === "tenantadmin" || userRole === "domainadmin" || userRole === "admin" || userEmail.startsWith("admin@") || Boolean((_this1 = user) === null || _this1 === void 0 ? void 0 : _this1.isDomainAdmin) || Boolean((_this2 = user) === null || _this2 === void 0 ? void 0 : _this2.is_domain_admin) || userRole !== "user");
    // @ts-ignore
    const fullName = user ? user.full_name || user.fullName || user.name || user.username || "" : "New User";
    // @ts-ignore
    const status = user ? user.status_text || user.statusText || "Today in emojis..." : "Today in emojis...";
    const userName = (user === null || user === void 0 ? void 0 : user.full_name) || (user === null || user === void 0 ? void 0 : user.username) || "You";
    const SETTINGS_ITEMS = [
        {
            id: "account",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Key01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Key01Icon"],
            title: "Account",
            desc: "Security notifications, change number"
        },
        {
            id: "privacy",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockIcon"],
            title: "Privacy",
            desc: "Blocked accounts, disappearing messages"
        },
        {
            id: "folders",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder01Icon"],
            title: "Folders",
            desc: "Manage custom folders"
        },
        {
            id: "lists",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ListViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListViewIcon"],
            title: "Lists",
            desc: "Manage people and groups"
        },
        {
            id: "chats",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Comment01Icon"],
            title: "Chats",
            desc: "Theme, wallpapers, chat history"
        },
        {
            id: "appearance",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ColorsIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorsIcon"],
            title: "Appearance",
            desc: "Chat theme, app icon, app theme"
        },
        {
            id: "broadcasts",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RadioIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioIcon"],
            title: "Broadcasts",
            desc: "Manage lists and send broadcasts"
        },
        {
            id: "notifications",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Notification01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notification01Icon"],
            title: "Notifications",
            desc: "Message, group & call tones"
        },
        {
            id: "diagnostics",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Activity01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Activity01Icon"],
            title: "Mail Diagnostics",
            desc: "Live DNS, Port & delivery health tests"
        },
        {
            id: "help",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$HelpCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpCircleIcon"],
            title: "Help",
            desc: "Help center, contact us, privacy policy"
        },
        {
            id: "logout",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Logout01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logout01Icon"],
            title: "Log out",
            desc: "Sign out of PingDart"
        }
    ];
    const handleItemClick = (id)=>{
        if (id === "logout") {
            logout();
            router.push("/login");
        } else {
            setActiveTab(id);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full w-full bg-white dark:bg-[#111827]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full md:w-[380px] lg:w-[400px] flex flex-col bg-white dark:bg-[#111827] border-r border-[#d1d7db] dark:border-[#2d3139] shrink-0 ${activeTab ? 'hidden md:flex' : 'flex'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 px-4 py-3 h-[60px] shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-[#54656f] dark:text-[#a0abb2]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[22px] font-medium text-[#111b21] dark:text-[#e9edef] flex-1",
                                children: "Settings"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-[#111b21] dark:text-[#e9edef]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/MailSettings.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto overflow-x-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>setActiveTab('profile'),
                                className: "flex items-center gap-4 px-4 py-4 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors border-b border-[#f0f2f5] dark:border-[#202c33]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                            className: "w-[60px] h-[60px] shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                    src: ((_this3 = user) === null || _this3 === void 0 ? void 0 : _this3.avatar) || `https://i.pravatar.cc/150?u=${encodeURIComponent(userName)}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                    style: {
                                                        background: "#4338ca"
                                                    },
                                                    className: "text-white text-xl font-medium",
                                                    children: fullName.substring(0, 2).toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[19px] text-[#111b21] dark:text-[#e9edef] truncate",
                                                children: fullName
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                lineNumber: 115,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[14px] text-[#54656f] dark:text-[#8696a0] truncate",
                                                children: status
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                lineNumber: 116,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 text-[#00a884] pr-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors text-[#111b21] dark:text-[#e9edef]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$QrCodeIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QrCodeIcon"], {
                                                    size: 24,
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlusSignCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlusSignCircleIcon"], {
                                                    size: 24,
                                                    strokeWidth: 1.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-2",
                                children: [
                                    SETTINGS_ITEMS.filter((item)=>item.id !== "diagnostics" || isMobileUI && isDomainAdmin).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>handleItemClick(item.id),
                                            className: `flex items-center gap-4 px-6 py-3 cursor-pointer transition-colors ${activeTab === item.id ? 'bg-[#f0f2f5] dark:bg-[#202c33]' : 'hover:bg-[#f5f6f6] dark:hover:bg-[#2a2f32]'} ${item.id === 'logout' ? 'text-red-500 hover:text-red-600' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${item.id === 'logout' ? 'text-red-500' : 'text-[#54656f] dark:text-[#8696a0]'} w-6 flex justify-center shrink-0`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                        size: 22,
                                                        strokeWidth: 1.5
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col flex-1 min-w-0 py-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[17px] leading-tight ${item.id === 'logout' ? '' : 'text-[#111b21] dark:text-[#e9edef]'}`,
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[14px] truncate mt-0.5 ${item.id === 'logout' ? 'text-red-400' : 'text-[#54656f] dark:text-[#8696a0]'}`,
                                                            children: item.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center py-10 opacity-70",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13px] text-[#54656f] dark:text-[#8696a0]",
                                                children: "from"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[15px] font-semibold text-[#111b21] dark:text-[#e9edef] mt-0.5",
                                                children: "PingDart"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                lineNumber: 149,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/MailSettings.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex-1 flex flex-col h-full bg-[#f0f2f5] dark:bg-[#0b141a] relative ${!activeTab ? 'hidden md:flex' : 'flex'}`,
                children: activeTab ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 bg-white dark:bg-[#111827] overflow-hidden flex flex-col shadow-sm",
                    children: [
                        activeTab === 'profile' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$ProfileSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfileSettings"], {
                            onBack: ()=>setActiveTab(null)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                            lineNumber: 159,
                            columnNumber: 41
                        }, this),
                        activeTab === 'account' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$AccountSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountSettings"], {
                            onBack: ()=>setActiveTab(null)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                            lineNumber: 160,
                            columnNumber: 41
                        }, this),
                        activeTab === 'privacy' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$PrivacySettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrivacySettings"], {
                            onBack: ()=>setActiveTab(null)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                            lineNumber: 161,
                            columnNumber: 41
                        }, this),
                        activeTab === 'notifications' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$NotificationSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationSettings"], {
                            onBack: ()=>setActiveTab(null)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                            lineNumber: 162,
                            columnNumber: 47
                        }, this),
                        activeTab === 'chats' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$ChatSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatSettings"], {
                            onBack: ()=>setActiveTab(null)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                            lineNumber: 163,
                            columnNumber: 39
                        }, this),
                        activeTab === 'appearance' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$AppearanceSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppearanceSettings"], {
                            onBack: ()=>setActiveTab(null)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                            lineNumber: 164,
                            columnNumber: 44
                        }, this),
                        activeTab === 'lists' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$ListsSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListsSettings"], {
                            onBack: ()=>setActiveTab(null)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                            lineNumber: 165,
                            columnNumber: 39
                        }, this),
                        activeTab === 'broadcasts' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$BroadcastsSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BroadcastsSettings"], {
                            onBack: ()=>setActiveTab(null)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                            lineNumber: 166,
                            columnNumber: 44
                        }, this),
                        activeTab === 'folders' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$FolderSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FolderSettings"], {
                            onBack: ()=>setActiveTab(null)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                            lineNumber: 167,
                            columnNumber: 41
                        }, this),
                        activeTab === 'diagnostics' && isDomainAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col h-full w-full bg-white dark:bg-[#111827]",
                            children: [
                                isMobileUI ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white rounded-b-[28px] shadow-lg px-4 pt-[calc(0.75rem+env(safe-area-inset-top,12px))] pb-4 shrink-0 sticky top-0 z-40 overflow-hidden transition-all select-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 overflow-hidden pointer-events-none",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -top-6 -right-6 w-36 h-36 rounded-full bg-white/10 blur-xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-black/10 blur-lg"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                            lineNumber: 172,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setActiveTab(null),
                                                    className: "w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all shadow-xs",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg font-black tracking-wider text-white uppercase",
                                                    children: "Mail Diagnostics"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                            lineNumber: 177,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                    lineNumber: 171,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 px-4 py-3 h-[60px] shrink-0 border-b border-[#f0f2f5] dark:border-[#202c33] bg-white dark:bg-[#111827]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab(null),
                                            className: "p-1.5 md:hidden rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-[#54656f] dark:text-[#a0abb2]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                lineNumber: 190,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                            lineNumber: 189,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[19px] font-medium text-[#111b21] dark:text-[#e9edef] flex-1",
                                            children: "🧪 Mail Server Diagnostics & Health"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                            lineNumber: 192,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                    lineNumber: 188,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar ${isMobileUI ? "pb-[calc(7.5rem+env(safe-area-inset-bottom,24px))]" : "pb-8"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-w-3xl mx-auto w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f$mail$2d$server$2f$DiagnosticsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiagnosticsPanel"], {
                                            initialTargetEmail: (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || "",
                                            initialDomain: ((user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || "").split("@")[1] || "pingdart.com",
                                            initialPassword: transientPassword || ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                            lineNumber: 197,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                        lineNumber: 196,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                    lineNumber: 195,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                            lineNumber: 169,
                            columnNumber: 15
                        }, this),
                        activeTab === 'help' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$settings$2f$HelpSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HelpSettings"], {
                            onBack: ()=>setActiveTab(null)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                            lineNumber: 206,
                            columnNumber: 38
                        }, this),
                        ![
                            'profile',
                            'account',
                            'privacy',
                            'notifications',
                            'chats',
                            'appearance',
                            'lists',
                            'broadcasts',
                            'folders',
                            'diagnostics',
                            'help'
                        ].includes(activeTab) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4 px-4 py-3 border-b border-[#f0f2f5] dark:border-[#202c33] bg-white dark:bg-[#111827] h-[60px] shrink-0 md:hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab(null),
                                            className: "p-1 rounded-full text-[#54656f] dark:text-[#a0abb2]",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                                size: 24
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                                lineNumber: 212,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                            lineNumber: 211,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[19px] text-[#111b21] dark:text-[#e9edef] capitalize",
                                            children: activeTab
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                            lineNumber: 214,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                    lineNumber: 210,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex items-center justify-center text-[#54656f] dark:text-[#8696a0]",
                                    children: "This section is under construction."
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                    lineNumber: 216,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                            lineNumber: 209,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                    lineNumber: 158,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col items-center justify-center text-center p-8 bg-[#f0f2f5] dark:bg-[#202c33] border-l border-[#d1d7db] dark:border-[#2d3139]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[120px] h-[120px] rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserIcon"], {
                                size: 48,
                                className: "text-[#8696a0]"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                                lineNumber: 225,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                            lineNumber: 224,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[28px] font-light text-[#41525d] dark:text-[#e9edef] mb-3",
                            children: "Settings"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                            lineNumber: 227,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[15px] text-[#667781] dark:text-[#a0abb2] max-w-sm leading-relaxed",
                            children: "Select a setting from the menu to configure your app experience, privacy, notifications, and more."
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailSettings.tsx",
                            lineNumber: 230,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/MailSettings.tsx",
                    lineNumber: 223,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/mail/MailSettings.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(MailSettings, "9AtKXmGNXdjWG2klxPRHZLMd+4Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = MailSettings;
// Temporary SmileIcon component since it wasn't imported
const SmileIcon = ({ size })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                lineNumber: 244,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 14s1.5 2 4 2 4-2 4-2"
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                lineNumber: 245,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "9",
                y1: "9",
                x2: "9.01",
                y2: "9"
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                lineNumber: 246,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "15",
                y1: "9",
                x2: "15.01",
                y2: "9"
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/MailSettings.tsx",
                lineNumber: 247,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/mail/MailSettings.tsx",
        lineNumber: 243,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = SmileIcon;
var _c, _c1;
__turbopack_context__.k.register(_c, "MailSettings");
__turbopack_context__.k.register(_c1, "SmileIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/mail/RecipientRiskBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecipientRiskBadge",
    ()=>RecipientRiskBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-x.mjs [app-client] (ecmascript) <export default as ShieldX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.mjs [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.mjs [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mailApi.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function RecipientRiskBadge({ recipients = [], currentInput = "", sender, subject = "", body = "" }) {
    var _activeResult_risk, _activeResult_risk1;
    _s();
    const [riskMap, setRiskMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedRecipient, setSelectedRecipient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Extract all eligible emails to test
    const candidateEmails = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "RecipientRiskBadge.useMemo[candidateEmails]": ()=>{
            const list = [
                ...recipients
            ];
            const trimmedInput = currentInput.trim().toLowerCase();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (trimmedInput && emailRegex.test(trimmedInput) && !list.includes(trimmedInput)) {
                list.push(trimmedInput);
            }
            return list;
        }
    }["RecipientRiskBadge.useMemo[candidateEmails]"], [
        recipients,
        currentInput
    ]);
    // Keep active recipient selection valid
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecipientRiskBadge.useEffect": ()=>{
            if (candidateEmails.length > 0) {
                if (!selectedRecipient || !candidateEmails.includes(selectedRecipient)) {
                    setSelectedRecipient(candidateEmails[0]);
                }
            } else {
                setSelectedRecipient("");
            }
        }
    }["RecipientRiskBadge.useEffect"], [
        candidateEmails,
        selectedRecipient
    ]);
    // Debounced API evaluation
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecipientRiskBadge.useEffect": ()=>{
            if (candidateEmails.length === 0) {
                return;
            }
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            timerRef.current = setTimeout({
                "RecipientRiskBadge.useEffect": async ()=>{
                    // Find candidate emails not yet cached
                    const uncached = candidateEmails.filter({
                        "RecipientRiskBadge.useEffect.uncached": (email)=>!riskMap[email]
                    }["RecipientRiskBadge.useEffect.uncached"]);
                    if (uncached.length === 0) return;
                    setLoading(true);
                    try {
                        if (uncached.length === 1) {
                            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].checkRecipientRisk(uncached[0], sender);
                            if ((res === null || res === void 0 ? void 0 : res.success) && res.recipient) {
                                setRiskMap({
                                    "RecipientRiskBadge.useEffect": (prev)=>({
                                            ...prev,
                                            [res.recipient.toLowerCase()]: res
                                        })
                                }["RecipientRiskBadge.useEffect"]);
                            }
                        } else {
                            const batchRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].checkRecipientRisk(undefined, sender, uncached);
                            if ((batchRes === null || batchRes === void 0 ? void 0 : batchRes.success) && Array.isArray(batchRes.results)) {
                                const newEntries = {};
                                batchRes.results.forEach({
                                    "RecipientRiskBadge.useEffect": (r)=>{
                                        if (r.recipient) {
                                            newEntries[r.recipient.toLowerCase()] = r;
                                        }
                                    }
                                }["RecipientRiskBadge.useEffect"]);
                                setRiskMap({
                                    "RecipientRiskBadge.useEffect": (prev)=>({
                                            ...prev,
                                            ...newEntries
                                        })
                                }["RecipientRiskBadge.useEffect"]);
                            }
                        }
                    } catch (err) {
                        console.warn("[RecipientRiskBadge] Evaluation error:", err);
                    } finally{
                        setLoading(false);
                    }
                }
            }["RecipientRiskBadge.useEffect"], 450);
            return ({
                "RecipientRiskBadge.useEffect": ()=>{
                    if (timerRef.current) clearTimeout(timerRef.current);
                }
            })["RecipientRiskBadge.useEffect"];
        }
    }["RecipientRiskBadge.useEffect"], [
        candidateEmails,
        sender
    ]);
    // Real-Time Content & Spam Keyword Analysis
    const contentAnalysis = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "RecipientRiskBadge.useMemo[contentAnalysis]": ()=>{
            if (!body || !body.trim()) return null;
            const issues = [];
            const textLower = `${subject || ""} ${body}`.toLowerCase();
            // High-risk spam trigger phrases
            const spamKeywords = [
                "100% free",
                "act now",
                "apply now",
                "call now",
                "cash bonus",
                "claim your",
                "credit card offer",
                "crypto",
                "bitcoin",
                "double your income",
                "earn $",
                "exclusive deal",
                "extra income",
                "fast cash",
                "free gift",
                "free info",
                "get out of debt",
                "guaranteed",
                "increase sales",
                "instant",
                "limited time",
                "lottery",
                "make money",
                "million dollars",
                "no catch",
                "no cost",
                "no credit check",
                "no experience",
                "no fees",
                "no gimmicks",
                "no hidden costs",
                "no obligation",
                "no purchase necessary",
                "no risk",
                "no strings attached",
                "not spam",
                "once in a lifetime",
                "online marketing",
                "open immediately",
                "opportunity",
                "order now",
                "passwords",
                "pennies a day",
                "pure profit",
                "refinance",
                "risk free",
                "satisfaction guaranteed",
                "save $",
                "save big",
                "special promotion",
                "terms and conditions",
                "urgent",
                "while supplies last",
                "win $",
                "winner",
                "wire transfer",
                "you have been selected"
            ];
            const matchedTriggers = spamKeywords.filter({
                "RecipientRiskBadge.useMemo[contentAnalysis].matchedTriggers": (kw)=>textLower.includes(kw)
            }["RecipientRiskBadge.useMemo[contentAnalysis].matchedTriggers"]);
            if (matchedTriggers.length > 0) {
                issues.push(`Detected ${matchedTriggers.length} spam-trigger word(s): "${matchedTriggers.slice(0, 3).join('", "')}"${matchedTriggers.length > 3 ? "..." : ""}`);
            }
            // Unencrypted HTTP links
            const httpLinks = body.match(/http:\/\/[^\s"'>]+/gi) || [];
            if (httpLinks.length > 0) {
                issues.push(`Detected ${httpLinks.length} unencrypted (http://) link(s). Modern mail filters favor https://.`);
            }
            // Excessive capitalization in subject
            if (subject && subject.length > 8) {
                const caps = subject.replace(/[^A-Z]/g, "").length;
                if (caps / subject.length > 0.6) {
                    issues.push("Subject contains excessive uppercase letters, which can trigger spam filters.");
                }
            }
            return {
                hasContent: true,
                score: Math.max(0, 100 - issues.length * 20),
                isClean: issues.length === 0,
                issues,
                matchedTriggers
            };
        }
    }["RecipientRiskBadge.useMemo[contentAnalysis]"], [
        subject,
        body
    ]);
    if (candidateEmails.length === 0) {
        return null;
    }
    const activeResult = selectedRecipient ? riskMap[selectedRecipient.toLowerCase()] : undefined;
    const riskLevel = (activeResult === null || activeResult === void 0 ? void 0 : (_activeResult_risk = activeResult.risk) === null || _activeResult_risk === void 0 ? void 0 : _activeResult_risk.level) || "LOW";
    var _activeResult_risk_score;
    const riskScore = (_activeResult_risk_score = activeResult === null || activeResult === void 0 ? void 0 : (_activeResult_risk1 = activeResult.risk) === null || _activeResult_risk1 === void 0 ? void 0 : _activeResult_risk1.score) !== null && _activeResult_risk_score !== void 0 ? _activeResult_risk_score : 10;
    const provider = (activeResult === null || activeResult === void 0 ? void 0 : activeResult.provider) || {
        type: "generic",
        name: "Resolving Provider...",
        domain: selectedRecipient.split("@")[1] || ""
    };
    const signals = activeResult === null || activeResult === void 0 ? void 0 : activeResult.signals;
    // Visual Tokens based on Risk Level
    const riskStyles = {
        LOW: {
            badgeBg: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
            dot: "bg-emerald-500",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
            title: "Delivery Risk: LOW"
        },
        MEDIUM: {
            badgeBg: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
            dot: "bg-amber-500",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"],
            title: "Delivery Risk: MEDIUM"
        },
        HIGH: {
            badgeBg: "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20",
            dot: "bg-rose-500",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldX$3e$__["ShieldX"],
            title: "Delivery Risk: HIGH"
        }
    }[riskLevel];
    const RiskIcon = riskStyles.icon;
    // Provider branding styling
    const getProviderIcon = (type)=>{
        switch(type){
            case "google":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold text-[#EA4335] text-[13px] tracking-tight mr-1",
                    children: [
                        "G",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#4285F4]",
                            children: "o"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                            lineNumber: 234,
                            columnNumber: 14
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#FBBC05]",
                            children: "o"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#34A853]",
                            children: "g"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                            lineNumber: 236,
                            columnNumber: 13
                        }, this),
                        "le"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                    lineNumber: 233,
                    columnNumber: 11
                }, this);
            case "microsoft":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold text-[#00A4EF] text-[13px] tracking-tight mr-1",
                    children: [
                        "Micro",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#7FBA00]",
                            children: "soft"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                            lineNumber: 242,
                            columnNumber: 18
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                    lineNumber: 241,
                    columnNumber: 11
                }, this);
            case "yahoo":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-bold text-[#6001D2] text-[13px] tracking-tight mr-1",
                    children: "Yahoo!"
                }, void 0, false, {
                    fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                    lineNumber: 246,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                    className: "w-3.5 h-3.5 text-slate-500 mr-1 inline"
                }, void 0, false, {
                    fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                    lineNumber: 248,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full my-2 rounded-[10px] border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 backdrop-blur-xs shadow-xs transition-all text-slate-800 dark:text-slate-100 overflow-hidden text-[13px]",
        children: [
            candidateEmails.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 px-3 pt-2.5 pb-1 overflow-x-auto border-b border-slate-200/70 dark:border-slate-800/80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-semibold text-slate-500 uppercase tracking-wider shrink-0 mr-1",
                        children: [
                            "Recipients (",
                            candidateEmails.length,
                            "):"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this),
                    candidateEmails.map((email)=>{
                        var _data_risk;
                        const data = riskMap[email.toLowerCase()];
                        const lvl = (data === null || data === void 0 ? void 0 : (_data_risk = data.risk) === null || _data_risk === void 0 ? void 0 : _data_risk.level) || "LOW";
                        const isSelected = selectedRecipient.toLowerCase() === email.toLowerCase();
                        const dotColor = lvl === "HIGH" ? "bg-rose-500" : lvl === "MEDIUM" ? "bg-amber-500" : "bg-emerald-500";
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setSelectedRecipient(email),
                            className: `flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[12px] font-medium transition-all shrink-0 cursor-pointer ${isSelected ? "bg-indigo-600 text-white shadow-xs" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/60"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `w-1.5 h-1.5 rounded-full ${isSelected ? "bg-white" : dotColor}`
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                    lineNumber: 275,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "truncate max-w-[140px]",
                                    children: email
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                    lineNumber: 276,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, email, true, {
                            fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                            lineNumber: 267,
                            columnNumber: 15
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                lineNumber: 256,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-3.5 py-2.5 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-md text-[12px] font-medium shadow-2xs",
                                children: [
                                    getProviderIcon(provider.type),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-700 dark:text-slate-200",
                                        children: provider.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[12px] font-bold border ${riskStyles.badgeBg} shadow-2xs`,
                                children: [
                                    loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-3.5 h-3.5 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 297,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `w-2 h-2 rounded-full ${riskStyles.dot} animate-pulse`
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: riskStyles.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] opacity-75 font-normal ml-0.5",
                                        children: [
                                            "(",
                                            riskScore,
                                            "/100)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            signals && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:flex items-center gap-1 text-[11px] font-semibold text-slate-600 dark:text-slate-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-1.5 py-0.5 rounded-sm border ${signals.spf === "pass" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-500/20" : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border-rose-500/20"}`,
                                        children: [
                                            "SPF ",
                                            signals.spf === "pass" ? "✓" : "✗"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-1.5 py-0.5 rounded-sm border ${signals.dkim === "pass" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-500/20" : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border-rose-500/20"}`,
                                        children: [
                                            "DKIM ",
                                            signals.dkim === "pass" ? "✓" : "✗"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-1.5 py-0.5 rounded-sm border ${signals.dmarc === "pass" ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-500/20" : "bg-rose-50 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400 border-rose-500/20"}`,
                                        children: [
                                            "DMARC ",
                                            signals.dmarc === "pass" ? "✓" : "✗"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this),
                            contentAnalysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `px-2 py-0.5 rounded-sm border text-[11px] font-semibold flex items-center gap-1 ${contentAnalysis.isClean ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-500/20" : "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400 border-amber-500/20"}`,
                                    title: contentAnalysis.isClean ? "Body content safe from spam triggers" : contentAnalysis.issues.join("; "),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                            lineNumber: 346,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Body ",
                                                contentAnalysis.isClean ? "Safe ✓" : "Content Risk ⚠️"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                            lineNumber: 347,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setExpanded(!expanded),
                        className: "flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-[12px] font-semibold px-2 py-1 rounded-md hover:bg-indigo-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: expanded ? "Hide Details" : "View Signals"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, this),
                            expanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 359,
                                columnNumber: 23
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: "w-3.5 h-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 359,
                                columnNumber: 63
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            (signals === null || signals === void 0 ? void 0 : signals.suppressed) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-rose-500/15 border-t border-b border-rose-500/30 px-3.5 py-2 flex items-start gap-2 text-rose-700 dark:text-rose-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "w-4 h-4 shrink-0 mt-0.5"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                        lineNumber: 366,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[12px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: "Suppression Warning:"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 368,
                                columnNumber: 13
                            }, this),
                            " Recipient is present in your organization suppression list. Message transmission will be blocked to protect domain reputation."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                        lineNumber: 367,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                lineNumber: 365,
                columnNumber: 9
            }, this),
            (signals === null || signals === void 0 ? void 0 : signals.provider_throttle) && signals.provider_throttle !== "normal" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-amber-500/15 border-t border-b border-amber-500/30 px-3.5 py-2 flex items-start gap-2 text-amber-700 dark:text-amber-300",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                        className: "w-4 h-4 shrink-0 mt-0.5"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-[12px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: "Provider Rate Warning:"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 378,
                                columnNumber: 13
                            }, this),
                            " Destination provider (",
                            provider.name,
                            ") is currently throttled (status: ",
                            signals.provider_throttle,
                            "). Messages may queue during adaptive cooldown."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                        lineNumber: 377,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                lineNumber: 375,
                columnNumber: 9
            }, this),
            expanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3.5 py-3 border-t border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-950/40 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 sm:grid-cols-4 gap-2 text-[12px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 rounded-lg bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-500 text-[10px] font-semibold uppercase",
                                        children: "SPF Alignment"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 390,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 font-bold mt-0.5 text-slate-800 dark:text-slate-200",
                                        children: [
                                            (signals === null || signals === void 0 ? void 0 : signals.spf) === "pass" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-3.5 h-3.5 text-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                                lineNumber: 393,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                className: "w-3.5 h-3.5 text-rose-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                                lineNumber: 395,
                                                columnNumber: 19
                                            }, this),
                                            (signals === null || signals === void 0 ? void 0 : signals.spf) === "pass" ? "Aligned (Pass)" : "Unverified / Fail"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 391,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 389,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 rounded-lg bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-500 text-[10px] font-semibold uppercase",
                                        children: "DKIM 2048-bit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 402,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 font-bold mt-0.5 text-slate-800 dark:text-slate-200",
                                        children: [
                                            (signals === null || signals === void 0 ? void 0 : signals.dkim) === "pass" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-3.5 h-3.5 text-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                                lineNumber: 405,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                className: "w-3.5 h-3.5 text-rose-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                                lineNumber: 407,
                                                columnNumber: 19
                                            }, this),
                                            (signals === null || signals === void 0 ? void 0 : signals.dkim) === "pass" ? "Signed (Pass)" : "Missing / Fail"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 403,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 401,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 rounded-lg bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-500 text-[10px] font-semibold uppercase",
                                        children: "DMARC Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 414,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 font-bold mt-0.5 text-slate-800 dark:text-slate-200",
                                        children: [
                                            (signals === null || signals === void 0 ? void 0 : signals.dmarc) === "pass" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-3.5 h-3.5 text-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                                lineNumber: 417,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                className: "w-3.5 h-3.5 text-rose-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                                lineNumber: 419,
                                                columnNumber: 19
                                            }, this),
                                            (signals === null || signals === void 0 ? void 0 : signals.dmarc) === "pass" ? "Protected (Pass)" : "Unconfigured"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 415,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 413,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 rounded-lg bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-500 text-[10px] font-semibold uppercase",
                                        children: "Sender Health"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 426,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 font-bold mt-0.5 capitalize text-slate-800 dark:text-slate-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: `w-3.5 h-3.5 ${(signals === null || signals === void 0 ? void 0 : signals.sender_health) === "good" ? "text-emerald-500" : (signals === null || signals === void 0 ? void 0 : signals.sender_health) === "at_risk" ? "text-amber-500" : "text-rose-500"}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                                lineNumber: 428,
                                                columnNumber: 17
                                            }, this),
                                            (signals === null || signals === void 0 ? void 0 : signals.sender_health) || "Good"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 427,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 425,
                                columnNumber: 13
                            }, this),
                            contentAnalysis && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-2 rounded-lg bg-slate-100/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-slate-500 text-[10px] font-semibold uppercase",
                                        children: "Body Content Check"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 442,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 font-bold mt-0.5 text-slate-800 dark:text-slate-200",
                                        children: [
                                            contentAnalysis.isClean ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                className: "w-3.5 h-3.5 text-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                                lineNumber: 445,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                className: "w-3.5 h-3.5 text-amber-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                                lineNumber: 447,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: contentAnalysis.isClean ? "Clean / Safe" : `${contentAnalysis.issues.length} Flag(s)`
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                                lineNumber: 449,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 443,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 441,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                        lineNumber: 388,
                        columnNumber: 11
                    }, this),
                    contentAnalysis && contentAnalysis.issues.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        className: "w-3.5 h-3.5 text-amber-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 459,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Body Content Optimization:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 460,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 458,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1 text-[12px]",
                                children: contentAnalysis.issues.map((iss, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                                lineNumber: 465,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: iss
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                                lineNumber: 466,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 464,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 462,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                        lineNumber: 457,
                        columnNumber: 13
                    }, this),
                    (activeResult === null || activeResult === void 0 ? void 0 : activeResult.reasons) && activeResult.reasons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1",
                                children: "Observable MTA Signals:"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 476,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1 text-[12px] text-slate-700 dark:text-slate-300",
                                children: activeResult.reasons.map((r, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-indigo-500 font-bold",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                                lineNumber: 482,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: r
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                                lineNumber: 483,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 481,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 479,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                        lineNumber: 475,
                        columnNumber: 13
                    }, this),
                    (activeResult === null || activeResult === void 0 ? void 0 : activeResult.recommendations) && activeResult.recommendations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2 border-t border-slate-200/70 dark:border-slate-800/70",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1",
                                children: "Actionable Recommendation:"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 493,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1 text-[12px] text-slate-700 dark:text-slate-300",
                                children: activeResult.recommendations.map((rec, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-start gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-500 font-bold",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                                lineNumber: 499,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium",
                                                children: rec
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                                lineNumber: 500,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                        lineNumber: 498,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 496,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                        lineNumber: 492,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 pt-2 border-t border-slate-200/50 dark:border-slate-800/50 text-[11px] text-slate-500 dark:text-slate-400 italic",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                className: "w-3.5 h-3.5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 509,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Delivery risk is estimated from MTA transmission telemetry and technical records. Inbox vs. Spam placement is subject to destination provider internal filters and cannot be 100% guaranteed."
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                                lineNumber: 510,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                        lineNumber: 508,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
                lineNumber: 386,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/mail/RecipientRiskBadge.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
}
_s(RecipientRiskBadge, "b1qmQ6RYvjrr2MjC/9a6TC/2jUE=");
_c = RecipientRiskBadge;
var _c;
__turbopack_context__.k.register(_c, "RecipientRiskBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SharedMailboxCollabBar",
    ()=>SharedMailboxCollabBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.mjs [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.mjs [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.mjs [app-client] (ecmascript) <export default as ShieldAlert>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const STATUS_CONFIG = {
    open: {
        label: "Open",
        bg: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800",
        text: "text-blue-700 dark:text-blue-300",
        dot: "bg-blue-500"
    },
    pending: {
        label: "Pending",
        bg: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800",
        text: "text-amber-700 dark:text-amber-300",
        dot: "bg-amber-500"
    },
    resolved: {
        label: "Resolved",
        bg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800",
        text: "text-emerald-700 dark:text-emerald-300",
        dot: "bg-emerald-500"
    },
    closed: {
        label: "Closed",
        bg: "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700",
        text: "text-gray-600 dark:text-gray-400",
        dot: "bg-gray-400"
    }
};
function SharedMailboxCollabBar({ sharedMailboxId, sharedAddress, threadId, currentUserEmail, currentUserName, availableAgents = [], onStatusChanged, onAssigneeChanged }) {
    _s();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("open");
    const [assignee, setAssignee] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isNotesOpen, setIsNotesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newNoteContent, setNewNoteContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isPostingNote, setIsPostingNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoadingNotes, setIsLoadingNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load existing notes and assignment
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SharedMailboxCollabBar.useEffect": ()=>{
            if (!sharedMailboxId || !threadId) return;
            let isMounted = true;
            setIsLoadingNotes(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/shared-mailboxes/${encodeURIComponent(sharedMailboxId)}/notes/${encodeURIComponent(threadId)}`).then({
                "SharedMailboxCollabBar.useEffect": (res)=>{
                    var _res_data;
                    if (isMounted && ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && Array.isArray(res.data.data)) {
                        setNotes(res.data.data);
                    }
                }
            }["SharedMailboxCollabBar.useEffect"]).catch({
                "SharedMailboxCollabBar.useEffect": ()=>{}
            }["SharedMailboxCollabBar.useEffect"]).finally({
                "SharedMailboxCollabBar.useEffect": ()=>{
                    if (isMounted) setIsLoadingNotes(false);
                }
            }["SharedMailboxCollabBar.useEffect"]);
            return ({
                "SharedMailboxCollabBar.useEffect": ()=>{
                    isMounted = false;
                }
            })["SharedMailboxCollabBar.useEffect"];
        }
    }["SharedMailboxCollabBar.useEffect"], [
        sharedMailboxId,
        threadId
    ]);
    const handleStatusUpdate = async (newStatus)=>{
        setStatus(newStatus);
        onStatusChanged === null || onStatusChanged === void 0 ? void 0 : onStatusChanged(newStatus);
        try {
            var _STATUS_CONFIG_newStatus;
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/shared-mailboxes/${encodeURIComponent(sharedMailboxId)}/assign`, {
                threadId,
                status: newStatus
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Ticket marked as ${((_STATUS_CONFIG_newStatus = STATUS_CONFIG[newStatus]) === null || _STATUS_CONFIG_newStatus === void 0 ? void 0 : _STATUS_CONFIG_newStatus.label) || newStatus}`);
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to update status");
        }
    };
    const handleAssigneeUpdate = async (newAssignee)=>{
        const targetEmail = newAssignee === "unassigned" ? null : newAssignee;
        setAssignee(targetEmail);
        onAssigneeChanged === null || onAssigneeChanged === void 0 ? void 0 : onAssigneeChanged(targetEmail || "");
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/shared-mailboxes/${encodeURIComponent(sharedMailboxId)}/assign`, {
                threadId,
                assignedToEmail: targetEmail
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(targetEmail ? `Assigned to ${targetEmail}` : "Thread unassigned");
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to assign thread");
        }
    };
    const handlePostNote = async (e)=>{
        e.preventDefault();
        if (!newNoteContent.trim() || isPostingNote) return;
        setIsPostingNote(true);
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/shared-mailboxes/${encodeURIComponent(sharedMailboxId)}/notes`, {
                threadId,
                content: newNoteContent.trim(),
                authorEmail: currentUserEmail,
                authorName: currentUserName
            });
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && res.data.data) {
                setNotes((prev)=>[
                        ...prev,
                        res.data.data
                    ]);
                setNewNoteContent("");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Internal note posted");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to post note");
        } finally{
            setIsPostingNote(false);
        }
    };
    const currentStatusConfig = STATUS_CONFIG[status] || STATUS_CONFIG.open;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-b border-indigo-100 dark:border-indigo-950/60 bg-gradient-to-r from-indigo-50/60 via-slate-50/40 to-blue-50/60 dark:from-[#131722] dark:via-[#111827] dark:to-[#131b2e] px-4 py-2.5 flex flex-col gap-2 transition-all",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-3 flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 flex-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 text-xs font-bold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        size: 13,
                                        className: "shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Shared: ",
                                            sharedAddress || "Team Inbox"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative inline-flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: status,
                                        onChange: (e)=>handleStatusUpdate(e.target.value),
                                        className: `appearance-none text-xs font-bold pl-5 pr-6 py-1 rounded-full border cursor-pointer outline-none transition-colors ${currentStatusConfig.bg} ${currentStatusConfig.text}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "open",
                                                children: "Open"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "pending",
                                                children: "Pending"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                                lineNumber: 186,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "resolved",
                                                children: "Resolved"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "closed",
                                                children: "Closed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `absolute left-2.5 w-1.5 h-1.5 rounded-full pointer-events-none ${currentStatusConfig.dot}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 12,
                                        className: `absolute right-2 pointer-events-none opacity-60 ${currentStatusConfig.text}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative inline-flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        size: 13,
                                        className: "absolute left-2.5 text-slate-400 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: assignee || "unassigned",
                                        onChange: (e)=>handleAssigneeUpdate(e.target.value),
                                        className: "appearance-none text-xs font-semibold pl-6 pr-6 py-1 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 cursor-pointer outline-none hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "unassigned",
                                                children: "Unassigned"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                                lineNumber: 207,
                                                columnNumber: 15
                                            }, this),
                                            availableAgents.map((ag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: ag.email,
                                                    children: ag.name ? `${ag.name} (${ag.email})` : ag.email
                                                }, ag.email, false, {
                                                    fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 12,
                                        className: "absolute right-2 text-slate-400 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setIsNotesOpen(!isNotesOpen),
                            className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border transition-all cursor-pointer ${isNotesOpen || notes.length > 0 ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700" : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                    size: 13
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Internal Notes"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                notes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-0.5 px-1.5 py-0.2 rounded-full bg-amber-500 text-white text-[10px] font-extrabold",
                                    children: notes.length
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                    lineNumber: 232,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            isNotesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1 rounded-xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/40 p-3 flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-1 duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between text-xs font-bold text-amber-900 dark:text-amber-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"], {
                                        size: 14,
                                        className: "text-amber-600 dark:text-amber-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this),
                                    "Private Team Notes (Visible to agents only — never sent to customer)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsNotesOpen(false),
                                className: "text-amber-700 dark:text-amber-400 hover:text-amber-900 dark:hover:text-amber-200 p-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                        lineNumber: 243,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 max-h-48 overflow-y-auto pr-1",
                        children: isLoadingNotes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-amber-700/70 dark:text-amber-400/70 italic",
                            children: "Loading notes..."
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                            lineNumber: 259,
                            columnNumber: 15
                        }, this) : notes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-amber-700/70 dark:text-amber-400/70 italic",
                            children: "No internal notes on this conversation yet. Use the form below to leave private instructions or context for teammates."
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                            lineNumber: 261,
                            columnNumber: 15
                        }, this) : notes.map((note)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/90 dark:bg-[#181e29] border border-amber-200/60 dark:border-amber-900/40 rounded-lg p-2.5 text-xs shadow-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-2 mb-1 text-[11px] text-slate-500 dark:text-slate-400 font-semibold",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold text-amber-800 dark:text-amber-300",
                                                children: note.authorName || note.authorEmail
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                                lineNumber: 271,
                                                columnNumber: 21
                                            }, this),
                                            note.created && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px]",
                                                children: new Date(note.created).toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                                lineNumber: 275,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                        lineNumber: 270,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-800 dark:text-slate-200 whitespace-pre-wrap",
                                        children: note.content
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                        lineNumber: 280,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, note.id, true, {
                                fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                lineNumber: 266,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handlePostNote,
                        className: "flex items-center gap-2 mt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Add private note for teammates...",
                                value: newNoteContent,
                                onChange: (e)=>setNewNoteContent(e.target.value),
                                className: "flex-1 px-3 py-1.5 text-xs rounded-lg border border-amber-300 dark:border-amber-700/70 bg-white dark:bg-[#111827] text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                lineNumber: 288,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isPostingNote || !newNoteContent.trim(),
                                className: "px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-1 transition-all cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                        lineNumber: 300,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isPostingNote ? "..." : "Post"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                        lineNumber: 301,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                        lineNumber: 287,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
                lineNumber: 242,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_s(SharedMailboxCollabBar, "RuoArsOLlRUWL+UpiDyi01ghQ+Q=");
_c = SharedMailboxCollabBar;
var _c;
__turbopack_context__.k.register(_c, "SharedMailboxCollabBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/mail/MailList.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MailList",
    ()=>MailList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$MailSettingsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/MailSettingsModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PencilEdit01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PencilEdit01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Alert01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$mailUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/mail-list/mailUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$MailListHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/mail-list/MailListHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$FolderFilterTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/mail-list/FolderFilterTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$CategoryTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/mail-list/CategoryTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$DomainAccountsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/mail-list/DomainAccountsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$MailItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/mail-list/MailItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$MailListStates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/mail-list/MailListStates.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function MailList({ filteredMails, isLoading, error, activeFolder, setActiveFolder, activeCategory = "Primary", setActiveCategory, categoryCounts = {}, selectedMail, setSelectedMail, isComposing, setIsComposing, getAvatarColor, onMarkAllRead, onDeleteMultiple, onOpenSettings, password, setPassword, onToggleStar, onDelete, onArchive, onRestore, onMarkRead, onMarkUnread, folderStats = {}, connectedAccounts = [], targetEmail, setTargetEmail, primaryEmail, isPrimaryActive = true, domainMailAccess, onOpenDomainBilling, onLoadMore, hasMore, isLoadingMore, onBack }) {
    var _connectedAccounts_find;
    _s();
    const [internalCategory, setInternalCategory] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("Primary");
    const currentCategory = activeCategory || internalCategory;
    const handleSelectCategory = (cat)=>{
        if (setActiveCategory) {
            setActiveCategory(cat);
        } else {
            setInternalCategory(cat);
        }
    };
    const [isSelectionMode, setIsSelectionMode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [selectedIds, setSelectedIds] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    const [showSettingsModal, setShowSettingsModal] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [settingsModalTab, setSettingsModalTab] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("imap");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const subtab = (searchParams.get("subtab") || searchParams.get("section") || "").toLowerCase();
    const viewingMailboxes = subtab === "domainaccounts";
    const isMailSettings = subtab === "mailsettings" || subtab === "settings" || [
        "imap",
        "subscription",
        "plans",
        "connect",
        "signatures",
        "diagnostics",
        "branding",
        "developer",
        "integrations"
    ].includes(subtab);
    const setViewingMailboxes = (val)=>{
        const params = new URLSearchParams(searchParams.toString());
        if (val) {
            params.set("subtab", "domainaccounts");
        } else {
            params.delete("subtab");
        }
        router.push(`${pathname}?${params.toString()}`);
    };
    // Domain Admin Mailbox Management States
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [mailboxes, setMailboxes] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    const [isLoadingMailboxes, setIsLoadingMailboxes] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [showCreateMailboxForm, setShowCreateMailboxForm] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [newMailboxLocalPart, setNewMailboxLocalPart] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    const [newMailboxPassword, setNewMailboxPassword] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    const [newMailboxName, setNewMailboxName] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    const [newMailboxQuota, setNewMailboxQuota] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(1024);
    const [mailboxError, setMailboxError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [mailboxSuccess, setMailboxSuccess] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [showMailboxPassword, setShowMailboxPassword] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [newMailboxNotificationEmail, setNewMailboxNotificationEmail] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    const [newMailboxJobTitle, setNewMailboxJobTitle] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("Employee");
    const [newMailboxCompany, setNewMailboxCompany] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    const generatePassword = ()=>{
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*";
        const allChars = uppercase + lowercase + numbers + symbols;
        let pwd = "";
        pwd += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
        pwd += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
        pwd += numbers.charAt(Math.floor(Math.random() * numbers.length));
        pwd += symbols.charAt(Math.floor(Math.random() * symbols.length));
        for(let i = 0; i < 8; i++){
            pwd += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }
        pwd = pwd.split("").sort(()=>0.5 - Math.random()).join("");
        setNewMailboxPassword(pwd);
    };
    // States to track local user lookup status
    const [checkingUser, setCheckingUser] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [userStatusMessage, setUserStatusMessage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [searchQuery, setSearchQuery] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    const [isSearchOpen, setIsSearchOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const searchInputRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const displayedMailboxes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "MailList.useMemo[displayedMailboxes]": ()=>{
            if (!searchQuery) return mailboxes;
            const query = searchQuery.toLowerCase();
            return mailboxes.filter({
                "MailList.useMemo[displayedMailboxes]": (mb)=>{
                    const name = (mb.name || "").toLowerCase();
                    const email = (mb.email || "").toLowerCase();
                    return name.includes(query) || email.includes(query);
                }
            }["MailList.useMemo[displayedMailboxes]"]);
        }
    }["MailList.useMemo[displayedMailboxes]"], [
        mailboxes,
        searchQuery
    ]);
    // Dynamic Category Stats & Filtering (Gmail-Style Primary, Promotions, Social, Updates)
    const dynamicCategoryCounts = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "MailList.useMemo[dynamicCategoryCounts]": ()=>{
            const counts = {
                Primary: {
                    total: 0,
                    unread: 0
                },
                Promotions: {
                    total: 0,
                    unread: 0
                },
                Social: {
                    total: 0,
                    unread: 0
                },
                Updates: {
                    total: 0,
                    unread: 0
                }
            };
            if (activeFolder.toLowerCase() === "inbox") {
                for (const m of filteredMails){
                    const cat = m.category || "Primary";
                    if (!counts[cat]) counts[cat] = {
                        total: 0,
                        unread: 0
                    };
                    counts[cat].total += 1;
                    if (!m.isRead) counts[cat].unread += 1;
                }
            }
            return counts;
        }
    }["MailList.useMemo[dynamicCategoryCounts]"], [
        filteredMails,
        activeFolder
    ]);
    const categoryFilteredMails = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "MailList.useMemo[categoryFilteredMails]": ()=>{
            if (activeFolder.toLowerCase() !== "inbox" || !currentCategory || currentCategory.toLowerCase() === "all") {
                return filteredMails;
            }
            return filteredMails.filter({
                "MailList.useMemo[categoryFilteredMails]": (m)=>(m.category || "Primary").toLowerCase() === currentCategory.toLowerCase()
            }["MailList.useMemo[categoryFilteredMails]"]);
        }
    }["MailList.useMemo[categoryFilteredMails]"], [
        filteredMails,
        activeFolder,
        currentCategory
    ]);
    const displayedMails = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "MailList.useMemo[displayedMails]": ()=>{
            if (!searchQuery) return categoryFilteredMails;
            const query = searchQuery.toLowerCase();
            return categoryFilteredMails.filter({
                "MailList.useMemo[displayedMails]": (mail)=>{
                    const from = (mail.from || "").toLowerCase();
                    const subject = (mail.subject || "").toLowerCase();
                    const body = (mail.body || mail.bodyText || "").toLowerCase();
                    return from.includes(query) || subject.includes(query) || body.includes(query);
                }
            }["MailList.useMemo[displayedMails]"]);
        }
    }["MailList.useMemo[displayedMails]"], [
        categoryFilteredMails,
        searchQuery
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MailList.useEffect": ()=>{
            setSearchQuery("");
        }
    }["MailList.useEffect"], [
        viewingMailboxes,
        activeFolder
    ]);
    // Pagination / Infinite Scroll States
    const [visibleMailboxesCount, setVisibleMailboxesCount] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(50);
    const [visibleMailsCount, setVisibleMailsCount] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(50);
    const bottomSentinelRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MailList.useEffect": ()=>{
            setVisibleMailboxesCount(50);
        }
    }["MailList.useEffect"], [
        viewingMailboxes,
        searchQuery,
        mailboxes.length
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MailList.useEffect": ()=>{
            // Reset to top 50 when switching folders or searching
            setVisibleMailsCount(50);
        }
    }["MailList.useEffect"], [
        activeFolder,
        searchQuery
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MailList.useEffect": ()=>{
            // Ensure all currently loaded mails are always visible (never clip loaded emails)
            setVisibleMailsCount({
                "MailList.useEffect": (prev)=>Math.max(50, displayedMails.length)
            }["MailList.useEffect"]);
        }
    }["MailList.useEffect"], [
        displayedMails.length
    ]);
    // Infinite Scroll Auto-Loader via IntersectionObserver
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MailList.useEffect": ()=>{
            const sentinel = bottomSentinelRef.current;
            if (!sentinel) return;
            const observer = new IntersectionObserver({
                "MailList.useEffect": (entries)=>{
                    const first = entries[0];
                    if (first && first.isIntersecting) {
                        if (visibleMailsCount < displayedMails.length) {
                            setVisibleMailsCount({
                                "MailList.useEffect": (prev)=>Math.min(displayedMails.length, prev + 50)
                            }["MailList.useEffect"]);
                        }
                        if (onLoadMore && hasMore && !isLoadingMore) {
                            onLoadMore();
                        }
                    }
                }
            }["MailList.useEffect"], {
                root: null,
                rootMargin: '300px'
            });
            observer.observe(sentinel);
            return ({
                "MailList.useEffect": ()=>{
                    observer.disconnect();
                }
            })["MailList.useEffect"];
        }
    }["MailList.useEffect"], [
        visibleMailsCount,
        displayedMails.length,
        onLoadMore,
        hasMore,
        isLoadingMore
    ]);
    const handleScroll = (e)=>{
        const target = e.currentTarget;
        const currentScrollTop = target.scrollTop;
        const isAtBottom = target.scrollHeight - currentScrollTop <= target.clientHeight + 300;
        if (isAtBottom) {
            if (viewingMailboxes) {
                if (visibleMailboxesCount < displayedMailboxes.length) {
                    setVisibleMailboxesCount((prev)=>prev + 50);
                }
            } else {
                if (visibleMailsCount < displayedMails.length) {
                    setVisibleMailsCount((prev)=>Math.min(displayedMails.length, prev + 50));
                }
                if (onLoadMore && hasMore && !isLoadingMore) {
                    onLoadMore();
                }
            }
        }
    };
    // Edit Mailbox States
    const [editingMailbox, setEditingMailbox] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [editMailboxName, setEditMailboxName] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    const [editMailboxPassword, setEditMailboxPassword] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    const [editMailboxQuota, setEditMailboxQuota] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(1024);
    const [showEditMailboxPassword, setShowEditMailboxPassword] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const generateEditPassword = ()=>{
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*";
        const allChars = uppercase + lowercase + numbers + symbols;
        let pwd = "";
        pwd += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
        pwd += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
        pwd += numbers.charAt(Math.floor(Math.random() * numbers.length));
        pwd += symbols.charAt(Math.floor(Math.random() * symbols.length));
        for(let i = 0; i < 8; i++){
            pwd += allChars.charAt(Math.floor(Math.random() * allChars.length));
        }
        pwd = pwd.split("").sort(()=>0.5 - Math.random()).join("");
        setEditMailboxPassword(pwd);
        setShowEditMailboxPassword(true);
    };
    const handleStartEditMailbox = (mb)=>{
        setEditingMailbox(mb);
        setEditMailboxName(mb.name || mb.email.split("@")[0]);
        setEditMailboxPassword("");
        const quotaMb = Math.round(mb.quota / (1024 * 1024));
        setEditMailboxQuota(quotaMb || 1024);
        setShowEditMailboxPassword(false);
        setShowCreateMailboxForm(false);
    };
    const handleEditMailbox = async (e)=>{
        e.preventDefault();
        if (!editingMailbox) return;
        setIsLoadingMailboxes(true);
        setMailboxError(null);
        setMailboxSuccess(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/mailboxes/${encodeURIComponent(editingMailbox.email)}`, {
                name: editMailboxName,
                password: editMailboxPassword || undefined,
                quotaMb: editMailboxQuota
            });
            if (res.data && res.data.success) {
                setMailboxSuccess("Email account updated successfully!");
                setMailboxes((prev)=>prev.map((mb)=>{
                        if (mb.email.toLowerCase() === editingMailbox.email.toLowerCase()) {
                            return {
                                ...mb,
                                name: editMailboxName,
                                quota: editMailboxQuota * 1024 * 1024
                            };
                        }
                        return mb;
                    }));
                setEditingMailbox(null);
                fetchDomainMailboxes();
            } else {
                setMailboxError(res.data.message || "Failed to update email account.");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            console.error("Edit mailbox error", err);
            setMailboxError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to update email account.");
        } finally{
            setIsLoadingMailboxes(false);
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MailList.useEffect": ()=>{
            if (!newMailboxLocalPart || !(user === null || user === void 0 ? void 0 : user.email)) {
                setUserStatusMessage(null);
                return;
            }
            const domain = user.email.split("@")[1];
            const fullEmail = `${newMailboxLocalPart.toLowerCase()}@${domain}`;
            const mailboxExists = mailboxes.some({
                "MailList.useEffect.mailboxExists": (mb)=>mb.email && mb.email.toLowerCase() === fullEmail
            }["MailList.useEffect.mailboxExists"]);
            if (mailboxExists) {
                setUserStatusMessage("⚠️ Mailbox already exists on the mail server.");
                return;
            }
            const timer = setTimeout({
                "MailList.useEffect.timer": async ()=>{
                    setCheckingUser(true);
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/auth/check-username?email=${encodeURIComponent(fullEmail)}`);
                        if (res.data && res.data.available) {
                            setUserStatusMessage("👤 No existing user found. A new PingDart account will be created.");
                        } else {
                            setUserStatusMessage("🔗 Existing PingDart user found. This will link the mailbox to their account.");
                        }
                    } catch (err) {
                        setUserStatusMessage(null);
                    } finally{
                        setCheckingUser(false);
                    }
                }
            }["MailList.useEffect.timer"], 500);
            return ({
                "MailList.useEffect": ()=>clearTimeout(timer)
            })["MailList.useEffect"];
        }
    }["MailList.useEffect"], [
        newMailboxLocalPart,
        mailboxes,
        user === null || user === void 0 ? void 0 : user.email
    ]);
    const fetchDomainMailboxes = async ()=>{
        if (!user || !user.email) return;
        const domain = user.email.split("@")[1];
        setIsLoadingMailboxes(true);
        setMailboxError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/mailboxes");
            if (res.data && res.data.success && Array.isArray(res.data.data)) {
                const domainMbs = res.data.data.filter((mb)=>mb.email && mb.email.endsWith(`@${domain}`));
                // Enrich with PingDart user avatars in parallel
                const enriched = await Promise.all(domainMbs.map(async (mb)=>{
                    try {
                        var _avatarRes_data, _avatarRes_data1;
                        const avatarRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/user/avatar-by-email?email=${encodeURIComponent(mb.email)}`);
                        if (((_avatarRes_data = avatarRes.data) === null || _avatarRes_data === void 0 ? void 0 : _avatarRes_data.success) && ((_avatarRes_data1 = avatarRes.data) === null || _avatarRes_data1 === void 0 ? void 0 : _avatarRes_data1.avatar)) {
                            return {
                                ...mb,
                                avatar: avatarRes.data.avatar
                            };
                        }
                    } catch (e) {
                    // Silent fail — show initials fallback
                    }
                    return mb;
                }));
                setMailboxes(enriched);
            }
        } catch (err) {
            var _err_response_data, _err_response;
            console.error("Failed to fetch mailboxes", err);
            setMailboxError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to load mailboxes.");
        } finally{
            setIsLoadingMailboxes(false);
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MailList.useEffect": ()=>{
            if (viewingMailboxes) {
                fetchDomainMailboxes();
            }
        }
    }["MailList.useEffect"], [
        viewingMailboxes
    ]);
    const handleCreateMailbox = async (e)=>{
        e.preventDefault();
        if (!user || !user.email) return;
        const domain = user.email.split("@")[1];
        if (!newMailboxLocalPart || !newMailboxPassword) {
            setMailboxError("Username and password are required.");
            return;
        }
        setIsLoadingMailboxes(true);
        setMailboxError(null);
        setMailboxSuccess(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/mailboxes", {
                email: `${newMailboxLocalPart.toLowerCase()}@${domain}`,
                password: newMailboxPassword,
                fullName: newMailboxName || newMailboxLocalPart,
                jobTitle: newMailboxJobTitle || "Employee",
                company: newMailboxCompany || (user === null || user === void 0 ? void 0 : user.businessName) || (user === null || user === void 0 ? void 0 : user.business_name) || (domain ? domain.split('.')[0].charAt(0).toUpperCase() + domain.split('.')[0].slice(1) : ""),
                quotaMb: newMailboxQuota,
                notificationEmail: newMailboxNotificationEmail || undefined
            });
            if (res.data && res.data.success) {
                setMailboxSuccess("Email account created successfully!");
                const newMailboxObj = {
                    email: `${newMailboxLocalPart.toLowerCase()}@${domain}`,
                    name: newMailboxName || newMailboxLocalPart,
                    quota: newMailboxQuota * 1024 * 1024,
                    quota_used: 0
                };
                setMailboxes((prev)=>[
                        newMailboxObj,
                        ...prev
                    ]);
                setNewMailboxLocalPart("");
                setNewMailboxPassword("");
                setNewMailboxName("");
                setNewMailboxJobTitle("Employee");
                setNewMailboxQuota(1024);
                setNewMailboxNotificationEmail("");
                setShowMailboxPassword(false);
                setShowCreateMailboxForm(false);
                fetchDomainMailboxes();
            } else {
                setMailboxError(res.data.message || "Failed to create email account.");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            console.error("Create mailbox error", err);
            setMailboxError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to create email account.");
        } finally{
            setIsLoadingMailboxes(false);
        }
    };
    const handleDeleteMailbox = async (emailToDelete)=>{
        if (!window.confirm(`Are you sure you want to delete the email account ${emailToDelete}? This action cannot be undone.`)) {
            return;
        }
        setIsLoadingMailboxes(true);
        setMailboxError(null);
        setMailboxSuccess(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/mailboxes/${encodeURIComponent(emailToDelete)}`);
            if (res.data && res.data.success) {
                setMailboxSuccess(`Email account ${emailToDelete} deleted.`);
                setMailboxes((prev)=>prev.filter((mb)=>mb.email !== emailToDelete));
                fetchDomainMailboxes();
            } else {
                setMailboxError(res.data.message || "Failed to delete email account.");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            console.error("Delete mailbox error", err);
            setMailboxError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to delete email account.");
        } finally{
            setIsLoadingMailboxes(false);
        }
    };
    const toggleSelection = (id)=>{
        setSelectedIds((prev)=>prev.includes(id) ? prev.filter((i)=>i !== id) : [
                ...prev,
                id
            ]);
    };
    const domainName = (user === null || user === void 0 ? void 0 : user.email) ? user.email.split("@")[1] : "";
    var _domainMailAccess_daysRemainingInGrace;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative flex flex-col w-full md:w-[380px] lg:w-[400px] min-h-0 h-full border-r border-[#d1d7db] dark:border-[#2d3139] shrink-0 bg-white dark:bg-[#111827] ${selectedMail || isComposing ? "hidden md:flex" : "flex"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$MailListHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailListHeader"], {
                isSelectionMode: isSelectionMode,
                setIsSelectionMode: setIsSelectionMode,
                selectedIds: selectedIds,
                setSelectedIds: setSelectedIds,
                onDeleteMultiple: onDeleteMultiple,
                isSearchOpen: isSearchOpen,
                setIsSearchOpen: setIsSearchOpen,
                searchQuery: searchQuery,
                setSearchQuery: setSearchQuery,
                searchInputRef: searchInputRef,
                viewingMailboxes: viewingMailboxes,
                setViewingMailboxes: setViewingMailboxes,
                isNative: isNative,
                targetEmail: targetEmail,
                setTargetEmail: setTargetEmail,
                primaryEmail: primaryEmail,
                isPrimaryActive: isPrimaryActive,
                connectedAccounts: connectedAccounts,
                userEmail: user === null || user === void 0 ? void 0 : user.email,
                userRole: user === null || user === void 0 ? void 0 : user.role,
                user: user,
                setIsComposing: setIsComposing,
                setSelectedMail: setSelectedMail,
                onMarkAllRead: onMarkAllRead,
                setShowSettingsModal: setShowSettingsModal,
                onOpenSettings: onOpenSettings,
                onOpenCampaigns: ()=>{
                    if (onOpenSettings) {
                        onOpenSettings("campaigns");
                    } else {
                        setSettingsModalTab("campaigns");
                        setShowSettingsModal(true);
                    }
                },
                router: router,
                onBack: onBack
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/MailList.tsx",
                lineNumber: 508,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onScroll: handleScroll,
                className: "flex-1 overflow-y-auto flex flex-col bg-white dark:bg-[#111827] relative",
                children: [
                    !viewingMailboxes && !isMailSettings && !showSettingsModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$FolderFilterTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FolderFilterTabs"], {
                        activeFolder: activeFolder,
                        setActiveFolder: setActiveFolder,
                        viewingMailboxes: viewingMailboxes,
                        folderStats: folderStats,
                        isNative: isNative,
                        searchParams: searchParams,
                        pathname: pathname
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailList.tsx",
                        lineNumber: 551,
                        columnNumber: 11
                    }, this),
                    activeFolder.toLowerCase() === "inbox" && !viewingMailboxes && !isMailSettings && !showSettingsModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$CategoryTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryTabs"], {
                        currentCategory: currentCategory,
                        handleSelectCategory: handleSelectCategory,
                        dynamicCategoryCounts: dynamicCategoryCounts
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailList.tsx",
                        lineNumber: 564,
                        columnNumber: 11
                    }, this),
                    (domainMailAccess === null || domainMailAccess === void 0 ? void 0 : domainMailAccess.status) === 'past_due' && !viewingMailboxes && !isMailSettings && !showSettingsModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-amber-50 dark:bg-amber-950/40 border-b border-amber-200 dark:border-amber-900/50 px-3.5 py-2 flex items-center justify-between text-xs text-amber-800 dark:text-amber-200 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 truncate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                        size: 14,
                                        className: "text-amber-600 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailList.tsx",
                                        lineNumber: 575,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "truncate",
                                        children: [
                                            "Domain subscription overdue (",
                                            (_domainMailAccess_daysRemainingInGrace = domainMailAccess.daysRemainingInGrace) !== null && _domainMailAccess_daysRemainingInGrace !== void 0 ? _domainMailAccess_daysRemainingInGrace : 15,
                                            "d grace remaining)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/MailList.tsx",
                                        lineNumber: 576,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/MailList.tsx",
                                lineNumber: 574,
                                columnNumber: 13
                            }, this),
                            onOpenDomainBilling && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onOpenDomainBilling,
                                className: "ml-2 font-bold text-indigo-600 dark:text-indigo-400 hover:underline shrink-0 cursor-pointer",
                                children: "Renew"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailList.tsx",
                                lineNumber: 581,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/MailList.tsx",
                        lineNumber: 573,
                        columnNumber: 11
                    }, this),
                    viewingMailboxes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$DomainAccountsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomainAccountsView"], {
                        showCreateMailboxForm: showCreateMailboxForm,
                        setShowCreateMailboxForm: setShowCreateMailboxForm,
                        mailboxError: mailboxError,
                        mailboxSuccess: mailboxSuccess,
                        editingMailbox: editingMailbox,
                        setEditingMailbox: setEditingMailbox,
                        handleEditMailbox: handleEditMailbox,
                        setMailboxError: setMailboxError,
                        editMailboxName: editMailboxName,
                        setEditMailboxName: setEditMailboxName,
                        generateEditPassword: generateEditPassword,
                        showEditMailboxPassword: showEditMailboxPassword,
                        setShowEditMailboxPassword: setShowEditMailboxPassword,
                        editMailboxPassword: editMailboxPassword,
                        setEditMailboxPassword: setEditMailboxPassword,
                        editMailboxQuota: editMailboxQuota,
                        setEditMailboxQuota: setEditMailboxQuota,
                        isLoadingMailboxes: isLoadingMailboxes,
                        handleCreateMailbox: handleCreateMailbox,
                        newMailboxLocalPart: newMailboxLocalPart,
                        setNewMailboxLocalPart: setNewMailboxLocalPart,
                        domainName: domainName,
                        checkingUser: checkingUser,
                        userStatusMessage: userStatusMessage,
                        newMailboxName: newMailboxName,
                        setNewMailboxName: setNewMailboxName,
                        generatePassword: generatePassword,
                        showMailboxPassword: showMailboxPassword,
                        setShowMailboxPassword: setShowMailboxPassword,
                        newMailboxPassword: newMailboxPassword,
                        setNewMailboxPassword: setNewMailboxPassword,
                        newMailboxNotificationEmail: newMailboxNotificationEmail,
                        setNewMailboxNotificationEmail: setNewMailboxNotificationEmail,
                        newMailboxQuota: newMailboxQuota,
                        setNewMailboxQuota: setNewMailboxQuota,
                        newMailboxJobTitle: newMailboxJobTitle,
                        setNewMailboxJobTitle: setNewMailboxJobTitle,
                        newMailboxCompany: newMailboxCompany,
                        setNewMailboxCompany: setNewMailboxCompany,
                        mailboxes: mailboxes,
                        displayedMailboxes: displayedMailboxes,
                        visibleMailboxesCount: visibleMailboxesCount,
                        handleStartEditMailbox: handleStartEditMailbox,
                        handleDeleteMailbox: handleDeleteMailbox,
                        searchQuery: searchQuery,
                        user: user,
                        primaryEmail: primaryEmail,
                        onOpenSettings: onOpenSettings,
                        onRefreshMailboxes: fetchDomainMailboxes
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailList.tsx",
                        lineNumber: 593,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col min-h-0 w-full",
                        children: [
                            isLoading && filteredMails.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-2 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-black/90 shadow-md rounded-full p-1.5 z-10 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-spin rounded-full h-4 w-4 border-b-2 border-[#4338ca]"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailList.tsx",
                                    lineNumber: 648,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailList.tsx",
                                lineNumber: 647,
                                columnNumber: 15
                            }, this),
                            isLoading && displayedMails.length === 0 && !error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$MailListStates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailListSkeleton"], {}, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailList.tsx",
                                lineNumber: 652,
                                columnNumber: 15
                            }, this) : error && displayedMails.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$MailListStates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailListError"], {
                                error: error,
                                setShowSettingsModal: setShowSettingsModal
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailList.tsx",
                                lineNumber: 654,
                                columnNumber: 15
                            }, this) : displayedMails.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$MailListStates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailListEmptyState"], {
                                searchQuery: searchQuery,
                                activeFolder: activeFolder,
                                isNative: isNative,
                                isDeactivated: (domainMailAccess === null || domainMailAccess === void 0 ? void 0 : domainMailAccess.status) === 'suspended' || (domainMailAccess === null || domainMailAccess === void 0 ? void 0 : domainMailAccess.status) === 'termination_pending' || (targetEmail === null || targetEmail === void 0 ? void 0 : targetEmail.toLowerCase()) === (primaryEmail || (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || '').toLowerCase() && (isPrimaryActive === false || Boolean(user === null || user === void 0 ? void 0 : user.is_account_inactive)) || connectedAccounts.some((a)=>(a.email || '').toLowerCase() === (targetEmail || '').toLowerCase() && a.isActive === false),
                                deactivatedReason: (domainMailAccess === null || domainMailAccess === void 0 ? void 0 : domainMailAccess.status) === 'suspended' || (domainMailAccess === null || domainMailAccess === void 0 ? void 0 : domainMailAccess.status) === 'termination_pending' ? domainMailAccess.message || "Domain email services are suspended due to an overdue domain subscription." : (targetEmail === null || targetEmail === void 0 ? void 0 : targetEmail.toLowerCase()) === (primaryEmail || (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || '').toLowerCase() && (isPrimaryActive === false || Boolean(user === null || user === void 0 ? void 0 : user.is_account_inactive)) ? "Your primary email account has been deactivated. Please contact your admin or switch to another active account." : ((_connectedAccounts_find = connectedAccounts.find((a)=>(a.email || '').toLowerCase() === (targetEmail || '').toLowerCase())) === null || _connectedAccounts_find === void 0 ? void 0 : _connectedAccounts_find.inactiveReason) || "This email account has been deactivated.",
                                onOpenDomainBilling: (domainMailAccess === null || domainMailAccess === void 0 ? void 0 : domainMailAccess.status) === 'suspended' ? onOpenDomainBilling : undefined
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailList.tsx",
                                lineNumber: 656,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    displayedMails.slice(0, visibleMailsCount).map((mail, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$MailItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailItem"], {
                                            mail: mail,
                                            idx: idx,
                                            totalDisplayedCount: Math.min(visibleMailsCount, displayedMails.length),
                                            selectedMail: selectedMail,
                                            setSelectedMail: setSelectedMail,
                                            isSelectionMode: isSelectionMode,
                                            selectedIds: selectedIds,
                                            toggleSelection: toggleSelection,
                                            activeFolder: activeFolder,
                                            user: user,
                                            getAvatarColor: getAvatarColor,
                                            setIsComposing: setIsComposing,
                                            onToggleStar: onToggleStar,
                                            onDelete: onDelete,
                                            onArchive: onArchive,
                                            onRestore: onRestore,
                                            onMarkRead: onMarkRead,
                                            onMarkUnread: onMarkUnread
                                        }, mail.uid, false, {
                                            fileName: "[project]/src/modules/mail/MailList.tsx",
                                            lineNumber: 678,
                                            columnNumber: 19
                                        }, this)),
                                    (hasMore || visibleMailsCount < displayedMails.length || isLoadingMore) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: bottomSentinelRef,
                                        className: "flex items-center justify-center gap-2 py-4 text-xs text-[#4338ca] font-medium",
                                        children: isLoadingMore ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "animate-spin rounded-full h-3.5 w-3.5 border-b-2 border-[#4338ca]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/MailList.tsx",
                                                    lineNumber: 708,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Loading next 50 messages..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/MailList.tsx",
                                                    lineNumber: 709,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true) : hasMore ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: onLoadMore,
                                            className: "px-4 py-1.5 rounded-[8px] bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors cursor-pointer text-xs font-semibold shadow-xs",
                                            children: "Load next 50 messages"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailList.tsx",
                                            lineNumber: 712,
                                            columnNumber: 23
                                        }, this) : null
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailList.tsx",
                                        lineNumber: 702,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/MailList.tsx",
                        lineNumber: 645,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[75px] md:h-0"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailList.tsx",
                        lineNumber: 726,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/MailList.tsx",
                lineNumber: 548,
                columnNumber: 7
            }, this),
            showSettingsModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$MailSettingsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailSettingsModal"], {
                initialTab: settingsModalTab,
                onClose: ()=>setShowSettingsModal(false),
                currentPassword: password,
                onPasswordChange: setPassword
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/MailList.tsx",
                lineNumber: 730,
                columnNumber: 9
            }, this),
            !isComposing && !showSettingsModal && !viewingMailboxes && !isSelectionMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>{
                    setIsComposing(true);
                    setSelectedMail(null);
                },
                className: "absolute bottom-[calc(0.3rem+env(safe-area-inset-bottom,0px))] right-4 z-40 md:hidden flex items-center justify-center w-12 h-12 rounded-[10px] bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white shadow-xl shadow-indigo-600/40 hover:scale-105 active:scale-95 transition-all select-none border border-white/20",
                title: "Compose Email",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PencilEdit01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PencilEdit01Icon"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/modules/mail/MailList.tsx",
                    lineNumber: 748,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/MailList.tsx",
                lineNumber: 740,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/mail/MailList.tsx",
        lineNumber: 503,
        columnNumber: 5
    }, this);
}
_s(MailList, "+7BmO8PKGbOk2rv/hCL1wLANCrM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = MailList;
var _c;
__turbopack_context__.k.register(_c, "MailList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/mail/MailCompose.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MailCompose",
    ()=>MailCompose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Attachment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Attachment01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$HappyIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/HappyIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SentIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/File01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mailApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$RecipientRiskBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/RecipientRiskBadge.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
function EmailTagInput({ emails, setEmails, placeholder, suggestions = [], onInputChange }) {
    _s();
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showSuggestions, setShowSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const filteredSuggestions = suggestions.filter((s)=>{
        var _s_match;
        if (!s) return false;
        // Extract raw email if format is "Name <email@domain.com>"
        const rawEmail = s.includes('<') ? ((_s_match = s.match(/<([^>]+)>/)) === null || _s_match === void 0 ? void 0 : _s_match[1]) || s : s;
        const lower = s.toLowerCase();
        const inputLower = inputValue.trim().toLowerCase();
        return inputLower && lower.includes(inputLower) && !emails.includes(rawEmail);
    });
    const addEmail = (emailStr)=>{
        var _emailStr_match;
        const rawEmail = emailStr.includes('<') ? ((_emailStr_match = emailStr.match(/<([^>]+)>/)) === null || _emailStr_match === void 0 ? void 0 : _emailStr_match[1]) || emailStr : emailStr;
        const newEmail = rawEmail.trim();
        if (newEmail && !emails.includes(newEmail)) {
            setEmails([
                ...emails,
                newEmail
            ]);
        }
        setInputValue("");
        onInputChange === null || onInputChange === void 0 ? void 0 : onInputChange("");
        setShowSuggestions(false);
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" || e.key === "," || e.key === " ") {
            e.preventDefault();
            addEmail(inputValue);
        } else if (e.key === "Backspace" && !inputValue && emails.length > 0) {
            setEmails(emails.slice(0, -1));
        }
    };
    const handleBlur = ()=>{
        setTimeout(()=>{
            if (inputValue.trim()) {
                addEmail(inputValue);
            }
            setShowSuggestions(false);
        }, 200);
    };
    const removeEmail = (emailToRemove)=>{
        setEmails(emails.filter((e)=>e !== emailToRemove));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-1.5 items-center",
                children: [
                    emails.map((email)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 bg-[#f0f2f5] dark:bg-[#2d3139] px-2 py-1 rounded-md text-[13px] text-[#111b21] dark:text-[#f0f2f5] border border-[#d1d7db] dark:border-[#404650]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: email
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>removeEmail(email),
                                    className: "text-[#8696a0] hover:text-[#54656f] dark:hover:text-[#d1d7db]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, email, true, {
                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: inputValue,
                        onChange: (e)=>{
                            setInputValue(e.target.value);
                            onInputChange === null || onInputChange === void 0 ? void 0 : onInputChange(e.target.value);
                            setShowSuggestions(true);
                        },
                        onFocus: ()=>setShowSuggestions(true),
                        onKeyDown: handleKeyDown,
                        onBlur: handleBlur,
                        placeholder: emails.length === 0 ? placeholder : "",
                        className: "flex-1 outline-none text-[15px] bg-transparent text-[#111b21] dark:text-[#f0f2f5] placeholder:text-[#8696a0] min-w-[120px] py-1"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailCompose.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/MailCompose.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            showSuggestions && filteredSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-0 right-0 top-full mt-1 bg-white dark:bg-[#1a1c20] border border-[#d1d7db] dark:border-[#2d3139] rounded-lg shadow-xl z-50 max-h-48 overflow-y-auto",
                children: filteredSuggestions.map((sug)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onMouseDown: (e)=>{
                            e.preventDefault();
                            addEmail(sug);
                        },
                        className: "px-4 py-2 hover:bg-[#f0f2f5] dark:hover:bg-[#2d3139] cursor-pointer text-[14px] text-[#111b21] dark:text-[#e9edef] flex items-center justify-between transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: sug
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                            lineNumber: 123,
                            columnNumber: 15
                        }, this)
                    }, sug, false, {
                        fileName: "[project]/src/modules/mail/MailCompose.tsx",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/MailCompose.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/mail/MailCompose.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
_s(EmailTagInput, "nvj4rwNz4wXT8ZnDYAxaf/v5LXE=");
_c = EmailTagInput;
function MailCompose({ setIsComposing, showCcBcc, setShowCcBcc, initialData, password = "", targetEmail, defaultSignature, brandLogoUrl = "", suggestions = [], onSent, onSentOptimistic, onSentComplete, onDraftSaved }) {
    _s1();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const [draftUid, setDraftUid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialData === null || initialData === void 0 ? void 0 : initialData.uid);
    const [to, setTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((initialData === null || initialData === void 0 ? void 0 : initialData.to) ? initialData.to.split(',').map({
        "MailCompose.useState": (e)=>e.trim()
    }["MailCompose.useState"]).filter(Boolean) : []);
    const [toInput, setToInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ccInput, setCcInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [bccInput, setBccInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [subject, setSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((initialData === null || initialData === void 0 ? void 0 : initialData.subject) || "");
    const [body, setBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MailCompose.useState": ()=>(initialData === null || initialData === void 0 ? void 0 : initialData.body) || ""
    }["MailCompose.useState"]);
    const [cc, setCc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((initialData === null || initialData === void 0 ? void 0 : initialData.cc) ? initialData.cc.split(',').map({
        "MailCompose.useState": (e)=>e.trim()
    }["MailCompose.useState"]).filter(Boolean) : []);
    const [bcc, setBcc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((initialData === null || initialData === void 0 ? void 0 : initialData.bcc) ? initialData.bcc.split(',').map({
        "MailCompose.useState": (e)=>e.trim()
    }["MailCompose.useState"]).filter(Boolean) : []);
    const [attachments, setAttachments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showEmojiPicker, setShowEmojiPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const emojiPickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sharedMailboxes, setSharedMailboxes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedFrom, setSelectedFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(targetEmail || "");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailCompose.useEffect": ()=>{
            const handleClickOutside = {
                "MailCompose.useEffect.handleClickOutside": (e)=>{
                    if (emojiPickerRef.current && !emojiPickerRef.current.contains(e.target)) {
                        setShowEmojiPicker(false);
                    }
                }
            }["MailCompose.useEffect.handleClickOutside"];
            if (showEmojiPicker) {
                document.addEventListener("mousedown", handleClickOutside);
            }
            return ({
                "MailCompose.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["MailCompose.useEffect"];
        }
    }["MailCompose.useEffect"], [
        showEmojiPicker
    ]);
    const handleFileSelect = (e)=>{
        if (e.target.files && e.target.files.length > 0) {
            const newFiles = Array.from(e.target.files);
            const totalSize = [
                ...attachments,
                ...newFiles
            ].reduce((acc, f)=>acc + f.size, 0);
            if (totalSize > 512 * 1024 * 1024) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Total attachments size exceeds 512 MB limit");
                return;
            }
            setAttachments((prev)=>[
                    ...prev,
                    ...newFiles
                ]);
        }
        if (e.target) {
            e.target.value = "";
        }
    };
    const removeAttachment = (indexToRemove)=>{
        setAttachments((prev)=>prev.filter((_, idx)=>idx !== indexToRemove));
    };
    const formatFileSize = (bytes)=>{
        if (bytes < 1024) return bytes + " B";
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
        return (bytes / (1024 * 1024)).toFixed(1) + " MB";
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MailCompose.useEffect": ()=>{
            let isMounted = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/shared-mailboxes").then({
                "MailCompose.useEffect": (res)=>{
                    var _res_data;
                    if (isMounted && ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && Array.isArray(res.data.data)) {
                        setSharedMailboxes(res.data.data);
                    }
                }
            }["MailCompose.useEffect"]).catch({
                "MailCompose.useEffect": ()=>{}
            }["MailCompose.useEffect"]);
            return ({
                "MailCompose.useEffect": ()=>{
                    isMounted = false;
                }
            })["MailCompose.useEffect"];
        }
    }["MailCompose.useEffect"], []);
    const handleSend = async ()=>{
        // Flush any pending uncommitted inputs before sending
        const extractEmail = (str)=>{
            const match = str.match(/<([^>]+)>/);
            return (match ? match[1] : str).trim();
        };
        let effectiveTo = [
            ...to
        ];
        if (toInput.trim()) {
            const pending = extractEmail(toInput);
            if (pending && !effectiveTo.includes(pending)) {
                effectiveTo.push(pending);
            }
        }
        let effectiveCc = [
            ...cc
        ];
        if (ccInput.trim()) {
            const pending = extractEmail(ccInput);
            if (pending && !effectiveCc.includes(pending)) {
                effectiveCc.push(pending);
            }
        }
        let effectiveBcc = [
            ...bcc
        ];
        if (bccInput.trim()) {
            const pending = extractEmail(bccInput);
            if (pending && !effectiveBcc.includes(pending)) {
                effectiveBcc.push(pending);
            }
        }
        if (effectiveTo.length === 0 || !subject || !body) return;
        const tempUid = `temp_${Date.now()}`;
        const email = selectedFrom || targetEmail || (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || "";
        const toString = effectiveTo.join(', ');
        const ccString = effectiveCc.join(', ');
        const bccString = effectiveBcc.join(', ');
        let finalBody = body;
        // Build plain text
        if (defaultSignature) {
            const plainSig = defaultSignature.replace(/<[^>]*>/g, (tag)=>{
                if (/<br\s*\/?>/.test(tag)) return '\n';
                return '';
            });
            finalBody = body + "\n\n-- \n" + plainSig;
        }
        // Convert plain text body into clean HTML with blockquotes for quoted replies
        const formatBodyHtml = (rawText)=>{
            if (!rawText) return '';
            const lines = rawText.split('\n');
            let html = '';
            let inQuote = false;
            let quoteLines = [];
            for (const line of lines){
                const isQuoteLine = line.startsWith('>') || line.startsWith('On ') || line.startsWith('--- On ') || line.startsWith('--- Forwarded');
                if (isQuoteLine) {
                    inQuote = true;
                    quoteLines.push(line.replace(/^>\s?/, ''));
                } else {
                    if (inQuote) {
                        inQuote = false;
                        html += `<blockquote style="margin: 12px 0; padding-left: 12px; border-left: 3px solid #cbd5e1; color: #475569; font-size: 13px;">${quoteLines.join('<br/>')}</blockquote>`;
                        quoteLines = [];
                    }
                    html += line ? `${line}<br/>` : '<br/>';
                }
            }
            if (inQuote && quoteLines.length > 0) {
                html += `<blockquote style="margin: 12px 0; padding-left: 12px; border-left: 3px solid #cbd5e1; color: #475569; font-size: 13px;">${quoteLines.join('<br/>')}</blockquote>`;
            }
            return html;
        };
        const bodyHtmlContent = formatBodyHtml(body);
        const sigBlock = defaultSignature ? `<div style="margin-top:24px;padding-top:16px;border-top:1px solid #e8e8e8;">${defaultSignature}</div>` : '';
        // Sender profile
        const senderName = (user === null || user === void 0 ? void 0 : user.full_name) || (user === null || user === void 0 ? void 0 : user.fullName) || (user === null || user === void 0 ? void 0 : user.username) || email.split('@')[0] || 'User';
        const senderEmail = email;
        const initials = senderName.split(' ').map((w)=>w[0]).join('').toUpperCase().slice(0, 2);
        const avatarColors = [
            '#4338ca',
            '#2563eb',
            '#059669',
            '#d97706',
            '#dc2626',
            '#0891b2',
            '#9333ea'
        ];
        const avatarColor = avatarColors[initials.charCodeAt(0) % avatarColors.length];
        const avatarBlock = (user === null || user === void 0 ? void 0 : user.avatar) ? `<img src="${user.avatar}" alt="${senderName}" style="width:48px;height:48px;border-radius:50%;object-fit:cover;display:block;" />` : `<div style="width:48px;height:48px;border-radius:50%;background:${avatarColor};display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:600;color:#fff;font-family:system-ui,sans-serif;line-height:48px;text-align:center;">${initials}</div>`;
        const logoBlock = brandLogoUrl ? `<img src="${brandLogoUrl}" alt="Brand Logo" style="max-height:40px;max-width:140px;object-fit:contain;display:block;" />` : '';
        const finalBodyHtml = `<!DOCTYPE html>
<html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#f5f5f7;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f7;padding:32px 0;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,0.08);">
        <tr>
          <td style="padding:32px 40px 28px 40px;">

            <!-- Logo row (top-right) -->
            ${logoBlock ? `<table width="100%" cellpadding="0" cellspacing="0"><tr><td></td><td style="text-align:right;width:150px;">${logoBlock}</td></tr></table>` : ''}

            <!-- Sender profile (Gmail-style centered) -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:${logoBlock ? '20px' : '0'};margin-bottom:24px;">
              <tr><td align="center">
                <table cellpadding="0" cellspacing="0">
                  <tr><td align="center" style="padding-bottom:10px;">
                    ${avatarBlock}
                  </td></tr>
                  <tr><td align="center">
                    <div style="font-size:15px;font-weight:600;color:#1d1d1f;margin-bottom:2px;">${senderName}</div>
                    <div style="font-size:13px;color:#6e6e73;">${senderEmail}</div>
                  </td></tr>
                </table>
              </td></tr>
            </table>

            <!-- Divider -->
            <div style="height:1px;background:#e8e8e8;margin-bottom:24px;"></div>

            <!-- Email body -->
            <div style="font-size:15px;line-height:1.7;color:#1d1d1f;">
              ${bodyHtmlContent}
            </div>
            ${sigBlock}
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
        const tempMail = {
            uid: tempUid,
            from: email,
            to: toString,
            subject,
            bodyText: finalBody,
            bodyHtml: finalBodyHtml,
            date: new Date().toISOString(),
            isRead: true,
            status: "sending",
            attachments: attachments.map((f, idx)=>({
                    id: `att_${Date.now()}_${idx}`,
                    filename: f.name,
                    sizeBytes: f.size,
                    size: f.size,
                    contentType: f.type
                }))
        };
        // 1. Optimistically notify UI and close modal immediately
        if (onSentOptimistic) onSentOptimistic(tempMail);
        setIsComposing(false);
        // 2. Perform send in background
        try {
            setIsSending(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].sendMail(email, password, toString, ccString, bccString, subject, finalBody, finalBodyHtml, undefined, attachments.length > 0 ? attachments : undefined);
            if (res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Email sent successfully!");
                if (onSentComplete) onSentComplete(tempUid, true);
                if (onSent) onSent();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to send email: " + (res.message || "Unknown error"));
                if (onSentComplete) onSentComplete(tempUid, false);
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to send email: " + (((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || err.message));
            if (onSentComplete) onSentComplete(tempUid, false);
        } finally{
            setIsSending(false);
        }
    };
    const handleClose = async ()=>{
        const hasContent = to.length > 0 || subject.trim() || body.trim();
        if (hasContent && !isSending) {
            try {
                const email = targetEmail || (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || "";
                const toString = to.join(', ');
                const ccString = cc.join(', ');
                const bccString = bcc.join(', ');
                const activeUid = draftUid || Date.now();
                const draftObj = {
                    uid: activeUid,
                    from: email,
                    to: toString,
                    subject: subject || '(No Subject)',
                    bodyText: body,
                    bodyHtml: body,
                    date: new Date().toISOString(),
                    isRead: true,
                    isStarred: false,
                    folder: 'Drafts',
                    status: 'Draft'
                };
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].saveDraft(email, password, toString, ccString, bccString, subject, body, body, draftUid);
                if (res.success) {
                    var _res_data;
                    if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.emailId) {
                        setDraftUid(res.data.emailId);
                        draftObj.uid = res.data.emailId;
                    }
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Draft saved");
                    if (onDraftSaved) onDraftSaved(draftObj);
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to save draft: " + (res.message || "Server error"));
                }
            } catch (err) {
                console.error("Draft save error:", err);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to save draft: " + (err.message || "Network error"));
            }
        }
        setIsComposing(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isNative ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 pt-[calc(0.6rem+env(safe-area-inset-top,0px))] pb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-b-[24px] shadow-md shrink-0 sticky top-0 z-40 select-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClose,
                        className: "w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all active:scale-95 shadow-xs cursor-pointer",
                        title: "Close",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                            lineNumber: 450,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailCompose.tsx",
                        lineNumber: 445,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-base font-extrabold text-white flex items-center gap-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "New Message"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                            lineNumber: 453,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailCompose.tsx",
                        lineNumber: 452,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSend,
                        disabled: isSending || to.length === 0,
                        className: `bg-white text-indigo-600 hover:bg-indigo-50 font-bold px-4 py-1.5 rounded-full text-xs transition-all shadow-sm flex items-center gap-1.5 active:scale-95 cursor-pointer ${isSending || to.length === 0 ? "opacity-60 cursor-not-allowed" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isSending ? "Sending..." : "Send"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                lineNumber: 461,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                size: 13
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                lineNumber: 462,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/MailCompose.tsx",
                        lineNumber: 455,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/MailCompose.tsx",
                lineNumber: 444,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 px-4 py-3 bg-[#f0f2f5] dark:bg-[#1a1c20] border-b border-[#d1d7db] dark:border-[#2d3139] shrink-0 h-[60px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleClose,
                        className: "p-1.5 rounded-full hover:bg-[#d9dbdf] dark:bg-[#2d3139] dark:hover:bg-[#2d3139] text-[#54656f] dark:text-[#a0abb2] transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                            lineNumber: 468,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailCompose.tsx",
                        lineNumber: 467,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[17px] font-semibold text-[#1c1e21] dark:text-[#f0f2f5]",
                        children: "New Message"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailCompose.tsx",
                        lineNumber: 470,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/MailCompose.tsx",
                lineNumber: 466,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto bg-white dark:bg-[#111827] flex flex-col",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex-1 flex flex-col mx-auto w-full ${isNative ? "px-4 py-4" : "px-8 py-6 max-w-4xl"}`,
                    children: [
                        sharedMailboxes.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center border-b border-[#e9edef] dark:border-[#2d3139] py-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#54656f] dark:text-[#a0abb2] text-[15px] w-16",
                                    children: "From"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                    lineNumber: 480,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: selectedFrom || targetEmail || (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || "",
                                    onChange: (e)=>setSelectedFrom(e.target.value),
                                    className: "flex-1 bg-transparent text-[14px] font-semibold text-slate-800 dark:text-slate-100 outline-none cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || "",
                                            children: [
                                                (user === null || user === void 0 ? void 0 : user.full_name) ? `${user.full_name} <${(user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email)}>` : (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email),
                                                " (Personal)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                            lineNumber: 486,
                                            columnNumber: 17
                                        }, this),
                                        sharedMailboxes.map((sm)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: sm.address,
                                                children: [
                                                    sm.name,
                                                    " <",
                                                    sm.address,
                                                    "> (Shared Inbox)"
                                                ]
                                            }, sm.address, true, {
                                                fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                                lineNumber: 490,
                                                columnNumber: 19
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                    lineNumber: 481,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                            lineNumber: 479,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start border-b border-[#e9edef] dark:border-[#2d3139] py-3 min-h-[50px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#54656f] dark:text-[#a0abb2] text-[15px] w-16 mt-1",
                                    children: "To"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                    lineNumber: 499,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailTagInput, {
                                    emails: to,
                                    setEmails: setTo,
                                    placeholder: "Recipient email",
                                    suggestions: suggestions,
                                    onInputChange: setToInput
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                    lineNumber: 500,
                                    columnNumber: 13
                                }, this),
                                !showCcBcc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCcBcc(true),
                                    className: "text-[#4338ca] text-[13px] font-medium hover:underline ml-2 mt-1 shrink-0",
                                    children: "Cc/Bcc"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                    lineNumber: 508,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                            lineNumber: 498,
                            columnNumber: 11
                        }, this),
                        showCcBcc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start border-b border-[#e9edef] dark:border-[#2d3139] py-3 min-h-[50px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#54656f] dark:text-[#a0abb2] text-[15px] w-16 mt-1",
                                            children: "Cc"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                            lineNumber: 519,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailTagInput, {
                                            emails: cc,
                                            setEmails: setCc,
                                            placeholder: "Cc recipients",
                                            suggestions: suggestions,
                                            onInputChange: setCcInput
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                            lineNumber: 520,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                    lineNumber: 518,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start border-b border-[#e9edef] dark:border-[#2d3139] py-3 min-h-[50px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#54656f] dark:text-[#a0abb2] text-[15px] w-16 mt-1",
                                            children: "Bcc"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                            lineNumber: 523,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EmailTagInput, {
                                            emails: bcc,
                                            setEmails: setBcc,
                                            placeholder: "Bcc recipients",
                                            suggestions: suggestions,
                                            onInputChange: setBccInput
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                            lineNumber: 524,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                    lineNumber: 522,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center border-b border-[#e9edef] dark:border-[#2d3139] py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#54656f] dark:text-[#a0abb2] text-[15px] w-16",
                                    children: "Subject"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                    lineNumber: 530,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: subject,
                                    onChange: (e)=>setSubject(e.target.value),
                                    placeholder: "Subject",
                                    className: "flex-1 outline-none text-[15px] text-[#111b21] dark:text-[#f0f2f5] bg-transparent placeholder:text-[#8696a0]"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                    lineNumber: 531,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                            lineNumber: 529,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 py-4 flex flex-col relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: body,
                                    onChange: (e)=>setBody(e.target.value),
                                    placeholder: "Write your message here...",
                                    className: "flex-1 outline-none text-[15px] text-[#111b21] dark:text-[#f0f2f5] bg-transparent placeholder:text-[#8696a0] resize-none pb-4 min-h-[160px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                    lineNumber: 540,
                                    columnNumber: 13
                                }, this),
                                defaultSignature && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 pt-3 border-t border-[#e9edef] dark:border-[#2d3139] text-[13px] text-[#54656f] dark:text-[#a0abb2]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-1",
                                            children: "--"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                            lineNumber: 550,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "[&_*]:!font-sans [&_*]:!text-[13px] [&_*]:!bg-transparent [&_span]:!bg-transparent [&_p]:!bg-transparent",
                                            dangerouslySetInnerHTML: {
                                                __html: defaultSignature
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                            lineNumber: 551,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                    lineNumber: 547,
                                    columnNumber: 15
                                }, this),
                                attachments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 pt-3 border-t border-[#e9edef] dark:border-[#2d3139] flex flex-wrap gap-2",
                                    children: attachments.map((file, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 bg-[#f0f2f5] dark:bg-[#2d3139] px-3 py-1.5 rounded-lg border border-[#d1d7db] dark:border-[#404650] text-[13px] text-[#111b21] dark:text-[#f0f2f5] max-w-[280px] shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File01Icon"], {
                                                    size: 16,
                                                    className: "text-[#4338ca] dark:text-[#818cf8] shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                                    lineNumber: 563,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col min-w-0 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate font-medium text-[12px]",
                                                            children: file.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                                            lineNumber: 565,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-[#54656f] dark:text-[#a0abb2]",
                                                            children: formatFileSize(file.size)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                                            lineNumber: 566,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                                    lineNumber: 564,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>removeAttachment(idx),
                                                    className: "p-1 hover:bg-[#d9dbdf] dark:hover:bg-[#404650] rounded-full text-[#8696a0] hover:text-[#dc2626] dark:hover:text-[#f87171] transition-colors shrink-0",
                                                    title: "Remove attachment",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                                        lineNumber: 574,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, `${file.name}-${idx}`, true, {
                                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                            lineNumber: 559,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                    lineNumber: 557,
                                    columnNumber: 15
                                }, this),
                                Boolean((body === null || body === void 0 ? void 0 : body.trim()) && (to.length > 0 || toInput.trim())) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$RecipientRiskBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecipientRiskBadge"], {
                                    recipients: to,
                                    currentInput: toInput,
                                    sender: selectedFrom || targetEmail || (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || "",
                                    subject: subject,
                                    body: body
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                    lineNumber: 583,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                            lineNumber: 539,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/MailCompose.tsx",
                    lineNumber: 476,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/MailCompose.tsx",
                lineNumber: 475,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `px-4 sm:px-8 py-3.5 bg-[#f0f2f5] dark:bg-[#1a1c20] border-t border-[#d1d7db] dark:border-[#2d3139] shrink-0 flex items-center justify-between ${isNative ? "pb-[calc(0.8rem+env(safe-area-inset-bottom,0px))]" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2 items-center text-[#54656f] dark:text-[#a0abb2]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                ref: fileInputRef,
                                onChange: handleFileSelect,
                                multiple: true,
                                className: "hidden"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                lineNumber: 598,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    var _fileInputRef_current;
                                    return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                                },
                                title: "Attach files",
                                className: "p-2 hover:bg-[#d9dbdf] dark:bg-[#2d3139] dark:hover:bg-[#2d3139] rounded-full transition-colors relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Attachment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Attachment01Icon"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                        lineNumber: 611,
                                        columnNumber: 13
                                    }, this),
                                    attachments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-1 -right-1 bg-[#4338ca] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold",
                                        children: attachments.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                        lineNumber: 613,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                lineNumber: 605,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: emojiPickerRef,
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        title: "Emoji",
                                        onClick: ()=>setShowEmojiPicker((prev)=>!prev),
                                        className: "p-2 hover:bg-[#d9dbdf] dark:bg-[#2d3139] dark:hover:bg-[#2d3139] rounded-full transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$HappyIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HappyIcon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                            lineNumber: 625,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                        lineNumber: 619,
                                        columnNumber: 13
                                    }, this),
                                    showEmojiPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-12 left-0 z-50 shadow-2xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            onEmojiClick: (emojiData)=>{
                                                setBody((prev)=>prev + (emojiData.emoji || ""));
                                                setShowEmojiPicker(false);
                                            },
                                            searchDisabled: false,
                                            lazyLoadEmojis: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                            lineNumber: 629,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                        lineNumber: 628,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                lineNumber: 618,
                                columnNumber: 11
                            }, this),
                            attachments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-[#54656f] dark:text-[#a0abb2] ml-1",
                                children: [
                                    attachments.length,
                                    " file",
                                    attachments.length > 1 ? "s" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                lineNumber: 641,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/MailCompose.tsx",
                        lineNumber: 597,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSend,
                        disabled: isSending || to.length === 0,
                        className: `bg-[#4338ca] hover:bg-[#6d28d9] text-white px-7 py-2.5 rounded-full font-bold text-xs transition-all shadow-md flex items-center gap-2 active:scale-95 ${isSending || to.length === 0 ? "opacity-70 cursor-not-allowed" : ""}`,
                        children: [
                            isSending ? "Sending..." : "Send",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailCompose.tsx",
                                lineNumber: 651,
                                columnNumber: 47
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/MailCompose.tsx",
                        lineNumber: 646,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/MailCompose.tsx",
                lineNumber: 596,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(MailCompose, "FOqV10eykYPxEr5eH0Pb1ZPAEoM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c1 = MailCompose;
var _c, _c1;
__turbopack_context__.k.register(_c, "EmailTagInput");
__turbopack_context__.k.register(_c1, "MailCompose");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/mail/DomainBillingModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DomainBillingModal",
    ()=>DomainBillingModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$domainBillingApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/domainBillingApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.mjs [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.mjs [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
;
var _s = __turbopack_context__.k.signature();
'use strict';
;
;
;
;
function DomainBillingModal({ isOpen, onClose, domain, currentStatus = 'active', onRenewSuccess }) {
    _s();
    const [billingCycle, setBillingCycle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('monthly');
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!isOpen) return null;
    const isSuspended = currentStatus === 'suspended';
    const isGrace = currentStatus === 'past_due';
    const handleRenew = async ()=>{
        setIsProcessing(true);
        try {
            // 1. Create checkout order
            const orderRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$domainBillingApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domainBillingApi"].createCheckoutOrder(domain, {
                billingCycle
            });
            if (!orderRes.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(orderRes.message || 'Failed to initialize payment.');
                setIsProcessing(false);
                return;
            }
            // 2. Mock payment / simulation or razorpay flow
            const mockPaymentId = `pay_mock_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
            const renewRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$domainBillingApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domainBillingApi"].renewSubscription(domain, {
                orderId: orderRes.orderId,
                paymentId: mockPaymentId,
                billingCycle
            });
            if (renewRes.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(renewRes.message || 'Domain subscription renewed successfully!');
                if (onRenewSuccess) onRenewSuccess();
                onClose();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(renewRes.message || 'Renewal verification failed.');
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || 'An error occurred during renewal.');
        } finally{
            setIsProcessing(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-lg bg-white dark:bg-[#1a2234] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 text-white flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                        className: "w-5 h-5 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-bold",
                                            children: "Domain Email Subscription"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-blue-100",
                                            children: [
                                                "Managing billing for @",
                                                domain
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-4",
                    children: [
                        isSuspended ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                    className: "w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-bold text-red-900 dark:text-red-200",
                                            children: "Email Services Suspended"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-red-700 dark:text-red-300 mt-1",
                                            children: "Your domain's grace period has expired. SMTP sending and mailbox access are currently paused. Renew your subscription below to immediately restore full access for all organization mailboxes."
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                            lineNumber: 102,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this) : isGrace ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-bold text-amber-900 dark:text-amber-200",
                                            children: "Payment Overdue (Grace Period)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-amber-700 dark:text-amber-300 mt-1",
                                            children: "Your domain email plan is past due. Services remain active during the 15-day grace period, after which services will be suspended."
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-sm font-bold text-emerald-900 dark:text-emerald-200",
                                            children: "Subscription Active"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-emerald-700 dark:text-emerald-300 mt-1",
                                            children: "Your custom domain email services are active and running normally. You can extend your plan at any time."
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2",
                                    children: "Select Renewal Cycle"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setBillingCycle('monthly'),
                                            className: `p-4 rounded-xl border text-left transition-all cursor-pointer ${billingCycle === 'monthly' ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30 ring-2 ring-indigo-600/20' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-bold text-slate-800 dark:text-white",
                                                            children: "Monthly"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-semibold text-indigo-600 bg-indigo-100 dark:bg-indigo-900/50 px-2 py-0.5 rounded-full",
                                                            children: "Flexible"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-2xl font-black text-slate-900 dark:text-white",
                                                            children: "$29"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-slate-500 dark:text-slate-400",
                                                            children: " / month"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500 dark:text-slate-400 mt-1",
                                                    children: "Billed monthly per domain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setBillingCycle('annual'),
                                            className: `p-4 rounded-xl border text-left transition-all relative cursor-pointer ${billingCycle === 'annual' ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30 ring-2 ring-indigo-600/20' : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute -top-2.5 right-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                            size: 10
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 19
                                                        }, this),
                                                        " 2 Months Free"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-bold text-slate-800 dark:text-white",
                                                            children: "Annual"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-semibold text-emerald-600 bg-emerald-100 dark:bg-emerald-900/50 px-2 py-0.5 rounded-full",
                                                            children: "Best Value"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                                            lineNumber: 173,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-2xl font-black text-slate-900 dark:text-white",
                                                            children: "$290"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                                            lineNumber: 178,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-slate-500 dark:text-slate-400",
                                                            children: " / year"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-500 dark:text-slate-400 mt-1",
                                                    children: "Save $58 compared to monthly"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            size: 14,
                                            className: "text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this),
                                        "Includes Domain-Level Coverage:"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-1 pl-5 text-[11px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: "✓ Unlimited domain mailboxes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: "✓ 10 GB high-speed storage"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                            lineNumber: 194,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: "✓ SMTP sending & IMAP access"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: "✓ SPF, DKIM, DMARC security"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 pt-0 flex items-center justify-end gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onClose,
                            disabled: isProcessing,
                            className: "px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                            lineNumber: 203,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleRenew,
                            disabled: isProcessing,
                            className: "px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md shadow-indigo-500/20 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50",
                            children: isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        size: 14,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                                        lineNumber: 219,
                                        columnNumber: 17
                                    }, this),
                                    "Processing Renewal..."
                                ]
                            }, void 0, true) : isSuspended ? 'Pay & Restore Email Service' : 'Confirm & Renew Plan'
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/modules/mail/DomainBillingModal.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
_s(DomainBillingModal, "YPmGdO3YVHvDEiAA3RqiZbOtGx0=");
_c = DomainBillingModal;
var _c;
__turbopack_context__.k.register(_c, "DomainBillingModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_modules_mail_b5950fc1._.js.map