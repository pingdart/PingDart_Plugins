(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StorageSidebarTree",
    ()=>StorageSidebarTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Folder01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Clock01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Clock01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Image01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Image01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/File01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/StarIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Add01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Upload01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$HardDriveIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/HardDriveIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CloudIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CloudIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function StorageSidebarTree({ activeTab, onTabChange, onNewFolderClick, onFileUploadClick, onOpenUpgradeModal, onClose, quota }) {
    _s();
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const isMobileLayout = isNative || isMobile;
    const formatBytes = (bytes)=>{
        const gb = bytes / (1024 * 1024 * 1024);
        if (gb >= 1) return `${gb.toFixed(2)} GB`;
        const mb = bytes / (1024 * 1024);
        return `${mb.toFixed(1)} MB`;
    };
    const usedGbText = formatBytes(quota.usedBytes);
    const totalGbText = formatBytes(quota.limitBytes);
    const percentage = Math.min(Math.round(quota.usedBytes / quota.limitBytes * 100), 100);
    const NAV_ITEMS = [
        {
            id: "drive",
            label: "My Drive",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder01Icon"]
        },
        {
            id: "shared",
            label: "Shared With Me",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"]
        },
        {
            id: "recent",
            label: "Recent",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Clock01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock01Icon"]
        },
        {
            id: "photos",
            label: "Photos",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Image01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image01Icon"]
        },
        {
            id: "documents",
            label: "Documents",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File01Icon"]
        },
        {
            id: "starred",
            label: "Starred",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"]
        },
        {
            id: "vault",
            label: "Encrypted Vault",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield01Icon"],
            badge: "AES-256"
        },
        {
            id: "trash",
            label: "Trash",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "w-full md:w-[380px] lg:w-[400px] shrink-0 flex flex-col h-full border-r border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] select-none overflow-hidden shadow-2xl md:shadow-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 sm:p-5 border-b border-slate-200/80 dark:border-slate-800 shrink-0 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CloudIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloudIcon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-base font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5 truncate",
                                                children: "PingDart Cloud"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] font-medium text-slate-400 truncate",
                                                children: "Encrypted Workspace Storage"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            onClose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 active:scale-95 transition-all cursor-pointer shadow-xs md:hidden",
                                title: "Close",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 flex items-center justify-between cursor-pointer transition-all active:scale-[0.98]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                                    size: 18,
                                                    strokeWidth: 2.5
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "New Upload / Folder"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                            size: 14,
                                            className: "opacity-80"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                            lineNumber: 118,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                align: "start",
                                className: "w-56 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#161f2e] shadow-xl z-[100]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        onClick: ()=>{
                                            onFileUploadClick();
                                            onClose === null || onClose === void 0 ? void 0 : onClose();
                                        },
                                        className: "flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Upload01Icon"], {
                                                size: 16,
                                                className: "text-blue-600 dark:text-blue-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Upload File"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                                lineNumber: 130,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                        onClick: ()=>{
                                            onNewFolderClick();
                                            onClose === null || onClose === void 0 ? void 0 : onClose();
                                        },
                                        className: "flex items-center gap-2.5 px-3 py-2.5 text-xs font-semibold rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder01Icon"], {
                                                size: 16,
                                                className: "text-amber-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "New Folder"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-3 space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 py-1 mb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[14px] font-extrabold uppercase tracking-wider text-slate-400",
                            children: "Navigation Tree"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    NAV_ITEMS.map((item)=>{
                        const isActive = activeTab === item.id;
                        const ItemIcon = item.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                onTabChange(item.id);
                                onClose === null || onClose === void 0 ? void 0 : onClose();
                            },
                            className: `w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${isActive ? "bg-blue-50/80 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/60 shadow-xs" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/60"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemIcon, {
                                            size: 18,
                                            className: isActive ? "text-blue-600 dark:text-blue-400" : "text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                    lineNumber: 170,
                                    columnNumber: 15
                                }, this),
                                item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800",
                                    children: item.badge
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                    lineNumber: 179,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 pb-28 md:pb-4 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 shrink-0 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-slate-700 dark:text-slate-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$HardDriveIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HardDriveIcon"], {
                                        size: 16,
                                        className: "text-blue-600 dark:text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold",
                                        children: "Storage Usage"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900",
                                children: [
                                    quota.planName,
                                    " (",
                                    formatBytes(quota.freeLimitBytes),
                                    " Free)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500",
                                    style: {
                                        width: `${percentage}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            usedGbText,
                                            " used"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: totalGbText
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            onOpenUpgradeModal();
                            onClose === null || onClose === void 0 ? void 0 : onClose();
                        },
                        className: "w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                size: 14,
                                className: "text-amber-300"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Upgrade Storage"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(StorageSidebarTree, "6ANw/OLsSgPyC1AIN85aqhxk9sU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = StorageSidebarTree;
var _c;
__turbopack_context__.k.register(_c, "StorageSidebarTree");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/storageApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLAN_LIMITS",
    ()=>PLAN_LIMITS,
    "storageApi",
    ()=>storageApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
;
;
function getCurrentUserKey() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const { useAuthStore } = __turbopack_context__.r("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
        const user = useAuthStore.getState().user;
        if (user === null || user === void 0 ? void 0 : user.id) return `user_${user.id}`;
        if (user === null || user === void 0 ? void 0 : user.email) return `user_${user.email.replace(/[^a-zA-Z0-9]/g, "_")}`;
    } catch (_) {}
    try {
        const raw = localStorage.getItem("auth-storage");
        if (raw) {
            var _parsed_state;
            const parsed = JSON.parse(raw);
            const user = parsed === null || parsed === void 0 ? void 0 : (_parsed_state = parsed.state) === null || _parsed_state === void 0 ? void 0 : _parsed_state.user;
            if (user === null || user === void 0 ? void 0 : user.id) return `user_${user.id}`;
            if (user === null || user === void 0 ? void 0 : user.email) return `user_${user.email.replace(/[^a-zA-Z0-9]/g, "_")}`;
        }
    } catch (_) {}
    try {
        const userRaw = localStorage.getItem("user");
        if (userRaw) {
            const u = JSON.parse(userRaw);
            if (u === null || u === void 0 ? void 0 : u.id) return `user_${u.id}`;
            if (u === null || u === void 0 ? void 0 : u.email) return `user_${u.email.replace(/[^a-zA-Z0-9]/g, "_")}`;
        }
    } catch (_) {}
    return "guest";
}
const PLAN_LIMITS = {
    Free: 15 * 1024 * 1024 * 1024,
    Basic: 100 * 1024 * 1024 * 1024,
    Standard: 500 * 1024 * 1024 * 1024,
    Pro: 2000 * 1024 * 1024 * 1024,
    Business: 5000 * 1024 * 1024 * 1024 // 5 TB
};
class StorageService {
    cleanLegacySharedStorage() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            // Remove legacy unscoped keys that leaked across multiple accounts on same browser
            localStorage.removeItem("pingdart_cloud_folders");
            localStorage.removeItem("pingdart_cloud_files");
        } catch (_) {}
    }
    subscribe(cb) {
        this.listeners.add(cb);
        return ()=>this.listeners.delete(cb);
    }
    notify() {
        this.listeners.forEach((cb)=>{
            try {
                cb();
            } catch (e) {}
        });
    }
    /**
   * Synchronizes folders & files with MySQL database backend strictly for the authenticated user
   */ async syncWithServer() {
        if ("object" === "undefined" || this.isSyncing) return;
        this.isSyncing = true;
        try {
            const userKey = getCurrentUserKey();
            if (userKey !== this.currentLoadedUser) {
                this.loadFromStorage();
            }
            // If we have local files or folders, push them to the server so they become accessible across all devices
            const ownFolders = this.folders.filter((f)=>!f.isShared);
            const ownFiles = this.files.filter((f)=>!f.isShared);
            if (ownFiles.length > 0 || ownFolders.length > 0) {
                const serializableFiles = ownFiles.map((f)=>{
                    var _f_url, _f_url1, _f_thumbnailUrl, _f_thumbnailUrl1;
                    return {
                        ...f,
                        url: ((_f_url = f.url) === null || _f_url === void 0 ? void 0 : _f_url.startsWith("blob:")) || ((_f_url1 = f.url) === null || _f_url1 === void 0 ? void 0 : _f_url1.startsWith("data:")) && f.url.length > 10000 ? "" : f.url,
                        thumbnailUrl: ((_f_thumbnailUrl = f.thumbnailUrl) === null || _f_thumbnailUrl === void 0 ? void 0 : _f_thumbnailUrl.startsWith("blob:")) || ((_f_thumbnailUrl1 = f.thumbnailUrl) === null || _f_thumbnailUrl1 === void 0 ? void 0 : _f_thumbnailUrl1.startsWith("data:")) && f.thumbnailUrl.length > 10000 ? undefined : f.thumbnailUrl
                    };
                });
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/batch-sync", {
                    folders: ownFolders,
                    files: serializableFiles
                }).catch(()=>{});
            }
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/cloud-drive/sync");
            if (res.data && res.data.success && res.data.data) {
                var _sharedRes_data, _sharedRes_data1;
                let ownFolders = res.data.data.folders || [];
                let ownFiles = res.data.data.files || [];
                // Also fetch shared-with-me items
                const sharedRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/cloud-drive/shared-with-me").catch(()=>null);
                if ((sharedRes === null || sharedRes === void 0 ? void 0 : (_sharedRes_data = sharedRes.data) === null || _sharedRes_data === void 0 ? void 0 : _sharedRes_data.success) && (sharedRes === null || sharedRes === void 0 ? void 0 : (_sharedRes_data1 = sharedRes.data) === null || _sharedRes_data1 === void 0 ? void 0 : _sharedRes_data1.data)) {
                    const sharedFolders = sharedRes.data.data.folders || [];
                    const sharedFiles = sharedRes.data.data.files || [];
                    const folderIds = new Set(ownFolders.map((f)=>f.id));
                    for (const sf of sharedFolders){
                        if (!folderIds.has(sf.id)) {
                            ownFolders.push(sf);
                        }
                    }
                    const fileIds = new Set(ownFiles.map((f)=>f.id));
                    for (const sf of sharedFiles){
                        if (!fileIds.has(sf.id)) {
                            ownFiles.push(sf);
                        }
                    }
                }
                this.folders = ownFolders;
                this.files = ownFiles;
                if (res.data.data.quota) {
                    this.quota = {
                        ...this.quota,
                        usedBytes: res.data.data.quota.usedBytes || this.getQuota().usedBytes,
                        limitBytes: res.data.data.quota.limitBytes || this.quota.limitBytes,
                        planName: res.data.data.quota.planName || this.quota.planName
                    };
                }
                this.saveToStorage();
                this.notify();
            }
        } catch (e) {
            console.warn("[CloudDrive] Server sync error:", (e === null || e === void 0 ? void 0 : e.message) || e);
        } finally{
            this.isSyncing = false;
        }
    }
    loadFromStorage() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const userKey = getCurrentUserKey();
            this.currentLoadedUser = userKey;
            if (userKey === "guest") {
                this.folders = [];
                this.files = [];
                return;
            }
            const savedFolders = localStorage.getItem(`pingdart_cloud_folders_${userKey}`);
            const savedFiles = localStorage.getItem(`pingdart_cloud_files_${userKey}`);
            const savedPlan = localStorage.getItem(`pingdart_cloud_plan_${userKey}`);
            this.folders = savedFolders ? JSON.parse(savedFolders) : [];
            this.files = savedFiles ? JSON.parse(savedFiles) : [];
            if (savedPlan && savedPlan in PLAN_LIMITS) {
                this.quota.planName = savedPlan;
                this.quota.limitBytes = PLAN_LIMITS[savedPlan];
            }
        } catch (e) {
            console.warn("Could not load cloud storage state from localStorage", e);
        }
    }
    saveToStorage() {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        try {
            const userKey = getCurrentUserKey();
            if (userKey === "guest") return;
            const serializableFiles = this.files.map((f)=>{
                const url = f.url || "";
                const isLargeDataUrl = url.startsWith("data:") && url.length > 500_000;
                const isBlobUrl = url.startsWith("blob:");
                if (isLargeDataUrl || isBlobUrl) {
                    return {
                        ...f,
                        url: "",
                        thumbnailUrl: undefined
                    };
                }
                return f;
            });
            localStorage.setItem(`pingdart_cloud_folders_${userKey}`, JSON.stringify(this.folders));
            localStorage.setItem(`pingdart_cloud_files_${userKey}`, JSON.stringify(serializableFiles));
            localStorage.setItem(`pingdart_cloud_plan_${userKey}`, this.quota.planName);
        } catch (e) {
            console.warn("Could not save cloud storage state to localStorage", e);
        }
    }
    getQuota() {
        this.ensureUserContext();
        const totalSize = this.files.filter((f)=>!f.isTrash).reduce((acc, f)=>acc + Number(f.size || 0), 0);
        return {
            ...this.quota,
            usedBytes: totalSize
        };
    }
    ensureUserContext() {
        const userKey = getCurrentUserKey();
        if (userKey !== this.currentLoadedUser) {
            this.loadFromStorage();
        }
    }
    setPlan(plan) {
        this.ensureUserContext();
        this.quota.planName = plan;
        this.quota.limitBytes = PLAN_LIMITS[plan];
        this.saveToStorage();
        this.notify();
        if ("TURBOPACK compile-time truthy", 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/plan", {
                planName: plan
            }).catch(()=>{});
        }
        return this.getQuota();
    }
    getFolders(parentId = null) {
        this.ensureUserContext();
        return this.folders.filter((f)=>!f.isTrash && f.parentId === parentId);
    }
    getAllFolders() {
        this.ensureUserContext();
        return this.folders.filter((f)=>!f.isTrash);
    }
    getFiles(folderId = null) {
        this.ensureUserContext();
        return this.files.filter((f)=>!f.isTrash && f.folderId === folderId);
    }
    getCategoryFiles(category) {
        this.ensureUserContext();
        if (category === "photos") {
            return this.files.filter((f)=>!f.isTrash && (f.category === "image" || f.category === "video"));
        }
        if (category === "documents") {
            return this.files.filter((f)=>!f.isTrash && f.category === "document");
        }
        if (category === "starred") {
            return this.files.filter((f)=>!f.isTrash && f.isStarred);
        }
        if (category === "vault") {
            return this.files.filter((f)=>!f.isTrash && f.isEncrypted);
        }
        if (category === "shared") {
            return this.files.filter((f)=>!f.isTrash && f.sharedWithMe);
        }
        if (category === "trash") {
            return this.files.filter((f)=>f.isTrash);
        }
        if (category === "recent") {
            return [
                ...this.files
            ].filter((f)=>!f.isTrash).sort((a, b)=>new Date(b.updatedAt || b.createdAt).getTime() - new Date(a.updatedAt || a.createdAt).getTime());
        }
        return this.getFiles(null);
    }
    createFolder(name, parentId = null, color) {
        this.ensureUserContext();
        const newFolder = {
            id: `folder_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
            parentId: parentId || null,
            name,
            color: color || "#2563eb",
            itemCount: 0,
            sizeBytes: 0,
            isStarred: false,
            isTrash: false,
            createdAt: new Date().toISOString()
        };
        this.folders.unshift(newFolder);
        this.saveToStorage();
        this.notify();
        if ("TURBOPACK compile-time truthy", 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/folders", newFolder).catch((e)=>console.warn("[CloudDrive] Folder push failed", e));
        }
        return newFolder;
    }
    addFile(file) {
        var _file_mimeType, _file_mimeType1, _file_mimeType2, _file_mimeType3, _file_mimeType4, _file_mimeType5, _file_mimeType6, _file_mimeType7, _file_mimeType8;
        this.ensureUserContext();
        const nameLower = (file.name || "").toLowerCase();
        const isImg = ((_file_mimeType = file.mimeType) === null || _file_mimeType === void 0 ? void 0 : _file_mimeType.startsWith("image/")) || nameLower.endsWith(".png") || nameLower.endsWith(".jpg") || nameLower.endsWith(".jpeg") || nameLower.endsWith(".webp") || nameLower.endsWith(".gif") || nameLower.endsWith(".svg");
        const category = isImg ? "image" : ((_file_mimeType1 = file.mimeType) === null || _file_mimeType1 === void 0 ? void 0 : _file_mimeType1.startsWith("video/")) || nameLower.endsWith(".mp4") || nameLower.endsWith(".webm") || nameLower.endsWith(".mov") ? "video" : ((_file_mimeType2 = file.mimeType) === null || _file_mimeType2 === void 0 ? void 0 : _file_mimeType2.startsWith("audio/")) || nameLower.endsWith(".mp3") || nameLower.endsWith(".wav") ? "audio" : ((_file_mimeType3 = file.mimeType) === null || _file_mimeType3 === void 0 ? void 0 : _file_mimeType3.includes("pdf")) || ((_file_mimeType4 = file.mimeType) === null || _file_mimeType4 === void 0 ? void 0 : _file_mimeType4.includes("word")) || ((_file_mimeType5 = file.mimeType) === null || _file_mimeType5 === void 0 ? void 0 : _file_mimeType5.includes("sheet")) || ((_file_mimeType6 = file.mimeType) === null || _file_mimeType6 === void 0 ? void 0 : _file_mimeType6.includes("text")) || nameLower.endsWith(".pdf") || nameLower.endsWith(".doc") || nameLower.endsWith(".docx") || nameLower.endsWith(".txt") ? "document" : ((_file_mimeType7 = file.mimeType) === null || _file_mimeType7 === void 0 ? void 0 : _file_mimeType7.includes("zip")) || ((_file_mimeType8 = file.mimeType) === null || _file_mimeType8 === void 0 ? void 0 : _file_mimeType8.includes("tar")) || nameLower.endsWith(".zip") || nameLower.endsWith(".rar") || nameLower.endsWith(".7z") ? "archive" : "other";
        const mediaUrl = file.url || "";
        const thumbUrl = file.thumbnailUrl || (isImg ? mediaUrl : undefined);
        const newFile = {
            id: file.id || `file_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
            name: file.name || "Untitled_File",
            size: file.size || 1024,
            mimeType: file.mimeType || (isImg ? "image/png" : "application/octet-stream"),
            folderId: file.folderId || null,
            url: mediaUrl,
            thumbnailUrl: thumbUrl,
            category,
            isEncrypted: Boolean(file.isEncrypted),
            isStarred: Boolean(file.isStarred),
            isTrash: Boolean(file.isTrash),
            createdAt: file.createdAt || new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        this.files = this.files.filter((f)=>f.id !== newFile.id);
        this.files.unshift(newFile);
        this.saveToStorage();
        this.notify();
        if ("TURBOPACK compile-time truthy", 1) {
            const isLargeDataUrl = mediaUrl.startsWith("data:") && mediaUrl.length > 5000;
            const isBlob = mediaUrl.startsWith("blob:");
            const payloadFile = {
                ...newFile,
                url: isLargeDataUrl || isBlob ? "" : mediaUrl,
                thumbnailUrl: isLargeDataUrl || isBlob ? undefined : thumbUrl
            };
            if (payloadFile.url) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/files", payloadFile).catch((e)=>console.warn("[CloudDrive] File push failed", e));
            }
        }
        return newFile;
    }
    getFileById(fileId) {
        this.ensureUserContext();
        return this.files.find((f)=>f.id === fileId || fileId.includes(f.id) || f.id.includes(fileId));
    }
    getAllFiles() {
        this.ensureUserContext();
        return this.files.filter((f)=>!f.isTrash);
    }
    getStarredFolders() {
        this.ensureUserContext();
        return this.folders.filter((f)=>!f.isTrash && f.isStarred);
    }
    getTrashFolders() {
        this.ensureUserContext();
        return this.folders.filter((f)=>f.isTrash);
    }
    toggleFolderStar(folderId) {
        this.ensureUserContext();
        const f = this.folders.find((item)=>item.id === folderId);
        if (f) {
            f.isStarred = !f.isStarred;
            this.saveToStorage();
            this.notify();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/folders", f).catch((e)=>console.warn("[CloudDrive] toggleFolderStar error", e));
        }
    }
    toggleFolderTrash(folderId) {
        this.ensureUserContext();
        const f = this.folders.find((item)=>item.id === folderId);
        if (f) {
            f.isTrash = !f.isTrash;
            this.saveToStorage();
            this.notify();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/folders", f).catch((e)=>console.warn("[CloudDrive] toggleFolderTrash error", e));
        }
    }
    deleteFolderPermanently(folderId) {
        this.ensureUserContext();
        this.folders = this.folders.filter((f)=>f.id !== folderId);
        this.files = this.files.filter((f)=>f.folderId !== folderId);
        this.saveToStorage();
        this.notify();
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/folders/${folderId}`).catch((e)=>console.warn("[CloudDrive] deleteFolder error", e));
    }
    emptyTrash() {
        this.ensureUserContext();
        const trashFiles = this.files.filter((f)=>f.isTrash);
        const trashFolders = this.folders.filter((f)=>f.isTrash);
        this.files = this.files.filter((f)=>!f.isTrash);
        this.folders = this.folders.filter((f)=>!f.isTrash);
        this.saveToStorage();
        this.notify();
        trashFiles.forEach((f)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/files/${f.id}`).catch(()=>{});
        });
        trashFolders.forEach((f)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/folders/${f.id}`).catch(()=>{});
        });
    }
    toggleStar(fileId) {
        this.ensureUserContext();
        const f = this.files.find((item)=>item.id === fileId);
        if (f) {
            f.isStarred = !f.isStarred;
            this.saveToStorage();
            this.notify();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/cloud-drive/files/${fileId}`, {
                isStarred: f.isStarred
            }).catch((e)=>console.warn("[CloudDrive] toggleStar error", e));
        }
    }
    toggleTrash(fileId) {
        this.ensureUserContext();
        const f = this.files.find((item)=>item.id === fileId);
        if (f) {
            f.isTrash = !f.isTrash;
            this.saveToStorage();
            this.notify();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/cloud-drive/files/${fileId}`, {
                isTrash: f.isTrash
            }).catch((e)=>console.warn("[CloudDrive] toggleTrash error", e));
        }
    }
    deletePermanently(fileId) {
        this.ensureUserContext();
        this.files = this.files.filter((item)=>item.id !== fileId);
        this.saveToStorage();
        this.notify();
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/files/${fileId}`).catch((e)=>console.warn("[CloudDrive] deletePermanently error", e));
    }
    async updateFileUrl(fileId, url) {
        this.ensureUserContext();
        const f = this.files.find((item)=>item.id === fileId);
        if (f) {
            f.url = url;
            if (f.category === "image") f.thumbnailUrl = url;
            f.updatedAt = new Date().toISOString();
            this.saveToStorage();
            this.notify();
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/files", f);
                return true;
            } catch (e) {
                console.warn("[CloudDrive] updateFileUrl error", e);
            }
        }
        return false;
    }
    savePublicShareLink(file, link) {
        var _link_publicUrl_split_;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const token = ((_link_publicUrl_split_ = link.publicUrl.split("/share/")[1]) === null || _link_publicUrl_split_ === void 0 ? void 0 : _link_publicUrl_split_.replace(/\/+$/, "")) || file.id;
        try {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cloud-share", {
                token,
                file,
                shareLink: link
            }).catch((e)=>console.warn("[CloudShare] backend push failed", e));
        } catch (e) {
            console.warn("[CloudShare] backend push error", e);
        }
    }
    generateShareLink(fileId, password, expiresDays) {
        this.loadFromStorage();
        const f = this.files.find((item)=>item.id === fileId || fileId.startsWith(item.id));
        const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebBaseUrl"])();
        const token = `${fileId}_${Math.random().toString(36).substr(2, 8)}`;
        const link = {
            publicUrl: `${baseUrl}/share/${token}`,
            isPasswordProtected: Boolean(password),
            password,
            expiresAt: expiresDays ? new Date(Date.now() + expiresDays * 86400000).toISOString() : undefined,
            accessCount: 0
        };
        if (f) {
            f.shareLink = link;
            this.saveToStorage();
            this.savePublicShareLink(f, link);
            this.notify();
        }
        return link;
    }
    getFileByShareToken(token) {
        var _f_shareLink, _f_shareLink1, _f_shareLink2;
        this.loadFromStorage();
        if (!token) return null;
        const cleanToken = decodeURIComponent(token).replace(/\/+$/, "").trim();
        let f = this.files.find((item)=>{
            if (item.id === cleanToken) return true;
            if (cleanToken.startsWith(item.id)) return true;
            if (item.id.startsWith(cleanToken)) return true;
            if (item.shareLink) {
                const publicUrl = item.shareLink.publicUrl.replace(/\/+$/, "");
                if (publicUrl.endsWith(cleanToken) || publicUrl.includes(cleanToken)) return true;
            }
            return false;
        });
        if (!f) return null;
        const isExpired = Boolean(((_f_shareLink = f.shareLink) === null || _f_shareLink === void 0 ? void 0 : _f_shareLink.expiresAt) && new Date(f.shareLink.expiresAt).getTime() < Date.now());
        if (f.shareLink) {
            f.shareLink.accessCount = (f.shareLink.accessCount || 0) + 1;
            this.saveToStorage();
            this.savePublicShareLink(f, f.shareLink);
        }
        return {
            file: f,
            isExpired,
            isPasswordProtected: Boolean((_f_shareLink1 = f.shareLink) === null || _f_shareLink1 === void 0 ? void 0 : _f_shareLink1.isPasswordProtected),
            password: (_f_shareLink2 = f.shareLink) === null || _f_shareLink2 === void 0 ? void 0 : _f_shareLink2.password
        };
    }
    getSharedFolders() {
        this.ensureUserContext();
        return this.folders.filter((f)=>f.isShared && !f.isTrash);
    }
    async shareFolder(folderId, email, permission = "write") {
        var _res_data;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/cloud-drive/folders/${folderId}/share`, {
            email,
            permission
        });
        if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
            await this.syncWithServer();
        }
        return res.data;
    }
    async unshareFolder(folderId, targetUserId) {
        var _res_data;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/cloud-drive/folders/${folderId}/share/${targetUserId}`);
        if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
            await this.syncWithServer();
        }
        return res.data;
    }
    async getFolderShares(folderId) {
        var _res_data;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/cloud-drive/folders/${folderId}/shares`);
        return ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.data) || [];
    }
    constructor(){
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "files", []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "folders", []);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "quota", {
            usedBytes: 0,
            limitBytes: PLAN_LIMITS.Free,
            planName: "Free",
            freeLimitBytes: PLAN_LIMITS.Free
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "listeners", new Set());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "isSyncing", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "currentLoadedUser", "");
        this.cleanLegacySharedStorage();
        this.loadFromStorage();
        if ("TURBOPACK compile-time truthy", 1) {
            setTimeout(()=>this.syncWithServer(), 100);
        }
    }
}
const storageApi = new StorageService();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StorageContentArea",
    ()=>StorageContentArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Grid02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Grid02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Menu01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Menu01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Folder01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Image01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Image01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Video01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/File01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MoreVerticalIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/MoreVerticalIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/StarIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Download01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Share01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Upload01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Add01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Refresh01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Refresh01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Menu02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Menu02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FilterIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FilterIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/storageApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// ─── VideoThumb ─────────────────────────────────────────────────────────────
// Renders a real video thumbnail captured from the first second of the video.
// Falls back to the VideoIcon if capture fails or src is unavailable.
function VideoThumb({ src, className }) {
    _s();
    const [thumb, setThumb] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [failed, setFailed] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "VideoThumb.useEffect": ()=>{
            if (!src) {
                setFailed(true);
                return;
            }
            let cancelled = false;
            const video = document.createElement("video");
            video.crossOrigin = "anonymous";
            video.muted = true;
            video.playsInline = true;
            video.preload = "metadata";
            video.src = src;
            const capture = {
                "VideoThumb.useEffect.capture": ()=>{
                    if (cancelled) return;
                    try {
                        var _canvas_getContext;
                        const canvas = document.createElement("canvas");
                        canvas.width = video.videoWidth || 640;
                        canvas.height = video.videoHeight || 360;
                        (_canvas_getContext = canvas.getContext("2d")) === null || _canvas_getContext === void 0 ? void 0 : _canvas_getContext.drawImage(video, 0, 0, canvas.width, canvas.height);
                        const data = canvas.toDataURL("image/jpeg", 0.8);
                        // If canvas is blank (all black or empty), toDataURL still returns data but it's tiny
                        if (!cancelled) setThumb(data);
                    } catch (e) {
                        if (!cancelled) setFailed(true);
                    }
                }
            }["VideoThumb.useEffect.capture"];
            video.addEventListener("loadedmetadata", {
                "VideoThumb.useEffect": ()=>{
                    video.currentTime = Math.min(1.5, (video.duration || 0) * 0.1);
                }
            }["VideoThumb.useEffect"], {
                once: true
            });
            video.addEventListener("seeked", capture, {
                once: true
            });
            video.addEventListener("error", {
                "VideoThumb.useEffect": ()=>{
                    if (!cancelled) setFailed(true);
                }
            }["VideoThumb.useEffect"], {
                once: true
            });
            video.load();
            return ({
                "VideoThumb.useEffect": ()=>{
                    cancelled = true;
                    video.src = "";
                }
            })["VideoThumb.useEffect"];
        }
    }["VideoThumb.useEffect"], [
        src
    ]);
    if (thumb) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative w-full h-full ${className !== null && className !== void 0 ? className : ""}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: thumb,
                    alt: "video thumbnail",
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-9 h-9 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center shadow-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            viewBox: "0 0 24 24",
                            fill: "white",
                            className: "w-5 h-5 ml-0.5",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8 5v14l11-7z"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 84,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this);
    }
    if (failed) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-12 h-12 rounded-2xl bg-white dark:bg-slate-700 flex items-center justify-center shadow-xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Video01Icon"], {
                size: 20,
                className: "text-purple-500"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this);
    }
    // Loading state — pulsing placeholder
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full rounded-xl bg-slate-200 dark:bg-slate-700 animate-pulse flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Video01Icon"], {
            size: 20,
            className: "text-purple-400 opacity-50"
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(VideoThumb, "XjRM4xgqxpjBRC0T9e/yvZaKk5U=");
_c = VideoThumb;
function StorageContentArea({ activeTab, currentFolder, folderPath, folders, files, selectedFileId, uploadProgress = {}, onSelectFile, onOpenFolder, onNavigateBreadcrumb, onToggleStar, onToggleTrash, onDeletePermanently, onToggleFolderStar, onToggleFolderTrash, onDeleteFolderPermanently, onEmptyTrash, onOpenShareModal, onShareFolder, onDownloadFile, onFileUpload, onToggleMobileSidebar, onNewFolderClick, onUploadFileClick, onBack }) {
    _s1();
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("grid");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("name");
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSyncing, setIsSyncing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [imgErrors, setImgErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "StorageContentArea.useEffect": ()=>{
            setImgErrors({});
        }
    }["StorageContentArea.useEffect"], [
        files,
        activeTab,
        currentFolder
    ]);
    const handleManualSync = async ()=>{
        setIsSyncing(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].syncWithServer();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Drive synced with cloud");
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Sync failed");
        } finally{
            setIsSyncing(false);
        }
    };
    // Filter and sort files
    const filteredFiles = files.filter((f)=>f.name.toLowerCase().includes(searchQuery.toLowerCase())).sort((a, b)=>{
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "size") return b.size - a.size;
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    });
    const filteredFolders = folders.filter((f)=>f.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const formatFileSize = (bytes)=>{
        if (bytes >= 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
        if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
        if (bytes >= 1024) return `${(bytes / 1024).toFixed(0)} KB`;
        return `${bytes} B`;
    };
    const formatDate = (dateStr)=>{
        if (!dateStr) return "Today";
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return "Today";
        const now = new Date();
        if (d.toDateString() === now.toDateString()) {
            return d.toLocaleTimeString([], {
                hour: "numeric",
                minute: "2-digit"
            });
        }
        return d.toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
            year: "numeric"
        });
    };
    const getFileIcon = (file)=>{
        if (file.category === "image") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Image01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image01Icon"], {
            size: 20,
            className: "text-pink-500"
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
            lineNumber: 221,
            columnNumber: 43
        }, this);
        if (file.category === "video") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Video01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Video01Icon"], {
            size: 20,
            className: "text-purple-500"
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
            lineNumber: 222,
            columnNumber: 43
        }, this);
        if (file.category === "document") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File01Icon"], {
            size: 20,
            className: "text-blue-500"
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
            lineNumber: 223,
            columnNumber: 46
        }, this);
        if (file.isEncrypted) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield01Icon"], {
            size: 20,
            className: "text-cyan-500"
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
            lineNumber: 224,
            columnNumber: 34
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File01Icon"], {
            size: 20,
            className: "text-slate-400"
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
            lineNumber: 225,
            columnNumber: 12
        }, this);
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        setIsDragging(true);
    };
    const handleDragLeave = (e)=>{
        e.preventDefault();
        setIsDragging(false);
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            onFileUpload(e.dataTransfer.files);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        className: "flex-1 flex flex-col h-full overflow-hidden bg-slate-50/50 dark:bg-[#0b141a] relative select-none",
        children: [
            isDragging && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-50 bg-blue-600/10 dark:bg-blue-950/40 backdrop-blur-xs border-4 border-dashed border-blue-500 flex flex-col items-center justify-center pointer-events-none animate-pulse",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 rounded-3xl bg-blue-600 text-white flex items-center justify-center shadow-2xl mb-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Upload01Icon"], {
                            size: 36
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                            lineNumber: 257,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                        lineNumber: 256,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base font-extrabold text-blue-600 dark:text-blue-400",
                        children: "Drop files here to upload to PingDart Cloud"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                lineNumber: 255,
                columnNumber: 9
            }, this),
            isNative || isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: `px-4 pt-[calc(0.6rem+env(safe-area-inset-top,0px))] pb-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white ${isNative ? "rounded-b-[20px]" : " rounded-b-[24px] "} shadow-md shrink-0 sticky top-0 z-40 select-none space-y-2.5`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 min-w-0 flex-1",
                                children: [
                                    currentFolder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNavigateBreadcrumb(folderPath.length - 2),
                                        className: "w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white shrink-0 active:scale-95 transition-all cursor-pointer shadow-xs",
                                        title: "Back",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                            lineNumber: 277,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 272,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onToggleMobileSidebar,
                                        className: "w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white shrink-0 active:scale-95 transition-all cursor-pointer shadow-xs",
                                        title: "Menu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Menu02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu02Icon"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                            lineNumber: 285,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 280,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-[16px] font-extrabold text-white tracking-tight truncate",
                                                children: currentFolder ? currentFolder.name : activeTab === "drive" ? "My Drive" : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                lineNumber: 291,
                                                columnNumber: 17
                                            }, this),
                                            folderPath.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[14px] text-blue-100/80 truncate",
                                                children: [
                                                    "Drive",
                                                    ...folderPath.map((f)=>f.name)
                                                ].join(" / ")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                lineNumber: 295,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 290,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleManualSync,
                                        disabled: isSyncing,
                                        className: "w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all active:scale-95 shadow-xs cursor-pointer disabled:opacity-50",
                                        title: "Sync & Refresh",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Refresh01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Refresh01Icon"], {
                                            size: 15,
                                            className: isSyncing ? "animate-spin" : ""
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                            lineNumber: 310,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 304,
                                        columnNumber: 15
                                    }, this),
                                    onNewFolderClick && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onNewFolderClick,
                                        className: "w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all active:scale-95 shadow-xs cursor-pointer",
                                        title: "New Folder",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                            size: 18,
                                            strokeWidth: 2.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                            lineNumber: 319,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 314,
                                        columnNumber: 17
                                    }, this),
                                    onUploadFileClick && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onUploadFileClick,
                                        className: "w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all active:scale-95 shadow-xs cursor-pointer",
                                        title: "Upload File",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Upload01Icon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                            lineNumber: 329,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 324,
                                        columnNumber: 17
                                    }, this),
                                    activeTab === "trash" && (filteredFiles.length > 0 || filteredFolders.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onEmptyTrash,
                                        className: "px-2.5 py-1 rounded-full bg-red-500/80 hover:bg-red-600 border border-white/20 text-white text-[11px] font-bold flex items-center gap-1 shadow-xs transition-all cursor-pointer shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                lineNumber: 339,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Empty"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                lineNumber: 340,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 335,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                        lineNumber: 269,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                        size: 14,
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-white/60"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 349,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        placeholder: "Search files & folders...",
                                        autoComplete: "off",
                                        className: "w-full pl-8 pr-3 py-1.5 text-xs rounded-full bg-white/15 dark:bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-1 focus:ring-white/40 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "h-7 px-2.5 rounded-full bg-white/15 border border-white/20 text-[11px] font-bold text-white flex items-center gap-1 shrink-0 active:scale-95 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FilterIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterIcon"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                    lineNumber: 364,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "capitalize",
                                                    children: sortBy
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                            lineNumber: 363,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 362,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                        align: "end",
                                        className: "w-36 p-1 rounded-xl bg-white dark:bg-[#161f2e] border border-slate-200 dark:border-slate-800 shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>setSortBy("name"),
                                                className: "text-xs font-semibold px-3 py-2 cursor-pointer",
                                                children: "Sort by Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                lineNumber: 369,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>setSortBy("date"),
                                                className: "text-xs font-semibold px-3 py-2 cursor-pointer",
                                                children: "Sort by Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                lineNumber: 372,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>setSortBy("size"),
                                                className: "text-xs font-semibold px-3 py-2 cursor-pointer",
                                                children: "Sort by Size"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                lineNumber: 375,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 361,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-white/15 p-0.5 rounded-full border border-white/20 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode("grid"),
                                        className: `p-1 rounded-full transition-all cursor-pointer ${viewMode === "grid" ? "bg-white text-blue-600 shadow-xs" : "text-white/70 hover:text-white"}`,
                                        title: "Grid View",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Grid02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid02Icon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                            lineNumber: 389,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 383,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode("list"),
                                        className: `p-1 rounded-full transition-all cursor-pointer ${viewMode === "list" ? "bg-white text-blue-600 shadow-xs" : "text-white/70 hover:text-white"}`,
                                        title: "List View",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Menu01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu01Icon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                            lineNumber: 397,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 391,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 382,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                        lineNumber: 347,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                lineNumber: 267,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "px-6 py-4 bg-white dark:bg-[#111827] border-b border-slate-200/80 dark:border-slate-800 shrink-0 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            (folderPath.length > 0 || onBack) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    if (folderPath.length > 0) {
                                        onNavigateBreadcrumb(folderPath.length - 2);
                                    } else if (onBack) {
                                        onBack();
                                    }
                                },
                                className: "p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer",
                                title: folderPath.length > 0 ? "Back to Previous Folder" : "Back to Main Screen",
                                "aria-label": "Back",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                    lineNumber: 419,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 407,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onToggleMobileSidebar,
                                className: "md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",
                                "aria-label": "Toggle navigation menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Menu02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu02Icon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                    lineNumber: 429,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 424,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 overflow-x-auto no-scrollbar",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onNavigateBreadcrumb(-1),
                                        className: "hover:text-blue-600 dark:hover:text-blue-400 capitalize transition-colors",
                                        children: activeTab === "drive" ? "My Drive" : activeTab
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 434,
                                        columnNumber: 15
                                    }, this),
                                    folderPath.map((folder, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                                    size: 14,
                                                    className: "text-slate-400 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                    lineNumber: 442,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>onNavigateBreadcrumb(idx),
                                                    className: "hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap",
                                                    children: folder.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, folder.id, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                            lineNumber: 441,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 433,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                        lineNumber: 404,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleManualSync,
                                disabled: isSyncing,
                                className: "p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all cursor-pointer disabled:opacity-50",
                                title: "Sync & Refresh Drive",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Refresh01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Refresh01Icon"], {
                                    size: 15,
                                    className: isSyncing ? "animate-spin text-blue-600" : ""
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                    lineNumber: 463,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 457,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full md:w-64",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                        size: 15,
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 468,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        placeholder: "Search files & folders...",
                                        autoComplete: "off",
                                        autoCapitalize: "off",
                                        autoCorrect: "off",
                                        spellCheck: false,
                                        className: "w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 469,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 467,
                                columnNumber: 13
                            }, this),
                            activeTab === "trash" && (filteredFiles.length > 0 || filteredFolders.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onEmptyTrash,
                                className: "py-1.5 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-all cursor-pointer shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 488,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Empty Trash"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 489,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 484,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 flex items-center gap-1.5 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FilterIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterIcon"], {
                                                    size: 14,
                                                    className: "text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                    lineNumber: 497,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "capitalize",
                                                    children: [
                                                        "Sort: ",
                                                        sortBy
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                    lineNumber: 498,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                            lineNumber: 496,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 495,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                        align: "end",
                                        className: "w-36 p-1 rounded-xl bg-white dark:bg-[#161f2e] border border-slate-200 dark:border-slate-800 shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>setSortBy("name"),
                                                className: "text-xs font-semibold px-3 py-2 cursor-pointer",
                                                children: "Sort by Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                lineNumber: 502,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>setSortBy("date"),
                                                className: "text-xs font-semibold px-3 py-2 cursor-pointer",
                                                children: "Sort by Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                lineNumber: 505,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>setSortBy("size"),
                                                className: "text-xs font-semibold px-3 py-2 cursor-pointer",
                                                children: "Sort by Size"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                lineNumber: 508,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 494,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-slate-100 dark:bg-slate-800/80 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode("grid"),
                                        className: `p-1.5 rounded-lg transition-all cursor-pointer ${viewMode === "grid" ? "bg-white dark:bg-[#111827] text-blue-600 shadow-xs" : "text-slate-400 hover:text-slate-600"}`,
                                        title: "Grid View",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Grid02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid02Icon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                            lineNumber: 522,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 516,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setViewMode("list"),
                                        className: `p-1.5 rounded-lg transition-all cursor-pointer ${viewMode === "list" ? "bg-white dark:bg-[#111827] text-blue-600 shadow-xs" : "text-slate-400 hover:text-slate-600"}`,
                                        title: "List View",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Menu01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu01Icon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                            lineNumber: 530,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 524,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 515,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                        lineNumber: 455,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                lineNumber: 403,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 pb-32 md:pb-6",
                children: [
                    filteredFolders.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[11px] font-extrabold uppercase tracking-wider text-slate-400",
                                children: [
                                    "Folders (",
                                    filteredFolders.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 542,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5",
                                children: filteredFolders.map((folder)=>{
                                    const subFolders = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].getFolders(folder.id).length;
                                    const fileCount = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].getFiles(folder.id).length;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>onOpenFolder(folder),
                                        className: "p-3 rounded-[10px] bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/80 dark:hover:border-blue-500 hover:shadow-md transition-all cursor-pointer group flex items-center justify-between gap-2.5 relative shadow-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2.5 min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-9 h-9 rounded-[8px] flex items-center justify-center text-white shrink-0 shadow-xs",
                                                        style: {
                                                            backgroundColor: folder.color || "#2563eb"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder01Icon"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                            lineNumber: 560,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xs font-bold text-slate-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400",
                                                                children: folder.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                lineNumber: 563,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[14px] text-slate-400 font-medium truncate mt-0.5",
                                                                children: folder.owner ? `Shared by ${folder.owner.name}` : `${subFolders > 0 ? `${subFolders} fld · ` : ""}${fileCount} ${fileCount === 1 ? "file" : "files"}`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                lineNumber: 566,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                        lineNumber: 562,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                lineNumber: 555,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                        asChild: true,
                                                        onClick: (e)=>e.stopPropagation(),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MoreVerticalIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreVerticalIcon"], {
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                lineNumber: 576,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                            lineNumber: 575,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                        lineNumber: 574,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                        align: "end",
                                                        className: "w-44 p-1 rounded-xl bg-white dark:bg-[#161f2e] border border-slate-200 dark:border-slate-800 shadow-xl",
                                                        children: folder.isTrash ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        onToggleFolderTrash === null || onToggleFolderTrash === void 0 ? void 0 : onToggleFolderTrash(folder.id);
                                                                    },
                                                                    className: "text-xs font-semibold px-3 py-2 text-emerald-600 dark:text-emerald-400 cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Upload01Icon"], {
                                                                            size: 14,
                                                                            className: "mr-2 rotate-180 text-emerald-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                            lineNumber: 589,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        "Put Back (Restore)"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                    lineNumber: 582,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                                                    className: "bg-slate-100 dark:bg-slate-800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                    lineNumber: 592,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        onDeleteFolderPermanently === null || onDeleteFolderPermanently === void 0 ? void 0 : onDeleteFolderPermanently(folder.id);
                                                                    },
                                                                    className: "text-xs font-semibold px-3 py-2 text-red-600 cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                                            size: 14,
                                                                            className: "mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                            lineNumber: 600,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        "Delete Permanently"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                    lineNumber: 593,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                !folder.isShared && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        onShareFolder === null || onShareFolder === void 0 ? void 0 : onShareFolder(folder);
                                                                    },
                                                                    className: "text-xs font-semibold px-3 py-2 cursor-pointer text-blue-600 dark:text-blue-400",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Share01Icon"], {
                                                                            size: 14,
                                                                            className: "mr-2 text-blue-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                            lineNumber: 614,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        "Share Folder"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                    lineNumber: 607,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        onToggleFolderStar === null || onToggleFolderStar === void 0 ? void 0 : onToggleFolderStar(folder.id);
                                                                    },
                                                                    className: "text-xs font-semibold px-3 py-2 cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"], {
                                                                            size: 14,
                                                                            className: "mr-2 text-amber-500"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                            lineNumber: 625,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        folder.isStarred ? "Unstar Folder" : "Star Folder"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                    lineNumber: 618,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                                                    className: "bg-slate-100 dark:bg-slate-800"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                    lineNumber: 628,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                    onClick: (e)=>{
                                                                        e.stopPropagation();
                                                                        onToggleFolderTrash === null || onToggleFolderTrash === void 0 ? void 0 : onToggleFolderTrash(folder.id);
                                                                    },
                                                                    className: "text-xs font-semibold px-3 py-2 text-red-600 cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                                            size: 14,
                                                                            className: "mr-2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                            lineNumber: 636,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        "Move to Trash"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                    lineNumber: 629,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                        lineNumber: 579,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                lineNumber: 573,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, folder.id, true, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 550,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 545,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                        lineNumber: 541,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-[11px] font-extrabold uppercase tracking-wider text-slate-400",
                                    children: [
                                        "Files (",
                                        filteredFiles.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                    lineNumber: 653,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 652,
                                columnNumber: 11
                            }, this),
                            filteredFiles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-60 flex flex-col items-center justify-center text-center p-6 bg-white dark:bg-[#111827] rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Upload01Icon"], {
                                        size: 32,
                                        className: "text-slate-300 dark:text-slate-600 mb-2.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 660,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold text-slate-700 dark:text-slate-300",
                                        children: activeTab === "trash" ? "Trash is empty" : "No files found in this folder"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 661,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-400 mt-1",
                                        children: activeTab === "trash" ? "Deleted files and folders will appear here." : "Tap upload or drag and drop files to store them securely."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 664,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 659,
                                columnNumber: 13
                            }, this) : viewMode === "grid" ? /* ── GRID VIEW (Responsive 2-col on mobile, up to 4-col on desktop) ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4",
                                children: filteredFiles.map((file)=>{
                                    var _file_mimeType, _file_mimeType1;
                                    const isSelected = selectedFileId === file.id;
                                    const nameLower = file.name.toLowerCase();
                                    const isImg = file.category === "image" || ((_file_mimeType = file.mimeType) === null || _file_mimeType === void 0 ? void 0 : _file_mimeType.startsWith("image/")) || nameLower.endsWith(".png") || nameLower.endsWith(".jpg") || nameLower.endsWith(".jpeg") || nameLower.endsWith(".webp") || nameLower.endsWith(".gif") || nameLower.endsWith(".svg");
                                    const isVideo = file.category === "video" || ((_file_mimeType1 = file.mimeType) === null || _file_mimeType1 === void 0 ? void 0 : _file_mimeType1.startsWith("video/")) || nameLower.endsWith(".mp4") || nameLower.endsWith(".webm") || nameLower.endsWith(".mov");
                                    // Show thumbnailUrl for both images and videos (video thumbnails captured via canvas)
                                    const rawThumb = file.thumbnailUrl || (isImg ? file.url : null);
                                    const thumbSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(rawThumb);
                                    const mediaSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(file.url || file.thumbnailUrl || "");
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>onSelectFile(file),
                                        className: `p-2.5 sm:p-3 rounded-[10px] border transition-all cursor-pointer relative group flex flex-col justify-between shadow-xs ${isSelected ? "bg-blue-50/60 dark:bg-blue-950/40 border-blue-500 dark:border-blue-500 shadow-md ring-2 ring-blue-500/20" : "bg-white dark:bg-[#111827] border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-28 sm:h-34 w-full rounded-[10px] sm:rounded-[10px] bg-slate-100 dark:bg-slate-800/60 overflow-hidden flex items-center justify-center relative mb-2",
                                                children: [
                                                    isVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VideoThumb, {
                                                        src: mediaSrc || ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                        lineNumber: 711,
                                                        columnNumber: 25
                                                    }, this) : thumbSrc && !imgErrors[file.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: thumbSrc,
                                                        alt: file.name,
                                                        className: "w-full h-full object-cover",
                                                        onError: ()=>setImgErrors((prev)=>({
                                                                    ...prev,
                                                                    [file.id]: true
                                                                }))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                        lineNumber: 713,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center shadow-xs",
                                                        children: getFileIcon(file)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                        lineNumber: 720,
                                                        columnNumber: 25
                                                    }, this),
                                                    uploadProgress[file.id] !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center rounded-lg sm:rounded-xl gap-1.5 p-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-white text-[14px] font-bold",
                                                                children: uploadProgress[file.id] < 100 ? `${uploadProgress[file.id]}%` : "Processing..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                lineNumber: 728,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full h-1 bg-white/20 rounded-full overflow-hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-full bg-blue-400 rounded-full transition-all duration-300",
                                                                    style: {
                                                                        width: `${uploadProgress[file.id]}%`
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                    lineNumber: 732,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                lineNumber: 731,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                        lineNumber: 727,
                                                        columnNumber: 25
                                                    }, this),
                                                    file.isEncrypted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-md bg-cyan-600/90 backdrop-blur-xs text-white text-[8px] font-extrabold flex items-center gap-0.5 shadow-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                                                size: 9
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                lineNumber: 743,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "E2EE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                lineNumber: 744,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                        lineNumber: 742,
                                                        columnNumber: 25
                                                    }, this),
                                                    file.isStarred && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"], {
                                                        size: 14,
                                                        className: "absolute top-1.5 right-1.5 text-amber-500 fill-amber-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                        lineNumber: 750,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                lineNumber: 708,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-[11px] sm:text-xs font-bold text-slate-900 dark:text-white truncate flex-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 leading-tight",
                                                                children: file.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                lineNumber: 757,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                                        asChild: true,
                                                                        onClick: (e)=>e.stopPropagation(),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "p-0.5 sm:p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 shrink-0",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MoreVerticalIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreVerticalIcon"], {
                                                                                size: 14
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                lineNumber: 765,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                            lineNumber: 764,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                        lineNumber: 763,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                                        align: "end",
                                                                        className: "w-48 p-1 rounded-xl bg-white dark:bg-[#161f2e] border border-slate-200 dark:border-slate-800 shadow-xl",
                                                                        children: file.isTrash ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                    onClick: ()=>onToggleTrash(file.id),
                                                                                    className: "text-xs font-semibold px-3 py-2 text-emerald-600 dark:text-emerald-400 cursor-pointer",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Upload01Icon"], {
                                                                                            size: 14,
                                                                                            className: "mr-2 rotate-180 text-emerald-500"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                            lineNumber: 772,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        "Put Back (Restore)"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                    lineNumber: 771,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                                                                    className: "bg-slate-100 dark:bg-slate-800"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                    lineNumber: 775,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                    onClick: ()=>onDeletePermanently === null || onDeletePermanently === void 0 ? void 0 : onDeletePermanently(file.id),
                                                                                    className: "text-xs font-semibold px-3 py-2 text-red-600 cursor-pointer",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                                                            size: 14,
                                                                                            className: "mr-2"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                            lineNumber: 777,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        "Delete Permanently"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                    lineNumber: 776,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                    onClick: ()=>onSelectFile(file),
                                                                                    className: "text-xs font-semibold px-3 py-2 cursor-pointer",
                                                                                    children: "View Details & Preview"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                    lineNumber: 783,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                    onClick: ()=>onDownloadFile(file),
                                                                                    className: "text-xs font-semibold px-3 py-2 cursor-pointer",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Download01Icon"], {
                                                                                            size: 14,
                                                                                            className: "mr-2 text-blue-500"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                            lineNumber: 787,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        "Download"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                    lineNumber: 786,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                    onClick: ()=>onOpenShareModal(file),
                                                                                    className: "text-xs font-semibold px-3 py-2 cursor-pointer",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Share01Icon"], {
                                                                                            size: 14,
                                                                                            className: "mr-2 text-emerald-500"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                            lineNumber: 791,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        "Share Link"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                    lineNumber: 790,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                    onClick: ()=>onToggleStar(file.id),
                                                                                    className: "text-xs font-semibold px-3 py-2 cursor-pointer",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"], {
                                                                                            size: 14,
                                                                                            className: "mr-2 text-amber-500"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                            lineNumber: 795,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        file.isStarred ? "Unstar" : "Star"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                    lineNumber: 794,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                                                                    className: "bg-slate-100 dark:bg-slate-800"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                    lineNumber: 798,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                                    onClick: ()=>onToggleTrash(file.id),
                                                                                    className: "text-xs font-semibold px-3 py-2 text-red-600 cursor-pointer",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                                                            size: 14,
                                                                                            className: "mr-2"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                            lineNumber: 800,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        "Move to Trash"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                    lineNumber: 799,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                        lineNumber: 768,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                lineNumber: 762,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                        lineNumber: 756,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between text-[9px] sm:text-[14px] text-slate-400 font-medium pt-1 border-t border-slate-100 dark:border-slate-800/60",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-slate-600 dark:text-slate-300",
                                                                children: formatFileSize(file.size)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                lineNumber: 810,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "truncate",
                                                                children: formatDate(file.updatedAt || file.createdAt)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                lineNumber: 811,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                        lineNumber: 809,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                lineNumber: 755,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, file.id, true, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 699,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 672,
                                columnNumber: 13
                            }, this) : /* ── LIST VIEW (Mobile-friendly, responsive) ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-[#111827] rounded-[10px] border border-slate-200/80 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800/80 overflow-hidden shadow-xs",
                                children: filteredFiles.map((file)=>{
                                    var _file_mimeType;
                                    const isSelected = selectedFileId === file.id;
                                    const nameLower = file.name.toLowerCase();
                                    const isImg = file.category === "image" || ((_file_mimeType = file.mimeType) === null || _file_mimeType === void 0 ? void 0 : _file_mimeType.startsWith("image/")) || nameLower.endsWith(".png") || nameLower.endsWith(".jpg") || nameLower.endsWith(".jpeg") || nameLower.endsWith(".webp") || nameLower.endsWith(".gif") || nameLower.endsWith(".svg");
                                    const rawThumb = file.thumbnailUrl || (isImg ? file.url : null);
                                    const thumbSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(rawThumb);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>onSelectFile(file),
                                        className: `p-2.5 sm:p-3.5 flex items-center justify-between gap-3 transition-all cursor-pointer ${isSelected ? "bg-blue-50/70 dark:bg-blue-950/40" : "hover:bg-slate-50 dark:hover:bg-slate-800/50"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center shrink-0 border border-slate-200/60 dark:border-slate-700/60",
                                                        children: thumbSrc && !imgErrors[file.id] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: thumbSrc,
                                                            alt: file.name,
                                                            className: "w-full h-full object-cover",
                                                            onError: ()=>setImgErrors((prev)=>({
                                                                        ...prev,
                                                                        [file.id]: true
                                                                    }))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                            lineNumber: 846,
                                                            columnNumber: 27
                                                        }, this) : getFileIcon(file)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0 flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-xs font-bold text-slate-900 dark:text-white truncate",
                                                                children: file.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                lineNumber: 857,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5 text-[14px] text-slate-400 font-medium mt-0.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-slate-600 dark:text-slate-300 font-semibold",
                                                                        children: formatFileSize(file.size)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                        lineNumber: 861,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                        lineNumber: 862,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: formatDate(file.updatedAt || file.createdAt)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                        lineNumber: 863,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    file.isEncrypted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: "•"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                lineNumber: 866,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-cyan-600 dark:text-cyan-400 font-bold",
                                                                                children: "Encrypted"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                lineNumber: 867,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                lineNumber: 860,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                lineNumber: 843,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            onDownloadFile(file);
                                                        },
                                                        className: "p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-blue-600 transition-colors cursor-pointer",
                                                        title: "Download",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Download01Icon"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                            lineNumber: 883,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                        lineNumber: 875,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                                asChild: true,
                                                                onClick: (e)=>e.stopPropagation(),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MoreVerticalIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreVerticalIcon"], {
                                                                        size: 15
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                        lineNumber: 890,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                    lineNumber: 889,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                lineNumber: 888,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                                align: "end",
                                                                className: "w-48 p-1 rounded-xl bg-white dark:bg-[#161f2e] border border-slate-200 dark:border-slate-800 shadow-xl",
                                                                children: file.isTrash ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                            onClick: ()=>onToggleTrash(file.id),
                                                                            className: "text-xs font-semibold px-3 py-2 text-emerald-600 dark:text-emerald-400 cursor-pointer",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Upload01Icon"], {
                                                                                    size: 14,
                                                                                    className: "mr-2 rotate-180 text-emerald-500"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                    lineNumber: 897,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                "Put Back (Restore)"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                            lineNumber: 896,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                                                            className: "bg-slate-100 dark:bg-slate-800"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                            lineNumber: 900,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                            onClick: ()=>onDeletePermanently === null || onDeletePermanently === void 0 ? void 0 : onDeletePermanently(file.id),
                                                                            className: "text-xs font-semibold px-3 py-2 text-red-600 cursor-pointer",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                                                    size: 14,
                                                                                    className: "mr-2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                    lineNumber: 902,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                "Delete Permanently"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                            lineNumber: 901,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                            onClick: ()=>onSelectFile(file),
                                                                            className: "text-xs font-semibold px-3 py-2 cursor-pointer",
                                                                            children: "View Details & Preview"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                            lineNumber: 908,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                            onClick: ()=>onDownloadFile(file),
                                                                            className: "text-xs font-semibold px-3 py-2 cursor-pointer",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Download01Icon"], {
                                                                                    size: 14,
                                                                                    className: "mr-2 text-blue-500"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                    lineNumber: 912,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                "Download"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                            lineNumber: 911,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                            onClick: ()=>onOpenShareModal(file),
                                                                            className: "text-xs font-semibold px-3 py-2 cursor-pointer",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Share01Icon"], {
                                                                                    size: 14,
                                                                                    className: "mr-2 text-emerald-500"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                    lineNumber: 916,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                "Share Link"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                            lineNumber: 915,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                            onClick: ()=>onToggleStar(file.id),
                                                                            className: "text-xs font-semibold px-3 py-2 cursor-pointer",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"], {
                                                                                    size: 14,
                                                                                    className: "mr-2 text-amber-500"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                    lineNumber: 920,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                file.isStarred ? "Unstar" : "Star"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                            lineNumber: 919,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                                                            className: "bg-slate-100 dark:bg-slate-800"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                            lineNumber: 923,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                            onClick: ()=>onToggleTrash(file.id),
                                                                            className: "text-xs font-semibold px-3 py-2 text-red-600 cursor-pointer",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                                                    size: 14,
                                                                                    className: "mr-2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                                    lineNumber: 925,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                "Move to Trash"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                            lineNumber: 924,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                                lineNumber: 893,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                        lineNumber: 887,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                                lineNumber: 874,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, file.id, true, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                        lineNumber: 837,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                                lineNumber: 820,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                        lineNumber: 651,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                lineNumber: 538,
                columnNumber: 7
            }, this),
            (isNative || isMobile) && onUploadFileClick && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden fixed bottom-25 right-4 z-30 flex flex-col items-end gap-2.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onUploadFileClick,
                    className: "w-13 h-13 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 active:scale-95 transition-all cursor-pointer border border-white/20",
                    title: "Upload Files",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Upload01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Upload01Icon"], {
                        size: 22
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                        lineNumber: 949,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                    lineNumber: 944,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
                lineNumber: 943,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, this);
}
_s1(StorageContentArea, "+bOXyTTZj8zUmVpPitvImN9U8lU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c1 = StorageContentArea;
var _c, _c1;
__turbopack_context__.k.register(_c, "VideoThumb");
__turbopack_context__.k.register(_c1, "StorageContentArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileInspectorDrawer",
    ()=>FileInspectorDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Download01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Share01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/StarIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/File01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/LockIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Copy01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Copy01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Clock01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Clock01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Maximize01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Maximize01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SentIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Link01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Link01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserCircleIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Comment01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/storageApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
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
;
function FileInspectorDrawer({ file, allFiles = [], onClose, onDownload, onToggleStar, onToggleTrash, onDeletePermanently, onSelectFile }) {
    var _file_mimeType, _file_mimeType1, _file_mimeType2;
    _s();
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const isMobileLayout = isNative || isMobile;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("details");
    const [sharePassword, setSharePassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [shareDays, setShareDays] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(7);
    const [shareLink, setShareLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((file === null || file === void 0 ? void 0 : file.shareLink) || null);
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isViewerOpen, setIsViewerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // User Sharing Flow States
    const [isUserShareScreenOpen, setIsUserShareScreenOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userSearchQuery, setUserSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearchingUsers, setIsSearchingUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedUsers, setSelectedUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [shareMessage, setShareMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSendingShare, setIsSendingShare] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Touch Swipe State for Mobile Lightbox
    const [touchStartX, setTouchStartX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [touchEndX, setTouchEndX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Public Comments state inside Inspector Drawer
    const [drawerComments, setDrawerComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingDrawerComments, setIsLoadingDrawerComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [drawerCommentInput, setDrawerCommentInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isPostingDrawerComment, setIsPostingDrawerComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const getShareToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileInspectorDrawer.useCallback[getShareToken]": ()=>{
            var _file_shareLink;
            if (file === null || file === void 0 ? void 0 : file.id) return file.id;
            const pubUrl = (shareLink === null || shareLink === void 0 ? void 0 : shareLink.publicUrl) || (file === null || file === void 0 ? void 0 : (_file_shareLink = file.shareLink) === null || _file_shareLink === void 0 ? void 0 : _file_shareLink.publicUrl);
            if (pubUrl) {
                const parts = pubUrl.split("/share/");
                if (parts[1]) return parts[1].replace(/\/+$/, "");
            }
            return "";
        }
    }["FileInspectorDrawer.useCallback[getShareToken]"], [
        shareLink,
        file
    ]);
    const fetchDrawerComments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileInspectorDrawer.useCallback[fetchDrawerComments]": async ()=>{
            const targetId = (file === null || file === void 0 ? void 0 : file.id) || getShareToken();
            if (!targetId) return;
            try {
                setIsLoadingDrawerComments(true);
                const apiBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])();
                const res = await fetch(`${apiBase}/cloud-share/${encodeURIComponent(targetId)}/comments`);
                if (res.ok) {
                    const json = await res.json();
                    if (json.success && Array.isArray(json.data)) {
                        setDrawerComments(json.data);
                    }
                }
            } catch (e) {
                console.warn("[FileInspectorDrawer] Fetch comments error:", e);
            } finally{
                setIsLoadingDrawerComments(false);
            }
        }
    }["FileInspectorDrawer.useCallback[fetchDrawerComments]"], [
        file,
        getShareToken
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileInspectorDrawer.useEffect": ()=>{
            if (activeTab === "share") {
                fetchDrawerComments();
            }
        }
    }["FileInspectorDrawer.useEffect"], [
        activeTab,
        fetchDrawerComments
    ]);
    const handlePostDrawerComment = async (e)=>{
        e.preventDefault();
        const text = drawerCommentInput.trim();
        const token = getShareToken();
        if (!text || !token) return;
        setIsPostingDrawerComment(true);
        try {
            const activeToken = localStorage.getItem("access_token");
            const apiBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])();
            const res = await fetch(`${apiBase}/cloud-share/${encodeURIComponent(token)}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...activeToken ? {
                        Authorization: `Bearer ${activeToken}`
                    } : {}
                },
                body: JSON.stringify({
                    text
                })
            });
            if (res.ok) {
                setDrawerCommentInput("");
                await fetchDrawerComments();
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Comment posted!");
            }
        } catch (e) {
            console.error("[FileInspectorDrawer] Post comment error:", e);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to post comment");
        } finally{
            setIsPostingDrawerComment(false);
        }
    };
    // Filter all media files (images and videos) for gallery navigation
    const mediaFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileInspectorDrawer.useMemo[mediaFiles]": ()=>{
            const list = allFiles.length > 0 ? allFiles : file ? [
                file
            ] : [];
            return list.filter({
                "FileInspectorDrawer.useMemo[mediaFiles]": (f)=>{
                    var _f_mimeType, _f_mimeType1;
                    const n = (f.name || "").toLowerCase();
                    return f.category === "image" || f.category === "video" || ((_f_mimeType = f.mimeType) === null || _f_mimeType === void 0 ? void 0 : _f_mimeType.startsWith("image/")) || ((_f_mimeType1 = f.mimeType) === null || _f_mimeType1 === void 0 ? void 0 : _f_mimeType1.startsWith("video/")) || n.endsWith(".png") || n.endsWith(".jpg") || n.endsWith(".jpeg") || n.endsWith(".webp") || n.endsWith(".gif") || n.endsWith(".svg") || n.endsWith(".mp4") || n.endsWith(".webm") || n.endsWith(".mov");
                }
            }["FileInspectorDrawer.useMemo[mediaFiles]"]);
        }
    }["FileInspectorDrawer.useMemo[mediaFiles]"], [
        allFiles,
        file
    ]);
    const currentMediaIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "FileInspectorDrawer.useMemo[currentMediaIndex]": ()=>{
            if (!file) return -1;
            return mediaFiles.findIndex({
                "FileInspectorDrawer.useMemo[currentMediaIndex]": (m)=>m.id === file.id
            }["FileInspectorDrawer.useMemo[currentMediaIndex]"]);
        }
    }["FileInspectorDrawer.useMemo[currentMediaIndex]"], [
        mediaFiles,
        file
    ]);
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileInspectorDrawer.useCallback[handlePrev]": ()=>{
            if (mediaFiles.length <= 1 || currentMediaIndex === -1) return;
            const prevIdx = (currentMediaIndex - 1 + mediaFiles.length) % mediaFiles.length;
            onSelectFile === null || onSelectFile === void 0 ? void 0 : onSelectFile(mediaFiles[prevIdx]);
            setImgError(false);
        }
    }["FileInspectorDrawer.useCallback[handlePrev]"], [
        mediaFiles,
        currentMediaIndex,
        onSelectFile
    ]);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FileInspectorDrawer.useCallback[handleNext]": ()=>{
            if (mediaFiles.length <= 1 || currentMediaIndex === -1) return;
            const nextIdx = (currentMediaIndex + 1) % mediaFiles.length;
            onSelectFile === null || onSelectFile === void 0 ? void 0 : onSelectFile(mediaFiles[nextIdx]);
            setImgError(false);
        }
    }["FileInspectorDrawer.useCallback[handleNext]"], [
        mediaFiles,
        currentMediaIndex,
        onSelectFile
    ]);
    // Keyboard navigation when viewer is open
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileInspectorDrawer.useEffect": ()=>{
            if (!isViewerOpen) return;
            const handleKeyDown = {
                "FileInspectorDrawer.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "ArrowLeft") handlePrev();
                    else if (e.key === "ArrowRight") handleNext();
                    else if (e.key === "Escape") setIsViewerOpen(false);
                }
            }["FileInspectorDrawer.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "FileInspectorDrawer.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["FileInspectorDrawer.useEffect"];
        }
    }["FileInspectorDrawer.useEffect"], [
        isViewerOpen,
        handlePrev,
        handleNext
    ]);
    // Keyboard shortcut: Escape to close inspector drawer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileInspectorDrawer.useEffect": ()=>{
            const handleKeyDown = {
                "FileInspectorDrawer.useEffect.handleKeyDown": (e)=>{
                    if (e.key === "Escape" && !isViewerOpen) {
                        onClose();
                    }
                }
            }["FileInspectorDrawer.useEffect.handleKeyDown"];
            window.addEventListener("keydown", handleKeyDown);
            return ({
                "FileInspectorDrawer.useEffect": ()=>window.removeEventListener("keydown", handleKeyDown)
            })["FileInspectorDrawer.useEffect"];
        }
    }["FileInspectorDrawer.useEffect"], [
        isViewerOpen,
        onClose
    ]);
    // Search users with debounce
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FileInspectorDrawer.useEffect": ()=>{
            if (!isUserShareScreenOpen) return;
            const q = userSearchQuery.trim();
            if (q.length < 2) {
                setSearchResults([]);
                return;
            }
            const timer = setTimeout({
                "FileInspectorDrawer.useEffect.timer": async ()=>{
                    setIsSearchingUsers(true);
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].searchUsers(q);
                        if (res && res.users) {
                            setSearchResults(res.users);
                        }
                    } catch (err) {
                        console.warn("[Share] Search users error:", err);
                    } finally{
                        setIsSearchingUsers(false);
                    }
                }
            }["FileInspectorDrawer.useEffect.timer"], 300);
            return ({
                "FileInspectorDrawer.useEffect": ()=>clearTimeout(timer)
            })["FileInspectorDrawer.useEffect"];
        }
    }["FileInspectorDrawer.useEffect"], [
        userSearchQuery,
        isUserShareScreenOpen
    ]);
    // Touch Swipe Handlers
    const minSwipeDistance = 45;
    const onTouchStart = (e)=>{
        setTouchEndX(null);
        setTouchStartX(e.targetTouches[0].clientX);
    };
    const onTouchMove = (e)=>{
        setTouchEndX(e.targetTouches[0].clientX);
    };
    const onTouchEnd = ()=>{
        if (!touchStartX || !touchEndX) return;
        const distance = touchStartX - touchEndX;
        if (distance > minSwipeDistance) {
            handleNext();
        } else if (distance < -minSwipeDistance) {
            handlePrev();
        }
    };
    if (!file) return null;
    const formatFileSize = (bytes)=>{
        if (bytes >= 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
        if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
        if (bytes >= 1024) return `${(bytes / 1024).toFixed(0)} KB`;
        return `${bytes} Bytes`;
    };
    const formatDateTime = (dateStr)=>{
        if (!dateStr) return "Recent";
        const d = new Date(dateStr);
        if (isNaN(d.getTime())) return "Recent";
        return d.toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "2-digit"
        });
    };
    const handleGenerateShare = ()=>{
        const link = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].generateShareLink(file.id, sharePassword || undefined, shareDays);
        setShareLink(link);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Public share link created!");
    };
    const handleCopyLink = ()=>{
        const link = shareLink || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].generateShareLink(file.id, undefined, 7);
        if (link === null || link === void 0 ? void 0 : link.publicUrl) {
            navigator.clipboard.writeText(link.publicUrl);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Share link copied to clipboard!");
        }
    };
    const handleNativeShare = async ()=>{
        const link = shareLink || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].generateShareLink(file.id, undefined, 7);
        if (navigator.share && (link === null || link === void 0 ? void 0 : link.publicUrl)) {
            try {
                await navigator.share({
                    title: file.name,
                    text: `Check out "${file.name}" on PingDart Cloud Storage:`,
                    url: link.publicUrl
                });
            } catch (e) {
                handleCopyLink();
            }
        } else {
            handleCopyLink();
        }
    };
    const toggleUserSelection = (user)=>{
        setSelectedUsers((prev)=>{
            const exists = prev.some((u)=>u.id === user.id);
            if (exists) {
                return prev.filter((u)=>u.id !== user.id);
            } else {
                return [
                    ...prev,
                    user
                ];
            }
        });
    };
    const handleSendShareToUsers = async ()=>{
        if (selectedUsers.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select at least one user to share with");
            return;
        }
        setIsSendingShare(true);
        try {
            var _res_data;
            const userNames = selectedUsers.map((u)=>u.name).join(", ");
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/cloud-drive/share-with-users", {
                fileId: file.id,
                recipientUserIds: selectedUsers.map((u)=>u.id),
                message: shareMessage
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`"${file.name}" shared with ${userNames}!`);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`"${file.name}" shared with ${userNames}!`);
            }
            setIsUserShareScreenOpen(false);
            setSelectedUsers([]);
            setUserSearchQuery("");
            setShareMessage("");
        } catch (err) {
            console.warn("[ShareWithUsers] error:", (err === null || err === void 0 ? void 0 : err.message) || err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to share file with selected users");
        } finally{
            setIsSendingShare(false);
        }
    };
    const isImageOrVideo = file.category === "image" || file.category === "video" || ((_file_mimeType = file.mimeType) === null || _file_mimeType === void 0 ? void 0 : _file_mimeType.startsWith("image/")) || ((_file_mimeType1 = file.mimeType) === null || _file_mimeType1 === void 0 ? void 0 : _file_mimeType1.startsWith("video/"));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: onClose,
                className: "fixed inset-0 bg-black/50 backdrop-blur-xs z-[45] animate-in fade-in duration-200 cursor-pointer"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: isMobileLayout ? "fixed inset-0 z-[50] bg-white dark:bg-[#0b141a] flex flex-col select-none overflow-hidden animate-in fade-in slide-in-from-bottom duration-200" : "fixed inset-y-0 right-0 z-[50] w-full sm:w-[420px] lg:w-[450px] flex flex-col h-full border-l border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] select-none overflow-hidden shadow-2xl animate-in slide-in-from-right duration-200",
                children: isUserShareScreenOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col h-full bg-white dark:bg-[#0b141a] select-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `px-4 pt-[calc(0.6rem+env(safe-area-inset-top,0px))] pb-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white ${isNative ? "rounded-b-[20px]" : " rounded-b-[24px] "} shadow-md shrink-0 flex items-center justify-between gap-3`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5 min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsUserShareScreenOpen(false),
                                            className: "w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white shrink-0 active:scale-95 transition-all cursor-pointer shadow-xs",
                                            title: "Back",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                lineNumber: 405,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 400,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-sm font-bold text-white truncate leading-tight",
                                                    children: "Share with Users"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[14px] text-blue-100/80 truncate",
                                                    children: file.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 407,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 399,
                                    columnNumber: 15
                                }, this),
                                selectedUsers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-bold",
                                    children: [
                                        selectedUsers.length,
                                        " selected"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 418,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                            lineNumber: 395,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4 space-y-4 pb-32 md:pb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[11px] font-bold text-slate-500 uppercase tracking-wider",
                                            children: "Search PingDart Users"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 428,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                                    size: 16,
                                                    className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: userSearchQuery,
                                                    onChange: (e)=>setUserSearchQuery(e.target.value),
                                                    placeholder: "Search by name, email, phone, or @pingdart_id...",
                                                    autoComplete: "off",
                                                    autoFocus: true,
                                                    className: "w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 19
                                                }, this),
                                                isSearchingUsers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 443,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 431,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 427,
                                    columnNumber: 15
                                }, this),
                                selectedUsers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[11px] font-bold text-slate-500 uppercase tracking-wider",
                                            children: [
                                                "Selected Recipients (",
                                                selectedUsers.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 451,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-1.5",
                                            children: selectedUsers.map((u)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    onClick: ()=>toggleUserSelection(u),
                                                    className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 text-xs font-bold cursor-pointer hover:bg-blue-100 active:scale-95 transition-all shadow-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate max-w-[120px]",
                                                            children: u.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 461,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                            size: 12,
                                                            className: "text-blue-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 462,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, u.id, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 454,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 450,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[11px] font-bold text-slate-500 uppercase tracking-wider",
                                            children: userSearchQuery.trim().length >= 2 ? "Search Results" : "Type to find users"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 471,
                                            columnNumber: 17
                                        }, this),
                                        searchResults.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200/80 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800 overflow-hidden shadow-xs",
                                            children: searchResults.map((user)=>{
                                                const isSelected = selectedUsers.some((u)=>u.id === user.id);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>toggleUserSelection(user),
                                                    className: `p-3 flex items-center justify-between gap-3 cursor-pointer transition-colors ${isSelected ? "bg-blue-50/80 dark:bg-blue-950/50" : "hover:bg-slate-100/70 dark:hover:bg-slate-800/60"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 min-w-0 flex-1",
                                                            children: [
                                                                user.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(user.avatar),
                                                                    alt: user.name,
                                                                    className: "w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700 shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 490,
                                                                    columnNumber: 31
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs",
                                                                    children: user.name.charAt(0).toUpperCase()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 496,
                                                                    columnNumber: 31
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "min-w-0 flex-1",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "text-xs font-bold text-slate-900 dark:text-white truncate",
                                                                            children: user.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                            lineNumber: 502,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[14px] text-slate-400 truncate",
                                                                            children: user.pingId ? `@${user.pingId}` : user.email || user.phone
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                            lineNumber: 505,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 501,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `w-6 h-6 rounded-full flex items-center justify-center transition-all shrink-0 ${isSelected ? "bg-blue-600 text-white shadow-xs" : "border-2 border-slate-300 dark:border-slate-600"}`,
                                                            children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                                size: 14,
                                                                strokeWidth: 3
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                lineNumber: 517,
                                                                columnNumber: 44
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 511,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, user.id, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 480,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 476,
                                            columnNumber: 19
                                        }, this) : userSearchQuery.trim().length >= 2 && !isSearchingUsers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 text-center bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserCircleIcon"], {
                                                    size: 28,
                                                    className: "mx-auto text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 525,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-bold text-slate-600 dark:text-slate-300",
                                                    children: "No users found"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[14px] text-slate-400",
                                                    children: "Try searching with exact email, phone number, or @pingdart_id"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 527,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 524,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 text-center bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"], {
                                                    size: 28,
                                                    className: "mx-auto text-blue-500/70"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 533,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs font-bold text-slate-700 dark:text-slate-300",
                                                    children: "Find any PingDart User"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 534,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[14px] text-slate-400",
                                                    children: "Enter full name, email address, phone, or PingDart ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 537,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 532,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 470,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[11px] font-bold text-slate-500 uppercase tracking-wider",
                                            children: "Optional Note / Message"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 546,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: shareMessage,
                                            onChange: (e)=>setShareMessage(e.target.value),
                                            placeholder: "Add a message for the recipients...",
                                            rows: 2,
                                            className: "w-full p-2.5 text-xs rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 resize-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 549,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 545,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSendShareToUsers,
                                    disabled: selectedUsers.length === 0 || isSendingShare,
                                    className: "w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:opacity-95 text-white font-bold text-xs shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: isSendingShare ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                        lineNumber: 565,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                lineNumber: 568,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: selectedUsers.length === 0 ? "Select Users to Share" : `Share File with ${selectedUsers.length} User${selectedUsers.length !== 1 ? "s" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                lineNumber: 569,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 559,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                            lineNumber: 425,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                    lineNumber: 393,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        isMobileLayout ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `px-4 pt-[calc(0.6rem+env(safe-area-inset-top,0px))] pb-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white ${isNative ? "rounded-b-[20px]" : " rounded-b-[24px] "} shadow-md shrink-0 flex items-center justify-between gap-3`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5 min-w-0 flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: onClose,
                                            className: "w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white shrink-0 active:scale-95 transition-all cursor-pointer shadow-xs",
                                            title: "Back",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                lineNumber: 593,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 588,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-sm font-bold text-white truncate leading-tight",
                                                    children: file.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 596,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[14px] text-blue-100/80 capitalize",
                                                    children: [
                                                        file.category,
                                                        " · ",
                                                        formatFileSize(file.size)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 599,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 595,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 587,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onToggleStar(file.id),
                                            className: "w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white active:scale-95 transition-all cursor-pointer shadow-xs",
                                            title: "Star",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"], {
                                                size: 16,
                                                className: file.isStarred ? "fill-amber-300 text-amber-300" : "text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                lineNumber: 611,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 606,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onDownload(file),
                                            className: "w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white active:scale-95 transition-all cursor-pointer shadow-xs",
                                            title: "Download",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Download01Icon"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                lineNumber: 618,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 613,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 605,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                            lineNumber: 583,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-b border-slate-200/80 dark:border-slate-800 flex items-center justify-between shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File01Icon"], {
                                            size: 18,
                                            className: "text-blue-600 dark:text-blue-400 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 625,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xs font-bold text-slate-900 dark:text-white truncate",
                                            children: file.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 626,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 624,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
                                    "aria-label": "Close inspector drawer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                        lineNumber: 635,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 630,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                            lineNumber: 623,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto space-y-4 p-4 pb-28 md:pb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-50 dark:bg-slate-900/60 p-3 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shrink-0 shadow-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>{
                                                if (isImageOrVideo && file.url) {
                                                    setIsViewerOpen(true);
                                                }
                                            },
                                            className: `h-48 sm:h-56 w-full rounded-xl bg-slate-200/60 dark:bg-slate-800/80 overflow-hidden flex items-center justify-center relative shadow-inner group ${isImageOrVideo && file.url ? "cursor-pointer" : ""}`,
                                            children: file.category === "image" && file.url && !imgError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(file.url),
                                                        alt: file.name,
                                                        className: "w-full h-full object-contain bg-black/5 dark:bg-black/20 group-hover:scale-105 transition-transform duration-300",
                                                        onError: ()=>setImgError(true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                        lineNumber: 655,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all flex items-center justify-center pointer-events-none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-xs shadow-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Maximize01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Maximize01Icon"], {
                                                                size: 18
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                lineNumber: 663,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 662,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                        lineNumber: 661,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true) : file.category === "video" && file.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(file.url),
                                                controls: true,
                                                className: "w-full h-full object-contain bg-black/80"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                lineNumber: 668,
                                                columnNumber: 21
                                            }, this) : file.isEncrypted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center p-4 space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mx-auto shadow-xs",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockIcon"], {
                                                            size: 24
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 672,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                        lineNumber: 671,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-bold text-slate-800 dark:text-slate-200",
                                                        children: "AES-256 Encrypted File"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                        lineNumber: 674,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[14px] text-slate-400",
                                                        children: "Requires master secret key to decrypt inline preview."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                        lineNumber: 677,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                lineNumber: 670,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File01Icon"], {
                                                        size: 36,
                                                        className: "text-slate-400 mx-auto"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                        lineNumber: 683,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-slate-500",
                                                        children: file.mimeType
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                        lineNumber: 684,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                lineNumber: 682,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 644,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>onDownload(file),
                                            className: "w-full mt-3 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-xs shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Download01Icon"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 694,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Download (",
                                                        formatFileSize(file.size),
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 695,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 690,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 643,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl flex items-center gap-1 border border-slate-200/60 dark:border-slate-700/60",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab("details"),
                                            className: `flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeTab === "details" ? "bg-white dark:bg-[#111827] text-blue-600 dark:text-blue-400 shadow-xs" : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}`,
                                            children: "Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 701,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab("share"),
                                            className: `flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeTab === "share" ? "bg-white dark:bg-[#111827] text-blue-600 dark:text-blue-400 shadow-xs" : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}`,
                                            children: "Share"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 710,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveTab("versions"),
                                            className: `flex-1 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${activeTab === "versions" ? "bg-white dark:bg-[#111827] text-blue-600 dark:text-blue-400 shadow-xs" : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}`,
                                            children: "Versions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 719,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 700,
                                    columnNumber: 15
                                }, this),
                                activeTab === "details" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 text-xs",
                                    children: [
                                        file.isEncrypted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-900/60 flex items-center gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                                    size: 18,
                                                    className: "text-cyan-600 dark:text-cyan-400 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 735,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-cyan-900 dark:text-cyan-200 text-xs",
                                                            children: "E2EE Protected"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 737,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[14px] text-cyan-700 dark:text-cyan-400",
                                                            children: "Zero-knowledge client-side encryption"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 738,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 736,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 734,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-semibold text-slate-500",
                                                    children: "Security"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 743,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-slate-800 dark:text-slate-200",
                                                    children: "Standard HTTPS/AES-256"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 744,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 742,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-200/60 dark:border-slate-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400 font-medium",
                                                            children: "File Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 751,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-slate-800 dark:text-slate-200",
                                                            children: file.mimeType
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 752,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 750,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400 font-medium",
                                                            children: "File Size"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 755,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-slate-800 dark:text-slate-200",
                                                            children: formatFileSize(file.size)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 756,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 754,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400 font-medium",
                                                            children: "Created Date"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 759,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-slate-800 dark:text-slate-200",
                                                            children: formatDateTime(file.createdAt)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 760,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 758,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-400 font-medium",
                                                            children: "Last Modified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 763,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-slate-800 dark:text-slate-200",
                                                            children: formatDateTime(file.updatedAt || file.createdAt)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 764,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 762,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 749,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 pt-1",
                                            children: file.isTrash ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onToggleTrash(file.id),
                                                        className: "flex-1 py-2 px-3 rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 font-bold flex items-center justify-center gap-1.5 cursor-pointer hover:bg-emerald-100 active:scale-95 transition-all",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Put Back (Restore)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 776,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                        lineNumber: 772,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onDeletePermanently === null || onDeletePermanently === void 0 ? void 0 : onDeletePermanently(file.id),
                                                        className: "flex-1 py-2 px-3 rounded-xl border border-red-200 dark:border-red-900/60 bg-red-50 dark:bg-red-950/40 text-red-600 font-bold flex items-center justify-center gap-1.5 cursor-pointer hover:bg-red-100 active:scale-95 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                lineNumber: 782,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Delete Permanently"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                lineNumber: 783,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                        lineNumber: 778,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onToggleStar(file.id),
                                                        className: `flex-1 py-2 px-3 rounded-xl border font-bold flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-all ${file.isStarred ? "bg-amber-50 dark:bg-amber-950/60 text-amber-600 border-amber-300 dark:border-amber-800" : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"], {
                                                                size: 14,
                                                                className: file.isStarred ? "fill-amber-500 text-amber-500" : ""
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                lineNumber: 795,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: file.isStarred ? "Starred" : "Add Star"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                lineNumber: 796,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                        lineNumber: 788,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>onToggleTrash(file.id),
                                                        className: "flex-1 py-2 px-3 rounded-xl border border-red-200 dark:border-red-900/60 bg-red-50 dark:bg-red-950/40 text-red-600 font-bold flex items-center justify-center gap-1.5 cursor-pointer hover:bg-red-100 active:scale-95 transition-all",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                lineNumber: 803,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Move to Trash"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                lineNumber: 804,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                        lineNumber: 799,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 769,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 732,
                                    columnNumber: 17
                                }, this),
                                activeTab === "share" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3.5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50/60 dark:from-blue-950/40 dark:to-indigo-950/20 border border-blue-200/80 dark:border-blue-900/50 space-y-3 shadow-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/25",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"], {
                                                                size: 20
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                lineNumber: 819,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 818,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "min-w-0 flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-slate-900 dark:text-white text-xs",
                                                                    children: "Share with PingDart Users"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 822,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight",
                                                                    children: "Search by name, email, phone number, or @pingdart_id"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 825,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 821,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 817,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setIsUserShareScreenOpen(true),
                                                    className: "w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold text-xs shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 835,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Select Users & Share"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 836,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 831,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 816,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-3 shadow-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Link01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link01Icon"], {
                                                                size: 16
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                lineNumber: 844,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 843,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-bold text-slate-900 dark:text-white text-xs",
                                                                    children: "Public Share Link"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 847,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[14px] text-slate-400",
                                                                    children: "Accessible by anyone with the link"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 848,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 846,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 842,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 pt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-[11px] font-semibold text-slate-600 dark:text-slate-300",
                                                                    children: "Password (Optional)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 854,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "password",
                                                                    value: sharePassword,
                                                                    onChange: (e)=>setSharePassword(e.target.value),
                                                                    placeholder: "Protect with password...",
                                                                    className: "w-full px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 857,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 853,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-[11px] font-semibold text-slate-600 dark:text-slate-300",
                                                                    children: "Link Expiration"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 867,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    value: shareDays,
                                                                    onChange: (e)=>setShareDays(Number(e.target.value)),
                                                                    className: "w-full px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/40",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: 1,
                                                                            children: "1 Day"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                            lineNumber: 875,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: 7,
                                                                            children: "7 Days"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                            lineNumber: 876,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: 30,
                                                                            children: "30 Days"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                            lineNumber: 877,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: 0,
                                                                            children: "Never Expire"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                            lineNumber: 878,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 870,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 866,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2 pt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleGenerateShare,
                                                                    className: "flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-xs shadow-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Share01Icon"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                            lineNumber: 887,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Generate Link"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                            lineNumber: 888,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 883,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleNativeShare,
                                                                    className: "py-2 px-3 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 active:scale-[0.98] text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all",
                                                                    title: "Share / Copy",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Copy01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Copy01Icon"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                            lineNumber: 896,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Copy"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                            lineNumber: 897,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 891,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 882,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 852,
                                                    columnNumber: 21
                                                }, this),
                                                shareLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-2.5 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[14px] font-bold text-slate-500 uppercase",
                                                                    children: "Public Link"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 905,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleCopyLink,
                                                                    className: "text-blue-600 dark:text-blue-400 text-xs font-bold flex items-center gap-1 cursor-pointer",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Copy01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Copy01Icon"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                            lineNumber: 910,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: "Copy"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                            lineNumber: 911,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 906,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 904,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[14px] font-mono text-slate-500 break-all bg-slate-50 dark:bg-slate-950 p-2 rounded-lg border border-slate-200 dark:border-slate-800",
                                                            children: shareLink.publicUrl
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 914,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 903,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 841,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 space-y-3 shadow-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Comment01Icon"], {
                                                                        size: 16
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                        lineNumber: 926,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 925,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                            className: "font-bold text-slate-900 dark:text-white text-xs",
                                                                            children: "Public Link Comments"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                            lineNumber: 929,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[14px] text-slate-400",
                                                                            children: "View & reply to visitor feedback"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                            lineNumber: 930,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 928,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 924,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-[14px] font-bold",
                                                            children: drawerComments.length
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 933,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 923,
                                                    columnNumber: 21
                                                }, this),
                                                isLoadingDrawerComments ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400 text-center py-2 animate-pulse",
                                                    children: "Loading comments..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 940,
                                                    columnNumber: 23
                                                }, this) : drawerComments.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-400 text-center py-2 italic bg-white dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800",
                                                    children: "No comments posted on this share link yet."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 942,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2 max-h-48 overflow-y-auto pr-1",
                                                    children: drawerComments.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-2.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-[11px] space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-bold text-slate-900 dark:text-white",
                                                                            children: c.userName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                            lineNumber: 950,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[9px] text-slate-400",
                                                                            children: new Date(c.createdAt).toLocaleTimeString([], {
                                                                                hour: '2-digit',
                                                                                minute: '2-digit'
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                            lineNumber: 951,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 949,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-slate-600 dark:text-slate-300 leading-snug",
                                                                    children: c.text
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 953,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, c.id, true, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 948,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 946,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                    onSubmit: handlePostDrawerComment,
                                                    className: "flex gap-2 pt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            value: drawerCommentInput,
                                                            onChange: (e)=>setDrawerCommentInput(e.target.value),
                                                            placeholder: "Reply to comments...",
                                                            className: "flex-1 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 961,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "submit",
                                                            disabled: !drawerCommentInput.trim() || isPostingDrawerComment,
                                                            className: "px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs flex items-center gap-1 cursor-pointer transition-all shadow-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                                                    size: 13
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 973,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: isPostingDrawerComment ? "..." : "Send"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                    lineNumber: 974,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                            lineNumber: 968,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 960,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 922,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 814,
                                    columnNumber: 17
                                }, this),
                                activeTab === "versions" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-extrabold uppercase tracking-wider text-slate-400 text-[14px] flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Clock01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock01Icon"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                    lineNumber: 985,
                                                    columnNumber: 21
                                                }, this),
                                                "File Revision History"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 984,
                                            columnNumber: 19
                                        }, this),
                                        file.versions && file.versions.length > 0 ? file.versions.map((ver)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                className: "font-bold text-slate-900 dark:text-white",
                                                                children: [
                                                                    "Version ",
                                                                    ver.versionNumber
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                lineNumber: 993,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[14px] text-slate-400",
                                                                children: formatDateTime(ver.createdAt)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                                lineNumber: 994,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                        lineNumber: 992,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold text-slate-500",
                                                        children: formatFileSize(ver.size)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                        lineNumber: 996,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, ver.id, true, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                lineNumber: 991,
                                                columnNumber: 23
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-4 text-center text-slate-400 text-xs",
                                            children: "No prior file versions recorded."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 1000,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 983,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                            lineNumber: 641,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, this),
            isViewerOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col justify-between select-none animate-in fade-in duration-200",
                onTouchStart: onTouchStart,
                onTouchMove: onTouchMove,
                onTouchEnd: onTouchEnd,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-[calc(0.75rem+env(safe-area-inset-top,0px))] px-4 pb-3 flex items-center justify-between text-white bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsViewerOpen(false),
                                        className: "w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer shadow-lg shrink-0 border border-white/20",
                                        title: "Close Viewer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 1027,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                        lineNumber: 1022,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-bold text-white truncate",
                                                children: file.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                lineNumber: 1030,
                                                columnNumber: 17
                                            }, this),
                                            mediaFiles.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-300 font-semibold",
                                                children: [
                                                    currentMediaIndex + 1,
                                                    " of ",
                                                    mediaFiles.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                                lineNumber: 1034,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                        lineNumber: 1029,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                lineNumber: 1021,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onToggleStar(file.id),
                                        className: "w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer shadow-lg border border-white/20",
                                        title: "Star",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"], {
                                            size: 18,
                                            className: file.isStarred ? "fill-amber-400 text-amber-400" : "text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 1047,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                        lineNumber: 1042,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onDownload(file),
                                        className: "w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer shadow-lg shadow-blue-500/30 border border-white/20",
                                        title: "Download",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Download01Icon"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                            lineNumber: 1054,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                        lineNumber: 1049,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                lineNumber: 1041,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                        lineNumber: 1020,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden",
                        children: [
                            mediaFiles.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    handlePrev();
                                },
                                className: "hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 active:scale-90 items-center justify-center text-white transition-all z-20 cursor-pointer shadow-xl border border-white/20",
                                title: "Previous (Left Arrow)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 1071,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                lineNumber: 1063,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full flex items-center justify-center transition-all duration-200",
                                children: file.category === "image" || ((_file_mimeType2 = file.mimeType) === null || _file_mimeType2 === void 0 ? void 0 : _file_mimeType2.startsWith("image/")) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(file.url),
                                    alt: file.name,
                                    className: "max-h-[78vh] max-w-[96vw] object-contain rounded-lg shadow-2xl transition-all"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 1078,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(file.url),
                                    controls: true,
                                    autoPlay: true,
                                    className: "max-h-[78vh] max-w-[96vw] object-contain rounded-lg shadow-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 1084,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                lineNumber: 1076,
                                columnNumber: 13
                            }, this),
                            mediaFiles.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    handleNext();
                                },
                                className: "hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/30 active:scale-90 items-center justify-center text-white transition-all z-20 cursor-pointer shadow-xl border border-white/20",
                                title: "Next (Right Arrow)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                    size: 22
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                    lineNumber: 1103,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                lineNumber: 1095,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                        lineNumber: 1060,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pb-[calc(1rem+env(safe-area-inset-bottom,0px))] pt-2 px-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col items-center gap-1.5 z-10 text-white",
                        children: [
                            mediaFiles.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px] text-slate-400 font-medium sm:hidden",
                                children: [
                                    "Swipe left / right to browse ",
                                    mediaFiles.length,
                                    " files"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                lineNumber: 1111,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 text-xs font-semibold text-slate-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: formatFileSize(file.size)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                        lineNumber: 1116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                        lineNumber: 1117,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: file.mimeType
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                        lineNumber: 1118,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                        lineNumber: 1119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: formatDateTime(file.updatedAt || file.createdAt)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                        lineNumber: 1120,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                                lineNumber: 1115,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                        lineNumber: 1109,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx",
                lineNumber: 1013,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(FileInspectorDrawer, "kKbNW5rVCeD4vof2Lf7G6upcRpc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = FileInspectorDrawer;
var _c;
__turbopack_context__.k.register(_c, "FileInspectorDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoragePlansModal",
    ()=>StoragePlansModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/storageApi.ts [app-client] (ecmascript)");
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
const PLANS = [
    {
        id: "Free",
        name: "Free Baseline",
        storage: "15 GB",
        tagline: "Essential storage for personal messages & media",
        usdMonthly: "$0",
        usdYearly: "$0",
        inrMonthly: "₹0",
        inrYearly: "₹0",
        features: [
            "15 GB Workspace Cloud Storage",
            "AES-256 Encrypted Vault included",
            "Instant multi-device auto sync",
            "Standard Upload & Download Speeds"
        ]
    },
    {
        id: "Basic",
        name: "Basic Drive",
        storage: "100 GB",
        tagline: "Extra capacity for photos & daily documents",
        usdMonthly: "$1.99",
        usdYearly: "$19.99",
        inrMonthly: "₹99",
        inrYearly: "₹999",
        features: [
            "100 GB High-Speed SSD Storage",
            "Encrypted Vault with PIN Protection",
            "Expiring Public Share Links",
            "Priority Upload Pipeline"
        ]
    },
    {
        id: "Standard",
        name: "Standard Drive",
        storage: "500 GB",
        tagline: "Recommended for creators & media libraries",
        usdMonthly: "$4.99",
        usdYearly: "$49.99",
        inrMonthly: "₹249",
        inrYearly: "₹2,490",
        popular: true,
        features: [
            "500 GB High-Performance Storage",
            "File Version History (Up to 30 days)",
            "Password-Protected Shared Links",
            "4K Video Streaming & Inline Player"
        ]
    },
    {
        id: "Pro",
        name: "Pro Creator",
        storage: "2 TB",
        tagline: "Massive storage for power users & photographers",
        usdMonthly: "$9.99",
        usdYearly: "$99.99",
        inrMonthly: "₹499",
        inrYearly: "₹4,990",
        bestValue: true,
        features: [
            "2 TB Massive Cloud Storage",
            "Unlimited File Revisions & History",
            "Advanced Zero-Knowledge E2EE Vault",
            "Shared Workspace Team Folders"
        ]
    },
    {
        id: "Business",
        name: "Business Suite",
        storage: "5 TB",
        tagline: "Enterprise-grade space & administrative controls",
        usdMonthly: "$19.99",
        usdYearly: "$199.99",
        inrMonthly: "₹999",
        inrYearly: "₹9,990",
        features: [
            "5 TB Enterprise Cloud Capacity",
            "Dedicated High-Speed Upload Nodes",
            "Audit Logs & Admin Permissions",
            "Custom Subdomain Share Portals"
        ]
    }
];
function StoragePlansModal({ isOpen, onClose, currentPlan, onPlanSelect }) {
    _s();
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const isMobileLayout = isNative || isMobile;
    const [currency, setCurrency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("INR");
    const [billingCycle, setBillingCycle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("monthly");
    if (!isOpen) return null;
    const handleSelect = (planId)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].setPlan(planId);
        onPlanSelect(planId);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Successfully updated storage plan to PingDart ${planId}!`);
        onClose();
    };
    // ── DEDICATED FULL-SCREEN MOBILE SCREEN ─────────────────────────────────────
    if (isMobileLayout) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 bg-slate-50 dark:bg-[#0b141a] flex flex-col select-none overflow-hidden animate-in fade-in slide-in-from-bottom duration-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-4 pt-[calc(0.6rem+env(safe-area-inset-top,0px))] pb-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white ${isNative ? "rounded-b-[20px]" : " rounded-b-[24px] "} shadow-md shrink-0 space-y-2.5`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white shrink-0 active:scale-95 transition-all cursor-pointer shadow-xs",
                                        title: "Back",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-[15px] font-extrabold text-white tracking-tight truncate leading-tight",
                                                children: "Cloud Storage Plans"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[14px] text-blue-100/80 truncate",
                                                children: [
                                                    "Current: PingDart ",
                                                    currentPlan,
                                                    " • 15 GB Free baseline"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center bg-white/15 border border-white/20 p-0.5 rounded-xl text-[11px] font-bold shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCurrency("INR"),
                                        className: `px-2.5 py-1 rounded-lg transition-all cursor-pointer ${currency === "INR" ? "bg-white text-blue-700 shadow-xs" : "text-white/80 hover:text-white"}`,
                                        children: "₹ INR"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCurrency("USD"),
                                        className: `px-2.5 py-1 rounded-lg transition-all cursor-pointer ${currency === "USD" ? "bg-white text-blue-700 shadow-xs" : "text-white/80 hover:text-white"}`,
                                        children: "$ USD"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                        lineNumber: 186,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                        lineNumber: 156,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-4 space-y-4 pb-28 md:pb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-slate-900 p-1 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center shadow-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setBillingCycle("monthly"),
                                    className: `flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${billingCycle === "monthly" ? "bg-blue-600 text-white shadow-xs" : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}`,
                                    children: "Monthly Billing"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setBillingCycle("yearly"),
                                    className: `flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 ${billingCycle === "yearly" ? "bg-blue-600 text-white shadow-xs" : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Annual Billing"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                            lineNumber: 219,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] font-extrabold px-1.5 py-0.5 rounded-full bg-amber-400 text-slate-900 leading-none",
                                            children: "Save 20%"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                            lineNumber: 202,
                            columnNumber: 11
                        }, this),
                        PLANS.map((plan)=>{
                            const isCurrent = currentPlan === plan.id;
                            const price = currency === "INR" ? billingCycle === "monthly" ? plan.inrMonthly : plan.inrYearly : billingCycle === "monthly" ? plan.usdMonthly : plan.usdYearly;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-4 sm:p-5 rounded-2xl border transition-all relative overflow-hidden ${isCurrent ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/60 shadow-xs" : plan.popular ? "bg-blue-50/60 dark:bg-blue-950/30 border-blue-500 dark:border-blue-500 shadow-md ring-2 ring-blue-500/20" : plan.bestValue ? "bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-400 dark:border-indigo-800/60 shadow-xs" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xs"}`,
                                children: [
                                    isCurrent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-extrabold shadow-xs uppercase tracking-wider mb-2",
                                        children: "Active Current Plan"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                        lineNumber: 252,
                                        columnNumber: 19
                                    }, this) : plan.popular ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[9px] font-extrabold shadow-xs uppercase tracking-wider mb-2",
                                        children: "Most Popular"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                        lineNumber: 256,
                                        columnNumber: 19
                                    }, this) : plan.bestValue ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block px-2.5 py-0.5 rounded-full bg-indigo-600 text-white text-[9px] font-extrabold shadow-xs uppercase tracking-wider mb-2",
                                        children: "Best Value (Power Users)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                        lineNumber: 260,
                                        columnNumber: 19
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base font-extrabold text-slate-900 dark:text-white",
                                                        children: plan.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px] text-slate-500 dark:text-slate-400 mt-0.5",
                                                        children: plan.tagline
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                                        lineNumber: 270,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                                lineNumber: 266,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xl font-black text-blue-600 dark:text-blue-400 shrink-0",
                                                children: plan.storage
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                                lineNumber: 274,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                        lineNumber: 265,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "my-3 flex items-baseline gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-black text-slate-900 dark:text-white",
                                                children: price
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                                lineNumber: 281,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-400 font-medium",
                                                children: [
                                                    "/ ",
                                                    billingCycle === "monthly" ? "month" : "year"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                                lineNumber: 284,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                        lineNumber: 280,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-xs text-slate-600 dark:text-slate-300 my-4 border-t border-slate-100 dark:border-slate-800/80 pt-3",
                                        children: plan.features.map((feat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                            size: 10,
                                                            strokeWidth: 3
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "leading-snug",
                                                        children: feat
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                                lineNumber: 292,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                        lineNumber: 290,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelect(plan.id),
                                        disabled: isCurrent,
                                        className: `w-full py-3 px-4 rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer active:scale-[0.98] ${isCurrent ? "bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700 cursor-default shadow-none" : plan.popular || plan.bestValue ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 text-white shadow-blue-500/25" : "bg-slate-900 dark:bg-white hover:bg-slate-800 text-white dark:text-slate-900"}`,
                                        children: isCurrent ? "Current Plan Active" : `Upgrade to ${plan.name}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                        lineNumber: 302,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, plan.id, true, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                lineNumber: 239,
                                columnNumber: 15
                            }, this);
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                    lineNumber: 200,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
            lineNumber: 150,
            columnNumber: 7
        }, this);
    }
    // ── DESKTOP MODAL VIEW ──────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 select-none animate-in fade-in duration-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50/50 dark:bg-slate-900/40",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                        lineNumber: 330,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                    lineNumber: 329,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-extrabold text-slate-900 dark:text-white",
                                            children: "PingDart Cloud Storage Plans"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                            lineNumber: 333,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 dark:text-slate-400",
                                            children: "15 GB Free baseline included. Upgrade anytime for expanded cloud capacity."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center bg-slate-200 dark:bg-slate-800 p-0.5 rounded-xl text-xs font-bold",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrency("INR"),
                                            className: `px-3 py-1 rounded-lg transition-all cursor-pointer ${currency === "INR" ? "bg-white dark:bg-[#111827] text-blue-600 shadow-xs" : "text-slate-500"}`,
                                            children: "₹ INR (India)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                            lineNumber: 345,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrency("USD"),
                                            className: `px-3 py-1 rounded-lg transition-all cursor-pointer ${currency === "USD" ? "bg-white dark:bg-[#111827] text-blue-600 shadow-xs" : "text-slate-500"}`,
                                            children: "$ USD (Global)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                    lineNumber: 344,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                    lineNumber: 361,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                    lineNumber: 327,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4",
                    children: PLANS.map((plan)=>{
                        const isCurrent = currentPlan === plan.id;
                        const price = currency === "INR" ? plan.inrMonthly : plan.usdMonthly;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-5 rounded-2xl border flex flex-col justify-between transition-all relative ${isCurrent ? "bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-400 dark:border-emerald-800" : plan.popular ? "bg-blue-50/40 dark:bg-blue-950/30 border-blue-500 dark:border-blue-500 shadow-md ring-2 ring-blue-500/20" : "bg-white dark:bg-[#161f2e] border-slate-200 dark:border-slate-800"}`,
                            children: [
                                isCurrent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[9px] font-extrabold shadow-sm uppercase tracking-wider",
                                    children: "Current Plan"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                    lineNumber: 387,
                                    columnNumber: 19
                                }, this) : plan.popular ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[9px] font-extrabold shadow-sm uppercase tracking-wider",
                                    children: "Most Popular"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                    lineNumber: 391,
                                    columnNumber: 19
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-extrabold text-slate-900 dark:text-white",
                                            children: plan.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                            lineNumber: 397,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xl font-black text-blue-600 dark:text-blue-400 my-2",
                                            children: plan.storage
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                            lineNumber: 400,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-black text-slate-900 dark:text-white",
                                                    children: price
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-slate-400 font-medium",
                                                    children: " / month"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                            lineNumber: 404,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-xs text-slate-600 dark:text-slate-300 mb-6",
                                            children: plan.features.map((feat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                            size: 12,
                                                            className: "text-emerald-500 shrink-0 mt-0.5",
                                                            strokeWidth: 3
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                                            lineNumber: 414,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "leading-snug",
                                                            children: feat
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                                            lineNumber: 415,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                                    lineNumber: 413,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                            lineNumber: 411,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                    lineNumber: 396,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSelect(plan.id),
                                    disabled: isCurrent,
                                    className: `w-full py-2.5 px-3 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer ${isCurrent ? "bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700 cursor-default" : plan.popular ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20" : "bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 text-white dark:text-slate-900"}`,
                                    children: isCurrent ? "Current Plan Active" : "Upgrade Plan"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                                    lineNumber: 421,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, plan.id, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                            lineNumber: 377,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
                    lineNumber: 371,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
            lineNumber: 325,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx",
        lineNumber: 324,
        columnNumber: 5
    }, this);
}
_s(StoragePlansModal, "VeWHObL8x7cceRIDyrM9XpJledk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = StoragePlansModal;
var _c;
__turbopack_context__.k.register(_c, "StoragePlansModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateFolderModal",
    ()=>CreateFolderModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Folder01Icon.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const FOLDER_COLORS = [
    "#2563eb",
    "#059669",
    "#d97706",
    "#dc2626",
    "#0891b2",
    "#9333ea",
    "#ec4899",
    "#4b5563"
];
function CreateFolderModal({ isOpen, onClose, onCreate }) {
    _s();
    const [folderName, setFolderName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedColor, setSelectedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#2563eb");
    if (!isOpen) return null;
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!folderName.trim()) return;
        onCreate(folderName.trim(), selectedColor);
        setFolderName("");
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 select-none animate-in fade-in duration-150",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl p-6 space-y-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Folder01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Folder01Icon"], {
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-extrabold text-slate-900 dark:text-white",
                                            children: "Create New Folder"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                                            lineNumber: 37,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400",
                                            children: "Organize your workspace files and documents"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold text-slate-700 dark:text-slate-300",
                                    children: "Folder Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    autoFocus: true,
                                    value: folderName,
                                    onChange: (e)=>setFolderName(e.target.value),
                                    placeholder: "e.g. Project Roadmap 2026",
                                    autoComplete: "off",
                                    autoCapitalize: "off",
                                    autoCorrect: "off",
                                    spellCheck: false,
                                    className: "w-full px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold text-slate-700 dark:text-slate-300",
                                    children: "Folder Tag Color"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: FOLDER_COLORS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setSelectedColor(c),
                                            className: `w-7 h-7 rounded-full transition-transform cursor-pointer ${selectedColor === c ? "scale-110 ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-slate-900" : "opacity-80 hover:opacity-100"}`,
                                            style: {
                                                backgroundColor: c
                                            }
                                        }, c, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "flex-1 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: !folderName.trim(),
                                    className: "flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs shadow-md shadow-blue-500/20",
                                    children: "Create Folder"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(CreateFolderModal, "wIP6vUI8HKfZSMj9u8r7eCCJ6Zg=");
_c = CreateFolderModal;
var _c;
__turbopack_context__.k.register(_c, "CreateFolderModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShareFolderModal",
    ()=>ShareFolderModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Share01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/storageApi.ts [app-client] (ecmascript)");
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
function ShareFolderModal({ isOpen, onClose, folder }) {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shares, setShares] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingShares, setIsLoadingShares] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchShares = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShareFolderModal.useCallback[fetchShares]": async ()=>{
            if (!folder) return;
            setIsLoadingShares(true);
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].getFolderShares(folder.id);
                setShares(data || []);
            } catch (e) {
                console.error("[ShareFolderModal] Failed to load shares", e);
            } finally{
                setIsLoadingShares(false);
            }
        }
    }["ShareFolderModal.useCallback[fetchShares]"], [
        folder
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShareFolderModal.useEffect": ()=>{
            if (isOpen && folder) {
                fetchShares();
                setSearchQuery("");
                setSearchResults([]);
            }
        }
    }["ShareFolderModal.useEffect"], [
        isOpen,
        folder,
        fetchShares
    ]);
    // Debounced search for PingDart users
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShareFolderModal.useEffect": ()=>{
            if (!searchQuery.trim() || searchQuery.trim().length < 2) {
                setSearchResults([]);
                return;
            }
            const timer = setTimeout({
                "ShareFolderModal.useEffect.timer": async ()=>{
                    setIsSearching(true);
                    try {
                        var _res_data, _res_data1;
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/user/search?q=${encodeURIComponent(searchQuery.trim())}`);
                        if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && Array.isArray((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.users)) {
                            setSearchResults(res.data.users);
                        }
                    } catch (e) {
                        console.error("[ShareFolderModal] Search failed", e);
                    } finally{
                        setIsSearching(false);
                    }
                }
            }["ShareFolderModal.useEffect.timer"], 300);
            return ({
                "ShareFolderModal.useEffect": ()=>clearTimeout(timer)
            })["ShareFolderModal.useEffect"];
        }
    }["ShareFolderModal.useEffect"], [
        searchQuery
    ]);
    if (!isOpen || !folder) return null;
    const sharedUserIds = new Set(shares.map((s)=>{
        var _s_user;
        return String((_s_user = s.user) === null || _s_user === void 0 ? void 0 : _s_user.id);
    }));
    const handleShareWithUser = async (targetUser)=>{
        setIsSubmitting(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].shareFolder(folder.id, targetUser.email, "write");
            if (res === null || res === void 0 ? void 0 : res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Folder shared with ${targetUser.name}`);
                setSearchQuery("");
                setSearchResults([]);
                await fetchShares();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((res === null || res === void 0 ? void 0 : res.message) || "Failed to share folder");
            }
        } catch (e) {
            var _e_response_data, _e_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : (_e_response_data = _e_response.data) === null || _e_response_data === void 0 ? void 0 : _e_response_data.message) || "Failed to share folder");
        } finally{
            setIsSubmitting(false);
        }
    };
    const handleUnshareUser = async (targetUserId, userName)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].unshareFolder(folder.id, targetUserId);
            if (res === null || res === void 0 ? void 0 : res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Removed access for ${userName}`);
                await fetchShares();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((res === null || res === void 0 ? void 0 : res.message) || "Failed to remove user");
            }
        } catch (e) {
            var _e_response_data, _e_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((e === null || e === void 0 ? void 0 : (_e_response = e.response) === null || _e_response === void 0 ? void 0 : (_e_response_data = _e_response.data) === null || _e_response_data === void 0 ? void 0 : _e_response_data.message) || "Failed to remove user");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 select-none animate-in fade-in duration-150",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl p-6 space-y-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-2xl text-white flex items-center justify-center shadow-xs",
                                    style: {
                                        backgroundColor: folder.color || "#2563eb"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Share01Icon"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-base font-extrabold text-slate-900 dark:text-white",
                                            children: [
                                                'Share "',
                                                folder.name,
                                                '"'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-400",
                                            children: "Allow other PingDart users to view and add files to this folder"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-xs font-bold text-slate-700 dark:text-slate-300",
                            children: "Invite People by Name or Email"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                    size: 16,
                                    className: "absolute left-3.5 top-3 text-slate-400"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    placeholder: "Search user by name, email, or @pingdartId...",
                                    className: "w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                isSearching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-3.5 top-3 text-xs text-slate-400 font-medium",
                                    children: "Searching..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-48 overflow-y-auto bg-white dark:bg-[#161f2e] border border-slate-200 dark:border-slate-800 rounded-2xl p-1.5 shadow-xl space-y-1",
                            children: searchResults.map((u)=>{
                                const isAlreadyShared = sharedUserIds.has(String(u.id));
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2.5 min-w-0",
                                            children: [
                                                u.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: u.avatar,
                                                    alt: u.name,
                                                    className: "w-8 h-8 rounded-full object-cover shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 25
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0",
                                                    children: u.name.charAt(0).toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-bold text-slate-900 dark:text-white truncate",
                                                            children: u.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-slate-400 truncate",
                                                            children: u.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                            lineNumber: 184,
                                            columnNumber: 21
                                        }, this),
                                        isAlreadyShared ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[11px] font-semibold text-emerald-500 px-2 py-1 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg",
                                            children: "Shared"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                            lineNumber: 205,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleShareWithUser(u),
                                            disabled: isSubmitting,
                                            className: "py-1 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-xs",
                                            children: "Share"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                            lineNumber: 209,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, u.id, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                    lineNumber: 180,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                            lineNumber: 176,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xs font-extrabold uppercase tracking-wider text-slate-400",
                            children: [
                                "People with Access (",
                                shares.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this),
                        isLoadingShares ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-slate-400 py-3 text-center",
                            children: "Loading access list..."
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                            lineNumber: 231,
                            columnNumber: 13
                        }, this) : shares.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 text-center space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium text-slate-500 dark:text-slate-400",
                                    children: "This folder is private"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                    lineNumber: 234,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-slate-400",
                                    children: "Search users above to invite them to this folder."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                    lineNumber: 237,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-h-48 overflow-y-auto space-y-1.5 pr-1",
                            children: shares.map((s)=>{
                                var _s_user, _s_user1, _s_user2, _s_user3;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2.5 min-w-0",
                                            children: [
                                                ((_s_user = s.user) === null || _s_user === void 0 ? void 0 : _s_user.avatar) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: s.user.avatar,
                                                    alt: s.user.name,
                                                    className: "w-8 h-8 rounded-full object-cover shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-8 h-8 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0",
                                                    children: (((_s_user1 = s.user) === null || _s_user1 === void 0 ? void 0 : _s_user1.name) || "U").charAt(0).toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-bold text-slate-900 dark:text-white truncate",
                                                            children: (_s_user2 = s.user) === null || _s_user2 === void 0 ? void 0 : _s_user2.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-slate-400 truncate",
                                                            children: (_s_user3 = s.user) === null || _s_user3 === void 0 ? void 0 : _s_user3.email
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                                            lineNumber: 264,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                            lineNumber: 248,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-semibold text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-700/60 px-2 py-0.5 rounded-md",
                                                    children: "Can edit & add files"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                                    lineNumber: 269,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleUnshareUser(s.user.id, s.user.name),
                                                    title: "Remove access",
                                                    className: "p-1.5 rounded-lg text-slate-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-slate-200/50 dark:hover:bg-slate-700/50 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                            lineNumber: 268,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, s.id, true, {
                                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                                    lineNumber: 244,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                    lineNumber: 225,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold text-xs hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors shadow-xs",
                        children: "Done"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                        lineNumber: 288,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
            lineNumber: 126,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx",
        lineNumber: 125,
        columnNumber: 5
    }, this);
}
_s(ShareFolderModal, "wHL0c8wtcAYh1BX38JhnEfvlhGQ=");
_c = ShareFolderModal;
var _c;
__turbopack_context__.k.register(_c, "ShareFolderModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/uploadApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * uploadApi.ts
 * Chunked file upload client for PingDart Chat.
 *
 * Protocol:
 *   1. POST /upload/init        → { uploadId, nextChunk }
 *   2. POST /upload/chunk       → { received, remaining }  (repeat per chunk)
 *   3. POST /upload/complete    → { url, mimeType, size }
 *
 * Features:
 *   - Resumes from last successful chunk on reconnect
 *   - Progress callback per chunk
 *   - Cancellation via AbortController
 *   - Automatic retry (3 attempts per chunk, exponential backoff)
 */ __turbopack_context__.s([
    "cancelUpload",
    ()=>cancelUpload,
    "uploadFile",
    ()=>uploadFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
// ─────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────
const DEFAULT_CHUNK_SIZE = 1 * 1024 * 1024; // 1 MB per chunk
const MAX_CHUNK_RETRIES = 3;
// ─────────────────────────────────────────────────────────────
// Local resume state (in-memory; survives reconnects within session)
// ─────────────────────────────────────────────────────────────
const activeSessions = new Map();
async function uploadFile(file, fileName, mimeType, roomId, opts) {
    var _completeRes_data_data;
    var _opts_chunkSize;
    const chunkSize = (_opts_chunkSize = opts === null || opts === void 0 ? void 0 : opts.chunkSize) !== null && _opts_chunkSize !== void 0 ? _opts_chunkSize : DEFAULT_CHUNK_SIZE;
    const totalChunks = Math.ceil(file.size / chunkSize);
    const onProgress = opts === null || opts === void 0 ? void 0 : opts.onProgress;
    const signal = opts === null || opts === void 0 ? void 0 : opts.signal;
    // 1. Init or resume
    // NOTE: `api` has baseURL = NEXT_PUBLIC_API_URL (e.g. http://host:4025/api/v1)
    //       so all paths here are relative to that — DO NOT include /api/v1 prefix.
    let session;
    if ((opts === null || opts === void 0 ? void 0 : opts.resumeUploadId) && activeSessions.has(opts.resumeUploadId)) {
        session = activeSessions.get(opts.resumeUploadId);
    } else {
        var _initRes_data_data, _initRes_data_data1;
        const initRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/upload/init', {
            fileName,
            mimeType,
            totalChunks,
            chunkSize,
            roomId,
            size: file.size
        });
        if (!initRes.data.success) throw new Error(initRes.data.message || 'Upload init failed');
        // Backend returns uploadId at top level
        const uploadId = initRes.data.uploadId || ((_initRes_data_data = initRes.data.data) === null || _initRes_data_data === void 0 ? void 0 : _initRes_data_data.uploadId);
        var _initRes_data_nextChunk, _ref;
        const nextChunk = (_ref = (_initRes_data_nextChunk = initRes.data.nextChunk) !== null && _initRes_data_nextChunk !== void 0 ? _initRes_data_nextChunk : (_initRes_data_data1 = initRes.data.data) === null || _initRes_data_data1 === void 0 ? void 0 : _initRes_data_data1.nextChunk) !== null && _ref !== void 0 ? _ref : 0;
        session = {
            uploadId,
            chunkSize,
            totalChunks,
            nextChunk
        };
        activeSessions.set(session.uploadId, session);
    }
    // 2. Upload chunks sequentially from nextChunk
    for(let i = session.nextChunk; i < totalChunks; i++){
        if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
            activeSessions.delete(session.uploadId);
            throw new DOMException('Upload cancelled', 'AbortError');
        }
        const start = i * chunkSize;
        const end = Math.min(start + chunkSize, file.size);
        const chunkBlob = file.slice(start, end);
        await uploadChunkWithRetry(session.uploadId, i, totalChunks, chunkBlob, signal);
        // Update resume pointer
        session.nextChunk = i + 1;
        onProgress === null || onProgress === void 0 ? void 0 : onProgress({
            uploadId: session.uploadId,
            chunkIndex: i,
            totalChunks,
            percent: Math.round((i + 1) / totalChunks * 100)
        });
    }
    // 3. Complete the upload
    const completeRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/upload/complete', {
        uploadId: session.uploadId,
        fileName,
        mimeType
    });
    if (!completeRes.data.success) throw new Error(completeRes.data.message || 'Upload complete failed');
    activeSessions.delete(session.uploadId);
    // Backend returns url at top level
    const finalUrl = completeRes.data.url || ((_completeRes_data_data = completeRes.data.data) === null || _completeRes_data_data === void 0 ? void 0 : _completeRes_data_data.url) || '';
    return {
        url: finalUrl,
        mimeType,
        size: file.size,
        uploadId: session.uploadId
    };
}
async function cancelUpload(uploadId) {
    activeSessions.delete(uploadId);
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/upload/${uploadId}`);
    } catch (e) {}
}
// ─────────────────────────────────────────────────────────────
// Internal helpers
// ─────────────────────────────────────────────────────────────
/**
 * Get the backend base URL for raw fetch calls (without /api/v1 suffix).
 * The chunk upload uses fetch (not axios) to send multipart FormData.
 */ function getChunkUploadUrl() {
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])()}/upload/chunk`;
}
/**
 * Get the active auth token from any available source.
 * Checks Zustand store first, then localStorage keys used by the app.
 */ function getAuthToken() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        // Try to get from Zustand auth store first
        const { useAuthStore } = __turbopack_context__.r("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
        const storeToken = useAuthStore.getState().accessToken;
        if (storeToken) return storeToken;
    } catch (e) {}
    try {
        const savedAuth = localStorage.getItem('pingdart-auth');
        if (savedAuth) {
            var _parsed_state;
            const parsed = JSON.parse(savedAuth);
            if (parsed === null || parsed === void 0 ? void 0 : (_parsed_state = parsed.state) === null || _parsed_state === void 0 ? void 0 : _parsed_state.accessToken) return parsed.state.accessToken;
        }
    } catch (e) {}
    // Fallback: check all localStorage keys the app uses for auth
    return localStorage.getItem('access_token') || localStorage.getItem('token') || sessionStorage.getItem('access_token') || sessionStorage.getItem('token') || '';
}
async function uploadChunkWithRetry(uploadId, chunkIndex, totalChunks, blob, signal, attempt = 0) {
    try {
        const form = new FormData();
        form.append('uploadId', uploadId);
        form.append('chunkIndex', String(chunkIndex));
        form.append('totalChunks', String(totalChunks));
        form.append('chunk', blob, `chunk_${chunkIndex}`);
        const token = getAuthToken();
        const res = await fetch(getChunkUploadUrl(), {
            method: 'POST',
            body: form,
            signal,
            headers: token ? {
                Authorization: `Bearer ${token}`
            } : {}
        });
        if (!res.ok) {
            const text = await res.text();
            throw new Error(`Chunk ${chunkIndex} failed: ${res.status} ${text}`);
        }
    } catch (err) {
        if (err.name === 'AbortError') throw err;
        if (attempt < MAX_CHUNK_RETRIES) {
            await sleep(Math.pow(2, attempt) * 500); // 500ms, 1s, 2s
            return uploadChunkWithRetry(uploadId, chunkIndex, totalChunks, blob, signal, attempt + 1);
        }
        throw err;
    }
}
function sleep(ms) {
    return new Promise((r)=>setTimeout(r, ms));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/CloudStorage/CloudStorageScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloudStorageScreen",
    ()=>CloudStorageScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$CloudStorage$2f$components$2f$StorageSidebarTree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/CloudStorage/components/StorageSidebarTree.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$CloudStorage$2f$components$2f$StorageContentArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/CloudStorage/components/StorageContentArea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$CloudStorage$2f$components$2f$FileInspectorDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/CloudStorage/components/FileInspectorDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$CloudStorage$2f$components$2f$StoragePlansModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/CloudStorage/components/StoragePlansModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$CloudStorage$2f$components$2f$CreateFolderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/CloudStorage/components/CreateFolderModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$CloudStorage$2f$components$2f$ShareFolderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/CloudStorage/components/ShareFolderModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/storageApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$uploadApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/uploadApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
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
;
;
;
;
;
;
function CloudStorageScreen({ onBack } = {}) {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("drive");
    const [currentFolder, setCurrentFolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [folderPath, setFolderPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Modals state
    const [isFolderModalOpen, setIsFolderModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlansModalOpen, setIsPlansModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [folderToShare, setFolderToShare] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isShareFolderModalOpen, setIsShareFolderModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Data refresh triggers
    const [refreshKey, setRefreshKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Upload progress per file: fileId → 0-100
    const [uploadProgress, setUploadProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const hiddenFileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Use a ref to avoid stale closure on currentFolder inside async handlers
    const currentFolderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    currentFolderRef.current = currentFolder;
    // Hardware backpress handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CloudStorageScreen.useEffect": ()=>{
            const handleAppGoBack = {
                "CloudStorageScreen.useEffect.handleAppGoBack": (e)=>{
                    if (isFolderModalOpen) {
                        var _e_preventDefault, _e_detail_markHandled, _e_detail, _e_stopImmediatePropagation;
                        setIsFolderModalOpen(false);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault = e.preventDefault) === null || _e_preventDefault === void 0 ? void 0 : _e_preventDefault.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail = e.detail) === null || _e_detail === void 0 ? void 0 : (_e_detail_markHandled = _e_detail.markHandled) === null || _e_detail_markHandled === void 0 ? void 0 : _e_detail_markHandled.call(_e_detail);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation === void 0 ? void 0 : _e_stopImmediatePropagation.call(e);
                    } else if (isPlansModalOpen) {
                        var _e_preventDefault1, _e_detail_markHandled1, _e_detail1, _e_stopImmediatePropagation1;
                        setIsPlansModalOpen(false);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault1 = e.preventDefault) === null || _e_preventDefault1 === void 0 ? void 0 : _e_preventDefault1.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail1 = e.detail) === null || _e_detail1 === void 0 ? void 0 : (_e_detail_markHandled1 = _e_detail1.markHandled) === null || _e_detail_markHandled1 === void 0 ? void 0 : _e_detail_markHandled1.call(_e_detail1);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation1 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation1 === void 0 ? void 0 : _e_stopImmediatePropagation1.call(e);
                    } else if (isShareFolderModalOpen) {
                        var _e_preventDefault2, _e_detail_markHandled2, _e_detail2, _e_stopImmediatePropagation2;
                        setIsShareFolderModalOpen(false);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault2 = e.preventDefault) === null || _e_preventDefault2 === void 0 ? void 0 : _e_preventDefault2.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail2 = e.detail) === null || _e_detail2 === void 0 ? void 0 : (_e_detail_markHandled2 = _e_detail2.markHandled) === null || _e_detail_markHandled2 === void 0 ? void 0 : _e_detail_markHandled2.call(_e_detail2);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation2 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation2 === void 0 ? void 0 : _e_stopImmediatePropagation2.call(e);
                    } else if (isMobileSidebarOpen) {
                        var _e_preventDefault3, _e_detail_markHandled3, _e_detail3, _e_stopImmediatePropagation3;
                        setIsMobileSidebarOpen(false);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault3 = e.preventDefault) === null || _e_preventDefault3 === void 0 ? void 0 : _e_preventDefault3.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail3 = e.detail) === null || _e_detail3 === void 0 ? void 0 : (_e_detail_markHandled3 = _e_detail3.markHandled) === null || _e_detail_markHandled3 === void 0 ? void 0 : _e_detail_markHandled3.call(_e_detail3);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation3 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation3 === void 0 ? void 0 : _e_stopImmediatePropagation3.call(e);
                    } else if (selectedFile) {
                        var _e_preventDefault4, _e_detail_markHandled4, _e_detail4, _e_stopImmediatePropagation4;
                        setSelectedFile(null);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault4 = e.preventDefault) === null || _e_preventDefault4 === void 0 ? void 0 : _e_preventDefault4.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail4 = e.detail) === null || _e_detail4 === void 0 ? void 0 : (_e_detail_markHandled4 = _e_detail4.markHandled) === null || _e_detail_markHandled4 === void 0 ? void 0 : _e_detail_markHandled4.call(_e_detail4);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation4 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation4 === void 0 ? void 0 : _e_stopImmediatePropagation4.call(e);
                    } else if (folderPath.length > 0) {
                        var _e_preventDefault5, _e_detail_markHandled5, _e_detail5, _e_stopImmediatePropagation5;
                        const nextPath = [
                            ...folderPath
                        ];
                        nextPath.pop();
                        setFolderPath(nextPath);
                        const parent = nextPath.length > 0 ? nextPath[nextPath.length - 1] : null;
                        setCurrentFolder(parent);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault5 = e.preventDefault) === null || _e_preventDefault5 === void 0 ? void 0 : _e_preventDefault5.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail5 = e.detail) === null || _e_detail5 === void 0 ? void 0 : (_e_detail_markHandled5 = _e_detail5.markHandled) === null || _e_detail_markHandled5 === void 0 ? void 0 : _e_detail_markHandled5.call(_e_detail5);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation5 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation5 === void 0 ? void 0 : _e_stopImmediatePropagation5.call(e);
                    }
                }
            }["CloudStorageScreen.useEffect.handleAppGoBack"];
            window.addEventListener("app:back_press", handleAppGoBack);
            return ({
                "CloudStorageScreen.useEffect": ()=>window.removeEventListener("app:back_press", handleAppGoBack)
            })["CloudStorageScreen.useEffect"];
        }
    }["CloudStorageScreen.useEffect"], [
        isFolderModalOpen,
        isPlansModalOpen,
        isShareFolderModalOpen,
        isMobileSidebarOpen,
        selectedFile,
        folderPath
    ]);
    // Restore folder, tab, and file from URL on load / change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CloudStorageScreen.useEffect": ()=>{
            const subtabParam = searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("subtab");
            const folderIdParam = searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("folderId");
            const fileIdParam = searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("fileId");
            if (subtabParam && [
                "drive",
                "shared",
                "recent",
                "photos",
                "documents",
                "starred",
                "vault",
                "trash"
            ].includes(subtabParam)) {
                setActiveTab(subtabParam);
            }
            if (folderIdParam) {
                const allFolders = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].getAllFolders();
                const targetFolder = allFolders.find({
                    "CloudStorageScreen.useEffect.targetFolder": (f)=>f.id === folderIdParam
                }["CloudStorageScreen.useEffect.targetFolder"]);
                if (targetFolder) {
                    setCurrentFolder(targetFolder);
                    const chain = [];
                    let curr = targetFolder;
                    while(curr){
                        chain.unshift(curr);
                        if (!curr.parentId) break;
                        curr = allFolders.find({
                            "CloudStorageScreen.useEffect": (f)=>f.id === curr.parentId
                        }["CloudStorageScreen.useEffect"]);
                    }
                    setFolderPath(chain);
                }
            }
            if (fileIdParam) {
                const targetFile = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].getFileById(fileIdParam) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].getAllFiles().find({
                    "CloudStorageScreen.useEffect": (f)=>f.id === fileIdParam || f.id.includes(fileIdParam)
                }["CloudStorageScreen.useEffect"]);
                if (targetFile) {
                    setSelectedFile(targetFile);
                } else {
                    // Fetch directly from backend server if not found in local cache
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].syncWithServer().then({
                        "CloudStorageScreen.useEffect": ()=>{
                            const syncedFile = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].getFileById(fileIdParam);
                            if (syncedFile) {
                                setSelectedFile(syncedFile);
                            }
                        }
                    }["CloudStorageScreen.useEffect"]);
                }
            }
        }
    }["CloudStorageScreen.useEffect"], [
        searchParams
    ]);
    // Subscribe to storageApi updates and sync with MySQL backend
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CloudStorageScreen.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].syncWithServer();
            const unsub = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].subscribe({
                "CloudStorageScreen.useEffect.unsub": ()=>{
                    setRefreshKey({
                        "CloudStorageScreen.useEffect.unsub": (prev)=>prev + 1
                    }["CloudStorageScreen.useEffect.unsub"]);
                }
            }["CloudStorageScreen.useEffect.unsub"]);
            return ({
                "CloudStorageScreen.useEffect": ()=>unsub()
            })["CloudStorageScreen.useEffect"];
        }
    }["CloudStorageScreen.useEffect"], [
        user
    ]);
    // Data getters
    const quota = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].getQuota();
    const getDisplayedFolders = ()=>{
        if (activeTab === "drive") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].getFolders(currentFolder ? currentFolder.id : null);
        }
        if (activeTab === "shared") {
            return currentFolder ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].getFolders(currentFolder.id) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].getSharedFolders();
        }
        if (activeTab === "starred") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].getStarredFolders();
        }
        if (activeTab === "trash") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].getTrashFolders();
        }
        return [];
    };
    const getDisplayedFiles = ()=>{
        if (activeTab === "drive" || activeTab === "shared") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].getFiles(currentFolder ? currentFolder.id : null);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].getCategoryFiles(activeTab);
    };
    const handleTabChange = (tab)=>{
        setActiveTab(tab);
        setCurrentFolder(null);
        setFolderPath([]);
        setSelectedFile(null);
        setIsMobileSidebarOpen(false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
            subtab: tab === "drive" ? null : tab,
            folderId: null,
            fileId: null
        });
    };
    const handleOpenFolder = (folder)=>{
        setCurrentFolder(folder);
        setFolderPath((prev)=>[
                ...prev,
                folder
            ]);
        setSelectedFile(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].syncWithServer();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
            folderId: folder.id,
            fileId: null
        });
    };
    const handleNavigateBreadcrumb = (index)=>{
        let targetFolder = null;
        if (index === -1) {
            setCurrentFolder(null);
            setFolderPath([]);
        } else {
            targetFolder = folderPath[index];
            setCurrentFolder(targetFolder);
            setFolderPath((prev)=>prev.slice(0, index + 1));
        }
        setSelectedFile(null);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
            folderId: targetFolder ? targetFolder.id : null,
            fileId: null
        });
    };
    const handleCreateFolder = (name, color)=>{
        const parentId = currentFolder ? currentFolder.id : null;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].createFolder(name, parentId, color);
        setRefreshKey((prev)=>prev + 1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Folder "${name}" created!`);
    };
    /** Generate a thumbnail from a video file by capturing frame at 1 second */ const generateVideoThumbnail = (file)=>new Promise((resolve)=>{
            const video = document.createElement("video");
            const url = URL.createObjectURL(file);
            video.src = url;
            video.muted = true;
            video.playsInline = true;
            video.preload = "metadata";
            const cleanup = ()=>URL.revokeObjectURL(url);
            video.addEventListener("loadedmetadata", ()=>{
                video.currentTime = Math.min(1, video.duration * 0.1 || 0);
            }, {
                once: true
            });
            video.addEventListener("seeked", ()=>{
                try {
                    var _canvas_getContext;
                    const canvas = document.createElement("canvas");
                    const W = video.videoWidth || 640;
                    const H = video.videoHeight || 360;
                    canvas.width = W;
                    canvas.height = H;
                    (_canvas_getContext = canvas.getContext("2d")) === null || _canvas_getContext === void 0 ? void 0 : _canvas_getContext.drawImage(video, 0, 0, W, H);
                    resolve(canvas.toDataURL("image/jpeg", 0.75));
                } catch (e) {
                    resolve("");
                }
                cleanup();
            }, {
                once: true
            });
            video.addEventListener("error", ()=>{
                cleanup();
                resolve("");
            }, {
                once: true
            });
            video.load();
        });
    const handleFileUpload = async (fileList)=>{
        if (!fileList || fileList.length === 0) return;
        // Resolve backend base URL (strip /api/v1 suffix if present)
        const rawApiUrl = ("TURBOPACK compile-time value", "http://192.168.0.197:4025/api/v1") || "http://localhost:4025/api/v1";
        const backendBase = rawApiUrl.replace(/\/api\/v1\/?$/, "");
        for (const file of Array.from(fileList)){
            // Always read parentId from ref — avoids stale closure in async loop
            const parentId = currentFolderRef.current ? currentFolderRef.current.id : null;
            const isVideo = file.type.startsWith("video/");
            const isImage = file.type.startsWith("image/");
            // 1️⃣ Blob URL for immediate display (valid this session)
            const blobUrl = URL.createObjectURL(file);
            // 2️⃣ For small files (≤25MB) store persistent base64 data URL
            const dataUrl = file.size <= 25 * 1024 * 1024 ? await new Promise((resolve)=>{
                const reader = new FileReader();
                reader.onload = (e)=>{
                    var _e_target;
                    return resolve(((_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.result) || blobUrl);
                };
                reader.onerror = ()=>resolve(blobUrl);
                reader.readAsDataURL(file);
            }) : blobUrl;
            // 3️⃣ Generate video thumbnail from canvas (frame capture)
            let thumbnailUrl;
            if (isVideo) {
                thumbnailUrl = await generateVideoThumbnail(file) || undefined;
            } else if (isImage) {
                thumbnailUrl = dataUrl;
            }
            // 4️⃣ Add to storage immediately so it appears in the file list right away
            const newCloudFile = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].addFile({
                name: file.name,
                size: file.size,
                mimeType: file.type || "application/octet-stream",
                folderId: parentId,
                url: dataUrl,
                thumbnailUrl
            });
            // 5️⃣ Show file immediately, mark as 0% uploading
            setUploadProgress((prev)=>({
                    ...prev,
                    [newCloudFile.id]: 0
                }));
            setRefreshKey((prev)=>prev + 1);
            // 6️⃣ Upload to backend with progress tracking
            try {
                const uploadRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$uploadApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uploadFile"])(file, file.name, file.type || "application/octet-stream", 0, {
                    onProgress: ({ percent })=>{
                        setUploadProgress((prev)=>({
                                ...prev,
                                [newCloudFile.id]: percent
                            }));
                    }
                });
                if (uploadRes === null || uploadRes === void 0 ? void 0 : uploadRes.url) {
                    const absoluteUrl = uploadRes.url.startsWith("http") ? uploadRes.url : `${backendBase}${uploadRes.url}`;
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].updateFileUrl(newCloudFile.id, absoluteUrl);
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].syncWithServer();
                    setRefreshKey((prev)=>prev + 1);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`"${file.name}" uploaded ✓`);
                } else {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].syncWithServer();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`"${file.name}" saved locally`);
                }
            } catch (err) {
                console.warn(`Backend upload failed for "${file.name}":`, err);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`"${file.name}" saved (local session)`);
            } finally{
                // Remove progress indicator when done (success or fail)
                setUploadProgress((prev)=>{
                    const copy = {
                        ...prev
                    };
                    delete copy[newCloudFile.id];
                    return copy;
                });
            }
        }
    };
    const handleToggleStar = (fileId)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].toggleStar(fileId);
        setRefreshKey((prev)=>prev + 1);
        if ((selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.id) === fileId) {
            setSelectedFile((prev)=>prev ? {
                    ...prev,
                    isStarred: !prev.isStarred
                } : null);
        }
    };
    const handleToggleTrash = (fileId)=>{
        const isCurrentlyTrash = (selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.id) === fileId ? selectedFile.isTrash : false;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].toggleTrash(fileId);
        setRefreshKey((prev)=>prev + 1);
        if ((selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.id) === fileId) {
            setSelectedFile(null);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(isCurrentlyTrash ? "File restored from Trash" : "File moved to Trash");
    };
    const handleDeletePermanently = (fileId)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].deletePermanently(fileId);
        setRefreshKey((prev)=>prev + 1);
        if ((selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.id) === fileId) {
            setSelectedFile(null);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("File deleted permanently");
    };
    const handleToggleFolderStar = (folderId)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].toggleFolderStar(folderId);
        setRefreshKey((prev)=>prev + 1);
    };
    const handleToggleFolderTrash = (folderId)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].toggleFolderTrash(folderId);
        setRefreshKey((prev)=>prev + 1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Folder updated");
    };
    const handleDeleteFolderPermanently = (folderId)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].deleteFolderPermanently(folderId);
        setRefreshKey((prev)=>prev + 1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Folder deleted permanently");
    };
    const handleEmptyTrash = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$storageApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageApi"].emptyTrash();
        setSelectedFile(null);
        setRefreshKey((prev)=>prev + 1);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Trash emptied successfully");
    };
    const handleSelectFile = (file)=>{
        setSelectedFile(file);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUrlParams"])({
            fileId: file ? file.id : null
        });
    };
    const handleDownloadFile = (file)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Downloading ${file.name}...`);
        if (file.url) {
            const a = document.createElement("a");
            a.href = file.url;
            a.download = file.name;
            a.click();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 w-full h-full flex bg-[#f8fafc] dark:bg-[#0b141a] overflow-hidden select-none relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                ref: hiddenFileInputRef,
                onChange: (e)=>{
                    if (e.target.files && e.target.files.length > 0) {
                        handleFileUpload(e.target.files);
                        // Reset so the same file can be re-selected
                        e.target.value = "";
                    }
                },
                multiple: true,
                accept: "*/*",
                className: "hidden"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/CloudStorage/CloudStorageScreen.tsx",
                lineNumber: 417,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed inset-y-0 left-0 z-[25] md:static w-[82vw] max-w-[400px] md:w-[380px] lg:w-[400px] h-full transform transition-transform duration-200 ease-in-out ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$CloudStorage$2f$components$2f$StorageSidebarTree$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageSidebarTree"], {
                    activeTab: activeTab,
                    onTabChange: handleTabChange,
                    onNewFolderClick: ()=>setIsFolderModalOpen(true),
                    onFileUploadClick: ()=>{
                        var _hiddenFileInputRef_current;
                        return (_hiddenFileInputRef_current = hiddenFileInputRef.current) === null || _hiddenFileInputRef_current === void 0 ? void 0 : _hiddenFileInputRef_current.click();
                    },
                    onOpenUpgradeModal: ()=>setIsPlansModalOpen(true),
                    onClose: ()=>setIsMobileSidebarOpen(false),
                    quota: quota
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/CloudStorage/CloudStorageScreen.tsx",
                    lineNumber: 437,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/CloudStorage/CloudStorageScreen.tsx",
                lineNumber: 433,
                columnNumber: 7
            }, this),
            isMobileSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsMobileSidebarOpen(false),
                className: "fixed inset-0 bg-black/60 backdrop-blur-xs z-[50] md:hidden animate-in fade-in duration-200"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/CloudStorage/CloudStorageScreen.tsx",
                lineNumber: 450,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$CloudStorage$2f$components$2f$StorageContentArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageContentArea"], {
                activeTab: activeTab,
                currentFolder: currentFolder,
                folderPath: folderPath,
                folders: getDisplayedFolders(),
                files: getDisplayedFiles(),
                selectedFileId: (selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.id) || null,
                uploadProgress: uploadProgress,
                onSelectFile: handleSelectFile,
                onOpenFolder: handleOpenFolder,
                onNavigateBreadcrumb: handleNavigateBreadcrumb,
                onToggleStar: handleToggleStar,
                onToggleTrash: handleToggleTrash,
                onDeletePermanently: handleDeletePermanently,
                onToggleFolderStar: handleToggleFolderStar,
                onToggleFolderTrash: handleToggleFolderTrash,
                onDeleteFolderPermanently: handleDeleteFolderPermanently,
                onEmptyTrash: handleEmptyTrash,
                onOpenShareModal: handleSelectFile,
                onShareFolder: (folder)=>{
                    setFolderToShare(folder);
                    setIsShareFolderModalOpen(true);
                },
                onDownloadFile: handleDownloadFile,
                onFileUpload: handleFileUpload,
                onToggleMobileSidebar: ()=>setIsMobileSidebarOpen(!isMobileSidebarOpen),
                onNewFolderClick: ()=>setIsFolderModalOpen(true),
                onUploadFileClick: ()=>{
                    var _hiddenFileInputRef_current;
                    return (_hiddenFileInputRef_current = hiddenFileInputRef.current) === null || _hiddenFileInputRef_current === void 0 ? void 0 : _hiddenFileInputRef_current.click();
                },
                onBack: onBack
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/CloudStorage/CloudStorageScreen.tsx",
                lineNumber: 457,
                columnNumber: 7
            }, this),
            selectedFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$CloudStorage$2f$components$2f$FileInspectorDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileInspectorDrawer"], {
                file: selectedFile,
                allFiles: getDisplayedFiles(),
                onClose: ()=>handleSelectFile(null),
                onDownload: handleDownloadFile,
                onToggleStar: handleToggleStar,
                onToggleTrash: handleToggleTrash,
                onDeletePermanently: handleDeletePermanently,
                onSelectFile: handleSelectFile
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/CloudStorage/CloudStorageScreen.tsx",
                lineNumber: 491,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$CloudStorage$2f$components$2f$CreateFolderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateFolderModal"], {
                isOpen: isFolderModalOpen,
                onClose: ()=>setIsFolderModalOpen(false),
                onCreate: handleCreateFolder
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/CloudStorage/CloudStorageScreen.tsx",
                lineNumber: 504,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$CloudStorage$2f$components$2f$ShareFolderModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShareFolderModal"], {
                isOpen: isShareFolderModalOpen,
                onClose: ()=>{
                    setIsShareFolderModalOpen(false);
                    setFolderToShare(null);
                },
                folder: folderToShare
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/CloudStorage/CloudStorageScreen.tsx",
                lineNumber: 510,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$CloudStorage$2f$components$2f$StoragePlansModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StoragePlansModal"], {
                isOpen: isPlansModalOpen,
                onClose: ()=>setIsPlansModalOpen(false),
                currentPlan: quota.planName,
                onPlanSelect: (plan)=>setRefreshKey((prev)=>prev + 1)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/CloudStorage/CloudStorageScreen.tsx",
                lineNumber: 519,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/CloudStorage/CloudStorageScreen.tsx",
        lineNumber: 415,
        columnNumber: 5
    }, this);
}
_s(CloudStorageScreen, "YDIXj/RWbnP3VpaYRtwr2u1W1g8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = CloudStorageScreen;
var _c;
__turbopack_context__.k.register(_c, "CloudStorageScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_14535f15._.js.map