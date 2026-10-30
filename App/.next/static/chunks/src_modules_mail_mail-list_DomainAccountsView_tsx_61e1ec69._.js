(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/mail/mail-list/DomainAccountsView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DomainAccountsView",
    ()=>DomainAccountsView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$mailPermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/mail-list/mailPermissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlusSignIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PlusSignIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PencilEdit01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PencilEdit01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Alert01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FlashIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Globe02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Add01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/StarIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Loading03Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Loading03Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-spreadsheet.mjs [app-client] (ecmascript) <export default as FileSpreadsheet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.mjs [app-client] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$CreateMailboxForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/mail-list/CreateMailboxForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$EditMailboxForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/mail-list/EditMailboxForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$ManageMailboxView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/mail-list/ManageMailboxView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$BulkCreateMailboxesModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/mail-list/BulkCreateMailboxesModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$DomainAccountPermissionsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/mail-list/DomainAccountPermissionsView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$MailSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/MailSettings.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$packagesApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/packagesApi.ts [app-client] (ecmascript)");
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
function DomainAccountsView({ showCreateMailboxForm, setShowCreateMailboxForm, mailboxError, mailboxSuccess, editingMailbox, setEditingMailbox, handleEditMailbox, setMailboxError, editMailboxName, setEditMailboxName, generateEditPassword, showEditMailboxPassword, setShowEditMailboxPassword, editMailboxPassword, setEditMailboxPassword, editMailboxQuota, setEditMailboxQuota, isLoadingMailboxes, handleCreateMailbox, newMailboxLocalPart, setNewMailboxLocalPart, domainName, checkingUser, userStatusMessage, newMailboxName, setNewMailboxName, generatePassword, showMailboxPassword, setShowMailboxPassword, newMailboxPassword, setNewMailboxPassword, newMailboxNotificationEmail, setNewMailboxNotificationEmail, newMailboxQuota, setNewMailboxQuota, newMailboxJobTitle, setNewMailboxJobTitle, newMailboxCompany, setNewMailboxCompany, mailboxes, displayedMailboxes, visibleMailboxesCount, handleStartEditMailbox, handleDeleteMailbox, searchQuery, user, primaryEmail, onOpenSettings, onRefreshMailboxes }) {
    var _subData_package, _subData_package1, _subData_lifecycle, _subData_lifecycle1, _subData_lifecycle2;
    _s();
    const topRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const [showBulkImportModal, setShowBulkImportModal] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [showMailSettings, setShowMailSettings] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    // ── Multi-Domain Management State ──────────────────────────────────────
    const [domains, setDomains] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState([]);
    const [loadingDomains, setLoadingDomains] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [showDomainsPanel, setShowDomainsPanel] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [addDomainInput, setAddDomainInput] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    const [addDomainLoading, setAddDomainLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [addDomainError, setAddDomainError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [addDomainSuccess, setAddDomainSuccess] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [domainActionLoading, setDomainActionLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [dnsViewingDomain, setDnsViewingDomain] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [copiedKey, setCopiedKey] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const copyToClipboard = (text, key)=>{
        navigator.clipboard.writeText(text);
        setCopiedKey(key);
        setTimeout(()=>setCopiedKey(null), 2000);
    };
    const fetchDomains = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "DomainAccountsView.useCallback[fetchDomains]": async ()=>{
            setLoadingDomains(true);
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/domains");
                const data = res.data;
                let list = [];
                if ((data === null || data === void 0 ? void 0 : data.success) && Array.isArray(data.data)) {
                    list = data.data;
                } else if (Array.isArray(data)) {
                    list = data;
                }
                // Ensure the currently active domainName is included if not in server list
                if (domainName && !list.some({
                    "DomainAccountsView.useCallback[fetchDomains]": (d)=>(d.domain_name || d.domain || "").toLowerCase() === domainName.toLowerCase()
                }["DomainAccountsView.useCallback[fetchDomains]"])) {
                    list.unshift({
                        id: "primary-current",
                        domain: domainName,
                        domain_name: domainName,
                        status: "Active",
                        active: 1,
                        isPrimary: true,
                        mailboxesCount: mailboxes.length
                    });
                }
                setDomains(list);
            } catch (e) {
                if (domainName) {
                    setDomains([
                        {
                            id: "primary-current",
                            domain: domainName,
                            domain_name: domainName,
                            status: "Active",
                            active: 1,
                            isPrimary: true,
                            mailboxesCount: mailboxes.length
                        }
                    ]);
                }
            } finally{
                setLoadingDomains(false);
            }
        }
    }["DomainAccountsView.useCallback[fetchDomains]"], [
        domainName,
        mailboxes.length
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "DomainAccountsView.useEffect": ()=>{
            fetchDomains();
        }
    }["DomainAccountsView.useEffect"], [
        fetchDomains
    ]);
    // View Mode: 'accounts' | 'permissions'
    const [viewMode, setViewMode] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("accounts");
    // Dropdown menu state
    const [showDropdownMenu, setShowDropdownMenu] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const dropdownRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const mobileDropdownRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "DomainAccountsView.useEffect": ()=>{
            const handleClickOutside = {
                "DomainAccountsView.useEffect.handleClickOutside": (e)=>{
                    const target = e.target;
                    if (dropdownRef.current && !dropdownRef.current.contains(target) && (!mobileDropdownRef.current || !mobileDropdownRef.current.contains(target))) {
                        setShowDropdownMenu(false);
                    }
                }
            }["DomainAccountsView.useEffect.handleClickOutside"];
            if (showDropdownMenu) {
                document.addEventListener("mousedown", handleClickOutside);
            }
            return ({
                "DomainAccountsView.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["DomainAccountsView.useEffect"];
        }
    }["DomainAccountsView.useEffect"], [
        showDropdownMenu
    ]);
    // User Plan Detection (Dynamic Domain Subscription)
    const [subData, setSubData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    const [effectivePlan, setEffectivePlan] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState({
        "DomainAccountsView.useState": ()=>{
            return (user === null || user === void 0 ? void 0 : user.plan) || (user === null || user === void 0 ? void 0 : user.package_name) || (user === null || user === void 0 ? void 0 : user.subscription_plan) || "Free";
        }
    }["DomainAccountsView.useState"]);
    const loadSubscription = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "DomainAccountsView.useCallback[loadSubscription]": async ()=>{
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$packagesApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["packagesApi"].getCurrentSubscription();
                if ((res === null || res === void 0 ? void 0 : res.success) && res.data) {
                    var _res_data_package;
                    setSubData(res.data);
                    const planName = ((_res_data_package = res.data.package) === null || _res_data_package === void 0 ? void 0 : _res_data_package.name) || (res.data.planId === "free" ? "Free" : res.data.planId) || "Free";
                    setEffectivePlan(planName);
                    if ("TURBOPACK compile-time truthy", 1) {
                        localStorage.setItem(`pingdart_domain_plan_${domainName}`, planName);
                        localStorage.setItem("pingdart_domain_plan", planName);
                    }
                }
            } catch (e) {
            // fallback
            }
        }
    }["DomainAccountsView.useCallback[loadSubscription]"], [
        domainName
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "DomainAccountsView.useEffect": ()=>{
            loadSubscription();
        }
    }["DomainAccountsView.useEffect"], [
        loadSubscription
    ]);
    const userPlan = effectivePlan;
    const isFreePlan = userPlan.toLowerCase() === "free" || !userPlan;
    var _subData_package_maxMailboxes;
    const maxMailboxes = (_subData_package_maxMailboxes = subData === null || subData === void 0 ? void 0 : (_subData_package = subData.package) === null || _subData_package === void 0 ? void 0 : _subData_package.maxMailboxes) !== null && _subData_package_maxMailboxes !== void 0 ? _subData_package_maxMailboxes : isFreePlan ? 1 : 9999;
    var _subData_package_maxDomains;
    const maxDomains = (_subData_package_maxDomains = subData === null || subData === void 0 ? void 0 : (_subData_package1 = subData.package) === null || _subData_package1 === void 0 ? void 0 : _subData_package1.maxDomains) !== null && _subData_package_maxDomains !== void 0 ? _subData_package_maxDomains : 1;
    const canAddMoreDomains = maxDomains > 1 || maxDomains >= 9999;
    const isUnlimitedDomains = maxDomains >= 9999;
    const handleAddDomain = async (e)=>{
        e.preventDefault();
        const cleaned = addDomainInput.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/\/$/, "");
        if (!cleaned || !cleaned.includes(".")) {
            setAddDomainError("Enter a valid domain name, e.g. company.com");
            return;
        }
        if (domains.some((d)=>(d.domain_name || d.domain || "").toLowerCase() === cleaned)) {
            setAddDomainError(`Domain "${cleaned}" is already added to your account.`);
            return;
        }
        if (!isUnlimitedDomains && domains.length >= maxDomains) {
            setAddDomainError(`Plan limit reached: Your ${userPlan} Plan allows up to ${maxDomains} domain${maxDomains > 1 ? "s" : ""}. Please upgrade your plan to connect more domains.`);
            return;
        }
        setAddDomainLoading(true);
        setAddDomainError(null);
        setAddDomainSuccess(null);
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/domains", {
                domain: cleaned
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                setAddDomainSuccess(`✅ Domain "${cleaned}" added successfully! Configure the DNS records below to activate email routing.`);
                setAddDomainInput("");
                setDnsViewingDomain(cleaned);
                fetchDomains();
            } else {
                var _res_data1;
                setAddDomainError(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.message) || "Failed to add domain.");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            setAddDomainError((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || (err === null || err === void 0 ? void 0 : err.message) || "Failed to add domain.");
        } finally{
            setAddDomainLoading(false);
        }
    };
    const handleSetPrimary = async (targetDomain)=>{
        setDomainActionLoading(`primary-${targetDomain}`);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/domains/${encodeURIComponent(targetDomain)}/primary`, {});
            fetchDomains();
        } catch (e) {
        // ignore
        } finally{
            setDomainActionLoading(null);
        }
    };
    const handleDeleteDomain = async (id, targetDomain)=>{
        if (!window.confirm(`Remove domain "${targetDomain}"? This cannot be undone.`)) return;
        setDomainActionLoading(`delete-${id}`);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/domains/${id}`);
            fetchDomains();
        } catch (err) {
            var _err_response_data, _err_response;
            alert((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to remove domain.");
        } finally{
            setDomainActionLoading(null);
        }
    };
    const mainEmail = (primaryEmail || (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || "").toLowerCase();
    // Find index of primary email in mailboxes array
    const primaryIndex = mailboxes.findIndex((mb)=>mb.email && mb.email.toLowerCase() === mainEmail);
    const activeCount = Math.min(mailboxes.length, maxMailboxes);
    const lockedCount = Math.max(0, mailboxes.length - maxMailboxes);
    const isAtPlanLimit = mailboxes.length >= maxMailboxes;
    const isDomainAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$mailPermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasDomainAccountsAccess"])(user);
    const canCreateMailbox = Boolean(isDomainAdmin || (user === null || user === void 0 ? void 0 : user.can_create_mailboxes) || (user === null || user === void 0 ? void 0 : user.can_manage_domain_accounts) || (user === null || user === void 0 ? void 0 : user.campaign_role) === "admin" || (user === null || user === void 0 ? void 0 : user.campaign_role) === "manager");
    const handleUpgradeClick = ()=>{
        if (onOpenSettings) {
            onOpenSettings("subscription");
        } else {
            window.location.href = "/user?tab=Mail&subtab=subscription";
        }
    };
    const handleCreateAccountClick = ()=>{
        if (!canCreateMailbox) {
            var _topRef_current;
            setMailboxError("Permission denied: You do not have permission to create mailboxes. Contact your domain administrator.");
            (_topRef_current = topRef.current) === null || _topRef_current === void 0 ? void 0 : _topRef_current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            return;
        }
        if (isAtPlanLimit) {
            var _topRef_current1;
            setMailboxError(`⚠️ Plan Limit Reached: Your ${userPlan} Plan allows up to ${maxMailboxes} active mailbox. Upgrade your plan to create more email accounts.`);
            (_topRef_current1 = topRef.current) === null || _topRef_current1 === void 0 ? void 0 : _topRef_current1.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            return;
        }
        setShowCreateMailboxForm(!showCreateMailboxForm);
        if (!showCreateMailboxForm) {
            setEditingMailbox(null);
        }
    };
    const handleBulkImportClick = ()=>{
        if (!canCreateMailbox) {
            var _topRef_current;
            setMailboxError("Permission denied: You do not have permission to create mailboxes. Contact your domain administrator.");
            (_topRef_current = topRef.current) === null || _topRef_current === void 0 ? void 0 : _topRef_current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            return;
        }
        if (isAtPlanLimit) {
            var _topRef_current1;
            setMailboxError(`⚠️ Plan Limit Reached: Your ${userPlan} Plan allows up to ${maxMailboxes} active mailbox. Upgrade your plan to import or create additional accounts.`);
            (_topRef_current1 = topRef.current) === null || _topRef_current1 === void 0 ? void 0 : _topRef_current1.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
            return;
        }
        setShowBulkImportModal(true);
    };
    const handleEditClick = (mb)=>{
        handleStartEditMailbox(mb);
        // Smoothly scroll to top so the Edit form is immediately visible
        setTimeout(()=>{
            var _topRef_current;
            (_topRef_current = topRef.current) === null || _topRef_current === void 0 ? void 0 : _topRef_current.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 50);
    };
    const isEditingActive = editingMailbox ? !isFreePlan || editingMailbox.email.toLowerCase() === mainEmail || primaryIndex < 0 && mailboxes.indexOf(editingMailbox) === 0 : true;
    // Managing Mailbox State (Opened in same place screen)
    const [managingMailbox, setManagingMailbox] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(null);
    // Search & Pagination state for Domain Accounts (> 10 items)
    const [internalSearchQuery, setInternalSearchQuery] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState("");
    const [currentPage, setCurrentPage] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(1);
    const ITEMS_PER_PAGE = 10;
    const activeSearch = (internalSearchQuery || searchQuery || "").trim().toLowerCase();
    const filteredMailboxes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "DomainAccountsView.useMemo[filteredMailboxes]": ()=>{
            if (!activeSearch) return displayedMailboxes;
            return displayedMailboxes.filter({
                "DomainAccountsView.useMemo[filteredMailboxes]": (mb)=>mb.email.toLowerCase().includes(activeSearch) || mb.name && mb.name.toLowerCase().includes(activeSearch)
            }["DomainAccountsView.useMemo[filteredMailboxes]"]);
        }
    }["DomainAccountsView.useMemo[filteredMailboxes]"], [
        displayedMailboxes,
        activeSearch
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "DomainAccountsView.useEffect": ()=>{
            setCurrentPage(1);
        }
    }["DomainAccountsView.useEffect"], [
        activeSearch,
        displayedMailboxes.length
    ]);
    const totalPages = Math.ceil(filteredMailboxes.length / ITEMS_PER_PAGE);
    const shouldPaginate = displayedMailboxes.length > 10 || mailboxes.length > 10;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedMailboxes = shouldPaginate ? filteredMailboxes.slice(startIndex, startIndex + ITEMS_PER_PAGE) : filteredMailboxes;
    // Render dedicated in-place Manage Mailbox Screen
    if (managingMailbox) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: topRef,
            className: `flex flex-col h-full w-full ${isNative || isMobile ? "space-y-2.5" : "p-4 sm:p-5 space-y-5"} text-slate-800 dark:text-slate-200`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$ManageMailboxView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ManageMailboxView"], {
                mailbox: managingMailbox,
                onBack: ()=>setManagingMailbox(null),
                isPrimary: Boolean(managingMailbox.email && managingMailbox.email.toLowerCase() === mainEmail),
                user: user,
                domainName: domainName || (managingMailbox.email ? managingMailbox.email.split("@")[1] : ""),
                onMailboxUpdated: ()=>{
                // refresh data if needed
                }
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                lineNumber: 446,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
            lineNumber: 441,
            columnNumber: 7
        }, this);
    }
    // Render dedicated in-place Domain Account Permissions Screen
    if (viewMode === "permissions") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: topRef,
            className: `flex flex-col h-full w-full ${isNative || isMobile ? "space-y-2.5" : "p-4 sm:p-5 space-y-5"} text-slate-800 dark:text-slate-200`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$DomainAccountPermissionsView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DomainAccountPermissionsView"], {
                onBack: ()=>setViewMode("accounts"),
                domainName: domainName || (primaryEmail ? primaryEmail.split("@")[1] : ""),
                mailboxes: mailboxes,
                currentUser: user,
                onRefreshMailboxes: onRefreshMailboxes
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                lineNumber: 468,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
            lineNumber: 463,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: topRef,
        className: `flex flex-col h-full w-full ${isNative || isMobile ? "space-y-2.5" : "p-4 sm:p-5 space-y-5"} text-slate-800 dark:text-slate-200`,
        children: [
            isNative || isMobile ? /* Native Mobile Header Banner */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2.5 p-3 bg-gradient-to-r from-indigo-50/90 to-blue-50/70 dark:from-indigo-950/40 dark:to-slate-900/60 border border-indigo-100/80 dark:border-indigo-900/40 rounded-xl shadow-2xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-lg bg-indigo-600/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 494,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 493,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-black text-slate-900 dark:text-white truncate",
                                                children: "Domain Accounts"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 497,
                                                columnNumber: 17
                                            }, this),
                                            domainName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate",
                                                children: domainName
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 501,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 496,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 492,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border whitespace-nowrap ${isFreePlan ? "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700" : "bg-indigo-100/80 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800"}`,
                                        children: [
                                            userPlan.toUpperCase(),
                                            " PLAN"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 508,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap",
                                        children: [
                                            "(",
                                            activeCount,
                                            "/",
                                            mailboxes.length,
                                            " active)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 516,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 507,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 491,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 pt-1 border-t border-indigo-100/60 dark:border-indigo-900/40",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleBulkImportClick,
                                className: "flex-1 flex items-center justify-center gap-1.5 h-9 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-lg transition-all shadow-sm shadow-emerald-600/20 active:scale-95",
                                title: "Bulk create accounts using Excel / CSV",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 530,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "whitespace-nowrap",
                                        children: "Bulk Excel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 531,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 524,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleCreateAccountClick,
                                className: "flex-1 flex items-center justify-center gap-1.5 h-9 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-bold rounded-lg transition-all shadow-sm shadow-indigo-600/20 active:scale-95",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlusSignIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlusSignIcon"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 538,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "whitespace-nowrap",
                                        children: showCreateMailboxForm ? "Close Form" : "Create Account"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 539,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 533,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                ref: mobileDropdownRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowDropdownMenu(!showDropdownMenu),
                                        className: `w-9 h-9 rounded-lg border transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95 shrink-0 ${showDropdownMenu ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400" : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"}`,
                                        title: "Account Options & Permissions",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 555,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 546,
                                        columnNumber: 15
                                    }, this),
                                    showDropdownMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 top-full mt-1.5 w-60 bg-white dark:bg-[#151d2a] border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl z-50 py-1.5 animate-in fade-in zoom-in-95 duration-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3 py-1.5 border-b border-slate-100 dark:border-slate-800/80 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block",
                                                        children: "Domain Options"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 561,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-semibold text-slate-700 dark:text-slate-300 truncate block",
                                                        children: [
                                                            "@",
                                                            domainName || "Domain"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 560,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setShowDropdownMenu(false);
                                                    setViewMode("permissions");
                                                },
                                                className: "w-full px-3 py-2 text-left hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-start gap-2.5 transition-colors cursor-pointer group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-indigo-600 group-hover:text-white transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                            lineNumber: 578,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 577,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold block",
                                                                children: "User Permissions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 581,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-slate-400 dark:text-slate-500 block leading-tight",
                                                                children: "Show all users & grant accounts permission"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 582,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 580,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 569,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setShowDropdownMenu(false);
                                                    setShowMailSettings(true);
                                                },
                                                className: "w-full px-3 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-start gap-2.5 transition-colors cursor-pointer group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                            lineNumber: 597,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 596,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold block",
                                                                children: "Mail Settings"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 600,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-slate-400 dark:text-slate-500 block leading-tight",
                                                                children: "Configure IMAP, SMTP & server"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 601,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 599,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 588,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setShowDropdownMenu(false);
                                                    setShowDomainsPanel((prev)=>!prev);
                                                },
                                                className: "w-full px-3 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-start gap-2.5 transition-colors cursor-pointer group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-indigo-600 group-hover:text-white transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                            lineNumber: 617,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 616,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-bold block",
                                                                        children: "Manage Domains"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 621,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    canAddMoreDomains && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-1 py-0.5 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-[9px] font-bold rounded",
                                                                        children: [
                                                                            "+",
                                                                            maxDomains > 1 ? maxDomains : "Multi"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 623,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 620,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-slate-400 dark:text-slate-500 block leading-tight",
                                                                children: canAddMoreDomains ? "Add & manage custom domains" : "View domains & DNS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 628,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 619,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 608,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setShowDropdownMenu(false);
                                                    if (onRefreshMailboxes) onRefreshMailboxes();
                                                },
                                                className: "w-full px-3 py-2 text-left hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-start gap-2.5 transition-colors cursor-pointer group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                            lineNumber: 643,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 642,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold block",
                                                                children: "Refresh Accounts"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 646,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-slate-400 dark:text-slate-500 block leading-tight",
                                                                children: "Sync accounts list from server"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 647,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 645,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 634,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 559,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 545,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 523,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                lineNumber: 489,
                columnNumber: 9
            }, this) : /* Desktop Web Header */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"], {
                                        size: 20,
                                        className: "text-indigo-600 dark:text-indigo-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 662,
                                        columnNumber: 15
                                    }, this),
                                    "Domain Accounts"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 661,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `px-2.5 py-0.5 rounded-full text-xs font-black uppercase tracking-wider border whitespace-nowrap ${isFreePlan ? "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700" : "bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-300 border-indigo-200/80 dark:border-indigo-800"}`,
                                children: [
                                    userPlan.toUpperCase(),
                                    " PLAN"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 665,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-slate-500 dark:text-slate-400 font-medium",
                                children: [
                                    "(",
                                    activeCount,
                                    " of ",
                                    mailboxes.length,
                                    " active",
                                    lockedCount > 0 ? ` • ${lockedCount} locked` : "",
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 673,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 660,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowDomainsPanel((prev)=>!prev),
                                className: `flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-[5px] transition-all cursor-pointer border ${showDomainsPanel ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-xs"}`,
                                title: "Manage and add custom domains",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"], {
                                        size: 15,
                                        className: showDomainsPanel ? "text-white" : "text-indigo-600 dark:text-indigo-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 688,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "whitespace-nowrap",
                                        children: [
                                            "Domains",
                                            domains.length > 0 ? ` (${domains.length}${isUnlimitedDomains ? "" : `/${maxDomains}`})` : ""
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 689,
                                        columnNumber: 15
                                    }, this),
                                    canAddMoreDomains && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 693,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 679,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleBulkImportClick,
                                className: "flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold rounded-[5px] transition-all shadow-md shadow-emerald-600/20 active:scale-95",
                                title: "Bulk create accounts using Excel / CSV",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$spreadsheet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSpreadsheet$3e$__["FileSpreadsheet"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 703,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "whitespace-nowrap",
                                        children: "Bulk Import (Excel)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 704,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 697,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCreateAccountClick,
                                className: "flex items-center gap-1.5 px-3.5 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-bold rounded-[5px] transition-all shadow-md shadow-indigo-600/20 active:scale-95",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlusSignIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlusSignIcon"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 710,
                                        columnNumber: 15
                                    }, this),
                                    "Create Account"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 706,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                ref: dropdownRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowDropdownMenu(!showDropdownMenu),
                                        className: `w-9 h-9 rounded-lg border transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95 shrink-0 ${showDropdownMenu ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400" : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200"}`,
                                        title: "Account Options & Permissions",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 725,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 716,
                                        columnNumber: 15
                                    }, this),
                                    showDropdownMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute right-0 top-full mt-1.5 w-64 bg-white dark:bg-[#151d2a] border border-slate-200 dark:border-slate-800 rounded-xl shadow-xl z-50 py-1.5 animate-in fade-in zoom-in-95 duration-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-3.5 py-2 border-b border-slate-100 dark:border-slate-800/80 mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block",
                                                        children: "Domain Options"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 731,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-slate-800 dark:text-slate-200 truncate block",
                                                        children: [
                                                            "@",
                                                            domainName || "Domain"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 734,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 730,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setShowDropdownMenu(false);
                                                    setViewMode("permissions");
                                                },
                                                className: "w-full px-3.5 py-2.5 text-left hover:bg-indigo-50/80 dark:hover:bg-indigo-950/40 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-start gap-2.5 transition-colors cursor-pointer group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-indigo-600 group-hover:text-white transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                            lineNumber: 749,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 748,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold block",
                                                                children: "User Permissions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 752,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-slate-400 dark:text-slate-500 block leading-tight",
                                                                children: "Show all users & grant accounts permission"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 753,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 751,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 740,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setShowDropdownMenu(false);
                                                    setShowMailSettings(true);
                                                },
                                                className: "w-full px-3.5 py-2.5 text-left hover:bg-slate-100/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-start gap-2.5 transition-colors cursor-pointer group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                            lineNumber: 769,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 768,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold block",
                                                                children: "Mail Settings"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 772,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-slate-400 dark:text-slate-500 block leading-tight",
                                                                children: "Configure IMAP, SMTP & server"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 773,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 771,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 760,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setShowDropdownMenu(false);
                                                    setShowDomainsPanel((prev)=>!prev);
                                                },
                                                className: "w-full px-3.5 py-2.5 text-left hover:bg-slate-100/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-start gap-2.5 transition-colors cursor-pointer group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-indigo-600 group-hover:text-white transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                            lineNumber: 789,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 788,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-bold block",
                                                                        children: "Manage Domains"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 793,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    canAddMoreDomains && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "px-1.5 py-0.5 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 text-[9px] font-bold rounded",
                                                                        children: [
                                                                            "+",
                                                                            maxDomains > 1 ? maxDomains : "Multi"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 795,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 792,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-slate-400 dark:text-slate-500 block leading-tight",
                                                                children: canAddMoreDomains ? "Add & configure custom domains" : "View domains & DNS"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 800,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 791,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 780,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setShowDropdownMenu(false);
                                                    if (onRefreshMailboxes) onRefreshMailboxes();
                                                },
                                                className: "w-full px-3.5 py-2.5 text-left hover:bg-slate-100/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-start gap-2.5 transition-colors cursor-pointer group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                            lineNumber: 816,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 815,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-bold block",
                                                                children: "Refresh Accounts"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 819,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-slate-400 dark:text-slate-500 block leading-tight",
                                                                children: "Sync mailboxes from server"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 820,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 818,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 807,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 729,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 715,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 677,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                lineNumber: 659,
                columnNumber: 9
            }, this),
            ((subData === null || subData === void 0 ? void 0 : (_subData_lifecycle = subData.lifecycle) === null || _subData_lifecycle === void 0 ? void 0 : _subData_lifecycle.inGracePeriod) || (subData === null || subData === void 0 ? void 0 : (_subData_lifecycle1 = subData.lifecycle) === null || _subData_lifecycle1 === void 0 ? void 0 : _subData_lifecycle1.phase) === "expired") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-amber-50/90 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 rounded-[10px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                    lineNumber: 837,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 836,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-bold text-amber-900 dark:text-amber-200",
                                        children: [
                                            "Plan Expired — Grace Period Active (",
                                            (subData === null || subData === void 0 ? void 0 : (_subData_lifecycle2 = subData.lifecycle) === null || _subData_lifecycle2 === void 0 ? void 0 : _subData_lifecycle2.daysToGraceEnd) || 7,
                                            " days remaining)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 840,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-amber-800/90 dark:text-amber-300/80 leading-snug mt-0.5",
                                        children: "Your paid subscription expired. You have a 7-day grace period to renew. After 7 days, your workspace will auto-downgrade to the Free Plan (1 active mailbox) and extra mailboxes will be locked."
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 843,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 839,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 835,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleUpgradeClick,
                        className: "flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded-[5px] transition-all shadow-xs shrink-0 active:scale-95 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 852,
                                columnNumber: 13
                            }, this),
                            "Renew Plan"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 848,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                lineNumber: 834,
                columnNumber: 9
            }, this),
            isFreePlan && mailboxes.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 rounded-[10px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                    size: 17
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                    lineNumber: 863,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 862,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-bold text-slate-900 dark:text-slate-100",
                                        children: [
                                            "Free Plan Limit (1 Active Email • ",
                                            lockedCount,
                                            " Locked)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 866,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-slate-600 dark:text-slate-400 leading-snug mt-0.5",
                                        children: [
                                            "Your current plan includes 1 active primary mailbox (",
                                            mainEmail,
                                            "). The remaining ",
                                            lockedCount,
                                            " accounts are locked under the Free Plan quota. Upgrade to unlock all accounts."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 869,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 865,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 861,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleUpgradeClick,
                        className: "flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-[5px] transition-all shadow-xs shrink-0 active:scale-95 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 878,
                                columnNumber: 13
                            }, this),
                            "Upgrade Plan"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 874,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                lineNumber: 860,
                columnNumber: 9
            }, this),
            showDomainsPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#151d2a] border border-indigo-200/80 dark:border-indigo-900/50 rounded-[10px] shadow-sm p-4 sm:p-6 mb-5 space-y-5 animate-in fade-in zoom-in-98 duration-150",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 891,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 890,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-base font-bold text-slate-900 dark:text-white",
                                                        children: "Domain Management"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 895,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/80",
                                                        children: [
                                                            domains.length,
                                                            " / ",
                                                            isUnlimitedDomains ? "Unlimited" : maxDomains,
                                                            " Domains Used"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 898,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 894,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 dark:text-slate-400 mt-0.5",
                                                children: "Manage domains connected to your workspace. Create email accounts across any connected domain."
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 902,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 893,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 889,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setShowDomainsPanel(false),
                                className: "p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer",
                                title: "Close panel",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                    lineNumber: 913,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 907,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 888,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: canAddMoreDomains && (isUnlimitedDomains || domains.length < maxDomains) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleAddDomain,
                            className: "space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-xs font-semibold",
                                                    children: "https:// or @"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                    lineNumber: 923,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: addDomainInput,
                                                    onChange: (e)=>{
                                                        setAddDomainInput(e.target.value);
                                                        if (addDomainError) setAddDomainError(null);
                                                    },
                                                    placeholder: "e.g. myothercompany.com",
                                                    className: "w-full pl-28 pr-4 py-2.5 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-mono"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                    lineNumber: 926,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 922,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: addDomainLoading || !addDomainInput.trim(),
                                            className: "flex items-center justify-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 disabled:opacity-50 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-indigo-600/20 active:scale-95 shrink-0 cursor-pointer",
                                            children: [
                                                addDomainLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Loading03Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading03Icon"], {
                                                    size: 15,
                                                    className: "animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                    lineNumber: 943,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                    lineNumber: 945,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: addDomainLoading ? "Adding Domain..." : "Add Domain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                    lineNumber: 947,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 937,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                    lineNumber: 921,
                                    columnNumber: 17
                                }, this),
                                addDomainError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400 rounded-xl text-xs font-semibold border border-red-200/60 dark:border-red-900/40 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                            size: 15,
                                            className: "shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 953,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: addDomainError
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 954,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                    lineNumber: 952,
                                    columnNumber: 19
                                }, this),
                                addDomainSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 rounded-xl text-xs font-semibold border border-emerald-200/60 dark:border-emerald-900/40 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                            size: 15,
                                            className: "shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 959,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: addDomainSuccess
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 960,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                    lineNumber: 958,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                            lineNumber: 920,
                            columnNumber: 15
                        }, this) : !canAddMoreDomains ? /* Plan does not include multi-domain (e.g. Free plan) */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-gradient-to-r from-indigo-50/80 to-purple-50/80 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-200/70 dark:border-indigo-900/50 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-indigo-500/10 dark:bg-indigo-400/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 969,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 968,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-bold text-slate-900 dark:text-white",
                                                    children: [
                                                        "Single-Domain Plan (",
                                                        userPlan,
                                                        " Plan: 1 Domain Included)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                    lineNumber: 972,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-600 dark:text-slate-400 mt-0.5",
                                                    children: [
                                                        "Your current plan is configured for 1 primary domain (@",
                                                        domainName || "pingdart.com",
                                                        "). Upgrade to a multi-domain plan to attach additional custom email domains."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                    lineNumber: 975,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 971,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                    lineNumber: 967,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleUpgradeClick,
                                    className: "flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-bold rounded-lg transition-all shadow-sm shadow-indigo-600/20 shrink-0 cursor-pointer active:scale-95",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 985,
                                            columnNumber: 19
                                        }, this),
                                        "Upgrade to Add Domains"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                    lineNumber: 980,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                            lineNumber: 966,
                            columnNumber: 15
                        }, this) : /* Quota reached */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-8 h-8 rounded-lg bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Alert01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert01Icon"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 994,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 993,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-bold text-slate-900 dark:text-white",
                                                    children: [
                                                        "Domain Limit Reached (",
                                                        domains.length,
                                                        "/",
                                                        maxDomains,
                                                        " Domains)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                    lineNumber: 997,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] text-slate-600 dark:text-slate-400 mt-0.5",
                                                    children: [
                                                        "You have utilized all ",
                                                        maxDomains,
                                                        " custom domains allocated under your ",
                                                        userPlan,
                                                        " plan. Upgrade to Enterprise or add additional domain packs to connect more."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                    lineNumber: 1000,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 996,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                    lineNumber: 992,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleUpgradeClick,
                                    className: "flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition-all shadow-sm shrink-0 cursor-pointer active:scale-95",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 1010,
                                            columnNumber: 19
                                        }, this),
                                        "Upgrade Plan"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                    lineNumber: 1005,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                            lineNumber: 991,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 918,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500",
                                        children: [
                                            "Connected Domains (",
                                            domains.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 1020,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: fetchDomains,
                                        disabled: loadingDomains,
                                        className: "text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                size: 11,
                                                className: loadingDomains ? "animate-spin" : ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 1029,
                                                columnNumber: 17
                                            }, this),
                                            "Refresh"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 1023,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 1019,
                                columnNumber: 13
                            }, this),
                            loadingDomains && domains.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-8 flex flex-col items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Loading03Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading03Icon"], {
                                        size: 20,
                                        className: "animate-spin text-indigo-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 1036,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400",
                                        children: "Loading domains..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 1037,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 1035,
                                columnNumber: 15
                            }, this) : domains.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 text-center bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 text-xs text-slate-500",
                                children: "No custom domains connected yet. Add your first domain above."
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 1040,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-2.5",
                                children: domains.map((d, index)=>{
                                    const dName = (d.domain_name || d.domain || "").toLowerCase();
                                    const isPrimary = Boolean(d.isPrimary || (domainName ? dName === domainName.toLowerCase() : index === 0));
                                    const isDnsOpen = dnsViewingDomain === dName;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `border rounded-[10px] p-3.5 transition-all ${isPrimary ? "border-indigo-300 dark:border-indigo-800/80 bg-indigo-50/20 dark:bg-indigo-950/20" : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a2332] hover:border-slate-300 dark:hover:border-slate-700"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${isPrimary ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/20" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                    lineNumber: 1067,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 1061,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center gap-2 flex-wrap",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm font-bold text-slate-900 dark:text-white font-mono",
                                                                                children: [
                                                                                    "@",
                                                                                    dName
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                lineNumber: 1071,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            isPrimary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"], {
                                                                                        size: 10,
                                                                                        className: "fill-indigo-600 dark:fill-indigo-400"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                        lineNumber: 1076,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    "Primary"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                lineNumber: 1075,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `px-2 py-0.5 rounded-full text-[10px] font-bold ${d.status === "Active" || d.active === 1 ? "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"}`,
                                                                                children: d.status === "Active" || d.active === 1 ? "Active" : "Pending DNS"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                lineNumber: 1080,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 1070,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 block",
                                                                        children: d.mailboxesCount !== undefined ? `${d.mailboxesCount} email account${d.mailboxesCount === 1 ? "" : "s"}` : `Registered domain`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 1089,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 1069,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 1060,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 shrink-0 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setDnsViewingDomain(isDnsOpen ? null : dName),
                                                                className: "flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-lg transition-colors cursor-pointer",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "DNS Records"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 1104,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    isDnsOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                                        size: 13
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 1105,
                                                                        columnNumber: 42
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                        size: 13
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 1105,
                                                                        columnNumber: 68
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 1099,
                                                                columnNumber: 27
                                                            }, this),
                                                            !isPrimary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                disabled: domainActionLoading === `primary-${dName}`,
                                                                onClick: ()=>handleSetPrimary(dName),
                                                                className: "px-2.5 py-1.5 bg-slate-100 hover:bg-indigo-50 dark:bg-slate-800 dark:hover:bg-indigo-950/60 text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400 text-xs font-semibold rounded-lg transition-colors cursor-pointer",
                                                                children: domainActionLoading === `primary-${dName}` ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Loading03Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading03Icon"], {
                                                                    size: 13,
                                                                    className: "animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                    lineNumber: 1116,
                                                                    columnNumber: 33
                                                                }, this) : "Set Primary"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 1109,
                                                                columnNumber: 29
                                                            }, this),
                                                            !isPrimary && d.id !== "primary-current" && dName !== (domainName || "").toLowerCase() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                disabled: domainActionLoading === `delete-${d.id}`,
                                                                onClick: ()=>handleDeleteDomain(d.id || dName, dName),
                                                                className: "p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition-colors cursor-pointer",
                                                                title: `Remove ${dName}`,
                                                                children: domainActionLoading === `delete-${d.id}` ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Loading03Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Loading03Icon"], {
                                                                    size: 14,
                                                                    className: "animate-spin text-red-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                    lineNumber: 1132,
                                                                    columnNumber: 33
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                    lineNumber: 1134,
                                                                    columnNumber: 33
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 1124,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 1098,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 1058,
                                                columnNumber: 23
                                            }, this),
                                            isDnsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] font-bold text-slate-700 dark:text-slate-300",
                                                                children: [
                                                                    "Required DNS Records for @",
                                                                    dName
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 1145,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-slate-400",
                                                                children: "Add these records at your DNS registrar (GoDaddy, Cloudflare, etc.)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 1148,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 1144,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 gap-2 text-xs font-mono",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2.5 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-0.5 min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-[10px] font-bold",
                                                                                        children: "MX"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                        lineNumber: 1158,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-slate-500 dark:text-slate-400 text-[11px]",
                                                                                        children: "Host: @"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                        lineNumber: 1161,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-slate-500 dark:text-slate-400 text-[11px]",
                                                                                        children: "Priority: 10"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                        lineNumber: 1162,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                lineNumber: 1157,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-slate-900 dark:text-slate-200 font-semibold truncate text-[11px]",
                                                                                children: "mail.pingdart.com"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                lineNumber: 1164,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 1156,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>copyToClipboard("mail.pingdart.com", `mx-${dName}`),
                                                                        className: "px-2 py-1 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded text-[10px] font-sans font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1 cursor-pointer shrink-0",
                                                                        children: copiedKey === `mx-${dName}` ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                    size: 11,
                                                                                    className: "text-emerald-500"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                    lineNumber: 1175,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Copied"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                    lineNumber: 1176,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                    size: 11
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                    lineNumber: 1180,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Copy"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                    lineNumber: 1181,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 1168,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 1155,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2.5 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-0.5 min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold",
                                                                                        children: "TXT (SPF)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                        lineNumber: 1191,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-slate-500 dark:text-slate-400 text-[11px]",
                                                                                        children: "Host: @"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                        lineNumber: 1194,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                lineNumber: 1190,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-slate-900 dark:text-slate-200 font-semibold truncate text-[11px]",
                                                                                children: "v=spf1 include:_spf.pingdart.com -all"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                lineNumber: 1196,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 1189,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>copyToClipboard("v=spf1 include:_spf.pingdart.com -all", `spf-${dName}`),
                                                                        className: "px-2 py-1 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded text-[10px] font-sans font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1 cursor-pointer shrink-0",
                                                                        children: copiedKey === `spf-${dName}` ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                    size: 11,
                                                                                    className: "text-emerald-500"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                    lineNumber: 1207,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Copied"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                    lineNumber: 1208,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                    size: 11
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                    lineNumber: 1212,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Copy"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                    lineNumber: 1213,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 1200,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 1188,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2.5 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-0.5 min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "px-1.5 py-0.5 rounded bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-[10px] font-bold",
                                                                                        children: "TXT (DKIM)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                        lineNumber: 1223,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-slate-500 dark:text-slate-400 text-[11px]",
                                                                                        children: "Host: default._domainkey"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                        lineNumber: 1226,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                lineNumber: 1222,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-slate-900 dark:text-slate-200 font-semibold truncate text-[11px]",
                                                                                children: d.dkimTxt || "Auto-generated on mail server"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                lineNumber: 1228,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 1221,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    d.dkimTxt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>copyToClipboard(d.dkimTxt, `dkim-${dName}`),
                                                                        className: "px-2 py-1 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded text-[10px] font-sans font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1 cursor-pointer shrink-0",
                                                                        children: copiedKey === `dkim-${dName}` ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                    size: 11,
                                                                                    className: "text-emerald-500"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                    lineNumber: 1240,
                                                                                    columnNumber: 39
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Copied"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                    lineNumber: 1241,
                                                                                    columnNumber: 39
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                    size: 11
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                    lineNumber: 1245,
                                                                                    columnNumber: 39
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Copy"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                    lineNumber: 1246,
                                                                                    columnNumber: 39
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 1233,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 1220,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-2.5 bg-slate-50 dark:bg-slate-900/60 rounded-lg border border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-0.5 min-w-0",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center gap-2",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "px-1.5 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-[10px] font-bold",
                                                                                        children: "TXT (DMARC)"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                        lineNumber: 1257,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-slate-500 dark:text-slate-400 text-[11px]",
                                                                                        children: "Host: _dmarc"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                        lineNumber: 1260,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                lineNumber: 1256,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-slate-900 dark:text-slate-200 font-semibold truncate text-[11px]",
                                                                                children: [
                                                                                    "v=DMARC1; p=none; rua=mailto:admin@",
                                                                                    dName
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                lineNumber: 1262,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 1255,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>copyToClipboard(`v=DMARC1; p=none; rua=mailto:admin@${dName}`, `dmarc-${dName}`),
                                                                        className: "px-2 py-1 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded text-[10px] font-sans font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1 cursor-pointer shrink-0",
                                                                        children: copiedKey === `dmarc-${dName}` ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                                    size: 11,
                                                                                    className: "text-emerald-500"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                    lineNumber: 1273,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Copied"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                    lineNumber: 1274,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                                    size: 11
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                    lineNumber: 1278,
                                                                                    columnNumber: 37
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Copy"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                                    lineNumber: 1279,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 1266,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 1254,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 1153,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 1143,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, d.id || dName || index, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 1051,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 1044,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 1018,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                lineNumber: 886,
                columnNumber: 9
            }, this),
            mailboxError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3.5 bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-400 rounded-[5px] text-xs font-semibold border border-red-200/60 dark:border-red-900/40",
                children: mailboxError
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                lineNumber: 1297,
                columnNumber: 9
            }, this),
            mailboxSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3.5 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 rounded-[5px] text-xs font-semibold border border-emerald-200/60 dark:border-emerald-900/40",
                children: mailboxSuccess
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                lineNumber: 1302,
                columnNumber: 9
            }, this),
            editingMailbox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$EditMailboxForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditMailboxForm"], {
                editingMailbox: editingMailbox,
                handleEditMailbox: handleEditMailbox,
                setEditingMailbox: setEditingMailbox,
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
                isActiveAccount: isEditingActive,
                onUpgradeClick: handleUpgradeClick
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                lineNumber: 1308,
                columnNumber: 9
            }, this),
            showCreateMailboxForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    isFreePlan && mailboxes.length >= 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-slate-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 rounded-[5px] text-xs font-medium flex items-center justify-between gap-2 border border-slate-200 dark:border-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Note:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 1333,
                                        columnNumber: 17
                                    }, this),
                                    " Free plan permits 1 active account. Additional mailboxes will be created as inactive."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 1332,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleUpgradeClick,
                                className: "text-indigo-600 dark:text-indigo-400 font-bold shrink-0 text-[11px] hover:underline",
                                children: "Upgrade"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 1335,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 1331,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$CreateMailboxForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateMailboxForm"], {
                        handleCreateMailbox: handleCreateMailbox,
                        setShowCreateMailboxForm: setShowCreateMailboxForm,
                        setMailboxError: setMailboxError,
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
                        isLoadingMailboxes: isLoadingMailboxes
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 1343,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            isLoadingMailboxes && mailboxes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-12 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 1374,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-slate-400 font-medium",
                        children: "Loading domain mailboxes..."
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 1375,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                lineNumber: 1373,
                columnNumber: 9
            }, this) : displayedMailboxes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-10 bg-white dark:bg-[#151d2a] rounded-[10px] border border-slate-200/80 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs",
                children: searchQuery ? "No matching email accounts found." : "No email accounts found under this domain."
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                lineNumber: 1378,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `bg-white dark:bg-[#151d2a] rounded-[10px] border border-slate-200/80 dark:border-slate-800 shadow-xs ${isNative || isMobile ? "p-2 space-y-2" : "p-4 space-y-3"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100 dark:border-slate-800/80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider",
                                children: [
                                    "Domain Accounts (",
                                    filteredMailboxes.length,
                                    filteredMailboxes.length !== mailboxes.length ? ` of ${mailboxes.length}` : "",
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 1388,
                                columnNumber: 13
                            }, this),
                            (shouldPaginate || internalSearchQuery) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1 max-w-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                        size: 14,
                                        className: "absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 1395,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Search accounts...",
                                        value: internalSearchQuery,
                                        onChange: (e)=>setInternalSearchQuery(e.target.value),
                                        className: "w-full h-[42px] pl-8 pr-7 text-xs bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 rounded-[8px] text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 1396,
                                        columnNumber: 17
                                    }, this),
                                    internalSearchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setInternalSearchQuery(""),
                                        className: "absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-0.5",
                                        title: "Clear search",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                            size: 13
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 1409,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 1404,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 1394,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 1387,
                        columnNumber: 11
                    }, this),
                    filteredMailboxes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8 text-xs text-slate-500 dark:text-slate-400 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    'No domain accounts match "',
                                    activeSearch,
                                    '".'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 1419,
                                columnNumber: 15
                            }, this),
                            internalSearchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setInternalSearchQuery(""),
                                className: "px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-indigo-600 dark:text-indigo-400 rounded-md font-semibold text-xs transition-colors",
                                children: "Clear Search"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 1421,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 1418,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: paginatedMailboxes.map((mb)=>{
                            const originalIdx = mailboxes.findIndex((m)=>m.email && m.email.toLowerCase() === mb.email.toLowerCase());
                            const isPrimary = mb.email.toLowerCase() === mainEmail || primaryIndex < 0 && originalIdx === 0;
                            const isLockedByQuota = mb.isLocked !== undefined ? Boolean(mb.isLocked) : !isPrimary && originalIdx >= maxMailboxes;
                            const isActiveAccount = isPrimary || !isLockedByQuota;
                            const displayName = mb.name || mb.email.split("@")[0];
                            const initials = displayName.split(" ").map((w)=>w[0]).filter(Boolean).slice(0, 2).join("").toUpperCase() || "MB";
                            const isMobileUI = isNative || isMobile;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `border transition-all ${isActiveAccount ? "border-slate-100 dark:border-slate-800/80 hover:border-indigo-100 dark:hover:border-indigo-900/50 hover:bg-slate-50/50 dark:hover:bg-slate-900/40" : "border-amber-200/50 dark:border-amber-900/30 bg-amber-50/20 dark:bg-amber-950/10 opacity-90"} ${isMobileUI ? "flex flex-col p-2.5 rounded-xl gap-2" : "flex items-center justify-between p-3 rounded-[5px] gap-2.5"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center gap-2.5 min-w-0 ${isMobileUI ? "w-full" : "flex-1"}`,
                                        children: [
                                            (()=>{
                                                const avatarSrc = isPrimary ? (user === null || user === void 0 ? void 0 : user.avatar) || (user === null || user === void 0 ? void 0 : user.avatarUrl) || (user === null || user === void 0 ? void 0 : user.avatar_url) || null : mb.avatar || mb.avatar_url || mb.avatarUrl || null;
                                                const sizeClass = isMobileUI ? "w-9 h-9" : "w-10 h-10";
                                                return avatarSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: avatarSrc,
                                                    alt: displayName,
                                                    className: `${sizeClass} rounded-full object-cover shrink-0 shadow-sm border border-slate-200/60 dark:border-slate-700/50`,
                                                    onError: (e)=>{
                                                        const img = e.target;
                                                        img.style.display = "none";
                                                        const fallback = img.nextElementSibling;
                                                        if (fallback) fallback.style.removeProperty("display");
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                    lineNumber: 1473,
                                                    columnNumber: 27
                                                }, this) : null;
                                            })(),
                                            (()=>{
                                                const avatarSrc = isPrimary ? (user === null || user === void 0 ? void 0 : user.avatar) || (user === null || user === void 0 ? void 0 : user.avatarUrl) || (user === null || user === void 0 ? void 0 : user.avatar_url) || null : mb.avatar || mb.avatar_url || mb.avatarUrl || null;
                                                const sizeClass = isMobileUI ? "w-9 h-9" : "w-10 h-10";
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${sizeClass} rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-sm`,
                                                    style: avatarSrc ? {
                                                        display: "none"
                                                    } : undefined,
                                                    children: initials
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                    lineNumber: 1493,
                                                    columnNumber: 27
                                                }, this);
                                            })(),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate",
                                                                children: displayName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 1504,
                                                                columnNumber: 27
                                                            }, this),
                                                            isActiveAccount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[13px] font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-900/40 whitespace-nowrap",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                                                        size: 12,
                                                                        className: "text-emerald-600 dark:text-emerald-400 shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 1509,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: [
                                                                            "Active",
                                                                            isPrimary ? " (Primary)" : ""
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 1510,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 1508,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[13px] font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200/70 dark:border-amber-900/50 whitespace-nowrap",
                                                                title: mb.lockReason || `Locked under ${userPlan} Plan quota (${maxMailboxes} active mailbox max)`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                                        size: 12,
                                                                        className: "text-amber-600 dark:text-amber-400 shrink-0"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 1514,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Locked (Plan Limit)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                        lineNumber: 1515,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                                lineNumber: 1513,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 1503,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5 font-medium",
                                                        children: mb.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 1519,
                                                        columnNumber: 25
                                                    }, this),
                                                    mb.quota > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] sm:text-[14px] text-slate-400 mt-0.5 font-medium flex items-center gap-1",
                                                        children: [
                                                            "Quota: ",
                                                            (mb.quota_used / (1024 * 1024)).toFixed(1),
                                                            " MB /",
                                                            " ",
                                                            mb.quota >= 1024 * 1024 * 1024 ? `${(mb.quota / (1024 * 1024 * 1024)).toFixed(0)} GB` : `${(mb.quota / (1024 * 1024)).toFixed(0)} MB`
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 1523,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 1502,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 1465,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center gap-1.5 ${isMobileUI ? "w-full justify-end pt-2 border-t border-slate-100 dark:border-slate-800/60" : "shrink-0"}`,
                                        children: [
                                            isActiveAccount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setManagingMailbox(mb),
                                                className: "h-8 px-2.5 sm:px-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 border border-indigo-200/60 dark:border-indigo-800/60 shadow-2xs cursor-pointer",
                                                title: `Manage ${displayName} (${mb.email})`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 1548,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Manage"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 1549,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 1542,
                                                columnNumber: 25
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    var _topRef_current;
                                                    setMailboxError(`⚠️ Mailbox Locked (${mb.email}): Your ${userPlan} Plan allows ${maxMailboxes} active mailbox. Upgrade your subscription to unlock and manage this account.`);
                                                    (_topRef_current = topRef.current) === null || _topRef_current === void 0 ? void 0 : _topRef_current.scrollIntoView({
                                                        behavior: "smooth",
                                                        block: "start"
                                                    });
                                                },
                                                className: "h-8 px-2.5 sm:px-3 rounded-lg bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 dark:hover:bg-amber-900/40 text-amber-700 dark:text-amber-300 font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 border border-amber-200/80 dark:border-amber-900/60 shadow-2xs cursor-pointer",
                                                title: `Locked under plan limit. Upgrade to unlock ${mb.email}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                        size: 13,
                                                        className: "text-amber-600 dark:text-amber-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 1563,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Upgrade to Unlock"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 1564,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 1552,
                                                columnNumber: 25
                                            }, this),
                                            isPrimary ? null : !isActiveAccount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            var _topRef_current;
                                                            setMailboxError(`⚠️ Account Inactive (${mb.email}): Upgrade your plan to edit or activate this mailbox.`);
                                                            (_topRef_current = topRef.current) === null || _topRef_current === void 0 ? void 0 : _topRef_current.scrollIntoView({
                                                                behavior: "smooth",
                                                                block: "start"
                                                            });
                                                        },
                                                        className: "w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-950/20 flex items-center justify-center transition-all active:scale-90",
                                                        title: "Inactive account - Upgrade to edit",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PencilEdit01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PencilEdit01Icon"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                            lineNumber: 1580,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 1570,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDeleteMailbox(mb.email),
                                                        className: "w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 flex items-center justify-center transition-all active:scale-90",
                                                        title: "Delete account",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                            lineNumber: 1587,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 1582,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleEditClick(mb),
                                                        className: "w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 flex items-center justify-center transition-all active:scale-90",
                                                        title: "Quick edit account",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PencilEdit01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PencilEdit01Icon"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                            lineNumber: 1597,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 1592,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDeleteMailbox(mb.email),
                                                        className: "w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 flex items-center justify-center transition-all active:scale-90",
                                                        title: "Delete account",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                            lineNumber: 1604,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                        lineNumber: 1599,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 1534,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, mb.email, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 1454,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 1430,
                        columnNumber: 13
                    }, this),
                    totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-between gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-slate-500 dark:text-slate-400",
                                children: [
                                    "Showing ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-slate-700 dark:text-slate-300",
                                        children: startIndex + 1
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 1619,
                                        columnNumber: 25
                                    }, this),
                                    "–",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-slate-700 dark:text-slate-300",
                                        children: Math.min(startIndex + ITEMS_PER_PAGE, filteredMailboxes.length)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 1620,
                                        columnNumber: 17
                                    }, this),
                                    " ",
                                    "of ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-slate-700 dark:text-slate-300",
                                        children: filteredMailboxes.length
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 1623,
                                        columnNumber: 20
                                    }, this),
                                    " accounts"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 1618,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                        disabled: currentPage === 1,
                                        className: "p-1.5 rounded-md border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",
                                        title: "Previous Page",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 1632,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 1626,
                                        columnNumber: 17
                                    }, this),
                                    Array.from({
                                        length: totalPages
                                    }, (_, i)=>i + 1).map((pg)=>{
                                        if (totalPages > 7 && pg !== 1 && pg !== totalPages && Math.abs(pg - currentPage) > 1) {
                                            if (pg === 2 && currentPage > 3) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-1 text-slate-400 text-[14px]",
                                                children: "..."
                                            }, "ellipsis-start", false, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 1644,
                                                columnNumber: 25
                                            }, this);
                                            if (pg === totalPages - 1 && currentPage < totalPages - 2) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-1 text-slate-400 text-[14px]",
                                                children: "..."
                                            }, "ellipsis-end", false, {
                                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                                lineNumber: 1650,
                                                columnNumber: 25
                                            }, this);
                                            return null;
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setCurrentPage(pg),
                                            className: `w-7 h-7 rounded-md text-xs font-bold transition-colors ${currentPage === pg ? "bg-indigo-600 text-white shadow-xs" : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-transparent"}`,
                                            children: pg
                                        }, pg, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 1657,
                                            columnNumber: 21
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1)),
                                        disabled: currentPage === totalPages,
                                        className: "p-1.5 rounded-md border border-slate-200 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors",
                                        title: "Next Page",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                            lineNumber: 1676,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                        lineNumber: 1670,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                                lineNumber: 1625,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                        lineNumber: 1617,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                lineNumber: 1384,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$BulkCreateMailboxesModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BulkCreateMailboxesModal"], {
                isOpen: showBulkImportModal,
                onClose: ()=>setShowBulkImportModal(false),
                domainName: domainName || (primaryEmail ? primaryEmail.split("@")[1] : ""),
                existingMailboxes: mailboxes,
                onSuccess: ()=>{
                    if (onRefreshMailboxes) {
                        onRefreshMailboxes();
                    } else if ("TURBOPACK compile-time truthy", 1) {
                        window.dispatchEvent(new CustomEvent("mailforge:refresh-mailboxes"));
                    }
                },
                userPlan: userPlan,
                isFreePlan: isFreePlan
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                lineNumber: 1685,
                columnNumber: 7
            }, this),
            showMailSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9999] bg-white dark:bg-[#111827] flex flex-col",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$MailSettings$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailSettings"], {
                    onClose: ()=>setShowMailSettings(false)
                }, void 0, false, {
                    fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                    lineNumber: 1704,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
                lineNumber: 1703,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/mail/mail-list/DomainAccountsView.tsx",
        lineNumber: 480,
        columnNumber: 5
    }, this);
}
_s(DomainAccountsView, "g25OU3JSDDPVn/LaL9vY8yjOx2A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = DomainAccountsView;
var _c;
__turbopack_context__.k.register(_c, "DomainAccountsView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_modules_mail_mail-list_DomainAccountsView_tsx_61e1ec69._.js.map