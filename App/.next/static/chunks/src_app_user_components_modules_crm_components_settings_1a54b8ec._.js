(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocationsTerritoriesSettings",
    ()=>LocationsTerritoriesSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Globe02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/RefreshIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$InformationCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/InformationCircleIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/hooks/useCrmCurrency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LocationsTerritoriesSettings() {
    _s();
    const { currency, currencySymbol, isIndia, autoDetected, detectedCountry, detectedTimezone, setCurrencyMode, formatAmount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrmCurrency"])();
    const handleSelectMode = (mode)=>{
        setCurrencyMode(mode);
        if (mode === "auto") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Currency reset to Auto-Detect (${isIndia ? "India → INR ₹" : "Outside India → USD $"})`);
        } else if (mode === "INR") {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("CRM Base Currency switched to INR (₹)");
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("CRM Base Currency switched to USD ($)");
        }
    };
    const currentSavedMode = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CRM_CURRENCY_STORAGE_KEY"]) || "auto" : "TURBOPACK unreachable";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-[#111827] rounded-[10px] border border-slate-200 dark:border-slate-800 p-6 space-y-6 shadow-xs text-xs select-none animate-in fade-in duration-150",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"], {
                                        size: 18,
                                        className: "text-indigo-600 dark:text-indigo-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Global Geo-Currency & Territories"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400 mt-0.5",
                                children: "Manage operational headquarters, multi-region territory assignments, and base currency normalization"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold text-[11px] shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Active Currency: ",
                                    currency,
                                    " (",
                                    currencySymbol,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 sm:p-5 rounded-[10px] bg-gradient-to-br from-indigo-50/70 via-slate-50 to-white dark:from-indigo-950/30 dark:via-[#161f2e] dark:to-[#111827] border border-indigo-200/80 dark:border-indigo-900/50 space-y-4 shadow-2xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row md:items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                        size: 13,
                                                        className: "text-amber-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Intelligent Geo-Detection Engine"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-300 dark:text-slate-700",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 70,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-bold text-slate-700 dark:text-slate-200",
                                                children: [
                                                    "User Location: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        className: "text-slate-900 dark:text-white",
                                                        children: detectedCountry
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 32
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10.5px] font-mono text-slate-400",
                                                children: [
                                                    "(",
                                                    detectedTimezone,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 74,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-600 dark:text-slate-300 leading-relaxed",
                                        children: [
                                            "PingDart automatically inspects whether your user session is based in ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "India"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 79,
                                                columnNumber: 85
                                            }, this),
                                            " or ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Outside India"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 79,
                                                columnNumber: 111
                                            }, this),
                                            " to normalize deals, pipeline values, and invoices into ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "INR (₹)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 79,
                                                columnNumber: 197
                                            }, this),
                                            " or ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "USD ($)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 79,
                                                columnNumber: 225
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 p-1 rounded-[8px] bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleSelectMode("auto"),
                                        className: `px-3 py-1.5 rounded-[6px] text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${currentSavedMode === "auto" ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                size: 12,
                                                className: currentSavedMode === "auto" ? "animate-spin-slow" : ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 94,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Auto-Detect"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 95,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleSelectMode("INR"),
                                        className: `px-3 py-1.5 rounded-[6px] text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${currentSavedMode === "INR" ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🇮🇳 India (INR ₹)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleSelectMode("USD"),
                                        className: `px-3 py-1.5 rounded-[6px] text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${currentSavedMode === "USD" ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "🌐 Outside India (USD $)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2.5 border-t border-indigo-100/80 dark:border-indigo-900/40 flex items-center justify-between flex-wrap gap-2 text-[11px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-slate-500 dark:text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$InformationCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InformationCircleIcon"], {
                                        size: 14,
                                        className: "text-indigo-500 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: autoDetected ? `System automatically resolved: ${isIndia ? "India → INR (₹)" : "Outside India → USD ($)"}` : `Manual Override active: Using ${currency} (${currencySymbol})`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 font-mono font-bold",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400",
                                        children: "Sample Deal:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-indigo-600 dark:text-indigo-400 bg-white dark:bg-black/30 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-900",
                                        children: formatAmount(250000)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-slate-400",
                                        children: "Closed Rev:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-emerald-600 dark:text-emerald-400 bg-white dark:bg-black/30 px-2 py-0.5 rounded border border-emerald-200 dark:border-emerald-900",
                                        children: formatAmount(1420000)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-xs font-black uppercase tracking-wider text-slate-400 mb-3",
                        children: "Configured Regional Territories & Operational Hubs"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-4 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] border space-y-2 transition-all ${currency === "INR" ? "border-indigo-500/80 dark:border-indigo-500 ring-1 ring-indigo-500/20 shadow-xs" : "border-slate-200 dark:border-slate-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-extrabold uppercase tracking-wider text-slate-400",
                                                children: "Head Office Region"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 162,
                                                columnNumber: 15
                                            }, this),
                                            currency === "INR" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1 text-[9.5px] font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-200 dark:border-emerald-900",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                        size: 10,
                                                        strokeWidth: 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Current Base"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-slate-900 dark:text-white text-sm",
                                        children: "India & South Asia"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-500",
                                        children: "Base Currency: INR (₹) • FY: Apr - Mar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-1 flex items-center justify-between text-[10px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-emerald-600 dark:text-emerald-400 font-bold",
                                                children: isIndia ? "Auto-detected via User Session" : "Operational Regional Hub"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 179,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400 font-semibold",
                                                children: "Taxes: GST (18%)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 182,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-4 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] border space-y-2 transition-all ${currency === "USD" ? "border-indigo-500/80 dark:border-indigo-500 ring-1 ring-indigo-500/20 shadow-xs" : "border-slate-200 dark:border-slate-800"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-extrabold uppercase tracking-wider text-slate-400",
                                                children: "North America Hub"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this),
                                            currency === "USD" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "inline-flex items-center gap-1 text-[9.5px] font-extrabold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.2 rounded border border-emerald-200 dark:border-emerald-900",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                        size: 10,
                                                        strokeWidth: 3
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Current Base"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-slate-900 dark:text-white text-sm",
                                        children: "US & Canada Enterprise"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 205,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-500",
                                        children: "Base Currency: USD ($) • FY: Jan - Dec"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-1 flex items-center justify-between text-[10px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-indigo-600 dark:text-indigo-400 font-bold",
                                                children: !isIndia ? "Auto-detected via User Session" : "Assigned to NA Enterprise Reps"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 212,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400 font-semibold",
                                                children: "Taxes: US Sales Tax"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 215,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-[10px] bg-slate-50 dark:bg-[#161f2e] border border-slate-200 dark:border-slate-800 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] font-extrabold uppercase tracking-wider text-slate-400",
                                            children: "Middle East & GCC"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-slate-900 dark:text-white text-sm",
                                        children: "UAE & Saudi Arabia"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 226,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-500",
                                        children: "Base Currency: AED (د.إ) • FY: Jan - Dec"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-1 flex items-center justify-between text-[10px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono text-purple-600 dark:text-purple-400 font-bold",
                                                children: "Territory Lead Assigned"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-slate-400 font-semibold",
                                                children: "Taxes: VAT (5%)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                                lineNumber: 236,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/crm/components/settings/LocationsTerritoriesSettings.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(LocationsTerritoriesSettings, "X223g8s/cI9Jq+jPRZNciIm6UAg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$hooks$2f$useCrmCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCrmCurrency"]
    ];
});
_c = LocationsTerritoriesSettings;
var _c;
__turbopack_context__.k.register(_c, "LocationsTerritoriesSettings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COMMUNICATIONS_CONFIG_STORAGE_KEY",
    ()=>COMMUNICATIONS_CONFIG_STORAGE_KEY,
    "CommunicationsSettings",
    ()=>CommunicationsSettings,
    "DEFAULT_COMMUNICATIONS_CONFIG",
    ()=>DEFAULT_COMMUNICATIONS_CONFIG
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript) <export api as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mail01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SmartPhone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SmartPhone01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$WhatsappIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/WhatsappIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/RefreshIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Copy01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Copy01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Link01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Link01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SentIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ViewIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ViewOffSlashIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Add01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Comment01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const COMMUNICATIONS_CONFIG_STORAGE_KEY = "crm_communications_config";
const DEFAULT_COMMUNICATIONS_CONFIG = {
    email: {
        provider: "pingdart",
        smtpHost: "mail.pingdart.com",
        smtpPort: 587,
        encryption: "TLS",
        smtpUsername: "notifications@pingdart.com",
        smtpPassword: "••••••••••••••••",
        senderName: "PingDart Technologies",
        senderEmail: "notifications@pingdart.com",
        replyToEmail: "support@pingdart.com",
        enableImapSync: true,
        imapHost: "imap.pingdart.com",
        imapPort: 993,
        trackOpens: true,
        trackClicks: true,
        includeUnsubscribeHeader: true,
        emailSignatureHtml: "Best regards,\nThe PingDart Team\nhttps://pingdart.com"
    },
    whatsapp: {
        provider: "meta",
        phoneNumberId: "109845239103829",
        wabaId: "201948572019483",
        accessToken: "EAAX...pingdart_meta_token",
        senderPhoneNumber: "+91 98765 43210",
        webhookVerifyToken: "pingdart_wa_webhook_verify_2026",
        autoSendInvoices: true,
        autoSendPaymentReceipts: true,
        autoSendWelcomeLead: true,
        autoSendContractLinks: false,
        invoiceTemplateName: "gst_invoice_dispatch_v1",
        paymentTemplateName: "crm_payment_receipt_ack"
    },
    sms: {
        provider: "smslogin",
        username: "",
        authKey: "",
        senderId: "",
        dltEntityId: "",
        msg91Route: "4",
        twilioAccountSid: "",
        twilioFrom: "",
        fast2smsRoute: "q",
        awsAccessKeyId: "",
        awsSecretAccessKey: "",
        awsRegion: "ap-south-1",
        autoSendInvoiceSms: false,
        autoSendPaymentSms: false,
        includeShortPaymentLink: false
    },
    webhooks: {
        webhookUrl: "https://api.pingdart.com/crm/webhooks/v1/dispatch",
        secretToken: "whsec_pingdart_live_sec_9182",
        subscribeInvoiceCreated: true,
        subscribeInvoicePaid: true,
        subscribeDealWon: true,
        subscribeLeadCreated: true,
        subscribeClientCreated: true
    }
};
function CommunicationsSettings() {
    var _waTemplates_find, _waTemplates_find1, _waTemplates_find2, _waTemplates_find3, _waTemplates_find4, _waTemplates_find_buttons, _waTemplates_find5, _smsProviders_find;
    _s();
    const [activeChannel, setActiveChannel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("sms");
    const [config, setConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "CommunicationsSettings.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const saved = localStorage.getItem(COMMUNICATIONS_CONFIG_STORAGE_KEY);
                    if (saved) {
                        const parsed = JSON.parse(saved);
                        return {
                            email: {
                                ...DEFAULT_COMMUNICATIONS_CONFIG.email,
                                ...parsed.email || {}
                            },
                            whatsapp: {
                                ...DEFAULT_COMMUNICATIONS_CONFIG.whatsapp,
                                ...parsed.whatsapp || {}
                            },
                            sms: {
                                ...DEFAULT_COMMUNICATIONS_CONFIG.sms,
                                ...parsed.sms || {}
                            },
                            webhooks: {
                                ...DEFAULT_COMMUNICATIONS_CONFIG.webhooks,
                                ...parsed.webhooks || {}
                            }
                        };
                    }
                } catch (_) {}
            }
            return DEFAULT_COMMUNICATIONS_CONFIG;
        }
    }["CommunicationsSettings.useState"]);
    const [smsCredits, setSmsCredits] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Ready");
    const [showSmtpPassword, setShowSmtpPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showWaToken, setShowWaToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showSmsKey, setShowSmsKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showWebhookSecret, setShowWebhookSecret] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check balance if credentials are provided for smslogin
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommunicationsSettings.useEffect": ()=>{
            let isMounted = true;
            const fetchBalance = {
                "CommunicationsSettings.useEffect.fetchBalance": async ()=>{
                    if (config.sms.provider === "smslogin" && config.sms.username && config.sms.authKey) {
                        try {
                            var _res_data;
                            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].get(`/sms/balance?username=${encodeURIComponent(config.sms.username)}&apiKey=${encodeURIComponent(config.sms.authKey)}`);
                            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.credits) !== undefined && isMounted) {
                                setSmsCredits(String(res.data.credits));
                            }
                        } catch (_) {}
                    }
                }
            }["CommunicationsSettings.useEffect.fetchBalance"];
            fetchBalance();
            return ({
                "CommunicationsSettings.useEffect": ()=>{
                    isMounted = false;
                }
            })["CommunicationsSettings.useEffect"];
        }
    }["CommunicationsSettings.useEffect"], [
        config.sms.provider,
        config.sms.username,
        config.sms.authKey
    ]);
    // WhatsApp Sub-Navigation
    const [waSubTab, setWaSubTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("credentials");
    // WhatsApp Templates State
    const [waTemplates, setWaTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingTemplates, setIsLoadingTemplates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [templateSearch, setTemplateSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isCreateTemplateModalOpen, setIsCreateTemplateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCreatingTemplate, setIsCreatingTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTestSendTemplateModalOpen, setIsTestSendTemplateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [testSendingTemplate, setTestSendingTemplate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [testSendRecipient, setTestSendRecipient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [testSendVars, setTestSendVars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "John Doe",
        company: "Enterprise Corp",
        amount: "₹24,500",
        invoice_id: "INV-2026-089",
        due_date: "28-Oct-2026"
    });
    const [isDispatchingTestSend, setIsDispatchingTestSend] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // New Template Form State
    const [newTemplateForm, setNewTemplateForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        category: "MARKETING",
        language: "en_US",
        headerType: "text",
        headerText: "PingDart Business Update",
        headerMediaUrl: "",
        body: "Hi {{name}},\n\nThank you for choosing {{company}}. We are pleased to provide you with seamless CRM and omnichannel engagement.\n\nLet us know if you need assistance!",
        footer: "Reply STOP to unsubscribe",
        buttons: [
            {
                type: "QUICK_REPLY",
                text: "Contact Support"
            }
        ]
    });
    // Outgoing Live Dispatcher State
    const [outgoingPhone, setOutgoingPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [outgoingMode, setOutgoingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("template");
    const [selectedTemplateId, setSelectedTemplateId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [outgoingFreeText, setOutgoingFreeText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [outgoingVarValues, setOutgoingVarValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "Customer",
        company: "PingDart Technologies",
        amount: "₹15,000",
        invoice_id: "INV-2026-042",
        due_date: "30-Oct-2026"
    });
    const [isSendingLiveWa, setIsSendingLiveWa] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [liveWaResult, setLiveWaResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // WhatsApp Messages & Logs State
    const [waMessages, setWaMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingMessages, setIsLoadingMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [msgFilter, setMsgFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    // Inbound Simulation Form State
    const [simFrom, setSimFrom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("+91 98765 43210");
    const [simSenderName, setSimSenderName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Rajesh Sharma");
    const [simMessage, setSimMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Hi! We are interested in your pricing plan. Can we get a demo?");
    const [isSimulatingInbound, setIsSimulatingInbound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load WhatsApp templates from backend
    const fetchTemplates = async ()=>{
        try {
            var _res_data;
            setIsLoadingTemplates(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].get("/crm/templates?channel=whatsapp");
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && Array.isArray(res.data.templates)) {
                setWaTemplates(res.data.templates);
                if (!selectedTemplateId && res.data.templates.length > 0) {
                    setSelectedTemplateId(res.data.templates[0].id);
                }
            }
        } catch (err) {
            console.error("Failed to load WhatsApp templates:", err);
        } finally{
            setIsLoadingTemplates(false);
        }
    };
    // Load WhatsApp message logs from backend
    const fetchMessages = async ()=>{
        try {
            var _res_data;
            setIsLoadingMessages(true);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].get("/crm/whatsapp/messages");
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && Array.isArray(res.data.messages)) {
                setWaMessages(res.data.messages);
            }
        } catch (err) {
            console.error("Failed to load WhatsApp messages:", err);
        } finally{
            setIsLoadingMessages(false);
        }
    };
    // Fetch when switching to whatsapp channel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommunicationsSettings.useEffect": ()=>{
            if (activeChannel === "whatsapp") {
                fetchTemplates();
                fetchMessages();
            }
        }
    }["CommunicationsSettings.useEffect"], [
        activeChannel
    ]);
    // Create Template Handler
    const handleCreateTemplate = async ()=>{
        const formattedName = newTemplateForm.name.toLowerCase().trim().replace(/[^a-z0-9_]/g, "_");
        if (!formattedName) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid template name (alphanumeric and underscores only)");
            return;
        }
        if (!newTemplateForm.body.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Template message body is required");
            return;
        }
        setIsCreatingTemplate(true);
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post("/crm/templates", {
                name: formattedName,
                channel: "whatsapp",
                category: newTemplateForm.category,
                language: newTemplateForm.language,
                headerType: newTemplateForm.headerType,
                headerText: newTemplateForm.headerText,
                headerMediaUrl: newTemplateForm.headerMediaUrl,
                body: newTemplateForm.body,
                footer: newTemplateForm.footer,
                buttons: newTemplateForm.buttons.filter((b)=>b.text.trim()),
                whatsAppCategory: newTemplateForm.category,
                whatsAppTemplateId: formattedName
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`WhatsApp template "${formattedName}" created successfully!`);
                setIsCreateTemplateModalOpen(false);
                setNewTemplateForm({
                    name: "",
                    category: "MARKETING",
                    language: "en_US",
                    headerType: "text",
                    headerText: "",
                    headerMediaUrl: "",
                    body: "Hi {{name}},\n\nThank you for choosing {{company}}.",
                    footer: "Reply STOP to unsubscribe",
                    buttons: [
                        {
                            type: "QUICK_REPLY",
                            text: "Talk to Sales"
                        }
                    ]
                });
                fetchTemplates();
            } else {
                var _res_data1;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.error) || "Failed to create template");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.error) || err.message || "Failed to create template");
        } finally{
            setIsCreatingTemplate(false);
        }
    };
    // Delete Template Handler
    const handleDeleteTemplate = async (id, name)=>{
        if (!confirm(`Are you sure you want to delete template "${name}"?`)) return;
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].delete(`/crm/templates/${id}`);
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Template "${name}" deleted successfully`);
                setWaTemplates((prev)=>prev.filter((t)=>t.id !== id));
            } else {
                var _res_data1;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.error) || "Failed to delete template");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.error) || err.message || "Failed to delete template");
        }
    };
    // Execute Test Send Template Handler
    const handleExecuteTestSendTemplate = async ()=>{
        if (!testSendingTemplate || !testSendRecipient.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a target recipient phone number");
            return;
        }
        setIsDispatchingTestSend(true);
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post("/crm/templates/test-send", {
                templateId: testSendingTemplate.id,
                recipient: testSendRecipient.trim(),
                customVariables: testSendVars,
                config: config.whatsapp
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Template "${testSendingTemplate.name}" dispatched to ${testSendRecipient}!`);
                setIsTestSendTemplateModalOpen(false);
                fetchMessages();
            } else {
                var _res_data1;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.error) || "Failed to dispatch template test");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.error) || err.message || "Failed to dispatch template test");
        } finally{
            setIsDispatchingTestSend(false);
        }
    };
    // Live Outgoing Message Dispatcher
    const handleSendLiveOutgoing = async ()=>{
        if (!outgoingPhone.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a recipient phone number (with country code, e.g. +91 98765 43210)");
            return;
        }
        const tpl = waTemplates.find((t)=>t.id === selectedTemplateId);
        if (outgoingMode === "template" && !tpl) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select a valid WhatsApp template");
            return;
        }
        if (outgoingMode === "text" && !outgoingFreeText.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a message text");
            return;
        }
        setIsSendingLiveWa(true);
        setLiveWaResult(null);
        try {
            var _res_data;
            let bodyToSend = outgoingFreeText.trim();
            if (outgoingMode === "template" && tpl) {
                bodyToSend = tpl.body;
                for (const [k, v] of Object.entries(outgoingVarValues)){
                    const reg = new RegExp(`\\{\\{\\s*${k}\\s*\\}\\}|\\{#${k}#\\}`, "gi");
                    bodyToSend = bodyToSend.replace(reg, String(v));
                }
            }
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post("/crm/communications/send-whatsapp", {
                to: outgoingPhone.trim(),
                message: bodyToSend,
                type: outgoingMode,
                templateName: outgoingMode === "template" ? (tpl === null || tpl === void 0 ? void 0 : tpl.whatsAppTemplateId) || (tpl === null || tpl === void 0 ? void 0 : tpl.name) : undefined,
                templateLanguage: (tpl === null || tpl === void 0 ? void 0 : tpl.language) || "en_US",
                templateParams: Object.values(outgoingVarValues),
                config: config.whatsapp
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`WhatsApp message successfully sent to ${outgoingPhone}!`);
                setLiveWaResult(res.data.result || res.data);
                fetchMessages();
            } else {
                var _res_data1;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.error) || "Failed to send WhatsApp message");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.error) || err.message || "Failed to send WhatsApp message");
        } finally{
            setIsSendingLiveWa(false);
        }
    };
    // Inbound Simulation Handler
    const handleSimulateInbound = async ()=>{
        if (!simFrom.trim() || !simMessage.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Sender phone and incoming message body are required");
            return;
        }
        setIsSimulatingInbound(true);
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post("/crm/whatsapp/simulate-incoming", {
                from: simFrom.trim(),
                senderName: simSenderName.trim() || "Simulated Lead",
                message: simMessage.trim()
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Inbound message simulated from ${simFrom}! CRM intent processed.`);
                fetchMessages();
                setWaSubTab("inbox");
            } else {
                var _res_data1;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.error) || "Inbound simulation failed");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.error) || err.message || "Inbound simulation failed");
        } finally{
            setIsSimulatingInbound(false);
        }
    };
    // Test Modals State
    const [testModalChannel, setTestModalChannel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [testRecipient, setTestRecipient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [testMessage, setTestMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("PingDart CRM: Test notification dispatched successfully.");
    const [isSendingTest, setIsSendingTest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSave = async ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                localStorage.setItem(COMMUNICATIONS_CONFIG_STORAGE_KEY, JSON.stringify(config));
            } catch (err) {
                console.error("Failed to persist communications configuration:", err);
            }
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post("/sms/config", {
                provider: config.sms.provider,
                username: config.sms.username,
                senderId: config.sms.senderId,
                apiKey: config.sms.authKey,
                config: config.sms
            });
        } catch (_) {
        // Non-blocking
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Gateways configuration saved successfully!");
    };
    const handleResetDefaults = ()=>{
        setConfig(DEFAULT_COMMUNICATIONS_CONFIG);
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                localStorage.setItem(COMMUNICATIONS_CONFIG_STORAGE_KEY, JSON.stringify(DEFAULT_COMMUNICATIONS_CONFIG));
            } catch (_) {}
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Reset to empty gateway configuration.");
    };
    const copyToClipboard = (text, label)=>{
        navigator.clipboard.writeText(text);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`${label} copied to clipboard!`);
    };
    const handleTriggerTest = (channel)=>{
        setTestModalChannel(channel);
        if (channel === "email") {
            setTestRecipient(config.email.senderEmail || "");
        } else if (channel === "whatsapp") {
            setTestRecipient(config.whatsapp.senderPhoneNumber || "");
            setTestMessage("PingDart CRM: Test WhatsApp notification dispatched successfully.");
        } else {
            setTestRecipient("");
            setTestMessage("PingDart CRM: Test SMS notification dispatched successfully.");
        }
    };
    const executeSendTest = async ()=>{
        if (!testRecipient || !testRecipient.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please provide a valid recipient.");
            return;
        }
        setIsSendingTest(true);
        if (testModalChannel === "sms") {
            try {
                var _res_data;
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post("/sms/send", {
                    to: testRecipient.trim(),
                    message: testMessage.trim() || "PingDart CRM: Test SMS notification dispatched successfully.",
                    provider: config.sms.provider,
                    config: config.sms
                });
                if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Test SMS dispatched via ${config.sms.provider}! Ref: ${res.data.campId || res.data.messageId || "Delivered"}`);
                    setTestModalChannel(null);
                } else {
                    var _res_data1, _res_data2;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`SMS Gateway Response: ${((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.error) || ((_res_data2 = res.data) === null || _res_data2 === void 0 ? void 0 : _res_data2.raw) || "Failed to dispatch SMS"}`);
                }
            } catch (err) {
                var _err_response_data, _err_response, _err_response_data1, _err_response1;
                console.error("Test SMS dispatch error:", err);
                const errMsg = ((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.error) || ((_err_response1 = err.response) === null || _err_response1 === void 0 ? void 0 : (_err_response_data1 = _err_response1.data) === null || _err_response_data1 === void 0 ? void 0 : _err_response_data1.message) || err.message || "Failed to dispatch SMS";
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`SMS Gateway Error: ${errMsg}`);
            } finally{
                setIsSendingTest(false);
            }
            return;
        }
        if (testModalChannel === "whatsapp") {
            try {
                var _res_data3;
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__api__as__default$3e$__["default"].post("/crm/communications/send-whatsapp", {
                    to: testRecipient.trim(),
                    message: testMessage.trim() || "PingDart CRM: Test WhatsApp notification dispatched successfully.",
                    type: "text",
                    config: config.whatsapp
                });
                if ((_res_data3 = res.data) === null || _res_data3 === void 0 ? void 0 : _res_data3.success) {
                    var _res_data_result;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`WhatsApp message dispatched! Ref: ${((_res_data_result = res.data.result) === null || _res_data_result === void 0 ? void 0 : _res_data_result.messageId) || "Delivered"}`);
                    setTestModalChannel(null);
                    fetchMessages();
                } else {
                    var _res_data4;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_res_data4 = res.data) === null || _res_data4 === void 0 ? void 0 : _res_data4.error) || "Failed to dispatch WhatsApp message");
                }
            } catch (err) {
                var _err_response_data2, _err_response2;
                const errMsg = ((_err_response2 = err.response) === null || _err_response2 === void 0 ? void 0 : (_err_response_data2 = _err_response2.data) === null || _err_response_data2 === void 0 ? void 0 : _err_response_data2.error) || err.message || "Failed to dispatch WhatsApp message";
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`WhatsApp Gateway Error: ${errMsg}`);
            } finally{
                setIsSendingTest(false);
            }
            return;
        }
        setTimeout(()=>{
            setIsSendingTest(false);
            setTestModalChannel(null);
            if (testModalChannel === "email") {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Test email dispatched to ${testRecipient}!`);
            }
        }, 1000);
    };
    const emailProviders = [
        {
            id: "pingdart",
            name: "PingDart Mail",
            host: "mail.pingdart.com",
            port: 587
        },
        {
            id: "smtp",
            name: "Custom SMTP",
            host: "",
            port: 587
        },
        {
            id: "sendgrid",
            name: "SendGrid",
            host: "smtp.sendgrid.net",
            port: 587
        },
        {
            id: "ses",
            name: "Amazon SES",
            host: "email-smtp.us-east-1.amazonaws.com",
            port: 587
        },
        {
            id: "google",
            name: "Google Workspace",
            host: "smtp.gmail.com",
            port: 587
        },
        {
            id: "microsoft",
            name: "Microsoft 365",
            host: "smtp.office365.com",
            port: 587
        }
    ];
    const smsProviders = [
        {
            id: "smslogin",
            name: "smslogin.co (ivaclt)"
        },
        {
            id: "msg91",
            name: "MSG91 (India DLT)"
        },
        {
            id: "twilio",
            name: "Twilio SMS"
        },
        {
            id: "fast2sms",
            name: "Fast2SMS"
        },
        {
            id: "aws_sns",
            name: "AWS SNS"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white dark:bg-[#111827] rounded-[10px] border border-slate-200/80 dark:border-slate-800 shadow-xs text-xs animate-in fade-in duration-150 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-4 border-b border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-slate-900 dark:text-white",
                                        children: "Gateways & Communications"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 670,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40 flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                size: 11
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 674,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Active"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 675,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 673,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 669,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-500 dark:text-slate-400 mt-0.5",
                                children: "Configure delivery relays for emails, WhatsApp business messages, DLT SMS, and webhook dispatches."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 678,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                        lineNumber: 668,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleResetDefaults,
                                className: "h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium text-xs transition cursor-pointer",
                                children: "Reset"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 684,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleSave,
                                className: "h-10 px-3.5 rounded-[10px] bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs shadow-xs transition flex items-center gap-1.5 active:scale-95 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 696,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Save Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 697,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 691,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                        lineNumber: 683,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                lineNumber: 667,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 pt-4 pb-1 border-b border-slate-100 dark:border-slate-800/60",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1 p-1 bg-slate-100/70 dark:bg-slate-900/60 rounded-[50px] w-fit border border-slate-200/60 dark:border-slate-800",
                    children: [
                        {
                            id: "email",
                            label: "Email (SMTP / IMAP)",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mail01Icon"]
                        },
                        {
                            id: "whatsapp",
                            label: "WhatsApp Cloud API",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$WhatsappIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsappIcon"]
                        },
                        {
                            id: "sms",
                            label: "SMS Gateway (DLT)",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SmartPhone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartPhone01Icon"]
                        },
                        {
                            id: "webhooks",
                            label: "Webhooks",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Link01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link01Icon"]
                        }
                    ].map((tab)=>{
                        const Icon = tab.icon;
                        const isActive = activeChannel === tab.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setActiveChannel(tab.id),
                            className: `h-10 px-3.5 rounded-[50px] text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${isActive ? "bg-white dark:bg-[#111827] text-slate-900 dark:text-white shadow-xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    size: 14,
                                    className: isActive ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 723,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: tab.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 724,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, tab.id, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                            lineNumber: 714,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                    lineNumber: 704,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                lineNumber: 703,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 space-y-6",
                children: [
                    activeChannel === "email" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 animate-in fade-in duration-150",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider",
                                                        children: "Service Provider"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 740,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-slate-400",
                                                        children: "Select an email relay provider preset or configure custom SMTP"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 743,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 739,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleTriggerTest("email"),
                                                className: "h-10 px-3 rounded-[10px] bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 border border-indigo-200/80 dark:border-indigo-800/80 font-semibold text-xs flex items-center gap-1.5 transition cursor-pointer active:scale-95",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                                        size: 13
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 750,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Send Test Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 751,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 745,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 738,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-6 gap-2",
                                        children: emailProviders.map((p)=>{
                                            const isSelected = config.email.provider === p.id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setConfig((prev)=>({
                                                            ...prev,
                                                            email: {
                                                                ...prev.email,
                                                                provider: p.id,
                                                                smtpHost: p.host || prev.email.smtpHost,
                                                                smtpPort: p.port || prev.email.smtpPort
                                                            }
                                                        })),
                                                className: `h-10 px-3 rounded-[10px] border text-xs font-semibold flex items-center justify-center transition cursor-pointer ${isSelected ? "border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 ring-1 ring-indigo-600 shadow-2xs" : "border-slate-200 dark:border-slate-700/80 bg-white dark:bg-[#0b1222] text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: p.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 778,
                                                    columnNumber: 23
                                                }, this)
                                            }, p.id, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 759,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 755,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 737,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4 border-t border-slate-100 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3",
                                        children: "SMTP Connection Credentials"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 787,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-4 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "SMTP Host ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 794,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 793,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: config.email.smtpHost,
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    email: {
                                                                        ...prev.email,
                                                                        smtpHost: e.target.value
                                                                    }
                                                                })),
                                                        placeholder: "mail.pingdart.com",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 796,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 792,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "Port ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 809,
                                                                columnNumber: 26
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 808,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: config.email.smtpPort,
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    email: {
                                                                        ...prev.email,
                                                                        smtpPort: Number(e.target.value)
                                                                    }
                                                                })),
                                                        placeholder: "587",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 811,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 807,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Encryption"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 823,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: config.email.encryption,
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    email: {
                                                                        ...prev.email,
                                                                        encryption: e.target.value
                                                                    }
                                                                })),
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-medium text-xs cursor-pointer focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-hidden transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "TLS",
                                                                children: "TLS (Port 587)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 834,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "SSL",
                                                                children: "SSL (Port 465)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 835,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "NONE",
                                                                children: "None (Port 25)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 836,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 824,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 822,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "SMTP Username / API Key ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 842,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 841,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: config.email.smtpUsername,
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    email: {
                                                                        ...prev.email,
                                                                        smtpUsername: e.target.value
                                                                    }
                                                                })),
                                                        placeholder: "notifications@pingdart.com",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 840,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "SMTP Password / Secret ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 857,
                                                                columnNumber: 44
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: showSmtpPassword ? "text" : "password",
                                                                value: config.email.smtpPassword,
                                                                onChange: (e)=>setConfig((prev)=>({
                                                                            ...prev,
                                                                            email: {
                                                                                ...prev.email,
                                                                                smtpPassword: e.target.value
                                                                            }
                                                                        })),
                                                                placeholder: "••••••••••••••••",
                                                                className: "w-full h-10 pl-3 pr-9 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-hidden transition"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 860,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setShowSmtpPassword(!showSmtpPassword),
                                                                className: "absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",
                                                                children: showSmtpPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewOffSlashIcon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 874,
                                                                    columnNumber: 43
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 874,
                                                                    columnNumber: 76
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 869,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 859,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 855,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 791,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 786,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4 border-t border-slate-100 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3",
                                        children: "Sender Identity & Routing"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 883,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "Display Name ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 890,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 889,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: config.email.senderName,
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    email: {
                                                                        ...prev.email,
                                                                        senderName: e.target.value
                                                                    }
                                                                })),
                                                        placeholder: "PingDart Technologies",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 892,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 888,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "From Email ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 905,
                                                                columnNumber: 32
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 904,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        value: config.email.senderEmail,
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    email: {
                                                                        ...prev.email,
                                                                        senderEmail: e.target.value
                                                                    }
                                                                })),
                                                        placeholder: "notifications@pingdart.com",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 907,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 903,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Reply-To Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 919,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        value: config.email.replyToEmail,
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    email: {
                                                                        ...prev.email,
                                                                        replyToEmail: e.target.value
                                                                    }
                                                                })),
                                                        placeholder: "support@pingdart.com",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 920,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 918,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 887,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 882,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4 border-t border-slate-100 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3",
                                        children: "Tracking & Synchronization"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 935,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-3",
                                        children: [
                                            {
                                                key: "trackOpens",
                                                title: "Email Open Pixel Tracking",
                                                desc: "Log read receipts on outgoing invoices & quotes"
                                            },
                                            {
                                                key: "trackClicks",
                                                title: "Link Click Tracking",
                                                desc: "Monitor engagement on proposal and payment links"
                                            },
                                            {
                                                key: "enableImapSync",
                                                title: "Two-Way IMAP Sync",
                                                desc: "Sync incoming replies into client timeline"
                                            }
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "p-3 rounded-[10px] border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex items-start justify-between gap-2.5 cursor-pointer hover:border-slate-300 dark:hover:border-slate-700 transition",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-slate-900 dark:text-white text-xs block",
                                                                children: item.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 962,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[11px] text-slate-400 mt-0.5",
                                                                children: item.desc
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 963,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 961,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: config.email[item.key],
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    email: {
                                                                        ...prev.email,
                                                                        [item.key]: e.target.checked
                                                                    }
                                                                })),
                                                        className: "w-4 h-4 rounded text-indigo-600 mt-0.5 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 965,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item.key, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 957,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 939,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 934,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                        lineNumber: 735,
                        columnNumber: 11
                    }, this),
                    activeChannel === "whatsapp" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 animate-in fade-in duration-150",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider",
                                                        children: "Meta WhatsApp Business Platform"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 990,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40 flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                                size: 11
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 994,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Cloud API v21.0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 995,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 993,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 989,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400 mt-0.5",
                                                children: "Unified WhatsApp Hub: credentials, outgoing live composer, template studio, and inbound webhook messages."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 998,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 988,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-[50px] border border-slate-200/60 dark:border-slate-800",
                                        children: [
                                            {
                                                id: "credentials",
                                                label: "Credentials & Webhook",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Link01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link01Icon"]
                                            },
                                            {
                                                id: "outgoing",
                                                label: "Outgoing Dispatcher",
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"]
                                            },
                                            {
                                                id: "templates",
                                                label: `Templates (${waTemplates.length})`,
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Comment01Icon"]
                                            },
                                            {
                                                id: "inbox",
                                                label: `Messages (${waMessages.length})`,
                                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$WhatsappIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsappIcon"]
                                            }
                                        ].map((st)=>{
                                            const Icon = st.icon;
                                            const isCurrent = waSubTab === st.id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setWaSubTab(st.id),
                                                className: `h-8 px-2.5 rounded-[50px] text-[11px] font-semibold flex items-center gap-1.5 transition cursor-pointer ${isCurrent ? "bg-white dark:bg-[#111827] text-emerald-600 dark:text-emerald-400 shadow-xs" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        size: 13,
                                                        className: isCurrent ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1023,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: st.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1024,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, st.id, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1014,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1004,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 987,
                                columnNumber: 13
                            }, this),
                            waSubTab === "credentials" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 animate-in fade-in duration-150",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider",
                                                children: "Meta Developer Credentials"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1035,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleTriggerTest("whatsapp"),
                                                className: "h-9 px-3 rounded-[5px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200/80 dark:border-emerald-800/80 font-semibold text-xs flex items-center gap-1.5 transition cursor-pointer active:scale-95",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$WhatsappIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsappIcon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1043,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Quick Test Send"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1044,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1038,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1034,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "Phone Number ID ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1051,
                                                                columnNumber: 39
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1050,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: config.whatsapp.phoneNumberId,
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    whatsapp: {
                                                                        ...prev.whatsapp,
                                                                        phoneNumberId: e.target.value
                                                                    }
                                                                })),
                                                        placeholder: "109845239103829",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1053,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1049,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "WABA ID (WhatsApp Business Account) ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1069,
                                                                columnNumber: 59
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1068,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: config.whatsapp.wabaId,
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    whatsapp: {
                                                                        ...prev.whatsapp,
                                                                        wabaId: e.target.value
                                                                    }
                                                                })),
                                                        placeholder: "201948572019483",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1071,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1067,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "Sender Phone Number ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1087,
                                                                columnNumber: 43
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1086,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: config.whatsapp.senderPhoneNumber,
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    whatsapp: {
                                                                        ...prev.whatsapp,
                                                                        senderPhoneNumber: e.target.value
                                                                    }
                                                                })),
                                                        placeholder: "+91 98765 43210",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1089,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1085,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Webhook Verify Token"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1104,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: config.whatsapp.webhookVerifyToken,
                                                                onChange: (e)=>setConfig((prev)=>({
                                                                            ...prev,
                                                                            whatsapp: {
                                                                                ...prev.whatsapp,
                                                                                webhookVerifyToken: e.target.value
                                                                            }
                                                                        })),
                                                                className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-hidden transition"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1108,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>copyToClipboard(config.whatsapp.webhookVerifyToken, "Verification Token"),
                                                                className: "h-10 px-2.5 rounded-[10px] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 flex items-center justify-center shrink-0 cursor-pointer",
                                                                title: "Copy Verify Token",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Copy01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Copy01Icon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1125,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1119,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1107,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1103,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "System User Permanent Access Token ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1132,
                                                                columnNumber: 58
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1131,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: showWaToken ? "text" : "password",
                                                                value: config.whatsapp.accessToken,
                                                                onChange: (e)=>setConfig((prev)=>({
                                                                            ...prev,
                                                                            whatsapp: {
                                                                                ...prev.whatsapp,
                                                                                accessToken: e.target.value
                                                                            }
                                                                        })),
                                                                placeholder: "EAAX... Bearer Token",
                                                                className: "w-full h-10 pl-3 pr-9 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-hidden transition"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1135,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setShowWaToken(!showWaToken),
                                                                className: "absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer",
                                                                children: showWaToken ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewOffSlashIcon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1152,
                                                                    columnNumber: 40
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1152,
                                                                    columnNumber: 73
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1147,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1134,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1130,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1048,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl border border-emerald-200/70 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs",
                                                                children: "⚡"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1162,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                        className: "font-bold text-xs text-slate-900 dark:text-white",
                                                                        children: "Meta Webhook Callback URL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1166,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] text-slate-500 dark:text-slate-400",
                                                                        children: "Configure this URL in Meta Business App Dashboard to receive real-time incoming WhatsApp messages and delivery receipts."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1169,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1165,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1161,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-900/60",
                                                        children: "Live Endpoint"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1174,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1160,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                readOnly: true,
                                                                value: ("TURBOPACK compile-time truthy", 1) ? `${window.location.origin.replace(":4026", ":4000")}/api/v1/admin/crm/whatsapp/webhook` : "TURBOPACK unreachable",
                                                                className: "flex-1 h-9 px-3 rounded-[8px] border border-emerald-200 dark:border-emerald-800 bg-white dark:bg-[#0b1222] font-mono text-[11px] text-slate-800 dark:text-slate-200 select-all"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1181,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>copyToClipboard(("TURBOPACK compile-time truthy", 1) ? `${window.location.origin.replace(":4026", ":4000")}/api/v1/admin/crm/whatsapp/webhook` : "TURBOPACK unreachable", "Webhook Callback URL"),
                                                                className: "h-9 px-3 rounded-[8px] bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-1.5 transition cursor-pointer shadow-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Copy01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Copy01Icon"], {
                                                                        size: 13
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1203,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Copy URL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1204,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1191,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1180,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-3 gap-2 pt-2 text-[11px] text-slate-600 dark:text-slate-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2 rounded-lg bg-white/70 dark:bg-slate-900/60 border border-emerald-200/50 dark:border-emerald-900/30",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold text-slate-800 dark:text-slate-200 block",
                                                                        children: "1. Open Meta App"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1210,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "WhatsApp > Configuration > Callback URL"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1211,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1209,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2 rounded-lg bg-white/70 dark:bg-slate-900/60 border border-emerald-200/50 dark:border-emerald-900/30",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold text-slate-800 dark:text-slate-200 block",
                                                                        children: "2. Verify Token"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1214,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Enter your Webhook Verify Token"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1215,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1213,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2 rounded-lg bg-white/70 dark:bg-slate-900/60 border border-emerald-200/50 dark:border-emerald-900/30",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-bold text-slate-800 dark:text-slate-200 block",
                                                                        children: "3. Subscribe Fields"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1218,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: 'Check "messages" & "message_template_status_update"'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1219,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1217,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1208,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1179,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1159,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-4 border-t border-slate-100 dark:border-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3",
                                                children: "Automated Message Triggers"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1227,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                                                children: [
                                                    {
                                                        key: "autoSendInvoices",
                                                        title: "Dispatch GST Invoices via WhatsApp",
                                                        desc: `Template: ${config.whatsapp.invoiceTemplateName} with Dynamic UPI QR`
                                                    },
                                                    {
                                                        key: "autoSendPaymentReceipts",
                                                        title: "Send Payment Receipts",
                                                        desc: `Template: ${config.whatsapp.paymentTemplateName} upon invoice settlement`
                                                    },
                                                    {
                                                        key: "autoSendWelcomeLead",
                                                        title: "Instant Welcome Outreach for New Leads",
                                                        desc: `Template: pingdart_sales_intro_v1 upon CRM lead capture`
                                                    },
                                                    {
                                                        key: "autoSendContractLinks",
                                                        title: "Dispatch Digital Agreements",
                                                        desc: `Send e-sign links directly via verified WhatsApp`
                                                    }
                                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "p-3 rounded-[10px] border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex items-start justify-between gap-2.5 cursor-pointer hover:border-slate-300 dark:hover:border-slate-700 transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-slate-900 dark:text-white text-xs block",
                                                                        children: item.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1259,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-[11px] text-slate-400 mt-0.5",
                                                                        children: item.desc
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1260,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1258,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: config.whatsapp[item.key],
                                                                onChange: (e)=>setConfig((prev)=>({
                                                                            ...prev,
                                                                            whatsapp: {
                                                                                ...prev.whatsapp,
                                                                                [item.key]: e.target.checked
                                                                            }
                                                                        })),
                                                                className: "w-4 h-4 rounded text-emerald-600 mt-0.5 shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1262,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, item.key, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1254,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1231,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1226,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 1033,
                                columnNumber: 15
                            }, this),
                            waSubTab === "outgoing" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6 animate-in fade-in duration-150",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-7 space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    className: "font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider",
                                                                    children: "Interactive WhatsApp Composer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1288,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-slate-400",
                                                                    children: "Dispatch live Meta WhatsApp messages to customer mobile numbers"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1291,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1287,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1 p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setOutgoingMode("template"),
                                                                    className: `px-2.5 py-1 text-[11px] font-semibold rounded-md transition ${outgoingMode === "template" ? "bg-white dark:bg-slate-900 text-emerald-600 shadow-2xs" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,
                                                                    children: "Template"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1296,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setOutgoingMode("text"),
                                                                    className: `px-2.5 py-1 text-[11px] font-semibold rounded-md transition ${outgoingMode === "text" ? "bg-white dark:bg-slate-900 text-emerald-600 shadow-2xs" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,
                                                                    children: "Direct Text (24h)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1306,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1295,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 1286,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium text-slate-700 dark:text-slate-300 block mb-1 text-xs",
                                                            children: [
                                                                "Recipient Mobile Number ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-rose-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1321,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1320,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: outgoingPhone,
                                                            onChange: (e)=>setOutgoingPhone(e.target.value),
                                                            placeholder: "+91 98765 43210 (Country code + phone)",
                                                            className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-hidden transition"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1323,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[10px] text-slate-400 mt-1",
                                                            children: "Must include country code (e.g. 91 for India, 1 for US). Spaces and dashes are auto-sanitized."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1330,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 1319,
                                                    columnNumber: 21
                                                }, this),
                                                outgoingMode === "template" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "font-medium text-slate-700 dark:text-slate-300 block mb-1 text-xs",
                                                                    children: [
                                                                        "Select Meta Approved Template ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-rose-500",
                                                                            children: "*"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                            lineNumber: 1339,
                                                                            columnNumber: 59
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1338,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: selectedTemplateId,
                                                                    onChange: (e)=>setSelectedTemplateId(e.target.value),
                                                                    className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-hidden transition",
                                                                    children: waTemplates.map((tpl)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: tpl.id,
                                                                            children: [
                                                                                tpl.name,
                                                                                " (",
                                                                                tpl.category,
                                                                                ") [",
                                                                                tpl.language || "en_US",
                                                                                "]"
                                                                            ]
                                                                        }, tpl.id, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                            lineNumber: 1347,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1341,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1337,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-bold text-[11px] text-slate-800 dark:text-slate-200 block uppercase tracking-wider",
                                                                    children: "Template Merge Variables"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1356,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                                                    children: [
                                                                        "name",
                                                                        "company",
                                                                        "amount",
                                                                        "invoice_id",
                                                                        "due_date"
                                                                    ].map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                    className: "text-[10px] font-semibold text-slate-500 dark:text-slate-400 block mb-0.5",
                                                                                    children: `{{${field}}}`
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                                    lineNumber: 1362,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    value: outgoingVarValues[field] || "",
                                                                                    onChange: (e)=>setOutgoingVarValues((prev)=>({
                                                                                                ...prev,
                                                                                                [field]: e.target.value
                                                                                            })),
                                                                                    className: "w-full h-8 px-2.5 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white text-xs outline-hidden"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                                    lineNumber: 1365,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, field, true, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                            lineNumber: 1361,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1359,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1355,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 1336,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium text-slate-700 dark:text-slate-300 block mb-1 text-xs",
                                                            children: [
                                                                "Direct WhatsApp Message Body ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-rose-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1381,
                                                                    columnNumber: 56
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1380,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 4,
                                                            value: outgoingFreeText,
                                                            onChange: (e)=>setOutgoingFreeText(e.target.value),
                                                            placeholder: "Type freeform response (valid within 24 hours of customer initiation)...",
                                                            className: "w-full px-3 py-2 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white text-xs outline-hidden resize-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1383,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-between items-center text-[10px] text-slate-400 mt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Allowed only for active customer conversations"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1391,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        outgoingFreeText.length,
                                                                        " characters"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1392,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1390,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 1379,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleSendLiveOutgoing,
                                                        disabled: isSendingLiveWa,
                                                        className: "h-11 px-5 rounded-[10px] bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold text-xs flex items-center gap-2 shadow-xs transition active:scale-95 cursor-pointer",
                                                        children: isSendingLiveWa ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                                    size: 14,
                                                                    className: "animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1406,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Dispatching via Meta Graph API..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1407,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1411,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Send Live WhatsApp Message"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1412,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1398,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 1397,
                                                    columnNumber: 21
                                                }, this),
                                                liveWaResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-200 text-xs space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5 font-bold",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle01Icon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1421,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Delivered to Meta Relay"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1422,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1420,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-mono text-[11px] text-emerald-700 dark:text-emerald-300",
                                                            children: [
                                                                "Message ID: ",
                                                                liveWaResult.messageId || "wamid.success"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1424,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-emerald-600 dark:text-emerald-400",
                                                            children: [
                                                                "Recipient WA-ID: ",
                                                                liveWaResult.waId || outgoingPhone
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1427,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 1419,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 1285,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-xs text-slate-700 dark:text-slate-300 block mb-2",
                                                    children: "Live WhatsApp Preview"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 1436,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 rounded-2xl bg-[#eae6df] dark:bg-[#0c1317] border border-slate-300 dark:border-slate-800 shadow-inner flex flex-col justify-end min-h-[300px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "self-end max-w-[90%] bg-[#d9fdd3] dark:bg-[#005c4b] text-slate-900 dark:text-white p-3 rounded-2xl rounded-tr-xs shadow-xs space-y-1.5 text-xs",
                                                            children: [
                                                                outgoingMode === "template" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        ((_waTemplates_find = waTemplates.find((t)=>t.id === selectedTemplateId)) === null || _waTemplates_find === void 0 ? void 0 : _waTemplates_find.headerText) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-bold text-xs text-slate-800 dark:text-emerald-200 pb-1 border-b border-black/5 dark:border-white/10",
                                                                            children: (_waTemplates_find1 = waTemplates.find((t)=>t.id === selectedTemplateId)) === null || _waTemplates_find1 === void 0 ? void 0 : _waTemplates_find1.headerText
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                            lineNumber: 1445,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "whitespace-pre-wrap leading-relaxed text-[11px]",
                                                                            children: (()=>{
                                                                                const tpl = waTemplates.find((t)=>t.id === selectedTemplateId);
                                                                                if (!tpl) return "Select a template on the left to preview message...";
                                                                                let text = tpl.body;
                                                                                for (const [k, v] of Object.entries(outgoingVarValues)){
                                                                                    const reg = new RegExp(`\\{\\{\\s*${k}\\s*\\}\\}|\\{#${k}#\\}`, "gi");
                                                                                    text = text.replace(reg, v);
                                                                                }
                                                                                return text;
                                                                            })()
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                            lineNumber: 1449,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        ((_waTemplates_find2 = waTemplates.find((t)=>t.id === selectedTemplateId)) === null || _waTemplates_find2 === void 0 ? void 0 : _waTemplates_find2.footer) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-[10px] text-slate-500 dark:text-slate-300 pt-1",
                                                                            children: (_waTemplates_find3 = waTemplates.find((t)=>t.id === selectedTemplateId)) === null || _waTemplates_find3 === void 0 ? void 0 : _waTemplates_find3.footer
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                            lineNumber: 1462,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "whitespace-pre-wrap leading-relaxed text-[11px]",
                                                                    children: outgoingFreeText || "Type message text to see live preview..."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1468,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-end gap-1 text-[9px] text-slate-500 dark:text-emerald-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "10:30 AM"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                            lineNumber: 1473,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "✓✓"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                            lineNumber: 1474,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1472,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1441,
                                                            columnNumber: 23
                                                        }, this),
                                                        outgoingMode === "template" && ((_waTemplates_find4 = waTemplates.find((t)=>t.id === selectedTemplateId)) === null || _waTemplates_find4 === void 0 ? void 0 : _waTemplates_find4.buttons) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "self-end w-[90%] mt-1 space-y-1",
                                                            children: (_waTemplates_find5 = waTemplates.find((t)=>t.id === selectedTemplateId)) === null || _waTemplates_find5 === void 0 ? void 0 : (_waTemplates_find_buttons = _waTemplates_find5.buttons) === null || _waTemplates_find_buttons === void 0 ? void 0 : _waTemplates_find_buttons.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-8 rounded-lg bg-white dark:bg-[#1f2c34] text-emerald-600 dark:text-emerald-400 font-semibold text-xs flex items-center justify-center shadow-xs border border-black/5 dark:border-white/5",
                                                                    children: b.text
                                                                }, i, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1485,
                                                                    columnNumber: 33
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1481,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 1439,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 1435,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 1283,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 1282,
                                columnNumber: 15
                            }, this),
                            waSubTab === "templates" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 animate-in fade-in duration-150",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                                                size: 13,
                                                                className: "absolute left-3 top-3 text-slate-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1506,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: templateSearch,
                                                                onChange: (e)=>setTemplateSearch(e.target.value),
                                                                placeholder: "Search templates...",
                                                                className: "h-9 pl-8 pr-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-xs outline-hidden w-56"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1507,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1505,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: fetchTemplates,
                                                        className: "h-9 px-2.5 rounded-[10px] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 flex items-center justify-center cursor-pointer",
                                                        title: "Reload Templates",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                            size: 13,
                                                            className: isLoadingTemplates ? "animate-spin" : ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1521,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1515,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1504,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setIsCreateTemplateModalOpen(true),
                                                className: "h-9 px-3.5 rounded-[10px] bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs transition active:scale-95 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1530,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Create WhatsApp Template"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1531,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1525,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1503,
                                        columnNumber: 17
                                    }, this),
                                    isLoadingTemplates ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-12 flex flex-col items-center justify-center text-slate-400 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                size: 20,
                                                className: "animate-spin text-emerald-600 mb-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1537,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Loading WhatsApp templates..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1538,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1536,
                                        columnNumber: 19
                                    }, this) : waTemplates.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-8 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-xl space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$WhatsappIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsappIcon"], {
                                                size: 24,
                                                className: "mx-auto text-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1542,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-slate-800 dark:text-slate-200 text-xs",
                                                children: "No WhatsApp Templates Found"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1543,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400",
                                                children: "Create your first Meta approved message template to dispatch automated alerts."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1544,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setIsCreateTemplateModalOpen(true),
                                                className: "h-9 px-3 rounded-[10px] bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs inline-flex items-center gap-1 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                                        size: 13
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1552,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Create Template"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1553,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1547,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1541,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5",
                                        children: waTemplates.filter((t)=>!templateSearch || t.name.toLowerCase().includes(templateSearch.toLowerCase()) || t.body.toLowerCase().includes(templateSearch.toLowerCase())).map((tpl)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#0b1222] hover:border-emerald-300 dark:hover:border-emerald-800/80 transition flex flex-col justify-between space-y-3 shadow-2xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800/80",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-mono font-bold text-xs text-slate-900 dark:text-white block",
                                                                                children: tpl.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                                lineNumber: 1573,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-1.5 mt-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[9px] font-semibold px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50",
                                                                                        children: "Approved"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                                        lineNumber: 1577,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[9px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400",
                                                                                        children: tpl.category
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                                        lineNumber: 1580,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-[9px] font-mono text-slate-400",
                                                                                        children: tpl.language || "en_US"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                                        lineNumber: 1583,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                                lineNumber: 1576,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1572,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleDeleteTemplate(tpl.id, tpl.name),
                                                                        className: "text-slate-400 hover:text-rose-500 p-1 rounded-md transition cursor-pointer",
                                                                        title: "Delete Template",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                            lineNumber: 1594,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1588,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1571,
                                                                columnNumber: 29
                                                            }, this),
                                                            tpl.headerText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 text-[11px] font-bold text-slate-800 dark:text-slate-200",
                                                                children: tpl.headerText
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1599,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-[11px] text-slate-600 dark:text-slate-300 whitespace-pre-wrap leading-relaxed line-clamp-4",
                                                                children: tpl.body
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1604,
                                                                columnNumber: 29
                                                            }, this),
                                                            tpl.footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 text-[10px] text-slate-400 italic",
                                                                children: tpl.footer
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1609,
                                                                columnNumber: 31
                                                            }, this),
                                                            tpl.buttons && tpl.buttons.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2.5 flex flex-wrap gap-1",
                                                                children: tpl.buttons.map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium",
                                                                        children: [
                                                                            "🔘 ",
                                                                            b.text
                                                                        ]
                                                                    }, i, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1617,
                                                                        columnNumber: 35
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1615,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1570,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setOutgoingMode("template");
                                                                    setSelectedTemplateId(tpl.id);
                                                                    setWaSubTab("outgoing");
                                                                },
                                                                className: "text-[11px] font-semibold text-emerald-600 hover:underline cursor-pointer",
                                                                children: "Use in Dispatcher →"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1629,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setTestSendingTemplate(tpl);
                                                                    setTestSendRecipient(config.whatsapp.senderPhoneNumber || "");
                                                                    setIsTestSendTemplateModalOpen(true);
                                                                },
                                                                className: "h-7 px-2.5 rounded-[8px] bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-[11px] flex items-center gap-1 cursor-pointer transition",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                                                        size: 11
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1649,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Send Test"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1650,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1640,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1628,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, tpl.id, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1566,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1557,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 1502,
                                columnNumber: 15
                            }, this),
                            waSubTab === "inbox" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 animate-in fade-in duration-150",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl border border-indigo-200/80 dark:border-indigo-900/50 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-6 h-6 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs",
                                                            children: "🧪"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1667,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    className: "font-bold text-xs text-slate-900 dark:text-white",
                                                                    children: "Inbound Webhook Simulator"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1671,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-slate-500 dark:text-slate-400",
                                                                    children: "Instantly test incoming customer WhatsApp replies, intent parsing, and CRM lead updates without waiting for Meta live events."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 1674,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1670,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 1666,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1665,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-12 gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "md:col-span-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-semibold text-slate-500 dark:text-slate-400 block mb-1",
                                                                children: "Customer Sender Phone"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1683,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: simFrom,
                                                                onChange: (e)=>setSimFrom(e.target.value),
                                                                placeholder: "+91 98765 43210",
                                                                className: "w-full h-8 px-2.5 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-xs font-mono outline-hidden"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1686,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1682,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "md:col-span-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-semibold text-slate-500 dark:text-slate-400 block mb-1",
                                                                children: "Sender Profile Name"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1695,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: simSenderName,
                                                                onChange: (e)=>setSimSenderName(e.target.value),
                                                                placeholder: "Rajesh Sharma",
                                                                className: "w-full h-8 px-2.5 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-xs outline-hidden"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1698,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1694,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "md:col-span-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "text-[10px] font-semibold text-slate-500 dark:text-slate-400 block mb-1",
                                                                children: "Incoming Message Text"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1707,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: simMessage,
                                                                onChange: (e)=>setSimMessage(e.target.value),
                                                                placeholder: "Hi! Please share pricing and demo slots.",
                                                                className: "w-full h-8 px-2.5 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-xs outline-hidden"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1710,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1706,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "md:col-span-2 flex items-end",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: handleSimulateInbound,
                                                            disabled: isSimulatingInbound,
                                                            className: "w-full h-8 rounded-[8px] bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition cursor-pointer shadow-xs active:scale-95",
                                                            children: isSimulatingInbound ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                                size: 12,
                                                                className: "animate-spin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1726,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Simulate"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1729,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                                                        size: 11
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1730,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1719,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1718,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1681,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 flex-wrap pt-1 text-[10px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400",
                                                        children: "Quick Test Prompts:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1739,
                                                        columnNumber: 21
                                                    }, this),
                                                    [
                                                        "Interested in pricing plan for 20 users",
                                                        "Can you call me tomorrow morning?",
                                                        "STOP",
                                                        "Please share brochure PDF"
                                                    ].map((sample)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setSimMessage(sample),
                                                            className: "px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:border-indigo-400 text-slate-600 dark:text-slate-300 cursor-pointer",
                                                            children: [
                                                                '"',
                                                                sample,
                                                                '"'
                                                            ]
                                                        }, sample, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 1746,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1738,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1664,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    {
                                                        id: "all",
                                                        label: `All Messages (${waMessages.length})`
                                                    },
                                                    {
                                                        id: "inbound",
                                                        label: `Inbound (${waMessages.filter((m)=>m.direction === "inbound").length})`
                                                    },
                                                    {
                                                        id: "outbound",
                                                        label: `Outbound (${waMessages.filter((m)=>m.direction === "outbound").length})`
                                                    }
                                                ].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setMsgFilter(f.id),
                                                        className: `px-3 py-1 text-xs font-semibold rounded-lg transition cursor-pointer ${msgFilter === f.id ? "bg-emerald-600 text-white shadow-2xs" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`,
                                                        children: f.label
                                                    }, f.id, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1772,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1760,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: fetchMessages,
                                                className: "h-8 px-2.5 rounded-[8px] border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium text-xs flex items-center gap-1.5 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                        size: 12,
                                                        className: isLoadingMessages ? "animate-spin" : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1791,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Refresh"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1792,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1786,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1759,
                                        columnNumber: 17
                                    }, this),
                                    isLoadingMessages ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-12 flex flex-col items-center justify-center text-slate-400 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                size: 20,
                                                className: "animate-spin text-emerald-600 mb-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1799,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Fetching live WhatsApp messages..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1800,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1798,
                                        columnNumber: 19
                                    }, this) : waMessages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "py-12 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-xl space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$WhatsappIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsappIcon"], {
                                                size: 24,
                                                className: "mx-auto text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1804,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-slate-800 dark:text-slate-200 text-xs",
                                                children: "No WhatsApp Messages Yet"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1805,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400",
                                                children: "Incoming webhook messages and outgoing dispatches will appear here in real time."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1806,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1803,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2.5",
                                        children: waMessages.filter((m)=>msgFilter === "all" ? true : m.direction === msgFilter).map((msg)=>{
                                            const isInbound = msg.direction === "inbound";
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-3.5 rounded-xl border transition flex flex-col sm:flex-row sm:items-start justify-between gap-3 ${isInbound ? "bg-white dark:bg-[#0b1222] border-emerald-200/80 dark:border-emerald-900/60" : "bg-slate-50/70 dark:bg-slate-900/50 border-slate-200/80 dark:border-slate-800"}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1.5 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 flex-wrap",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1 ${isInbound ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300" : "bg-blue-100 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300"}`,
                                                                        children: isInbound ? "↓ Incoming Message" : "↑ Outgoing Message"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1826,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-semibold text-xs text-slate-900 dark:text-white",
                                                                        children: msg.senderName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1835,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono text-[11px] text-slate-400",
                                                                        children: isInbound ? msg.from : `To: ${msg.to}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1839,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    msg.intent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `text-[9px] font-semibold px-2 py-0.5 rounded-full ${msg.intent.includes("High") ? "bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300" : msg.intent.includes("Opt-out") ? "bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300" : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"}`,
                                                                        children: [
                                                                            "🎯 ",
                                                                            msg.intent
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1844,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] font-medium text-slate-400 capitalize",
                                                                        children: [
                                                                            "● ",
                                                                            msg.status
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1856,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1825,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-wrap",
                                                                children: msg.body
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1861,
                                                                columnNumber: 31
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3 text-[10px] text-slate-400",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: new Date(msg.timestamp).toLocaleString()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1866,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-mono",
                                                                        children: [
                                                                            "ID: ",
                                                                            msg.id.slice(0, 24),
                                                                            "..."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 1867,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1865,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1824,
                                                        columnNumber: 29
                                                    }, this),
                                                    isInbound && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setOutgoingPhone(msg.from);
                                                            setOutgoingMode("text");
                                                            setWaSubTab("outgoing");
                                                        },
                                                        className: "h-8 px-3 rounded-[8px] bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200/80 dark:border-emerald-800/80 font-semibold text-xs flex items-center gap-1.5 shrink-0 self-start cursor-pointer transition active:scale-95",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1881,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Reply"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1882,
                                                                columnNumber: 33
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1872,
                                                        columnNumber: 31
                                                    }, this)
                                                ]
                                            }, msg.id, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1817,
                                                columnNumber: 27
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1811,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 1662,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                        lineNumber: 985,
                        columnNumber: 11
                    }, this),
                    activeChannel === "sms" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 animate-in fade-in duration-150",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider",
                                                        children: "SMS Gateway Provider"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1902,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-slate-400",
                                                        children: "TRAI DLT compliant gateways for transactional alerts in India"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1905,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1901,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleTriggerTest("sms"),
                                                className: "h-10 px-3 rounded-[10px] bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/60 border border-purple-200/80 dark:border-purple-800/80 font-semibold text-xs flex items-center gap-1.5 transition cursor-pointer active:scale-95",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SmartPhone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartPhone01Icon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1912,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Send Test SMS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1913,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1907,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1900,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2",
                                        children: smsProviders.map((p)=>{
                                            const isSelected = config.sms.provider === p.id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setConfig((prev)=>({
                                                            ...prev,
                                                            sms: {
                                                                ...prev.sms,
                                                                provider: p.id
                                                            }
                                                        })),
                                                className: `h-10 px-3 rounded-[10px] border text-xs font-semibold flex items-center justify-center transition cursor-pointer ${isSelected ? "border-purple-600 bg-purple-50/50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 ring-1 ring-purple-600 shadow-2xs" : "border-slate-200 dark:border-slate-700/80 bg-white dark:bg-[#0b1222] text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: p.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 1935,
                                                    columnNumber: 23
                                                }, this)
                                            }, p.id, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1921,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1917,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 1899,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4 border-t border-slate-100 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3",
                                        children: [
                                            config.sms.provider === "smslogin" && "smslogin.co (ivaclt) API Credentials",
                                            config.sms.provider === "msg91" && "MSG91 (India DLT) API Credentials",
                                            config.sms.provider === "twilio" && "Twilio SMS API Credentials",
                                            config.sms.provider === "fast2sms" && "Fast2SMS API Credentials",
                                            config.sms.provider === "aws_sns" && "AWS SNS API Credentials"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1944,
                                        columnNumber: 15
                                    }, this),
                                    config.sms.provider === "smslogin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-4 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "Sender ID / Header ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "* (6 Alpha Chars)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1957,
                                                                columnNumber: 42
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1956,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        maxLength: 6,
                                                        value: config.sms.senderId || "",
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    sms: {
                                                                        ...prev.sms,
                                                                        senderId: e.target.value.toUpperCase()
                                                                    }
                                                                })),
                                                        placeholder: "e.g. MEPING",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono font-bold tracking-wider text-center text-xs focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1959,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1955,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "API Username ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1976,
                                                                columnNumber: 36
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1975,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: config.sms.username || "",
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    sms: {
                                                                        ...prev.sms,
                                                                        username: e.target.value
                                                                    }
                                                                })),
                                                        placeholder: "Enter API username",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1978,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1974,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "API Key / Auth Key ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1994,
                                                                columnNumber: 42
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1993,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: showSmsKey ? "text" : "password",
                                                                value: config.sms.authKey || "",
                                                                onChange: (e)=>setConfig((prev)=>({
                                                                            ...prev,
                                                                            sms: {
                                                                                ...prev.sms,
                                                                                authKey: e.target.value
                                                                            }
                                                                        })),
                                                                placeholder: "Enter API Key",
                                                                className: "w-full h-10 pl-3 pr-9 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 1997,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setShowSmsKey(!showSmsKey),
                                                                className: "absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer",
                                                                children: showSmsKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewOffSlashIcon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2014,
                                                                    columnNumber: 39
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2014,
                                                                    columnNumber: 72
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2009,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 1996,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 1992,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "DLT Principal Entity ID (PE ID)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2020,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: config.sms.dltEntityId || "",
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    sms: {
                                                                        ...prev.sms,
                                                                        dltEntityId: e.target.value
                                                                    }
                                                                })),
                                                        placeholder: "e.g. 1201159123456789012",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2023,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2019,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 1954,
                                        columnNumber: 17
                                    }, this),
                                    config.sms.provider === "msg91" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-4 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "Sender ID / Header ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "* (6 Alpha Chars)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2044,
                                                                columnNumber: 42
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2043,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        maxLength: 6,
                                                        value: config.sms.senderId || "",
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    sms: {
                                                                        ...prev.sms,
                                                                        senderId: e.target.value.toUpperCase()
                                                                    }
                                                                })),
                                                        placeholder: "e.g. PNGDRT",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono font-bold tracking-wider text-center text-xs focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2046,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2042,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "MSG91 Auth Key ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2063,
                                                                columnNumber: 38
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2062,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: showSmsKey ? "text" : "password",
                                                                value: config.sms.authKey || "",
                                                                onChange: (e)=>setConfig((prev)=>({
                                                                            ...prev,
                                                                            sms: {
                                                                                ...prev.sms,
                                                                                authKey: e.target.value
                                                                            }
                                                                        })),
                                                                placeholder: "Enter MSG91 Auth Key",
                                                                className: "w-full h-10 pl-3 pr-9 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2066,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setShowSmsKey(!showSmsKey),
                                                                className: "absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer",
                                                                children: showSmsKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewOffSlashIcon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2083,
                                                                    columnNumber: 39
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2083,
                                                                    columnNumber: 72
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2078,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2065,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2061,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Route"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2089,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: config.sms.msg91Route || "4",
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    sms: {
                                                                        ...prev.sms,
                                                                        msg91Route: e.target.value
                                                                    }
                                                                })),
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-medium text-xs cursor-pointer focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "4",
                                                                children: "Transactional Route (DLT)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2100,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "1",
                                                                children: "Promotional Route"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2101,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2090,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2088,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "DLT Principal Entity ID (PE ID)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2106,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: config.sms.dltEntityId || "",
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    sms: {
                                                                        ...prev.sms,
                                                                        dltEntityId: e.target.value
                                                                    }
                                                                })),
                                                        placeholder: "e.g. 1201159123456789012",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2109,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2105,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 2041,
                                        columnNumber: 17
                                    }, this),
                                    config.sms.provider === "twilio" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "Account SID ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2130,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2129,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: config.sms.twilioAccountSid || config.sms.username || "",
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    sms: {
                                                                        ...prev.sms,
                                                                        twilioAccountSid: e.target.value,
                                                                        username: e.target.value
                                                                    }
                                                                })),
                                                        placeholder: "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2132,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2128,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "Auth Token ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2148,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2147,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: showSmsKey ? "text" : "password",
                                                                value: config.sms.authKey || "",
                                                                onChange: (e)=>setConfig((prev)=>({
                                                                            ...prev,
                                                                            sms: {
                                                                                ...prev.sms,
                                                                                authKey: e.target.value
                                                                            }
                                                                        })),
                                                                placeholder: "Enter Twilio Auth Token",
                                                                className: "w-full h-10 pl-3 pr-9 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2151,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setShowSmsKey(!showSmsKey),
                                                                className: "absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer",
                                                                children: showSmsKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewOffSlashIcon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2168,
                                                                    columnNumber: 39
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2168,
                                                                    columnNumber: 72
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2163,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2150,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2146,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "Twilio Phone Number (From) ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2175,
                                                                columnNumber: 50
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2174,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: config.sms.twilioFrom || config.sms.senderId || "",
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    sms: {
                                                                        ...prev.sms,
                                                                        twilioFrom: e.target.value,
                                                                        senderId: e.target.value
                                                                    }
                                                                })),
                                                        placeholder: "+1XXXXXXXXXX",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2177,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2173,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 2127,
                                        columnNumber: 17
                                    }, this),
                                    config.sms.provider === "fast2sms" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-4 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "API Authorization Key ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2198,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2197,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: showSmsKey ? "text" : "password",
                                                                value: config.sms.authKey || "",
                                                                onChange: (e)=>setConfig((prev)=>({
                                                                            ...prev,
                                                                            sms: {
                                                                                ...prev.sms,
                                                                                authKey: e.target.value
                                                                            }
                                                                        })),
                                                                placeholder: "Enter Fast2SMS API Key",
                                                                className: "w-full h-10 pl-3 pr-9 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2201,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setShowSmsKey(!showSmsKey),
                                                                className: "absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer",
                                                                children: showSmsKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewOffSlashIcon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2218,
                                                                    columnNumber: 39
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2218,
                                                                    columnNumber: 72
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2213,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2200,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2196,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "Route Mode"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2224,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: config.sms.fast2smsRoute || "q",
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    sms: {
                                                                        ...prev.sms,
                                                                        fast2smsRoute: e.target.value
                                                                    }
                                                                })),
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-medium text-xs cursor-pointer focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "q",
                                                                children: "Quick SMS (No DLT required)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2235,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "dlt",
                                                                children: "DLT Route (Requires Sender ID)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2236,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2225,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2223,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "Sender ID / Header ",
                                                            config.sms.fast2smsRoute === "dlt" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2242,
                                                                columnNumber: 81
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2241,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        maxLength: 6,
                                                        value: config.sms.senderId || "",
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    sms: {
                                                                        ...prev.sms,
                                                                        senderId: e.target.value.toUpperCase()
                                                                    }
                                                                })),
                                                        placeholder: "e.g. FSTSMS",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono font-bold tracking-wider text-center text-xs focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2244,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2240,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 2195,
                                        columnNumber: 17
                                    }, this),
                                    config.sms.provider === "aws_sns" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-4 gap-3.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "AWS Access Key ID ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2266,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2265,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: config.sms.awsAccessKeyId || config.sms.username || "",
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    sms: {
                                                                        ...prev.sms,
                                                                        awsAccessKeyId: e.target.value,
                                                                        username: e.target.value
                                                                    }
                                                                })),
                                                        placeholder: "AKIAxxxxxxxxxxxxxxxx",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2268,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2264,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: [
                                                            "AWS Secret Access Key ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-rose-500",
                                                                children: "*"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2284,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2283,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: showSmsKey ? "text" : "password",
                                                                value: config.sms.authKey || "",
                                                                onChange: (e)=>setConfig((prev)=>({
                                                                            ...prev,
                                                                            sms: {
                                                                                ...prev.sms,
                                                                                authKey: e.target.value
                                                                            }
                                                                        })),
                                                                placeholder: "Enter AWS Secret Access Key",
                                                                className: "w-full h-10 pl-3 pr-9 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2287,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setShowSmsKey(!showSmsKey),
                                                                className: "absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer",
                                                                children: showSmsKey ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewOffSlashIcon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2304,
                                                                    columnNumber: 39
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2304,
                                                                    columnNumber: 72
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2299,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2286,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2282,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "AWS Region"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2310,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: config.sms.awsRegion || "ap-south-1",
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    sms: {
                                                                        ...prev.sms,
                                                                        awsRegion: e.target.value
                                                                    }
                                                                })),
                                                        placeholder: "ap-south-1",
                                                        className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2311,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2309,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 2263,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 1943,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                        lineNumber: 1897,
                        columnNumber: 11
                    }, this),
                    activeChannel === "webhooks" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6 animate-in fade-in duration-150",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pb-3 border-b border-slate-100 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider",
                                        children: "Outbound Webhooks"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 2334,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-400",
                                        children: "Stream real-time CRM events to external endpoints (Zapier, Make, n8n)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 2337,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 2333,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-3.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                children: [
                                                    "Destination URL ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-rose-500",
                                                        children: "*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2343,
                                                        columnNumber: 35
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2342,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "url",
                                                value: config.webhooks.webhookUrl,
                                                onChange: (e)=>setConfig((prev)=>({
                                                            ...prev,
                                                            webhooks: {
                                                                ...prev.webhooks,
                                                                webhookUrl: e.target.value
                                                            }
                                                        })),
                                                placeholder: "https://api.yourdomain.com/crm-webhook",
                                                className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-hidden transition"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2345,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 2341,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "font-medium text-slate-700 dark:text-slate-300 block mb-1",
                                                children: "HMAC Signing Secret"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2360,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: showWebhookSecret ? "text" : "password",
                                                        value: config.webhooks.secretToken,
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    webhooks: {
                                                                        ...prev.webhooks,
                                                                        secretToken: e.target.value
                                                                    }
                                                                })),
                                                        placeholder: "whsec_...",
                                                        className: "w-full h-10 pl-3 pr-9 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-hidden transition"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2364,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowWebhookSecret(!showWebhookSecret),
                                                        className: "absolute right-2.5 top-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",
                                                        children: showWebhookSecret ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewOffSlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewOffSlashIcon"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2381,
                                                            columnNumber: 42
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ViewIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewIcon"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2381,
                                                            columnNumber: 75
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2376,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2363,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 2359,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 2340,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4 border-t border-slate-100 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3",
                                        children: "Subscribed Events"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 2388,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 sm:grid-cols-5 gap-2.5",
                                        children: [
                                            {
                                                key: "subscribeInvoiceCreated",
                                                label: "invoice.created"
                                            },
                                            {
                                                key: "subscribeInvoicePaid",
                                                label: "invoice.paid"
                                            },
                                            {
                                                key: "subscribeDealWon",
                                                label: "deal.stage_won"
                                            },
                                            {
                                                key: "subscribeLeadCreated",
                                                label: "lead.created"
                                            },
                                            {
                                                key: "subscribeClientCreated",
                                                label: "client.created"
                                            }
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "p-2.5 rounded-[10px] border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex items-center justify-between cursor-pointer hover:border-slate-300 dark:hover:border-slate-700 transition",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 truncate mr-2",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2404,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: config.webhooks[item.key],
                                                        onChange: (e)=>setConfig((prev)=>({
                                                                    ...prev,
                                                                    webhooks: {
                                                                        ...prev.webhooks,
                                                                        [item.key]: e.target.checked
                                                                    }
                                                                })),
                                                        className: "w-4 h-4 rounded text-indigo-600 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                        lineNumber: 2407,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item.key, true, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2400,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 2392,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                lineNumber: 2387,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                        lineNumber: 2332,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                lineNumber: 732,
                columnNumber: 7
            }, this),
            testModalChannel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in",
                onClick: ()=>setTestModalChannel(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-sm bg-white dark:bg-[#111827] rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5",
                                    children: [
                                        testModalChannel === "email" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mail01Icon"], {
                                            size: 16,
                                            className: "text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2438,
                                            columnNumber: 50
                                        }, this),
                                        testModalChannel === "whatsapp" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$WhatsappIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsappIcon"], {
                                            size: 16,
                                            className: "text-emerald-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2439,
                                            columnNumber: 53
                                        }, this),
                                        testModalChannel === "sms" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SmartPhone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SmartPhone01Icon"], {
                                            size: 16,
                                            className: "text-purple-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2440,
                                            columnNumber: 48
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Test ",
                                                testModalChannel === "email" ? "Email" : testModalChannel === "whatsapp" ? "WhatsApp" : "SMS"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2441,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2437,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setTestModalChannel(null),
                                    className: "text-slate-400 hover:text-slate-600 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 2446,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2445,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                            lineNumber: 2436,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-medium text-slate-700 dark:text-slate-300 block mb-1 text-xs",
                                            children: [
                                                "Target ",
                                                testModalChannel === "email" ? "Email Address" : "Phone Number (e.g. 10 Digits or +91)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2452,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: testModalChannel === "email" ? "email" : "text",
                                            value: testRecipient,
                                            onChange: (e)=>setTestRecipient(e.target.value),
                                            placeholder: testModalChannel === "email" ? "user@example.com" : "+91 98765 43210",
                                            className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 outline-hidden transition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2455,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2451,
                                    columnNumber: 15
                                }, this),
                                (testModalChannel === "sms" || testModalChannel === "whatsapp") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-medium text-slate-700 dark:text-slate-300 block mb-1 text-xs",
                                            children: [
                                                "Test ",
                                                testModalChannel === "whatsapp" ? "WhatsApp" : "SMS",
                                                " Message Body"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2466,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            rows: 3,
                                            value: testMessage,
                                            onChange: (e)=>setTestMessage(e.target.value),
                                            placeholder: "Enter test message body...",
                                            className: "w-full px-3 py-2 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-[#0b1222] text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-hidden transition resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2469,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 flex items-center justify-between text-[11px] text-slate-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Sending via:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-emerald-600 dark:text-emerald-400",
                                                            children: testModalChannel === "whatsapp" ? "Meta Cloud API" : ((_smsProviders_find = smsProviders.find((p)=>p.id === config.sms.provider)) === null || _smsProviders_find === void 0 ? void 0 : _smsProviders_find.name) || config.sms.provider
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2479,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2477,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        testMessage.length,
                                                        " chars"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2483,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2476,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2465,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                            lineNumber: 2450,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 flex justify-end gap-2 border-t border-slate-100 dark:border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setTestModalChannel(null),
                                    className: "h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 font-medium text-xs text-slate-600 dark:text-slate-300 cursor-pointer",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2490,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: executeSendTest,
                                    disabled: isSendingTest,
                                    className: "h-10 px-4 rounded-[10px] bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold text-xs flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-95 transition",
                                    children: isSendingTest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                size: 13,
                                                className: "animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2505,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Sending..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2506,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2510,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Send Test"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2511,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2497,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                            lineNumber: 2489,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                    lineNumber: 2432,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                lineNumber: 2428,
                columnNumber: 9
            }, this),
            isCreateTemplateModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto",
                onClick: ()=>setIsCreateTemplateModalOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-3xl bg-white dark:bg-[#111827] rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-5 my-8 max-h-[90vh] overflow-y-auto",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$WhatsappIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsappIcon"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2533,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2532,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-sm font-bold text-slate-900 dark:text-white",
                                                    children: "Create Meta WhatsApp Template"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2536,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400",
                                                    children: "Compliant with Meta WhatsApp Cloud API specifications"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2539,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2535,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2531,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsCreateTemplateModalOpen(false),
                                    className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 2549,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2544,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                            lineNumber: 2530,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-12 gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-7 space-y-3.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-medium text-slate-700 dark:text-slate-300 block mb-1 text-xs",
                                                    children: [
                                                        "Template Name ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-rose-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2558,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2557,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: newTemplateForm.name,
                                                    onChange: (e)=>setNewTemplateForm((prev)=>({
                                                                ...prev,
                                                                name: e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, "_")
                                                            })),
                                                    placeholder: "order_confirmation_v1 (snake_case only)",
                                                    className: "w-full h-9 px-3 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] font-mono text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-hidden transition"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2560,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] text-slate-400 mt-0.5",
                                                    children: "Lowercase letters, digits, and underscores only."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2572,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2556,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium text-slate-700 dark:text-slate-300 block mb-1 text-xs",
                                                            children: "Category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2579,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: newTemplateForm.category,
                                                            onChange: (e)=>setNewTemplateForm((prev)=>({
                                                                        ...prev,
                                                                        category: e.target.value
                                                                    })),
                                                            className: "w-full h-9 px-2.5 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-xs outline-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "MARKETING",
                                                                    children: "MARKETING"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2589,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "UTILITY",
                                                                    children: "UTILITY"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2590,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "AUTHENTICATION",
                                                                    children: "AUTHENTICATION"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2591,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2582,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2578,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium text-slate-700 dark:text-slate-300 block mb-1 text-xs",
                                                            children: "Language"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2596,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: newTemplateForm.language,
                                                            onChange: (e)=>setNewTemplateForm((prev)=>({
                                                                        ...prev,
                                                                        language: e.target.value
                                                                    })),
                                                            className: "w-full h-9 px-2.5 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-xs outline-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "en_US",
                                                                    children: "English (US)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2606,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "en_GB",
                                                                    children: "English (UK)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2607,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "hi",
                                                                    children: "Hindi (hi)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2608,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "ar",
                                                                    children: "Arabic (ar)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2609,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "es",
                                                                    children: "Spanish (es)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2610,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "fr",
                                                                    children: "French (fr)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2611,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "de",
                                                                    children: "German (de)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2612,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2599,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2595,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2577,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-medium text-slate-700 dark:text-slate-300 block mb-1 text-xs",
                                                    children: "Header (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2618,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-4 gap-1 mb-2",
                                                    children: [
                                                        "none",
                                                        "text",
                                                        "image",
                                                        "document"
                                                    ].map((ht)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setNewTemplateForm((prev)=>({
                                                                        ...prev,
                                                                        headerType: ht
                                                                    })),
                                                            className: `h-7 rounded-[6px] text-[10px] font-semibold capitalize transition ${newTemplateForm.headerType === ht ? "bg-emerald-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"}`,
                                                            children: ht
                                                        }, ht, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2623,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2621,
                                                    columnNumber: 19
                                                }, this),
                                                newTemplateForm.headerType === "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: newTemplateForm.headerText,
                                                    onChange: (e)=>setNewTemplateForm((prev)=>({
                                                                ...prev,
                                                                headerText: e.target.value
                                                            })),
                                                    placeholder: "Header Title (e.g. Welcome to PingDart)",
                                                    className: "w-full h-8 px-2.5 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-xs outline-hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2637,
                                                    columnNumber: 21
                                                }, this),
                                                (newTemplateForm.headerType === "image" || newTemplateForm.headerType === "document") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "url",
                                                    value: newTemplateForm.headerMediaUrl,
                                                    onChange: (e)=>setNewTemplateForm((prev)=>({
                                                                ...prev,
                                                                headerMediaUrl: e.target.value
                                                            })),
                                                    placeholder: `https://domain.com/sample.${newTemplateForm.headerType === "image" ? "jpg" : "pdf"}`,
                                                    className: "w-full h-8 px-2.5 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-xs outline-hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2648,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2617,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between mb-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "font-medium text-slate-700 dark:text-slate-300 text-xs",
                                                            children: [
                                                                "Message Body ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-rose-500",
                                                                    children: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2663,
                                                                    columnNumber: 36
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2662,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-slate-400",
                                                            children: "Click to insert tag:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2665,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2661,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 flex-wrap mb-1.5",
                                                    children: [
                                                        "{{name}}",
                                                        "{{company}}",
                                                        "{{amount}}",
                                                        "{{invoice_id}}",
                                                        "{{due_date}}",
                                                        "{{otp}}"
                                                    ].map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setNewTemplateForm((prev)=>({
                                                                        ...prev,
                                                                        body: prev.body + " " + tag
                                                                    })),
                                                            className: "px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 text-emerald-700 dark:text-emerald-300 font-mono text-[10px] hover:bg-emerald-100 cursor-pointer",
                                                            children: [
                                                                "+",
                                                                tag
                                                            ]
                                                        }, tag, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2671,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2668,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    rows: 4,
                                                    value: newTemplateForm.body,
                                                    onChange: (e)=>setNewTemplateForm((prev)=>({
                                                                ...prev,
                                                                body: e.target.value
                                                            })),
                                                    placeholder: "Enter message body with {{variables}}...",
                                                    className: "w-full px-3 py-2 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white text-xs outline-hidden resize-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2687,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2660,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-medium text-slate-700 dark:text-slate-300 block mb-1 text-xs",
                                                    children: "Footer Text (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2699,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: newTemplateForm.footer,
                                                    onChange: (e)=>setNewTemplateForm((prev)=>({
                                                                ...prev,
                                                                footer: e.target.value
                                                            })),
                                                    placeholder: "Reply STOP to unsubscribe",
                                                    className: "w-full h-8 px-2.5 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-xs outline-hidden"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2702,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2698,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "font-medium text-slate-700 dark:text-slate-300 block mb-1 text-xs",
                                                    children: "Quick Reply Buttons (Optional)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2714,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1.5",
                                                    children: [
                                                        newTemplateForm.buttons.map((btn, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        value: btn.text,
                                                                        onChange: (e)=>{
                                                                            const updated = [
                                                                                ...newTemplateForm.buttons
                                                                            ];
                                                                            updated[idx].text = e.target.value;
                                                                            setNewTemplateForm((prev)=>({
                                                                                    ...prev,
                                                                                    buttons: updated
                                                                                }));
                                                                        },
                                                                        placeholder: `Button ${idx + 1} Label`,
                                                                        className: "flex-1 h-8 px-2.5 rounded-[8px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-xs outline-hidden"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 2720,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>{
                                                                            const updated = newTemplateForm.buttons.filter((_, i)=>i !== idx);
                                                                            setNewTemplateForm((prev)=>({
                                                                                    ...prev,
                                                                                    buttons: updated
                                                                                }));
                                                                        },
                                                                        className: "h-8 px-2 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-md cursor-pointer",
                                                                        children: "✕"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                        lineNumber: 2731,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                lineNumber: 2719,
                                                                columnNumber: 23
                                                            }, this)),
                                                        newTemplateForm.buttons.length < 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setNewTemplateForm((prev)=>({
                                                                        ...prev,
                                                                        buttons: [
                                                                            ...prev.buttons,
                                                                            {
                                                                                type: "QUICK_REPLY",
                                                                                text: ""
                                                                            }
                                                                        ]
                                                                    })),
                                                            className: "text-[11px] font-semibold text-emerald-600 hover:underline cursor-pointer",
                                                            children: "+ Add Button (Max 3)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2744,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2717,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2713,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2555,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-5 flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-xs text-slate-700 dark:text-slate-300 block mb-2",
                                            children: "Live Preview"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2763,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 rounded-2xl bg-[#eae6df] dark:bg-[#0c1317] border border-slate-300 dark:border-slate-800 shadow-inner flex flex-col justify-end flex-1 min-h-[300px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "self-end max-w-full bg-[#d9fdd3] dark:bg-[#005c4b] text-slate-900 dark:text-white p-3 rounded-2xl rounded-tr-xs shadow-xs space-y-1.5 text-xs",
                                                    children: [
                                                        newTemplateForm.headerType === "text" && newTemplateForm.headerText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-bold text-xs text-slate-800 dark:text-emerald-200 pb-1 border-b border-black/5 dark:border-white/10",
                                                            children: newTemplateForm.headerText
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2769,
                                                            columnNumber: 23
                                                        }, this),
                                                        newTemplateForm.headerType !== "none" && newTemplateForm.headerType !== "text" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-24 bg-black/10 dark:bg-white/10 rounded-lg flex items-center justify-center font-semibold text-[11px] text-slate-600 dark:text-emerald-200",
                                                            children: [
                                                                "[",
                                                                newTemplateForm.headerType.toUpperCase(),
                                                                " HEADER]"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2774,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "whitespace-pre-wrap leading-relaxed text-[11px]",
                                                            children: newTemplateForm.body || "Message body will appear here..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2778,
                                                            columnNumber: 21
                                                        }, this),
                                                        newTemplateForm.footer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-[10px] text-slate-500 dark:text-slate-300 pt-1",
                                                            children: newTemplateForm.footer
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2782,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-end gap-1 text-[9px] text-slate-500 dark:text-emerald-200",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "11:45 AM"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2787,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "✓✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                                    lineNumber: 2788,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2786,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2767,
                                                    columnNumber: 19
                                                }, this),
                                                newTemplateForm.buttons.filter((b)=>b.text.trim()).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "self-end w-full mt-1.5 space-y-1",
                                                    children: newTemplateForm.buttons.filter((b)=>b.text.trim()).map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-8 rounded-lg bg-white dark:bg-[#1f2c34] text-emerald-600 dark:text-emerald-400 font-semibold text-xs flex items-center justify-center shadow-xs border border-black/5 dark:border-white/5",
                                                            children: b.text
                                                        }, i, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2797,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2793,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2766,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2762,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                            lineNumber: 2553,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3 flex justify-end gap-2 border-t border-slate-100 dark:border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsCreateTemplateModalOpen(false),
                                    className: "h-10 px-4 rounded-[10px] border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 cursor-pointer",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2811,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleCreateTemplate,
                                    disabled: isCreatingTemplate,
                                    className: "h-10 px-5 rounded-[10px] bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs transition active:scale-95 cursor-pointer",
                                    children: isCreatingTemplate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                size: 14,
                                                className: "animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2826,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Saving Template..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2827,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2831,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Create Template"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2832,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2818,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                            lineNumber: 2810,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                    lineNumber: 2526,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                lineNumber: 2522,
                columnNumber: 9
            }, this),
            isTestSendTemplateModalOpen && testSendingTemplate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4",
                onClick: ()=>setIsTestSendTemplateModalOpen(false),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-md bg-white dark:bg-[#111827] rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$WhatsappIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsappIcon"], {
                                            size: 16,
                                            className: "text-emerald-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2853,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-bold text-slate-900 dark:text-white",
                                            children: [
                                                "Test Send: ",
                                                testSendingTemplate.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2854,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2852,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsTestSendTemplateModalOpen(false),
                                    className: "text-slate-400 hover:text-slate-600 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                        lineNumber: 2862,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2858,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                            lineNumber: 2851,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-medium text-slate-700 dark:text-slate-300 block mb-1 text-xs",
                                            children: [
                                                "Target Recipient Phone Number ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-rose-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2869,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2868,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: testSendRecipient,
                                            onChange: (e)=>setTestSendRecipient(e.target.value),
                                            placeholder: "+91 98765 43210 (Country code + phone)",
                                            className: "w-full h-10 px-3 rounded-[10px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-slate-900 dark:text-white font-mono text-xs focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-hidden transition"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2871,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2867,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-bold text-slate-800 dark:text-slate-200 block",
                                            children: "Dynamic Merge Values"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2882,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 gap-2",
                                            children: Object.keys(testSendVars).map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "text-[10px] font-semibold text-slate-500 dark:text-slate-400 block mb-0.5",
                                                            children: `{{${k}}}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2888,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: testSendVars[k],
                                                            onChange: (e)=>setTestSendVars((prev)=>({
                                                                        ...prev,
                                                                        [k]: e.target.value
                                                                    })),
                                                            className: "w-full h-8 px-2 rounded-[6px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0b1222] text-xs outline-hidden"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                            lineNumber: 2891,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, k, true, {
                                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                    lineNumber: 2887,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                            lineNumber: 2885,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2881,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2.5 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/30 text-[11px] text-emerald-800 dark:text-emerald-300",
                                    children: "Dispatches immediately using your configured Meta credentials or system fallback."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2904,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                            lineNumber: 2866,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 flex justify-end gap-2 border-t border-slate-100 dark:border-slate-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsTestSendTemplateModalOpen(false),
                                    className: "h-10 px-3.5 rounded-[10px] border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 cursor-pointer",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2910,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleExecuteTestSendTemplate,
                                    disabled: isDispatchingTestSend,
                                    className: "h-10 px-4 rounded-[10px] bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs transition active:scale-95 cursor-pointer",
                                    children: isDispatchingTestSend ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                size: 13,
                                                className: "animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2925,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Dispatching..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2926,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2930,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Dispatch WhatsApp"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                                lineNumber: 2931,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                                    lineNumber: 2917,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                            lineNumber: 2909,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                    lineNumber: 2847,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
                lineNumber: 2843,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/crm/components/settings/CommunicationsSettings.tsx",
        lineNumber: 665,
        columnNumber: 5
    }, this);
}
_s(CommunicationsSettings, "4AVBOWtgBLojrOCusJ13f7NLgrA=");
_c = CommunicationsSettings;
var _c;
__turbopack_context__.k.register(_c, "CommunicationsSettings");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_user_components_modules_crm_components_settings_1a54b8ec._.js.map