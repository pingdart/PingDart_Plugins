(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/services/statusApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "statusApi",
    ()=>statusApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
const statusApi = {
    // Get all active statuses grouped by user
    getStatuses: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/status");
        return response.data;
    },
    // Add a text status
    addTextStatus: async (text, backgroundColor, fontFamily = 'sans-serif', privacyOption, selectedUsers)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/status", {
            type: 'text',
            text,
            backgroundColor,
            fontFamily,
            privacyOption,
            selectedUsers
        });
        return response.data;
    },
    // Add an image/video status
    addMediaStatus: async (file, caption, privacyOption, selectedUsers)=>{
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', file.type.startsWith('video/') ? 'video' : 'image');
        if (caption) {
            formData.append('caption', caption);
        }
        if (privacyOption) {
            formData.append('privacyOption', privacyOption);
        }
        if (selectedUsers && selectedUsers.length > 0) {
            formData.append('selectedUsers', JSON.stringify(selectedUsers));
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/status", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    // Mark a status as viewed
    markViewed: async (statusId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/status/${statusId}/view`);
        return response.data;
    },
    // Delete a status
    deleteStatus: async (statusId)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/status/${statusId}`);
        return response.data;
    },
    // Reply to a status
    replyToStatus: async (statusId, message, reaction, statusMeta)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/status/${statusId}/reply`, {
            message,
            reaction,
            ...statusMeta
        });
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/status/HorizontalStatusList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HorizontalStatusList",
    ()=>HorizontalStatusList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlusSignIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PlusSignIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$statusApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/statusApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/storageAdapter.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
function HorizontalStatusList() {
    var _this, _this1, _this2, _user_email, _this3, _this4, _user_email1;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [rawStatuses, setRawStatuses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HorizontalStatusList.useState": ()=>{
            if ("object" !== 'undefined' && (user === null || user === void 0 ? void 0 : user.id)) {
                try {
                    const raw = localStorage.getItem(`pingdart_statuses_fast_${user.id}`);
                    if (raw) return JSON.parse(raw);
                } catch (_) {}
            }
            return [];
        }
    }["HorizontalStatusList.useState"]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "HorizontalStatusList.useState": ()=>rawStatuses.length === 0
    }["HorizontalStatusList.useState"]);
    const isFetchingRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HorizontalStatusList.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageAdapter"].getStatuses().then({
                "HorizontalStatusList.useEffect": (cached)=>{
                    if (cached && Array.isArray(cached) && cached.length > 0) {
                        setRawStatuses(cached);
                        setLoading(false);
                    } else {
                        setLoading(false);
                    }
                }
            }["HorizontalStatusList.useEffect"]).catch({
                "HorizontalStatusList.useEffect": ()=>{
                    setLoading(false);
                }
            }["HorizontalStatusList.useEffect"]);
        }
    }["HorizontalStatusList.useEffect"], []);
    const recentGroups = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "HorizontalStatusList.useMemo[recentGroups]": ()=>{
            if (!user || !rawStatuses || rawStatuses.length === 0) return [];
            const groups = {};
            rawStatuses.forEach({
                "HorizontalStatusList.useMemo[recentGroups]": (status)=>{
                    if (!groups[status.userId]) {
                        groups[status.userId] = {
                            userId: status.userId,
                            user: status.User,
                            statuses: []
                        };
                    }
                    groups[status.userId].statuses.push(status);
                }
            }["HorizontalStatusList.useMemo[recentGroups]"]);
            if (groups[user.id]) {
                delete groups[user.id];
            }
            const recent = [];
            Object.values(groups).forEach({
                "HorizontalStatusList.useMemo[recentGroups]": (group)=>{
                    const allViewed = group.statuses.every({
                        "HorizontalStatusList.useMemo[recentGroups].allViewed": (s)=>s.views && s.views.some({
                                "HorizontalStatusList.useMemo[recentGroups].allViewed": (v)=>v.viewerId === user.id
                            }["HorizontalStatusList.useMemo[recentGroups].allViewed"])
                    }["HorizontalStatusList.useMemo[recentGroups].allViewed"]);
                    group.hasUnviewed = !allViewed;
                    recent.push(group);
                }
            }["HorizontalStatusList.useMemo[recentGroups]"]);
            recent.sort({
                "HorizontalStatusList.useMemo[recentGroups]": (a, b)=>{
                    if (a.hasUnviewed && !b.hasUnviewed) return -1;
                    if (!a.hasUnviewed && b.hasUnviewed) return 1;
                    const aLatest = a.statuses[a.statuses.length - 1];
                    const bLatest = b.statuses[b.statuses.length - 1];
                    return new Date(bLatest.createdAt).getTime() - new Date(aLatest.createdAt).getTime();
                }
            }["HorizontalStatusList.useMemo[recentGroups]"]);
            return recent;
        }
    }["HorizontalStatusList.useMemo[recentGroups]"], [
        rawStatuses,
        user
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HorizontalStatusList.useEffect": ()=>{
            const fetchStatuses = {
                "HorizontalStatusList.useEffect.fetchStatuses": async ()=>{
                    if (!user || isFetchingRef.current) return;
                    isFetchingRef.current = true;
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$statusApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["statusApi"].getStatuses();
                        if (res.success && Array.isArray(res.data)) {
                            setRawStatuses(res.data);
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageAdapter"].saveStatuses(res.data).catch({
                                "HorizontalStatusList.useEffect.fetchStatuses": ()=>{}
                            }["HorizontalStatusList.useEffect.fetchStatuses"]);
                            if ("object" !== 'undefined' && (user === null || user === void 0 ? void 0 : user.id)) {
                                try {
                                    localStorage.setItem(`pingdart_statuses_fast_${user.id}`, JSON.stringify(res.data));
                                } catch (_) {}
                            }
                        }
                    } catch (err) {
                        console.error("Failed to fetch statuses:", err);
                    } finally{
                        setLoading(false);
                        isFetchingRef.current = false;
                    }
                }
            }["HorizontalStatusList.useEffect.fetchStatuses"];
            fetchStatuses();
            window.addEventListener('status_refresh', fetchStatuses);
            return ({
                "HorizontalStatusList.useEffect": ()=>{
                    window.removeEventListener('status_refresh', fetchStatuses);
                }
            })["HorizontalStatusList.useEffect"];
        }
    }["HorizontalStatusList.useEffect"], [
        user
    ]);
    const getAvatarColor = (name)=>{
        const AVATAR_COLORS = [
            "#4338ca",
            "#2563eb",
            "#059669",
            "#d97706",
            "#dc2626"
        ];
        return AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length] || "#4338ca";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex md:hidden gap-4 px-4 py-3 bg-white dark:bg-[#111827] border-b border-[#e9edef] dark:border-[#2d3139] overflow-x-auto shrink-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center gap-1 cursor-pointer min-w-[60px]",
                onClick: ()=>router.push("/user?tab=Status"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                className: "w-[52px] h-[52px] border-2 border-transparent",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                        src: ((_this = user) === null || _this === void 0 ? void 0 : _this.avatar) || "",
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                        className: "text-white text-lg font-medium",
                                        style: {
                                            backgroundColor: getAvatarColor(((_this1 = user) === null || _this1 === void 0 ? void 0 : _this1.fullName) || ((_this2 = user) === null || _this2 === void 0 ? void 0 : _this2.full_name) || (user === null || user === void 0 ? void 0 : (_user_email = user.email) === null || _user_email === void 0 ? void 0 : _user_email.split('@')[0]) || 'User')
                                        },
                                        children: (((_this3 = user) === null || _this3 === void 0 ? void 0 : _this3.fullName) || ((_this4 = user) === null || _this4 === void 0 ? void 0 : _this4.full_name) || (user === null || user === void 0 ? void 0 : (_user_email1 = user.email) === null || _user_email1 === void 0 ? void 0 : _user_email1.split('@')[0]) || 'U').charAt(0).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 right-0 w-[18px] h-[18px] bg-[#4338ca] rounded-full border-2 border-white dark:border-[#111827] flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlusSignIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlusSignIcon"], {
                                    size: 12,
                                    className: "text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[14px] text-[#54656f] dark:text-[#a0abb2] font-medium mt-1 truncate w-full text-center",
                        children: "My status"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            !loading && recentGroups.slice(0, 8).map((group)=>{
                var _group_user, _group_user1, _group_user_email, _group_user2;
                const firstStatus = group.statuses[0];
                const avatarUrl = ((_group_user = group.user) === null || _group_user === void 0 ? void 0 : _group_user.avatar) || (firstStatus.type === 'image' ? firstStatus.mediaUrl : null);
                const userName = ((_group_user1 = group.user) === null || _group_user1 === void 0 ? void 0 : _group_user1.fullName) || ((_group_user2 = group.user) === null || _group_user2 === void 0 ? void 0 : (_group_user_email = _group_user2.email) === null || _group_user_email === void 0 ? void 0 : _group_user_email.split('@')[0]) || 'User';
                const displayLetter = userName.charAt(0).toUpperCase();
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-1 cursor-pointer min-w-[60px] max-w-[64px]",
                    onClick: ()=>router.push(`/user?tab=Status&userId=${group.userId}`),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `rounded-full p-[2px] transition-all`,
                            style: {
                                background: group.hasUnviewed ? '#4338ca' : '#e9edef'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                className: "w-[48px] h-[48px] border-2 border-white dark:border-[#111827]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                        src: avatarUrl,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                                        lineNumber: 154,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                        className: "text-white text-base font-medium",
                                        style: {
                                            backgroundColor: getAvatarColor(userName)
                                        },
                                        children: displayLetter
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                                lineNumber: 153,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[14px] text-[#54656f] dark:text-[#a0abb2] font-medium mt-1 truncate w-full text-center px-1",
                            children: userName.split(' ')[0]
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                            lineNumber: 163,
                            columnNumber: 13
                        }, this)
                    ]
                }, group.userId, true, {
                    fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                    lineNumber: 147,
                    columnNumber: 11
                }, this);
            }),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4",
                children: [
                    1,
                    2,
                    3
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-1 min-w-[60px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[52px] h-[52px] rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-3 mt-1 bg-gray-200 dark:bg-gray-800 rounded animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                                lineNumber: 175,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                        lineNumber: 173,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                lineNumber: 171,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center gap-1 cursor-pointer min-w-[60px]",
                onClick: ()=>router.push("/user?tab=Status"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[52px] h-[52px] rounded-full bg-[#f0f2f5] dark:bg-[#1a1c20] flex items-center justify-center text-[#54656f] dark:text-[#a0abb2] hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[14px] text-[#54656f] dark:text-[#a0abb2] font-medium mt-1 truncate w-full text-center",
                        children: "View more"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/status/HorizontalStatusList.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s(HorizontalStatusList, "EF6k5zl1GsWAAmyqKbwup1lG6K4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = HorizontalStatusList;
var _c;
__turbopack_context__.k.register(_c, "HorizontalStatusList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/status/HorizontalStatusList.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/user/components/status/HorizontalStatusList.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_39a3f408._.js.map