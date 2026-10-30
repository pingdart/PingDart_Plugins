(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/mail/MailScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MailScreen",
    ()=>MailScreen,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$InboxIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/InboxIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$MailList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/modules/mail/MailList.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$MailCompose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/MailCompose.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$MailReader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/MailReader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$MailSettingsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/MailSettingsModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$MailSettingsSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/mail-list/MailSettingsSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.mjs [app-client] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mailApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$DomainDnsDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/DomainDnsDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@capacitor/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/storageAdapter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$domainBillingApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/domainBillingApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$DomainBillingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/DomainBillingModal.tsx [app-client] (ecmascript)");
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
;
;
;
const AVATAR_COLORS = [
    "#4338ca",
    "#2563eb",
    "#059669",
    "#d97706",
    "#dc2626",
    "#0891b2",
    "#4338ca",
    "#9333ea"
];
const getAvatarColor = (name)=>AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
function getPersistentDeletedUids(emailKey) {
    if ("object" === "undefined" || !emailKey) return new Set();
    try {
        const key = `pingdart_deleted_uids_${emailKey.trim().toLowerCase()}`;
        const raw = localStorage.getItem(key);
        if (!raw) return new Set();
        const data = JSON.parse(raw);
        const now = Date.now();
        const active = new Set();
        let changed = false;
        const MAX_AGE = 15 * 60 * 1000; // 15 minutes tombstone window
        for (const [uid, ts] of Object.entries(data)){
            if (now - Number(ts) < MAX_AGE) {
                active.add(String(uid));
            } else {
                changed = true;
            }
        }
        if (changed) {
            const cleaned = {};
            active.forEach((u)=>{
                cleaned[u] = data[u] || now;
            });
            localStorage.setItem(key, JSON.stringify(cleaned));
        }
        return active;
    } catch (_) {
        return new Set();
    }
}
function addPersistentDeletedUids(emailKey, uids) {
    if ("object" === "undefined" || !emailKey || !uids.length) return;
    try {
        const key = `pingdart_deleted_uids_${emailKey.trim().toLowerCase()}`;
        const raw = localStorage.getItem(key);
        const data = raw ? JSON.parse(raw) : {};
        const now = Date.now();
        uids.forEach((uid)=>{
            data[String(uid)] = now;
        });
        localStorage.setItem(key, JSON.stringify(data));
    } catch (_) {}
}
function MailScreen({ onBack } = {}) {
    var _this, _this1, _this2, _this3, _this4, _permissions, _this5, _permissions1, _this6, _this7;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const folderParam = searchParams.get("folder");
    const mailIdParam = searchParams.get("mailId") || searchParams.get("openid");
    const [selectedMail, setSelectedMail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mailIdParam || null);
    const [replyText, setReplyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeFolder, setActiveFolder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(folderParam || "Inbox");
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Primary");
    const activeFolderRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(activeFolder);
    const isComposeUrlParam = searchParams.get("compose") === "true";
    const [isComposingState, setIsComposingState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isComposeUrlParam);
    const isComposing = isComposingState || isComposeUrlParam;
    const [domainMailAccess, setDomainMailAccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showDomainBillingModal, setShowDomainBillingModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const setIsComposing = (val)=>{
        if (val && ((domainMailAccess === null || domainMailAccess === void 0 ? void 0 : domainMailAccess.status) === 'suspended' || (domainMailAccess === null || domainMailAccess === void 0 ? void 0 : domainMailAccess.canSendSmtp) === false)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error((domainMailAccess === null || domainMailAccess === void 0 ? void 0 : domainMailAccess.message) || "Sending email is suspended: your domain subscription is overdue. Please renew your plan.");
            setShowDomainBillingModal(true);
            return;
        }
        setIsComposingState(val);
        const newParams = new URLSearchParams(searchParams.toString());
        if (val) {
            newParams.set("compose", "true");
        } else {
            newParams.delete("compose");
        }
        window.history.replaceState(null, "", `/user?${newParams.toString()}`);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            if (isComposeUrlParam) {
                setIsComposingState(true);
            }
        }
    }["MailScreen.useEffect"], [
        isComposeUrlParam
    ]);
    // ── Settings View State (Zero-Reload In-Memory Transition) ──
    const settingsSubtabs = [
        "imap",
        "subscription",
        "plans",
        "settings",
        "connect",
        "signatures",
        "diagnostics",
        "branding",
        "developer",
        "integrations",
        "domainaccounts",
        "campaigns"
    ];
    const subtabParam = (searchParams.get("subtab") || "").toLowerCase();
    const childParam = (searchParams.get("child") || searchParams.get("chaild") || "").toLowerCase();
    const initialIsSettingsOpen = subtabParam === "mailsettings" || Boolean(subtabParam) && settingsSubtabs.includes(subtabParam);
    const [isSettingsOpen, setIsSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialIsSettingsOpen);
    const [activeSettingsChild, setActiveSettingsChild] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(childParam || (subtabParam !== "mailsettings" && settingsSubtabs.includes(subtabParam) ? subtabParam : ""));
    // ── Prune foreign query params that leaked from other modules (CRM, Settings, etc.) ──
    // Runs on mount AND whenever subtabParam changes (e.g. navigating CRM → Mail Settings
    // while MailScreen is already mounted, so foreign params like crm_tab / section are pruned).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const currentParams = new URLSearchParams(window.location.search);
            let changed = false;
            const foreignKeys = [
                "crm_tab",
                "crm_subtab",
                "crm_modal",
                "ticket_id",
                "ticket",
                "projectId",
                "clientId",
                "client_id",
                "budget_tab",
                "play",
                "reelId",
                "playIndex"
            ];
            foreignKeys.forEach({
                "MailScreen.useEffect": (key)=>{
                    if (currentParams.has(key)) {
                        currentParams.delete(key);
                        changed = true;
                    }
                }
            }["MailScreen.useEffect"]);
            // If section exists from general settings (e.g. section=currency), purge it
            const sec = currentParams.get("section");
            if (sec && !settingsSubtabs.includes(sec.toLowerCase())) {
                currentParams.delete("section");
                changed = true;
            }
            if (changed) {
                const qs = currentParams.toString();
                window.history.replaceState(null, "", qs ? `/user?${qs}` : `/user?tab=Mail`);
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MailScreen.useEffect"], [
        subtabParam
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            const isNowOpen = subtabParam === "mailsettings" || Boolean(subtabParam) && settingsSubtabs.includes(subtabParam);
            setIsSettingsOpen(isNowOpen);
            if (childParam) {
                setActiveSettingsChild(childParam);
            } else if (subtabParam && subtabParam !== "mailsettings" && settingsSubtabs.includes(subtabParam)) {
                setActiveSettingsChild(subtabParam);
            } else {
                setActiveSettingsChild("");
            }
        }
    }["MailScreen.useEffect"], [
        subtabParam,
        childParam
    ]);
    const handleCloseSettings = ()=>{
        setIsSettingsOpen(false);
        setActiveSettingsChild("");
        const newParams = new URLSearchParams(("TURBOPACK compile-time truthy", 1) ? window.location.search : "TURBOPACK unreachable");
        newParams.delete("subtab");
        newParams.delete("section");
        newParams.delete("child");
        newParams.delete("chaild");
        newParams.delete("crm_tab");
        newParams.delete("crm_subtab");
        newParams.delete("crm_modal");
        if ("TURBOPACK compile-time truthy", 1) {
            const qs = newParams.toString();
            window.history.replaceState(null, "", qs ? `/user?${qs}` : `/user?tab=Mail`);
        }
    };
    const handleOpenSettings = (targetSub)=>{
        const sub = typeof targetSub === "string" ? targetSub : "";
        setIsSettingsOpen(true);
        setActiveSettingsChild(sub);
        const newParams = new URLSearchParams();
        newParams.set("tab", "Mail");
        newParams.set("subtab", "mailsettings");
        if (sub) {
            newParams.set("child", sub);
        }
        const currentFolder = searchParams === null || searchParams === void 0 ? void 0 : searchParams.get("folder");
        if (currentFolder) newParams.set("folder", currentFolder);
        if ("TURBOPACK compile-time truthy", 1) {
            router.replace(`/user?${newParams.toString()}`);
            window.dispatchEvent(new CustomEvent("mail:open_settings", {
                detail: {
                    tab: sub
                }
            }));
        }
    };
    const [showCcBcc, setShowCcBcc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [composeData, setComposeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const getMailTimestamp = (m)=>{
        if (!m) return 0;
        if (typeof m.date === 'number') return m.date;
        if (m.date) {
            const t = new Date(m.date).getTime();
            if (!isNaN(t)) return t;
        }
        if (m.createdAt) {
            const t = new Date(m.createdAt).getTime();
            if (!isNaN(t)) return t;
        }
        if (m.created_at) {
            const t = new Date(m.created_at).getTime();
            if (!isNaN(t)) return t;
        }
        if (typeof m.uid === 'string' && m.uid.startsWith('temp_')) {
            const parsed = parseInt(m.uid.replace('temp_', ''), 10);
            if (!isNaN(parsed) && parsed > 1000000000000) return parsed;
        }
        return 0;
    };
    const sortMailsByTimeDesc = (list)=>{
        if (!Array.isArray(list)) return [];
        return [
            ...list
        ].sort((a, b)=>getMailTimestamp(b) - getMailTimestamp(a));
    };
    const { user, transientPassword, deviceMailToken } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [isPrimaryActive, setIsPrimaryActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MailScreen.useState": ()=>{
            const u = user;
            if ((u === null || u === void 0 ? void 0 : u.is_account_inactive) || (u === null || u === void 0 ? void 0 : u.isActive) === false || (u === null || u === void 0 ? void 0 : u.is_active) === false) {
                return false;
            }
            return true;
        }
    }["MailScreen.useState"]);
    const [targetEmail, setTargetEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MailScreen.useState": ()=>{
            if ((user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email)) return user.mailbox_email || user.email;
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const stored = localStorage.getItem('user');
                    if (stored) {
                        const u = JSON.parse(stored);
                        if ((u === null || u === void 0 ? void 0 : u.mailbox_email) || (u === null || u === void 0 ? void 0 : u.email)) return u.mailbox_email || u.email;
                    }
                } catch (_) {}
            }
            return "";
        }
    }["MailScreen.useState"]);
    const getCacheForEmail = (emailKey)=>{
        if ("object" === 'undefined' || !emailKey) return {};
        try {
            const raw = localStorage.getItem(`pingdart_mail_cache_${emailKey}`);
            if (raw) {
                const parsed = JSON.parse(raw);
                const tombstones = getPersistentDeletedUids(emailKey);
                if (tombstones.size > 0 && parsed && typeof parsed === 'object') {
                    for (const f of Object.keys(parsed)){
                        if (Array.isArray(parsed[f])) {
                            parsed[f] = parsed[f].filter((m)=>!tombstones.has(String(m.uid)));
                        }
                    }
                }
                return parsed || {};
            }
        } catch (_) {}
        return {};
    };
    const targetEmailRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(targetEmail);
    targetEmailRef.current = targetEmail;
    const [mailsCache, setMailsCache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MailScreen.useState": ()=>{
            let emailKey = (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || '';
            if (!emailKey && "object" !== 'undefined') {
                try {
                    const stored = localStorage.getItem('user');
                    if (stored) {
                        const u = JSON.parse(stored);
                        emailKey = (u === null || u === void 0 ? void 0 : u.mailbox_email) || (u === null || u === void 0 ? void 0 : u.email) || '';
                    }
                } catch (_) {}
            }
            return getCacheForEmail(emailKey);
        }
    }["MailScreen.useState"]);
    const [mails, setMails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MailScreen.useState": ()=>{
            const initialFolder = folderParam || "Inbox";
            let folderMails = mailsCache[initialFolder];
            if (!folderMails) {
                const matchKey = Object.keys(mailsCache).find({
                    "MailScreen.useState.matchKey": (k)=>k.toLowerCase() === initialFolder.toLowerCase()
                }["MailScreen.useState.matchKey"]);
                if (matchKey) folderMails = mailsCache[matchKey];
            }
            const initialList = folderMails || [];
            let emailKey = (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || '';
            if (!emailKey && "object" !== 'undefined') {
                try {
                    const stored = localStorage.getItem('user');
                    if (stored) {
                        const u = JSON.parse(stored);
                        emailKey = (u === null || u === void 0 ? void 0 : u.mailbox_email) || (u === null || u === void 0 ? void 0 : u.email) || '';
                    }
                } catch (_) {}
            }
            const tombstones = getPersistentDeletedUids(emailKey);
            const filtered = tombstones.size > 0 ? initialList.filter({
                "MailScreen.useState": (m)=>!tombstones.has(String(m.uid))
            }["MailScreen.useState"]) : initialList;
            return sortMailsByTimeDesc(filtered);
        }
    }["MailScreen.useState"]);
    const [folderStats, setFolderStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MailScreen.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    let emailKey = (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || '';
                    if (!emailKey) {
                        const stored = localStorage.getItem('user');
                        if (stored) {
                            const u = JSON.parse(stored);
                            emailKey = (u === null || u === void 0 ? void 0 : u.mailbox_email) || (u === null || u === void 0 ? void 0 : u.email) || '';
                        }
                    }
                    if (emailKey) {
                        const raw = localStorage.getItem(`pingdart_mail_stats_${emailKey}`);
                        if (raw) return JSON.parse(raw);
                    }
                } catch (_) {}
            }
            return {};
        }
    }["MailScreen.useState"]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MailScreen.useState": ()=>{
            const initialFolder = folderParam || "Inbox";
            return !mailsCache[initialFolder] || mailsCache[initialFolder].length === 0;
        }
    }["MailScreen.useState"]);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [connectedAccounts, setConnectedAccounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [defaultSignature, setDefaultSignature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [brandLogoUrl, setBrandLogoUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [brandName, setBrandName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Initialize password with the user's login password (transientPassword)
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(transientPassword || "");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            if ((user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email)) {
                setTargetEmail(user.mailbox_email || user.email);
            }
        }
    }["MailScreen.useEffect"], [
        user === null || user === void 0 ? void 0 : user.mailbox_email,
        user === null || user === void 0 ? void 0 : user.email
    ]);
    // Reactive Domain-Level Mail Access & Billing Status Check
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            let isCancelled = false;
            const checkDomainAccess = {
                "MailScreen.useEffect.checkDomainAccess": async ()=>{
                    const email = targetEmail || (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email);
                    if (!email) return;
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$domainBillingApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domainBillingApi"].checkMailAccess(email);
                        if (!isCancelled && res) {
                            setDomainMailAccess(res);
                        }
                    } catch (err) {
                        console.warn("[MailScreen] Failed to verify domain billing status:", err);
                    }
                }
            }["MailScreen.useEffect.checkDomainAccess"];
            checkDomainAccess();
            return ({
                "MailScreen.useEffect": ()=>{
                    isCancelled = true;
                }
            })["MailScreen.useEffect"];
        }
    }["MailScreen.useEffect"], [
        targetEmail,
        user === null || user === void 0 ? void 0 : user.mailbox_email,
        user === null || user === void 0 ? void 0 : user.email
    ]);
    const [isDnsDialogOpen, setIsDnsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDnsDismissed, setIsDnsDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userDomains, setUserDomains] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedDnsDomain, setSelectedDnsDomain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [multiDnsStatus, setMultiDnsStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // True only when running inside an Android or iOS native Capacitor shell
    const isMobileNative = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$capacitor$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Capacitor"].isNativePlatform();
    const userEmail = ((user === null || user === void 0 ? void 0 : user.email) || '').toLowerCase().trim();
    const userRole = String(((_this = user) === null || _this === void 0 ? void 0 : _this.role) || '').toLowerCase().trim();
    const isRootAdmin = userEmail === 'ravindramallemail@pingdart.com' || userRole === 'superadmin';
    const isDomainAdmin = Boolean(isRootAdmin || userRole === 'domainadmin' || userRole === 'admin' || userRole === 'tenantadmin' || ((_this1 = user) === null || _this1 === void 0 ? void 0 : _this1.is_tenant_admin) || ((_this2 = user) === null || _this2 === void 0 ? void 0 : _this2.isDomainAdmin) || ((_this3 = user) === null || _this3 === void 0 ? void 0 : _this3.is_domain_admin) || ((_this4 = user) === null || _this4 === void 0 ? void 0 : _this4.can_manage_domain_accounts) || ((_this5 = user) === null || _this5 === void 0 ? void 0 : (_permissions = _this5.permissions) === null || _permissions === void 0 ? void 0 : _permissions.isDomainAdmin) || ((_this6 = user) === null || _this6 === void 0 ? void 0 : (_permissions1 = _this6.permissions) === null || _permissions1 === void 0 ? void 0 : _permissions1.role) === 'domainadmin' || userEmail.startsWith('admin@'));
    const checkSingleDomainDns = async (domainStr)=>{
        if (!domainStr || !isDomainAdmin) return;
        setMultiDnsStatus((prev)=>({
                ...prev,
                [domainStr]: {
                    ...prev[domainStr] || {},
                    checking: true
                }
            }));
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/domains/check?domain=${encodeURIComponent(domainStr)}`);
            if (res.data && res.data.data) {
                setMultiDnsStatus((prev)=>({
                        ...prev,
                        [domainStr]: {
                            verified: res.data.data.dnsVerified,
                            checking: false,
                            records: res.data.data.records
                        }
                    }));
            } else {
                setMultiDnsStatus((prev)=>({
                        ...prev,
                        [domainStr]: {
                            verified: false,
                            checking: false
                        }
                    }));
            }
        } catch (e) {
            setMultiDnsStatus((prev)=>({
                    ...prev,
                    [domainStr]: {
                        verified: false,
                        checking: false
                    }
                }));
        }
    };
    const handleFetchAllDomainsAndDns = async ()=>{
        var _split_;
        if (!user || !isDomainAdmin) return;
        const emailDomain = (_split_ = (user.mailbox_email || user.email || '').split('@')[1]) === null || _split_ === void 0 ? void 0 : _split_.toLowerCase().trim();
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/domains');
            let domList = [];
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && Array.isArray(res.data.data)) {
                domList = res.data.data.map((d)=>(d.domain_name || d.domain || '').toLowerCase().trim()).filter(Boolean);
            } else if (Array.isArray(res.data)) {
                domList = res.data.map((d)=>(d.domain_name || d.domain || '').toLowerCase().trim()).filter(Boolean);
            }
            if (emailDomain && !domList.includes(emailDomain)) {
                domList.unshift(emailDomain);
            }
            const validDomains = Array.from(new Set(domList)).filter((d)=>isRootAdmin || d !== 'pingdart.com');
            setUserDomains(validDomains);
            if (validDomains.length > 0) {
                setSelectedDnsDomain((prev)=>prev && validDomains.includes(prev) ? prev : validDomains[0]);
                for (const dom of validDomains){
                    checkSingleDomainDns(dom);
                }
            } else if (emailDomain) {
                setSelectedDnsDomain(emailDomain);
                if (isRootAdmin || emailDomain !== 'pingdart.com') {
                    checkSingleDomainDns(emailDomain);
                }
            }
        } catch (e) {
            if (emailDomain) {
                const fallback = [
                    emailDomain
                ].filter((d)=>isRootAdmin || d !== 'pingdart.com');
                setUserDomains(fallback);
                setSelectedDnsDomain(emailDomain);
                if (isRootAdmin || emailDomain !== 'pingdart.com') {
                    checkSingleDomainDns(emailDomain);
                }
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            if ((user === null || user === void 0 ? void 0 : user.email) && isDomainAdmin) {
                handleFetchAllDomainsAndDns();
            }
        }
    }["MailScreen.useEffect"], [
        user === null || user === void 0 ? void 0 : user.email,
        user === null || user === void 0 ? void 0 : user.mailbox_email,
        isDomainAdmin
    ]);
    const getDnsAlert = ()=>{
        var _split_;
        if (!(user === null || user === void 0 ? void 0 : user.email) || !isDomainAdmin) return null;
        if (isDnsDismissed) return null;
        const emailDomain = (_split_ = (user.mailbox_email || user.email || '').split('@')[1]) === null || _split_ === void 0 ? void 0 : _split_.toLowerCase().trim();
        const domainsToCheck = userDomains.length > 0 ? userDomains : emailDomain ? [
            emailDomain
        ] : [];
        const actionableDomains = domainsToCheck.filter((d)=>isRootAdmin || d !== 'pingdart.com');
        if (actionableDomains.length === 0) return null;
        const failingDomains = [];
        const warningDomains = [];
        for (const dom of actionableDomains){
            const status = multiDnsStatus[dom];
            if (!status) {
                if ((user === null || user === void 0 ? void 0 : user.domain_verified) === false) {
                    warningDomains.push(dom);
                }
                continue;
            }
            if (status.checking || !status.records) continue;
            const { mx, spf, dkim, dmarc } = status.records;
            const requiredUnmatched = [];
            if (!(mx === null || mx === void 0 ? void 0 : mx.match)) requiredUnmatched.push("MX");
            if (!(spf === null || spf === void 0 ? void 0 : spf.match)) requiredUnmatched.push("SPF");
            if (!(dkim === null || dkim === void 0 ? void 0 : dkim.match)) requiredUnmatched.push("DKIM");
            if (!(dmarc === null || dmarc === void 0 ? void 0 : dmarc.match)) requiredUnmatched.push("DMARC");
            if (requiredUnmatched.length > 0) {
                failingDomains.push({
                    domain: dom,
                    missing: requiredUnmatched
                });
            }
        }
        if (failingDomains.length > 0) {
            if (failingDomains.length === 1) {
                const first = failingDomains[0];
                return {
                    type: 'error',
                    domain: first.domain,
                    message: `Critical Error: Domain @${first.domain} is missing required DNS records (${first.missing.join(', ')}). Mail sending/receiving is disabled.`
                };
            }
            const names = failingDomains.map((f)=>`@${f.domain}`).join(', ');
            return {
                type: 'error',
                domain: failingDomains[0].domain,
                message: `Critical Error: Domains (${names}) are missing required DNS records. Mail sending/receiving is disabled.`
            };
        }
        if (warningDomains.length > 0) {
            return {
                type: 'warning',
                domain: warningDomains[0],
                message: `Notice: Domain @${warningDomains[0]} DNS records are not fully verified. Email delivery might be affected.`
            };
        }
        return null;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            const fetchAccountsAndSignatures = {
                "MailScreen.useEffect.fetchAccountsAndSignatures": async ()=>{
                    try {
                        // Check primary account status from server
                        const u = user;
                        let primaryActive = !((u === null || u === void 0 ? void 0 : u.is_account_inactive) || (u === null || u === void 0 ? void 0 : u.isActive) === false || (u === null || u === void 0 ? void 0 : u.is_active) === false);
                        if (user === null || user === void 0 ? void 0 : user.id) {
                            try {
                                const statusRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].checkAccountStatus(String(user.id));
                                if (statusRes && statusRes.success === false && statusRes.errorType === 'ACCOUNT_INACTIVE') {
                                    primaryActive = false;
                                } else if (statusRes && statusRes.allowed) {
                                    primaryActive = true;
                                }
                            } catch (_) {}
                        }
                        setIsPrimaryActive(primaryActive);
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectedEmailsApi"].list();
                        if (res.success && Array.isArray(res.data)) {
                            // Enrich each connected account with an isActive flag.
                            // An account is considered active when it is verified by the user.
                            // For PingDart-hosted mailboxes (provider === 'pingdart'), we also
                            // call checkAccountStatus to respect server-side deactivation.
                            const enriched = await Promise.all(res.data.map({
                                "MailScreen.useEffect.fetchAccountsAndSignatures": async (acc)=>{
                                    // Unverified accounts are inactive by definition — connection hasn't been confirmed
                                    if (!acc.isVerified) {
                                        return {
                                            ...acc,
                                            isActive: false,
                                            inactiveReason: 'Email not verified — connection not confirmed'
                                        };
                                    }
                                    // For PingDart-hosted accounts, call the server status check
                                    if (acc.provider === 'pingdart' && acc.userId) {
                                        try {
                                            const statusRes = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].checkAccountStatus(String(acc.userId));
                                            if (statusRes && statusRes.success === false && statusRes.errorType === 'ACCOUNT_INACTIVE') {
                                                return {
                                                    ...acc,
                                                    isActive: false,
                                                    inactiveReason: statusRes.message || 'Account deactivated'
                                                };
                                            }
                                        } catch (_) {}
                                    }
                                    return {
                                        ...acc,
                                        isActive: true
                                    };
                                }
                            }["MailScreen.useEffect.fetchAccountsAndSignatures"]));
                            setConnectedAccounts(enriched);
                            // Multi-email auto switch: If primary or current target is deactivated,
                            // switch targetEmail to the first active connected email so other emails work!
                            const activeConnected = enriched.filter({
                                "MailScreen.useEffect.fetchAccountsAndSignatures.activeConnected": (a)=>a.isActive !== false
                            }["MailScreen.useEffect.fetchAccountsAndSignatures.activeConnected"]);
                            const primaryEmailStr = ((user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || '').toLowerCase();
                            const currentTargetStr = (targetEmailRef.current || targetEmail || '').toLowerCase();
                            const isTargetDeactivated = !primaryActive && (!currentTargetStr || currentTargetStr === primaryEmailStr) || enriched.some({
                                "MailScreen.useEffect.fetchAccountsAndSignatures": (a)=>a.email.toLowerCase() === currentTargetStr && a.isActive === false
                            }["MailScreen.useEffect.fetchAccountsAndSignatures"]);
                            if (isTargetDeactivated && activeConnected.length > 0) {
                                const fallbackEmail = activeConnected[0].email;
                                targetEmailRef.current = fallbackEmail;
                                setTargetEmail(fallbackEmail);
                            }
                        }
                    } catch (err) {
                        console.error("Failed to fetch connected accounts", err);
                    }
                }
            }["MailScreen.useEffect.fetchAccountsAndSignatures"];
            fetchAccountsAndSignatures();
            // Fetch default signature and resolve {{variables}} from user profile
            const fetchDefaultSig = {
                "MailScreen.useEffect.fetchDefaultSig": async ()=>{
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signaturesApi"].list();
                        if (res.success && res.data.length > 0) {
                            const def = res.data.find({
                                "MailScreen.useEffect.fetchDefaultSig": (s)=>s.isDefault
                            }["MailScreen.useEffect.fetchDefaultSig"]) || res.data[0];
                            if (def && def.content) {
                                const u = user;
                                const domain = ((u === null || u === void 0 ? void 0 : u.mailbox_email) || (u === null || u === void 0 ? void 0 : u.email) || '').split('@')[1];
                                let resolved = def.content;
                                resolved = resolved.replace(/\{\{\s*Full\s+Name\s*\}\}/gi, (u === null || u === void 0 ? void 0 : u.full_name) || (u === null || u === void 0 ? void 0 : u.fullName) || (u === null || u === void 0 ? void 0 : u.username) || '');
                                resolved = resolved.replace(/\{\{\s*Job\s+Title\s*\}\}/gi, (u === null || u === void 0 ? void 0 : u.profession) || (u === null || u === void 0 ? void 0 : u.jobTitle) || (u === null || u === void 0 ? void 0 : u.job_title) || '');
                                resolved = resolved.replace(/\{\{\s*Company\s*\}\}/gi, (u === null || u === void 0 ? void 0 : u.business_name) || (u === null || u === void 0 ? void 0 : u.businessName) || (domain ? domain.split('.')[0].charAt(0).toUpperCase() + domain.split('.')[0].slice(1) : ''));
                                resolved = resolved.replace(/\{\{\s*Email\s*\}\}/gi, (u === null || u === void 0 ? void 0 : u.mailbox_email) || (u === null || u === void 0 ? void 0 : u.email) || '');
                                resolved = resolved.replace(/\{\{\s*Phone\s*\}\}/gi, (u === null || u === void 0 ? void 0 : u.phone) || '');
                                resolved = resolved.replace(/\{\{\s*Website\s*\}\}/gi, domain ? `www.${domain}` : '');
                                setDefaultSignature(resolved);
                            }
                        }
                    } catch (err) {
                        console.error("Failed to fetch default signature", err);
                    }
                }
            }["MailScreen.useEffect.fetchDefaultSig"];
            fetchDefaultSig();
            // Fetch brand logo from domain branding
            const fetchBrandLogo = {
                "MailScreen.useEffect.fetchBrandLogo": async ()=>{
                    try {
                        var _res_data_data, _res_data, _res_data_data1, _res_data1;
                        const domainStr = ((user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || '').split('@')[1];
                        if (!domainStr) return;
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/domains/${domainStr}`);
                        if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_data = _res_data.data) === null || _res_data_data === void 0 ? void 0 : _res_data_data.logoUrl) {
                            setBrandLogoUrl(res.data.data.logoUrl);
                        }
                        if ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : (_res_data_data1 = _res_data1.data) === null || _res_data_data1 === void 0 ? void 0 : _res_data_data1.brandName) {
                            setBrandName(res.data.data.brandName);
                        }
                    } catch (err) {
                    // no logo configured — that's fine
                    }
                }
            }["MailScreen.useEffect.fetchBrandLogo"];
            fetchBrandLogo();
        }
    }["MailScreen.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            if (transientPassword) {
                setPassword(transientPassword);
            }
        }
    }["MailScreen.useEffect"], [
        transientPassword
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            activeFolderRef.current = activeFolder;
        }
    }["MailScreen.useEffect"], [
        activeFolder
    ]);
    const [hasMoreMails, setHasMoreMails] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(true);
    const [isLoadingMore, setIsLoadingMore] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const isMailSyncRunningRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(false);
    const recentlyDeletedUidsRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(new Set());
    const fetchMails = async (folderToFetch = activeFolder, silent = false, emailToFetch = targetEmail)=>{
        if (!emailToFetch) {
            if (!silent) {
                setError("Email session not synced. Please log out and log back in once to auto-sync your mailbox.");
                setIsLoading(false);
            }
            return;
        }
        // Guard: Do not attempt any IMAP fetch for deactivated primary accounts
        const isPrimaryEmail = ((user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || '').toLowerCase() === emailToFetch.toLowerCase();
        if (isPrimaryEmail && (!isPrimaryActive || (user === null || user === void 0 ? void 0 : user.is_account_inactive))) {
            if (!silent) {
                setIsLoading(false);
                setMails([]);
            }
            return;
        }
        // Guard: Do not attempt any IMAP fetch for deactivated connected accounts
        const matchedConnected = connectedAccounts.find((a)=>(a.email || '').toLowerCase() === emailToFetch.toLowerCase());
        if (matchedConnected && matchedConnected.isActive === false) {
            if (!silent) {
                setIsLoading(false);
                setMails([]);
            }
            return;
        }
        if (isMailSyncRunningRef.current) {
            if (!silent && mails.length > 0) {
                setIsLoading(false);
            }
            return;
        }
        isMailSyncRunningRef.current = true;
        if (!silent) {
            setIsLoading(true);
            setError(null);
        }
        // Safety timeout: Never leave the user stuck on skeleton loading if server or IMAP is slow
        const safetyTimer = setTimeout(()=>{
            if (isMailSyncRunningRef.current) {
                isMailSyncRunningRef.current = false;
                setIsLoading(false);
            }
        }, 8000);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].getFolderMessages(emailToFetch, folderToFetch, 50, 0, password);
            clearTimeout(safetyTimer);
            // Discard response if target account has changed during the in-flight request
            if ((targetEmailRef.current || '').toLowerCase() !== emailToFetch.toLowerCase()) {
                return;
            }
            if (res.success) {
                if (res.pagination && typeof res.pagination.hasMore === 'boolean') {
                    setHasMoreMails(res.pagination.hasMore && (res.data || []).length >= 50);
                } else {
                    setHasMoreMails((res.data || []).length >= 50);
                }
                // Only update 'mails' state if this fetch matches the currently active folder to prevent race conditions
                const isCurrentFolder = (activeFolderRef.current || '').toLowerCase() === (folderToFetch || '').toLowerCase() || [
                    'sent',
                    'sent items'
                ].includes((activeFolderRef.current || '').toLowerCase()) && [
                    'sent',
                    'sent items'
                ].includes((folderToFetch || '').toLowerCase());
                setMailsCache((prevCache)=>{
                    if ((targetEmailRef.current || '').toLowerCase() !== emailToFetch.toLowerCase()) {
                        return prevCache;
                    }
                    const effectiveEmail = emailToFetch;
                    const persistentTombstones = getPersistentDeletedUids(effectiveEmail);
                    const oldMails = prevCache[folderToFetch] || [];
                    const validServerMails = (res.data || []).filter((newMail)=>{
                        const uidStr = String(newMail.uid);
                        if (recentlyDeletedUidsRef.current.has(uidStr) || persistentTombstones.has(uidStr)) return false;
                        if (folderToFetch.toLowerCase() === 'drafts') {
                            const sender = (newMail.sender || newMail.from || newMail.fromName || '').toLowerCase();
                            if (sender && !sender.includes(effectiveEmail.toLowerCase()) && !effectiveEmail.toLowerCase().includes(sender)) {
                                return false;
                            }
                        }
                        return true;
                    });
                    const serverUids = new Set(validServerMails.map((newMail)=>String(newMail.uid)));
                    const localOnlyMails = oldMails.filter((m)=>{
                        const uidStr = String(m.uid);
                        if (recentlyDeletedUidsRef.current.has(uidStr) || persistentTombstones.has(uidStr)) return false;
                        if (serverUids.has(uidStr)) return false;
                        // For Inbox folder: keep newly received real-time messages that arrived recently (< 90 seconds)
                        // unless already present in validServerMails (matched by subject & sender)
                        if (folderToFetch.toLowerCase() === 'inbox' || folderToFetch.toLowerCase() === 'received') {
                            const hasMatchingServerEmail = validServerMails.some((sm)=>{
                                const smFrom = sm.from || sm.fromName || '';
                                const mFrom = m.from || m.fromName || '';
                                return sm.subject === m.subject && (smFrom.includes(mFrom) || mFrom.includes(smFrom));
                            });
                            if (hasMatchingServerEmail) return false;
                            const mailTime = new Date(m.date).getTime();
                            if (!isNaN(mailTime) && Date.now() - mailTime < 90000) return true;
                            return false;
                        }
                        // For Drafts folder: only retain offline local drafts, never resurrect missing server drafts
                        if (folderToFetch.toLowerCase() === 'drafts') {
                            const isLocalTemp = String(m.uid).startsWith('draft_') || String(m.uid).startsWith('temp_');
                            if (!isLocalTemp) return false;
                            const sender = (m.sender || m.from || m.fromName || '').toLowerCase();
                            return !sender || sender.includes(effectiveEmail.toLowerCase());
                        }
                        // For Sent folder: keep items actively sending, recently sent, or failed that aren't yet on server
                        if (folderToFetch.toLowerCase() === 'sent' || folderToFetch.toLowerCase() === 'sent items') {
                            const hasMatchingServerEmail = validServerMails.some((sm)=>{
                                const smTo = Array.isArray(sm.to) ? sm.to.join(', ') : sm.to || '';
                                const mTo = Array.isArray(m.to) ? m.to.join(', ') : m.to || '';
                                return sm.subject === m.subject && (smTo.includes(mTo) || mTo.includes(smTo));
                            });
                            if (hasMatchingServerEmail) return false;
                            const mailTime = getMailTimestamp(m);
                            // Discard temporary items older than 30 minutes so stale items don't accumulate
                            if (mailTime > 0 && Date.now() - mailTime > 30 * 60 * 1000) return false;
                            if (m.status === 'failed' || m.status === 'sending' || m.status === 'sent') {
                                return true;
                            }
                            return false;
                        }
                        return false;
                    });
                    const combinedMails = [
                        ...localOnlyMails,
                        ...validServerMails.map((newMail)=>{
                            const oldMail = oldMails.find((m)=>String(m.uid) === String(newMail.uid));
                            if (oldMail && oldMail.isRead && !newMail.isRead) {
                                return {
                                    ...newMail,
                                    isRead: true
                                };
                            }
                            return newMail;
                        })
                    ];
                    // Deduplicate by messageId and uid so identical sent items never appear twice
                    const seenKeySet = new Set();
                    const updatedMails = [];
                    for (const m of combinedMails){
                        const key = m.messageId || m.message_id || String(m.uid);
                        if (seenKeySet.has(key)) continue;
                        seenKeySet.add(key);
                        updatedMails.push(m);
                    }
                    // Sort all messages strictly as per time-based list (newest first, failed/sent at their proper time)
                    const sortedMails = sortMailsByTimeDesc(updatedMails);
                    if (isCurrentFolder) {
                        setMails(sortedMails);
                    }
                    const nextCache = {
                        ...prevCache,
                        [folderToFetch]: sortedMails
                    };
                    // Persist authoritative synchronized mails to SQLite (native) and cache (web)
                    if (effectiveEmail) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageAdapter"].saveEmails(effectiveEmail, folderToFetch, sortedMails.slice(0, 500)).catch(()=>{});
                    }
                    if ("TURBOPACK compile-time truthy", 1) {
                        try {
                            const emailKey = effectiveEmail;
                            if (emailKey) {
                                localStorage.setItem(`pingdart_mail_cache_${emailKey}`, JSON.stringify(nextCache));
                            }
                        } catch (_) {}
                    }
                    return nextCache;
                });
            } else {
                if (!silent && (targetEmailRef.current || '').toLowerCase() === emailToFetch.toLowerCase()) {
                    if (res.errorType === 'DOMAIN_SUBSCRIPTION_SUSPENDED' || res.billingStatus === 'suspended') {
                        setDomainMailAccess((prev)=>({
                                ...prev || {},
                                allowed: false,
                                status: 'suspended',
                                message: res.message,
                                canSendSmtp: false,
                                canAccessImap: false,
                                renewalRequired: true
                            }));
                        setMails([]);
                    }
                    setError(res.message || "Failed to load emails");
                }
            }
        } catch (err) {
            clearTimeout(safetyTimer);
            if (!silent && (targetEmailRef.current || '').toLowerCase() === emailToFetch.toLowerCase()) {
                var _err_response;
                const errData = (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data;
                if ((errData === null || errData === void 0 ? void 0 : errData.errorType) === 'DOMAIN_SUBSCRIPTION_SUSPENDED' || (errData === null || errData === void 0 ? void 0 : errData.billingStatus) === 'suspended') {
                    setDomainMailAccess((prev)=>({
                            ...prev || {},
                            allowed: false,
                            status: 'suspended',
                            message: errData.message,
                            canSendSmtp: false,
                            canAccessImap: false,
                            renewalRequired: true
                        }));
                    setMails([]);
                }
                setError((errData === null || errData === void 0 ? void 0 : errData.message) || err.message || "Failed to load emails");
            }
        } finally{
            isMailSyncRunningRef.current = false;
            if ((targetEmailRef.current || '').toLowerCase() === emailToFetch.toLowerCase()) {
                setIsLoading(false);
            }
        }
    };
    const handleLoadMore = async ()=>{
        if (isLoadingMore || !hasMoreMails || !targetEmail) return;
        setIsLoadingMore(true);
        try {
            var _res_data;
            const offset = mails.length;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].getFolderMessages(targetEmail, activeFolder, 50, offset, password);
            if (res.success && ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.length) > 0) {
                setMails((prev)=>{
                    const existingUids = new Set(prev.map((m)=>String(m.uid)));
                    const uniqueNew = res.data.filter((m)=>!existingUids.has(String(m.uid)));
                    return [
                        ...prev,
                        ...uniqueNew
                    ];
                });
                setMailsCache((prevCache)=>{
                    const prevList = prevCache[activeFolder] || [];
                    const existingUids = new Set(prevList.map((m)=>String(m.uid)));
                    const uniqueNew = res.data.filter((m)=>!existingUids.has(String(m.uid)));
                    return {
                        ...prevCache,
                        [activeFolder]: [
                            ...prevList,
                            ...uniqueNew
                        ]
                    };
                });
                if (res.pagination && typeof res.pagination.hasMore === 'boolean') {
                    setHasMoreMails(res.pagination.hasMore && (res.data || []).length >= 50);
                } else {
                    setHasMoreMails((res.data || []).length >= 50);
                }
            } else {
                setHasMoreMails(false);
            }
        } catch (_) {
            setHasMoreMails(false);
        } finally{
            setIsLoadingMore(false);
        }
    };
    const fetchStats = async (emailToFetch = targetEmail)=>{
        if (!emailToFetch) return;
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].getFolderStats(emailToFetch, password);
            if (res.success && (targetEmailRef.current || '').toLowerCase() === emailToFetch.toLowerCase()) {
                setFolderStats(res.data);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageAdapter"].saveMailStats(emailToFetch, res.data).catch(()=>{});
            }
        } catch (err) {
            console.error("Failed to fetch folder stats", err);
        }
    };
    // Hydrate folder stats from local SQLite immediately
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            if (!targetEmail) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageAdapter"].getMailStats(targetEmail).then({
                "MailScreen.useEffect": (cached)=>{
                    if (cached && (targetEmailRef.current || '').toLowerCase() === targetEmail.toLowerCase()) {
                        setFolderStats(cached);
                    }
                }
            }["MailScreen.useEffect"]).catch({
                "MailScreen.useEffect": ()=>{}
            }["MailScreen.useEffect"]);
        }
    }["MailScreen.useEffect"], [
        targetEmail
    ]);
    // Track previous target email to detect switches cleanly
    const prevTargetEmailRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(targetEmail);
    // Fast Local DB hydration & background Live Sync
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            setSelectedMail(null);
            if (!targetEmail) return;
            const isEmailSwitch = prevTargetEmailRef.current && targetEmail && prevTargetEmailRef.current.toLowerCase() !== targetEmail.toLowerCase();
            prevTargetEmailRef.current = targetEmail;
            let currentCache = mailsCache;
            if (isEmailSwitch) {
                isMailSyncRunningRef.current = false; // Reset lock so new account can fetch immediately
                currentCache = getCacheForEmail(targetEmail);
                setMailsCache(currentCache);
                setFolderStats({});
            }
            const memCached = currentCache[activeFolder];
            if (memCached && memCached.length > 0) {
                const cleanMem = activeFolder.toLowerCase() === 'drafts' ? memCached.filter({
                    "MailScreen.useEffect": (m)=>{
                        const isLocal = String(m.uid).startsWith('draft_') || String(m.uid).startsWith('temp_');
                        if (isLocal) return true;
                        const sender = (m.sender || m.from || m.fromName || '').toLowerCase();
                        return sender && (sender.includes(targetEmail.toLowerCase()) || targetEmail.toLowerCase().includes(sender));
                    }
                }["MailScreen.useEffect"]) : memCached;
                // 0ms instant display from in-memory cache
                setMails(sortMailsByTimeDesc(cleanMem));
                setIsLoading(false);
                fetchMails(activeFolder, true, targetEmail); // Silent background live sync
            } else {
                let isCancelled = false;
                setIsLoading(true);
                setMails([]);
                // 0ms instant display from Native SQLite or IndexedDB storage
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageAdapter"].getEmails(targetEmail, activeFolder).then({
                    "MailScreen.useEffect": (localMails)=>{
                        if (isCancelled || (targetEmailRef.current || '').toLowerCase() !== targetEmail.toLowerCase()) return;
                        const cleanLocal = activeFolder.toLowerCase() === 'drafts' ? (localMails || []).filter({
                            "MailScreen.useEffect": (m)=>{
                                const isLocal = String(m.uid).startsWith('draft_') || String(m.uid).startsWith('temp_');
                                if (isLocal) return true;
                                const sender = (m.sender || m.from || m.fromName || '').toLowerCase();
                                return sender && (sender.includes(targetEmail.toLowerCase()) || targetEmail.toLowerCase().includes(sender));
                            }
                        }["MailScreen.useEffect"]) : localMails || [];
                        if (cleanLocal.length > 0) {
                            const sorted = sortMailsByTimeDesc(cleanLocal);
                            setMails(sorted);
                            setMailsCache({
                                "MailScreen.useEffect": (prev)=>({
                                        ...prev,
                                        [activeFolder]: sorted
                                    })
                            }["MailScreen.useEffect"]);
                            setIsLoading(false);
                            fetchMails(activeFolder, true, targetEmail); // Silent background live sync
                        } else {
                            setMails([]);
                            fetchMails(activeFolder, false, targetEmail); // First-time initial fetch
                        }
                    }
                }["MailScreen.useEffect"]).catch({
                    "MailScreen.useEffect": ()=>{
                        if (!isCancelled && (targetEmailRef.current || '').toLowerCase() === targetEmail.toLowerCase()) {
                            setMails([]);
                            fetchMails(activeFolder, false, targetEmail);
                        }
                    }
                }["MailScreen.useEffect"]);
                return ({
                    "MailScreen.useEffect": ()=>{
                        isCancelled = true;
                    }
                })["MailScreen.useEffect"];
            }
            fetchStats(targetEmail);
        }
    }["MailScreen.useEffect"], [
        activeFolder,
        targetEmail,
        password
    ]);
    // Request System Push Notification Permission on Mount (Android / iOS / Web)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            if ("object" !== "undefined" && "Notification" in window && Notification.permission === "default") {
                Notification.requestPermission().catch({
                    "MailScreen.useEffect": ()=>{}
                }["MailScreen.useEffect"]);
            }
        }
    }["MailScreen.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            if (!targetEmail) return;
            const handleIncomingMailEvent = {
                "MailScreen.useEffect.handleIncomingMailEvent": (incomingData)=>{
                    console.log('📬 [MailScreen] mail:new received at', new Date().toISOString(), 'Payload:', incomingData);
                    window.dispatchEvent(new CustomEvent("mail:new", {
                        detail: incomingData
                    }));
                    const mailItem = incomingData && typeof incomingData === 'object' && incomingData.data ? incomingData.data : incomingData;
                    if (mailItem && typeof mailItem === 'object') {
                        var _mailItem_attachments;
                        const newMailObj = {
                            uid: mailItem.uid || `msg_${Date.now()}`,
                            from: mailItem.from || 'Unknown Sender',
                            fromName: mailItem.fromName || (mailItem.from ? mailItem.from.split('<')[0].replace(/"/g, '').trim() : 'Unknown'),
                            to: mailItem.to || targetEmail,
                            subject: mailItem.subject || '(No Subject)',
                            bodyText: mailItem.bodyText || '',
                            bodyHtml: mailItem.bodyHtml || '',
                            date: mailItem.date || new Date().toISOString(),
                            snippet: mailItem.snippet || (mailItem.bodyText ? mailItem.bodyText.slice(0, 150) : ''),
                            category: mailItem.category || 'Primary',
                            isRead: false,
                            isStarred: false,
                            folder: mailItem.folder || 'INBOX',
                            hasAttachments: Boolean(mailItem.hasAttachments || ((_mailItem_attachments = mailItem.attachments) === null || _mailItem_attachments === void 0 ? void 0 : _mailItem_attachments.length))
                        };
                        // 1. Instantly prepend to active list if viewing Inbox (Chat-style 0ms update)
                        const curFolder = (activeFolderRef.current || activeFolder || 'INBOX').toLowerCase();
                        if (curFolder === 'inbox' || curFolder === 'received') {
                            setMails({
                                "MailScreen.useEffect.handleIncomingMailEvent": (prev)=>{
                                    const isDuplicate = prev.some({
                                        "MailScreen.useEffect.handleIncomingMailEvent.isDuplicate": (m)=>String(m.uid) === String(newMailObj.uid) || m.messageId && newMailObj.messageId && m.messageId === newMailObj.messageId || m.subject === newMailObj.subject && m.from === newMailObj.from && Math.abs(new Date(m.date).getTime() - new Date(newMailObj.date).getTime()) < 15000
                                    }["MailScreen.useEffect.handleIncomingMailEvent.isDuplicate"]);
                                    if (isDuplicate) return prev;
                                    return [
                                        newMailObj,
                                        ...prev
                                    ];
                                }
                            }["MailScreen.useEffect.handleIncomingMailEvent"]);
                        }
                        setMailsCache({
                            "MailScreen.useEffect.handleIncomingMailEvent": (prev)=>{
                                const curInbox = prev['Inbox'] || prev['INBOX'] || [];
                                const isDuplicate = curInbox.some({
                                    "MailScreen.useEffect.handleIncomingMailEvent.isDuplicate": (m)=>String(m.uid) === String(newMailObj.uid) || m.messageId && newMailObj.messageId && m.messageId === newMailObj.messageId || m.subject === newMailObj.subject && m.from === newMailObj.from && Math.abs(new Date(m.date).getTime() - new Date(newMailObj.date).getTime()) < 15000
                                }["MailScreen.useEffect.handleIncomingMailEvent.isDuplicate"]);
                                if (isDuplicate) return prev;
                                return {
                                    ...prev,
                                    Inbox: [
                                        newMailObj,
                                        ...curInbox
                                    ].slice(0, 50)
                                };
                            }
                        }["MailScreen.useEffect.handleIncomingMailEvent"]);
                        // Persist real-time incoming mail directly to SQLite
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageAdapter"].saveSingleEmail(targetEmail, 'Inbox', newMailObj).catch({
                            "MailScreen.useEffect.handleIncomingMailEvent": ()=>{}
                        }["MailScreen.useEffect.handleIncomingMailEvent"]);
                        // 2. Play audio notification chime
                        try {
                            const ctx = new (window.AudioContext || window.webkitAudioContext)();
                            const osc = ctx.createOscillator();
                            const gain = ctx.createGain();
                            osc.type = "sine";
                            osc.frequency.setValueAtTime(587.33, ctx.currentTime);
                            gain.gain.setValueAtTime(0.15, ctx.currentTime);
                            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
                            osc.connect(gain);
                            gain.connect(ctx.destination);
                            osc.start();
                            osc.stop(ctx.currentTime + 0.5);
                        } catch (e) {}
                        // 3. Trigger native device push notification & in-app toast
                        if ("object" !== "undefined" && "Notification" in window && Notification.permission === "granted") {
                            try {
                                const notif = new Notification(`📬 New Email from ${newMailObj.fromName}`, {
                                    body: newMailObj.subject,
                                    icon: "/favicon.ico",
                                    tag: `email-${newMailObj.uid}`
                                });
                                notif.onclick = ({
                                    "MailScreen.useEffect.handleIncomingMailEvent": ()=>{
                                        window.focus();
                                        setSelectedMail(newMailObj.uid);
                                    }
                                })["MailScreen.useEffect.handleIncomingMailEvent"];
                            } catch (e) {}
                        }
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`📬 New Email from ${newMailObj.fromName}: ${newMailObj.subject}`, {
                            duration: 4000
                        });
                        // 4. Update folder stats in state (+1 unread)
                        setFolderStats({
                            "MailScreen.useEffect.handleIncomingMailEvent": (prev)=>({
                                    ...prev,
                                    unread: ((prev === null || prev === void 0 ? void 0 : prev.unread) || 0) + 1,
                                    total: ((prev === null || prev === void 0 ? void 0 : prev.total) || 0) + 1
                                })
                        }["MailScreen.useEffect.handleIncomingMailEvent"]);
                    }
                    // Silent background fetch to sync exact IMAP/server UIDs
                    fetchMails(activeFolderRef.current || activeFolder, true);
                    fetchStats();
                }
            }["MailScreen.useEffect.handleIncomingMailEvent"];
            // 1. Direct Real-Time Mail Stream from MailForge Server (SSE — handles INBOX mail:new for recipients)
            const mailServerApi = ("TURBOPACK compile-time value", "https://mailapi.pingdart.com/api/v1") || 'https://mailapi.pingdart.com/api/v1';
            const mailToken = deviceMailToken || (("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('device_mail_token') : "TURBOPACK unreachable") || '';
            const sseStreamUrl = `${mailServerApi}/realtime/stream?email=${encodeURIComponent(targetEmail)}${mailToken ? `&token=${encodeURIComponent(mailToken)}` : ''}`;
            let eventSource = null;
            try {
                eventSource = new EventSource(sseStreamUrl);
                eventSource.onopen = ({
                    "MailScreen.useEffect": ()=>{
                        console.log('[MailScreen] ⚡ Direct MailForge Real-Time Stream Active for:', targetEmail);
                    }
                })["MailScreen.useEffect"];
                eventSource.onmessage = ({
                    "MailScreen.useEffect": (event)=>{
                        try {
                            const msg = JSON.parse(event.data);
                            if (msg.type === 'mail:new' || msg.event === 'mail:new') {
                                handleIncomingMailEvent(msg);
                            }
                        } catch (e) {}
                    }
                })["MailScreen.useEffect"];
                eventSource.onerror = ({
                    "MailScreen.useEffect": ()=>{
                        console.warn('[MailScreen] SSE stream reconnecting...');
                    }
                })["MailScreen.useEffect"];
            } catch (err) {
                console.warn('[MailScreen] SSE init error:', err === null || err === void 0 ? void 0 : err.message);
            }
            // 2. Node.js Socket.IO Connection — handles mail:refresh (Sent folder) + mail:new for recipients
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])()}/api/realtime/`, {
                path: "/socket.io",
                transports: [
                    "polling",
                    "websocket"
                ],
                upgrade: true,
                withCredentials: true
            });
            socket.on("connect", {
                "MailScreen.useEffect": ()=>{
                    socket.emit("join:mailbox", targetEmail);
                    if (password) {
                        socket.emit("subscribe:mail", {
                            email: targetEmail,
                            password: password,
                            folder: activeFolder
                        });
                    }
                }
            }["MailScreen.useEffect"]);
            // mail:new from Node.js socket — for recipients when sender is on same platform
            socket.on("mail:new", {
                "MailScreen.useEffect": (data)=>{
                    handleIncomingMailEvent(data);
                }
            }["MailScreen.useEffect"]);
            // mail:refresh — sender's Sent folder: silently re-fetch from IMAP (no duplicate optimistic add)
            socket.on("mail:refresh", {
                "MailScreen.useEffect": (data)=>{
                    let refreshFolder = (data === null || data === void 0 ? void 0 : data.folder) || activeFolderRef.current || activeFolder;
                    if ([
                        'sent items',
                        'sent'
                    ].includes(refreshFolder.toLowerCase())) {
                        refreshFolder = 'Sent';
                    }
                    fetchMails(refreshFolder, true);
                }
            }["MailScreen.useEffect"]);
            socket.on("mail:deleted", {
                "MailScreen.useEffect": (deletedUid)=>{
                    console.log("Mail deleted!", deletedUid);
                    setMails({
                        "MailScreen.useEffect": (prev)=>prev.filter({
                                "MailScreen.useEffect": (m)=>String(m.uid) !== String(deletedUid)
                            }["MailScreen.useEffect"])
                    }["MailScreen.useEffect"]);
                    if (String(selectedMail) === String(deletedUid)) setSelectedMail(null);
                    fetchStats();
                }
            }["MailScreen.useEffect"]);
            socket.on("mail:update", {
                "MailScreen.useEffect": (updatedMail)=>{
                    console.log("Mail updated!", updatedMail);
                    fetchMails(activeFolderRef.current || activeFolder, true);
                    fetchStats();
                }
            }["MailScreen.useEffect"]);
            // 3. Fallback Auto-Sync: Poll silently every 15s when active tab is visible
            const pollInterval = setInterval({
                "MailScreen.useEffect.pollInterval": ()=>{
                    if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
                        fetchMails(activeFolderRef.current || activeFolder, true);
                        fetchStats();
                    }
                }
            }["MailScreen.useEffect.pollInterval"], 15000);
            return ({
                "MailScreen.useEffect": ()=>{
                    clearInterval(pollInterval);
                    if (eventSource) {
                        try {
                            eventSource.close();
                        } catch (e) {}
                    }
                    socket.emit("unsubscribe:mail");
                    socket.disconnect();
                }
            })["MailScreen.useEffect"];
        }
    }["MailScreen.useEffect"], [
        activeFolder,
        targetEmail,
        password
    ]);
    const activeMail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MailScreen.useMemo[activeMail]": ()=>{
            if (!selectedMail) return null;
            const found = mails.find({
                "MailScreen.useMemo[activeMail].found": (m)=>String(m.uid) === String(selectedMail)
            }["MailScreen.useMemo[activeMail].found"]);
            if (found) return found;
            // Check other cached folders
            for (const fMails of Object.values(mailsCache)){
                const cached = fMails.find({
                    "MailScreen.useMemo[activeMail].cached": (m)=>String(m.uid) === String(selectedMail)
                }["MailScreen.useMemo[activeMail].cached"]);
                if (cached) return cached;
            }
            if (typeof selectedMail === 'string' && selectedMail.startsWith('temp_')) {
                return null;
            }
            // If mailId / openid is present from URL on page reload before mails array is fetched
            return {
                uid: selectedMail,
                id: selectedMail,
                subject: '',
                from: '',
                fromName: '',
                to: '',
                date: new Date().toISOString(),
                snippet: '',
                bodyText: '',
                bodyHtml: ''
            };
        }
    }["MailScreen.useMemo[activeMail]"], [
        mails,
        mailsCache,
        selectedMail
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            if (folderParam) {
                setActiveFolder(folderParam);
            }
        }
    }["MailScreen.useEffect"], [
        folderParam
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            if (mailIdParam) {
                setSelectedMail(mailIdParam);
            } else {
                setSelectedMail(null);
            }
        }
    }["MailScreen.useEffect"], [
        mailIdParam
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            if (selectedMail && activeFolder.toLowerCase() === 'drafts') {
                const draftMail = mails.find({
                    "MailScreen.useEffect.draftMail": (m)=>String(m.uid) === String(selectedMail)
                }["MailScreen.useEffect.draftMail"]);
                if (draftMail) {
                    setComposeData({
                        uid: draftMail.uid,
                        to: Array.isArray(draftMail.to) ? draftMail.to.join(', ') : draftMail.to || "",
                        subject: draftMail.subject || "",
                        body: draftMail.bodyText || draftMail.body || (typeof draftMail.bodyHtml === 'string' ? draftMail.bodyHtml.replace(/<[^>]*>/g, '') : '') || "",
                        cc: Array.isArray(draftMail.cc) ? draftMail.cc.join(', ') : draftMail.cc || "",
                        bcc: Array.isArray(draftMail.bcc) ? draftMail.bcc.join(', ') : draftMail.bcc || ""
                    });
                    setIsComposing(true);
                }
            }
        }
    }["MailScreen.useEffect"], [
        selectedMail,
        activeFolder,
        mails
    ]);
    const handleFolderChange = (folder)=>{
        activeFolderRef.current = folder;
        setActiveFolder(folder);
        setSelectedMail(null);
        const currentSearch = ("TURBOPACK compile-time truthy", 1) ? window.location.search : "TURBOPACK unreachable";
        const newParams = new URLSearchParams(currentSearch);
        newParams.set("tab", "Mail");
        newParams.set("folder", folder);
        newParams.delete("subtab");
        newParams.delete("child");
        newParams.delete("mailId");
        newParams.delete("openid");
        const currentPath = ("TURBOPACK compile-time truthy", 1) ? window.location.pathname : "TURBOPACK unreachable";
        window.history.replaceState(null, "", `${currentPath}?${newParams.toString()}`);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            const handleFolderSelectEvent = {
                "MailScreen.useEffect.handleFolderSelectEvent": (e)=>{
                    var _e_detail;
                    const f = (_e_detail = e.detail) === null || _e_detail === void 0 ? void 0 : _e_detail.folder;
                    if (!f) return;
                    if (f.toLowerCase() === "campaigns") {
                        // Direct state update — no re-dispatch to avoid event loop
                        setIsSettingsOpen(true);
                        setActiveSettingsChild("campaigns");
                        const newParams = new URLSearchParams(("TURBOPACK compile-time truthy", 1) ? window.location.search : "TURBOPACK unreachable");
                        newParams.set("tab", "Mail");
                        newParams.set("subtab", "mailsettings");
                        newParams.set("child", "campaigns");
                        if ("TURBOPACK compile-time truthy", 1) {
                            window.history.replaceState(null, "", `/user?${newParams.toString()}`);
                        }
                    } else if (f.toLowerCase() === "domainaccounts" || f.toLowerCase() === "domain_accounts") {
                        // Direct state update — no re-dispatch to avoid event loop
                        setIsSettingsOpen(true);
                        setActiveSettingsChild("domainaccounts");
                        const newParams = new URLSearchParams(("TURBOPACK compile-time truthy", 1) ? window.location.search : "TURBOPACK unreachable");
                        newParams.set("tab", "Mail");
                        newParams.set("subtab", "mailsettings");
                        newParams.set("child", "domainaccounts");
                        if ("TURBOPACK compile-time truthy", 1) {
                            window.history.replaceState(null, "", `/user?${newParams.toString()}`);
                        }
                    } else {
                        setIsSettingsOpen(false);
                        setActiveSettingsChild("");
                        handleFolderChange(f);
                    }
                }
            }["MailScreen.useEffect.handleFolderSelectEvent"];
            const handleOpenSettingsEventListener = {
                "MailScreen.useEffect.handleOpenSettingsEventListener": (e)=>{
                    var _e_detail;
                    const tab = (_e_detail = e.detail) === null || _e_detail === void 0 ? void 0 : _e_detail.tab;
                    if (!tab) return;
                    // ⚠️ Do NOT call handleOpenSettings here — it re-dispatches this same event causing an infinite loop.
                    // Instead, update state directly without triggering another dispatch.
                    setIsSettingsOpen(true);
                    setActiveSettingsChild(tab);
                    const newParams = new URLSearchParams(("TURBOPACK compile-time truthy", 1) ? window.location.search : "TURBOPACK unreachable");
                    newParams.set("tab", "Mail");
                    newParams.set("subtab", "mailsettings");
                    newParams.set("child", tab);
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.history.replaceState(null, "", `/user?${newParams.toString()}`);
                    }
                }
            }["MailScreen.useEffect.handleOpenSettingsEventListener"];
            window.addEventListener("mail:select_folder", handleFolderSelectEvent);
            window.addEventListener("mail:open_settings", handleOpenSettingsEventListener);
            return ({
                "MailScreen.useEffect": ()=>{
                    window.removeEventListener("mail:select_folder", handleFolderSelectEvent);
                    window.removeEventListener("mail:open_settings", handleOpenSettingsEventListener);
                }
            })["MailScreen.useEffect"];
        }
    }["MailScreen.useEffect"], []);
    const handleMailSelect = (id)=>{
        setSelectedMail(id);
        const newParams = new URLSearchParams(searchParams.toString());
        if (id) {
            newParams.set("mailId", id.toString());
            newParams.set("openid", id.toString());
        } else {
            newParams.delete("mailId");
            newParams.delete("openid");
        }
        const currentPath = ("TURBOPACK compile-time truthy", 1) ? window.location.pathname : "TURBOPACK unreachable";
        window.history.replaceState(null, "", `${currentPath}?${newParams.toString()}`);
    };
    // Hardware backpress handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailScreen.useEffect": ()=>{
            const handleAppGoBack = {
                "MailScreen.useEffect.handleAppGoBack": (e)=>{
                    if (isComposing) {
                        var _e_preventDefault, _e_detail_markHandled, _e_detail, _e_stopImmediatePropagation;
                        setIsComposing(false);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault = e.preventDefault) === null || _e_preventDefault === void 0 ? void 0 : _e_preventDefault.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail = e.detail) === null || _e_detail === void 0 ? void 0 : (_e_detail_markHandled = _e_detail.markHandled) === null || _e_detail_markHandled === void 0 ? void 0 : _e_detail_markHandled.call(_e_detail);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation === void 0 ? void 0 : _e_stopImmediatePropagation.call(e);
                    } else if (selectedMail) {
                        var _e_preventDefault1, _e_detail_markHandled1, _e_detail1, _e_stopImmediatePropagation1;
                        setSelectedMail(null);
                        handleMailSelect(null);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault1 = e.preventDefault) === null || _e_preventDefault1 === void 0 ? void 0 : _e_preventDefault1.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail1 = e.detail) === null || _e_detail1 === void 0 ? void 0 : (_e_detail_markHandled1 = _e_detail1.markHandled) === null || _e_detail_markHandled1 === void 0 ? void 0 : _e_detail_markHandled1.call(_e_detail1);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation1 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation1 === void 0 ? void 0 : _e_stopImmediatePropagation1.call(e);
                    } else if (isSettingsOpen) {
                        var _e_preventDefault2, _e_detail_markHandled2, _e_detail2, _e_stopImmediatePropagation2;
                        if (activeSettingsChild) {
                            setActiveSettingsChild("");
                        } else {
                            handleCloseSettings();
                        }
                        e === null || e === void 0 ? void 0 : (_e_preventDefault2 = e.preventDefault) === null || _e_preventDefault2 === void 0 ? void 0 : _e_preventDefault2.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail2 = e.detail) === null || _e_detail2 === void 0 ? void 0 : (_e_detail_markHandled2 = _e_detail2.markHandled) === null || _e_detail_markHandled2 === void 0 ? void 0 : _e_detail_markHandled2.call(_e_detail2);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation2 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation2 === void 0 ? void 0 : _e_stopImmediatePropagation2.call(e);
                    }
                }
            }["MailScreen.useEffect.handleAppGoBack"];
            const handleCloseReader = {
                "MailScreen.useEffect.handleCloseReader": ()=>{
                    setSelectedMail(null);
                    handleMailSelect(null);
                }
            }["MailScreen.useEffect.handleCloseReader"];
            window.addEventListener("app:back_press", handleAppGoBack);
            window.addEventListener("mail:close_reader", handleCloseReader);
            return ({
                "MailScreen.useEffect": ()=>{
                    window.removeEventListener("app:back_press", handleAppGoBack);
                    window.removeEventListener("mail:close_reader", handleCloseReader);
                }
            })["MailScreen.useEffect"];
        }
    }["MailScreen.useEffect"], [
        isComposing,
        selectedMail,
        isSettingsOpen,
        activeSettingsChild
    ]);
    const handleToggleStar = async (uid, isStarred)=>{
        if (targetEmail) {
            setMails((prev)=>prev.map((m)=>m.uid === uid ? {
                        ...m,
                        isStarred
                    } : m));
            setMailsCache((prev)=>({
                    ...prev,
                    [activeFolder]: (prev[activeFolder] || []).map((m)=>m.uid === uid ? {
                            ...m,
                            isStarred
                        } : m)
                }));
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageAdapter"].updateEmailFlags(targetEmail, activeFolder, uid, {
                isStarred
            }).catch(()=>{});
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].toggleStar(uid, targetEmail, activeFolder, isStarred, password);
            } catch (e) {
                setMails((prev)=>prev.map((m)=>m.uid === uid ? {
                            ...m,
                            isStarred: !isStarred
                        } : m));
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageAdapter"].updateEmailFlags(targetEmail, activeFolder, uid, {
                    isStarred: !isStarred
                }).catch(()=>{});
            }
        }
    };
    const handleMoveMessage = async (uid, destFolder)=>{
        if (!targetEmail) return;
        const targetUidStr = String(uid);
        const movedMail = mails.find((m)=>String(m.uid) === targetUidStr);
        // 1. Instant Optimistic UI Update — remove from current folder list immediately
        setMails((prev)=>prev.filter((m)=>String(m.uid) !== targetUidStr));
        setMailsCache((prev)=>{
            const currentList = prev[activeFolder] || [];
            const destList = prev[destFolder] || [];
            const updatedCurrent = currentList.filter((m)=>String(m.uid) !== targetUidStr);
            const updatedDest = movedMail ? [
                {
                    ...movedMail,
                    folder: destFolder
                },
                ...destList
            ] : destList;
            return {
                ...prev,
                [activeFolder]: updatedCurrent,
                [destFolder]: updatedDest
            };
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageAdapter"].deleteEmail(targetEmail, activeFolder, uid).catch(()=>{});
        if (movedMail) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageAdapter"].saveSingleEmail(targetEmail, destFolder, {
                ...movedMail,
                folder: destFolder
            }).catch(()=>{});
        }
        if (String(selectedMail) === targetUidStr) {
            handleMailSelect(null);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(destFolder === 'Archive' ? "Email archived" : `Moved to ${destFolder}`);
        // 2. Perform network call in background without blocking UI or blinking loading state
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].moveMessage(uid, targetEmail, activeFolder, destFolder, password);
            fetchMails(activeFolder, true); // Silent background sync
            fetchStats();
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Failed to move email: " + (err.message || "Network error"));
            if (movedMail) {
                setMails((prev)=>[
                        movedMail,
                        ...prev
                    ]);
                fetchMails(activeFolder, true);
            }
        }
    };
    const handleDeleteMessage = async (uid)=>{
        if (!targetEmail) return;
        const targetUidStr = String(uid);
        const deletedMail = mails.find((m)=>String(m.uid) === targetUidStr);
        const folderLower = activeFolder.toLowerCase();
        const isInTrash = folderLower === 'trash' || folderLower === 'bin' || folderLower === 'deleted items';
        // 1. Mark UID in persistent tombstone store & memory ref so background re-fetches and reload NEVER bring it back
        recentlyDeletedUidsRef.current.add(targetUidStr);
        addPersistentDeletedUids(targetEmail, [
            targetUidStr
        ]);
        setTimeout(()=>{
            recentlyDeletedUidsRef.current.delete(targetUidStr);
        }, 60000);
        // 2. Instant Optimistic UI Update — remove immediately from list & cache across ALL folders
        setMails((prev)=>prev.filter((m)=>String(m.uid) !== targetUidStr));
        setMailsCache((prev)=>{
            const next = {};
            for (const [f, list] of Object.entries(prev)){
                next[f] = Array.isArray(list) ? list.filter((m)=>String(m.uid) !== targetUidStr) : list;
            }
            try {
                if ("TURBOPACK compile-time truthy", 1) {
                    localStorage.setItem(`pingdart_mail_cache_${targetEmail}`, JSON.stringify(next));
                }
            } catch (_) {}
            return next;
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageAdapter"].deleteEmail(targetEmail, activeFolder, uid).catch(()=>{});
        if (String(selectedMail) === targetUidStr) {
            handleMailSelect(null);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(isInTrash ? "Email permanently deleted" : "Email moved to Trash");
        // 3. Network call — pass folder & permanent flag
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].deleteMessage(uid, targetEmail, password, activeFolder, isInTrash);
            setTimeout(()=>{
                fetchMails(activeFolder, true);
                fetchStats();
            }, 1500);
        } catch (err) {
            recentlyDeletedUidsRef.current.delete(targetUidStr);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Failed to delete email: " + (err.message || "Network error"));
            if (deletedMail) {
                setMails((prev)=>[
                        deletedMail,
                        ...prev
                    ]);
                fetchMails(activeFolder, true);
            }
        }
    };
    const handleMarkUnread = async (uid)=>{
        if (!targetEmail) return;
        const targetUidStr = String(uid);
        // 1. Instant Optimistic UI Update
        setMails((prev)=>prev.map((m)=>String(m.uid) === targetUidStr ? {
                    ...m,
                    isRead: false
                } : m));
        setMailsCache((prev)=>({
                ...prev,
                [activeFolder]: (prev[activeFolder] || []).map((m)=>String(m.uid) === targetUidStr ? {
                        ...m,
                        isRead: false
                    } : m)
            }));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageAdapter"].updateEmailFlags(targetEmail, activeFolder, uid, {
            isRead: false
        }).catch(()=>{});
        if (String(selectedMail) === targetUidStr) {
            handleMailSelect(null);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Marked as unread");
        // 2. Perform network call in background without blinking
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].markUnread(uid, targetEmail, activeFolder, password);
            fetchMails(activeFolder, true); // Silent background sync
            fetchStats();
        } catch (err) {
            setMails((prev)=>prev.map((m)=>String(m.uid) === targetUidStr ? {
                        ...m,
                        isRead: true
                    } : m));
        }
    };
    const handleMarkRead = (uid)=>{
        if (!targetEmail) return;
        const targetUidStr = String(uid);
        setMails((prev)=>prev.map((m)=>String(m.uid) === targetUidStr ? {
                    ...m,
                    isRead: true
                } : m));
        setMailsCache((prev)=>({
                ...prev,
                [activeFolder]: (prev[activeFolder] || []).map((m)=>String(m.uid) === targetUidStr ? {
                        ...m,
                        isRead: true
                    } : m)
            }));
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageAdapter"].updateEmailFlags(targetEmail, activeFolder, uid, {
            isRead: true
        }).catch(()=>{});
    };
    const handleMarkAllRead = async ()=>{
        if (!targetEmail || mails.length === 0) return;
        const unreadMails = mails.filter((m)=>!m.isRead);
        if (unreadMails.length === 0) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("All emails are already marked as read");
            return;
        }
        setMails((prev)=>prev.map((m)=>({
                    ...m,
                    isRead: true
                })));
        setMailsCache((prev)=>({
                ...prev,
                [activeFolder]: (prev[activeFolder] || []).map((m)=>({
                        ...m,
                        isRead: true
                    }))
            }));
        unreadMails.forEach((m)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageAdapter"].updateEmailFlags(targetEmail, activeFolder, m.uid, {
                isRead: true
            }).catch(()=>{});
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(`Marked ${unreadMails.length} email${unreadMails.length > 1 ? "s" : ""} as read`);
        try {
            await Promise.allSettled(unreadMails.map((m)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].markRead(m.uid, targetEmail, activeFolder, password)));
            fetchMails(activeFolder, true);
            fetchStats();
        } catch (_) {}
    };
    const handleDeleteMultiple = async (ids)=>{
        if (!targetEmail || !ids || ids.length === 0) return;
        const folderLower = activeFolder.toLowerCase();
        const isInTrash = folderLower === "trash" || folderLower === "bin" || folderLower === "deleted items";
        const idStrings = ids.map((id)=>String(id));
        const idSet = new Set(idStrings);
        // 1. Mark UIDs in persistent tombstone store & memory ref so background re-fetches and reload NEVER bring them back
        idStrings.forEach((idStr)=>{
            recentlyDeletedUidsRef.current.add(idStr);
            setTimeout(()=>recentlyDeletedUidsRef.current.delete(idStr), 60000);
        });
        addPersistentDeletedUids(targetEmail, idStrings);
        // 2. Instant Optimistic UI Update across all folders & write to localStorage
        setMails((prev)=>prev.filter((m)=>!idSet.has(String(m.uid))));
        setMailsCache((prev)=>{
            const next = {};
            for (const [f, list] of Object.entries(prev)){
                next[f] = Array.isArray(list) ? list.filter((m)=>!idSet.has(String(m.uid))) : list;
            }
            try {
                if ("TURBOPACK compile-time truthy", 1) {
                    localStorage.setItem(`pingdart_mail_cache_${targetEmail}`, JSON.stringify(next));
                }
            } catch (_) {}
            return next;
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$storageAdapter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["storageAdapter"].deleteMultipleEmails(targetEmail, activeFolder, ids).catch(()=>{});
        if (selectedMail && idSet.has(String(selectedMail))) {
            handleMailSelect(null);
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success(isInTrash ? `Permanently deleted ${ids.length} email${ids.length > 1 ? "s" : ""}` : `Moved ${ids.length} email${ids.length > 1 ? "s" : ""} to Trash`);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].bulkDeleteMessages(ids, targetEmail, password, activeFolder, isInTrash);
            if (!res || !res.success) {
                await Promise.allSettled(ids.map((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].deleteMessage(id, targetEmail, password, activeFolder, isInTrash)));
            }
            setTimeout(()=>{
                fetchMails(activeFolder, true);
                fetchStats();
            }, 1500);
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Failed to delete some emails");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full flex-1 overflow-hidden bg-white dark:bg-[#111827]",
        children: [
            (user === null || user === void 0 ? void 0 : user.is_account_inactive) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-300 p-3 text-center text-sm font-semibold border-b border-red-200 dark:border-red-900/60 flex-shrink-0 flex items-center justify-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5 shrink-0 text-red-500",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailScreen.tsx",
                            lineNumber: 1679,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailScreen.tsx",
                        lineNumber: 1678,
                        columnNumber: 11
                    }, this),
                    user.inactive_reason || `Warning: Your account (${user === null || user === void 0 ? void 0 : user.email}) is currently inactive (Free Plan Limit). Email services are disabled.`
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/MailScreen.tsx",
                lineNumber: 1677,
                columnNumber: 9
            }, this),
            (user === null || user === void 0 ? void 0 : user.mailbox_exists) === false && !(user === null || user === void 0 ? void 0 : user.is_account_inactive) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 text-center text-sm font-medium border-b border-red-100 dark:border-red-900/50 flex-shrink-0 flex items-center justify-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5 shrink-0",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailScreen.tsx",
                            lineNumber: 1687,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailScreen.tsx",
                        lineNumber: 1686,
                        columnNumber: 11
                    }, this),
                    "Warning: Your Mailbox could not be found in Stalwart Mail Server. Email services may not function correctly. Please contact support."
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/MailScreen.tsx",
                lineNumber: 1685,
                columnNumber: 9
            }, this),
            (()=>{
                if (!isDomainAdmin) return null;
                const alert = getDnsAlert();
                if (!alert) return null;
                const isError = alert.type === 'error';
                // ── Android / iOS native app: floating icon button → center popup ──
                if (isMobileNative) {
                    if (selectedMail || isComposing) return null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            if (alert.domain) setSelectedDnsDomain(alert.domain);
                            setIsDnsDialogOpen(true);
                        },
                        "aria-label": "DNS alert – tap for details",
                        className: [
                            "fixed bottom-[calc(8rem+env(safe-area-inset-bottom,0px))] right-4 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-xl",
                            "transition-transform active:scale-90 animate-pulse",
                            isError ? "bg-red-500 text-white" : "bg-yellow-400 text-yellow-900"
                        ].join(' '),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-6 h-6",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2.5,
                                d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                lineNumber: 1717,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailScreen.tsx",
                            lineNumber: 1716,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailScreen.tsx",
                        lineNumber: 1702,
                        columnNumber: 13
                    }, this);
                }
                // ── Web: top banner ──
                if (alert.type === 'error') {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-450 p-2.5 text-xs font-medium border-b border-red-100 dark:border-red-950/50 flex-shrink-0 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 shrink-0 text-red-500",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                            lineNumber: 1729,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                        lineNumber: 1728,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: alert.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                        lineNumber: 1731,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                lineNumber: 1727,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (alert.domain) setSelectedDnsDomain(alert.domain);
                                            setIsDnsDialogOpen(true);
                                        },
                                        className: "text-red-800 dark:text-red-200 bg-red-200/50 dark:bg-red-800/50 hover:bg-red-200 dark:hover:bg-red-800 px-2.5 py-0.5 rounded text-xs font-bold transition-colors cursor-pointer",
                                        children: "View DNS Details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                        lineNumber: 1734,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsDnsDismissed(true),
                                        className: "text-red-400 hover:text-red-600 p-0.5 cursor-pointer",
                                        title: "Dismiss",
                                        children: "✕"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                        lineNumber: 1743,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                lineNumber: 1733,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/MailScreen.tsx",
                        lineNumber: 1726,
                        columnNumber: 13
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 px-3 py-1.5 text-xs font-medium border-b border-yellow-200 dark:border-yellow-900/50 flex-shrink-0 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-3.5 h-3.5 shrink-0 text-yellow-500",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                        lineNumber: 1755,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                    lineNumber: 1754,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "leading-snug truncate",
                                    children: alert.message
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                    lineNumber: 1757,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/MailScreen.tsx",
                            lineNumber: 1753,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (alert.domain) setSelectedDnsDomain(alert.domain);
                                        setIsDnsDialogOpen(true);
                                    },
                                    className: "text-yellow-800 dark:text-yellow-200 bg-yellow-200/50 dark:bg-yellow-800/50 hover:bg-yellow-200 dark:hover:bg-yellow-800 px-2.5 py-0.5 rounded text-xs font-bold transition-colors cursor-pointer",
                                    children: "View DNS Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                    lineNumber: 1760,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsDnsDismissed(true),
                                    className: "text-yellow-500 hover:text-yellow-700 p-0.5 cursor-pointer",
                                    title: "Dismiss",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                    lineNumber: 1769,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/MailScreen.tsx",
                            lineNumber: 1759,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/MailScreen.tsx",
                    lineNumber: 1752,
                    columnNumber: 11
                }, this);
            })(),
            ((folderStats === null || folderStats === void 0 ? void 0 : folderStats.isFull) || (folderStats === null || folderStats === void 0 ? void 0 : folderStats.quotaUsed) >= ((folderStats === null || folderStats === void 0 ? void 0 : folderStats.quota) || 1073741824) * 0.95 || ((_this7 = user) === null || _this7 === void 0 ? void 0 : _this7.storageFull)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-amber-500/10 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200 px-4 py-2.5 text-xs font-semibold border-b border-amber-500/30 flex-shrink-0 flex items-center justify-between shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-6 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                    lineNumber: 1782,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                lineNumber: 1781,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "leading-snug truncate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "⚠️ Storage Full Warning:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                        lineNumber: 1785,
                                        columnNumber: 15
                                    }, this),
                                    " You received new email(s), but your mailbox storage is FULL (",
                                    (((folderStats === null || folderStats === void 0 ? void 0 : folderStats.quotaUsed) || (folderStats === null || folderStats === void 0 ? void 0 : folderStats.quota_used) || 1073741824) / 1073741824).toFixed(1),
                                    " GB / ",
                                    (((folderStats === null || folderStats === void 0 ? void 0 : folderStats.quota) || 1073741824) / 1073741824).toFixed(1),
                                    " GB used). Please upgrade your storage plan or delete old emails."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                lineNumber: 1784,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/MailScreen.tsx",
                        lineNumber: 1780,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                const newParams = new URLSearchParams(("TURBOPACK compile-time truthy", 1) ? window.location.search : "TURBOPACK unreachable");
                                newParams.set("tab", "Settings");
                                newParams.set("section", "subscription");
                                if ("TURBOPACK compile-time truthy", 1) {
                                    window.history.replaceState(null, "", `/user?${newParams.toString()}`);
                                    window.dispatchEvent(new Event("popstate"));
                                }
                            },
                            className: "bg-amber-600 hover:bg-amber-700 active:scale-95 text-white px-3 py-1 rounded-lg text-xs font-bold transition-all shadow-sm",
                            children: "Upgrade Storage Plan"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailScreen.tsx",
                            lineNumber: 1789,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailScreen.tsx",
                        lineNumber: 1788,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/MailScreen.tsx",
                lineNumber: 1779,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-full flex-1 overflow-hidden",
                children: [
                    (()=>{
                        const hasChildSelected = Boolean(activeSettingsChild);
                        if (isSettingsOpen) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-full md:w-auto flex flex-col h-full ${hasChildSelected ? "hidden md:flex" : "flex"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$MailSettingsSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailSettingsSidebar"], {
                                    user: user,
                                    activeTab: activeSettingsChild,
                                    onCloseSettings: handleCloseSettings,
                                    onBack: handleCloseSettings,
                                    onSelectTab: (key)=>{
                                        setActiveSettingsChild(key);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                    lineNumber: 1815,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                lineNumber: 1814,
                                columnNumber: 15
                            }, this);
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `w-full md:w-auto flex flex-col h-full ${selectedMail || isComposing ? "hidden md:flex" : "flex"}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$MailList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MailList"], {
                                filteredMails: mails,
                                isLoading: isLoading,
                                error: error,
                                activeFolder: activeFolder,
                                setActiveFolder: handleFolderChange,
                                activeCategory: activeCategory,
                                setActiveCategory: setActiveCategory,
                                selectedMail: selectedMail,
                                setSelectedMail: handleMailSelect,
                                isComposing: isComposing,
                                setIsComposing: (val)=>{
                                    if (val && ((domainMailAccess === null || domainMailAccess === void 0 ? void 0 : domainMailAccess.status) === 'suspended' || (domainMailAccess === null || domainMailAccess === void 0 ? void 0 : domainMailAccess.canSendSmtp) === false)) {
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error((domainMailAccess === null || domainMailAccess === void 0 ? void 0 : domainMailAccess.message) || "Sending email is suspended: your domain subscription is overdue. Please renew your plan.");
                                        setShowDomainBillingModal(true);
                                        return;
                                    }
                                    if (val) {
                                        setComposeData(null);
                                    }
                                    setIsComposing(val);
                                },
                                getAvatarColor: getAvatarColor,
                                onMarkAllRead: handleMarkAllRead,
                                onDeleteMultiple: handleDeleteMultiple,
                                onOpenSettings: handleOpenSettings,
                                password: password,
                                setPassword: setPassword,
                                onToggleStar: handleToggleStar,
                                onDelete: handleDeleteMessage,
                                onArchive: (uid)=>handleMoveMessage(uid, "Archive"),
                                onRestore: (uid)=>handleMoveMessage(uid, "Inbox"),
                                onMarkRead: handleMarkRead,
                                onMarkUnread: handleMarkUnread,
                                folderStats: folderStats,
                                connectedAccounts: connectedAccounts,
                                targetEmail: targetEmail,
                                setTargetEmail: (email)=>{
                                    if (!email || email.toLowerCase() === (targetEmailRef.current || '').toLowerCase()) return;
                                    // Prevent switching to an inactive connected account
                                    const matchedAcc = connectedAccounts.find((a)=>(a.email || '').toLowerCase() === email.toLowerCase());
                                    if (matchedAcc && matchedAcc.isActive === false) {
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(matchedAcc.inactiveReason ? `Cannot switch to ${email}: ${matchedAcc.inactiveReason}` : `Cannot switch to ${email}: this account is deactivated.`);
                                        return;
                                    }
                                    targetEmailRef.current = email;
                                    isMailSyncRunningRef.current = false;
                                    setTargetEmail(email);
                                    setSelectedMail(null);
                                    setActiveFolder("Inbox");
                                    setIsLoading(true);
                                    setError(null);
                                    const newCache = getCacheForEmail(email);
                                    setMailsCache(newCache);
                                    const inboxMails = newCache["Inbox"] || [];
                                    setMails(sortMailsByTimeDesc(inboxMails));
                                    if (inboxMails.length > 0) {
                                        setIsLoading(false);
                                    }
                                },
                                primaryEmail: (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || "",
                                isPrimaryActive: isPrimaryActive,
                                domainMailAccess: domainMailAccess,
                                onOpenDomainBilling: ()=>setShowDomainBillingModal(true),
                                onLoadMore: handleLoadMore,
                                hasMore: hasMoreMails,
                                isLoadingMore: isLoadingMore,
                                onBack: onBack
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                lineNumber: 1830,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailScreen.tsx",
                            lineNumber: 1829,
                            columnNumber: 13
                        }, this);
                    })(),
                    (()=>{
                        const isMailSettingsTab = isSettingsOpen;
                        const hasChildSelected = Boolean(activeSettingsChild);
                        const showRightOnMobile = selectedMail || isComposing || isMailSettingsTab && hasChildSelected;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex flex-col h-full flex-1 min-w-0 bg-white dark:bg-[#111827] ${!showRightOnMobile ? "hidden md:flex" : "flex w-full fixed inset-0 h-[100dvh] max-h-[100dvh] z-[60] overflow-hidden md:relative md:inset-auto md:z-auto md:h-full"}`,
                            children: isMailSettingsTab ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$MailSettingsModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailSettingsModal"], {
                                inline: true,
                                hideSidebar: true,
                                initialTab: activeSettingsChild || "imap",
                                onClose: handleCloseSettings,
                                onBack: ()=>{
                                    setActiveSettingsChild("");
                                    const newParams = new URLSearchParams(("TURBOPACK compile-time truthy", 1) ? window.location.search : "TURBOPACK unreachable");
                                    newParams.delete("child");
                                    newParams.delete("chaild");
                                    if ("TURBOPACK compile-time truthy", 1) {
                                        window.history.replaceState(null, "", `/user?${newParams.toString()}`);
                                    }
                                },
                                currentPassword: password,
                                onPasswordChange: setPassword
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                lineNumber: 1919,
                                columnNumber: 17
                            }, this) : isComposing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$MailCompose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailCompose"], {
                                setIsComposing: setIsComposing,
                                showCcBcc: showCcBcc,
                                setShowCcBcc: setShowCcBcc,
                                initialData: composeData,
                                password: password,
                                targetEmail: targetEmail,
                                defaultSignature: defaultSignature,
                                brandLogoUrl: brandLogoUrl,
                                suggestions: Array.from(new Set(mails.map((m)=>m.from).filter(Boolean))),
                                onSentOptimistic: (tempMail)=>{
                                    setMailsCache((prev)=>({
                                            ...prev,
                                            Sent: sortMailsByTimeDesc([
                                                tempMail,
                                                ...(prev['Sent'] || []).filter((m)=>String(m.uid) !== String(tempMail.uid))
                                            ])
                                        }));
                                    setMails((prev)=>sortMailsByTimeDesc([
                                            tempMail,
                                            ...prev.filter((m)=>String(m.uid) !== String(tempMail.uid))
                                        ]));
                                    handleFolderChange('Sent');
                                },
                                onSentComplete: (tempUid, success)=>{
                                    const newStatus = success ? "sent" : "failed";
                                    setMails((prev)=>sortMailsByTimeDesc(prev.map((m)=>String(m.uid) === String(tempUid) ? {
                                                ...m,
                                                status: newStatus
                                            } : m)));
                                    setMailsCache((prev)=>{
                                        const sentMails = prev['Sent'] || [];
                                        const updatedSent = sortMailsByTimeDesc(sentMails.map((m)=>String(m.uid) === String(tempUid) ? {
                                                ...m,
                                                status: newStatus
                                            } : m));
                                        return {
                                            ...prev,
                                            Sent: updatedSent
                                        };
                                    });
                                    if (success) {
                                        // Fetch fresh emails from IMAP to replace optimistic item with authoritative server email
                                        setTimeout(()=>{
                                            fetchMails('Sent', true);
                                        }, 1200);
                                    }
                                    fetchStats();
                                },
                                onDraftSaved: (draftObj)=>{
                                    if (draftObj) {
                                        setMailsCache((prev)=>{
                                            const existingDrafts = prev['Drafts'] || [];
                                            const updatedDrafts = existingDrafts.some((m)=>String(m.uid) === String(draftObj.uid)) ? existingDrafts.map((m)=>String(m.uid) === String(draftObj.uid) ? draftObj : m) : [
                                                draftObj,
                                                ...existingDrafts.filter((m)=>String(m.uid) !== String(draftObj.uid))
                                            ];
                                            return {
                                                ...prev,
                                                Drafts: updatedDrafts
                                            };
                                        });
                                        setMails((prev)=>{
                                            if (prev.some((m)=>String(m.uid) === String(draftObj.uid))) {
                                                return prev.map((m)=>String(m.uid) === String(draftObj.uid) ? draftObj : m);
                                            }
                                            return [
                                                draftObj,
                                                ...prev.filter((m)=>String(m.uid) !== String(draftObj.uid))
                                            ];
                                        });
                                    }
                                    handleFolderChange('Drafts');
                                    fetchMails('Drafts', true);
                                    fetchStats();
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                lineNumber: 1937,
                                columnNumber: 17
                            }, this) : activeMail ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$MailReader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailReader"], {
                                activeMail: activeMail,
                                activeFolder: activeFolder,
                                password: password,
                                targetEmail: targetEmail,
                                setSelectedMail: handleMailSelect,
                                replyText: replyText,
                                setReplyText: setReplyText,
                                getAvatarColor: getAvatarColor,
                                onReply: ()=>{
                                    if ((domainMailAccess === null || domainMailAccess === void 0 ? void 0 : domainMailAccess.status) === 'suspended' || (domainMailAccess === null || domainMailAccess === void 0 ? void 0 : domainMailAccess.canSendSmtp) === false) {
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Email sending is suspended: your domain subscription is overdue. Please renew your plan.");
                                        setShowDomainBillingModal(true);
                                        return;
                                    }
                                    const dateStr = activeMail.date ? new Date(activeMail.date).toLocaleString([], {
                                        dateStyle: 'medium',
                                        timeStyle: 'short'
                                    }) : '';
                                    const senderLabel = activeMail.from || 'Sender';
                                    const origContent = activeMail.bodyText || activeMail.snippet || '';
                                    const myEmail = targetEmail || (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || "";
                                    const replyRecipient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$MailReader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getReplyRecipient"])(activeMail, myEmail) || activeMail.from;
                                    setComposeData({
                                        to: replyRecipient,
                                        subject: activeMail.subject.toLowerCase().startsWith('re:') ? activeMail.subject : `Re: ${activeMail.subject}`,
                                        body: `\n\nOn ${dateStr}, ${senderLabel} wrote:\n> ${origContent.split('\n').join('\n> ')}`
                                    });
                                    setIsComposing(true);
                                },
                                onForward: ()=>{
                                    if ((domainMailAccess === null || domainMailAccess === void 0 ? void 0 : domainMailAccess.status) === 'suspended' || (domainMailAccess === null || domainMailAccess === void 0 ? void 0 : domainMailAccess.canSendSmtp) === false) {
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Email sending is suspended: your domain subscription is overdue. Please renew your plan.");
                                        setShowDomainBillingModal(true);
                                        return;
                                    }
                                    const dateStr = activeMail.date ? new Date(activeMail.date).toLocaleString([], {
                                        dateStyle: 'medium',
                                        timeStyle: 'short'
                                    }) : '';
                                    const origContent = activeMail.bodyText || activeMail.snippet || '';
                                    setComposeData({
                                        subject: activeMail.subject.toLowerCase().startsWith('fwd:') ? activeMail.subject : `Fwd: ${activeMail.subject}`,
                                        body: `\n\n--- Forwarded message ---\nFrom: ${activeMail.from}\nDate: ${dateStr}\nSubject: ${activeMail.subject}\n\n> ${origContent.split('\n').join('\n> ')}`
                                    });
                                    setIsComposing(true);
                                },
                                onDelete: ()=>handleDeleteMessage(activeMail.uid),
                                onArchive: ()=>handleMoveMessage(activeMail.uid, 'Archive'),
                                onMarkUnread: ()=>handleMarkUnread(activeMail.uid),
                                onToggleStar: (isStarred)=>handleToggleStar(activeMail.uid, isStarred),
                                onReportSpam: ()=>handleMoveMessage(activeMail.uid, 'Junk'),
                                fetchMails: fetchMails,
                                onMarkRead: (uid)=>handleMarkRead(uid)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                lineNumber: 2001,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex flex-col items-center justify-center bg-[#f8f9fa] text-[#8696a0]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-32 h-32 rounded-full bg-[#f0f2f5] dark:bg-[#1a1c20] flex items-center justify-center mb-6 shadow-inner",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$InboxIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InboxIcon"], {
                                            size: 48,
                                            className: "text-[#d1d7db]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                            lineNumber: 2053,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                        lineNumber: 2052,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[32px] font-light text-[#41525d] mb-3",
                                        children: "PingDart Mail"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                        lineNumber: 2055,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px] text-[#667781] dark:text-[#a0abb2]",
                                        children: "Select an email to read"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                        lineNumber: 2056,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/MailScreen.tsx",
                                lineNumber: 2051,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailScreen.tsx",
                            lineNumber: 1917,
                            columnNumber: 13
                        }, this);
                    })()
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/MailScreen.tsx",
                lineNumber: 1807,
                columnNumber: 7
            }, this),
            isDomainAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$DomainDnsDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomainDnsDialog"], {
                open: isDnsDialogOpen,
                onOpenChange: setIsDnsDialogOpen,
                domain: selectedDnsDomain || ((user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || '').split('@')[1] || null,
                domains: userDomains,
                dnsStatus: multiDnsStatus[selectedDnsDomain || ''] || null,
                onSelectDomain: (newDom)=>{
                    setSelectedDnsDomain(newDom);
                    checkSingleDomainDns(newDom);
                },
                onCheckDns: ()=>{
                    if (selectedDnsDomain) checkSingleDomainDns(selectedDnsDomain);
                }
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/MailScreen.tsx",
                lineNumber: 2064,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$DomainBillingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomainBillingModal"], {
                isOpen: showDomainBillingModal,
                onClose: ()=>setShowDomainBillingModal(false),
                domain: (targetEmail || (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || '').split('@')[1] || '',
                currentStatus: (domainMailAccess === null || domainMailAccess === void 0 ? void 0 : domainMailAccess.status) || 'active',
                onRenewSuccess: ()=>{
                    const email = targetEmail || (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email);
                    if (email) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$domainBillingApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domainBillingApi"].checkMailAccess(email).then((res)=>{
                            if (res) setDomainMailAccess(res);
                        }).catch(()=>{});
                    }
                    fetchMails(activeFolder, true);
                }
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/MailScreen.tsx",
                lineNumber: 2079,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/mail/MailScreen.tsx",
        lineNumber: 1675,
        columnNumber: 5
    }, this);
}
_s(MailScreen, "v6gLJH0I5V1ovRp3Lh0GdQ5KHig=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = MailScreen;
const __TURBOPACK__default__export__ = MailScreen;
var _c;
__turbopack_context__.k.register(_c, "MailScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_modules_mail_MailScreen_tsx_16d7878a._.js.map