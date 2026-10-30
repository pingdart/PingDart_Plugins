(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/call/CallContext.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// ============================================================
// Backward Compatibility Proxy for CallContext
// Re-exports from `@/components/call`
// ============================================================
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/call/index.ts [app-client] (ecmascript) <locals>");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/shared/FilePreviewOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilePreviewOverlay",
    ()=>FilePreviewOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SentIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/File01Icon.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function FilePreviewOverlay({ selectedFiles, activeFileIndex, setActiveFileIndex, fileCaption, setFileCaption, onClose, onSend, onAddMore }) {
    _s();
    const objectUrls = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "FilePreviewOverlay.useMemo[objectUrls]": ()=>{
            return selectedFiles.map({
                "FilePreviewOverlay.useMemo[objectUrls]": (f)=>URL.createObjectURL(f)
            }["FilePreviewOverlay.useMemo[objectUrls]"]);
        }
    }["FilePreviewOverlay.useMemo[objectUrls]"], [
        selectedFiles
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "FilePreviewOverlay.useEffect": ()=>{
            return ({
                "FilePreviewOverlay.useEffect": ()=>{
                    objectUrls.forEach({
                        "FilePreviewOverlay.useEffect": (url)=>{
                            try {
                                URL.revokeObjectURL(url);
                            } catch (_) {}
                        }
                    }["FilePreviewOverlay.useEffect"]);
                }
            })["FilePreviewOverlay.useEffect"];
        }
    }["FilePreviewOverlay.useEffect"], [
        objectUrls
    ]);
    if (selectedFiles.length === 0) return null;
    const currentFile = selectedFiles[activeFileIndex];
    const currentUrl = objectUrls[activeFileIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-50 flex flex-col bg-[#f0f2f5] dark:bg-[#111827]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center px-4 py-3 bg-[#f0f2f5] dark:bg-[#1a1c20] border-b border-[#d1d7db] dark:border-[#2d3139] shrink-0 h-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "p-2 rounded-full hover:bg-[#d9dbdf] dark:bg-[#2d3139] dark:hover:bg-[#2d3139] text-[#54656f] dark:text-[#a0abb2] transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-4 font-semibold text-[17px] text-[#111b21] dark:text-[#f0f2f5]",
                        children: selectedFiles.length > 0 ? (currentFile === null || currentFile === void 0 ? void 0 : currentFile.name) || 'Preview' : 'Preview'
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative flex items-center justify-center p-8 overflow-hidden bg-[#e9edef] dark:bg-[#0b141a]",
                children: [
                    currentFile && currentUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col items-center w-full h-full justify-center",
                        children: currentFile.type.startsWith('image/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: currentUrl,
                            alt: "Preview",
                            className: "max-w-full max-h-full object-contain rounded-md shadow-md bg-white/10"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                            lineNumber: 62,
                            columnNumber: 15
                        }, this) : currentFile.type.startsWith('video/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            src: currentUrl,
                            controls: true,
                            autoPlay: true,
                            className: "max-w-full max-h-full rounded-md shadow-md bg-black"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                            lineNumber: 64,
                            columnNumber: 15
                        }, this) : currentFile.type === 'application/pdf' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: currentUrl,
                            title: "PDF Preview",
                            className: "w-full h-full max-w-4xl rounded-md shadow-md bg-white border-0"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center p-8 bg-white dark:bg-[#1a1c20] rounded-xl shadow-lg border border-[#e9edef] dark:border-[#2d3139] w-[300px] h-[300px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File01Icon"], {
                                    size: 80,
                                    className: "text-[#54656f] dark:text-[#a0abb2] mb-4 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[18px] font-medium text-[#111b21] dark:text-[#f0f2f5] text-center break-all line-clamp-3",
                                    children: currentFile.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[14px] text-[#667781] dark:text-[#a0abb2] mt-2 shrink-0",
                                    children: [
                                        (currentFile.size / 1024).toFixed(2),
                                        " KB"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                    lineNumber: 71,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                            lineNumber: 68,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    selectedFiles.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFileIndex((i)=>Math.max(0, i - 1)),
                                disabled: activeFileIndex === 0,
                                className: "absolute left-6 w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center disabled:opacity-30 transition-all z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFileIndex((i)=>Math.min(selectedFiles.length - 1, i + 1)),
                                disabled: activeFileIndex === selectedFiles.length - 1,
                                className: "absolute right-6 w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center disabled:opacity-30 transition-all z-10",
                                style: {
                                    transform: "rotate(180deg)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col bg-[#f0f2f5] dark:bg-[#1a1c20] border-t border-[#d1d7db] dark:border-[#2d3139] shrink-0 pt-4 pb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 max-w-3xl mx-auto w-full flex items-end gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-white dark:bg-[#2a2f32] rounded-xl px-4 py-2.5 shadow-sm border border-[#e9edef] dark:border-[#2d3139] flex items-center min-h-[46px] cursor-text",
                                onClick: (e)=>{
                                    var _this;
                                    return (_this = e.currentTarget.querySelector('textarea')) === null || _this === void 0 ? void 0 : _this.focus();
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: fileCaption,
                                    onChange: (e)=>setFileCaption(e.target.value),
                                    onKeyDown: (e)=>{
                                        if (e.key === "Enter" && !e.shiftKey) {
                                            e.preventDefault();
                                            onSend(fileCaption);
                                        }
                                    },
                                    placeholder: "Add a caption...",
                                    className: "w-full bg-transparent outline-none text-[15px] text-[#3b4a54] dark:text-[#f0f2f5] placeholder:text-[#8696a0] resize-none overflow-y-auto",
                                    rows: 1,
                                    style: {
                                        maxHeight: "120px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSend(fileCaption),
                                className: "w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-all hover:scale-105 active:scale-95 mb-[1px]",
                                style: {
                                    background: "#00a884"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                    size: 20,
                                    className: "text-white ml-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    selectedFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 flex items-center justify-center gap-2 overflow-x-auto",
                        children: [
                            selectedFiles.map((f, i)=>{
                                const thumbUrl = objectUrls[i];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveFileIndex(i),
                                    className: `relative w-14 h-14 rounded-lg overflow-hidden border-2 shrink-0 flex items-center justify-center bg-white dark:bg-[#2a2f32] transition-colors ${activeFileIndex === i ? 'border-[#00a884]' : 'border-transparent opacity-70 hover:opacity-100'}`,
                                    children: f.type.startsWith('image/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: thumbUrl,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                        lineNumber: 141,
                                        columnNumber: 21
                                    }, this) : f.type.startsWith('video/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        src: thumbUrl,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                        lineNumber: 143,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File01Icon"], {
                                        size: 24,
                                        className: "text-[#54656f] dark:text-[#a0abb2]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                        lineNumber: 145,
                                        columnNumber: 21
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                    lineNumber: 135,
                                    columnNumber: 17
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onAddMore,
                                className: "w-14 h-14 rounded-lg border-2 border-[#d1d7db] dark:border-[#2d3139] border-dashed flex items-center justify-center text-[#54656f] dark:text-[#a0abb2] hover:bg-black/5 shrink-0 ml-2 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl font-light",
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(FilePreviewOverlay, "Lcwm6Oz2gfte6pwL0zRm4xGVcOg=");
_c = FilePreviewOverlay;
var _c;
__turbopack_context__.k.register(_c, "FilePreviewOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modals/LocationModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocationModal",
    ()=>LocationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SentIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Location01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Navigation03Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Navigation03Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$defaulticon$2d$compatibility$2f$src$2f$Icon$2e$Default$2e$compatibility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet-defaulticon-compatibility/src/Icon.Default.compatibility.js [app-client] (ecmascript)");
;
;
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
// Dynamically import map components to avoid SSR issues
const MapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.MapContainer), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = MapContainer;
const TileLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.TileLayer), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = TileLayer;
const Marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.Marker), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = Marker;
// Component to handle map clicks and move marker
function MapEvents({ setPosition, setAddress, setName }) {
    const MapEventsComp = __turbopack_context__.r("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript)").useMapEvents;
    MapEventsComp({
        click (e) {
            setPosition(e.latlng);
            fetchAddress(e.latlng.lat, e.latlng.lng).then((data)=>{
                setAddress(data.address);
                setName(data.name);
            });
        }
    });
    return null;
}
_c3 = MapEvents;
// Component to programmatically center map
function MapUpdater({ center }) {
    _s();
    const useMapHook = __turbopack_context__.r("[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript)").useMap;
    const map = useMapHook();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapUpdater.useEffect": ()=>{
            map.setView(center, map.getZoom());
        }
    }["MapUpdater.useEffect"], [
        center,
        map
    ]);
    return null;
}
_s(MapUpdater, "/6Ig6NAQ70dW4jSeZtTPHErs7YQ=", true);
_c4 = MapUpdater;
async function fetchAddress(lat, lng) {
    try {
        var _data_display_name;
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&email=contact@pingdart.com`, {
            headers: {
                'Accept-Language': 'en-US,en;q=0.9'
            }
        });
        const data = await res.json();
        return {
            address: data.display_name || "Unknown Location",
            name: data.name || ((_data_display_name = data.display_name) === null || _data_display_name === void 0 ? void 0 : _data_display_name.split(',')[0]) || "Pinned Location"
        };
    } catch (err) {
        return {
            address: "Unknown Location",
            name: "Pinned Location"
        };
    }
}
function LocationModal({ onClose, onSend, initialLat, initialLng, title = "Send location" }) {
    _s1();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        lat: initialLat || 51.505,
        lng: initialLng || -0.09
    });
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Loading...");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Pinned Location");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const locationPinIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LocationModal.useMemo[locationPinIcon]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].divIcon({
                className: 'custom-location-pin-marker',
                html: `
        <div style="position:relative;width:32px;height:42px;display:flex;align-items:center;justify-content:center;cursor:pointer;filter:drop-shadow(0 4px 7px rgba(0,0,0,0.38));">
          <svg width="32" height="42" viewBox="0 0 32 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 0C7.16 0 0 7.16 0 16C0 28 16 42 16 42C16 42 32 28 32 16C32 7.16 24.84 0 16 0Z" fill="url(#pinG2)"/>
            <circle cx="16" cy="16" r="6" fill="#FFFFFF"/>
            <circle cx="16" cy="16" r="3" fill="#2563eb"/>
            <defs>
              <linearGradient id="pinG2" x1="0" y1="0" x2="32" y2="42" gradientUnits="userSpaceOnUse">
                <stop stop-color="#3b82f6"/>
                <stop stop-color="#1d4ed8"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      `,
                iconSize: [
                    32,
                    42
                ],
                iconAnchor: [
                    16,
                    42
                ],
                popupAnchor: [
                    0,
                    -42
                ]
            });
        }
    }["LocationModal.useMemo[locationPinIcon]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocationModal.useEffect": ()=>{
            if (!searchQuery.trim()) {
                setSearchResults([]);
                return;
            }
            const timeout = setTimeout({
                "LocationModal.useEffect.timeout": async ()=>{
                    setIsSearching(true);
                    try {
                        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=5&email=contact@pingdart.com`, {
                            headers: {
                                'Accept-Language': 'en-US,en;q=0.9'
                            }
                        });
                        const data = await res.json();
                        setSearchResults(data);
                    } catch (err) {
                        console.error(err);
                    }
                    setIsSearching(false);
                }
            }["LocationModal.useEffect.timeout"], 500);
            return ({
                "LocationModal.useEffect": ()=>clearTimeout(timeout)
            })["LocationModal.useEffect"];
        }
    }["LocationModal.useEffect"], [
        searchQuery
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocationModal.useEffect": ()=>{
            if (initialLat && initialLng) {
                fetchAddress(initialLat, initialLng).then({
                    "LocationModal.useEffect": (data)=>{
                        setAddress(data.address);
                        setName(data.name);
                    }
                }["LocationModal.useEffect"]);
            } else {
                handleCurrentLocation();
            }
        }
    }["LocationModal.useEffect"], []);
    const handleCurrentLocation = ()=>{
        if ("geolocation" in navigator) {
            setAddress("Finding your location...");
            navigator.geolocation.getCurrentPosition(async (pos)=>{
                const lat = pos.coords.latitude;
                const lng = pos.coords.longitude;
                setPosition({
                    lat,
                    lng
                });
                const data = await fetchAddress(lat, lng);
                setAddress(data.address);
                setName("Current Location");
            }, ()=>{
                setAddress("Unable to get location");
            }, {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            });
        }
    };
    const handleSearch = async (e)=>{
        e.preventDefault();
        if (!searchQuery.trim()) return;
        setIsSearching(true);
        try {
            const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}&limit=5&email=contact@pingdart.com`, {
                headers: {
                    'Accept-Language': 'en-US,en;q=0.9'
                }
            });
            const data = await res.json();
            setSearchResults(data);
        } catch (err) {
            console.error(err);
        }
        setIsSearching(false);
    };
    const selectSearchResult = (result)=>{
        const lat = parseFloat(result.lat);
        const lng = parseFloat(result.lon);
        setPosition({
            lat,
            lng
        });
        setName(result.name || result.display_name.split(',')[0]);
        setAddress(result.display_name);
        setSearchResults([]);
        setSearchQuery("");
    };
    const handleSend = ()=>{
        onSend({
            lat: position.lat,
            lng: position.lng,
            address,
            name
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-50 flex flex-col bg-[#f0f2f5] dark:bg-[#111827]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 px-4 py-3 bg-[#00a884] dark:bg-[#202c33] text-white shrink-0 shadow-sm h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "p-2 rounded-full hover:bg-black/10 transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-lg",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 z-0 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapContainer, {
                            center: position,
                            zoom: 15,
                            style: {
                                height: '100%',
                                width: '100%'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TileLayer, {
                                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                                    position: position,
                                    icon: locationPinIcon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapEvents, {
                                    setPosition: setPosition,
                                    setAddress: setAddress,
                                    setName: setName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapUpdater, {
                                    center: position
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 right-4 z-10 space-y-2 max-w-md mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSearch,
                                className: "flex items-center bg-white dark:bg-[#202c33] rounded-xl shadow-lg overflow-hidden border border-black/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "p-3 text-[#54656f] dark:text-[#a0abb2]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search location...",
                                        className: "flex-1 py-3 pr-4 bg-transparent outline-none text-[#111b21] dark:text-[#e9edef]",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                        lineNumber: 212,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this),
                            searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-[#202c33] rounded-xl shadow-lg border border-black/5 max-h-48 overflow-y-auto",
                                children: searchResults.map((res, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>selectSearchResult(res),
                                        className: "p-3 border-b border-[#f0f2f5] dark:border-[#111827] last:border-b-0 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Location01Icon"], {
                                                size: 20,
                                                className: "text-[#8696a0] shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[15px] font-medium text-[#111b21] dark:text-[#e9edef] truncate",
                                                        children: res.name || res.display_name.split(',')[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[13px] text-[#54656f] dark:text-[#8696a0] truncate",
                                                        children: res.display_name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                                lineNumber: 226,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                        lineNumber: 224,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCurrentLocation,
                        className: "absolute bottom-32 right-4 z-10 p-3 bg-white dark:bg-[#202c33] text-[#00a884] rounded-full shadow-lg border border-black/5 hover:bg-gray-50 transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Navigation03Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navigation03Icon"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-[#202c33] p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-10 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col min-w-0 pr-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[16px] font-medium text-[#111b21] dark:text-[#e9edef] truncate",
                                            children: name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[13px] text-[#54656f] dark:text-[#8696a0] truncate",
                                            children: address
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                            lineNumber: 249,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSend,
                                className: "w-full py-3 bg-[#00a884] hover:bg-[#008f6f] text-white rounded-xl font-medium flex justify-center items-center gap-2 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, this),
                                    title === "Send location" ? "Send this location" : "Use this location"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                lineNumber: 253,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                        lineNumber: 245,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
        lineNumber: 186,
        columnNumber: 5
    }, this);
}
_s1(LocationModal, "/OgYyz+UYLgS3fpOP4upxXew9zU=");
_c5 = LocationModal;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "MapContainer");
__turbopack_context__.k.register(_c1, "TileLayer");
__turbopack_context__.k.register(_c2, "Marker");
__turbopack_context__.k.register(_c3, "MapEvents");
__turbopack_context__.k.register(_c4, "MapUpdater");
__turbopack_context__.k.register(_c5, "LocationModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modals/MediaViewerModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaViewerModal",
    ()=>MediaViewerModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Download01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/File01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function MediaViewerModal({ isOpen, onClose, items, currentIndex, onIndexChange }) {
    _s();
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MediaViewerModal.useCallback[handlePrev]": ()=>{
            if (currentIndex > 0) {
                onIndexChange(currentIndex - 1);
            }
        }
    }["MediaViewerModal.useCallback[handlePrev]"], [
        currentIndex,
        onIndexChange
    ]);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MediaViewerModal.useCallback[handleNext]": ()=>{
            if (currentIndex < items.length - 1) {
                onIndexChange(currentIndex + 1);
            }
        }
    }["MediaViewerModal.useCallback[handleNext]"], [
        currentIndex,
        items.length,
        onIndexChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MediaViewerModal.useEffect": ()=>{
            if (!isOpen) return;
            const handleKeyDown = {
                "MediaViewerModal.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape') {
                        onClose();
                    } else if (e.key === 'ArrowLeft') {
                        handlePrev();
                    } else if (e.key === 'ArrowRight') {
                        handleNext();
                    }
                }
            }["MediaViewerModal.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "MediaViewerModal.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["MediaViewerModal.useEffect"];
        }
    }["MediaViewerModal.useEffect"], [
        isOpen,
        onClose,
        handlePrev,
        handleNext
    ]);
    if (!isOpen || items.length === 0) return null;
    const currentItem = items[currentIndex] || items[0];
    const resolvedUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(currentItem === null || currentItem === void 0 ? void 0 : currentItem.url) || (currentItem === null || currentItem === void 0 ? void 0 : currentItem.url) || '';
    const handleDownload = async (e)=>{
        e.stopPropagation();
        if (!resolvedUrl) return;
        try {
            const res = await fetch(resolvedUrl);
            const blob = await res.blob();
            const blobUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = currentItem.name || (currentItem.type === 'video' ? 'video.mp4' : 'image.png');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(()=>URL.revokeObjectURL(blobUrl), 5000);
        } catch (_) {
            const a = document.createElement('a');
            a.href = resolvedUrl;
            a.download = currentItem.name || 'download';
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 md:px-6 pt-[max(0.75rem,calc(0.5rem+env(safe-area-inset-top,0px)))] pb-3 md:pb-4 bg-gradient-to-b from-black/90 via-black/60 to-transparent shrink-0 z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 sm:gap-3 text-white min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "md:hidden w-9 h-9 -ml-1 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shrink-0",
                                title: "Back",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-base tracking-wide truncate",
                                        children: currentItem.senderName || 'Media'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-white/70 truncate",
                                        children: [
                                            currentItem.time ? currentItem.time : '',
                                            " ",
                                            items.length > 1 ? `• ${currentIndex + 1} of ${items.length}` : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 sm:gap-3 shrink-0",
                        children: [
                            resolvedUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDownload,
                                className: "w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer",
                                title: "Download file",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Download01Icon"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer",
                                title: "Close viewer (Esc)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative flex items-center justify-center p-2 sm:p-4 md:p-8 overflow-hidden",
                children: [
                    items.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePrev,
                        disabled: currentIndex === 0,
                        className: `absolute left-3 md:left-8 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/30 active:scale-95 text-white flex items-center justify-center transition-all z-30 cursor-pointer shadow-lg backdrop-blur-sm ${currentIndex === 0 ? 'opacity-20 pointer-events-none' : 'opacity-80 hover:scale-105'}`,
                        title: "Previous (Left Arrow)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center justify-center max-w-full max-h-full",
                        children: currentItem.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            src: resolvedUrl,
                            controls: true,
                            autoPlay: true,
                            playsInline: true,
                            preload: "auto",
                            className: "max-w-[92vw] max-h-[75vh] sm:max-h-[80vh] rounded-lg shadow-2xl bg-black object-contain"
                        }, resolvedUrl, false, {
                            fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this) : currentItem.type === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: resolvedUrl,
                            alt: currentItem.name || 'Media',
                            className: "max-w-[92vw] max-h-[75vh] sm:max-h-[80vh] rounded-lg shadow-2xl object-contain"
                        }, resolvedUrl, false, {
                            fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center p-8 sm:p-10 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 text-white min-w-[260px] max-w-xs sm:max-w-md mx-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["File01Icon"], {
                                    size: 64,
                                    className: "text-white/80 mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-base sm:text-lg max-w-xs truncate text-center mb-1",
                                    children: currentItem.name || 'Document'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDownload,
                                    className: "mt-4 px-6 py-2.5 bg-[#00a884] hover:bg-[#008f6f] active:scale-95 text-white rounded-full font-medium text-sm transition-all flex items-center gap-2 shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Download01Icon"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                                            lineNumber: 183,
                                            columnNumber: 17
                                        }, this),
                                        "Download Document"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    items.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNext,
                        disabled: currentIndex === items.length - 1,
                        className: `absolute right-3 md:right-8 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/30 active:scale-95 text-white flex items-center justify-center transition-all z-30 cursor-pointer shadow-lg backdrop-blur-sm ${currentIndex === items.length - 1 ? 'opacity-20 pointer-events-none' : 'opacity-80 hover:scale-105'}`,
                        style: {
                            transform: 'rotate(180deg)'
                        },
                        title: "Next (Right Arrow)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                            size: 22
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this),
            currentItem.caption ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center px-4 md:px-6 pt-3 pb-[max(0.75rem,calc(0.5rem+env(safe-area-inset-bottom,0px)))] bg-gradient-to-t from-black/95 via-black/60 to-transparent shrink-0 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "max-w-2xl text-center text-white text-sm sm:text-base font-normal leading-relaxed whitespace-pre-wrap px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/15",
                    children: currentItem.caption
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                    lineNumber: 209,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                lineNumber: 208,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[env(safe-area-inset-bottom,0px)] shrink-0 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                lineNumber: 214,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(MediaViewerModal, "yaKoV6QEiFlW+napuH90xA2L3MA=");
_c = MediaViewerModal;
var _c;
__turbopack_context__.k.register(_c, "MediaViewerModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modals/CompleteProfileModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompleteProfileModal",
    ()=>CompleteProfileModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CallIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Location01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Briefcase01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Briefcase01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Alert01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
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
const LocationMapModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/user/components/settings/LocationMapModal.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/user/components/settings/LocationMapModal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500",
            children: "Loading Map..."
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
            lineNumber: 21,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = LocationMapModal;
function CompleteProfileModal({ onClose }) {
    var _this;
    _s();
    const { user, updateUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const normalizeGender = (g)=>{
        if (!g) return "";
        const lower = g.toLowerCase();
        if (lower === "male") return "Male";
        if (lower === "female") return "Female";
        if (lower === "transgender") return "Transgender";
        if (lower === "non-binary" || lower === "nonbinary") return "Non-binary";
        if (lower === "other") return "Other";
        if (lower.includes("prefer")) return "Prefer not to say";
        return g;
    };
    const [fullName, setFullName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((user === null || user === void 0 ? void 0 : user.full_name) || (user === null || user === void 0 ? void 0 : user.fullName) || "");
    const [profession, setProfession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((user === null || user === void 0 ? void 0 : user.profession) || "");
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((user === null || user === void 0 ? void 0 : user.location) || "");
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(normalizeGender((_this = user) === null || _this === void 0 ? void 0 : _this.gender));
    const [showLocationModal, setShowLocationModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "CompleteProfileModal.useEffect": ()=>{
            if (user) {
                var _this;
                setFullName(user.full_name || user.fullName || "");
                setProfession(user.profession || "");
                setLocation(user.location || "");
                setGender(normalizeGender((_this = user) === null || _this === void 0 ? void 0 : _this.gender));
            }
        }
    }["CompleteProfileModal.useEffect"], [
        user
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "CompleteProfileModal.useEffect": ()=>{
            let isMounted = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/user/profile").then({
                "CompleteProfileModal.useEffect": (res)=>{
                    var _res_data;
                    if (isMounted && ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && res.data.user) updateUser(res.data.user);
                }
            }["CompleteProfileModal.useEffect"]).catch({
                "CompleteProfileModal.useEffect": (err)=>console.error("CompleteProfileModal fetch error:", err)
            }["CompleteProfileModal.useEffect"]);
            return ({
                "CompleteProfileModal.useEffect": ()=>{
                    isMounted = false;
                }
            })["CompleteProfileModal.useEffect"];
        }
    }["CompleteProfileModal.useEffect"], [
        updateUser
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put("/user/profile", {
                fullName,
                profession,
                location,
                gender: gender || undefined
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                updateUser(res.data.user);
                sessionStorage.setItem("complete_profile_dismissed", "true");
                localStorage.setItem("complete_profile_dismissed", "true");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Profile updated successfully!");
                onClose();
            } else {
                setError(res.data.message || "Failed to update profile.");
            }
        } catch (err) {
            var _err_response_data, _err_response, _err_response_data1, _err_response1;
            setError(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || ((_err_response1 = err.response) === null || _err_response1 === void 0 ? void 0 : (_err_response_data1 = _err_response1.data) === null || _err_response_data1 === void 0 ? void 0 : _err_response_data1.error) || "An error occurred.");
        } finally{
            setIsLoading(false);
        }
    };
    const handleSkip = ()=>{
        sessionStorage.setItem("complete_profile_dismissed", "true");
        localStorage.setItem("complete_profile_dismissed", "true");
        onClose();
    };
    const pillInput = "w-full px-4 py-3.5 rounded-full border border-slate-200 bg-slate-50 text-slate-900 text-xs font-semibold outline-none focus:border-blue-500 transition-all placeholder:text-slate-400";
    // ─────────────── NATIVE (Android / iOS) — FULL-SCREEN STYLE ───────────────
    if (isNative) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[200] bg-white flex flex-col w-full h-[100dvh] max-h-[100dvh] overflow-hidden select-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 rounded-b-[45px] shadow-lg flex flex-col items-center justify-center px-6 py-8 pt-[calc(2.25rem+env(safe-area-inset-top,16px))] text-white overflow-hidden shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 overflow-hidden pointer-events-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-black/15 blur-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSkip,
                            className: "absolute top-[calc(1rem+env(safe-area-inset-top,12px))] right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 transition-all z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                size: 18,
                                className: "text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex flex-col items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-2 flex items-center justify-center shadow-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo_light.png",
                                        alt: "PingDart",
                                        width: 44,
                                        height: 44,
                                        style: {
                                            width: "auto",
                                            height: "auto"
                                        },
                                        className: "w-10 h-10 object-contain",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-black tracking-wider text-white uppercase",
                                    children: ("TURBOPACK compile-time value", "PingDart") || "PingDart"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-extrabold text-white",
                                            children: "Complete Your Profile"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-blue-100 font-medium mt-0.5",
                                            children: "Fill in your remaining account details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto px-6 py-5 space-y-4 pb-[calc(1.5rem+env(safe-area-inset-bottom,16px))]",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 p-3 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                    size: 15,
                                    className: "shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                    lineNumber: 145,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[14px] font-bold text-slate-500 uppercase tracking-wider px-1",
                                            children: "Full Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserIcon"], {
                                                    size: 15,
                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    required: true,
                                                    value: fullName,
                                                    onChange: (e)=>setFullName(e.target.value),
                                                    placeholder: "e.g. John Doe",
                                                    className: `${pillInput} pl-10`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[14px] font-bold text-slate-500 uppercase tracking-wider px-1",
                                            children: "Phone Number"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2.5 w-full px-4 py-3.5 rounded-full border border-slate-200 bg-slate-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallIcon"], {
                                                    size: 15,
                                                    className: "text-slate-400 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1 text-xs font-semibold text-slate-700 truncate",
                                                    children: (user === null || user === void 0 ? void 0 : user.phone) || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400 italic font-normal",
                                                        children: "Not set"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 35
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[14px] font-bold text-blue-500 shrink-0",
                                                    children: "Account Settings"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[14px] font-bold text-slate-500 uppercase tracking-wider px-1",
                                            children: "Profession / Title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Briefcase01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Briefcase01Icon"], {
                                                    size: 15,
                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: profession,
                                                    onChange: (e)=>setProfession(e.target.value),
                                                    placeholder: "e.g. Software Engineer",
                                                    className: `${pillInput} pl-10`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[14px] font-bold text-slate-500 uppercase tracking-wider px-1",
                                            children: "Location"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowLocationModal(true),
                                            className: "w-full flex items-center gap-3 px-4 py-3.5 rounded-full border border-slate-200 bg-slate-50 text-left active:scale-[0.98] transition-transform",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Location01Icon"], {
                                                    size: 15,
                                                    className: "text-slate-400 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `flex-1 text-xs font-semibold truncate ${location ? "text-slate-900" : "text-slate-400 font-normal"}`,
                                                    children: location || "Tap to select on map…"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[14px] font-bold text-slate-500 uppercase tracking-wider px-1",
                                            children: "Gender"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex p-1.5 bg-slate-100 rounded-full border border-slate-200 shadow-inner",
                                            children: [
                                                "Male",
                                                "Female",
                                                "Other"
                                            ].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setGender(g),
                                                    className: `flex-1 py-2.5 text-xs font-extrabold tracking-wider uppercase rounded-full transition-all duration-200 ${(gender === null || gender === void 0 ? void 0 : gender.toLowerCase()) === g.toLowerCase() ? "bg-white text-blue-600 shadow-md border border-slate-200/60 scale-[1.02]" : "text-slate-400 hover:text-slate-600"}`,
                                                    children: g
                                                }, g, false, {
                                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                    lineNumber: 210,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleSkip,
                                            className: "flex-1 py-3.5 rounded-full border border-slate-200 bg-slate-50 text-slate-600 text-xs font-bold hover:bg-slate-100 active:scale-95 transition-all",
                                            children: "Skip for now"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isLoading,
                                            className: "flex-1 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black uppercase tracking-wider shadow-lg shadow-blue-500/25 active:scale-95 transition-all disabled:opacity-50",
                                            children: isLoading ? "Saving…" : "Save Details"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this),
                showLocationModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LocationMapModal, {
                    initialLocation: location,
                    onSave: (newLoc)=>{
                        setLocation(newLoc);
                        setShowLocationModal(false);
                    },
                    onClose: ()=>setShowLocationModal(false)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                    lineNumber: 250,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this);
    }
    // ─────────────── WEB / DESKTOP DIALOG (unchanged) ───────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[460px] bg-white dark:bg-[#111b21] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-6 py-4 bg-[#4338ca] text-white shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[18px] font-bold",
                                        children: "Complete Your Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-indigo-100 mt-0.5",
                                        children: "Please fill in your remaining account details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                        lineNumber: 267,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSkip,
                                className: "p-1 hover:bg-black/10 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 overflow-y-auto max-h-[80vh]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed",
                                children: "Welcome to PingDart! Please take a moment to add these remaining details to set up your profile."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 p-3 bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-400 rounded-xl text-xs font-medium border border-red-100 dark:border-red-900/30",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                                children: "Full Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 282,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 bg-[#f0f2f5] dark:bg-[#202c33] rounded-xl px-3.5 py-2.5 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserIcon"], {
                                                        size: 18,
                                                        className: "text-gray-400 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "e.g. John Doe",
                                                        value: fullName,
                                                        onChange: (e)=>setFullName(e.target.value),
                                                        className: "flex-1 bg-transparent outline-none text-[#111b21] dark:text-[#e9edef] placeholder-gray-400",
                                                        required: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 283,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                        lineNumber: 281,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                                children: "Phone Number"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 bg-[#f0f2f5] dark:bg-[#202c33] rounded-xl px-3.5 py-2.5 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallIcon"], {
                                                        size: 18,
                                                        className: "text-gray-400 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-1 text-[#111b21] dark:text-[#e9edef]",
                                                        children: (user === null || user === void 0 ? void 0 : user.phone) || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-400 italic",
                                                            children: "Not set"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 93
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[14px] text-indigo-500 font-medium",
                                                        children: "Change in Account Settings"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 291,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                                children: "Profession / Title"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 298,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 bg-[#f0f2f5] dark:bg-[#202c33] rounded-xl px-3.5 py-2.5 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Briefcase01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Briefcase01Icon"], {
                                                        size: 18,
                                                        className: "text-gray-400 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "e.g. Software Engineer",
                                                        value: profession,
                                                        onChange: (e)=>setProfession(e.target.value),
                                                        className: "flex-1 bg-transparent outline-none text-[#111b21] dark:text-[#e9edef] placeholder-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                                children: "Location"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 bg-[#f0f2f5] dark:bg-[#202c33] rounded-xl px-3.5 py-2.5 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Location01Icon"], {
                                                        size: 18,
                                                        className: "text-gray-400 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        readOnly: true,
                                                        placeholder: "Click to select location on map...",
                                                        value: location,
                                                        onClick: ()=>setShowLocationModal(true),
                                                        className: "flex-1 bg-transparent outline-none cursor-pointer text-[#111b21] dark:text-[#e9edef] placeholder-gray-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 309,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 307,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                                children: "Gender"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: gender,
                                                onChange: (e)=>setGender(e.target.value),
                                                className: "w-full bg-[#f0f2f5] dark:bg-[#202c33] border-none rounded-xl px-3.5 py-2.5 text-sm text-[#111b21] dark:text-[#e9edef] outline-none cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select Gender"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Male",
                                                        children: "Male"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Female",
                                                        children: "Female"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Transgender",
                                                        children: "Transgender"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Non-binary",
                                                        children: "Non-binary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Other",
                                                        children: "Other"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Prefer not to say",
                                                        children: "Prefer not to say"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 324,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 316,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleSkip,
                                                className: "flex-1 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm",
                                                children: "Skip for now"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                disabled: isLoading,
                                                className: "flex-1 py-3 bg-[#4338ca] text-white font-medium rounded-xl hover:bg-[#6d28d9] transition-colors text-sm disabled:opacity-50",
                                                children: isLoading ? "Saving…" : "Save Details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                        lineNumber: 327,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                        lineNumber: 273,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            showLocationModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LocationMapModal, {
                initialLocation: location,
                onSave: (newLoc)=>{
                    setLocation(newLoc);
                    setShowLocationModal(false);
                },
                onClose: ()=>setShowLocationModal(false)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                lineNumber: 341,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
        lineNumber: 262,
        columnNumber: 5
    }, this);
}
_s(CompleteProfileModal, "c3bTCuLR9UmaAuyHpjQVp7tQw34=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c1 = CompleteProfileModal;
var _c, _c1;
__turbopack_context__.k.register(_c, "LocationMapModal");
__turbopack_context__.k.register(_c1, "CompleteProfileModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileScreenSkeleton",
    ()=>MobileScreenSkeleton,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function MobileScreenSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 w-full h-full flex flex-col bg-[#f8fafc] dark:bg-[#0b141a] overflow-hidden select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-b-[24px] shadow-md shrink-0 pt-[calc(0.85rem+env(safe-area-inset-top,16px))] pb-4 px-4 z-20 relative overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-[8px] bg-white/25 backdrop-blur-md"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 w-28 bg-white/30 rounded-md"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                            lineNumber: 15,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-2.5 w-16 bg-white/20 rounded-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                            lineNumber: 16,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-[8px] bg-white/25 backdrop-blur-md"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-[8px] bg-white/25 backdrop-blur-md"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                    lineNumber: 23,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-4 py-3.5 space-y-3.5 animate-pulse pb-[calc(5rem+env(safe-area-inset-bottom,16px))]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-white dark:bg-[#111827] rounded-[18px] p-4 shadow-xs border border-slate-100 dark:border-slate-800/80 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-13 h-13 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded-md"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                                lineNumber: 35,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2.5 w-20 bg-slate-100 dark:bg-slate-800/60 rounded-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                                lineNumber: 36,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5 pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2.5 w-full bg-slate-100 dark:bg-slate-800/40 rounded-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2.5 w-4/5 bg-slate-100 dark:bg-slate-800/40 rounded-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-7 w-20 bg-slate-100 dark:bg-slate-800/60 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-7 w-20 bg-slate-100 dark:bg-slate-800/60 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-7 w-16 bg-slate-100 dark:bg-slate-800/60 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 overflow-hidden py-1",
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-1.5 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-slate-900 shadow-xs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2 w-8 bg-slate-200 dark:bg-slate-800 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-[#111827] rounded-[18px] p-3 shadow-xs border border-slate-100 dark:border-slate-800/80 space-y-2.5",
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 p-2 rounded-[10px] bg-slate-50/80 dark:bg-slate-800/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-3 bg-slate-200 dark:bg-slate-800 rounded w-2/3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-2.5 bg-slate-100 dark:bg-slate-800/60 rounded w-1/3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                                lineNumber: 70,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800/60 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = MobileScreenSkeleton;
const __TURBOPACK__default__export__ = MobileScreenSkeleton;
var _c;
__turbopack_context__.k.register(_c, "MobileScreenSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/utils/safeLazy.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScreenFallback",
    ()=>ScreenFallback,
    "safeLazy",
    ()=>safeLazy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$shared$2f$MobileScreenSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx [app-client] (ecmascript)");
"use client";
;
;
;
function safeLazy(importFn, exportName) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(async ()=>{
        try {
            const mod = await importFn();
            const Component = exportName ? mod[exportName] || mod.default : mod.default || Object.values(mod)[0];
            return {
                default: Component
            };
        } catch (err) {
            console.warn(`[SafeLazy] Retrying bundle import for ${exportName || 'screen'}:`, err);
            try {
                const mod = await importFn();
                const Component = exportName ? mod[exportName] || mod.default : mod.default || Object.values(mod)[0];
                return {
                    default: Component
                };
            } catch (retryErr) {
                console.error(`[SafeLazy] Failed to load ${exportName || 'screen'}:`, retryErr);
                const FallbackScreen = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3 bg-[#f8fafc] dark:bg-[#0b141a]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold text-slate-700 dark:text-slate-300",
                                children: "Screen temporarily unavailable"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>window.location.reload(),
                                className: "px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-xs cursor-pointer active:scale-95 transition-transform",
                                children: "Tap to Refresh"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this);
                return {
                    default: FallbackScreen
                };
            }
        }
    });
}
function ScreenFallback() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "block md:hidden w-full h-full flex-1 min-w-0 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$shared$2f$MobileScreenSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileScreenSkeleton"], {}, void 0, false, {
                    fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex flex-1 w-full h-full bg-[#f8fafc] dark:bg-[#0b141a] overflow-hidden select-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-80 lg:w-96 flex flex-col bg-white dark:bg-[#111827] border-r border-slate-200/80 dark:border-slate-800 p-4 space-y-3.5 shrink-0 animate-pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-[8px] bg-slate-200 dark:bg-slate-800"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-3.5 w-24 bg-slate-200 dark:bg-slate-800 rounded-[4px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-2.5 w-32 bg-slate-100 dark:bg-slate-800/60 rounded-[4px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-14 h-6 bg-slate-200 dark:bg-slate-800 rounded-[6px]"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                        lineNumber: 68,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-9 bg-slate-100 dark:bg-slate-800/60 rounded-[8px] w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-7 bg-slate-100 dark:bg-slate-800/40 rounded-[6px] w-3/4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 pt-3",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 p-2 rounded-[8px] bg-slate-50/60 dark:bg-slate-800/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-3 bg-slate-200 dark:bg-slate-800 rounded w-2/3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-2.5 bg-slate-100 dark:bg-slate-800/60 rounded w-1/2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                                        lineNumber: 80,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                                lineNumber: 78,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col p-6 space-y-4 bg-white dark:bg-[#0b141a] animate-pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-7 w-40 bg-slate-200 dark:bg-slate-800 rounded-md"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-28 w-full bg-slate-100 dark:bg-slate-800/60 rounded-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-3 gap-3 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-28 bg-slate-100 dark:bg-slate-800/40 rounded-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-28 bg-slate-100 dark:bg-slate-800/40 rounded-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-28 bg-slate-100 dark:bg-slate-800/40 rounded-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = ScreenFallback;
var _c;
__turbopack_context__.k.register(_c, "ScreenFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/utils/decryptPreview.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$utils$2f$decryptPreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/utils/decryptPreview.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/hooks/useNotifications.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNotificationSettings",
    ()=>getNotificationSettings,
    "playMessageChime",
    ()=>playMessageChime,
    "resolveNotificationDetails",
    ()=>resolveNotificationDetails,
    "showInAppToast",
    ()=>showInAppToast,
    "showSystemNotification",
    ()=>showSystemNotification
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript)");
;
function getNotificationSettings() {
    try {
        const saved = localStorage.getItem("notification_settings");
        if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
        conversationTones: true,
        highPriorityMessages: true
    };
}
function playMessageChime() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
            const ctx = new AudioCtx();
            if (ctx.state === 'suspended') {
                ctx.resume().catch(()=>{});
            }
            const osc1 = ctx.createOscillator();
            const osc2 = ctx.createOscillator();
            const gainNode = ctx.createGain();
            osc1.type = 'sine';
            osc1.frequency.setValueAtTime(523.25, ctx.currentTime);
            osc1.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.15);
            osc2.type = 'sine';
            osc2.frequency.setValueAtTime(659.25, ctx.currentTime);
            gainNode.gain.setValueAtTime(0.18, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
            osc1.connect(gainNode);
            osc2.connect(gainNode);
            gainNode.connect(ctx.destination);
            osc1.start();
            osc2.start();
            osc1.stop(ctx.currentTime + 0.35);
            osc2.stop(ctx.currentTime + 0.35);
            setTimeout(()=>{
                try {
                    ctx.close().catch(()=>{});
                } catch (_) {}
            }, 500);
        }
    } catch (e) {
        console.error("Audio beep failed", e);
    }
}
function resolveNotificationDetails(messageData, room) {
    var _messageData_data, _messageData_data1, _messageData_data2;
    let senderName = messageData.senderName || (room ? room.sender || room.name : 'Someone');
    let body = 'You have a new message';
    const rawText = messageData.text || '';
    const msgType = messageData.type || 'text';
    const pushPreview = ((_messageData_data = messageData.data) === null || _messageData_data === void 0 ? void 0 : _messageData_data.pushPreview) || ((_messageData_data1 = messageData.data) === null || _messageData_data1 === void 0 ? void 0 : _messageData_data1.preview) || (((_messageData_data2 = messageData.data) === null || _messageData_data2 === void 0 ? void 0 : _messageData_data2.text) && !messageData.data.text.startsWith('{') ? messageData.data.text : null);
    if (room && room.isLocked) {
        senderName = 'Someone';
        body = 'You have a new message';
    } else if (msgType === 'image') {
        body = '📷 Photo';
    } else if (msgType === 'video') {
        body = '🎥 Video';
    } else if (msgType === 'audio') {
        body = '🎵 Audio';
    } else if (msgType === 'document') {
        body = '📄 Document';
    } else if (msgType === 'sticker') {
        body = '🎭 Sticker';
    } else if (msgType === 'location') {
        body = '📍 Location';
    } else if (pushPreview && typeof pushPreview === 'string') {
        body = pushPreview.length > 80 ? pushPreview.slice(0, 80) + '…' : pushPreview;
    } else if (rawText.startsWith('{')) {
        try {
            const parsed = JSON.parse(rawText);
            if (parsed.pushPreview && typeof parsed.pushPreview === 'string' && !parsed.pushPreview.startsWith('{')) {
                body = parsed.pushPreview.length > 80 ? parsed.pushPreview.slice(0, 80) + '…' : parsed.pushPreview;
            } else if (parsed.preview && typeof parsed.preview === 'string' && !parsed.preview.startsWith('{')) {
                body = parsed.preview.length > 80 ? parsed.preview.slice(0, 80) + '…' : parsed.preview;
            } else if (parsed.text && typeof parsed.text === 'string' && !parsed.text.startsWith('{')) {
                body = parsed.text.length > 80 ? parsed.text.slice(0, 80) + '…' : parsed.text;
            } else {
                body = '🔒 Encrypted message';
            }
        } catch (_) {
            body = '🔒 Encrypted message';
        }
    } else if (rawText.includes('__e2ee') || rawText.includes('"_e2ee"') || rawText.includes('"ciphertext"') || rawText.includes('"type"') && rawText.includes('"body"')) {
        body = '🔒 Encrypted message';
    } else if (rawText) {
        body = rawText.length > 80 ? rawText.slice(0, 80) + '…' : rawText;
    } else {
        body = 'Sent an attachment';
    }
    // Also check if cached decrypted preview is available
    const cachedPlain = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedPreview"](Number(messageData.roomId), messageData.id);
    if (cachedPlain && cachedPlain !== '🔒 Encrypted message') {
        body = cachedPlain.length > 80 ? cachedPlain.slice(0, 80) + '…' : cachedPlain;
    }
    return {
        senderName,
        body
    };
}
function showInAppToast(messageData, room) {
    const { senderName, body } = resolveNotificationDetails(messageData, room);
    __turbopack_context__.A("[project]/src/components/chat/InAppChatToast.tsx [app-client] (ecmascript, async loader)").then(({ showInAppChatToast })=>{
        showInAppChatToast({
            roomId: Number(messageData.roomId),
            senderId: messageData.senderId,
            title: senderName,
            body,
            avatarUrl: messageData.senderAvatar || (room === null || room === void 0 ? void 0 : room.avatarUrl) || null,
            senderName
        });
    });
}
function showSystemNotification(messageData, onOpenChat) {
    const dedupKey = `pingdart_notif_fired_${messageData.roomId}_${messageData.id}`;
    const alreadyFired = "object" !== 'undefined' && localStorage.getItem(dedupKey);
    if (alreadyFired) return;
    try {
        localStorage.setItem(dedupKey, '1');
        setTimeout(()=>{
            try {
                localStorage.removeItem(dedupKey);
            } catch (_) {}
        }, 8000);
    } catch (_) {}
    __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)").then(({ chatApi })=>{
        chatApi.getRooms().then((res)=>{
            if (res.success) {
                const room = res.data.find((r)=>String(r.id) === String(messageData.roomId));
                const { senderName, body } = resolveNotificationDetails(messageData, room);
                if ("object" !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
                    try {
                        const notif = new Notification(`New message from ${senderName}`, {
                            body,
                            icon: '/logo_light.png',
                            tag: `pingdart_chat_${messageData.roomId}`,
                            renotify: true
                        });
                        notif.onclick = ()=>{
                            window.focus();
                            onOpenChat(Number(messageData.roomId));
                            notif.close();
                        };
                    } catch (e) {
                        console.warn('[Notification] System lockscreen notification failed:', e);
                    }
                }
            }
        });
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/hooks/useSocketEvents.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSocketEvents",
    ()=>useSocketEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$call$2f$CallContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/user/components/call/CallContext.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioTones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/audioTones.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$network$2f$networkStatusEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/network/networkStatusEngine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pinnedMessages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$decryptPreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/user/utils/decryptPreview.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$utils$2f$decryptPreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/utils/decryptPreview.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/hooks/useNotifications.ts [app-client] (ecmascript)");
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
function useSocketEvents({ activeNavRef, selectedMsgIdRef, messagesRef, setMessages, fetchRooms, handleNavChange, handleMsgSelect }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { accessToken } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { socket, setSocket } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallContext"])();
    const typingTimeoutsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const pendingDeliveryByRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const deliveryFlushTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Stable callback refs to prevent unnecessary socket recreations
    const fetchRoomsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(fetchRooms);
    fetchRoomsRef.current = fetchRooms;
    const handleNavChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(handleNavChange);
    handleNavChangeRef.current = handleNavChange;
    const handleMsgSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(handleMsgSelect);
    handleMsgSelectRef.current = handleMsgSelect;
    // Unique identifier for this specific browser tab instance to distinguish it from other tabs
    const tabInstanceIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(("TURBOPACK compile-time truthy", 1) ? window.__pingdart_tab_id || (window.__pingdart_tab_id = `tab_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`) : "TURBOPACK unreachable");
    // WhatsApp-like document title and background unread state
    const backgroundUnreadCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const originalTitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(typeof document !== 'undefined' ? document.title || 'PingDart Chat' : 'PingDart Chat');
    const titleFlashTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSocketEvents.useEffect": ()=>{
            const token = accessToken || (("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("access_token") : "TURBOPACK unreachable") || "";
            if (!token) return;
            // Request desktop notification permission non-blockingly if not decided
            if ("object" !== 'undefined' && 'Notification' in window && Notification.permission === 'default') {
                try {
                    Notification.requestPermission().catch({
                        "useSocketEvents.useEffect": ()=>{}
                    }["useSocketEvents.useEffect"]);
                } catch (_) {}
            }
            const socketUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])();
            const cleanedUrl = socketUrl.trim();
            // Prefer WebSocket directly to maintain real-time background TCP stream without browser timer throttling
            const socketInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(`${cleanedUrl}/api/realtime/`, {
                auth: {
                    token
                },
                query: {
                    token
                },
                transports: [
                    'websocket',
                    'polling'
                ],
                autoConnect: true,
                reconnection: true,
                reconnectionAttempts: Infinity,
                reconnectionDelay: 1000,
                reconnectionDelayMax: 5000,
                timeout: 10000
            });
            const getLatestToken = {
                "useSocketEvents.useEffect.getLatestToken": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().accessToken || (("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("access_token") : "TURBOPACK unreachable") || ""
            }["useSocketEvents.useEffect.getLatestToken"];
            socketInstance.on('reconnect_attempt', {
                "useSocketEvents.useEffect": ()=>{
                    const latestToken = getLatestToken();
                    socketInstance.io.opts.query = {
                        token: latestToken
                    };
                    socketInstance.auth = {
                        token: latestToken
                    };
                }
            }["useSocketEvents.useEffect"]);
            socketInstance.on('connect', {
                "useSocketEvents.useEffect": ()=>{
                    __turbopack_context__.A("[project]/src/services/presenceLifecycleManager.ts [app-client] (ecmascript, async loader)").then({
                        "useSocketEvents.useEffect": ({ presenceLifecycleManager })=>{
                            presenceLifecycleManager.init(socketInstance);
                        }
                    }["useSocketEvents.useEffect"]);
                    fetchRooms();
                    // Auto-deliver any pending messages waiting for this user now that socket connected
                    try {
                        __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)").then({
                            "useSocketEvents.useEffect": ({ chatApi })=>{
                                chatApi.markAsDelivered().catch({
                                    "useSocketEvents.useEffect": ()=>{}
                                }["useSocketEvents.useEffect"]);
                            }
                        }["useSocketEvents.useEffect"]);
                    } catch (_) {}
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.dispatchEvent(new CustomEvent('app:reconnect_sync', {
                            detail: {
                                roomId: selectedMsgIdRef.current
                            }
                        }));
                    }
                }
            }["useSocketEvents.useEffect"]);
            socketInstance.on('status:new', {
                "useSocketEvents.useEffect": ()=>{
                    window.dispatchEvent(new Event('status_refresh'));
                    fetchRooms();
                }
            }["useSocketEvents.useEffect"]);
            socketInstance.on('budget:vault_updated', {
                "useSocketEvents.useEffect": (data)=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.dispatchEvent(new CustomEvent('budget:remote_sync', {
                            detail: data
                        }));
                    }
                }
            }["useSocketEvents.useEffect"]);
            // Remote session revocation triggered from mobile Linked Devices screen
            socketInstance.on('device:unlinked', {
                "useSocketEvents.useEffect": (data)=>{
                    var _Capacitor_isNativePlatform, _Capacitor;
                    console.log('[Socket] 🔒 Received device:unlinked event:', data);
                    const isNative = "object" !== 'undefined' && !!((_Capacitor = window.Capacitor) === null || _Capacitor === void 0 ? void 0 : (_Capacitor_isNativePlatform = _Capacitor.isNativePlatform) === null || _Capacitor_isNativePlatform === void 0 ? void 0 : _Capacitor_isNativePlatform.call(_Capacitor));
                    const myDeviceId = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('pingdart_device_id') : "TURBOPACK unreachable";
                    // Primary native mobile device should NEVER be logged out remotely by socket event
                    if (!isNative && (data === null || data === void 0 ? void 0 : data.deviceId) && myDeviceId && data.deviceId === myDeviceId) {
                        console.log('[Socket] 🔒 This secondary device was unlinked. Logging out.');
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().logout();
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('This device was logged out from your phone.', {
                            id: 'unlinked-device-notice'
                        });
                        router.replace("/login?reason=unlinked");
                    } else {
                        console.log('[Socket] 📱 Remote device unlinked. Keeping this device active.');
                        window.dispatchEvent(new CustomEvent('device_list_updated', {
                            detail: data
                        }));
                    }
                }
            }["useSocketEvents.useEffect"]);
            socketInstance.on('device:linked', {
                "useSocketEvents.useEffect": (data)=>{
                    console.log('[Socket] 📱 Received device:linked event:', data);
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.dispatchEvent(new CustomEvent('device_list_updated', {
                            detail: data
                        }));
                    }
                }
            }["useSocketEvents.useEffect"]);
            socketInstance.on('device:link-code-prompt', {
                "useSocketEvents.useEffect": (data)=>{
                    console.log('[Socket] 🔑 Received device:link-code-prompt event:', data);
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.dispatchEvent(new CustomEvent('device:link_code_prompt', {
                            detail: data
                        }));
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`Linking request from ${(data === null || data === void 0 ? void 0 : data.deviceName) || 'Desktop'}. Code: ${(data === null || data === void 0 ? void 0 : data.code) || ''}`, {
                            duration: 10000,
                            id: 'link-code-prompt'
                        });
                    }
                }
            }["useSocketEvents.useEffect"]);
            // Server-authoritative real-time notification events
            socketInstance.on('notification:unread_count', {
                "useSocketEvents.useEffect": (payload)=>{
                    if (typeof (payload === null || payload === void 0 ? void 0 : payload.count) === 'number' && "object" !== 'undefined') {
                        window.dispatchEvent(new CustomEvent('notification:unread_count', {
                            detail: payload.count
                        }));
                        window.dispatchEvent(new CustomEvent('app_notifications_count', {
                            detail: payload.count
                        }));
                    }
                }
            }["useSocketEvents.useEffect"]);
            socketInstance.on('notification:new', {
                "useSocketEvents.useEffect": (notif)=>{
                    var _notif_metadata;
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.dispatchEvent(new CustomEvent('notification:new', {
                            detail: notif
                        }));
                        window.dispatchEvent(new CustomEvent('notification:updated', {
                            detail: notif
                        }));
                        window.dispatchEvent(new CustomEvent('app_notifications_new', {
                            detail: notif
                        }));
                        window.dispatchEvent(new Event('app_notifications_updated'));
                    }
                    // 1. If this is a chat notification, chat:new_message already manages in-app chat toasts.
                    // Do not show a second generic toast with "Open Chat".
                    if (notif.type === 'chat') {
                        return;
                    }
                    // 2. If this notification belongs to the currently active chat room, never show a toast
                    const notifRoomId = ((_notif_metadata = notif.metadata) === null || _notif_metadata === void 0 ? void 0 : _notif_metadata.roomId) || notif.roomId || (notif.actionUrl ? new URLSearchParams(notif.actionUrl.split('?')[1] || '').get('roomId') : null);
                    const currentActiveRoomId = selectedMsgIdRef.current || (("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeMsgId"])(new URLSearchParams(window.location.search).get('msgId')) : "TURBOPACK unreachable");
                    if (notifRoomId && currentActiveRoomId && String(notifRoomId) === String(currentActiveRoomId) && [
                        'Chats',
                        'Channels'
                    ].includes(activeNavRef.current)) {
                        return;
                    }
                    if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
                        __turbopack_context__.A("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript, async loader)").then({
                            "useSocketEvents.useEffect": ({ toast })=>{
                                toast(notif.title || 'New Notification', {
                                    description: notif.body || '',
                                    duration: 5000,
                                    action: notif.type === 'mail' ? {
                                        label: 'View Mail',
                                        onClick: ({
                                            "useSocketEvents.useEffect": ()=>handleNavChange('Mail')
                                        })["useSocketEvents.useEffect"]
                                    } : undefined
                                });
                            }
                        }["useSocketEvents.useEffect"]);
                    }
                }
            }["useSocketEvents.useEffect"]);
            socketInstance.on('notification:updated', {
                "useSocketEvents.useEffect": (payload)=>{
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.dispatchEvent(new CustomEvent('notification:updated', {
                            detail: payload
                        }));
                        window.dispatchEvent(new Event('app_notifications_updated'));
                    }
                }
            }["useSocketEvents.useEffect"]);
            socketInstance.on('explore:new_neighbor_joined', {
                "useSocketEvents.useEffect": (data)=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(data.title || '👋 New Neighbor Joined Ping!', {
                        description: data.body || 'Someone new joined within 5 km of you. Open Explore to connect!',
                        action: {
                            label: 'Explore',
                            onClick: {
                                "useSocketEvents.useEffect": ()=>handleNavChange('Explore')
                            }["useSocketEvents.useEffect"]
                        }
                    });
                }
            }["useSocketEvents.useEffect"]);
            // Deduplication: track last seen message ID per room to prevent double-fire
            const processedMsgIds = new Set();
            const queueDeliveryAck = {
                "useSocketEvents.useEffect.queueDeliveryAck": (roomId, messageId)=>{
                    if (!roomId) return;
                    const numRoomId = Number(roomId);
                    if (!pendingDeliveryByRoom.current.has(numRoomId)) {
                        pendingDeliveryByRoom.current.set(numRoomId, new Set());
                    }
                    if (messageId) {
                        pendingDeliveryByRoom.current.get(numRoomId).add(Number(messageId));
                    }
                    if (deliveryFlushTimerRef.current) {
                        clearTimeout(deliveryFlushTimerRef.current);
                    }
                    deliveryFlushTimerRef.current = setTimeout({
                        "useSocketEvents.useEffect.queueDeliveryAck": ()=>{
                            const queue = new Map(pendingDeliveryByRoom.current);
                            pendingDeliveryByRoom.current.clear();
                            deliveryFlushTimerRef.current = null;
                            queue.forEach({
                                "useSocketEvents.useEffect.queueDeliveryAck": (msgIdSet, rId)=>{
                                    const msgIds = Array.from(msgIdSet);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].markAsDelivered(rId, msgIds.length > 0 ? msgIds : undefined).catch({
                                        "useSocketEvents.useEffect.queueDeliveryAck": ()=>{}
                                    }["useSocketEvents.useEffect.queueDeliveryAck"]);
                                }
                            }["useSocketEvents.useEffect.queueDeliveryAck"]);
                        }
                    }["useSocketEvents.useEffect.queueDeliveryAck"], 100);
                }
            }["useSocketEvents.useEffect.queueDeliveryAck"];
            const updateActiveTabHeartbeat = {
                "useSocketEvents.useEffect.updateActiveTabHeartbeat": ()=>{
                    if ("object" === 'undefined' || document.visibilityState !== 'visible') return;
                    try {
                        localStorage.setItem('pingdart_active_tab_heartbeat', JSON.stringify({
                            tabId: tabInstanceIdRef.current,
                            ts: Date.now()
                        }));
                    } catch (_) {}
                }
            }["useSocketEvents.useEffect.updateActiveTabHeartbeat"];
            const restoreDocumentTitle = {
                "useSocketEvents.useEffect.restoreDocumentTitle": ()=>{
                    if (typeof document === 'undefined') return;
                    if (titleFlashTimerRef.current) {
                        clearInterval(titleFlashTimerRef.current);
                        titleFlashTimerRef.current = null;
                    }
                    backgroundUnreadCountRef.current = 0;
                    document.title = originalTitleRef.current || 'PingDart Chat';
                }
            }["useSocketEvents.useEffect.restoreDocumentTitle"];
            const updateBackgroundTabTitle = {
                "useSocketEvents.useEffect.updateBackgroundTabTitle": (senderName, previewText)=>{
                    if (typeof document === 'undefined') return;
                    if (!originalTitleRef.current || originalTitleRef.current.startsWith('(')) {
                        originalTitleRef.current = 'PingDart Chat';
                    }
                    backgroundUnreadCountRef.current += 1;
                    const count = backgroundUnreadCountRef.current;
                    const cleanPreview = previewText.length > 25 ? previewText.slice(0, 25) + '…' : previewText;
                    const messageAlert = `(${count}) ${senderName}: ${cleanPreview}`;
                    const countAlert = `(${count}) New message | PingDart`;
                    document.title = messageAlert;
                    if (titleFlashTimerRef.current) clearInterval(titleFlashTimerRef.current);
                    let toggle = false;
                    titleFlashTimerRef.current = setInterval({
                        "useSocketEvents.useEffect.updateBackgroundTabTitle": ()=>{
                            if (document.visibilityState === 'visible') {
                                restoreDocumentTitle();
                                return;
                            }
                            document.title = toggle ? messageAlert : countAlert;
                            toggle = !toggle;
                        }
                    }["useSocketEvents.useEffect.updateBackgroundTabTitle"], 2000);
                }
            }["useSocketEvents.useEffect.updateBackgroundTabTitle"];
            /**
     * Socket Event: chat:new_message
     */ const handleSocketNewMessage = {
                "useSocketEvents.useEffect.handleSocketNewMessage": (messageData)=>{
                    var _useAuthStore_getState_user;
                    const dedupKey = `${messageData.roomId}:${messageData.id}`;
                    if (messageData.id && processedMsgIds.has(dedupKey)) return;
                    if (messageData.id) {
                        processedMsgIds.add(dedupKey);
                        if (processedMsgIds.size > 200) {
                            const first = processedMsgIds.values().next().value;
                            if (first) processedMsgIds.delete(first);
                        }
                    }
                    const currentUserId = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
                    const isFromOtherUser = String(messageData.senderId) !== String(currentUserId);
                    // Instantly acknowledge delivery to server over socket AND batched persistent HTTP ACK so sender sees ✓✓
                    if (isFromOtherUser && messageData.roomId) {
                        socketInstance.emit('chat:ack_delivered', {
                            roomId: messageData.roomId,
                            messageId: messageData.id
                        });
                        queueDeliveryAck(Number(messageData.roomId), messageData.id ? Number(messageData.id) : undefined);
                    }
                    // Source of truth: ChatDetail writes its roomId to sessionStorage on mount
                    // and removes it on unmount. This is the only reliable signal that the user
                    // is *actively looking* at a specific chat (not just having navigated to it before).
                    const currentActiveRoomId = ({
                        "useSocketEvents.useEffect.handleSocketNewMessage.currentActiveRoomId": ()=>{
                            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                            ;
                            try {
                                return sessionStorage.getItem('pingdart_active_chat_room') || null;
                            } catch (_) {
                                return null;
                            }
                        }
                    })["useSocketEvents.useEffect.handleSocketNewMessage.currentActiveRoomId"]();
                    const isChatOpen = Boolean(currentActiveRoomId) && String(currentActiveRoomId) === String(messageData.roomId) && typeof document !== 'undefined' && document.visibilityState === 'visible';
                    const targetRoom = messagesRef.current.find({
                        "useSocketEvents.useEffect.handleSocketNewMessage.targetRoom": (m)=>String(m.id) === String(messageData.roomId)
                    }["useSocketEvents.useEffect.handleSocketNewMessage.targetRoom"]);
                    const isRoomMuted = !!(targetRoom === null || targetRoom === void 0 ? void 0 : targetRoom.isMuted);
                    // Optimistic update: update chat list preview & timestamp instantly
                    setMessages({
                        "useSocketEvents.useEffect.handleSocketNewMessage": (prev)=>{
                            const roomInList = prev.find({
                                "useSocketEvents.useEffect.handleSocketNewMessage.roomInList": (m)=>String(m.id) === String(messageData.roomId) || isFromOtherUser && m.otherUserId && String(m.otherUserId) === String(messageData.senderId)
                            }["useSocketEvents.useEffect.handleSocketNewMessage.roomInList"]);
                            const resolvedRoomId = roomInList ? roomInList.id : messageData.roomId;
                            const isDirectChat = (roomInList === null || roomInList === void 0 ? void 0 : roomInList.type) === 'direct' || roomInList && !roomInList.type;
                            let newPreview = messageData.text;
                            if (messageData.type === 'sticker') {
                                newPreview = '[sticker]';
                            } else if (!newPreview) {
                                newPreview = messageData.type ? `[${messageData.type}]` : 'Attachment';
                            }
                            const isEncrypted = typeof newPreview === 'string' && newPreview.startsWith('{') && (newPreview.includes('__e2ee') || newPreview.includes('_e2ee'));
                            if (isEncrypted) {
                                const cached = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedPreview"](Number(messageData.roomId), messageData.id);
                                if (cached && cached !== '🔒 Encrypted message') {
                                    newPreview = cached;
                                } else {
                                    try {
                                        const parsed = JSON.parse(newPreview);
                                        if (parsed.pushPreview) {
                                            newPreview = parsed.pushPreview;
                                        } else if (parsed.preview) {
                                            newPreview = parsed.preview;
                                        } else {
                                            newPreview = '🔒 Encrypted message';
                                        }
                                    } catch (_) {
                                        newPreview = '🔒 Encrypted message';
                                    }
                                    if (isDirectChat) {
                                        const otherUserId = (roomInList === null || roomInList === void 0 ? void 0 : roomInList.otherUserId) || (isFromOtherUser ? messageData.senderId : null);
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$utils$2f$decryptPreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptPreview"])(messageData.text, !isFromOtherUser, Number(messageData.roomId), otherUserId, messageData.id).then({
                                            "useSocketEvents.useEffect.handleSocketNewMessage": (decrypted)=>{
                                                if (decrypted && decrypted !== '🔒 Encrypted message') {
                                                    setMessages({
                                                        "useSocketEvents.useEffect.handleSocketNewMessage": (prev2)=>prev2.map({
                                                                "useSocketEvents.useEffect.handleSocketNewMessage": (m)=>{
                                                                    if (String(m.id) === String(messageData.roomId)) {
                                                                        const currentId = m.lastMessageId || 0;
                                                                        const msgId = messageData.id || 0;
                                                                        const currentTs = m.lastMessageTimestamp ? new Date(m.lastMessageTimestamp).getTime() : 0;
                                                                        const msgTs = messageData.createdAt ? new Date(messageData.createdAt).getTime() : 0;
                                                                        if (msgId > 0 && msgId >= currentId || msgId === 0 && currentTs <= msgTs) {
                                                                            return {
                                                                                ...m,
                                                                                preview: decrypted
                                                                            };
                                                                        }
                                                                    }
                                                                    return m;
                                                                }
                                                            }["useSocketEvents.useEffect.handleSocketNewMessage"])
                                                    }["useSocketEvents.useEffect.handleSocketNewMessage"]);
                                                }
                                            }
                                        }["useSocketEvents.useEffect.handleSocketNewMessage"]);
                                    }
                                }
                            }
                            if (messageData.type === 'call') {
                                var _messageData_data, _messageData_data1, _messageData_data2;
                                const isVideo = ((_messageData_data = messageData.data) === null || _messageData_data === void 0 ? void 0 : _messageData_data.callType) === 'video';
                                const isMissed = !((_messageData_data1 = messageData.data) === null || _messageData_data1 === void 0 ? void 0 : _messageData_data1.duration) || ((_messageData_data2 = messageData.data) === null || _messageData_data2 === void 0 ? void 0 : _messageData_data2.duration) === 0;
                                newPreview = `[${isVideo ? 'video_call' : 'audio_call'}]${isMissed ? ' missed' : ''}`;
                            }
                            if (!roomInList) {
                                const newRoomEntry = {
                                    id: Number(messageData.roomId),
                                    sender: messageData.senderName || 'New Contact',
                                    email: messageData.senderEmail || '',
                                    avatarUrl: messageData.senderAvatar || null,
                                    preview: newPreview,
                                    time: messageData.time || new Date().toLocaleTimeString('en-US', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        hour12: true
                                    }),
                                    lastMessageTimestamp: messageData.createdAt ? new Date(messageData.createdAt) : new Date(),
                                    lastMessageId: messageData.id || 0,
                                    unread: isFromOtherUser ? !isChatOpen : false,
                                    unreadCount: isFromOtherUser ? 1 : 0,
                                    type: messageData.roomType || 'direct',
                                    isMe: !isFromOtherUser,
                                    otherUserId: isFromOtherUser ? messageData.senderId : null
                                };
                                return [
                                    newRoomEntry,
                                    ...prev
                                ];
                            }
                            const newUnreadCount = isFromOtherUser && !isChatOpen ? ((roomInList === null || roomInList === void 0 ? void 0 : roomInList.unreadCount) || 0) + 1 : isChatOpen ? 0 : (roomInList === null || roomInList === void 0 ? void 0 : roomInList.unreadCount) || 0;
                            const updated = prev.map({
                                "useSocketEvents.useEffect.handleSocketNewMessage.updated": (m)=>{
                                    var _messageData_data, _messageData_data1;
                                    const isTargetRoom = String(m.id) === String(resolvedRoomId) || String(m.id) === String(messageData.roomId) || isFromOtherUser && m.otherUserId && String(m.otherUserId) === String(messageData.senderId);
                                    if (!isTargetRoom) return m;
                                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$utils$2f$decryptPreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRoomMessageNewer"])(m, messageData.id, messageData.createdAt) && !((_messageData_data = messageData.data) === null || _messageData_data === void 0 ? void 0 : _messageData_data.isMesh)) {
                                        return m;
                                    }
                                    return {
                                        ...m,
                                        preview: newPreview,
                                        time: messageData.time || new Date().toLocaleTimeString('en-US', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                            hour12: true
                                        }),
                                        lastMessageTimestamp: messageData.createdAt ? new Date(messageData.createdAt) : new Date(),
                                        lastMessageId: messageData.id || m.lastMessageId,
                                        isMe: !isFromOtherUser,
                                        isForwarded: ((_messageData_data1 = messageData.data) === null || _messageData_data1 === void 0 ? void 0 : _messageData_data1.isForwarded) === true,
                                        unread: isChatOpen ? false : isFromOtherUser ? true : m.unread,
                                        unreadCount: newUnreadCount,
                                        subject: m.type === 'direct' ? '' : messageData.senderName || 'Member'
                                    };
                                }
                            }["useSocketEvents.useEffect.handleSocketNewMessage.updated"]);
                            // Bubble active room to the top
                            const idx = updated.findIndex({
                                "useSocketEvents.useEffect.handleSocketNewMessage.idx": (m)=>String(m.id) === String(resolvedRoomId) || String(m.id) === String(messageData.roomId) || isFromOtherUser && m.otherUserId && String(m.otherUserId) === String(messageData.senderId)
                            }["useSocketEvents.useEffect.handleSocketNewMessage.idx"]);
                            if (idx > 0) {
                                const [room] = updated.splice(idx, 1);
                                updated.unshift(room);
                            }
                            return updated;
                        }
                    }["useSocketEvents.useEffect.handleSocketNewMessage"]);
                    if (!targetRoom) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].getRooms().then({
                            "useSocketEvents.useEffect.handleSocketNewMessage": async (res)=>{
                                if (res.success && Array.isArray(res.data)) {
                                    const rooms = await Promise.all(res.data.map({
                                        "useSocketEvents.useEffect.handleSocketNewMessage": async (room)=>{
                                            if (typeof room.preview === 'string' && room.preview.startsWith('{') && room.preview.includes('__e2ee')) {
                                                const decrypted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$utils$2f$decryptPreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptPreview"])(room.preview, !!room.isMe, room.id, room.otherUserId);
                                                return {
                                                    ...room,
                                                    preview: decrypted
                                                };
                                            }
                                            return room;
                                        }
                                    }["useSocketEvents.useEffect.handleSocketNewMessage"]));
                                    setMessages(rooms);
                                }
                            }
                        }["useSocketEvents.useEffect.handleSocketNewMessage"]).catch(console.error);
                    }
                    const isDocumentVisible = typeof document !== 'undefined' && document.visibilityState === 'visible';
                    if (isDocumentVisible) {
                        updateActiveTabHeartbeat();
                    }
                    // Check if ANOTHER PingDart tab is actively focused
                    const isAnotherTabActive = ({
                        "useSocketEvents.useEffect.handleSocketNewMessage.isAnotherTabActive": ()=>{
                            if (isDocumentVisible) return false;
                            try {
                                const raw = localStorage.getItem('pingdart_active_tab_heartbeat');
                                if (!raw) return false;
                                const parsed = JSON.parse(raw);
                                return parsed.tabId !== tabInstanceIdRef.current && Date.now() - Number(parsed.ts) < 3000;
                            } catch (_) {
                                return false;
                            }
                        }
                    })["useSocketEvents.useEffect.handleSocketNewMessage.isAnotherTabActive"]();
                    // Sound & notification alerts
                    if (isFromOtherUser && !isRoomMuted) {
                        if (isChatOpen) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioTones$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playConversationTone"])('incoming');
                        } else {
                            // Play sound when this tab is visible OR in a background tab
                            const shouldPlaySound = isDocumentVisible || !isAnotherTabActive;
                            // Only show toast when user has a DIFFERENT chat actively open
                            const shouldShowToast = isDocumentVisible && Boolean(currentActiveRoomId) && String(currentActiveRoomId) !== String(messageData.roomId);
                            const settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotificationSettings"])();
                            if (shouldPlaySound && settings.conversationTones !== false) {
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMessageChime"])();
                            }
                            if (shouldShowToast && settings.highPriorityMessages !== false) {
                                const currentList = messagesRef.current || [];
                                const room = currentList.find({
                                    "useSocketEvents.useEffect.handleSocketNewMessage": (r)=>String(r.id) === String(messageData.roomId)
                                }["useSocketEvents.useEffect.handleSocketNewMessage"]) || targetRoom;
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showInAppToast"])(messageData, room);
                            }
                            // WhatsApp-like background tab updates: document title flashing badge & desktop notification
                            if (!isDocumentVisible && !isAnotherTabActive) {
                                const notifDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveNotificationDetails"])(messageData, targetRoom);
                                updateBackgroundTabTitle(notifDetails.senderName, notifDetails.body);
                                if (settings.highPriorityMessages !== false) {
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNotifications$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showSystemNotification"])(messageData, {
                                        "useSocketEvents.useEffect.handleSocketNewMessage": (roomId)=>{
                                            handleNavChangeRef.current('Chats');
                                            handleMsgSelectRef.current(roomId);
                                        }
                                    }["useSocketEvents.useEffect.handleSocketNewMessage"]);
                                }
                            }
                        }
                    }
                }
            }["useSocketEvents.useEffect.handleSocketNewMessage"];
            socketInstance.on('chat:new_message', handleSocketNewMessage);
            /**
     * Socket Event: chat:reaction (global handler)
     * Persists reaction changes to localStorage cache for ANY room, even when the
     * user is currently viewing a different chat. This ensures reactions are visible
     * when the user switches back to that chat (User B issue).
     */ socketInstance.on('chat:reaction', {
                "useSocketEvents.useEffect": (data)=>{
                    if (!data || !data.roomId || !data.messageId) return;
                    const roomId = data.roomId;
                    const msgId = data.messageId || data.id;
                    const activeRoomId = ({
                        "useSocketEvents.useEffect.activeRoomId": ()=>{
                            try {
                                return sessionStorage.getItem('pingdart_active_chat_room');
                            } catch (e) {
                                return null;
                            }
                        }
                    })["useSocketEvents.useEffect.activeRoomId"]();
                    // Skip if this chat is active (ChatDetail handles it directly)
                    if (activeRoomId && String(activeRoomId) === String(roomId)) return;
                    // Update globalMessageCache and localStorage for the background room
                    try {
                        __turbopack_context__.A("[project]/src/modules/chat/hooks/useChatHandlers.ts [app-client] (ecmascript, async loader)").then({
                            "useSocketEvents.useEffect": ({ globalMessageCache })=>{
                                const cached = globalMessageCache.get(Number(roomId));
                                if (cached && Array.isArray(cached)) {
                                    const updated = cached.map({
                                        "useSocketEvents.useEffect.updated": (m)=>{
                                            if (String(m.id) === String(msgId) || m.clientMessageId && String(m.clientMessageId) === String(msgId)) {
                                                var _m_data;
                                                const existing = ((_m_data = m.data) === null || _m_data === void 0 ? void 0 : _m_data.reactions) || {};
                                                const serverReactions = data.reactions && typeof data.reactions === 'object' ? data.reactions : ({
                                                    "useSocketEvents.useEffect.updated": ()=>{
                                                        const r = {
                                                            ...existing
                                                        };
                                                        const em = data.emoji || data.reaction;
                                                        if (em) {
                                                            if (data.removed) {
                                                                if (Array.isArray(r[em])) {
                                                                    r[em] = r[em].filter({
                                                                        "useSocketEvents.useEffect.updated": (x)=>String((x === null || x === void 0 ? void 0 : x.userId) || x) !== String(data.userId)
                                                                    }["useSocketEvents.useEffect.updated"]);
                                                                    if (r[em].length === 0) delete r[em];
                                                                } else if (typeof r[em] === 'number') {
                                                                    r[em]--;
                                                                    if (r[em] <= 0) delete r[em];
                                                                }
                                                            } else {
                                                                if (!r[em]) r[em] = [];
                                                                if (Array.isArray(r[em])) r[em].push({
                                                                    userId: data.userId
                                                                });
                                                            }
                                                        }
                                                        return r;
                                                    }
                                                })["useSocketEvents.useEffect.updated"]();
                                                return {
                                                    ...m,
                                                    data: {
                                                        ...m.data || {},
                                                        reactions: serverReactions
                                                    }
                                                };
                                            }
                                            return m;
                                        }
                                    }["useSocketEvents.useEffect.updated"]);
                                    globalMessageCache.set(Number(roomId), updated);
                                    try {
                                        localStorage.setItem(`ping_chat_msgs_${roomId}`, JSON.stringify(updated.slice(-50)));
                                    } catch (_) {}
                                }
                            }
                        }["useSocketEvents.useEffect"]);
                    } catch (_) {}
                }
            }["useSocketEvents.useEffect"]);
            socketInstance.on('chat:user_activity', {
                "useSocketEvents.useEffect": (data)=>{
                    if ("object" !== 'undefined' && data) {
                        window.dispatchEvent(new CustomEvent('chat:user_activity', {
                            detail: data
                        }));
                    }
                }
            }["useSocketEvents.useEffect"]);
            /**
     * Socket Event: user:online_status
     */ socketInstance.on('user:online_status', {
                "useSocketEvents.useEffect": (data)=>{
                    if (data && data.userId) {
                        __turbopack_context__.A("[project]/src/modules/chat/services/userPresenceService.ts [app-client] (ecmascript, async loader)").then({
                            "useSocketEvents.useEffect": ({ userPresenceService })=>{
                                userPresenceService.setPresence({
                                    userId: data.userId,
                                    state: data.state,
                                    isOnline: !!data.isOnline,
                                    lastSeen: data.lastSeen,
                                    deviceType: data.deviceType
                                });
                            }
                        }["useSocketEvents.useEffect"]);
                        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
                        const currentUserIdStr = String((currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) || '');
                        const blockedList = Array.isArray(data.blockedContacts) ? data.blockedContacts.map(String) : [];
                        const isBlockedByContact = currentUser && blockedList.includes(currentUserIdStr);
                        let exceptions = data.privacyExceptions || {};
                        if (typeof exceptions === 'string') {
                            try {
                                exceptions = JSON.parse(exceptions);
                            } catch (e) {
                                exceptions = {};
                            }
                        }
                        const privacy = data.privacy || 'Everyone';
                        let canView = !isBlockedByContact;
                        if (canView) {
                            if (privacy === 'Nobody') {
                                canView = false;
                            } else if (privacy === 'Only share with...') {
                                const allowList = Array.isArray(exceptions.privacyLastSeen_only_share) ? exceptions.privacyLastSeen_only_share.map(String) : [];
                                if (!allowList.includes(currentUserIdStr)) {
                                    canView = false;
                                }
                            } else if (privacy.includes('except...')) {
                                const blockList = Array.isArray(exceptions.privacyLastSeen) ? exceptions.privacyLastSeen.map(String) : [];
                                if (blockList.includes(currentUserIdStr)) {
                                    canView = false;
                                }
                            }
                        }
                        setMessages({
                            "useSocketEvents.useEffect": (prev)=>prev.map({
                                    "useSocketEvents.useEffect": (m)=>{
                                        const isMatch = m.otherUserId && String(m.otherUserId) === String(data.userId) || m.senderId && String(m.senderId) === String(data.userId) || m.type === 'direct' && Array.isArray(m.members) && m.members.some({
                                            "useSocketEvents.useEffect": (mb)=>String(mb.id) === String(data.userId)
                                        }["useSocketEvents.useEffect"]);
                                        if (!isMatch) return m;
                                        const roomCanView = canView && !m.isBlocked;
                                        const isOnline = roomCanView ? !!data.isOnline : false;
                                        var _data_lastSeen, _ref;
                                        const lastSeen = roomCanView ? (_ref = (_data_lastSeen = data.lastSeen) !== null && _data_lastSeen !== void 0 ? _data_lastSeen : m.lastSeen) !== null && _ref !== void 0 ? _ref : null : null;
                                        return {
                                            ...m,
                                            isOnline,
                                            lastSeen,
                                            canViewLastSeen: roomCanView
                                        };
                                    }
                                }["useSocketEvents.useEffect"])
                        }["useSocketEvents.useEffect"]);
                    }
                }
            }["useSocketEvents.useEffect"]);
            socketInstance.on('user:block_changed', {
                "useSocketEvents.useEffect": ()=>{
                    fetchRooms();
                }
            }["useSocketEvents.useEffect"]);
            socketInstance.on('user:profile_update', {
                "useSocketEvents.useEffect": (data)=>{
                    var _useAuthStore_getState_user;
                    const currentUserId = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
                    if (data && String(data.userId) === String(currentUserId)) {
                        __turbopack_context__.A("[project]/src/services/api.ts [app-client] (ecmascript, async loader)").then({
                            "useSocketEvents.useEffect": ({ api })=>{
                                api.get('/user/profile').then({
                                    "useSocketEvents.useEffect": (res)=>{
                                        if (res.data.success) {
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().updateUser(res.data.user);
                                        }
                                    }
                                }["useSocketEvents.useEffect"]).catch(console.error);
                            }
                        }["useSocketEvents.useEffect"]);
                    }
                    __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)").then({
                        "useSocketEvents.useEffect": ({ chatApi })=>{
                            chatApi.getRooms().then({
                                "useSocketEvents.useEffect": async (res)=>{
                                    if (res.success && Array.isArray(res.data)) {
                                        const openChatId = selectedMsgIdRef.current || (("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeMsgId"])(new URLSearchParams(window.location.search).get('msgId')) : "TURBOPACK unreachable");
                                        const fetchedRooms = res.data;
                                        setMessages({
                                            "useSocketEvents.useEffect": (prev)=>{
                                                const prevMap = new Map(prev.map({
                                                    "useSocketEvents.useEffect": (r)=>[
                                                            String(r.id),
                                                            r
                                                        ]
                                                }["useSocketEvents.useEffect"]));
                                                const merged = fetchedRooms.map({
                                                    "useSocketEvents.useEffect.merged": (room)=>{
                                                        const localRoom = prevMap.get(String(room.id));
                                                        const isCurrentlyOpen = openChatId && String(room.id) === String(openChatId);
                                                        if (localRoom) {
                                                            const isOptimistic = localRoom.status === 'sending' || localRoom.isOptimistic;
                                                            if (isOptimistic) {
                                                                return {
                                                                    ...room,
                                                                    preview: localRoom.preview,
                                                                    time: localRoom.time,
                                                                    isMe: localRoom.isMe,
                                                                    status: localRoom.status,
                                                                    lastMessageTimestamp: localRoom.lastMessageTimestamp,
                                                                    unread: isCurrentlyOpen ? false : localRoom.unread,
                                                                    unreadCount: isCurrentlyOpen ? 0 : localRoom.unreadCount
                                                                };
                                                            }
                                                        }
                                                        return {
                                                            ...room,
                                                            unread: isCurrentlyOpen ? false : room.unread,
                                                            unreadCount: isCurrentlyOpen ? 0 : room.unreadCount
                                                        };
                                                    }
                                                }["useSocketEvents.useEffect.merged"]);
                                                const serverIds = new Set(fetchedRooms.map({
                                                    "useSocketEvents.useEffect": (r)=>String(r.id)
                                                }["useSocketEvents.useEffect"]));
                                                const extraLocal = prev.filter({
                                                    "useSocketEvents.useEffect.extraLocal": (r)=>!serverIds.has(String(r.id))
                                                }["useSocketEvents.useEffect.extraLocal"]);
                                                const finalRooms = [
                                                    ...extraLocal,
                                                    ...merged
                                                ];
                                                finalRooms.sort({
                                                    "useSocketEvents.useEffect": (a, b)=>{
                                                        const tA = a.lastMessageTimestamp ? new Date(a.lastMessageTimestamp).getTime() : 0;
                                                        const tB = b.lastMessageTimestamp ? new Date(b.lastMessageTimestamp).getTime() : 0;
                                                        return tB - tA;
                                                    }
                                                }["useSocketEvents.useEffect"]);
                                                return finalRooms;
                                            }
                                        }["useSocketEvents.useEffect"]);
                                    }
                                }
                            }["useSocketEvents.useEffect"]).catch(console.error);
                        }
                    }["useSocketEvents.useEffect"]);
                }
            }["useSocketEvents.useEffect"]);
            /**
     * Socket Event: chat:messages_read
     */ const handleSocketMessagesRead = {
                "useSocketEvents.useEffect.handleSocketMessagesRead": (data)=>{
                    const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
                    const currentUserId = currentUser === null || currentUser === void 0 ? void 0 : currentUser.id;
                    const readerId = data.userId || data.readBy;
                    setMessages({
                        "useSocketEvents.useEffect.handleSocketMessagesRead": (prev)=>prev.map({
                                "useSocketEvents.useEffect.handleSocketMessagesRead": (m)=>{
                                    if (String(m.id) === String(data.roomId)) {
                                        if (String(readerId) === String(currentUserId)) {
                                            return {
                                                ...m,
                                                unread: false,
                                                unreadCount: 0
                                            };
                                        }
                                        if ((m.type === 'direct' || !m.type) && (currentUser === null || currentUser === void 0 ? void 0 : currentUser.privacyReadReceipts) === false) {
                                            return m;
                                        }
                                        if (m.isMe && String(readerId) !== String(currentUserId)) {
                                            return {
                                                ...m,
                                                status: 'read'
                                            };
                                        }
                                    }
                                    return m;
                                }
                            }["useSocketEvents.useEffect.handleSocketMessagesRead"])
                    }["useSocketEvents.useEffect.handleSocketMessagesRead"]);
                }
            }["useSocketEvents.useEffect.handleSocketMessagesRead"];
            socketInstance.on('chat:messages_read', handleSocketMessagesRead);
            /**
     * Socket Event: chat:messages_delivered
     */ const handleSocketMessagesDelivered = {
                "useSocketEvents.useEffect.handleSocketMessagesDelivered": (data)=>{
                    var _useAuthStore_getState_user;
                    const currentUserId = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
                    const deliveredTo = data.userId || data.deliveredTo;
                    setMessages({
                        "useSocketEvents.useEffect.handleSocketMessagesDelivered": (prev)=>{
                            const next = prev.map({
                                "useSocketEvents.useEffect.handleSocketMessagesDelivered.next": (m)=>{
                                    if (String(m.id) === String(data.roomId) && (m.isMe || m.from === 'me') && m.status !== 'read' && String(deliveredTo) !== String(currentUserId)) {
                                        return {
                                            ...m,
                                            status: 'delivered'
                                        };
                                    }
                                    return m;
                                }
                            }["useSocketEvents.useEffect.handleSocketMessagesDelivered.next"]);
                            if (messagesRef) messagesRef.current = next;
                            return next;
                        }
                    }["useSocketEvents.useEffect.handleSocketMessagesDelivered"]);
                }
            }["useSocketEvents.useEffect.handleSocketMessagesDelivered"];
            socketInstance.on('chat:messages_delivered', handleSocketMessagesDelivered);
            // Cross-module window event listeners for offline mesh communication
            const handleWindowNewMessage = {
                "useSocketEvents.useEffect.handleWindowNewMessage": (e)=>{
                    if (e.detail) handleSocketNewMessage(e.detail);
                }
            }["useSocketEvents.useEffect.handleWindowNewMessage"];
            const handleWindowMessagesRead = {
                "useSocketEvents.useEffect.handleWindowMessagesRead": (e)=>{
                    if (e.detail) handleSocketMessagesRead(e.detail);
                }
            }["useSocketEvents.useEffect.handleWindowMessagesRead"];
            const handleWindowMessagesDelivered = {
                "useSocketEvents.useEffect.handleWindowMessagesDelivered": (e)=>{
                    if (e.detail) handleSocketMessagesDelivered(e.detail);
                }
            }["useSocketEvents.useEffect.handleWindowMessagesDelivered"];
            if ("TURBOPACK compile-time truthy", 1) {
                window.addEventListener('chat:new_message', handleWindowNewMessage);
                window.addEventListener('chat:messages_read', handleWindowMessagesRead);
                window.addEventListener('chat:messages_delivered', handleWindowMessagesDelivered);
            }
            socketInstance.on('chat:message_deleted', {
                "useSocketEvents.useEffect": ()=>{
                    __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)").then({
                        "useSocketEvents.useEffect": ({ chatApi })=>{
                            chatApi.getRooms().then({
                                "useSocketEvents.useEffect": (res)=>{
                                    if (res.success && Array.isArray(res.data)) {
                                        setMessages(res.data);
                                    }
                                }
                            }["useSocketEvents.useEffect"]);
                        }
                    }["useSocketEvents.useEffect"]);
                }
            }["useSocketEvents.useEffect"]);
            const handleMessageEdited = {
                "useSocketEvents.useEffect.handleMessageEdited": (data)=>{
                    if (data && data.roomId) {
                        setMessages({
                            "useSocketEvents.useEffect.handleMessageEdited": (prev)=>prev.map({
                                    "useSocketEvents.useEffect.handleMessageEdited": (room)=>{
                                        if (String(room.id) === String(data.roomId)) {
                                            if (data.isLastMessage || !room.preview || data.preview) {
                                                let updatedPreview = data.preview || data.text;
                                                if (room.preview && typeof room.preview === 'string' && room.preview.includes(' — ')) {
                                                    const prefix = room.preview.split(' — ')[0];
                                                    updatedPreview = `${prefix} — ${data.text}`;
                                                }
                                                return {
                                                    ...room,
                                                    preview: updatedPreview
                                                };
                                            }
                                        }
                                        return room;
                                    }
                                }["useSocketEvents.useEffect.handleMessageEdited"])
                        }["useSocketEvents.useEffect.handleMessageEdited"]);
                    }
                }
            }["useSocketEvents.useEffect.handleMessageEdited"];
            socketInstance.on('message:edited', handleMessageEdited);
            socketInstance.on('chat:message_edited', handleMessageEdited);
            socketInstance.on('chat:message_update', handleMessageEdited);
            socketInstance.on('chat:room_updated', {
                "useSocketEvents.useEffect": (data)=>{
                    if (data && data.roomId) {
                        setMessages({
                            "useSocketEvents.useEffect": (prev)=>prev.map({
                                    "useSocketEvents.useEffect": (room)=>{
                                        if (String(room.id) === String(data.roomId)) {
                                            const updates = {
                                                ...data.updates || data
                                            };
                                            if (data.members) updates.members = data.members;
                                            if (data.disappearingTimer !== undefined) {
                                                updates.disappearingTimer = data.disappearingTimer;
                                            }
                                            return {
                                                ...room,
                                                ...updates
                                            };
                                        }
                                        return room;
                                    }
                                }["useSocketEvents.useEffect"])
                        }["useSocketEvents.useEffect"]);
                    }
                }
            }["useSocketEvents.useEffect"]);
            socketInstance.on('chat:pinned_updated', {
                "useSocketEvents.useEffect": (data)=>{
                    if (data && data.roomId) {
                        var _data_message;
                        const pName = data.pinnedByName || ((_data_message = data.message) === null || _data_message === void 0 ? void 0 : _data_message.pinnedByName) || "Someone";
                        if (data.isPinned) {
                            const targetMsg = data.message || {
                                id: data.messageId,
                                text: "Pinned message"
                            };
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pinMessage"])(data.roomId, {
                                ...targetMsg,
                                pinnedByName: pName,
                                pinnedBy: data.pinnedBy
                            }, data.durationDays || 7, pName);
                        } else if (!data.isPinned && data.messageId) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unpinMessage"])(data.roomId, data.messageId);
                        }
                    }
                }
            }["useSocketEvents.useEffect"]);
            socketInstance.on('join_request:new', {
                "useSocketEvents.useEffect": (data)=>{
                    if (data && data.roomId) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`${data.requesterName} requested to join group "${data.roomName}"`);
                        setMessages({
                            "useSocketEvents.useEffect": (prev)=>prev.map({
                                    "useSocketEvents.useEffect": (room)=>{
                                        if (String(room.id) === String(data.roomId)) {
                                            return {
                                                ...room,
                                                pendingRequestsCount: (room.pendingRequestsCount || 0) + 1
                                            };
                                        }
                                        return room;
                                    }
                                }["useSocketEvents.useEffect"])
                        }["useSocketEvents.useEffect"]);
                    }
                }
            }["useSocketEvents.useEffect"]);
            socketInstance.on('join_request:approved', {
                "useSocketEvents.useEffect": (data)=>{
                    if (data && data.roomId) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Your request to join group "${data.roomName}" was approved!`);
                        __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)").then({
                            "useSocketEvents.useEffect": ({ chatApi })=>{
                                chatApi.getRooms().then({
                                    "useSocketEvents.useEffect": (res)=>{
                                        if (res.success && res.data) {
                                            setMessages(res.data);
                                        }
                                    }
                                }["useSocketEvents.useEffect"]);
                            }
                        }["useSocketEvents.useEffect"]);
                    }
                }
            }["useSocketEvents.useEffect"]);
            socketInstance.on('join_request:rejected', {
                "useSocketEvents.useEffect": (data)=>{
                    if (data && data.roomId) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Your request to join group "${data.roomName}" was rejected.`);
                    }
                }
            }["useSocketEvents.useEffect"]);
            /**
     * Socket Event: chat:typing
     */ socketInstance.on('chat:typing', {
                "useSocketEvents.useEffect": (data)=>{
                    var _useAuthStore_getState_user;
                    const currentUserId = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
                    if (String(data.userId) === String(currentUserId)) return;
                    setMessages({
                        "useSocketEvents.useEffect": (prev)=>prev.map({
                                "useSocketEvents.useEffect": (m)=>{
                                    if (String(m.id) === String(data.roomId)) {
                                        return {
                                            ...m,
                                            isTyping: data.isTyping,
                                            typingUsername: data.username
                                        };
                                    }
                                    return m;
                                }
                            }["useSocketEvents.useEffect"])
                    }["useSocketEvents.useEffect"]);
                    if (data.isTyping) {
                        if (typingTimeoutsRef.current[data.roomId]) {
                            clearTimeout(typingTimeoutsRef.current[data.roomId]);
                        }
                        typingTimeoutsRef.current[data.roomId] = setTimeout({
                            "useSocketEvents.useEffect": ()=>{
                                setMessages({
                                    "useSocketEvents.useEffect": (prev)=>prev.map({
                                            "useSocketEvents.useEffect": (m)=>{
                                                if (String(m.id) === String(data.roomId)) {
                                                    return {
                                                        ...m,
                                                        isTyping: false
                                                    };
                                                }
                                                return m;
                                            }
                                        }["useSocketEvents.useEffect"])
                                }["useSocketEvents.useEffect"]);
                                delete typingTimeoutsRef.current[data.roomId];
                            }
                        }["useSocketEvents.useEffect"], 3000);
                    } else {
                        if (typingTimeoutsRef.current[data.roomId]) {
                            clearTimeout(typingTimeoutsRef.current[data.roomId]);
                            delete typingTimeoutsRef.current[data.roomId];
                        }
                    }
                }
            }["useSocketEvents.useEffect"]);
            /**
     * Socket Event: mail:new
     */ socketInstance.on('mail:new', {
                "useSocketEvents.useEffect": (data)=>{
                    window.dispatchEvent(new CustomEvent('mail:new', {
                        detail: data
                    }));
                    const fromName = data.from || data.senderName || 'Someone';
                    const subject = data.subject || 'No Subject';
                    try {
                        const existing = JSON.parse(localStorage.getItem('app_notifications') || '[]');
                        const newNotif = {
                            id: Date.now(),
                            type: 'mail',
                            user: fromName,
                            action: 'sent you a new email:',
                            target: subject,
                            time: new Date().toLocaleTimeString('en-US', {
                                hour: '2-digit',
                                minute: '2-digit',
                                hour12: true
                            }),
                            unread: true,
                            timestamp: Date.now()
                        };
                        localStorage.setItem('app_notifications', JSON.stringify([
                            newNotif,
                            ...existing
                        ]));
                        window.dispatchEvent(new Event('app_notifications_updated'));
                    } catch (e) {}
                    if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
                        __turbopack_context__.A("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript, async loader)").then({
                            "useSocketEvents.useEffect": ({ toast })=>{
                                toast(`📬 New Email from ${fromName}`, {
                                    description: subject,
                                    duration: 6000,
                                    action: {
                                        label: 'View Mail',
                                        onClick: {
                                            "useSocketEvents.useEffect": ()=>handleNavChange('Mail')
                                        }["useSocketEvents.useEffect"]
                                    }
                                });
                            }
                        }["useSocketEvents.useEffect"]);
                    }
                }
            }["useSocketEvents.useEffect"]);
            const handleCustomStatusCreated = {
                "useSocketEvents.useEffect.handleCustomStatusCreated": ()=>{
                    fetchRooms();
                }
            }["useSocketEvents.useEffect.handleCustomStatusCreated"];
            if ("TURBOPACK compile-time truthy", 1) {
                window.addEventListener('status_created', handleCustomStatusCreated);
            }
            const updateActiveStatus = {
                "useSocketEvents.useEffect.updateActiveStatus": ()=>{
                    const isActive = typeof document !== 'undefined' && document.visibilityState === 'visible';
                    socketInstance.emit('user:active_status', {
                        isActive
                    });
                }
            }["useSocketEvents.useEffect.updateActiveStatus"];
            updateActiveStatus();
            let lastReconnectTime = 0;
            const checkAndReconnectSocket = {
                "useSocketEvents.useEffect.checkAndReconnectSocket": ()=>{
                    const now = Date.now();
                    if (now - lastReconnectTime < 1000) return;
                    lastReconnectTime = now;
                    updateActiveStatus();
                    const currentToken = getLatestToken();
                    if (currentToken) {
                        socketInstance.auth = {
                            token: currentToken
                        };
                        socketInstance.io.opts.query = {
                            token: currentToken
                        };
                        if (!socketInstance.connected) {
                            socketInstance.connect();
                        } else {
                            socketInstance.emit('user:active_status', {
                                isActive: true
                            });
                        }
                    }
                    fetchRooms();
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.dispatchEvent(new CustomEvent('app:reconnect_sync', {
                            detail: {
                                roomId: selectedMsgIdRef.current
                            }
                        }));
                    }
                }
            }["useSocketEvents.useEffect.checkAndReconnectSocket"];
            let tabHiddenTimer = null;
            const handleVisibilityChange = {
                "useSocketEvents.useEffect.handleVisibilityChange": ()=>{
                    if (typeof document === 'undefined') return;
                    if (document.visibilityState === 'hidden') {
                        if (tabHiddenTimer) clearTimeout(tabHiddenTimer);
                        tabHiddenTimer = setTimeout({
                            "useSocketEvents.useEffect.handleVisibilityChange": ()=>{
                                try {
                                    socketInstance.emit('user:active_status', {
                                        isActive: false
                                    });
                                } catch (_) {}
                            }
                        }["useSocketEvents.useEffect.handleVisibilityChange"], 2500);
                    } else if (document.visibilityState === 'visible') {
                        if (tabHiddenTimer) {
                            clearTimeout(tabHiddenTimer);
                            tabHiddenTimer = null;
                        }
                        updateActiveTabHeartbeat();
                        restoreDocumentTitle();
                        if (selectedMsgIdRef.current) {
                            try {
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].markAsRead(Number(selectedMsgIdRef.current)).catch({
                                    "useSocketEvents.useEffect.handleVisibilityChange": ()=>{}
                                }["useSocketEvents.useEffect.handleVisibilityChange"]);
                            } catch (_) {}
                        }
                        checkAndReconnectSocket();
                    }
                }
            }["useSocketEvents.useEffect.handleVisibilityChange"];
            const handleWindowFocus = {
                "useSocketEvents.useEffect.handleWindowFocus": ()=>{
                    if (tabHiddenTimer) {
                        clearTimeout(tabHiddenTimer);
                        tabHiddenTimer = null;
                    }
                    updateActiveTabHeartbeat();
                    restoreDocumentTitle();
                    if (selectedMsgIdRef.current) {
                        try {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].markAsRead(Number(selectedMsgIdRef.current)).catch({
                                "useSocketEvents.useEffect.handleWindowFocus": ()=>{}
                            }["useSocketEvents.useEffect.handleWindowFocus"]);
                        } catch (_) {}
                    }
                    checkAndReconnectSocket();
                }
            }["useSocketEvents.useEffect.handleWindowFocus"];
            // Only executed when the tab/window is actually closed or navigated away (NOT when switching tabs)
            const handleBeforeUnload = {
                "useSocketEvents.useEffect.handleBeforeUnload": ()=>{
                    try {
                        socketInstance.emit('user:active_status', {
                            isActive: false
                        });
                        socketInstance.emit('user:app_closed');
                    } catch (_) {}
                    try {
                        const currentToken = getLatestToken();
                        const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])().trim();
                        if (currentToken && base) {
                            const offlineUrl = `${base}/api/users/offline?token=${encodeURIComponent(currentToken)}`;
                            if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
                                navigator.sendBeacon(offlineUrl);
                            }
                        }
                    } catch (_) {}
                }
            }["useSocketEvents.useEffect.handleBeforeUnload"];
            // 20s Watchdog: Keep WebSocket actively connected even if browser throttles idle timers in background
            const keepaliveWatchdog = setInterval({
                "useSocketEvents.useEffect.keepaliveWatchdog": ()=>{
                    if ("object" !== 'undefined' && socketInstance && !socketInstance.connected) {
                        console.log('[Socket] 🔄 Watchdog: Reconnecting socket in background tab...');
                        socketInstance.connect();
                    }
                }
            }["useSocketEvents.useEffect.keepaliveWatchdog"], 20000);
            document.addEventListener('visibilitychange', handleVisibilityChange);
            let appStateListener = null;
            let appResumeListener = null;
            let unsubscribeNet = null;
            const handlePresenceSync = {
                "useSocketEvents.useEffect.handlePresenceSync": (e)=>{
                    const detail = e.detail;
                    if (!detail) return;
                    const targetUserId = detail.userId ? String(detail.userId) : null;
                    const targetRoomId = detail.roomId ? String(detail.roomId) : null;
                    const isOnline = !!detail.isOnline;
                    var _detail_lastSeen;
                    const lastSeen = (_detail_lastSeen = detail.lastSeen) !== null && _detail_lastSeen !== void 0 ? _detail_lastSeen : null;
                    setMessages({
                        "useSocketEvents.useEffect.handlePresenceSync": (prev)=>prev.map({
                                "useSocketEvents.useEffect.handlePresenceSync": (m)=>{
                                    const isMatch = targetRoomId && String(m.id) === targetRoomId || targetUserId && (m.otherUserId && String(m.otherUserId) === targetUserId || m.senderId && String(m.senderId) === targetUserId || m.type === 'direct' && Array.isArray(m.members) && m.members.some({
                                        "useSocketEvents.useEffect.handlePresenceSync": (mb)=>String(mb.id) === targetUserId
                                    }["useSocketEvents.useEffect.handlePresenceSync"]));
                                    if (!isMatch) return m;
                                    return {
                                        ...m,
                                        isOnline,
                                        lastSeen: lastSeen !== null && lastSeen !== void 0 ? lastSeen : m.lastSeen
                                    };
                                }
                            }["useSocketEvents.useEffect.handlePresenceSync"])
                    }["useSocketEvents.useEffect.handlePresenceSync"]);
                }
            }["useSocketEvents.useEffect.handlePresenceSync"];
            if ("TURBOPACK compile-time truthy", 1) {
                window.addEventListener('user:presence_sync', handlePresenceSync);
                window.addEventListener('focus', handleWindowFocus);
                window.addEventListener('online', checkAndReconnectSocket);
                window.addEventListener('beforeunload', handleBeforeUnload);
                unsubscribeNet = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$network$2f$networkStatusEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["networkStatusEngine"].subscribe({
                    "useSocketEvents.useEffect": (isOnline)=>{
                        if (isOnline) {
                            checkAndReconnectSocket();
                        }
                    }
                }["useSocketEvents.useEffect"]);
                const isNativeApp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform() || "object" !== 'undefined' && !!window.Capacitor;
                if (isNativeApp) {
                    __turbopack_context__.A("[project]/node_modules/@capacitor/app/dist/esm/index.js [app-client] (ecmascript, async loader)").then({
                        "useSocketEvents.useEffect": ({ App })=>{
                            App.addListener('resume', {
                                "useSocketEvents.useEffect": ()=>{
                                    checkAndReconnectSocket();
                                }
                            }["useSocketEvents.useEffect"]).then({
                                "useSocketEvents.useEffect": (l)=>{
                                    appResumeListener = l;
                                }
                            }["useSocketEvents.useEffect"]);
                            App.addListener('appStateChange', {
                                "useSocketEvents.useEffect": ({ isActive })=>{
                                    if (isActive) {
                                        checkAndReconnectSocket();
                                    } else {
                                        try {
                                            socketInstance.emit('user:active_status', {
                                                isActive: false
                                            });
                                        } catch (_) {}
                                    }
                                }
                            }["useSocketEvents.useEffect"]).then({
                                "useSocketEvents.useEffect": (l)=>{
                                    appStateListener = l;
                                }
                            }["useSocketEvents.useEffect"]);
                        }
                    }["useSocketEvents.useEffect"]).catch({
                        "useSocketEvents.useEffect": ()=>{}
                    }["useSocketEvents.useEffect"]);
                }
            }
            setSocket(socketInstance);
            return ({
                "useSocketEvents.useEffect": ()=>{
                    clearInterval(keepaliveWatchdog);
                    if (titleFlashTimerRef.current) {
                        clearInterval(titleFlashTimerRef.current);
                        titleFlashTimerRef.current = null;
                    }
                    if (deliveryFlushTimerRef.current) {
                        clearTimeout(deliveryFlushTimerRef.current);
                        deliveryFlushTimerRef.current = null;
                    }
                    document.removeEventListener('visibilitychange', handleVisibilityChange);
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.removeEventListener('focus', handleWindowFocus);
                        window.removeEventListener('online', checkAndReconnectSocket);
                        window.removeEventListener('beforeunload', handleBeforeUnload);
                        window.removeEventListener('chat:new_message', handleWindowNewMessage);
                        window.removeEventListener('chat:messages_read', handleWindowMessagesRead);
                        window.removeEventListener('chat:messages_delivered', handleWindowMessagesDelivered);
                        window.removeEventListener('user:presence_sync', handlePresenceSync);
                        window.removeEventListener('status_created', handleCustomStatusCreated);
                    }
                    if (typeof unsubscribeNet === 'function') {
                        unsubscribeNet();
                    }
                    if (appResumeListener && typeof appResumeListener.remove === 'function') {
                        appResumeListener.remove();
                    }
                    if (appStateListener && typeof appStateListener.remove === 'function') {
                        appStateListener.remove();
                    }
                    __turbopack_context__.A("[project]/src/services/presenceLifecycleManager.ts [app-client] (ecmascript, async loader)").then({
                        "useSocketEvents.useEffect": ({ presenceLifecycleManager })=>{
                            presenceLifecycleManager.destroy();
                        }
                    }["useSocketEvents.useEffect"]).catch({
                        "useSocketEvents.useEffect": ()=>{}
                    }["useSocketEvents.useEffect"]);
                    socketInstance.disconnect();
                }
            })["useSocketEvents.useEffect"];
        }
    }["useSocketEvents.useEffect"], [
        setSocket,
        accessToken
    ]);
    return {
        socket
    };
}
_s(useSocketEvents, "snBFA1LWqweiQfr1qxz78rrpI/I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallContext"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/ModuleScreenRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModuleScreenRenderer",
    ()=>ModuleScreenRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/utils/safeLazy.tsx [app-client] (ecmascript)");
"use client";
;
;
;
// ── Lazy-loaded secondary screens ────
const LiveScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/live/LiveScreen.tsx [app-client] (ecmascript, async loader)"), 'LiveScreen');
_c = LiveScreen;
const MailScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/mail/MailScreen.tsx [app-client] (ecmascript, async loader)"), 'MailScreen');
_c1 = MailScreen;
const CloudStorageScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/CloudStorage/CloudStorageScreen.tsx [app-client] (ecmascript, async loader)"), 'CloudStorageScreen');
_c2 = CloudStorageScreen;
const SettingsScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/SettingsScreen.tsx [app-client] (ecmascript, async loader)"), 'SettingsScreen');
_c3 = SettingsScreen;
const UserProfileScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/UserProfileScreen.tsx [app-client] (ecmascript, async loader)"), 'UserProfileScreen');
_c4 = UserProfileScreen;
const StatusScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/StatusScreen.tsx [app-client] (ecmascript, async loader)"), 'StatusScreen');
_c5 = StatusScreen;
const ChannelsScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/ChannelsScreen.tsx [app-client] (ecmascript, async loader)"), 'ChannelsScreen');
_c6 = ChannelsScreen;
const CommunitiesScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/CommunitiesScreen.tsx [app-client] (ecmascript, async loader)"), 'CommunitiesScreen');
_c7 = CommunitiesScreen;
const CallsScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/CallsScreen.tsx [app-client] (ecmascript, async loader)"), 'CallsScreen');
_c8 = CallsScreen;
const StarredScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/StarredScreen.tsx [app-client] (ecmascript, async loader)"), 'StarredScreen');
_c9 = StarredScreen;
const ArchivedScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/ArchivedScreen.tsx [app-client] (ecmascript, async loader)"), 'ArchivedScreen');
_c10 = ArchivedScreen;
const LinkedDevicesScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/LinkedDevicesScreen.tsx [app-client] (ecmascript, async loader)"), 'LinkedDevicesScreen');
_c11 = LinkedDevicesScreen;
const HomeScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/HomeScreen.tsx [app-client] (ecmascript, async loader)"), 'HomeScreen');
_c12 = HomeScreen;
const MoreScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/MoreScreen.tsx [app-client] (ecmascript, async loader)"), 'MoreScreen');
_c13 = MoreScreen;
const NotificationsScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/NotificationsScreen.tsx [app-client] (ecmascript, async loader)"), 'NotificationsScreen');
_c14 = NotificationsScreen;
const DemoScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/DemoScreen.tsx [app-client] (ecmascript, async loader)"), 'DemoScreen');
_c15 = DemoScreen;
const AiBotScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/AiBotScreen.tsx [app-client] (ecmascript, async loader)"), 'AiBotScreen');
_c16 = AiBotScreen;
const ShopScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/ShopScreen.tsx [app-client] (ecmascript, async loader)"), 'ShopScreen');
_c17 = ShopScreen;
const AiBlogGeneratorScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx [app-client] (ecmascript, async loader)"), 'AiBlogGeneratorScreen');
_c18 = AiBlogGeneratorScreen;
const ReelsScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/ReelsScreen.tsx [app-client] (ecmascript, async loader)"), 'ReelsScreen');
_c19 = ReelsScreen;
const TikTokImportScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/TikTokImportScreen.tsx [app-client] (ecmascript, async loader)"), 'TikTokImportScreen');
_c20 = TikTokImportScreen;
const JobsHubScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/jobs/JobsHubScreen.tsx [app-client] (ecmascript, async loader)"), 'JobsHubScreen');
_c21 = JobsHubScreen;
const DynamicModuleRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx [app-client] (ecmascript, async loader)"), 'DynamicModuleRenderer');
_c22 = DynamicModuleRenderer;
const GamesScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/GamesScreen.tsx [app-client] (ecmascript, async loader)"), 'GamesScreen');
_c23 = GamesScreen;
const AiDiaryModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/components/diary/AiDiaryModal.tsx [app-client] (ecmascript, async loader)").then((m)=>({
            default: m.AiDiaryModal
        })), 'AiDiaryModal');
_c24 = AiDiaryModal;
const ExploreModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/explore/ExploreModal.tsx [app-client] (ecmascript, async loader)").then((m)=>({
            default: m.ExploreModal
        })), 'ExploreModal');
_c25 = ExploreModal;
const AiBudgetScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx [app-client] (ecmascript, async loader)"), 'AiBudgetScreen');
_c26 = AiBudgetScreen;
const CrmScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/modules/crm/CrmScreen.tsx [app-client] (ecmascript, async loader)"), 'CrmScreen');
_c27 = CrmScreen;
const HrmScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/modules/hrm/HrmScreen.tsx [app-client] (ecmascript, async loader)"), 'HrmScreen');
_c28 = HrmScreen;
const PingDartCodeScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/modules/pingdart-code/PingDartCodeScreen.tsx [app-client] (ecmascript, async loader)"), 'PingDartCodeScreen');
_c29 = PingDartCodeScreen;
const ResellerScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx [app-client] (ecmascript, async loader)"), 'ResellerScreen');
_c30 = ResellerScreen;
const PJStephenPaulScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/modules/pj-ministries/PJStephenPaulScreen.tsx [app-client] (ecmascript, async loader)"), 'PJStephenPaulScreen');
_c31 = PJStephenPaulScreen;
const WalletSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/settings/WalletSettings.tsx [app-client] (ecmascript, async loader)").then((m)=>({
            default: m.WalletSettings
        })), 'WalletSettings');
_c32 = WalletSettings;
function ModuleScreenRenderer({ activeNav, selectedMsgId, channelsFiltered, communitiesFiltered, archivedFiltered, searchParams, user, onBack, onNavChange, onSelectMsg, onSetMessages, onDeleteChat }) {
    const renderScreen = ()=>{
        // Dynamic plugin module
        if (activeNav.startsWith("local_plugin")) {
            const moduleId = activeNav.split(":")[1] || "inyubxw162p1am34";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-col h-full flex-1 min-w-0 flex",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicModuleRenderer, {
                    moduleId: moduleId,
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 77,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this);
        }
        switch(activeNav){
            case "Jobs":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JobsHubScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 84,
                    columnNumber: 16
                }, this);
            case "PingDartCode":
            case "pingdart_code":
            case "PingCode":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PingDartCodeScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 89,
                    columnNumber: 16
                }, this);
            case "AiBlog":
            case "AiBlogs":
            case "ai-blog":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AiBlogGeneratorScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 94,
                    columnNumber: 16
                }, this);
            case "AiBudget":
            case "budget":
            case "Ai-Budget":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AiBudgetScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 99,
                    columnNumber: 16
                }, this);
            case "crm":
            case "Crm":
            case "CRM":
            case "crm_suite":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CrmScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 105,
                    columnNumber: 16
                }, this);
            case "hrm":
            case "Hrm":
            case "HRM":
            case "hrm_suite":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HrmScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 111,
                    columnNumber: 16
                }, this);
            case "AiDiary":
            case "diary":
            case "Ai-Diary":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AiDiaryModal, {
                    isOpen: true,
                    onClose: onBack,
                    isModal: false
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 116,
                    columnNumber: 16
                }, this);
            case "Cloud Storage":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloudStorageScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 119,
                    columnNumber: 16
                }, this);
            case "Reseller":
            case "reseller":
            case "reseller_hub":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResellerScreen, {
                    onBack: onBack,
                    onNavigateTab: onNavChange
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 124,
                    columnNumber: 16
                }, this);
            case "PJStephenPaul":
            case "pj_stephen_paul":
            case "stephen_paul_ministries":
            case "pj_ministries":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PJStephenPaulScreen, {
                    onBack: onBack,
                    onNavigateTab: onNavChange
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 130,
                    columnNumber: 16
                }, this);
            case "Mail":
            case "Inbox":
            case "Drafts":
            case "Sent":
            case "Spam":
            case "Trash":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MailScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 138,
                    columnNumber: 16
                }, this);
            case "Home":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeScreen, {
                    onNavigateTab: (tab, reelId)=>onNavChange(tab, reelId)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 141,
                    columnNumber: 16
                }, this);
            case "TikTokImport":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TikTokImportScreen, {
                    onBack: onBack,
                    onOpenReels: ()=>onNavChange("Reels")
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 144,
                    columnNumber: 16
                }, this);
            case "Reels":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReelsScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 147,
                    columnNumber: 16
                }, this);
            case "AiBot":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AiBotScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 150,
                    columnNumber: 16
                }, this);
            case "Explore":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 w-full h-full relative z-10 bg-white dark:bg-[#0f172a]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExploreModal, {
                        onClose: ()=>onNavChange("Chats"),
                        onOpenChat: (roomId)=>{
                            onNavChange("Chats");
                            onSelectMsg(roomId);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                        lineNumber: 155,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this);
            case "Shop":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShopScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 166,
                    columnNumber: 16
                }, this);
            case "Status":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 169,
                    columnNumber: 16
                }, this);
            case "Live":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 w-full h-full relative z-10 bg-white dark:bg-[#111827]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LiveScreen, {
                        onBack: onBack
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                        lineNumber: 174,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 173,
                    columnNumber: 11
                }, this);
            case "Channels":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChannelsScreen, {
                    channels: channelsFiltered,
                    selectedId: selectedMsgId,
                    onSelect: onSelectMsg,
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 180,
                    columnNumber: 11
                }, this);
            case "Communities":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommunitiesScreen, {
                    communities: communitiesFiltered,
                    selectedId: selectedMsgId,
                    onSelect: onSelectMsg,
                    onBack: onBack,
                    onMembershipChange: (updatedCommunities)=>{
                        onSetMessages((prev)=>{
                            const nonCommunity = prev.filter((m)=>m.type !== 'community');
                            return [
                                ...nonCommunity,
                                ...updatedCommunities
                            ];
                        });
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 190,
                    columnNumber: 11
                }, this);
            case "Games":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GamesScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 205,
                    columnNumber: 16
                }, this);
            case "Calls":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CallsScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 208,
                    columnNumber: 16
                }, this);
            case "Starred":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarredScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 211,
                    columnNumber: 16
                }, this);
            case "Archived":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArchivedScreen, {
                    archivedChats: archivedFiltered,
                    selectedId: selectedMsgId,
                    onSelect: onSelectMsg,
                    onBack: onBack,
                    onUnarchiveChat: (id)=>onSetMessages((prev)=>prev.map((m)=>m.id === id ? {
                                    ...m,
                                    isArchived: false
                                } : m)),
                    onMuteChat: (id)=>onSetMessages((prev)=>prev.map((m)=>m.id === id ? {
                                    ...m,
                                    isMuted: !m.isMuted
                                } : m)),
                    onDeleteChat: onDeleteChat
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 215,
                    columnNumber: 11
                }, this);
            case "Linked Devices":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkedDevicesScreen, {
                    onBack: onBack,
                    onNavigateToSettings: ()=>onNavChange("Settings")
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 232,
                    columnNumber: 11
                }, this);
            case "Wallet":
            case "wallet":
            case "Wallet & Coins":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletSettings, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 241,
                    columnNumber: 16
                }, this);
            case "Notifications":
            case "notifications":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationsScreen, {
                    onBack: onBack,
                    onNavigateTab: (tab)=>onNavChange(tab)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 246,
                    columnNumber: 11
                }, this);
            case "Profile":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-col h-full flex-1 min-w-0 flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserProfileScreen, {
                        communities: communitiesFiltered,
                        onBack: onBack,
                        userId: searchParams.get("userId") || undefined,
                        communityId: searchParams.get("communityId") || undefined,
                        isOwnProfile: !searchParams.get("userId") || String(searchParams.get("userId")) === String(user === null || user === void 0 ? void 0 : user.id),
                        onOpenChat: (targetId)=>{
                            __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)").then(({ chatApi })=>{
                                chatApi.createRoom("", "direct", [
                                    Number(targetId)
                                ]).then((res)=>{
                                    var _res_data;
                                    if (res.success && ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.id)) {
                                        onNavChange("Chats");
                                        onSelectMsg(res.data.id);
                                    }
                                });
                            });
                        },
                        onOpenSettings: ()=>onNavChange("Settings")
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                        lineNumber: 255,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 254,
                    columnNumber: 11
                }, this);
            case "Settings":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-col h-full flex-1 min-w-0 flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsScreen, {
                        onBack: onBack
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                        lineNumber: 279,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 278,
                    columnNumber: 11
                }, this);
            case "more":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-col h-full flex-1 min-w-0 flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MoreScreen, {
                        onNavigateTab: (tab)=>onNavChange(tab),
                        onBack: onBack
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                        lineNumber: 286,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 285,
                    columnNumber: 11
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DemoScreen, {
                    activeNav: activeNav,
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 294,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 w-full h-full flex flex-col min-w-0 overflow-hidden relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScreenFallback"], {}, void 0, false, {
                fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                lineNumber: 300,
                columnNumber: 27
            }, void 0),
            children: renderScreen()
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
            lineNumber: 300,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
        lineNumber: 299,
        columnNumber: 5
    }, this);
}
_c33 = ModuleScreenRenderer;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16, _c17, _c18, _c19, _c20, _c21, _c22, _c23, _c24, _c25, _c26, _c27, _c28, _c29, _c30, _c31, _c32, _c33;
__turbopack_context__.k.register(_c, "LiveScreen");
__turbopack_context__.k.register(_c1, "MailScreen");
__turbopack_context__.k.register(_c2, "CloudStorageScreen");
__turbopack_context__.k.register(_c3, "SettingsScreen");
__turbopack_context__.k.register(_c4, "UserProfileScreen");
__turbopack_context__.k.register(_c5, "StatusScreen");
__turbopack_context__.k.register(_c6, "ChannelsScreen");
__turbopack_context__.k.register(_c7, "CommunitiesScreen");
__turbopack_context__.k.register(_c8, "CallsScreen");
__turbopack_context__.k.register(_c9, "StarredScreen");
__turbopack_context__.k.register(_c10, "ArchivedScreen");
__turbopack_context__.k.register(_c11, "LinkedDevicesScreen");
__turbopack_context__.k.register(_c12, "HomeScreen");
__turbopack_context__.k.register(_c13, "MoreScreen");
__turbopack_context__.k.register(_c14, "NotificationsScreen");
__turbopack_context__.k.register(_c15, "DemoScreen");
__turbopack_context__.k.register(_c16, "AiBotScreen");
__turbopack_context__.k.register(_c17, "ShopScreen");
__turbopack_context__.k.register(_c18, "AiBlogGeneratorScreen");
__turbopack_context__.k.register(_c19, "ReelsScreen");
__turbopack_context__.k.register(_c20, "TikTokImportScreen");
__turbopack_context__.k.register(_c21, "JobsHubScreen");
__turbopack_context__.k.register(_c22, "DynamicModuleRenderer");
__turbopack_context__.k.register(_c23, "GamesScreen");
__turbopack_context__.k.register(_c24, "AiDiaryModal");
__turbopack_context__.k.register(_c25, "ExploreModal");
__turbopack_context__.k.register(_c26, "AiBudgetScreen");
__turbopack_context__.k.register(_c27, "CrmScreen");
__turbopack_context__.k.register(_c28, "HrmScreen");
__turbopack_context__.k.register(_c29, "PingDartCodeScreen");
__turbopack_context__.k.register(_c30, "ResellerScreen");
__turbopack_context__.k.register(_c31, "PJStephenPaulScreen");
__turbopack_context__.k.register(_c32, "WalletSettings");
__turbopack_context__.k.register(_c33, "ModuleScreenRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$call$2f$CallContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/user/components/call/CallContext.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/modules/chat/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$ChatList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/ChatList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatRooms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/hooks/useChatRooms.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modals$2f$CompleteProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modals/CompleteProfileModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/utils/safeLazy.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/hooks/useNavigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useSocketEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/hooks/useSocketEvents.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$ModuleScreenRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/ModuleScreenRenderer.tsx [app-client] (ecmascript)");
;
;
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
const GlobalCallUI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/user/components/call/GlobalCallUI.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.GlobalCallUI), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/user/components/call/GlobalCallUI.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = GlobalCallUI;
const ActiveChatPane = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/user/components/ActiveChatPane.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.ActiveChatPane), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/user/components/ActiveChatPane.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = ActiveChatPane;
/**
 * UserDashboardContent
 * Clean, modular layout shell managing navigation, chat list, active detail pane, and modals.
 */ function UserDashboardContent() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, accessToken, isHydrated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    // Navigation state and routing
    const { activeNav, setActiveNav, activeNavRef, selectedMsgId, selectedMsgIdRef, unlockedChatId, setUnlockedChatId, unlockError, setUnlockError, showCompleteProfile, setShowCompleteProfile, searchParams, handleNavChange, handleMsgSelect, handleGoBack, handleOpenCompleteProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"])();
    // Chat room state, caching, decryption, and CRUD
    const { setMessages, messagesRef, isLoadingChats, activeMessage, chatsFiltered, channelsFiltered, communitiesFiltered, archivedFiltered, fetchRooms, handleMessageSent, handleArchiveChat, handleMuteChat, handleFavoriteChat, handleClearChat, handleDeleteChat, handleCreateChat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatRooms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatRooms"])({
        activeNav,
        selectedMsgId,
        onSelectMsg: handleMsgSelect,
        onNavigateToChats: {
            "UserDashboardContent.useChatRooms": ()=>handleNavChange("Chats")
        }["UserDashboardContent.useChatRooms"]
    });
    // Socket.IO subscriptions, reconnection, and alerts
    const { socket } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useSocketEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocketEvents"])({
        activeNavRef,
        selectedMsgIdRef,
        messagesRef,
        setMessages,
        fetchRooms,
        handleNavChange,
        handleMsgSelect
    });
    // Fetch live user profile on initial mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserDashboardContent.useEffect": ()=>{
            var _Capacitor_isNativePlatform, _Capacitor;
            if (typeof document !== "undefined") {
                document.documentElement.removeAttribute("data-pending-onboarding");
            }
            if (!isHydrated) return;
            const token = accessToken || (("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("access_token") : "TURBOPACK unreachable") || "";
            if (!token) {
                router.replace("/login");
                return;
            }
            if ("object" !== "undefined" && ((_Capacitor = window.Capacitor) === null || _Capacitor === void 0 ? void 0 : (_Capacitor_isNativePlatform = _Capacitor.isNativePlatform) === null || _Capacitor_isNativePlatform === void 0 ? void 0 : _Capacitor_isNativePlatform.call(_Capacitor))) {
                __turbopack_context__.A("[project]/src/utils/safeStorage.ts [app-client] (ecmascript, async loader)").then({
                    "UserDashboardContent.useEffect": ({ safeStorage })=>{
                        __turbopack_context__.A("[project]/src/lib/utils.ts [app-client] (ecmascript, async loader)").then({
                            "UserDashboardContent.useEffect": ({ getApiV1Url })=>{
                                safeStorage.setItem('api_base_url', getApiV1Url()).catch({
                                    "UserDashboardContent.useEffect": ()=>{}
                                }["UserDashboardContent.useEffect"]);
                                safeStorage.setItem('access_token', token).catch({
                                    "UserDashboardContent.useEffect": ()=>{}
                                }["UserDashboardContent.useEffect"]);
                            }
                        }["UserDashboardContent.useEffect"]);
                    }
                }["UserDashboardContent.useEffect"]);
            }
            __turbopack_context__.A("[project]/src/services/api.ts [app-client] (ecmascript, async loader)").then({
                "UserDashboardContent.useEffect": ({ api })=>{
                    api.get('/user/profile').then({
                        "UserDashboardContent.useEffect": (res)=>{
                            var _res_data, _res_data1;
                            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.user)) {
                                const liveUser = res.data.user;
                                const userForStorage = {
                                    ...liveUser
                                };
                                delete userForStorage.avatar;
                                delete userForStorage.banner;
                                localStorage.setItem('user', JSON.stringify(userForStorage));
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().updateUser(liveUser);
                            }
                        }
                    }["UserDashboardContent.useEffect"]).catch({
                        "UserDashboardContent.useEffect": (err)=>console.error('[UserDashboard] Live profile fetch error:', err)
                    }["UserDashboardContent.useEffect"]);
                }
            }["UserDashboardContent.useEffect"]);
        }
    }["UserDashboardContent.useEffect"], [
        accessToken,
        isHydrated,
        router
    ]);
    // Preload secondary tab components in background during idle time
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserDashboardContent.useEffect": ()=>{
            const timer = setTimeout({
                "UserDashboardContent.useEffect.timer": ()=>{
                    if ("object" !== "undefined" && "requestIdleCallback" in window) {
                        window.requestIdleCallback({
                            "UserDashboardContent.useEffect.timer": ()=>{
                                __turbopack_context__.A("[project]/src/app/user/components/screens/CallsScreen.tsx [app-client] (ecmascript, async loader)");
                                __turbopack_context__.A("[project]/src/app/user/components/screens/ChannelsScreen.tsx [app-client] (ecmascript, async loader)");
                                __turbopack_context__.A("[project]/src/app/user/components/screens/CommunitiesScreen.tsx [app-client] (ecmascript, async loader)");
                                __turbopack_context__.A("[project]/src/app/user/components/screens/SettingsScreen.tsx [app-client] (ecmascript, async loader)");
                                __turbopack_context__.A("[project]/src/app/user/components/mail/MailScreen.tsx [app-client] (ecmascript, async loader)");
                                __turbopack_context__.A("[project]/src/app/user/components/CloudStorage/CloudStorageScreen.tsx [app-client] (ecmascript, async loader)");
                            }
                        }["UserDashboardContent.useEffect.timer"], {
                            timeout: 4000
                        });
                    } else {
                        __turbopack_context__.A("[project]/src/app/user/components/screens/CallsScreen.tsx [app-client] (ecmascript, async loader)");
                        __turbopack_context__.A("[project]/src/app/user/components/screens/ChannelsScreen.tsx [app-client] (ecmascript, async loader)");
                        __turbopack_context__.A("[project]/src/app/user/components/screens/SettingsScreen.tsx [app-client] (ecmascript, async loader)");
                        __turbopack_context__.A("[project]/src/app/user/components/mail/MailScreen.tsx [app-client] (ecmascript, async loader)");
                    }
                }
            }["UserDashboardContent.useEffect.timer"], 3000);
            return ({
                "UserDashboardContent.useEffect": ()=>clearTimeout(timer)
            })["UserDashboardContent.useEffect"];
        }
    }["UserDashboardContent.useEffect"], []);
    // Handlers for chat operations
    const handleLockChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UserDashboardContent.useCallback[handleLockChat]": async (id, code, isHidden)=>{
            const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
            await chatApi.lockRoom(id, code, isHidden);
            setMessages({
                "UserDashboardContent.useCallback[handleLockChat]": (prev)=>prev.map({
                        "UserDashboardContent.useCallback[handleLockChat]": (m)=>m.id === id ? {
                                ...m,
                                isLocked: !!code,
                                lockCode: code || undefined,
                                isHidden
                            } : m
                    }["UserDashboardContent.useCallback[handleLockChat]"])
            }["UserDashboardContent.useCallback[handleLockChat]"]);
            if (code) {
                if (isHidden) handleMsgSelect(null);
            } else {
                setUnlockedChatId(id);
            }
        }
    }["UserDashboardContent.useCallback[handleLockChat]"], [
        handleMsgSelect,
        setMessages,
        setUnlockedChatId
    ]);
    const onMessageSentHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UserDashboardContent.useCallback[onMessageSentHandler]": (preview, time, status, msgId)=>{
            const targetId = (activeMessage === null || activeMessage === void 0 ? void 0 : activeMessage.id) || selectedMsgId;
            if (targetId) {
                handleMessageSent(targetId, preview, time, status, msgId);
            }
        }
    }["UserDashboardContent.useCallback[onMessageSentHandler]"], [
        activeMessage === null || activeMessage === void 0 ? void 0 : activeMessage.id,
        selectedMsgId,
        handleMessageSent
    ]);
    const onMuteChangeHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UserDashboardContent.useCallback[onMuteChangeHandler]": (chatId, isMuted)=>{
            setMessages({
                "UserDashboardContent.useCallback[onMuteChangeHandler]": (prev)=>prev.map({
                        "UserDashboardContent.useCallback[onMuteChangeHandler]": (m)=>String(m.id) === String(chatId) ? {
                                ...m,
                                isMuted
                            } : m
                    }["UserDashboardContent.useCallback[onMuteChangeHandler]"])
            }["UserDashboardContent.useCallback[onMuteChangeHandler]"]);
        }
    }["UserDashboardContent.useCallback[onMuteChangeHandler]"], [
        setMessages
    ]);
    const onRoomUpdatedHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UserDashboardContent.useCallback[onRoomUpdatedHandler]": (roomId, updates)=>{
            setMessages({
                "UserDashboardContent.useCallback[onRoomUpdatedHandler]": (prev)=>{
                    const updated = prev.map({
                        "UserDashboardContent.useCallback[onRoomUpdatedHandler].updated": (m)=>{
                            if (String(m.id) === String(roomId)) {
                                return {
                                    ...m,
                                    ...updates,
                                    lastMessageTimestamp: updates.lastMessageTimestamp !== undefined ? updates.lastMessageTimestamp ? new Date(updates.lastMessageTimestamp) : m.lastMessageTimestamp : m.lastMessageTimestamp
                                };
                            }
                            return m;
                        }
                    }["UserDashboardContent.useCallback[onRoomUpdatedHandler].updated"]);
                    // Only move room to the top if bumpToTop is explicitly requested (e.g. newly sent or live received message)
                    if (updates.bumpToTop === true) {
                        const idx = updated.findIndex({
                            "UserDashboardContent.useCallback[onRoomUpdatedHandler].idx": (m)=>String(m.id) === String(roomId)
                        }["UserDashboardContent.useCallback[onRoomUpdatedHandler].idx"]);
                        if (idx > 0) {
                            const [room] = updated.splice(idx, 1);
                            updated.unshift(room);
                        }
                    }
                    return updated;
                }
            }["UserDashboardContent.useCallback[onRoomUpdatedHandler]"]);
        }
    }["UserDashboardContent.useCallback[onRoomUpdatedHandler]"], [
        setMessages
    ]);
    const handleUnlockPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UserDashboardContent.useCallback[handleUnlockPin]": (code)=>{
            if (activeMessage && code === activeMessage.lockCode) {
                setUnlockedChatId(activeMessage.id);
                setUnlockError("");
            } else {
                setUnlockError("Incorrect PIN");
            }
        }
    }["UserDashboardContent.useCallback[handleUnlockPin]"], [
        activeMessage,
        setUnlockedChatId,
        setUnlockError
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 h-full min-w-0 flex overflow-hidden relative",
        children: [
            activeNav === "Chats" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex h-full shrink-0 relative z-20 w-full ${isNative ? "" : "md:w-[380px] lg:w-[400px]"} ${selectedMsgId ? "hidden md:flex" : "flex"}`,
                style: {
                    boxShadow: isNative ? "none" : "1px 0 3px rgba(0,0,0,0.08)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$ChatList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatList"], {
                    chats: chatsFiltered,
                    isLoading: isLoadingChats,
                    selectedId: selectedMsgId,
                    onSelect: handleMsgSelect,
                    onArchiveChat: handleArchiveChat,
                    onMuteChat: handleMuteChat,
                    onFavoriteChat: handleFavoriteChat,
                    onClearChat: handleClearChat,
                    onDeleteChat: handleDeleteChat,
                    onCreateChat: handleCreateChat,
                    onOpenCompleteProfile: handleOpenCompleteProfile,
                    onNavChange: handleNavChange
                }, void 0, false, {
                    fileName: "[project]/src/app/user/page.tsx",
                    lineNumber: 233,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/page.tsx",
                lineNumber: 229,
                columnNumber: 9
            }, this),
            activeNav === "Chats" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveChatPane, {
                activeMessage: activeMessage,
                selectedMsgId: selectedMsgId,
                unlockedChatId: unlockedChatId,
                unlockError: unlockError,
                socket: socket,
                onBack: ()=>handleMsgSelect(null),
                onUnlock: handleUnlockPin,
                onUnlockErrorClear: ()=>setUnlockError(""),
                onSetUnlockedChatId: setUnlockedChatId,
                onSetUnlockError: setUnlockError,
                onLockChat: handleLockChat,
                onMessageSent: onMessageSentHandler,
                onMuteChange: onMuteChangeHandler,
                onRoomUpdated: onRoomUpdatedHandler,
                onDeleteChat: handleDeleteChat
            }, void 0, false, {
                fileName: "[project]/src/app/user/page.tsx",
                lineNumber: 252,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$ModuleScreenRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModuleScreenRenderer"], {
                activeNav: activeNav,
                selectedMsgId: selectedMsgId,
                channelsFiltered: channelsFiltered,
                communitiesFiltered: communitiesFiltered,
                archivedFiltered: archivedFiltered,
                searchParams: searchParams,
                user: user,
                onBack: handleGoBack,
                onNavChange: handleNavChange,
                onSelectMsg: handleMsgSelect,
                onSetMessages: setMessages,
                onDeleteChat: handleDeleteChat
            }, void 0, false, {
                fileName: "[project]/src/app/user/page.tsx",
                lineNumber: 270,
                columnNumber: 9
            }, this),
            showCompleteProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modals$2f$CompleteProfileModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompleteProfileModal"], {
                onClose: ()=>setShowCompleteProfile(false)
            }, void 0, false, {
                fileName: "[project]/src/app/user/page.tsx",
                lineNumber: 288,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/page.tsx",
        lineNumber: 226,
        columnNumber: 5
    }, this);
}
_s(UserDashboardContent, "lYrhy6jQxqvyt+YmVCzJfoijQNA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavigation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatRooms$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatRooms"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useSocketEvents$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSocketEvents"]
    ];
});
_c2 = UserDashboardContent;
function UserDashboard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScreenFallback"], {}, void 0, false, {
            fileName: "[project]/src/app/user/page.tsx",
            lineNumber: 302,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallProvider"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserDashboardContent, {}, void 0, false, {
                    fileName: "[project]/src/app/user/page.tsx",
                    lineNumber: 304,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalCallUI, {}, void 0, false, {
                    fileName: "[project]/src/app/user/page.tsx",
                    lineNumber: 305,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/page.tsx",
            lineNumber: 303,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/page.tsx",
        lineNumber: 302,
        columnNumber: 5
    }, this);
}
_c3 = UserDashboard;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "GlobalCallUI");
__turbopack_context__.k.register(_c1, "ActiveChatPane");
__turbopack_context__.k.register(_c2, "UserDashboardContent");
__turbopack_context__.k.register(_c3, "UserDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_user_9473a5c6._.js.map