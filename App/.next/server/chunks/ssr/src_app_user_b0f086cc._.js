module.exports = [
"[project]/src/app/user/components/call/CallContext.tsx [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// ============================================================
// Backward Compatibility Proxy for CallContext
// Re-exports from `@/components/call`
// ============================================================
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/call/index.ts [app-ssr] (ecmascript) <locals>");
;
}),
"[project]/src/app/user/components/shared/FilePreviewOverlay.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilePreviewOverlay",
    ()=>FilePreviewOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SentIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/File01Icon.js [app-ssr] (ecmascript)");
;
;
;
function FilePreviewOverlay({ selectedFiles, activeFileIndex, setActiveFileIndex, fileCaption, setFileCaption, onClose, onSend, onAddMore }) {
    const objectUrls = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        return selectedFiles.map((f)=>URL.createObjectURL(f));
    }, [
        selectedFiles
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        return ()=>{
            objectUrls.forEach((url)=>{
                try {
                    URL.revokeObjectURL(url);
                } catch (_) {}
            });
        };
    }, [
        objectUrls
    ]);
    if (selectedFiles.length === 0) return null;
    const currentFile = selectedFiles[activeFileIndex];
    const currentUrl = objectUrls[activeFileIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-50 flex flex-col bg-[#f0f2f5] dark:bg-[#111827]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center px-4 py-3 bg-[#f0f2f5] dark:bg-[#1a1c20] border-b border-[#d1d7db] dark:border-[#2d3139] shrink-0 h-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "p-2 rounded-full hover:bg-[#d9dbdf] dark:bg-[#2d3139] dark:hover:bg-[#2d3139] text-[#54656f] dark:text-[#a0abb2] transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-4 font-semibold text-[17px] text-[#111b21] dark:text-[#f0f2f5]",
                        children: selectedFiles.length > 0 ? currentFile?.name || 'Preview' : 'Preview'
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative flex items-center justify-center p-8 overflow-hidden bg-[#e9edef] dark:bg-[#0b141a]",
                children: [
                    currentFile && currentUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col items-center w-full h-full justify-center",
                        children: currentFile.type.startsWith('image/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: currentUrl,
                            alt: "Preview",
                            className: "max-w-full max-h-full object-contain rounded-md shadow-md bg-white/10"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                            lineNumber: 62,
                            columnNumber: 15
                        }, this) : currentFile.type.startsWith('video/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                            src: currentUrl,
                            controls: true,
                            autoPlay: true,
                            className: "max-w-full max-h-full rounded-md shadow-md bg-black"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                            lineNumber: 64,
                            columnNumber: 15
                        }, this) : currentFile.type === 'application/pdf' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                            src: currentUrl,
                            title: "PDF Preview",
                            className: "w-full h-full max-w-4xl rounded-md shadow-md bg-white border-0"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center p-8 bg-white dark:bg-[#1a1c20] rounded-xl shadow-lg border border-[#e9edef] dark:border-[#2d3139] w-[300px] h-[300px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["File01Icon"], {
                                    size: 80,
                                    className: "text-[#54656f] dark:text-[#a0abb2] mb-4 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[18px] font-medium text-[#111b21] dark:text-[#f0f2f5] text-center break-all line-clamp-3",
                                    children: currentFile.name
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    selectedFiles.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFileIndex((i)=>Math.max(0, i - 1)),
                                disabled: activeFileIndex === 0,
                                className: "absolute left-6 w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center disabled:opacity-30 transition-all z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveFileIndex((i)=>Math.min(selectedFiles.length - 1, i + 1)),
                                disabled: activeFileIndex === selectedFiles.length - 1,
                                className: "absolute right-6 w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center disabled:opacity-30 transition-all z-10",
                                style: {
                                    transform: "rotate(180deg)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col bg-[#f0f2f5] dark:bg-[#1a1c20] border-t border-[#d1d7db] dark:border-[#2d3139] shrink-0 pt-4 pb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 max-w-3xl mx-auto w-full flex items-end gap-3 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-white dark:bg-[#2a2f32] rounded-xl px-4 py-2.5 shadow-sm border border-[#e9edef] dark:border-[#2d3139] flex items-center min-h-[46px] cursor-text",
                                onClick: (e)=>e.currentTarget.querySelector('textarea')?.focus(),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onSend(fileCaption),
                                className: "w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-all hover:scale-105 active:scale-95 mb-[1px]",
                                style: {
                                    background: "#00a884"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SentIcon"], {
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
                    selectedFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 flex items-center justify-center gap-2 overflow-x-auto",
                        children: [
                            selectedFiles.map((f, i)=>{
                                const thumbUrl = objectUrls[i];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveFileIndex(i),
                                    className: `relative w-14 h-14 rounded-lg overflow-hidden border-2 shrink-0 flex items-center justify-center bg-white dark:bg-[#2a2f32] transition-colors ${activeFileIndex === i ? 'border-[#00a884]' : 'border-transparent opacity-70 hover:opacity-100'}`,
                                    children: f.type.startsWith('image/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: thumbUrl,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                        lineNumber: 141,
                                        columnNumber: 21
                                    }, this) : f.type.startsWith('video/') ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                        src: thumbUrl,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/FilePreviewOverlay.tsx",
                                        lineNumber: 143,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["File01Icon"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onAddMore,
                                className: "w-14 h-14 rounded-lg border-2 border-[#d1d7db] dark:border-[#2d3139] border-dashed flex items-center justify-center text-[#54656f] dark:text-[#a0abb2] hover:bg-black/5 shrink-0 ml-2 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/src/app/user/components/modals/LocationModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LocationModal",
    ()=>LocationModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SentIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Location01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Navigation03Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Navigation03Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2d$defaulticon$2d$compatibility$2f$src$2f$Icon$2e$Default$2e$compatibility$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet-defaulticon-compatibility/src/Icon.Default.compatibility.js [app-ssr] (ecmascript)");
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
// Dynamically import map components to avoid SSR issues
const MapContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const TileLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const Marker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
// Component to handle map clicks and move marker
function MapEvents({ setPosition, setAddress, setName }) {
    const MapEventsComp = __turbopack_context__.r("[project]/node_modules/react-leaflet/lib/index.js [app-ssr] (ecmascript)").useMapEvents;
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
// Component to programmatically center map
function MapUpdater({ center }) {
    const useMapHook = __turbopack_context__.r("[project]/node_modules/react-leaflet/lib/index.js [app-ssr] (ecmascript)").useMap;
    const map = useMapHook();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        map.setView(center, map.getZoom());
    }, [
        center,
        map
    ]);
    return null;
}
async function fetchAddress(lat, lng) {
    try {
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&email=contact@pingdart.com`, {
            headers: {
                'Accept-Language': 'en-US,en;q=0.9'
            }
        });
        const data = await res.json();
        return {
            address: data.display_name || "Unknown Location",
            name: data.name || data.display_name?.split(',')[0] || "Pinned Location"
        };
    } catch (err) {
        return {
            address: "Unknown Location",
            name: "Pinned Location"
        };
    }
}
function LocationModal({ onClose, onSend, initialLat, initialLng, title = "Send location" }) {
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        lat: initialLat || 51.505,
        lng: initialLng || -0.09
    });
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Loading...");
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Pinned Location");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const locationPinIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return undefined;
        //TURBOPACK unreachable
        ;
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!searchQuery.trim()) {
            setSearchResults([]);
            return;
        }
        const timeout = setTimeout(async ()=>{
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
        }, 500);
        return ()=>clearTimeout(timeout);
    }, [
        searchQuery
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialLat && initialLng) {
            fetchAddress(initialLat, initialLng).then((data)=>{
                setAddress(data.address);
                setName(data.name);
            });
        } else {
            handleCurrentLocation();
        }
    }, []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 z-50 flex flex-col bg-[#f0f2f5] dark:bg-[#111827]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 px-4 py-3 bg-[#00a884] dark:bg-[#202c33] text-white shrink-0 shadow-sm h-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "p-2 rounded-full hover:bg-black/10 transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col h-full relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 z-0 relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MapContainer, {
                            center: position,
                            zoom: 15,
                            style: {
                                height: '100%',
                                width: '100%'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TileLayer, {
                                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Marker, {
                                    position: position,
                                    icon: locationPinIcon
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MapEvents, {
                                    setPosition: setPosition,
                                    setAddress: setAddress,
                                    setName: setName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MapUpdater, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 right-4 z-10 space-y-2 max-w-md mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSearch,
                                className: "flex items-center bg-white dark:bg-[#202c33] rounded-xl shadow-lg overflow-hidden border border-black/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "p-3 text-[#54656f] dark:text-[#a0abb2]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Search01Icon"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-[#202c33] rounded-xl shadow-lg border border-black/5 max-h-48 overflow-y-auto",
                                children: searchResults.map((res, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>selectSearchResult(res),
                                        className: "p-3 border-b border-[#f0f2f5] dark:border-[#111827] last:border-b-0 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Location01Icon"], {
                                                size: 20,
                                                className: "text-[#8696a0] shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                                lineNumber: 225,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[15px] font-medium text-[#111b21] dark:text-[#e9edef] truncate",
                                                        children: res.name || res.display_name.split(',')[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleCurrentLocation,
                        className: "absolute bottom-32 right-4 z-10 p-3 bg-white dark:bg-[#202c33] text-[#00a884] rounded-full shadow-lg border border-black/5 hover:bg-gray-50 transition",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Navigation03Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Navigation03Icon"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-[#202c33] p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-10 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col min-w-0 pr-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[16px] font-medium text-[#111b21] dark:text-[#e9edef] truncate",
                                            children: name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/LocationModal.tsx",
                                            lineNumber: 248,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSend,
                                className: "w-full py-3 bg-[#00a884] hover:bg-[#008f6f] text-white rounded-xl font-medium flex justify-center items-center gap-2 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SentIcon"], {
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
}),
"[project]/src/app/user/components/modals/MediaViewerModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MediaViewerModal",
    ()=>MediaViewerModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Download01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/File01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
function MediaViewerModal({ isOpen, onClose, items, currentIndex, onIndexChange }) {
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (currentIndex > 0) {
            onIndexChange(currentIndex - 1);
        }
    }, [
        currentIndex,
        onIndexChange
    ]);
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (currentIndex < items.length - 1) {
            onIndexChange(currentIndex + 1);
        }
    }, [
        currentIndex,
        items.length,
        onIndexChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const handleKeyDown = (e)=>{
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowLeft') {
                handlePrev();
            } else if (e.key === 'ArrowRight') {
                handleNext();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return ()=>window.removeEventListener('keydown', handleKeyDown);
    }, [
        isOpen,
        onClose,
        handlePrev,
        handleNext
    ]);
    if (!isOpen || items.length === 0) return null;
    const currentItem = items[currentIndex] || items[0];
    const resolvedUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(currentItem?.url) || currentItem?.url || '';
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-md select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 md:px-6 pt-[max(0.75rem,calc(0.5rem+env(safe-area-inset-top,0px)))] pb-3 md:pb-4 bg-gradient-to-b from-black/90 via-black/60 to-transparent shrink-0 z-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 sm:gap-3 text-white min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "md:hidden w-9 h-9 -ml-1 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shrink-0",
                                title: "Back",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-base tracking-wide truncate",
                                        children: currentItem.senderName || 'Media'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 sm:gap-3 shrink-0",
                        children: [
                            resolvedUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDownload,
                                className: "w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer",
                                title: "Download file",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Download01Icon"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer",
                                title: "Close viewer (Esc)",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative flex items-center justify-center p-2 sm:p-4 md:p-8 overflow-hidden",
                children: [
                    items.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handlePrev,
                        disabled: currentIndex === 0,
                        className: `absolute left-3 md:left-8 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/30 active:scale-95 text-white flex items-center justify-center transition-all z-30 cursor-pointer shadow-lg backdrop-blur-sm ${currentIndex === 0 ? 'opacity-20 pointer-events-none' : 'opacity-80 hover:scale-105'}`,
                        title: "Previous (Left Arrow)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex items-center justify-center max-w-full max-h-full",
                        children: currentItem.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
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
                        }, this) : currentItem.type === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: resolvedUrl,
                            alt: currentItem.name || 'Media',
                            className: "max-w-[92vw] max-h-[75vh] sm:max-h-[80vh] rounded-lg shadow-2xl object-contain"
                        }, resolvedUrl, false, {
                            fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center justify-center p-8 sm:p-10 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 text-white min-w-[260px] max-w-xs sm:max-w-md mx-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$File01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["File01Icon"], {
                                    size: 64,
                                    className: "text-white/80 mb-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold text-base sm:text-lg max-w-xs truncate text-center mb-1",
                                    children: currentItem.name || 'Document'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/MediaViewerModal.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleDownload,
                                    className: "mt-4 px-6 py-2.5 bg-[#00a884] hover:bg-[#008f6f] active:scale-95 text-white rounded-full font-medium text-sm transition-all flex items-center gap-2 shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Download01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Download01Icon"], {
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
                    items.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNext,
                        disabled: currentIndex === items.length - 1,
                        className: `absolute right-3 md:right-8 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/15 hover:bg-white/30 active:scale-95 text-white flex items-center justify-center transition-all z-30 cursor-pointer shadow-lg backdrop-blur-sm ${currentIndex === items.length - 1 ? 'opacity-20 pointer-events-none' : 'opacity-80 hover:scale-105'}`,
                        style: {
                            transform: 'rotate(180deg)'
                        },
                        title: "Next (Right Arrow)",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
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
            currentItem.caption ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center px-4 md:px-6 pt-3 pb-[max(0.75rem,calc(0.5rem+env(safe-area-inset-bottom,0px)))] bg-gradient-to-t from-black/95 via-black/60 to-transparent shrink-0 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/src/app/user/components/modals/CompleteProfileModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompleteProfileModal",
    ()=>CompleteProfileModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CallIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Location01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Briefcase01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Briefcase01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Alert01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
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
const LocationMapModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/app/user/components/settings/LocationMapModal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500",
            children: "Loading Map..."
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
            lineNumber: 21,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
function CompleteProfileModal({ onClose }) {
    const { user, updateUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlatform"])();
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
    const [fullName, setFullName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(user?.full_name || user?.fullName || "");
    const [profession, setProfession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(user?.profession || "");
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(user?.location || "");
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(normalizeGender(user?.gender));
    const [showLocationModal, setShowLocationModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (user) {
            setFullName(user.full_name || user.fullName || "");
            setProfession(user.profession || "");
            setLocation(user.location || "");
            setGender(normalizeGender(user?.gender));
        }
    }, [
        user
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        let isMounted = true;
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].get("/user/profile").then((res)=>{
            if (isMounted && res.data?.success && res.data.user) updateUser(res.data.user);
        }).catch((err)=>console.error("CompleteProfileModal fetch error:", err));
        return ()=>{
            isMounted = false;
        };
    }, [
        updateUser
    ]);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].put("/user/profile", {
                fullName,
                profession,
                location,
                gender: gender || undefined
            });
            if (res.data?.success) {
                updateUser(res.data.user);
                sessionStorage.setItem("complete_profile_dismissed", "true");
                localStorage.setItem("complete_profile_dismissed", "true");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Profile updated successfully!");
                onClose();
            } else {
                setError(res.data.message || "Failed to update profile.");
            }
        } catch (err) {
            setError(err.response?.data?.message || err.response?.data?.error || "An error occurred.");
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[200] bg-white flex flex-col w-full h-[100dvh] max-h-[100dvh] overflow-hidden select-none",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 rounded-b-[45px] shadow-lg flex flex-col items-center justify-center px-6 py-8 pt-[calc(2.25rem+env(safe-area-inset-top,16px))] text-white overflow-hidden shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 overflow-hidden pointer-events-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-2xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSkip,
                            className: "absolute top-[calc(1rem+env(safe-area-inset-top,12px))] right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 transition-all z-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 flex flex-col items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 p-2 flex items-center justify-center shadow-xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-black tracking-wider text-white uppercase",
                                    children: ("TURBOPACK compile-time value", "PingDart") || "PingDart"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-extrabold text-white",
                                            children: "Complete Your Profile"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 overflow-y-auto px-6 py-5 space-y-4 pb-[calc(1.5rem+env(safe-area-inset-bottom,16px))]",
                    children: [
                        error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 p-3 rounded-2xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                    size: 15,
                                    className: "shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[14px] font-bold text-slate-500 uppercase tracking-wider px-1",
                                            children: "Full Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserIcon"], {
                                                    size: 15,
                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[14px] font-bold text-slate-500 uppercase tracking-wider px-1",
                                            children: "Phone Number"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2.5 w-full px-4 py-3.5 rounded-full border border-slate-200 bg-slate-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CallIcon"], {
                                                    size: 15,
                                                    className: "text-slate-400 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-1 text-xs font-semibold text-slate-700 truncate",
                                                    children: user?.phone || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[14px] font-bold text-slate-500 uppercase tracking-wider px-1",
                                            children: "Profession / Title"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Briefcase01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Briefcase01Icon"], {
                                                    size: 15,
                                                    className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[14px] font-bold text-slate-500 uppercase tracking-wider px-1",
                                            children: "Location"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowLocationModal(true),
                                            className: "w-full flex items-center gap-3 px-4 py-3.5 rounded-full border border-slate-200 bg-slate-50 text-left active:scale-[0.98] transition-transform",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Location01Icon"], {
                                                    size: 15,
                                                    className: "text-slate-400 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-[14px] font-bold text-slate-500 uppercase tracking-wider px-1",
                                            children: "Gender"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex p-1.5 bg-slate-100 rounded-full border border-slate-200 shadow-inner",
                                            children: [
                                                "Male",
                                                "Female",
                                                "Other"
                                            ].map((g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setGender(g),
                                                    className: `flex-1 py-2.5 text-xs font-extrabold tracking-wider uppercase rounded-full transition-all duration-200 ${gender?.toLowerCase() === g.toLowerCase() ? "bg-white text-blue-600 shadow-md border border-slate-200/60 scale-[1.02]" : "text-slate-400 hover:text-slate-600"}`,
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: handleSkip,
                                            className: "flex-1 py-3.5 rounded-full border border-slate-200 bg-slate-50 text-slate-600 text-xs font-bold hover:bg-slate-100 active:scale-95 transition-all",
                                            children: "Skip for now"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                showLocationModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LocationMapModal, {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-[460px] bg-white dark:bg-[#111b21] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-6 py-4 bg-[#4338ca] text-white shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[18px] font-bold",
                                        children: "Complete Your Profile"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSkip,
                                className: "p-1 hover:bg-black/10 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 overflow-y-auto max-h-[80vh]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed",
                                children: "Welcome to PingDart! Please take a moment to add these remaining details to set up your profile."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 p-3 bg-red-50 text-red-600 dark:bg-red-950/20 dark:text-red-400 rounded-xl text-xs font-medium border border-red-100 dark:border-red-900/30",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                                children: "Full Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 282,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 bg-[#f0f2f5] dark:bg-[#202c33] rounded-xl px-3.5 py-2.5 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserIcon"], {
                                                        size: 18,
                                                        className: "text-gray-400 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 284,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                                children: "Phone Number"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 bg-[#f0f2f5] dark:bg-[#202c33] rounded-xl px-3.5 py-2.5 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CallIcon"], {
                                                        size: 18,
                                                        className: "text-gray-400 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex-1 text-[#111b21] dark:text-[#e9edef]",
                                                        children: user?.phone || /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                                children: "Profession / Title"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 298,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 bg-[#f0f2f5] dark:bg-[#202c33] rounded-xl px-3.5 py-2.5 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Briefcase01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Briefcase01Icon"], {
                                                        size: 18,
                                                        className: "text-gray-400 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 300,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                                children: "Location"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 bg-[#f0f2f5] dark:bg-[#202c33] rounded-xl px-3.5 py-2.5 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Location01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Location01Icon"], {
                                                        size: 18,
                                                        className: "text-gray-400 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[11px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider",
                                                children: "Gender"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: gender,
                                                onChange: (e)=>setGender(e.target.value),
                                                className: "w-full bg-[#f0f2f5] dark:bg-[#202c33] border-none rounded-xl px-3.5 py-2.5 text-sm text-[#111b21] dark:text-[#e9edef] outline-none cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select Gender"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Male",
                                                        children: "Male"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Female",
                                                        children: "Female"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 320,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Transgender",
                                                        children: "Transgender"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 321,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Non-binary",
                                                        children: "Non-binary"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "Other",
                                                        children: "Other"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                        lineNumber: 323,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 pt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleSkip,
                                                className: "flex-1 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm",
                                                children: "Skip for now"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modals/CompleteProfileModal.tsx",
                                                lineNumber: 328,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            showLocationModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LocationMapModal, {
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
}),
"[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileScreenSkeleton",
    ()=>MobileScreenSkeleton,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function MobileScreenSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 w-full h-full flex flex-col bg-[#f8fafc] dark:bg-[#0b141a] overflow-hidden select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-b-[24px] shadow-md shrink-0 pt-[calc(0.85rem+env(safe-area-inset-top,16px))] pb-4 px-4 z-20 relative overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-[8px] bg-white/25 backdrop-blur-md"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                    lineNumber: 13,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-4 w-28 bg-white/30 rounded-md"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                            lineNumber: 15,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 rounded-[8px] bg-white/25 backdrop-blur-md"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto px-4 py-3.5 space-y-3.5 animate-pulse pb-[calc(5rem+env(safe-area-inset-bottom,16px))]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-white dark:bg-[#111827] rounded-[18px] p-4 shadow-xs border border-slate-100 dark:border-slate-800/80 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-13 h-13 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded-md"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                                lineNumber: 35,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5 pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2.5 w-full bg-slate-100 dark:bg-slate-800/40 rounded-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-7 w-20 bg-slate-100 dark:bg-slate-800/60 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-7 w-20 bg-slate-100 dark:bg-slate-800/60 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 overflow-hidden py-1",
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-1.5 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 border-2 border-white dark:border-slate-900 shadow-xs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-[#111827] rounded-[18px] p-3 shadow-xs border border-slate-100 dark:border-slate-800/80 space-y-2.5",
                        children: [
                            1,
                            2,
                            3,
                            4,
                            5
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 p-2 rounded-[10px] bg-slate-50/80 dark:bg-slate-800/30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 space-y-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-3 bg-slate-200 dark:bg-slate-800 rounded w-2/3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
const __TURBOPACK__default__export__ = MobileScreenSkeleton;
}),
"[project]/src/app/user/utils/safeLazy.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScreenFallback",
    ()=>ScreenFallback,
    "safeLazy",
    ()=>safeLazy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$shared$2f$MobileScreenSkeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/shared/MobileScreenSkeleton.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function safeLazy(importFn, exportName) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lazy"])(async ()=>{
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
                const FallbackScreen = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3 bg-[#f8fafc] dark:bg-[#0b141a]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-bold text-slate-700 dark:text-slate-300",
                                children: "Screen temporarily unavailable"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "block md:hidden w-full h-full flex-1 min-w-0 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$shared$2f$MobileScreenSkeleton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MobileScreenSkeleton"], {}, void 0, false, {
                    fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex flex-1 w-full h-full bg-[#f8fafc] dark:bg-[#0b141a] overflow-hidden select-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-80 lg:w-96 flex flex-col bg-white dark:bg-[#111827] border-r border-slate-200/80 dark:border-slate-800 p-4 space-y-3.5 shrink-0 animate-pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-[8px] bg-slate-200 dark:bg-slate-800"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-3.5 w-24 bg-slate-200 dark:bg-slate-800 rounded-[4px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-9 bg-slate-100 dark:bg-slate-800/60 rounded-[8px] w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-7 bg-slate-100 dark:bg-slate-800/40 rounded-[6px] w-3/4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 pt-3",
                                children: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5,
                                    6
                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 p-2 rounded-[8px] bg-slate-50/60 dark:bg-slate-800/30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                                lineNumber: 77,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-3 bg-slate-200 dark:bg-slate-800 rounded w-2/3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                                        lineNumber: 79,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col p-6 space-y-4 bg-white dark:bg-[#0b141a] animate-pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-7 w-40 bg-slate-200 dark:bg-slate-800 rounded-md"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-28 w-full bg-slate-100 dark:bg-slate-800/60 rounded-xl"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 md:grid-cols-3 gap-3 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-28 bg-slate-100 dark:bg-slate-800/40 rounded-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-28 bg-slate-100 dark:bg-slate-800/40 rounded-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/utils/safeLazy.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/src/app/user/utils/decryptPreview.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$utils$2f$decryptPreview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/utils/decryptPreview.ts [app-ssr] (ecmascript)");
;
}),
"[project]/src/app/user/hooks/useNotifications.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript)");
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
    let senderName = messageData.senderName || (room ? room.sender || room.name : 'Someone');
    let body = 'You have a new message';
    const rawText = messageData.text || '';
    const msgType = messageData.type || 'text';
    const pushPreview = messageData.data?.pushPreview || messageData.data?.preview || (messageData.data?.text && !messageData.data.text.startsWith('{') ? messageData.data.text : null);
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
    const cachedPlain = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCachedPreview"](Number(messageData.roomId), messageData.id);
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
    __turbopack_context__.A("[project]/src/components/chat/InAppChatToast.tsx [app-ssr] (ecmascript, async loader)").then(({ showInAppChatToast })=>{
        showInAppChatToast({
            roomId: Number(messageData.roomId),
            senderId: messageData.senderId,
            title: senderName,
            body,
            avatarUrl: messageData.senderAvatar || room?.avatarUrl || null,
            senderName
        });
    });
}
function showSystemNotification(messageData, onOpenChat) {
    const dedupKey = `pingdart_notif_fired_${messageData.roomId}_${messageData.id}`;
    const alreadyFired = "undefined" !== 'undefined' && localStorage.getItem(dedupKey);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(dedupKey, '1');
        setTimeout(()=>{
            try {
                localStorage.removeItem(dedupKey);
            } catch (_) {}
        }, 8000);
    } catch (_) {}
    __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)").then(({ chatApi })=>{
        chatApi.getRooms().then((res)=>{
            if (res.success) {
                const room = res.data.find((r)=>String(r.id) === String(messageData.roomId));
                const { senderName, body } = resolveNotificationDetails(messageData, room);
                if ("undefined" !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') //TURBOPACK unreachable
                ;
            }
        });
    });
}
}),
"[project]/src/app/user/hooks/useSocketEvents.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSocketEvents",
    ()=>useSocketEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$call$2f$CallContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/user/components/call/CallContext.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioTones$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/audioTones.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$network$2f$networkStatusEngine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/network/networkStatusEngine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pinnedMessages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$decryptPreview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/user/utils/decryptPreview.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$utils$2f$decryptPreview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/utils/decryptPreview.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/hooks/useNotifications.ts [app-ssr] (ecmascript)");
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { accessToken } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { socket, setSocket } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallContext"])();
    const typingTimeoutsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])({});
    const pendingDeliveryByRoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const deliveryFlushTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Stable callback refs to prevent unnecessary socket recreations
    const fetchRoomsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(fetchRooms);
    fetchRoomsRef.current = fetchRooms;
    const handleNavChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(handleNavChange);
    handleNavChangeRef.current = handleNavChange;
    const handleMsgSelectRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(handleMsgSelect);
    handleMsgSelectRef.current = handleMsgSelect;
    // Unique identifier for this specific browser tab instance to distinguish it from other tabs
    const tabInstanceIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'tab_default');
    // WhatsApp-like document title and background unread state
    const backgroundUnreadCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const originalTitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(typeof document !== 'undefined' ? document.title || 'PingDart Chat' : 'PingDart Chat');
    const titleFlashTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = accessToken || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "") || "";
        if (!token) return;
        // Request desktop notification permission non-blockingly if not decided
        if ("undefined" !== 'undefined' && 'Notification' in window && Notification.permission === 'default') //TURBOPACK unreachable
        ;
        const socketUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiBaseUrl"])();
        const cleanedUrl = socketUrl.trim();
        // Prefer WebSocket directly to maintain real-time background TCP stream without browser timer throttling
        const socketInstance = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(`${cleanedUrl}/api/realtime/`, {
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
        const getLatestToken = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().accessToken || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "") || "";
        socketInstance.on('reconnect_attempt', ()=>{
            const latestToken = getLatestToken();
            socketInstance.io.opts.query = {
                token: latestToken
            };
            socketInstance.auth = {
                token: latestToken
            };
        });
        socketInstance.on('connect', ()=>{
            __turbopack_context__.A("[project]/src/services/presenceLifecycleManager.ts [app-ssr] (ecmascript, async loader)").then(({ presenceLifecycleManager })=>{
                presenceLifecycleManager.init(socketInstance);
            });
            fetchRooms();
            // Auto-deliver any pending messages waiting for this user now that socket connected
            try {
                __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)").then(({ chatApi })=>{
                    chatApi.markAsDelivered().catch(()=>{});
                });
            } catch (_) {}
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        });
        socketInstance.on('status:new', ()=>{
            window.dispatchEvent(new Event('status_refresh'));
            fetchRooms();
        });
        socketInstance.on('budget:vault_updated', (data)=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        });
        // Remote session revocation triggered from mobile Linked Devices screen
        socketInstance.on('device:unlinked', (data)=>{
            console.log('[Socket] 🔒 Received device:unlinked event:', data);
            const isNative = "undefined" !== 'undefined' && !!window.Capacitor?.isNativePlatform?.();
            const myDeviceId = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
            // Primary native mobile device should NEVER be logged out remotely by socket event
            if (!isNative && data?.deviceId && myDeviceId && data.deviceId === myDeviceId) //TURBOPACK unreachable
            ;
            else {
                console.log('[Socket] 📱 Remote device unlinked. Keeping this device active.');
                window.dispatchEvent(new CustomEvent('device_list_updated', {
                    detail: data
                }));
            }
        });
        socketInstance.on('device:linked', (data)=>{
            console.log('[Socket] 📱 Received device:linked event:', data);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        });
        socketInstance.on('device:link-code-prompt', (data)=>{
            console.log('[Socket] 🔑 Received device:link-code-prompt event:', data);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        });
        // Server-authoritative real-time notification events
        socketInstance.on('notification:unread_count', (payload)=>{
            if (typeof payload?.count === 'number' && "undefined" !== 'undefined') //TURBOPACK unreachable
            ;
        });
        socketInstance.on('notification:new', (notif)=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // 1. If this is a chat notification, chat:new_message already manages in-app chat toasts.
            // Do not show a second generic toast with "Open Chat".
            if (notif.type === 'chat') {
                return;
            }
            // 2. If this notification belongs to the currently active chat room, never show a toast
            const notifRoomId = notif.metadata?.roomId || notif.roomId || (notif.actionUrl ? new URLSearchParams(notif.actionUrl.split('?')[1] || '').get('roomId') : null);
            const currentActiveRoomId = selectedMsgIdRef.current || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null);
            if (notifRoomId && currentActiveRoomId && String(notifRoomId) === String(currentActiveRoomId) && [
                'Chats',
                'Channels'
            ].includes(activeNavRef.current)) {
                return;
            }
            if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
                __turbopack_context__.A("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript, async loader)").then(({ toast })=>{
                    toast(notif.title || 'New Notification', {
                        description: notif.body || '',
                        duration: 5000,
                        action: notif.type === 'mail' ? {
                            label: 'View Mail',
                            onClick: ()=>handleNavChange('Mail')
                        } : undefined
                    });
                });
            }
        });
        socketInstance.on('notification:updated', (payload)=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        });
        socketInstance.on('explore:new_neighbor_joined', (data)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"])(data.title || '👋 New Neighbor Joined Ping!', {
                description: data.body || 'Someone new joined within 5 km of you. Open Explore to connect!',
                action: {
                    label: 'Explore',
                    onClick: ()=>handleNavChange('Explore')
                }
            });
        });
        // Deduplication: track last seen message ID per room to prevent double-fire
        const processedMsgIds = new Set();
        const queueDeliveryAck = (roomId, messageId)=>{
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
            deliveryFlushTimerRef.current = setTimeout(()=>{
                const queue = new Map(pendingDeliveryByRoom.current);
                pendingDeliveryByRoom.current.clear();
                deliveryFlushTimerRef.current = null;
                queue.forEach((msgIdSet, rId)=>{
                    const msgIds = Array.from(msgIdSet);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].markAsDelivered(rId, msgIds.length > 0 ? msgIds : undefined).catch(()=>{});
                });
            }, 100);
        };
        const updateActiveTabHeartbeat = ()=>{
            if ("TURBOPACK compile-time truthy", 1) return;
            //TURBOPACK unreachable
            ;
        };
        const restoreDocumentTitle = ()=>{
            if (typeof document === 'undefined') return;
            if (titleFlashTimerRef.current) {
                clearInterval(titleFlashTimerRef.current);
                titleFlashTimerRef.current = null;
            }
            backgroundUnreadCountRef.current = 0;
            document.title = originalTitleRef.current || 'PingDart Chat';
        };
        const updateBackgroundTabTitle = (senderName, previewText)=>{
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
            titleFlashTimerRef.current = setInterval(()=>{
                if (document.visibilityState === 'visible') {
                    restoreDocumentTitle();
                    return;
                }
                document.title = toggle ? messageAlert : countAlert;
                toggle = !toggle;
            }, 2000);
        };
        /**
     * Socket Event: chat:new_message
     */ const handleSocketNewMessage = (messageData)=>{
            const dedupKey = `${messageData.roomId}:${messageData.id}`;
            if (messageData.id && processedMsgIds.has(dedupKey)) return;
            if (messageData.id) {
                processedMsgIds.add(dedupKey);
                if (processedMsgIds.size > 200) {
                    const first = processedMsgIds.values().next().value;
                    if (first) processedMsgIds.delete(first);
                }
            }
            const currentUserId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id;
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
            const currentActiveRoomId = (()=>{
                if ("TURBOPACK compile-time truthy", 1) return null;
                //TURBOPACK unreachable
                ;
            })();
            const isChatOpen = Boolean(currentActiveRoomId) && String(currentActiveRoomId) === String(messageData.roomId) && typeof document !== 'undefined' && document.visibilityState === 'visible';
            const targetRoom = messagesRef.current.find((m)=>String(m.id) === String(messageData.roomId));
            const isRoomMuted = !!targetRoom?.isMuted;
            // Optimistic update: update chat list preview & timestamp instantly
            setMessages((prev)=>{
                const roomInList = prev.find((m)=>String(m.id) === String(messageData.roomId) || isFromOtherUser && m.otherUserId && String(m.otherUserId) === String(messageData.senderId));
                const resolvedRoomId = roomInList ? roomInList.id : messageData.roomId;
                const isDirectChat = roomInList?.type === 'direct' || roomInList && !roomInList.type;
                let newPreview = messageData.text;
                if (messageData.type === 'sticker') {
                    newPreview = '[sticker]';
                } else if (!newPreview) {
                    newPreview = messageData.type ? `[${messageData.type}]` : 'Attachment';
                }
                const isEncrypted = typeof newPreview === 'string' && newPreview.startsWith('{') && (newPreview.includes('__e2ee') || newPreview.includes('_e2ee'));
                if (isEncrypted) {
                    const cached = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCachedPreview"](Number(messageData.roomId), messageData.id);
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
                            const otherUserId = roomInList?.otherUserId || (isFromOtherUser ? messageData.senderId : null);
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$utils$2f$decryptPreview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decryptPreview"])(messageData.text, !isFromOtherUser, Number(messageData.roomId), otherUserId, messageData.id).then((decrypted)=>{
                                if (decrypted && decrypted !== '🔒 Encrypted message') {
                                    setMessages((prev2)=>prev2.map((m)=>{
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
                                        }));
                                }
                            });
                        }
                    }
                }
                if (messageData.type === 'call') {
                    const isVideo = messageData.data?.callType === 'video';
                    const isMissed = !messageData.data?.duration || messageData.data?.duration === 0;
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
                const newUnreadCount = isFromOtherUser && !isChatOpen ? (roomInList?.unreadCount || 0) + 1 : isChatOpen ? 0 : roomInList?.unreadCount || 0;
                const updated = prev.map((m)=>{
                    const isTargetRoom = String(m.id) === String(resolvedRoomId) || String(m.id) === String(messageData.roomId) || isFromOtherUser && m.otherUserId && String(m.otherUserId) === String(messageData.senderId);
                    if (!isTargetRoom) return m;
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$utils$2f$decryptPreview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRoomMessageNewer"])(m, messageData.id, messageData.createdAt) && !messageData.data?.isMesh) {
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
                        isForwarded: messageData.data?.isForwarded === true,
                        unread: isChatOpen ? false : isFromOtherUser ? true : m.unread,
                        unreadCount: newUnreadCount,
                        subject: m.type === 'direct' ? '' : messageData.senderName || 'Member'
                    };
                });
                // Bubble active room to the top
                const idx = updated.findIndex((m)=>String(m.id) === String(resolvedRoomId) || String(m.id) === String(messageData.roomId) || isFromOtherUser && m.otherUserId && String(m.otherUserId) === String(messageData.senderId));
                if (idx > 0) {
                    const [room] = updated.splice(idx, 1);
                    updated.unshift(room);
                }
                return updated;
            });
            if (!targetRoom) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].getRooms().then(async (res)=>{
                    if (res.success && Array.isArray(res.data)) {
                        const rooms = await Promise.all(res.data.map(async (room)=>{
                            if (typeof room.preview === 'string' && room.preview.startsWith('{') && room.preview.includes('__e2ee')) {
                                const decrypted = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$utils$2f$decryptPreview$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decryptPreview"])(room.preview, !!room.isMe, room.id, room.otherUserId);
                                return {
                                    ...room,
                                    preview: decrypted
                                };
                            }
                            return room;
                        }));
                        setMessages(rooms);
                    }
                }).catch(console.error);
            }
            const isDocumentVisible = typeof document !== 'undefined' && document.visibilityState === 'visible';
            if (isDocumentVisible) {
                updateActiveTabHeartbeat();
            }
            // Check if ANOTHER PingDart tab is actively focused
            const isAnotherTabActive = (()=>{
                if (isDocumentVisible) return false;
                try {
                    const raw = localStorage.getItem('pingdart_active_tab_heartbeat');
                    if (!raw) return false;
                    const parsed = JSON.parse(raw);
                    return parsed.tabId !== tabInstanceIdRef.current && Date.now() - Number(parsed.ts) < 3000;
                } catch (_) {
                    return false;
                }
            })();
            // Sound & notification alerts
            if (isFromOtherUser && !isRoomMuted) {
                if (isChatOpen) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioTones$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playConversationTone"])('incoming');
                } else {
                    // Play sound when this tab is visible OR in a background tab
                    const shouldPlaySound = isDocumentVisible || !isAnotherTabActive;
                    // Only show toast when user has a DIFFERENT chat actively open
                    const shouldShowToast = isDocumentVisible && Boolean(currentActiveRoomId) && String(currentActiveRoomId) !== String(messageData.roomId);
                    const settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNotificationSettings"])();
                    if (shouldPlaySound && settings.conversationTones !== false) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["playMessageChime"])();
                    }
                    if (shouldShowToast && settings.highPriorityMessages !== false) {
                        const currentList = messagesRef.current || [];
                        const room = currentList.find((r)=>String(r.id) === String(messageData.roomId)) || targetRoom;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showInAppToast"])(messageData, room);
                    }
                    // WhatsApp-like background tab updates: document title flashing badge & desktop notification
                    if (!isDocumentVisible && !isAnotherTabActive) {
                        const notifDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveNotificationDetails"])(messageData, targetRoom);
                        updateBackgroundTabTitle(notifDetails.senderName, notifDetails.body);
                        if (settings.highPriorityMessages !== false) {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNotifications$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showSystemNotification"])(messageData, (roomId)=>{
                                handleNavChangeRef.current('Chats');
                                handleMsgSelectRef.current(roomId);
                            });
                        }
                    }
                }
            }
        };
        socketInstance.on('chat:new_message', handleSocketNewMessage);
        /**
     * Socket Event: chat:reaction (global handler)
     * Persists reaction changes to localStorage cache for ANY room, even when the
     * user is currently viewing a different chat. This ensures reactions are visible
     * when the user switches back to that chat (User B issue).
     */ socketInstance.on('chat:reaction', (data)=>{
            if (!data || !data.roomId || !data.messageId) return;
            const roomId = data.roomId;
            const msgId = data.messageId || data.id;
            const activeRoomId = (()=>{
                try {
                    return sessionStorage.getItem('pingdart_active_chat_room');
                } catch  {
                    return null;
                }
            })();
            // Skip if this chat is active (ChatDetail handles it directly)
            if (activeRoomId && String(activeRoomId) === String(roomId)) return;
            // Update globalMessageCache and localStorage for the background room
            try {
                __turbopack_context__.A("[project]/src/modules/chat/hooks/useChatHandlers.ts [app-ssr] (ecmascript, async loader)").then(({ globalMessageCache })=>{
                    const cached = globalMessageCache.get(Number(roomId));
                    if (cached && Array.isArray(cached)) {
                        const updated = cached.map((m)=>{
                            if (String(m.id) === String(msgId) || m.clientMessageId && String(m.clientMessageId) === String(msgId)) {
                                const existing = m.data?.reactions || {};
                                const serverReactions = data.reactions && typeof data.reactions === 'object' ? data.reactions : (()=>{
                                    const r = {
                                        ...existing
                                    };
                                    const em = data.emoji || data.reaction;
                                    if (em) {
                                        if (data.removed) {
                                            if (Array.isArray(r[em])) {
                                                r[em] = r[em].filter((x)=>String(x?.userId || x) !== String(data.userId));
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
                                })();
                                return {
                                    ...m,
                                    data: {
                                        ...m.data || {},
                                        reactions: serverReactions
                                    }
                                };
                            }
                            return m;
                        });
                        globalMessageCache.set(Number(roomId), updated);
                        try {
                            localStorage.setItem(`ping_chat_msgs_${roomId}`, JSON.stringify(updated.slice(-50)));
                        } catch (_) {}
                    }
                });
            } catch (_) {}
        });
        socketInstance.on('chat:user_activity', (data)=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        });
        /**
     * Socket Event: user:online_status
     */ socketInstance.on('user:online_status', (data)=>{
            if (data && data.userId) {
                __turbopack_context__.A("[project]/src/modules/chat/services/userPresenceService.ts [app-ssr] (ecmascript, async loader)").then(({ userPresenceService })=>{
                    userPresenceService.setPresence({
                        userId: data.userId,
                        state: data.state,
                        isOnline: !!data.isOnline,
                        lastSeen: data.lastSeen,
                        deviceType: data.deviceType
                    });
                });
                const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
                const currentUserIdStr = String(currentUser?.id || '');
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
                setMessages((prev)=>prev.map((m)=>{
                        const isMatch = m.otherUserId && String(m.otherUserId) === String(data.userId) || m.senderId && String(m.senderId) === String(data.userId) || m.type === 'direct' && Array.isArray(m.members) && m.members.some((mb)=>String(mb.id) === String(data.userId));
                        if (!isMatch) return m;
                        const roomCanView = canView && !m.isBlocked;
                        const isOnline = roomCanView ? !!data.isOnline : false;
                        const lastSeen = roomCanView ? data.lastSeen ?? m.lastSeen ?? null : null;
                        return {
                            ...m,
                            isOnline,
                            lastSeen,
                            canViewLastSeen: roomCanView
                        };
                    }));
            }
        });
        socketInstance.on('user:block_changed', ()=>{
            fetchRooms();
        });
        socketInstance.on('user:profile_update', (data)=>{
            const currentUserId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id;
            if (data && String(data.userId) === String(currentUserId)) {
                __turbopack_context__.A("[project]/src/services/api.ts [app-ssr] (ecmascript, async loader)").then(({ api })=>{
                    api.get('/user/profile').then((res)=>{
                        if (res.data.success) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().updateUser(res.data.user);
                        }
                    }).catch(console.error);
                });
            }
            __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)").then(({ chatApi })=>{
                chatApi.getRooms().then(async (res)=>{
                    if (res.success && Array.isArray(res.data)) {
                        const openChatId = selectedMsgIdRef.current || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null);
                        const fetchedRooms = res.data;
                        setMessages((prev)=>{
                            const prevMap = new Map(prev.map((r)=>[
                                    String(r.id),
                                    r
                                ]));
                            const merged = fetchedRooms.map((room)=>{
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
                            });
                            const serverIds = new Set(fetchedRooms.map((r)=>String(r.id)));
                            const extraLocal = prev.filter((r)=>!serverIds.has(String(r.id)));
                            const finalRooms = [
                                ...extraLocal,
                                ...merged
                            ];
                            finalRooms.sort((a, b)=>{
                                const tA = a.lastMessageTimestamp ? new Date(a.lastMessageTimestamp).getTime() : 0;
                                const tB = b.lastMessageTimestamp ? new Date(b.lastMessageTimestamp).getTime() : 0;
                                return tB - tA;
                            });
                            return finalRooms;
                        });
                    }
                }).catch(console.error);
            });
        });
        /**
     * Socket Event: chat:messages_read
     */ const handleSocketMessagesRead = (data)=>{
            const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
            const currentUserId = currentUser?.id;
            const readerId = data.userId || data.readBy;
            setMessages((prev)=>prev.map((m)=>{
                    if (String(m.id) === String(data.roomId)) {
                        if (String(readerId) === String(currentUserId)) {
                            return {
                                ...m,
                                unread: false,
                                unreadCount: 0
                            };
                        }
                        if ((m.type === 'direct' || !m.type) && currentUser?.privacyReadReceipts === false) {
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
                }));
        };
        socketInstance.on('chat:messages_read', handleSocketMessagesRead);
        /**
     * Socket Event: chat:messages_delivered
     */ const handleSocketMessagesDelivered = (data)=>{
            const currentUserId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id;
            const deliveredTo = data.userId || data.deliveredTo;
            setMessages((prev)=>{
                const next = prev.map((m)=>{
                    if (String(m.id) === String(data.roomId) && (m.isMe || m.from === 'me') && m.status !== 'read' && String(deliveredTo) !== String(currentUserId)) {
                        return {
                            ...m,
                            status: 'delivered'
                        };
                    }
                    return m;
                });
                if (messagesRef) messagesRef.current = next;
                return next;
            });
        };
        socketInstance.on('chat:messages_delivered', handleSocketMessagesDelivered);
        // Cross-module window event listeners for offline mesh communication
        const handleWindowNewMessage = (e)=>{
            if (e.detail) handleSocketNewMessage(e.detail);
        };
        const handleWindowMessagesRead = (e)=>{
            if (e.detail) handleSocketMessagesRead(e.detail);
        };
        const handleWindowMessagesDelivered = (e)=>{
            if (e.detail) handleSocketMessagesDelivered(e.detail);
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        socketInstance.on('chat:message_deleted', ()=>{
            __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)").then(({ chatApi })=>{
                chatApi.getRooms().then((res)=>{
                    if (res.success && Array.isArray(res.data)) {
                        setMessages(res.data);
                    }
                });
            });
        });
        const handleMessageEdited = (data)=>{
            if (data && data.roomId) {
                setMessages((prev)=>prev.map((room)=>{
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
                    }));
            }
        };
        socketInstance.on('message:edited', handleMessageEdited);
        socketInstance.on('chat:message_edited', handleMessageEdited);
        socketInstance.on('chat:message_update', handleMessageEdited);
        socketInstance.on('chat:room_updated', (data)=>{
            if (data && data.roomId) {
                setMessages((prev)=>prev.map((room)=>{
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
                    }));
            }
        });
        socketInstance.on('chat:pinned_updated', (data)=>{
            if (data && data.roomId) {
                const pName = data.pinnedByName || data.message?.pinnedByName || "Someone";
                if (data.isPinned) {
                    const targetMsg = data.message || {
                        id: data.messageId,
                        text: "Pinned message"
                    };
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pinMessage"])(data.roomId, {
                        ...targetMsg,
                        pinnedByName: pName,
                        pinnedBy: data.pinnedBy
                    }, data.durationDays || 7, pName);
                } else if (!data.isPinned && data.messageId) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unpinMessage"])(data.roomId, data.messageId);
                }
            }
        });
        socketInstance.on('join_request:new', (data)=>{
            if (data && data.roomId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info(`${data.requesterName} requested to join group "${data.roomName}"`);
                setMessages((prev)=>prev.map((room)=>{
                        if (String(room.id) === String(data.roomId)) {
                            return {
                                ...room,
                                pendingRequestsCount: (room.pendingRequestsCount || 0) + 1
                            };
                        }
                        return room;
                    }));
            }
        });
        socketInstance.on('join_request:approved', (data)=>{
            if (data && data.roomId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(`Your request to join group "${data.roomName}" was approved!`);
                __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)").then(({ chatApi })=>{
                    chatApi.getRooms().then((res)=>{
                        if (res.success && res.data) {
                            setMessages(res.data);
                        }
                    });
                });
            }
        });
        socketInstance.on('join_request:rejected', (data)=>{
            if (data && data.roomId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(`Your request to join group "${data.roomName}" was rejected.`);
            }
        });
        /**
     * Socket Event: chat:typing
     */ socketInstance.on('chat:typing', (data)=>{
            const currentUserId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id;
            if (String(data.userId) === String(currentUserId)) return;
            setMessages((prev)=>prev.map((m)=>{
                    if (String(m.id) === String(data.roomId)) {
                        return {
                            ...m,
                            isTyping: data.isTyping,
                            typingUsername: data.username
                        };
                    }
                    return m;
                }));
            if (data.isTyping) {
                if (typingTimeoutsRef.current[data.roomId]) {
                    clearTimeout(typingTimeoutsRef.current[data.roomId]);
                }
                typingTimeoutsRef.current[data.roomId] = setTimeout(()=>{
                    setMessages((prev)=>prev.map((m)=>{
                            if (String(m.id) === String(data.roomId)) {
                                return {
                                    ...m,
                                    isTyping: false
                                };
                            }
                            return m;
                        }));
                    delete typingTimeoutsRef.current[data.roomId];
                }, 3000);
            } else {
                if (typingTimeoutsRef.current[data.roomId]) {
                    clearTimeout(typingTimeoutsRef.current[data.roomId]);
                    delete typingTimeoutsRef.current[data.roomId];
                }
            }
        });
        /**
     * Socket Event: mail:new
     */ socketInstance.on('mail:new', (data)=>{
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
                __turbopack_context__.A("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript, async loader)").then(({ toast })=>{
                    toast(`📬 New Email from ${fromName}`, {
                        description: subject,
                        duration: 6000,
                        action: {
                            label: 'View Mail',
                            onClick: ()=>handleNavChange('Mail')
                        }
                    });
                });
            }
        });
        const handleCustomStatusCreated = ()=>{
            fetchRooms();
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const updateActiveStatus = ()=>{
            const isActive = typeof document !== 'undefined' && document.visibilityState === 'visible';
            socketInstance.emit('user:active_status', {
                isActive
            });
        };
        updateActiveStatus();
        let lastReconnectTime = 0;
        const checkAndReconnectSocket = ()=>{
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
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        };
        let tabHiddenTimer = null;
        const handleVisibilityChange = ()=>{
            if (typeof document === 'undefined') return;
            if (document.visibilityState === 'hidden') {
                if (tabHiddenTimer) clearTimeout(tabHiddenTimer);
                tabHiddenTimer = setTimeout(()=>{
                    try {
                        socketInstance.emit('user:active_status', {
                            isActive: false
                        });
                    } catch (_) {}
                }, 2500);
            } else if (document.visibilityState === 'visible') {
                if (tabHiddenTimer) {
                    clearTimeout(tabHiddenTimer);
                    tabHiddenTimer = null;
                }
                updateActiveTabHeartbeat();
                restoreDocumentTitle();
                if (selectedMsgIdRef.current) {
                    try {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].markAsRead(Number(selectedMsgIdRef.current)).catch(()=>{});
                    } catch (_) {}
                }
                checkAndReconnectSocket();
            }
        };
        const handleWindowFocus = ()=>{
            if (tabHiddenTimer) {
                clearTimeout(tabHiddenTimer);
                tabHiddenTimer = null;
            }
            updateActiveTabHeartbeat();
            restoreDocumentTitle();
            if (selectedMsgIdRef.current) {
                try {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].markAsRead(Number(selectedMsgIdRef.current)).catch(()=>{});
                } catch (_) {}
            }
            checkAndReconnectSocket();
        };
        // Only executed when the tab/window is actually closed or navigated away (NOT when switching tabs)
        const handleBeforeUnload = ()=>{
            try {
                socketInstance.emit('user:active_status', {
                    isActive: false
                });
                socketInstance.emit('user:app_closed');
            } catch (_) {}
            try {
                const currentToken = getLatestToken();
                const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiBaseUrl"])().trim();
                if (currentToken && base) {
                    const offlineUrl = `${base}/api/users/offline?token=${encodeURIComponent(currentToken)}`;
                    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
                        navigator.sendBeacon(offlineUrl);
                    }
                }
            } catch (_) {}
        };
        // 20s Watchdog: Keep WebSocket actively connected even if browser throttles idle timers in background
        const keepaliveWatchdog = setInterval(()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }, 20000);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        let appStateListener = null;
        let appResumeListener = null;
        let unsubscribeNet = null;
        const handlePresenceSync = (e)=>{
            const detail = e.detail;
            if (!detail) return;
            const targetUserId = detail.userId ? String(detail.userId) : null;
            const targetRoomId = detail.roomId ? String(detail.roomId) : null;
            const isOnline = !!detail.isOnline;
            const lastSeen = detail.lastSeen ?? null;
            setMessages((prev)=>prev.map((m)=>{
                    const isMatch = targetRoomId && String(m.id) === targetRoomId || targetUserId && (m.otherUserId && String(m.otherUserId) === targetUserId || m.senderId && String(m.senderId) === targetUserId || m.type === 'direct' && Array.isArray(m.members) && m.members.some((mb)=>String(mb.id) === targetUserId));
                    if (!isMatch) return m;
                    return {
                        ...m,
                        isOnline,
                        lastSeen: lastSeen ?? m.lastSeen
                    };
                }));
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        setSocket(socketInstance);
        return ()=>{
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
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (typeof unsubscribeNet === 'function') {
                unsubscribeNet();
            }
            if (appResumeListener && typeof appResumeListener.remove === 'function') {
                appResumeListener.remove();
            }
            if (appStateListener && typeof appStateListener.remove === 'function') {
                appStateListener.remove();
            }
            __turbopack_context__.A("[project]/src/services/presenceLifecycleManager.ts [app-ssr] (ecmascript, async loader)").then(({ presenceLifecycleManager })=>{
                presenceLifecycleManager.destroy();
            }).catch(()=>{});
            socketInstance.disconnect();
        };
    }, [
        setSocket,
        accessToken
    ]);
    return {
        socket
    };
}
}),
"[project]/src/app/user/components/ModuleScreenRenderer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModuleScreenRenderer",
    ()=>ModuleScreenRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/utils/safeLazy.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
// ── Lazy-loaded secondary screens ────
const LiveScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/live/LiveScreen.tsx [app-ssr] (ecmascript, async loader)"), 'LiveScreen');
const MailScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/mail/MailScreen.tsx [app-ssr] (ecmascript, async loader)"), 'MailScreen');
const CloudStorageScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/CloudStorage/CloudStorageScreen.tsx [app-ssr] (ecmascript, async loader)"), 'CloudStorageScreen');
const SettingsScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/SettingsScreen.tsx [app-ssr] (ecmascript, async loader)"), 'SettingsScreen');
const UserProfileScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/UserProfileScreen.tsx [app-ssr] (ecmascript, async loader)"), 'UserProfileScreen');
const StatusScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/StatusScreen.tsx [app-ssr] (ecmascript, async loader)"), 'StatusScreen');
const ChannelsScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/ChannelsScreen.tsx [app-ssr] (ecmascript, async loader)"), 'ChannelsScreen');
const CommunitiesScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/CommunitiesScreen.tsx [app-ssr] (ecmascript, async loader)"), 'CommunitiesScreen');
const CallsScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/CallsScreen.tsx [app-ssr] (ecmascript, async loader)"), 'CallsScreen');
const StarredScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/StarredScreen.tsx [app-ssr] (ecmascript, async loader)"), 'StarredScreen');
const ArchivedScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/ArchivedScreen.tsx [app-ssr] (ecmascript, async loader)"), 'ArchivedScreen');
const LinkedDevicesScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/LinkedDevicesScreen.tsx [app-ssr] (ecmascript, async loader)"), 'LinkedDevicesScreen');
const HomeScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/HomeScreen.tsx [app-ssr] (ecmascript, async loader)"), 'HomeScreen');
const MoreScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/MoreScreen.tsx [app-ssr] (ecmascript, async loader)"), 'MoreScreen');
const NotificationsScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/NotificationsScreen.tsx [app-ssr] (ecmascript, async loader)"), 'NotificationsScreen');
const DemoScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/DemoScreen.tsx [app-ssr] (ecmascript, async loader)"), 'DemoScreen');
const AiBotScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/AiBotScreen.tsx [app-ssr] (ecmascript, async loader)"), 'AiBotScreen');
const ShopScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/ShopScreen.tsx [app-ssr] (ecmascript, async loader)"), 'ShopScreen');
const AiBlogGeneratorScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/modules/AiBlogGenerator/AiBlogGeneratorScreen.tsx [app-ssr] (ecmascript, async loader)"), 'AiBlogGeneratorScreen');
const ReelsScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/ReelsScreen.tsx [app-ssr] (ecmascript, async loader)"), 'ReelsScreen');
const TikTokImportScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/TikTokImportScreen.tsx [app-ssr] (ecmascript, async loader)"), 'TikTokImportScreen');
const JobsHubScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/jobs/JobsHubScreen.tsx [app-ssr] (ecmascript, async loader)"), 'JobsHubScreen');
const DynamicModuleRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/modules/DynamicModuleRenderer.tsx [app-ssr] (ecmascript, async loader)"), 'DynamicModuleRenderer');
const GamesScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/screens/GamesScreen.tsx [app-ssr] (ecmascript, async loader)"), 'GamesScreen');
const AiDiaryModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/components/diary/AiDiaryModal.tsx [app-ssr] (ecmascript, async loader)").then((m)=>({
            default: m.AiDiaryModal
        })), 'AiDiaryModal');
const ExploreModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/explore/ExploreModal.tsx [app-ssr] (ecmascript, async loader)").then((m)=>({
            default: m.ExploreModal
        })), 'ExploreModal');
const AiBudgetScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/modules/budget/AiBudgetScreen.tsx [app-ssr] (ecmascript, async loader)"), 'AiBudgetScreen');
const CrmScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/modules/crm/CrmScreen.tsx [app-ssr] (ecmascript, async loader)"), 'CrmScreen');
const HrmScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/modules/hrm/HrmScreen.tsx [app-ssr] (ecmascript, async loader)"), 'HrmScreen');
const PingDartCodeScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/modules/pingdart-code/PingDartCodeScreen.tsx [app-ssr] (ecmascript, async loader)"), 'PingDartCodeScreen');
const ResellerScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx [app-ssr] (ecmascript, async loader)"), 'ResellerScreen');
const PJStephenPaulScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/modules/pj-ministries/PJStephenPaulScreen.tsx [app-ssr] (ecmascript, async loader)"), 'PJStephenPaulScreen');
const WalletSettings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeLazy"])(()=>__turbopack_context__.A("[project]/src/app/user/components/settings/WalletSettings.tsx [app-ssr] (ecmascript, async loader)").then((m)=>({
            default: m.WalletSettings
        })), 'WalletSettings');
function ModuleScreenRenderer({ activeNav, selectedMsgId, channelsFiltered, communitiesFiltered, archivedFiltered, searchParams, user, onBack, onNavChange, onSelectMsg, onSetMessages, onDeleteChat }) {
    const renderScreen = ()=>{
        // Dynamic plugin module
        if (activeNav.startsWith("local_plugin")) {
            const moduleId = activeNav.split(":")[1] || "inyubxw162p1am34";
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-col h-full flex-1 min-w-0 flex",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicModuleRenderer, {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(JobsHubScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 84,
                    columnNumber: 16
                }, this);
            case "PingDartCode":
            case "pingdart_code":
            case "PingCode":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PingDartCodeScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 89,
                    columnNumber: 16
                }, this);
            case "AiBlog":
            case "AiBlogs":
            case "ai-blog":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AiBlogGeneratorScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 94,
                    columnNumber: 16
                }, this);
            case "AiBudget":
            case "budget":
            case "Ai-Budget":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AiBudgetScreen, {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CrmScreen, {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HrmScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 111,
                    columnNumber: 16
                }, this);
            case "AiDiary":
            case "diary":
            case "Ai-Diary":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AiDiaryModal, {
                    isOpen: true,
                    onClose: onBack,
                    isModal: false
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 116,
                    columnNumber: 16
                }, this);
            case "Cloud Storage":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CloudStorageScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 119,
                    columnNumber: 16
                }, this);
            case "Reseller":
            case "reseller":
            case "reseller_hub":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ResellerScreen, {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PJStephenPaulScreen, {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MailScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 138,
                    columnNumber: 16
                }, this);
            case "Home":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HomeScreen, {
                    onNavigateTab: (tab, reelId)=>onNavChange(tab, reelId)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 141,
                    columnNumber: 16
                }, this);
            case "TikTokImport":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TikTokImportScreen, {
                    onBack: onBack,
                    onOpenReels: ()=>onNavChange("Reels")
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 144,
                    columnNumber: 16
                }, this);
            case "Reels":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReelsScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 147,
                    columnNumber: 16
                }, this);
            case "AiBot":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AiBotScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 150,
                    columnNumber: 16
                }, this);
            case "Explore":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 w-full h-full relative z-10 bg-white dark:bg-[#0f172a]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ExploreModal, {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShopScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 166,
                    columnNumber: 16
                }, this);
            case "Status":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 169,
                    columnNumber: 16
                }, this);
            case "Live":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 w-full h-full relative z-10 bg-white dark:bg-[#111827]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LiveScreen, {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChannelsScreen, {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommunitiesScreen, {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GamesScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 205,
                    columnNumber: 16
                }, this);
            case "Calls":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CallsScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 208,
                    columnNumber: 16
                }, this);
            case "Starred":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StarredScreen, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 211,
                    columnNumber: 16
                }, this);
            case "Archived":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ArchivedScreen, {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkedDevicesScreen, {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WalletSettings, {
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 241,
                    columnNumber: 16
                }, this);
            case "Notifications":
            case "notifications":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationsScreen, {
                    onBack: onBack,
                    onNavigateTab: (tab)=>onNavChange(tab)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 246,
                    columnNumber: 11
                }, this);
            case "Profile":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-col h-full flex-1 min-w-0 flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UserProfileScreen, {
                        communities: communitiesFiltered,
                        onBack: onBack,
                        userId: searchParams.get("userId") || undefined,
                        communityId: searchParams.get("communityId") || undefined,
                        isOwnProfile: !searchParams.get("userId") || String(searchParams.get("userId")) === String(user?.id),
                        onOpenChat: (targetId)=>{
                            __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)").then(({ chatApi })=>{
                                chatApi.createRoom("", "direct", [
                                    Number(targetId)
                                ]).then((res)=>{
                                    if (res.success && res.data?.id) {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-col h-full flex-1 min-w-0 flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsScreen, {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-col h-full flex-1 min-w-0 flex",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MoreScreen, {
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
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DemoScreen, {
                    activeNav: activeNav,
                    onBack: onBack
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/ModuleScreenRenderer.tsx",
                    lineNumber: 294,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 w-full h-full flex flex-col min-w-0 overflow-hidden relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenFallback"], {}, void 0, false, {
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
}),
"[project]/src/app/user/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$call$2f$CallContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/user/components/call/CallContext.tsx [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/index.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/modules/chat/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$ChatList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/ChatList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatRooms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/hooks/useChatRooms.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modals$2f$CompleteProfileModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modals/CompleteProfileModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/utils/safeLazy.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNavigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/hooks/useNavigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useSocketEvents$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/hooks/useSocketEvents.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$ModuleScreenRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/ModuleScreenRenderer.tsx [app-ssr] (ecmascript)");
;
;
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
const GlobalCallUI = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/app/user/components/call/GlobalCallUI.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const ActiveChatPane = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/app/user/components/ActiveChatPane.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
/**
 * UserDashboardContent
 * Clean, modular layout shell managing navigation, chat list, active detail pane, and modals.
 */ function UserDashboardContent() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user, accessToken, isHydrated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlatform"])();
    // Navigation state and routing
    const { activeNav, setActiveNav, activeNavRef, selectedMsgId, selectedMsgIdRef, unlockedChatId, setUnlockedChatId, unlockError, setUnlockError, showCompleteProfile, setShowCompleteProfile, searchParams, handleNavChange, handleMsgSelect, handleGoBack, handleOpenCompleteProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useNavigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useNavigation"])();
    // Chat room state, caching, decryption, and CRUD
    const { setMessages, messagesRef, isLoadingChats, activeMessage, chatsFiltered, channelsFiltered, communitiesFiltered, archivedFiltered, fetchRooms, handleMessageSent, handleArchiveChat, handleMuteChat, handleFavoriteChat, handleClearChat, handleDeleteChat, handleCreateChat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatRooms$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatRooms"])({
        activeNav,
        selectedMsgId,
        onSelectMsg: handleMsgSelect,
        onNavigateToChats: ()=>handleNavChange("Chats")
    });
    // Socket.IO subscriptions, reconnection, and alerts
    const { socket } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$hooks$2f$useSocketEvents$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSocketEvents"])({
        activeNavRef,
        selectedMsgIdRef,
        messagesRef,
        setMessages,
        fetchRooms,
        handleNavChange,
        handleMsgSelect
    });
    // Fetch live user profile on initial mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (typeof document !== "undefined") {
            document.documentElement.removeAttribute("data-pending-onboarding");
        }
        if (!isHydrated) return;
        const token = accessToken || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "") || "";
        if (!token) {
            router.replace("/login");
            return;
        }
        if ("undefined" !== "undefined" && window.Capacitor?.isNativePlatform?.()) //TURBOPACK unreachable
        ;
        __turbopack_context__.A("[project]/src/services/api.ts [app-ssr] (ecmascript, async loader)").then(({ api })=>{
            api.get('/user/profile').then((res)=>{
                if (res.data?.success && res.data?.user) {
                    const liveUser = res.data.user;
                    const userForStorage = {
                        ...liveUser
                    };
                    delete userForStorage.avatar;
                    delete userForStorage.banner;
                    localStorage.setItem('user', JSON.stringify(userForStorage));
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().updateUser(liveUser);
                }
            }).catch((err)=>console.error('[UserDashboard] Live profile fetch error:', err));
        });
    }, [
        accessToken,
        isHydrated,
        router
    ]);
    // Preload secondary tab components in background during idle time
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            if ("undefined" !== "undefined" && "requestIdleCallback" in window) //TURBOPACK unreachable
            ;
            else {
                __turbopack_context__.A("[project]/src/app/user/components/screens/CallsScreen.tsx [app-ssr] (ecmascript, async loader)");
                __turbopack_context__.A("[project]/src/app/user/components/screens/ChannelsScreen.tsx [app-ssr] (ecmascript, async loader)");
                __turbopack_context__.A("[project]/src/app/user/components/screens/SettingsScreen.tsx [app-ssr] (ecmascript, async loader)");
                __turbopack_context__.A("[project]/src/app/user/components/mail/MailScreen.tsx [app-ssr] (ecmascript, async loader)");
            }
        }, 3000);
        return ()=>clearTimeout(timer);
    }, []);
    // Handlers for chat operations
    const handleLockChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id, code, isHidden)=>{
        const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-ssr] (ecmascript, async loader)");
        await chatApi.lockRoom(id, code, isHidden);
        setMessages((prev)=>prev.map((m)=>m.id === id ? {
                    ...m,
                    isLocked: !!code,
                    lockCode: code || undefined,
                    isHidden
                } : m));
        if (code) {
            if (isHidden) handleMsgSelect(null);
        } else {
            setUnlockedChatId(id);
        }
    }, [
        handleMsgSelect,
        setMessages,
        setUnlockedChatId
    ]);
    const onMessageSentHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((preview, time, status, msgId)=>{
        const targetId = activeMessage?.id || selectedMsgId;
        if (targetId) {
            handleMessageSent(targetId, preview, time, status, msgId);
        }
    }, [
        activeMessage?.id,
        selectedMsgId,
        handleMessageSent
    ]);
    const onMuteChangeHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((chatId, isMuted)=>{
        setMessages((prev)=>prev.map((m)=>String(m.id) === String(chatId) ? {
                    ...m,
                    isMuted
                } : m));
    }, [
        setMessages
    ]);
    const onRoomUpdatedHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((roomId, updates)=>{
        setMessages((prev)=>{
            const updated = prev.map((m)=>{
                if (String(m.id) === String(roomId)) {
                    return {
                        ...m,
                        ...updates,
                        lastMessageTimestamp: updates.lastMessageTimestamp !== undefined ? updates.lastMessageTimestamp ? new Date(updates.lastMessageTimestamp) : m.lastMessageTimestamp : m.lastMessageTimestamp
                    };
                }
                return m;
            });
            // Only move room to the top if bumpToTop is explicitly requested (e.g. newly sent or live received message)
            if (updates.bumpToTop === true) {
                const idx = updated.findIndex((m)=>String(m.id) === String(roomId));
                if (idx > 0) {
                    const [room] = updated.splice(idx, 1);
                    updated.unshift(room);
                }
            }
            return updated;
        });
    }, [
        setMessages
    ]);
    const handleUnlockPin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((code)=>{
        if (activeMessage && code === activeMessage.lockCode) {
            setUnlockedChatId(activeMessage.id);
            setUnlockError("");
        } else {
            setUnlockError("Incorrect PIN");
        }
    }, [
        activeMessage,
        setUnlockedChatId,
        setUnlockError
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex-1 h-full min-w-0 flex overflow-hidden relative",
        children: [
            activeNav === "Chats" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex h-full shrink-0 relative z-20 w-full ${isNative ? "" : "md:w-[380px] lg:w-[400px]"} ${selectedMsgId ? "hidden md:flex" : "flex"}`,
                style: {
                    boxShadow: isNative ? "none" : "1px 0 3px rgba(0,0,0,0.08)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$ChatList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatList"], {
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
            activeNav === "Chats" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveChatPane, {
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
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$ModuleScreenRenderer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ModuleScreenRenderer"], {
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
            showCompleteProfile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modals$2f$CompleteProfileModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompleteProfileModal"], {
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
function UserDashboard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$utils$2f$safeLazy$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScreenFallback"], {}, void 0, false, {
            fileName: "[project]/src/app/user/page.tsx",
            lineNumber: 302,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CallProvider"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UserDashboardContent, {}, void 0, false, {
                    fileName: "[project]/src/app/user/page.tsx",
                    lineNumber: 304,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobalCallUI, {}, void 0, false, {
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
}),
];

//# sourceMappingURL=src_app_user_b0f086cc._.js.map