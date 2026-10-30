(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatListContacts",
    ()=>ChatListContacts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/RefreshIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Share01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Compass01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Compass01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Comment01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatList$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/ChatList/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$contactSyncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/contactSyncService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
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
const ExploreModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/src/app/user/components/explore/ExploreModal.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.ExploreModal), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/user/components/explore/ExploreModal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = ExploreModal;
function ChatListContacts({ className = "", setShowContacts, contactsQuery, setContactsQuery, contacts, chats, onSelect, onCreateChat }) {
    _s();
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const [isSyncing, setIsSyncing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showExploreModal, setShowExploreModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [phoneContacts, setPhoneContacts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Matched PingDart users returned by the last sync (shown even before contacts prop refreshes)
    const [syncedContacts, setSyncedContacts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [globalUsers, setGlobalUsers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const loadPhoneContacts = async ()=>{
        const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$contactSyncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDevicePhoneContacts"])();
        setPhoneContacts(list);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatListContacts.useEffect": ()=>{
            loadPhoneContacts();
            // Auto sync once on mount
            handleSyncContacts();
        }
    }["ChatListContacts.useEffect"], []);
    // Live search PingDart users globally if query is typed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatListContacts.useEffect": ()=>{
            const q = contactsQuery.trim();
            if (!q || q.length < 2) {
                setGlobalUsers([]);
                return;
            }
            const timer = setTimeout({
                "ChatListContacts.useEffect.timer": async ()=>{
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].searchUsers(q);
                        if (res && res.success && Array.isArray(res.users)) {
                            const mapped = res.users.map({
                                "ChatListContacts.useEffect.timer.mapped": (u)=>{
                                    var _u_email;
                                    return {
                                        id: Number(u.id),
                                        name: u.name || ((_u_email = u.email) === null || _u_email === void 0 ? void 0 : _u_email.split("@")[0]) || `User #${u.id}`,
                                        email: u.email || "",
                                        phone: u.phone || "",
                                        pingdartId: u.pingdartId || u.pingId || undefined,
                                        avatar: u.avatar || null
                                    };
                                }
                            }["ChatListContacts.useEffect.timer.mapped"]);
                            setGlobalUsers(mapped);
                        }
                    } catch (err) {
                        console.warn("Global search error:", err);
                    }
                }
            }["ChatListContacts.useEffect.timer"], 300);
            return ({
                "ChatListContacts.useEffect": ()=>clearTimeout(timer)
            })["ChatListContacts.useEffect"];
        }
    }["ChatListContacts.useEffect"], [
        contactsQuery
    ]);
    const handleSyncContacts = async ()=>{
        if (isSyncing) return;
        setIsSyncing(true);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$contactSyncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["syncDeviceContacts"])();
            if (res.success) {
                if (res.matchedUsers && Array.isArray(res.matchedUsers)) {
                    setSyncedContacts(res.matchedUsers);
                }
                if (res.syncedCount > 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Synced ${res.syncedCount} contacts`);
                }
            }
            await loadPhoneContacts();
        } catch (e) {
            console.warn("Contact sync warning");
        } finally{
            setIsSyncing(false);
        }
    };
    // Flexible digit-aware matcher (handles spaces, dashes, country codes, and PingDart ID)
    const matchesQuery = (name, email, phone, query, pingdartId)=>{
        if (!query || !query.trim()) return true;
        const q = query.toLowerCase().trim();
        const qDigits = q.replace(/\D/g, "");
        if (name && name.toLowerCase().includes(q)) return true;
        if (email && email.toLowerCase().includes(q)) return true;
        if (pingdartId) {
            if (pingdartId.toLowerCase().includes(q)) return true;
            const pingDigits = pingdartId.replace(/\D/g, "");
            if (qDigits.length > 0 && pingDigits.includes(qDigits)) return true;
        }
        if (phone) {
            if (phone.toLowerCase().includes(q)) return true;
            const phoneDigits = phone.replace(/\D/g, "");
            if (qDigits.length > 0 && phoneDigits.includes(qDigits)) return true;
        }
        return false;
    };
    // IDs already in contacts prop (avoid duplicates when merging)
    const syncedById = new Map(syncedContacts.map((u)=>[
            u.id,
            u
        ]));
    // Enrich contacts prop with phone/pingdartId/avatar from sync response when contact record lacks them
    const enrichedContacts = contacts.map((c)=>{
        const synced = syncedById.get(c.id);
        return {
            ...c,
            phone: c.phone || (synced === null || synced === void 0 ? void 0 : synced.phone) || null,
            pingdartId: c.pingdartId || (synced === null || synced === void 0 ? void 0 : synced.pingdartId) || undefined,
            avatar: c.avatar || (synced === null || synced === void 0 ? void 0 : synced.avatar) || null
        };
    });
    const contactsIds = new Set(enrichedContacts.map((c)=>c.id));
    // Filter registered contacts using enriched data
    const filteredRegistered = enrichedContacts.filter((c)=>{
        var _c_phone;
        return matchesQuery(c.name, c.email, (_c_phone = c.phone) !== null && _c_phone !== void 0 ? _c_phone : undefined, contactsQuery, c.pingdartId);
    });
    // Also include synced matched users NOT yet in contacts prop at all
    const filteredSynced = syncedContacts.filter((u)=>!contactsIds.has(u.id)).filter((u)=>matchesQuery(u.fullName || u.email, u.email, u.phone, contactsQuery, u.pingdartId)).map((u)=>{
        var _u_avatar;
        return {
            id: u.id,
            name: u.fullName || u.email.split("@")[0],
            email: u.email,
            phone: u.phone,
            pingdartId: u.pingdartId,
            avatar: (_u_avatar = u.avatar) !== null && _u_avatar !== void 0 ? _u_avatar : null,
            color: undefined
        };
    });
    // Include global search results for users not already in local/synced contacts
    const filteredGlobal = globalUsers.filter((u)=>!contactsIds.has(u.id) && !syncedContacts.some((sc)=>sc.id === u.id)).map((u)=>{
        var _u_avatar;
        return {
            id: u.id,
            name: u.name,
            email: u.email,
            phone: u.phone,
            pingdartId: u.pingdartId,
            avatar: (_u_avatar = u.avatar) !== null && _u_avatar !== void 0 ? _u_avatar : null,
            color: undefined
        };
    });
    // Merge lists – registered contacts first, synced extras, then global search results
    const allRegistered = [
        ...filteredRegistered,
        ...filteredSynced,
        ...filteredGlobal
    ];
    // Build registered phone/email sets from BOTH sources for invite-list exclusion
    const registeredEmails = new Set([
        ...contacts.map((c)=>{
            var _c_email;
            return (_c_email = c.email) === null || _c_email === void 0 ? void 0 : _c_email.toLowerCase();
        }).filter(Boolean),
        ...syncedContacts.map((u)=>u.email.toLowerCase()),
        ...globalUsers.map((u)=>u.email.toLowerCase())
    ]);
    const registeredPhones = new Set([
        ...contacts.map((c)=>c.phone ? c.phone.replace(/\D/g, "").slice(-10) : "").filter(Boolean),
        ...syncedContacts.map((u)=>u.phone ? u.phone.replace(/\D/g, "").slice(-10) : "").filter(Boolean),
        ...globalUsers.map((u)=>u.phone ? u.phone.replace(/\D/g, "").slice(-10) : "").filter(Boolean)
    ]);
    const inviteList = phoneContacts.filter((pc)=>{
        var _pc_email;
        const pcDigits = pc.phone ? pc.phone.replace(/\D/g, "").slice(-10) : "";
        const cleanEmail = (_pc_email = pc.email) === null || _pc_email === void 0 ? void 0 : _pc_email.toLowerCase();
        const isAlreadyRegistered = cleanEmail && registeredEmails.has(cleanEmail) || pcDigits && registeredPhones.has(pcDigits);
        if (isAlreadyRegistered) return false;
        return matchesQuery(pc.name, pc.email, pc.phone, contactsQuery);
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col flex-1 min-w-0 bg-white dark:bg-[#0f172a] ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 text-white shrink-0 shadow-md ${isNative ? "pt-[calc(0.5rem+env(safe-area-inset-top,0px))]" : "pt-[calc(0.75rem+env(safe-area-inset-top,12px))]"} pb-3.5 px-4 flex items-center justify-between select-none z-10`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowContacts(false),
                                className: "p-1 hover:bg-white/10 rounded-full transition-colors active:scale-95 text-white",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft02Icon"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                lineNumber: 239,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[19px] font-bold leading-tight tracking-tight font-sans",
                                        children: "Select contact"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11.5px] text-white/80 font-medium font-sans",
                                        children: [
                                            allRegistered.length,
                                            " contacts on PingDart"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleSyncContacts,
                        disabled: isSyncing,
                        className: "flex items-center gap-1.5 px-3 py-1 bg-white/20 hover:bg-white/30 text-white text-[13px] font-semibold rounded-full backdrop-blur-md transition-all active:scale-95 shadow-xs font-sans",
                        title: "Sync contacts from phone",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                size: 14,
                                className: isSyncing ? "animate-spin" : ""
                            }, void 0, false, {
                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: isSyncing ? "Syncing..." : "Sync Phone"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 bg-white dark:bg-[#0f172a] border-b border-slate-100 dark:border-slate-800/80 shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2.5 bg-slate-100 dark:bg-slate-800/90 rounded-2xl px-3.5 py-2.5 transition-all border border-slate-200/60 dark:border-slate-700/60 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                            size: 18,
                            className: "text-slate-400 dark:text-slate-500 shrink-0"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: contactsQuery,
                            onChange: (e)=>setContactsQuery(e.target.value),
                            placeholder: "Search name, phone, email or PingDart ID...",
                            className: "flex-1 bg-transparent border-none outline-none text-[13.5px] font-medium font-sans text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                            lineNumber: 268,
                            columnNumber: 11
                        }, this),
                        contactsQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setContactsQuery(""),
                            className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                lineNumber: 279,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                            lineNumber: 275,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                    lineNumber: 266,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto bg-white dark:bg-[#0f172a] pb-[max(100px,calc(6.5rem+env(safe-area-inset-bottom)))] md:pb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setShowExploreModal(true),
                        className: "mx-3 my-2.5 p-3 rounded-2xl bg-gradient-to-r from-indigo-50/90 via-blue-50/80 to-purple-50/80 dark:from-indigo-950/40 dark:via-blue-950/40 dark:to-purple-950/40 border border-indigo-100 dark:border-indigo-900/50 flex items-center gap-3.5 cursor-pointer hover:bg-indigo-100/60 dark:hover:bg-indigo-900/40 transition-all group active:scale-[0.99] shadow-2xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 to-blue-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Compass01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Compass01Icon"], {
                                    size: 22,
                                    className: "group-hover:rotate-45 transition-transform duration-300"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                    lineNumber: 294,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[14.5px] font-bold text-slate-900 dark:text-white font-sans",
                                                children: "Explore Nearby Users"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                lineNumber: 298,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-1.5 py-0.2 text-[9.5px] font-extrabold bg-indigo-600 text-white rounded-full",
                                                children: "MAP"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                lineNumber: 301,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                        lineNumber: 297,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[12px] text-slate-500 dark:text-slate-400 truncate font-sans",
                                        children: "Discover Ping users around you on a privacy-first radar map"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                size: 18,
                                className: "text-indigo-500 group-hover:translate-x-0.5 transition-transform shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                lineNumber: 309,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                        lineNumber: 289,
                        columnNumber: 9
                    }, this),
                    allRegistered.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 pt-3 pb-1.5 flex items-center justify-between text-[11.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-sans",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Contacts on PingDart"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold text-[10.5px]",
                                        children: allRegistered.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                        lineNumber: 320,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-slate-100/70 dark:divide-slate-800/40",
                                children: allRegistered.map((contact)=>{
                                    var _contact_name;
                                    // Ensure a valid, non-blank display name
                                    const displayName = ((_contact_name = contact.name) === null || _contact_name === void 0 ? void 0 : _contact_name.trim()) || (contact.phone ? contact.phone : null) || (contact.email ? contact.email.split("@")[0] : null) || (contact.pingdartId ? `ID: ${contact.pingdartId}` : "Ping User");
                                    const initials = displayName.replace(/[^a-zA-Z0-9]/g, "").substring(0, 2).toUpperCase() || "PU";
                                    // Unique vibrant gradient based on name/phone
                                    const avatarGradient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatList$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvatarColor"])(displayName);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: async ()=>{
                                            const existingChat = chats.find((c)=>c.type === "direct" && c.otherUserId === contact.id);
                                            if (existingChat) {
                                                onSelect(existingChat.id);
                                                setShowContacts(false);
                                            } else if (onCreateChat) {
                                                await onCreateChat("direct", "", [
                                                    contact.id
                                                ]);
                                                setShowContacts(false);
                                            } else {
                                                setShowContacts(false);
                                            }
                                        },
                                        className: "w-full flex items-center justify-between text-left hover:bg-slate-50/80 dark:hover:bg-slate-800/50 active:bg-slate-100 dark:active:bg-slate-800 transition-colors px-4 py-3 group cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3.5 min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                            className: "h-12 w-12 rounded-full border border-slate-200/60 dark:border-slate-700/60 shadow-xs",
                                                            children: [
                                                                contact.avatar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                                    src: contact.avatar,
                                                                    alt: displayName,
                                                                    className: "object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                                    lineNumber: 366,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                    style: {
                                                                        background: avatarGradient
                                                                    },
                                                                    className: "text-white font-bold text-[15px] font-sans",
                                                                    children: initials
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                                    lineNumber: 372,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                            lineNumber: 364,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col flex-1 min-w-0 pr-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 flex-wrap",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[15px] font-semibold text-slate-900 dark:text-white truncate font-sans group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors",
                                                                        children: displayName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                                        lineNumber: 384,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    contact.pingdartId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] font-mono px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-200/50 dark:border-indigo-800/50 shrink-0 font-semibold tracking-tight",
                                                                        children: [
                                                                            "ID: ",
                                                                            contact.pingdartId
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                                        lineNumber: 388,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 25
                                                            }, this),
                                                            (contact.phone || contact.email) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[12.5px] text-slate-500 dark:text-slate-400 truncate font-normal font-sans mt-0.5 flex items-center gap-1.5",
                                                                children: [
                                                                    contact.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: contact.phone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                                        lineNumber: 397,
                                                                        columnNumber: 47
                                                                    }, this),
                                                                    contact.phone && contact.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "•"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                                        lineNumber: 398,
                                                                        columnNumber: 64
                                                                    }, this),
                                                                    contact.email && !contact.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: contact.email
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                                        lineNumber: 399,
                                                                        columnNumber: 65
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                                lineNumber: 396,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                lineNumber: 361,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "shrink-0 pl-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3.5 py-1.5 bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white dark:bg-indigo-950/60 dark:hover:bg-indigo-600 dark:text-indigo-300 dark:hover:text-white rounded-full text-[12px] font-semibold font-sans border border-indigo-200/60 dark:border-indigo-800/60 hover:border-transparent transition-all shadow-2xs group-hover:shadow-xs active:scale-95 flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Comment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Comment01Icon"], {
                                                            size: 13
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                            lineNumber: 408,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Chat"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                lineNumber: 406,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, contact.id, true, {
                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                        lineNumber: 343,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                lineNumber: 325,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                        lineNumber: 317,
                        columnNumber: 11
                    }, this),
                    inviteList.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 pt-3 pb-1.5 flex items-center justify-between text-[11.5px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 font-sans border-t border-slate-100 dark:border-slate-800/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Invite to PingDart"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                        lineNumber: 423,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold text-[10.5px]",
                                        children: inviteList.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                        lineNumber: 424,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                lineNumber: 422,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "divide-y divide-slate-100/70 dark:divide-slate-800/40",
                                children: inviteList.map((pc, idx)=>{
                                    const initials = pc.name.replace(/[^a-zA-Z0-9]/g, "").substring(0, 2).toUpperCase() || "CO";
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full flex items-center justify-between text-left hover:bg-slate-50/80 dark:hover:bg-slate-800/50 transition-colors px-4 py-3 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3.5 min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                        className: "h-12 w-12 border border-slate-200/60 dark:border-slate-700/60 shadow-xs shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                            className: "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-[14px] font-sans",
                                                            children: initials
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                            lineNumber: 443,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                        lineNumber: 442,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col flex-1 min-w-0 pr-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[15px] font-semibold text-slate-900 dark:text-white truncate font-sans",
                                                                children: pc.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                                lineNumber: 448,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[12.5px] text-slate-500 dark:text-slate-400 truncate font-normal font-sans mt-0.5",
                                                                children: pc.phone || pc.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                lineNumber: 441,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: (e)=>{
                                                    e.stopPropagation();
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$contactSyncService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inviteContactToPingDart"])(pc);
                                                },
                                                className: "text-[12px] font-semibold px-3 py-1.5 bg-emerald-50 hover:bg-emerald-600 text-emerald-600 hover:text-white dark:bg-emerald-950/50 dark:hover:bg-emerald-600 dark:text-emerald-400 dark:hover:text-white border border-emerald-200/60 dark:border-emerald-800/60 rounded-full transition-all shrink-0 flex items-center gap-1.5 active:scale-95 shadow-2xs font-sans",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Share01Icon"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                        lineNumber: 464,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Invite"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                        lineNumber: 465,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                                lineNumber: 457,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                        lineNumber: 437,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                        lineNumber: 421,
                        columnNumber: 11
                    }, this),
                    allRegistered.length === 0 && inviteList.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center px-6 py-16 text-center my-4 space-y-3 animate-fadeIn",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-xs",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserIcon"], {
                                    size: 28
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                    lineNumber: 478,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                lineNumber: 477,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1 max-w-[240px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-semibold text-slate-900 dark:text-white font-sans",
                                        children: contactsQuery ? "No contacts found" : "No contacts available"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                        lineNumber: 481,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium font-sans",
                                        children: contactsQuery ? `No contacts matching "${contactsQuery}".` : "Sync your phone contacts to find friends and colleagues on PingDart."
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                        lineNumber: 484,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                lineNumber: 480,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSyncContacts,
                                disabled: isSyncing,
                                className: "mt-2 px-5 py-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white text-xs font-semibold rounded-full shadow-md transition-all active:scale-95 flex items-center gap-2 font-sans",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                        size: 14,
                                        className: isSyncing ? "animate-spin" : ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                        lineNumber: 495,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isSyncing ? "Syncing Contacts..." : "Sync Phone Contacts"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                        lineNumber: 496,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                                lineNumber: 490,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                        lineNumber: 476,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                lineNumber: 286,
                columnNumber: 7
            }, this),
            showExploreModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExploreModal, {
                onClose: ()=>setShowExploreModal(false),
                onOpenChat: (roomId)=>{
                    setShowExploreModal(false);
                    setShowContacts(false);
                    onSelect(roomId);
                }
            }, void 0, false, {
                fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
                lineNumber: 504,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, this);
}
_s(ChatListContacts, "0XIbgTTyzXinTLeBRDLtsUmIasg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c1 = ChatListContacts;
var _c, _c1;
__turbopack_context__.k.register(_c, "ExploreModal");
__turbopack_context__.k.register(_c1, "ChatListContacts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/modules/chat/components/ChatList/ChatListContacts.tsx [app-client] (ecmascript)"));
}),
"[project]/node_modules/@hugeicons/core-free-icons/dist/esm/Share01Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Share01Icon
]);
const Share01Icon = /*#__PURE__*/ [
    [
        "path",
        {
            d: "M9.39584 4.5H8.35417C5.40789 4.5 3.93475 4.5 3.01946 5.37868C2.10417 6.25736 2.10417 7.67157 2.10417 10.5V14.5C2.10417 17.3284 2.10417 18.7426 3.01946 19.6213C3.93475 20.5 5.40789 20.5 8.35417 20.5H12.5608C15.5071 20.5 16.9802 20.5 17.8955 19.6213C18.4885 19.052 18.6973 18.2579 18.7708 17",
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
            d: "M16.1667 7V3.85355C16.1667 3.65829 16.3316 3.5 16.535 3.5C16.6326 3.5 16.7263 3.53725 16.7954 3.60355L21.5275 8.14645C21.7634 8.37282 21.8958 8.67986 21.8958 9C21.8958 9.32014 21.7634 9.62718 21.5275 9.85355L16.7954 14.3964C16.7263 14.4628 16.6326 14.5 16.535 14.5C16.3316 14.5 16.1667 14.3417 16.1667 14.1464V11H13.1157C8.875 11 7.3125 14.5 7.3125 14.5V12C7.3125 9.23858 9.64435 7 12.5208 7H16.1667Z",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5",
            key: "1"
        }
    ]
];
;
 //# sourceMappingURL=Share01Icon.js.map
}),
"[project]/node_modules/@hugeicons/core-free-icons/dist/esm/Share01Icon.js [app-client] (ecmascript) <export default as Share01Icon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Share01Icon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$core$2d$free$2d$icons$2f$dist$2f$esm$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$core$2d$free$2d$icons$2f$dist$2f$esm$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hugeicons/core-free-icons/dist/esm/Share01Icon.js [app-client] (ecmascript)");
}),
"[project]/node_modules/hugeicons-react/dist/esm/icons/Share01Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license hugeicons-react v0.4.0
 *
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "Share01Icon",
    ()=>Share01Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$react$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@hugeicons/react/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$react$2f$dist$2f$esm$2f$HugeiconsIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hugeicons/react/dist/esm/HugeiconsIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$core$2d$free$2d$icons$2f$dist$2f$esm$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share01Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/@hugeicons/core-free-icons/dist/esm/Share01Icon.js [app-client] (ecmascript) <export default as Share01Icon>");
;
;
;
const Share01Icon = (props)=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$react$2f$dist$2f$esm$2f$HugeiconsIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HugeiconsIcon"], {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hugeicons$2f$core$2d$free$2d$icons$2f$dist$2f$esm$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share01Icon$3e$__["Share01Icon"],
        ...props
    });
};
Share01Icon.displayName = "Share01Icon";
;
}),
]);

//# sourceMappingURL=_7e7e4163._.js.map