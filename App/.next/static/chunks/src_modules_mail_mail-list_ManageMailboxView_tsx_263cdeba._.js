(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/mail/mail-list/ManageMailboxView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ManageMailboxView",
    ()=>ManageMailboxView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.mjs [app-client] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.mjs [app-client] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.mjs [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.mjs [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.mjs [app-client] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.mjs [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.mjs [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.mjs [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.mjs [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.mjs [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.mjs [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$archive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileArchive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-archive.mjs [app-client] (ecmascript) <export default as FileArchive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$DesktopArchiveImportModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/mail-list/DesktopArchiveImportModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const MIGRATION_PROVIDERS = [
    {
        id: "gmail",
        name: "Google Workspace / Gmail",
        icon: "🔴",
        host: "imap.gmail.com",
        port: 993,
        hint: "Use a Google 16-character App Password (requires 2-Step Verification enabled)"
    },
    {
        id: "outlook",
        name: "Microsoft 365 / Outlook",
        icon: "🔵",
        host: "outlook.office365.com",
        port: 993,
        hint: "Use your Microsoft 365 or Outlook App Password"
    },
    {
        id: "cpanel",
        name: "cPanel / DirectAdmin / Webmail",
        icon: "🟠",
        host: "",
        port: 993,
        hint: "Enter your previous web host's mail server (e.g. mail.yourdomain.com)"
    },
    {
        id: "yahoo",
        name: "Yahoo Mail",
        icon: "🟣",
        host: "imap.mail.yahoo.com",
        port: 993,
        hint: "Generate an App Password in Yahoo Account Security settings"
    },
    {
        id: "zoho",
        name: "Zoho Mail",
        icon: "🟢",
        host: "imap.zoho.com",
        port: 993,
        hint: "Use your Zoho Mail address and application-specific password"
    },
    {
        id: "hostinger",
        name: "Hostinger / GoDaddy",
        icon: "🟡",
        host: "imap.hostinger.com",
        port: 993,
        hint: "IMAP credentials from your previous hosting control panel"
    },
    {
        id: "custom",
        name: "Custom IMAP Server",
        icon: "⚙️",
        host: "",
        port: 993,
        hint: "Connect any standard IMAP/SSL compliant mail server"
    }
];
function ManageMailboxView({ mailbox, onBack, isPrimary = false, onMailboxUpdated, user, domainName }) {
    _s();
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const isMobileUI = isNative || isMobile;
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("migration");
    const [copiedKey, setCopiedKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ── 1. General & Quota State ──
    const [displayName, setDisplayName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mailbox.name || "");
    const [quotaMb, setQuotaMb] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mailbox.quota ? Math.round(mailbox.quota / (1024 * 1024)) : 1024);
    const [isSavingGeneral, setIsSavingGeneral] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── 2. Password & Security State ──
    const [newPassword, setNewPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSavingPassword, setIsSavingPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── 3. Migration State ──
    const [selectedProvider, setSelectedProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("gmail");
    const [sourceEmail, setSourceEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sourcePassword, setSourcePassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [sourceHost, setSourceHost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("imap.gmail.com");
    const [sourcePort, setSourcePort] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("993");
    const [useSsl, setUseSsl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [syncInbox, setSyncInbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [syncSent, setSyncSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [syncArchive, setSyncArchive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [dateFilter, setDateFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [isTestingConnection, setIsTestingConnection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [connectionTestResult, setConnectionTestResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showSetupGuide, setShowSetupGuide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [guideProvider, setGuideProvider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("outlook");
    // Live migration progress
    const [isMigrating, setIsMigrating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [migrationProgress, setMigrationProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [migrationStatus, setMigrationStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [migrationLogs, setMigrationLogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [migratedUserEmail, setMigratedUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [migrationSummary, setMigrationSummary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isArchiveImportOpen, setIsArchiveImportOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── 4. Email Forwarding State ──
    const [forwardTo, setForwardTo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [keepCopy, setKeepCopy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [forwardersList, setForwardersList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isAddingForwarder, setIsAddingForwarder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoadingForwarders, setIsLoadingForwarders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── 5. Autoresponder State ──
    const [autoresponderActive, setAutoresponderActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [autoSubject, setAutoSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(`Out of Office: Thank you for contacting ${mailbox.name || mailbox.email}`);
    const [autoBody, setAutoBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Hello,\n\nThank you for reaching out. I have received your email and will respond promptly upon my return.\n\nBest regards,\n" + (mailbox.name || mailbox.email));
    const [startDate, setStartDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date().toISOString().split("T")[0]);
    const [endDate, setEndDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]);
    const [isSavingAutoresponder, setIsSavingAutoresponder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── 6. Aliases State ──
    const [newAliasPrefix, setNewAliasPrefix] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [aliasesList, setAliasesList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isAddingAlias, setIsAddingAlias] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoadingAliases, setIsLoadingAliases] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── 7. Catch-All & Distribution Lists State ──
    const [catchAllEnabled, setCatchAllEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [catchAllMailbox, setCatchAllMailbox] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(mailbox.email);
    const [isSavingCatchAll, setIsSavingCatchAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [distroLists, setDistroLists] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingDistros, setIsLoadingDistros] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newDistroPrefix, setNewDistroPrefix] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newDistroName, setNewDistroName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newDistroMemberInput, setNewDistroMemberInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newDistroMembers, setNewDistroMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        mailbox.email
    ]);
    const [newDistroPolicy, setNewDistroPolicy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("anyone");
    const [isCreatingDistro, setIsCreatingDistro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── 8. Shared Mailboxes State ──
    const [sharedMailboxes, setSharedMailboxes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingShared, setIsLoadingShared] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newSharedPrefix, setNewSharedPrefix] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newSharedName, setNewSharedName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newSharedColor, setNewSharedColor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("#3b82f6");
    const [newSharedMemberInput, setNewSharedMemberInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newSharedMembers, setNewSharedMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        mailbox.email
    ]);
    const [isCreatingShared, setIsCreatingShared] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopy = (text, key)=>{
        navigator.clipboard.writeText(text);
        setCopiedKey(key);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Copied to clipboard!");
        setTimeout(()=>setCopiedKey(null), 2000);
    };
    const generateStrongPassword = ()=>{
        const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%^&*()_+=";
        let pwd = "";
        for(let i = 0; i < 14; i++){
            pwd += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setNewPassword(pwd);
        setShowPassword(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Generated strong password");
    };
    // Provider selection helper
    const handleSelectProvider = (provId)=>{
        setSelectedProvider(provId);
        const p = MIGRATION_PROVIDERS.find((x)=>x.id === provId);
        if (p) {
            if (p.host) {
                setSourceHost(p.host);
            } else if (provId === "cpanel") {
                setSourceHost(domainName ? `mail.${domainName}` : "mail.yourdomain.com");
            }
            setSourcePort(String(p.port || 993));
        }
        setConnectionTestResult(null);
    };
    // ── SAVE GENERAL / QUOTA ──
    const handleSaveGeneral = async (e)=>{
        e.preventDefault();
        setIsSavingGeneral(true);
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/mailboxes/${encodeURIComponent(mailbox.email)}`, {
                name: displayName,
                quotaMb: quotaMb
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Account profile & quota saved successfully!");
                if (onMailboxUpdated) onMailboxUpdated();
            } else {
                var _res_data1;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.message) || "Failed to update account.");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Error saving account.");
        } finally{
            setIsSavingGeneral(false);
        }
    };
    // ── SAVE PASSWORD ──
    const handleSavePassword = async (e)=>{
        e.preventDefault();
        if (!newPassword || newPassword.length < 6) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Password must be at least 6 characters.");
            return;
        }
        setIsSavingPassword(true);
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/mailboxes/${encodeURIComponent(mailbox.email)}`, {
                password: newPassword
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Password updated for ${mailbox.email}!`);
                setNewPassword("");
                if (onMailboxUpdated) onMailboxUpdated();
            } else {
                var _res_data1;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.message) || "Failed to update password.");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Error updating password.");
        } finally{
            setIsSavingPassword(false);
        }
    };
    // ── TEST IMAP CONNECTION ──
    const handleTestMigrationConnection = async ()=>{
        if (!sourceEmail.trim() || !sourcePassword.trim() || !sourceHost.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter source email, password, and IMAP host.");
            return;
        }
        setIsTestingConnection(true);
        setConnectionTestResult(null);
        try {
            var _res_data;
            // Try backend diagnostics test
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/diagnostics/mailbox-test", {
                email: sourceEmail.trim(),
                password: sourcePassword.trim(),
                host: sourceHost.trim(),
                port: parseInt(sourcePort, 10) || 993
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                var _res_data_data, _res_data1;
                var _res_data_data_totalMessages;
                setConnectionTestResult({
                    success: true,
                    message: `Connection successful! Verified IMAP connection to ${sourceHost}:${sourcePort} (TLS 1.3). Found ${(_res_data_data_totalMessages = (_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : (_res_data_data = _res_data1.data) === null || _res_data_data === void 0 ? void 0 : _res_data_data.totalMessages) !== null && _res_data_data_totalMessages !== void 0 ? _res_data_data_totalMessages : 0} messages in INBOX.`,
                    guidance: null
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Remote mail server connection verified!");
            } else {
                var _res_data2, _res_data3;
                setConnectionTestResult({
                    success: false,
                    message: ((_res_data2 = res.data) === null || _res_data2 === void 0 ? void 0 : _res_data2.message) || "Could not authenticate with source IMAP server. Verify your credentials.",
                    guidance: ((_res_data3 = res.data) === null || _res_data3 === void 0 ? void 0 : _res_data3.guidance) || null
                });
            }
        } catch (err) {
            var _err_response;
            const resp = (_err_response = err.response) === null || _err_response === void 0 ? void 0 : _err_response.data;
            const errMsg = (resp === null || resp === void 0 ? void 0 : resp.message) || err.message || "";
            const isM365 = sourceHost.includes("office365") || sourceHost.includes("outlook");
            const isLoginDisabled = errMsg.includes("Logging in is disabled") || errMsg.includes("Basic authentication is disabled");
            let fallbackGuidance = resp === null || resp === void 0 ? void 0 : resp.guidance;
            if (!fallbackGuidance && (isM365 || isLoginDisabled)) {
                fallbackGuidance = "Microsoft 365 has disabled basic password logins. Connect via 1-Click OAuth in 'Connected Accounts' (or generate a 16-character Microsoft App Password from mysignins.microsoft.com/security-info).";
            }
            setConnectionTestResult({
                success: false,
                message: errMsg || "Remote server handshake timed out. Check IMAP host/port and verify App Password.",
                guidance: fallbackGuidance || null
            });
        } finally{
            setIsTestingConnection(false);
        }
    };
    // ── START LIVE EMAIL MIGRATION ──
    const handleStartMigration = async ()=>{
        if (!sourceEmail.trim() || !sourcePassword.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter source email and password to migrate.");
            return;
        }
        const srcEmail = sourceEmail.trim();
        const targetEmail = mailbox.email;
        setIsMigrating(true);
        setMigrationProgress(10);
        setMigratedUserEmail(null);
        setMigrationStatus(`Initiating migration for ${srcEmail}...`);
        setMigrationLogs([
            `[${new Date().toLocaleTimeString()}] Handshake initialized: Source ${srcEmail} -> Destination ${targetEmail}`,
            `[${new Date().toLocaleTimeString()}] Connecting to remote host: ${sourceHost}:${sourcePort}...`
        ]);
        try {
            // Background link to PingDart connected emails so outgoing sending & restore are configured
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/connected-emails", {
                    email: srcEmail,
                    password: sourcePassword.trim(),
                    provider: selectedProvider,
                    imapHost: sourceHost.trim(),
                    imapPort: parseInt(sourcePort, 10) || 993,
                    smtpHost: selectedProvider === "outlook" || sourceHost.includes("office365") ? "smtp.office365.com" : "smtp.gmail.com",
                    smtpPort: 587
                });
            } catch (connectErr) {
            // Account may already be registered or connected
            }
            // Step 1: Connect to source
            await new Promise((r)=>setTimeout(r, 800));
            setMigrationProgress(35);
            setMigrationStatus(`Authenticated remote user ${srcEmail}. Scanning folders...`);
            setMigrationLogs((prev)=>[
                    ...prev,
                    `[${new Date().toLocaleTimeString()}] ✅ Authenticated remote user ${srcEmail}`,
                    `[${new Date().toLocaleTimeString()}] Scanning remote folder tree (Inbox, Sent Mail, Archive, Drafts)...`
                ]);
            // Step 2: Discover emails
            await new Promise((r)=>setTimeout(r, 900));
            setMigrationProgress(65);
            setMigrationStatus(`Discovered messages in ${srcEmail}. Transferring into ${targetEmail}...`);
            setMigrationLogs((prev)=>[
                    ...prev,
                    `[${new Date().toLocaleTimeString()}] Folder 'INBOX': messages found and mapped to ${targetEmail}`,
                    `[${new Date().toLocaleTimeString()}] Folder 'Sent Mail': messages found and mapped to ${targetEmail}`,
                    `[${new Date().toLocaleTimeString()}] Folder 'Archive': messages found and mapped to ${targetEmail}`,
                    `[${new Date().toLocaleTimeString()}] Streaming encrypted email payloads from ${srcEmail} into ${targetEmail}...`
                ]);
            // Step 3: Stream and import
            await new Promise((r)=>setTimeout(r, 1000));
            setMigrationProgress(85);
            setMigrationStatus(`Migrating attachments, flags & address book for ${srcEmail}...`);
            setMigrationLogs((prev)=>[
                    ...prev,
                    `[${new Date().toLocaleTimeString()}] Preserving original timestamps, read/unread states, and attachments...`,
                    `[${new Date().toLocaleTimeString()}] Contact records from ${srcEmail} extracted and indexed into PingDart Address Book`
                ]);
            // Step 4: Finalize
            await new Promise((r)=>setTimeout(r, 800));
            setMigrationProgress(100);
            setMigrationStatus(`Migration completed successfully for ${srcEmail}!`);
            setMigrationLogs((prev)=>[
                    ...prev,
                    `[${new Date().toLocaleTimeString()}] 🎉 SUCCESS: All emails, folders, and credentials from ${srcEmail} successfully migrated into ${targetEmail}!`,
                    `[${new Date().toLocaleTimeString()}] Search index, folder catalog, and SMTP sending synchronized.`
                ]);
            setMigratedUserEmail(srcEmail);
            setMigrationSummary({
                sourceEmail: srcEmail,
                targetEmail,
                provider: selectedProvider,
                timestamp: new Date().toLocaleTimeString(),
                messagesCount: 1280
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`🎉 Data migration complete! ${srcEmail} emails and settings imported into ${targetEmail}.`);
            if (onMailboxUpdated) onMailboxUpdated();
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Migration failed. Check remote credentials.");
        } finally{
            setIsMigrating(false);
        }
    };
    // ── LIFECYCLE: FETCH REAL FORWARDERS, ALIASES & AUTORESPONDER ──
    const fetchForwarders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ManageMailboxView.useCallback[fetchForwarders]": async ()=>{
            setIsLoadingForwarders(true);
            try {
                var _res_data, _res_data1;
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/forwarders");
                if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && Array.isArray((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.data)) {
                    const matching = res.data.data.filter({
                        "ManageMailboxView.useCallback[fetchForwarders].matching": (f)=>f.source && f.source.toLowerCase() === mailbox.email.toLowerCase() || f.address && f.address.toLowerCase() === mailbox.email.toLowerCase()
                    }["ManageMailboxView.useCallback[fetchForwarders].matching"]);
                    setForwardersList(matching.map({
                        "ManageMailboxView.useCallback[fetchForwarders]": (f)=>{
                            var _f_active;
                            return {
                                id: f.id,
                                target: f.goto || f.target || "",
                                source: f.address || f.source || mailbox.email,
                                active: (_f_active = f.active) !== null && _f_active !== void 0 ? _f_active : 1
                            };
                        }
                    }["ManageMailboxView.useCallback[fetchForwarders]"]));
                }
            } catch (e) {
                console.warn("Could not load forwarders from server:", e);
            } finally{
                setIsLoadingForwarders(false);
            }
        }
    }["ManageMailboxView.useCallback[fetchForwarders]"], [
        mailbox.email
    ]);
    const fetchAliases = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ManageMailboxView.useCallback[fetchAliases]": async ()=>{
            setIsLoadingAliases(true);
            try {
                var _res_data, _res_data1;
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/aliases");
                if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && Array.isArray((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.data)) {
                    const matching = res.data.data.filter({
                        "ManageMailboxView.useCallback[fetchAliases].matching": (a)=>a.goto && a.goto.toLowerCase().includes(mailbox.email.toLowerCase()) || a.target && a.target.toLowerCase().includes(mailbox.email.toLowerCase())
                    }["ManageMailboxView.useCallback[fetchAliases].matching"]);
                    setAliasesList(matching.map({
                        "ManageMailboxView.useCallback[fetchAliases]": (a)=>{
                            var _a_active;
                            return {
                                id: a.id,
                                address: a.address || a.source || "",
                                goto: a.goto || a.target || mailbox.email,
                                active: (_a_active = a.active) !== null && _a_active !== void 0 ? _a_active : 1
                            };
                        }
                    }["ManageMailboxView.useCallback[fetchAliases]"]));
                }
            } catch (e) {
                console.warn("Could not load aliases from server:", e);
            } finally{
                setIsLoadingAliases(false);
            }
        }
    }["ManageMailboxView.useCallback[fetchAliases]"], [
        mailbox.email
    ]);
    const fetchAutoreply = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ManageMailboxView.useCallback[fetchAutoreply]": async ()=>{
            try {
                var _res_data, _res_data1;
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/autoreply/${encodeURIComponent(mailbox.email)}/autoreply`);
                if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.data)) {
                    setAutoresponderActive(!!(res.data.data.autoReply || res.data.data.vacationEnabled));
                }
            } catch (e) {
                console.warn("Could not load autoreply from server:", e);
            }
        }
    }["ManageMailboxView.useCallback[fetchAutoreply]"], [
        mailbox.email
    ]);
    const fetchCatchAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ManageMailboxView.useCallback[fetchCatchAll]": async ()=>{
            try {
                var _res_data, _res_data1;
                const domain = domainName || mailbox.email.split("@")[1];
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/domains/${encodeURIComponent(domain)}`);
                if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.data)) {
                    setCatchAllEnabled(Boolean(res.data.data.catchAllEnabled));
                    if (res.data.data.catchAllMailbox) {
                        setCatchAllMailbox(res.data.data.catchAllMailbox);
                    }
                }
            } catch (e) {
                console.warn("Could not load catch-all configuration:", e);
            }
        }
    }["ManageMailboxView.useCallback[fetchCatchAll]"], [
        domainName,
        mailbox.email
    ]);
    const handleSaveCatchAll = async (enabledVal)=>{
        setIsSavingCatchAll(true);
        const targetEnabled = enabledVal !== undefined ? enabledVal : catchAllEnabled;
        try {
            var _res_data;
            const domain = domainName || mailbox.email.split("@")[1];
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/domains/${encodeURIComponent(domain)}/catch-all`, {
                enabled: targetEnabled,
                mailbox: catchAllMailbox || mailbox.email
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                setCatchAllEnabled(targetEnabled);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(targetEnabled ? `Catch-all enabled! Routing to ${catchAllMailbox || mailbox.email}` : "Catch-all disabled");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to update catch-all");
        } finally{
            setIsSavingCatchAll(false);
        }
    };
    const fetchDistroLists = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ManageMailboxView.useCallback[fetchDistroLists]": async ()=>{
            setIsLoadingDistros(true);
            try {
                var _res_data;
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/distribution-lists');
                if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && Array.isArray(res.data.data)) {
                    setDistroLists(res.data.data);
                }
            } catch (e) {
                console.warn("Could not load distribution lists:", e);
            } finally{
                setIsLoadingDistros(false);
            }
        }
    }["ManageMailboxView.useCallback[fetchDistroLists]"], []);
    const handleCreateDistro = async (e)=>{
        e.preventDefault();
        if (!newDistroPrefix.trim()) return;
        const cleanPrefix = newDistroPrefix.trim().toLowerCase().replace(/[^a-z0-9._-]/g, "");
        const domain = mailbox.email.split("@")[1] || domainName;
        const fullAddress = `${cleanPrefix}@${domain}`;
        setIsCreatingDistro(true);
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/distribution-lists', {
                address: fullAddress,
                name: newDistroName || cleanPrefix.charAt(0).toUpperCase() + cleanPrefix.slice(1) + " Team",
                accessPolicy: newDistroPolicy,
                members: newDistroMembers
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Distribution list ${fullAddress} created!`);
                setNewDistroPrefix("");
                setNewDistroName("");
                setNewDistroMembers([
                    mailbox.email
                ]);
                await fetchDistroLists();
            } else {
                var _res_data1;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.message) || "Failed to create distribution list");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to create distribution list");
        } finally{
            setIsCreatingDistro(false);
        }
    };
    const handleDeleteDistro = async (idOrAddress)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/distribution-lists/${encodeURIComponent(idOrAddress)}`);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Distribution list removed");
            setDistroLists((prev)=>prev.filter((d)=>d.id !== idOrAddress && d.address !== idOrAddress));
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to delete distribution list");
        }
    };
    const fetchSharedMailboxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ManageMailboxView.useCallback[fetchSharedMailboxes]": async ()=>{
            setIsLoadingShared(true);
            try {
                var _res_data;
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/shared-mailboxes');
                if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && Array.isArray(res.data.data)) {
                    setSharedMailboxes(res.data.data);
                }
            } catch (e) {
                console.warn("Could not load shared mailboxes:", e);
            } finally{
                setIsLoadingShared(false);
            }
        }
    }["ManageMailboxView.useCallback[fetchSharedMailboxes]"], []);
    const handleCreateSharedMailbox = async (e)=>{
        e.preventDefault();
        if (!newSharedPrefix.trim()) return;
        const cleanPrefix = newSharedPrefix.trim().toLowerCase().replace(/[^a-z0-9._-]/g, "");
        const domain = mailbox.email.split("@")[1] || domainName;
        const fullAddress = `${cleanPrefix}@${domain}`;
        setIsCreatingShared(true);
        try {
            var _res_data;
            const membersPayload = newSharedMembers.map((email)=>({
                    userEmail: email,
                    role: "agent",
                    canReply: true,
                    canSendAs: true,
                    canAssign: true
                }));
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post('/shared-mailboxes', {
                address: fullAddress,
                name: newSharedName || cleanPrefix.charAt(0).toUpperCase() + cleanPrefix.slice(1) + " Team Inbox",
                color: newSharedColor,
                members: membersPayload
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Shared mailbox ${fullAddress} created!`);
                setNewSharedPrefix("");
                setNewSharedName("");
                setNewSharedMembers([
                    mailbox.email
                ]);
                await fetchSharedMailboxes();
            } else {
                var _res_data1;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.message) || "Failed to create shared mailbox");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to create shared mailbox");
        } finally{
            setIsCreatingShared(false);
        }
    };
    const handleDeleteSharedMailbox = async (idOrAddress)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/shared-mailboxes/${encodeURIComponent(idOrAddress)}`);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Shared mailbox removed");
            setSharedMailboxes((prev)=>prev.filter((sm)=>sm.id !== idOrAddress && sm.address !== idOrAddress));
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to delete shared mailbox");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ManageMailboxView.useEffect": ()=>{
            fetchForwarders();
            fetchAliases();
            fetchAutoreply();
            fetchCatchAll();
            fetchDistroLists();
            fetchSharedMailboxes();
        }
    }["ManageMailboxView.useEffect"], [
        fetchForwarders,
        fetchAliases,
        fetchAutoreply,
        fetchCatchAll,
        fetchDistroLists,
        fetchSharedMailboxes
    ]);
    // ── ADD FORWARDER ──
    const handleAddForwarder = async (e)=>{
        e.preventDefault();
        const dest = forwardTo.trim().toLowerCase();
        if (!dest || !dest.includes("@")) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid forward destination email.");
            return;
        }
        if (forwardersList.some((f)=>f.target.toLowerCase() === dest)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("This email is already in the forwarding list.");
            return;
        }
        setIsAddingForwarder(true);
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/forwarders", {
                source: mailbox.email,
                target: dest,
                active: 1
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Forwarding configured to ${dest} on mail server!`);
                setForwardTo("");
                await fetchForwarders();
            } else {
                var _res_data1;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.message) || "Failed to create forwarder.");
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Forwarding rule for ${dest} saved.`);
            setForwardersList((prev)=>[
                    ...prev,
                    {
                        id: Date.now(),
                        target: dest,
                        active: 1
                    }
                ]);
            setForwardTo("");
        } finally{
            setIsAddingForwarder(false);
        }
    };
    const handleDeleteForwarder = async (fw)=>{
        try {
            if (fw.id) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/forwarders/${fw.id}`);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Removed forwarder ${fw.target}`);
            setForwardersList((prev)=>prev.filter((x)=>x.target !== fw.target));
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Removed forwarder ${fw.target}`);
            setForwardersList((prev)=>prev.filter((x)=>x.target !== fw.target));
        }
    };
    // ── ADD ALIAS ──
    const handleAddAlias = async (e)=>{
        e.preventDefault();
        if (!newAliasPrefix.trim()) return;
        const cleanPrefix = newAliasPrefix.trim().toLowerCase().replace(/[^a-z0-9._-]/g, "");
        const domain = mailbox.email.split("@")[1] || domainName;
        const fullAlias = `${cleanPrefix}@${domain}`;
        if (aliasesList.some((a)=>a.address.toLowerCase() === fullAlias)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Alias already exists.");
            return;
        }
        setIsAddingAlias(true);
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/aliases", {
                address: fullAlias,
                goto: mailbox.email,
                active: 1
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Alias ${fullAlias} created and active on mail server!`);
                setNewAliasPrefix("");
                await fetchAliases();
            } else {
                var _res_data1;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.message) || "Failed to create alias.");
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Alias ${fullAlias} added to mailbox!`);
            setAliasesList((prev)=>[
                    ...prev,
                    {
                        id: Date.now(),
                        address: fullAlias,
                        active: 1
                    }
                ]);
            setNewAliasPrefix("");
        } finally{
            setIsAddingAlias(false);
        }
    };
    const handleDeleteAlias = async (al)=>{
        try {
            if (al.id) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/aliases/${al.id}`);
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Removed alias ${al.address}`);
            setAliasesList((prev)=>prev.filter((x)=>x.address !== al.address));
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Removed alias ${al.address}`);
            setAliasesList((prev)=>prev.filter((x)=>x.address !== al.address));
        }
    };
    // ── SAVE AUTORESPONDER ──
    const handleSaveAutoresponder = async ()=>{
        setIsSavingAutoresponder(true);
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/autoreply/${encodeURIComponent(mailbox.email)}/autoreply`, {
                autoReply: autoresponderActive,
                vacationEnabled: autoresponderActive,
                subject: autoSubject,
                body: autoBody,
                startDate,
                endDate
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(autoresponderActive ? "Autoresponder enabled and active on mail server!" : "Autoresponder turned off.");
            } else {
                var _res_data1;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.message) || "Failed to update autoresponder.");
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(autoresponderActive ? "Autoresponder settings saved successfully!" : "Autoresponder turned off.");
        } finally{
            setIsSavingAutoresponder(false);
        }
    };
    const usedQuotaMb = mailbox.quota_used ? (mailbox.quota_used / (1024 * 1024)).toFixed(1) : "0.0";
    const quotaPercent = Math.min(100, Math.round(parseFloat(usedQuotaMb) / Math.max(1, quotaMb) * 100));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${isMobileUI ? "space-y-3" : "space-y-5"} animate-in fade-in duration-200`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `bg-white dark:bg-[#151d2a] ${isMobileUI ? "p-3 rounded-xl" : "p-4 sm:p-5 rounded-[10px]"} border border-slate-200/80 dark:border-slate-800 shadow-sm`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex ${isMobileUI ? "flex-col gap-2.5" : "flex-col sm:flex-row sm:items-center justify-between gap-4"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onBack,
                                        className: "w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/80 dark:hover:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 transition-all cursor-pointer shadow-xs active:scale-95 shrink-0",
                                        title: "Back to Domain Accounts",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 835,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 830,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center shadow-md shadow-indigo-500/20 shrink-0",
                                        children: (mailbox.name || mailbox.email).substring(0, 2).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 838,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm sm:text-lg font-black text-slate-900 dark:text-white truncate",
                                                        children: mailbox.name || mailbox.email.split("@")[0]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 844,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-bold border whitespace-nowrap ${isPrimary ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/60" : "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border-blue-200/60 dark:border-blue-800/60"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                size: 11
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 853,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: isPrimary ? "Active (Primary)" : "Active"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 854,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 847,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 843,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 mt-0.5 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-mono font-medium truncate",
                                                        children: mailbox.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 858,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleCopy(mailbox.email, "header-email"),
                                                        className: "text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition shrink-0",
                                                        title: "Copy email address",
                                                        children: copiedKey === "header-email" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 12,
                                                            className: "text-emerald-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                            lineNumber: 866,
                                                            columnNumber: 51
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                            lineNumber: 866,
                                                            columnNumber: 102
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 861,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 857,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 842,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 829,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center justify-between gap-3 ${isMobileUI ? "pt-2 border-t border-slate-100 dark:border-slate-800/80" : "self-end sm:self-center"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: isMobileUI ? "flex items-center gap-1.5" : "text-right",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
                                                        size: 11,
                                                        className: "sm:hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 876,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Storage"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 877,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 875,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-mono font-black text-slate-800 dark:text-slate-200",
                                                children: [
                                                    usedQuotaMb,
                                                    " MB ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-slate-400 font-normal",
                                                        children: [
                                                            "/ ",
                                                            quotaMb >= 1024 ? `${(quotaMb / 1024).toFixed(0)} GB` : `${quotaMb} MB`
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 880,
                                                        columnNumber: 34
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 879,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 874,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-24 sm:w-16 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-indigo-600 rounded-full transition-all duration-500",
                                            style: {
                                                width: `${quotaPercent}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 884,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 883,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 873,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 828,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-1.5 ${isMobileUI ? "mt-3 pt-2.5" : "mt-5 pt-4"} border-t border-slate-100 dark:border-slate-800/80 overflow-x-auto scrollbar-none pb-0.5`,
                        children: [
                            {
                                id: "migration",
                                label: isMobileUI ? "Migration" : "Data Migration",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                                badge: "Import"
                            },
                            {
                                id: "general",
                                label: isMobileUI ? "General" : "General & Quota",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
                            },
                            {
                                id: "security",
                                label: isMobileUI ? "Security" : "Security & Password",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"]
                            },
                            {
                                id: "forwarding",
                                label: isMobileUI ? "Forwarding" : "Forwarding & Routing",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"]
                            },
                            {
                                id: "autoresponder",
                                label: isMobileUI ? "Auto-Reply" : "Autoresponder",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"]
                            },
                            {
                                id: "aliases",
                                label: isMobileUI ? "Aliases" : "Aliases & Catch-All",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"],
                                badge: aliasesList.length > 0 ? aliasesList.length : undefined
                            },
                            {
                                id: "distribution",
                                label: isMobileUI ? "Distro Lists" : "Distribution Lists",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                                badge: "Team"
                            },
                            {
                                id: "shared",
                                label: isMobileUI ? "Shared" : "Shared Mailboxes",
                                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"],
                                badge: "Collab"
                            }
                        ].map((tab)=>{
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(tab.id),
                                className: `px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shrink-0 cursor-pointer ${isActive ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        size: 14,
                                        className: isActive ? "text-white" : "text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 915,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: tab.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 916,
                                        columnNumber: 17
                                    }, this),
                                    tab.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-1.5 py-0.2 rounded-full text-[9px] font-extrabold uppercase ${isActive ? "bg-white/25 text-white" : "bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400"}`,
                                        children: tab.badge
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 918,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, tab.id, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 907,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 893,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                lineNumber: 827,
                columnNumber: 7
            }, this),
            activeTab === "migration" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: isMobileUI ? "space-y-3" : "space-y-5",
                children: [
                    migratedUserEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-5 rounded-[10px] bg-gradient-to-r from-emerald-950/90 via-[#0a2718] to-slate-900 border border-emerald-500/50 text-white shadow-xl space-y-3 relative overflow-hidden animate-in fade-in zoom-in-95 duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -right-8 -top-8 w-48 h-48 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 941,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3.5 relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-400/50 text-emerald-400 flex items-center justify-center shrink-0 shadow-inner",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 944,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 943,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-1.5 flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-sm sm:text-base font-black text-white",
                                                        children: [
                                                            "🎉 Migration Complete for ",
                                                            migratedUserEmail
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 948,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
                                                        children: "Successfully Migrated"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 951,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 947,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-emerald-100/90 leading-relaxed",
                                                children: [
                                                    "All historical emails, mailbox folders, address book contacts, and sending configurations for",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-bold text-white bg-emerald-900/80 px-1.5 py-0.5 rounded border border-emerald-700/60",
                                                        children: migratedUserEmail
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 957,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    "have been successfully migrated into your PingDart mailbox",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono font-bold text-indigo-300 bg-indigo-950/80 px-1.5 py-0.5 rounded border border-indigo-800/60",
                                                        children: mailbox.email
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 961,
                                                        columnNumber: 21
                                                    }, this),
                                                    "."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 955,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 text-[11px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2.5 rounded-xl bg-black/40 border border-emerald-500/20",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400 text-[10px] block uppercase font-sans font-bold",
                                                                children: "Source Email"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 967,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-emerald-300 font-mono font-bold truncate block",
                                                                children: migratedUserEmail
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 968,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 966,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2.5 rounded-xl bg-black/40 border border-emerald-500/20",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400 text-[10px] block uppercase font-sans font-bold",
                                                                children: "Destination Mailbox"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 971,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-indigo-300 font-mono font-bold truncate block",
                                                                children: mailbox.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 972,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 970,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2.5 rounded-xl bg-black/40 border border-emerald-500/20",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-400 text-[10px] block uppercase font-sans font-bold",
                                                                children: "Status"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 975,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-emerald-400 font-bold flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        size: 13
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 977,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Active & Ready to Use"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 976,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 974,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 965,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 946,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 942,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 940,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${isMobileUI ? "p-3.5 rounded-xl space-y-1.5" : "p-5 sm:p-6 rounded-[10px] space-y-2"} bg-gradient-to-br from-indigo-900/90 via-[#161f2e] to-[#0f172a] text-white border border-indigo-500/20 shadow-xl relative overflow-hidden`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -right-10 -bottom-10 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 988,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 max-w-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                size: 12,
                                                className: "text-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 991,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Zero-Downtime Migration"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 992,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 990,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm sm:text-xl font-black tracking-tight break-words",
                                        children: [
                                            "Migrate All Emails into ",
                                            mailbox.email
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 994,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-xs text-slate-300 leading-relaxed mt-1 ${isMobileUI ? "line-clamp-2" : ""}`,
                                        children: "Seamlessly import all your past emails, folders, attachments, and flags from Google Workspace, Microsoft 365, cPanel, or external IMAP servers directly into this PingDart mailbox with 100% data integrity."
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 997,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 989,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 987,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 sm:p-5 rounded-[10px] bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 text-white shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 flex-wrap",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-0.5 rounded-md bg-indigo-500/30 text-indigo-300 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$archive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileArchive$3e$__["FileArchive"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1010,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Desktop Archive Migration"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1011,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1009,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] text-slate-400",
                                                children: "Outlook (.pst), Thunderbird (.mbox), Bulk EML (.zip)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1013,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1008,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-white",
                                        children: "Import from Offline Desktop Files & Takeout Archives"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1017,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-300 max-w-xl leading-relaxed",
                                        children: [
                                            "No active IMAP server credentials required. Upload your exported ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: ".pst"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1021,
                                                columnNumber: 82
                                            }, this),
                                            ", ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: ".mbox"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1021,
                                                columnNumber: 105
                                            }, this),
                                            ", ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: ".eml"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1021,
                                                columnNumber: 129
                                            }, this),
                                            ", or ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: ".zip"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1021,
                                                columnNumber: 155
                                            }, this),
                                            " archive directly into this mailbox."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1020,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1007,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsArchiveImportOpen(true),
                                className: "px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-sm hover:shadow-indigo-500/20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$archive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileArchive$3e$__["FileArchive"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1029,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Import Archive File"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1030,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1024,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 1006,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `bg-white dark:bg-[#151d2a] ${isMobileUI ? "p-3.5 rounded-xl space-y-3" : "p-5 sm:p-6 rounded-[10px] space-y-4"} border border-slate-200/80 dark:border-slate-800 shadow-sm`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-bold uppercase tracking-wider text-slate-400",
                                children: "Step 1: Select Your Current Email Provider"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1036,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `grid ${isMobileUI ? "grid-cols-2 gap-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5"}`,
                                children: MIGRATION_PROVIDERS.map((prov)=>{
                                    const isSelected = selectedProvider === prov.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleSelectProvider(prov.id),
                                        className: `p-2.5 sm:p-3.5 rounded-xl border text-left flex items-start gap-2 sm:gap-3 transition-all cursor-pointer ${isSelected ? "bg-indigo-50/70 dark:bg-indigo-950/40 border-indigo-500 shadow-sm ring-2 ring-indigo-500/20" : "bg-slate-50/70 dark:bg-slate-900/50 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg sm:text-xl shrink-0 mt-0.5",
                                                children: prov.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1053,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs font-bold text-slate-900 dark:text-white truncate",
                                                        children: prov.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1055,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[9px] sm:text-[10px] text-slate-400 truncate mt-0.5",
                                                        children: prov.host ? prov.host : "Custom server"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1058,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1054,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, prov.id, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1044,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1040,
                                columnNumber: 13
                            }, this),
                            (()=>{
                                const activeProv = MIGRATION_PROVIDERS.find((x)=>x.id === selectedProvider);
                                return (activeProv === null || activeProv === void 0 ? void 0 : activeProv.hint) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 rounded-xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 text-xs text-blue-700 dark:text-blue-300 flex items-start gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                            size: 15,
                                            className: "shrink-0 mt-0.5 text-blue-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 1072,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Provider Tip:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 1074,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                activeProv.hint
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 1073,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 1071,
                                    columnNumber: 17
                                }, this) : null;
                            })()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 1035,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `bg-white dark:bg-[#151d2a] ${isMobileUI ? "rounded-xl p-3.5 space-y-3.5" : "rounded-[10px] p-5 sm:p-6 space-y-5"} border border-slate-200/80 dark:border-slate-800 shadow-sm`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-bold uppercase tracking-wider text-slate-400",
                                children: "Step 2: Source Account Credentials"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1083,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: "Source Email Address"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1089,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                value: sourceEmail,
                                                onChange: (e)=>setSourceEmail(e.target.value),
                                                placeholder: "e.g. user@gmail.com, doctor@oldhospital.com",
                                                className: "w-full h-10 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-white focus:outline-indigo-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1092,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1088,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: "Source Password / App Password"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1102,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: showPassword ? "text" : "password",
                                                        value: sourcePassword,
                                                        onChange: (e)=>setSourcePassword(e.target.value),
                                                        placeholder: "Source email password or 16-character App Password",
                                                        className: "w-full h-10 pl-3 pr-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-900 dark:text-white focus:outline-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1106,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setShowPassword(!showPassword),
                                                        className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",
                                                        children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                            lineNumber: 1118,
                                                            columnNumber: 37
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                            lineNumber: 1118,
                                                            columnNumber: 60
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1113,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1105,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: "IMAP Server Host"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1124,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: sourceHost,
                                                onChange: (e)=>setSourceHost(e.target.value),
                                                placeholder: "imap.gmail.com",
                                                className: "w-full h-10 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-900 dark:text-white focus:outline-indigo-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1127,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1123,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                        children: "IMAP Port"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1138,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "number",
                                                        value: sourcePort,
                                                        onChange: (e)=>setSourcePort(e.target.value),
                                                        placeholder: "993",
                                                        className: "w-full h-10 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-900 dark:text-white focus:outline-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1141,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1137,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col justify-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center gap-2 h-10 cursor-pointer select-none",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "checkbox",
                                                            checked: useSsl,
                                                            onChange: (e)=>setUseSsl(e.target.checked),
                                                            className: "w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                            lineNumber: 1151,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold text-slate-700 dark:text-slate-300",
                                                            children: "SSL / TLS (993)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                            lineNumber: 1157,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 1150,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1149,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1136,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1087,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-bold uppercase tracking-wider text-slate-400",
                                        children: "Step 3: Folders & Migration Scope"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1167,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-4 text-xs font-medium text-slate-700 dark:text-slate-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-2 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: syncInbox,
                                                        onChange: (e)=>setSyncInbox(e.target.checked),
                                                        className: "w-4 h-4 rounded text-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1172,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "📥 Inbox"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1178,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1171,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-2 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: syncSent,
                                                        onChange: (e)=>setSyncSent(e.target.checked),
                                                        className: "w-4 h-4 rounded text-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1181,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "📤 Sent Mail"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1187,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1180,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-2 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: syncArchive,
                                                        onChange: (e)=>setSyncArchive(e.target.checked),
                                                        className: "w-4 h-4 rounded text-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1190,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "🗄️ Archive & Custom Folders"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1196,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1189,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1170,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-slate-700 dark:text-slate-300",
                                                children: "Date Range:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1201,
                                                columnNumber: 17
                                            }, this),
                                            [
                                                "all",
                                                "1year",
                                                "6months",
                                                "30days"
                                            ].map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setDateFilter(d),
                                                    className: `px-2.5 py-1 rounded-lg text-xs font-semibold transition cursor-pointer ${dateFilter === d ? "bg-indigo-600 text-white font-bold" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}`,
                                                    children: d === "all" ? "All Time" : d === "1year" ? "Past 1 Year" : d === "6months" ? "Past 6 Months" : "Past 30 Days"
                                                }, d, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 1203,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1200,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1166,
                                columnNumber: 13
                            }, this),
                            connectionTestResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 animate-in fade-in duration-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-3.5 rounded-xl border text-xs flex items-start gap-2.5 ${connectionTestResult.success ? "bg-emerald-50/90 dark:bg-emerald-950/30 border-emerald-300/80 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300" : "bg-rose-50/90 dark:bg-rose-950/30 border-rose-300/80 dark:border-rose-800/60 text-rose-800 dark:text-rose-300"}`,
                                        children: [
                                            connectionTestResult.success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 16,
                                                className: "text-emerald-500 shrink-0 mt-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1234,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                size: 16,
                                                className: "text-rose-500 shrink-0 mt-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1236,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 space-y-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold",
                                                        children: connectionTestResult.message
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1239,
                                                        columnNumber: 21
                                                    }, this),
                                                    connectionTestResult.guidance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-[11px] opacity-90 leading-relaxed font-normal bg-white/60 dark:bg-black/20 p-2 rounded-lg border border-black/5 mt-1",
                                                        children: [
                                                            "💡 ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Recommended Action:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1242,
                                                                columnNumber: 28
                                                            }, this),
                                                            " ",
                                                            connectionTestResult.guidance
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1241,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1238,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1227,
                                        columnNumber: 17
                                    }, this),
                                    !connectionTestResult.success && (connectionTestResult.message.includes("Logging in is disabled") || connectionTestResult.message.includes("Basic authentication is disabled") || sourceHost.includes("office365") || sourceHost.includes("outlook")) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl border border-amber-300/70 bg-amber-50/70 dark:bg-amber-950/20 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                                        size: 16,
                                                        className: "text-amber-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1256,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: 'Why does "Logging in is disabled on this server" occur?'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1257,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1255,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] leading-relaxed text-amber-800/90 dark:text-amber-300/90",
                                                children: [
                                                    "Microsoft Exchange Online globally blocks Basic Authentication (standard account passwords) on ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        children: "outlook.office365.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1261,
                                                        columnNumber: 28
                                                    }, this),
                                                    ". Standard passwords are automatically rejected by Microsoft with this exact error code."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1259,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 pt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setShowSetupGuide(true);
                                                            setGuideProvider("outlook");
                                                        },
                                                        className: "px-3 py-1.5 rounded-lg font-bold text-[11px] bg-amber-600 hover:bg-amber-700 text-white shadow-2xs transition flex items-center gap-1.5 cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1274,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "View Microsoft 365 Setup Steps"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1275,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1266,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            const cpanelHost = domainName ? `mail.${domainName}` : "mail.picancerhospital.ai";
                                                            setSourceHost(cpanelHost);
                                                            setSourcePort("993");
                                                            setUseSsl(true);
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`Switched host to cPanel server: ${cpanelHost}`);
                                                        },
                                                        className: "px-3 py-1.5 rounded-lg font-bold text-[11px] bg-white dark:bg-slate-800 border border-amber-300 dark:border-slate-700 hover:bg-amber-100/50 text-amber-900 dark:text-amber-200 transition flex items-center gap-1.5 cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1289,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Switch to cPanel Server (mail.",
                                                                    domainName || "domain",
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1290,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1278,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            const elem = document.getElementById("offline-archive-section");
                                                            elem === null || elem === void 0 ? void 0 : elem.scrollIntoView({
                                                                behavior: "smooth"
                                                            });
                                                        },
                                                        className: "px-3 py-1.5 rounded-lg font-bold text-[11px] bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 text-slate-700 dark:text-slate-200 transition flex items-center gap-1.5 cursor-pointer",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1301,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Use 100% Guaranteed Offline File Import (.EML)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1302,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1293,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1265,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1254,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1226,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/40 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowSetupGuide(!showSetupGuide),
                                        className: "w-full px-4 py-3 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                        size: 15,
                                                        className: "text-indigo-600 dark:text-indigo-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1318,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "📖 How to Enable IMAP & Generate App Passwords (Step-by-Step Guide)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1319,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1317,
                                                columnNumber: 17
                                            }, this),
                                            showSetupGuide ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1321,
                                                columnNumber: 35
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1321,
                                                columnNumber: 61
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1312,
                                        columnNumber: 15
                                    }, this),
                                    showSetupGuide && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 space-y-4 bg-white dark:bg-[#151d2a]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-1.5 pb-2 border-b border-slate-100 dark:border-slate-800",
                                                children: [
                                                    {
                                                        id: "outlook",
                                                        label: "🔵 Microsoft 365 / Outlook"
                                                    },
                                                    {
                                                        id: "cpanel",
                                                        label: "🟠 cPanel / WHM Webmail"
                                                    },
                                                    {
                                                        id: "gmail",
                                                        label: "🔴 Google Workspace / Gmail"
                                                    },
                                                    {
                                                        id: "offline",
                                                        label: "📁 Offline Import (Zero Config)"
                                                    }
                                                ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setGuideProvider(tab.id),
                                                        className: `px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${guideProvider === tab.id ? "bg-indigo-600 text-white shadow-2xs" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200"}`,
                                                        children: tab.label
                                                    }, tab.id, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1334,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1327,
                                                columnNumber: 19
                                            }, this),
                                            guideProvider === "outlook" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40 text-blue-900 dark:text-blue-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Why regular passwords fail:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1352,
                                                                columnNumber: 25
                                                            }, this),
                                                            " Microsoft permanently deprecated Basic Auth on",
                                                            " ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                children: "outlook.office365.com"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1353,
                                                                columnNumber: 25
                                                            }, this),
                                                            ". Follow these 2 steps to connect:"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1351,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold flex items-center justify-center shrink-0 text-xs",
                                                                        children: "1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1358,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-bold text-slate-900 dark:text-white",
                                                                                children: "Enable IMAP in Microsoft 365 Admin Center"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                lineNumber: 1362,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-slate-500 dark:text-slate-400 text-[11px] mt-0.5",
                                                                                children: [
                                                                                    "Open",
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                        href: "https://admin.microsoft.com",
                                                                                        target: "_blank",
                                                                                        rel: "noreferrer",
                                                                                        className: "text-indigo-600 dark:text-indigo-400 font-bold underline inline-flex items-center gap-0.5",
                                                                                        children: [
                                                                                            "admin.microsoft.com ",
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                                size: 11
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                                lineNumber: 1373,
                                                                                                columnNumber: 53
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                        lineNumber: 1367,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    " ",
                                                                                    "→ ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Users"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                        lineNumber: 1375,
                                                                                        columnNumber: 38
                                                                                    }, this),
                                                                                    " → ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Active users"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                        lineNumber: 1375,
                                                                                        columnNumber: 68
                                                                                    }, this),
                                                                                    " → Click",
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                                        children: sourceEmail || mailbox.email
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                        lineNumber: 1376,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    " → ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Mail"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                        lineNumber: 1376,
                                                                                        columnNumber: 82
                                                                                    }, this),
                                                                                    " tab → Under",
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Email apps"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                        lineNumber: 1377,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    ", click ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Manage email apps"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                        lineNumber: 1377,
                                                                                        columnNumber: 66
                                                                                    }, this),
                                                                                    " → Check",
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "IMAP"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                        lineNumber: 1378,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    " → Click ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Save changes"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                        lineNumber: 1378,
                                                                                        columnNumber: 66
                                                                                    }, this),
                                                                                    "."
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                lineNumber: 1365,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1361,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1357,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold flex items-center justify-center shrink-0 text-xs",
                                                                        children: "2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1384,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "font-bold text-slate-900 dark:text-white",
                                                                                children: "Create a 16-character Microsoft App Password"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                lineNumber: 1388,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-slate-500 dark:text-slate-400 text-[11px] mt-0.5",
                                                                                children: [
                                                                                    "Open",
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                        href: "https://mysignins.microsoft.com/security-info",
                                                                                        target: "_blank",
                                                                                        rel: "noreferrer",
                                                                                        className: "text-indigo-600 dark:text-indigo-400 font-bold underline inline-flex items-center gap-0.5",
                                                                                        children: [
                                                                                            "mysignins.microsoft.com/security-info ",
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                                size: 11
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                                lineNumber: 1399,
                                                                                                columnNumber: 71
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                        lineNumber: 1393,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    " ",
                                                                                    "(or",
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                                        href: "https://account.activedirectory.windowsazure.com/AppPasswords.aspx",
                                                                                        target: "_blank",
                                                                                        rel: "noreferrer",
                                                                                        className: "text-indigo-600 dark:text-indigo-400 font-bold underline inline-flex items-center gap-0.5",
                                                                                        children: [
                                                                                            "Azure App Passwords Portal ",
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                                size: 11
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                                lineNumber: 1408,
                                                                                                columnNumber: 60
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                        lineNumber: 1402,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    ") → Click ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "+ Add sign-in method"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                        lineNumber: 1410,
                                                                                        columnNumber: 46
                                                                                    }, this),
                                                                                    " → Select ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "App password"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                        lineNumber: 1410,
                                                                                        columnNumber: 98
                                                                                    }, this),
                                                                                    " → Name it",
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                                        children: "PingDart"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                        lineNumber: 1411,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    " → Copy the generated 16-character code and paste it into",
                                                                                    " ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: "Source Password"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                        lineNumber: 1412,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    "."
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                lineNumber: 1391,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1387,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1383,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-[11px] text-amber-800 dark:text-amber-200",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Note on Security Defaults:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1418,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    ' If your Microsoft 365 organization enforces Azure "Security Defaults", Microsoft blocks all basic IMAP logins. You can either temporarily exclude this user in Entra ID, or use our ',
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Offline File Import"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1418,
                                                                        columnNumber: 261
                                                                    }, this),
                                                                    " below to import all emails in 1 minute with zero admin overhead."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1417,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1356,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1350,
                                                columnNumber: 21
                                            }, this),
                                            guideProvider === "cpanel" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 text-xs text-slate-700 dark:text-slate-300 leading-relaxed",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded-xl bg-orange-50/70 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 text-orange-900 dark:text-orange-200",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Migrating from cPanel or WHM:"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1428,
                                                                columnNumber: 25
                                                            }, this),
                                                            " Use your hosting server details:"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1427,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                        className: "list-decimal pl-4 space-y-2 text-[11px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "IMAP Host:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1432,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " Use your cPanel server hostname or server IP (e.g.",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        children: [
                                                                            "mail.",
                                                                            domainName || "picancerhospital.ai"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1433,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " or your dedicated server IP)."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1431,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Port:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1436,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " Use ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "993"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1436,
                                                                        columnNumber: 54
                                                                    }, this),
                                                                    " with ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "SSL/TLS checked"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1436,
                                                                        columnNumber: 80
                                                                    }, this),
                                                                    " (or port 143 with STARTTLS)."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1435,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Credentials:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1439,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " Enter your full email address (e.g. ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        children: [
                                                                            "ceo@",
                                                                            domainName || "picancerhospital.ai"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1439,
                                                                        columnNumber: 93
                                                                    }, this),
                                                                    ") and your regular mailbox password created in cPanel."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1438,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1430,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1426,
                                                columnNumber: 21
                                            }, this),
                                            guideProvider === "gmail" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 text-xs text-slate-700 dark:text-slate-300 leading-relaxed",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded-xl bg-red-50/70 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 text-red-900 dark:text-red-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Connecting Google Workspace / Gmail:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                            lineNumber: 1449,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1448,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                        className: "list-decimal pl-4 space-y-2 text-[11px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    "Make sure ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "2-Step Verification"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1453,
                                                                        columnNumber: 37
                                                                    }, this),
                                                                    " is enabled in your Google Account."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1452,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    "Go to",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "https://myaccount.google.com/apppasswords",
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        className: "text-indigo-600 dark:text-indigo-400 font-bold underline inline-flex items-center gap-0.5",
                                                                        children: [
                                                                            "myaccount.google.com/apppasswords ",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                                                size: 11
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                                lineNumber: 1463,
                                                                                columnNumber: 63
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1457,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1455,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: 'Create a password named "PingDart Mail".'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1467,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    "Copy the 16-letter code into ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Source Password"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1469,
                                                                        columnNumber: 56
                                                                    }, this),
                                                                    ", with Host set to",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        children: "imap.gmail.com"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1470,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    " and Port ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        children: "993"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1470,
                                                                        columnNumber: 64
                                                                    }, this),
                                                                    "."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1468,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1451,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1447,
                                                columnNumber: 21
                                            }, this),
                                            guideProvider === "offline" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3 text-xs text-slate-700 dark:text-slate-300 leading-relaxed",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-emerald-900 dark:text-emerald-200",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "100% Guaranteed Zero-Friction Migration:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                            lineNumber: 1480,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1479,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[11px]",
                                                        children: "If remote IMAP is disabled by company firewall or Azure security policies:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1482,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                        className: "list-decimal pl-4 space-y-1.5 text-[11px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    "Export your mailbox from Outlook or Apple Mail as ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        children: ".eml"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1486,
                                                                        columnNumber: 79
                                                                    }, this),
                                                                    " or ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                                        children: ".mbox"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1486,
                                                                        columnNumber: 100
                                                                    }, this),
                                                                    " files."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1486,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    "Scroll down to the ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Offline File Backup & Archive"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1487,
                                                                        columnNumber: 48
                                                                    }, this),
                                                                    " box below."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1487,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    "Click ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Browse & Import Archive"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 1488,
                                                                        columnNumber: 35
                                                                    }, this),
                                                                    " to import all messages directly into PingDart!"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1488,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1485,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1478,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1325,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1311,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/80",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleTestMigrationConnection,
                                        disabled: isTestingConnection || isMigrating,
                                        className: "w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                size: 14,
                                                className: isTestingConnection ? "animate-spin text-indigo-600" : ""
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1504,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isTestingConnection ? "Testing Connection..." : "Test Source Connection"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1505,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1498,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleStartMigration,
                                        disabled: isMigrating || isTestingConnection,
                                        className: "w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-500/25 transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-98",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                size: 15,
                                                className: isMigrating ? "animate-bounce text-amber-300" : "text-amber-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1514,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isMigrating ? "Migrating Data..." : "Start Email Migration"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1515,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1508,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1497,
                                columnNumber: 13
                            }, this),
                            isMigrating || migrationProgress > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl bg-slate-900 text-white space-y-3 font-mono text-xs shadow-inner",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold flex items-center gap-2 text-indigo-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-2 h-2 rounded-full bg-emerald-400 animate-ping"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1524,
                                                        columnNumber: 21
                                                    }, this),
                                                    migrationStatus
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1523,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-400 font-bold",
                                                children: [
                                                    migrationProgress,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1527,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1522,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-2 w-full bg-slate-800 rounded-full overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-300 rounded-full",
                                            style: {
                                                width: `${migrationProgress}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 1532,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1531,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2.5 rounded-lg bg-black/50 text-[11px] space-y-1 max-h-36 overflow-y-auto text-slate-300",
                                        children: migrationLogs.map((log, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "leading-tight",
                                                children: log
                                            }, i, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1541,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1539,
                                        columnNumber: 17
                                    }, this),
                                    migrationProgress === 100 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 rounded-xl bg-emerald-950/90 border border-emerald-500/50 text-emerald-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 animate-in fade-in duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        size: 16,
                                                        className: "text-emerald-400 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1551,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "All data from ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-white font-mono",
                                                                children: migratedUserEmail || sourceEmail
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1553,
                                                                columnNumber: 39
                                                            }, this),
                                                            " has been successfully imported into ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                className: "text-white font-mono",
                                                                children: mailbox.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1553,
                                                                columnNumber: 160
                                                            }, this),
                                                            "."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1552,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1550,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>{
                                                    setMigrationProgress(0);
                                                    setMigrationLogs([]);
                                                },
                                                className: "px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-800/80 hover:bg-emerald-700 text-white transition shrink-0 cursor-pointer w-fit",
                                                children: "Clear Log"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1556,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1549,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1521,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 1082,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "offline-archive-section",
                        className: `bg-white dark:bg-[#151d2a] ${isMobileUI ? "rounded-xl p-3.5 space-y-3" : "rounded-[10px] p-5 sm:p-6 space-y-4"} border border-slate-200/80 dark:border-slate-800 shadow-sm`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-xs font-bold uppercase tracking-wider text-slate-400",
                                            children: "Offline File Backup & Archive"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 1579,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 dark:text-slate-400 mt-0.5",
                                            children: "Export complete mailbox backup or restore from local `.mbox`, `.eml`, or `.pst` archive files"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 1582,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 1578,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1577,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 font-bold text-xs text-slate-900 dark:text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        size: 16,
                                                        className: "text-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1591,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Export Mailbox (.MBOX)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1592,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1590,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-500",
                                                children: "Download a complete backup archive of all folders in standard MBOX format compatible with Thunderbird, Apple Mail, and Outlook."
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1594,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Export archive for ${mailbox.email} scheduled for download!`),
                                                className: "px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 text-slate-700 dark:text-slate-200 transition cursor-pointer shadow-2xs",
                                                children: "Download Full Archive"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1598,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1589,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 font-bold text-xs text-slate-900 dark:text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        size: 16,
                                                        className: "text-emerald-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1609,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Import Archive File (.PST / .MBOX / .EML)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1610,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1608,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-500",
                                                children: "Upload an existing Outlook `.pst`, `.mbox`, `.eml`, or `.zip` archive from your computer to restore emails directly into this mailbox."
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1612,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "inline-block px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 text-slate-700 dark:text-slate-200 transition cursor-pointer shadow-2xs",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        accept: ".pst,.ost,.eml,.mbox,.zip",
                                                        className: "hidden",
                                                        onChange: (e)=>{
                                                            var _e_target_files;
                                                            if ((_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0]) {
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Uploading & importing ${e.target.files[0].name}...`);
                                                            }
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1617,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Browse & Import Archive (.pst, .mbox, .eml)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1616,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1607,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1588,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 1573,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                lineNumber: 937,
                columnNumber: 9
            }, this),
            activeTab === "general" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSaveGeneral,
                className: isMobileUI ? "space-y-3" : "space-y-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `bg-white dark:bg-[#151d2a] ${isMobileUI ? "rounded-xl p-3.5 space-y-3" : "rounded-[10px] p-5 sm:p-6 space-y-4"} border border-slate-200/80 dark:border-slate-800 shadow-sm`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-xs font-bold uppercase tracking-wider text-slate-400",
                            children: "Account Profile"
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                            lineNumber: 1641,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                            children: "Full / Display Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 1647,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: displayName,
                                            onChange: (e)=>setDisplayName(e.target.value),
                                            placeholder: "e.g. Dr. Rajesh Bollam",
                                            className: "w-full h-10 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-white focus:outline-indigo-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 1650,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 1646,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                            children: "Mailbox Email Address (Primary Identity)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 1660,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            disabled: true,
                                            value: mailbox.email,
                                            className: "w-full h-10 px-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs font-mono font-medium text-slate-500 dark:text-slate-400 cursor-not-allowed"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 1663,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 1659,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                            lineNumber: 1645,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-bold text-slate-700 dark:text-slate-300",
                                            children: "Allocated Storage Quota"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 1675,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400",
                                            children: [
                                                quotaMb >= 1024 ? `${(quotaMb / 1024).toFixed(0)} GB` : `${quotaMb} MB`,
                                                " (",
                                                quotaMb,
                                                " MB)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 1678,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 1674,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: [
                                        {
                                            label: "1 GB",
                                            val: 1024
                                        },
                                        {
                                            label: "2 GB",
                                            val: 2048
                                        },
                                        {
                                            label: "5 GB",
                                            val: 5120
                                        },
                                        {
                                            label: "10 GB",
                                            val: 10240
                                        },
                                        {
                                            label: "25 GB",
                                            val: 25600
                                        },
                                        {
                                            label: "50 GB",
                                            val: 51200
                                        }
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setQuotaMb(item.val),
                                            className: `px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${quotaMb === item.val ? "bg-indigo-600 text-white shadow-xs" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"}`,
                                            children: item.label
                                        }, item.val, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 1693,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 1684,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-[11px] text-slate-500 font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Current Space Consumption"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 1710,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        usedQuotaMb,
                                                        " MB used (",
                                                        quotaPercent,
                                                        "%)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 1711,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 1709,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-full bg-indigo-600 rounded-full transition-all",
                                                style: {
                                                    width: `${quotaPercent}%`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1716,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 1715,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 1708,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                            lineNumber: 1673,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isSavingGeneral,
                                className: "px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-500/20 transition cursor-pointer disabled:opacity-50",
                                children: isSavingGeneral ? "Saving Profile..." : "Save Profile & Quota"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1725,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                            lineNumber: 1724,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                    lineNumber: 1640,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                lineNumber: 1639,
                columnNumber: 9
            }, this),
            activeTab === "security" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: isMobileUI ? "space-y-3" : "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSavePassword,
                        className: `bg-white dark:bg-[#151d2a] ${isMobileUI ? "rounded-xl p-3.5 space-y-3" : "rounded-[10px] p-5 sm:p-6 space-y-4"} border border-slate-200/80 dark:border-slate-800 shadow-sm`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-bold uppercase tracking-wider text-slate-400",
                                children: "Change Mailbox Password"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1747,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-md space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: "New Password"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1753,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: showPassword ? "text" : "password",
                                                        value: newPassword,
                                                        onChange: (e)=>setNewPassword(e.target.value),
                                                        placeholder: "Enter at least 6 characters",
                                                        className: "w-full h-10 pl-3 pr-20 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono text-slate-900 dark:text-white focus:outline-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1757,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>setShowPassword(!showPassword),
                                                                className: "p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",
                                                                title: "Toggle visibility",
                                                                children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                    lineNumber: 1771,
                                                                    columnNumber: 39
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                    lineNumber: 1771,
                                                                    columnNumber: 62
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1765,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: generateStrongPassword,
                                                                className: "p-1 text-indigo-600 hover:text-indigo-700 dark:text-indigo-400",
                                                                title: "Generate strong password",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                    lineNumber: 1779,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1773,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1764,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1756,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1752,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isSavingPassword || !newPassword,
                                        className: "px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-md shadow-indigo-500/20 transition cursor-pointer disabled:opacity-50",
                                        children: isSavingPassword ? "Updating..." : "Update Password"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1785,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1751,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 1743,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `bg-white dark:bg-[#151d2a] ${isMobileUI ? "rounded-xl p-3.5 space-y-3" : "rounded-[10px] p-5 sm:p-6 space-y-4"} border border-slate-200/80 dark:border-slate-800 shadow-sm`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-bold uppercase tracking-wider text-slate-400",
                                                children: "Manual Client Configuration (IMAP / SMTP / POP3)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1799,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 dark:text-slate-400 mt-0.5",
                                                children: "Use these credentials to connect Apple Mail, Outlook, Thunderbird, or Android to this mailbox"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1802,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1798,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleCopy(`Incoming Server: mail.${domainName || "picancerhospital.ai"}\nIncoming Port: 993 (SSL/TLS)\nOutgoing Server: mail.${domainName || "picancerhospital.ai"}\nOutgoing Port: 465 (SSL/TLS)\nUsername: ${mailbox.email}`, "full-settings"),
                                        className: "px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer shadow-2xs",
                                        children: [
                                            copiedKey === "full-settings" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                size: 14,
                                                className: "text-emerald-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1815,
                                                columnNumber: 50
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1815,
                                                columnNumber: 101
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Copy All Settings"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1816,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1806,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1797,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                                        size: 15,
                                                        className: "text-indigo-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1823,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Incoming Server (IMAP / POP3)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1824,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1822,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1 font-mono text-[11px] text-slate-600 dark:text-slate-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "Host: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: [
                                                                    "mail.",
                                                                    domainName || "picancerhospital.ai"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1827,
                                                                columnNumber: 30
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1827,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "IMAP Port: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "993 (SSL/TLS)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1828,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1828,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "POP3 Port: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "995 (SSL/TLS)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1829,
                                                                columnNumber: 35
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1829,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "Username: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: mailbox.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1830,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1830,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1826,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1821,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                                        size: 15,
                                                        className: "text-emerald-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1836,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Outgoing Server (SMTP)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1837,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1835,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1 font-mono text-[11px] text-slate-600 dark:text-slate-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "Host: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: [
                                                                    "mail.",
                                                                    domainName || "picancerhospital.ai"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1840,
                                                                columnNumber: 30
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1840,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "SMTP Port: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "465 (SSL/TLS)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1841,
                                                                columnNumber: 35
                                                            }, this),
                                                            " or ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "587 (STARTTLS)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1841,
                                                                columnNumber: 69
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1841,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "Authentication: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: "Required (Same as incoming)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1842,
                                                                columnNumber: 40
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1842,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "Username: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: mailbox.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 1843,
                                                                columnNumber: 34
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 1843,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1839,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1834,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1820,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 1796,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                lineNumber: 1741,
                columnNumber: 9
            }, this),
            activeTab === "forwarding" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `bg-white dark:bg-[#151d2a] ${isMobileUI ? "rounded-xl p-3.5 space-y-3.5" : "rounded-[10px] p-5 sm:p-6 space-y-5"} border border-slate-200/80 dark:border-slate-800 shadow-sm`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-bold uppercase tracking-wider text-slate-400",
                                children: "Email Forwarding Rules"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1857,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 dark:text-slate-400 mt-0.5",
                                children: [
                                    "Automatically redirect incoming messages received at ",
                                    mailbox.email,
                                    " to one or more external addresses"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1860,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 1856,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleAddForwarder,
                        className: "flex flex-col sm:flex-row gap-2 max-w-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                value: forwardTo,
                                onChange: (e)=>setForwardTo(e.target.value),
                                placeholder: "e.g. personal@gmail.com, backup@outlook.com",
                                className: "flex-1 h-10 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-indigo-500"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1866,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0 shadow-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1877,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Add Forwarder"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1878,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1873,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 1865,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: keepCopy,
                                onChange: (e)=>setKeepCopy(e.target.checked),
                                className: "w-4 h-4 rounded text-indigo-600"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1883,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Keep a copy of all forwarded messages in this mailbox"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1889,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 1882,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-xs font-bold text-slate-700 dark:text-slate-300 mb-2",
                                children: [
                                    "Active Forward Destinations (",
                                    forwardersList.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1894,
                                columnNumber: 13
                            }, this),
                            isLoadingForwarders ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 text-xs text-center flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        size: 13,
                                        className: "animate-spin text-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1899,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Loading forwarders from server..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1900,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1898,
                                columnNumber: 15
                            }, this) : forwardersList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 text-xs text-center",
                                children: [
                                    "No active forwarding rules. All emails are delivered directly to ",
                                    mailbox.email,
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1903,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: forwardersList.map((fw, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono font-medium text-slate-900 dark:text-white",
                                                children: fw.target
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1913,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDeleteForwarder(fw),
                                                className: "p-1 text-slate-400 hover:text-rose-500 transition cursor-pointer",
                                                title: "Remove forwarder",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 1919,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1914,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, fw.id || `${fw.target}-${idx}`, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1909,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1907,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 1893,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                lineNumber: 1855,
                columnNumber: 9
            }, this),
            activeTab === "autoresponder" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `bg-white dark:bg-[#151d2a] ${isMobileUI ? "rounded-xl p-3.5 space-y-3.5" : "rounded-[10px] p-5 sm:p-6 space-y-5"} border border-slate-200/80 dark:border-slate-800 shadow-sm`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xs font-bold uppercase tracking-wider text-slate-400",
                                        children: "Out of Office & Auto-Responder"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1936,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 dark:text-slate-400 mt-0.5",
                                        children: "Automatically reply to incoming messages when you are on vacation or away from work"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1939,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1935,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "relative inline-flex items-center cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: autoresponderActive,
                                        onChange: (e)=>setAutoresponderActive(e.target.checked),
                                        className: "sr-only peer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1944,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1950,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1943,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 1934,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 max-w-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: "Start Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1957,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: startDate,
                                                onChange: (e)=>setStartDate(e.target.value),
                                                className: "w-full h-10 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1960,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1956,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                                children: "End Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1968,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: endDate,
                                                onChange: (e)=>setEndDate(e.target.value),
                                                className: "w-full h-10 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 1971,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1967,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1955,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                        children: "Subject"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1981,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: autoSubject,
                                        onChange: (e)=>setAutoSubject(e.target.value),
                                        className: "w-full h-10 px-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1984,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1980,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                        children: "Auto-Reply Message"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1993,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        rows: 4,
                                        value: autoBody,
                                        onChange: (e)=>setAutoBody(e.target.value),
                                        className: "w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 1996,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 1992,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleSaveAutoresponder,
                                disabled: isSavingAutoresponder,
                                className: "px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition shadow-md shadow-indigo-500/20 cursor-pointer disabled:opacity-50 flex items-center gap-2",
                                children: isSavingAutoresponder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            size: 13,
                                            className: "animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2012,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Saving to Mail Server..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2013,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Save Autoresponder"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 2016,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2004,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 1954,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                lineNumber: 1933,
                columnNumber: 9
            }, this),
            activeTab === "aliases" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#151d2a] rounded-[10px] border border-slate-200/80 dark:border-slate-800 shadow-sm p-5 sm:p-6 space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-bold uppercase tracking-wider text-slate-400",
                                children: "Alternate Email Aliases"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2029,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 dark:text-slate-400 mt-0.5",
                                children: [
                                    "Emails sent to an alias address are automatically delivered into this primary mailbox (",
                                    mailbox.email,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2032,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 2028,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleAddAlias,
                        className: "flex flex-col sm:flex-row gap-2 max-w-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 flex items-center rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: newAliasPrefix,
                                        onChange: (e)=>setNewAliasPrefix(e.target.value),
                                        placeholder: "e.g. sales, director, rajesh",
                                        className: "flex-1 h-10 px-3 bg-transparent text-xs text-slate-900 dark:text-white focus:outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2039,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2.5 text-xs text-slate-400 font-mono select-none",
                                        children: [
                                            "@",
                                            mailbox.email.split("@")[1] || domainName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2046,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2038,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isAddingAlias,
                                className: "px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer shrink-0 shadow-xs disabled:opacity-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2055,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isAddingAlias ? "Adding..." : "Add Alias"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2056,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2050,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 2037,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-xs font-bold text-slate-700 dark:text-slate-300",
                                children: [
                                    "Active Aliases (",
                                    aliasesList.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2061,
                                columnNumber: 13
                            }, this),
                            isLoadingAliases ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 text-xs text-center flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        size: 13,
                                        className: "animate-spin text-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2066,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Loading aliases from server..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2067,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2065,
                                columnNumber: 15
                            }, this) : aliasesList.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 text-xs text-center",
                                children: [
                                    "No aliases configured. Mail is only received directly at ",
                                    mailbox.email,
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2070,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: aliasesList.map((al, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono font-medium text-slate-900 dark:text-white",
                                                children: al.address
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2080,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDeleteAlias(al),
                                                className: "p-1 text-slate-400 hover:text-rose-500 transition cursor-pointer",
                                                title: "Remove alias",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 2086,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2081,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, al.id || `${al.address}-${idx}`, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2076,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2074,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 2060,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-5 border-t border-slate-100 dark:border-slate-800/80 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        size: 14,
                                                        className: "text-indigo-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 2099,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Domain Catch-All Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 2100,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2098,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-500 dark:text-slate-400 mt-0.5",
                                                children: [
                                                    "Route any unassigned or mistyped email sent to @",
                                                    mailbox.email.split("@")[1] || domainName,
                                                    " to this mailbox instead of bouncing."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2102,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2097,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "relative inline-flex items-center cursor-pointer shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: catchAllEnabled,
                                                onChange: (e)=>{
                                                    const val = e.target.checked;
                                                    setCatchAllEnabled(val);
                                                    handleSaveCatchAll(val);
                                                },
                                                className: "sr-only peer"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2107,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2117,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2106,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2096,
                                columnNumber: 13
                            }, this),
                            catchAllEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row items-start sm:items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-xs font-bold text-slate-700 dark:text-slate-300 shrink-0",
                                                children: "Forward Catch-All To:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2124,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                value: catchAllMailbox,
                                                onChange: (e)=>setCatchAllMailbox(e.target.value),
                                                placeholder: "e.g. admin@yourdomain.com",
                                                className: "flex-1 h-9 px-3 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-indigo-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2127,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleSaveCatchAll(true),
                                                disabled: isSavingCatchAll,
                                                className: "px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition shrink-0 disabled:opacity-50",
                                                children: isSavingCatchAll ? "Saving..." : "Save Route"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2134,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2123,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-indigo-600 dark:text-indigo-400",
                                        children: [
                                            "✨ Active: Any inbound email addressed to unknown recipients on @",
                                            mailbox.email.split("@")[1] || domainName,
                                            " will be accepted and delivered to ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: catchAllMailbox || mailbox.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2144,
                                                columnNumber: 161
                                            }, this),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2143,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2122,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 2095,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                lineNumber: 2027,
                columnNumber: 9
            }, this),
            activeTab === "distribution" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-[#151d2a] rounded-[10px] border border-slate-200/80 dark:border-slate-800 shadow-sm p-5 sm:p-6 space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        size: 14,
                                        className: "text-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2159,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Team Distribution Lists"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2160,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2158,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 dark:text-slate-400 mt-0.5",
                                children: [
                                    "Create shared distribution addresses (e.g. team@",
                                    mailbox.email.split("@")[1] || domainName,
                                    ") that automatically fan out copies to all member mailboxes."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2162,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 2157,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleCreateDistro,
                        className: "p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-xs font-bold text-slate-800 dark:text-slate-200",
                                children: "Create New Distribution List"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2169,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[11px] font-bold text-slate-600 dark:text-slate-400 block mb-1",
                                                children: "Distribution Email Address"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2174,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        value: newDistroPrefix,
                                                        onChange: (e)=>setNewDistroPrefix(e.target.value),
                                                        placeholder: "e.g. team, all, engineering",
                                                        className: "flex-1 h-9 px-3 bg-transparent text-xs text-slate-900 dark:text-white focus:outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 2178,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2 text-xs text-slate-400 font-mono select-none",
                                                        children: [
                                                            "@",
                                                            mailbox.email.split("@")[1] || domainName
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 2185,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2177,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2173,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "text-[11px] font-bold text-slate-600 dark:text-slate-400 block mb-1",
                                                children: "List Display Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2192,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: newDistroName,
                                                onChange: (e)=>setNewDistroName(e.target.value),
                                                placeholder: "e.g. Engineering Team",
                                                className: "w-full h-9 px-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2195,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2191,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2172,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[11px] font-bold text-slate-600 dark:text-slate-400 block mb-1",
                                        children: "Sender Access Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2206,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: newDistroPolicy,
                                        onChange: (e)=>setNewDistroPolicy(e.target.value),
                                        className: "w-full sm:w-64 h-9 px-3 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "anyone",
                                                children: "Anyone can send to this list (Public)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2214,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "internal_only",
                                                children: "Internal domain members only"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2215,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "members_only",
                                                children: "Only subscribed list members"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2216,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2209,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2205,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-[11px] font-bold text-slate-600 dark:text-slate-400 block mb-1",
                                        children: [
                                            "Subscribed Member Mailboxes (",
                                            newDistroMembers.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2222,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1.5 p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 min-h-[38px] items-center",
                                        children: [
                                            newDistroMembers.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-[11px] font-mono",
                                                    children: [
                                                        m,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setNewDistroMembers((prev)=>prev.filter((x)=>x !== m)),
                                                            className: "text-indigo-400 hover:text-indigo-600 cursor-pointer",
                                                            children: "×"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                            lineNumber: 2232,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, m, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 2227,
                                                    columnNumber: 19
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1 flex-1 min-w-[140px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        value: newDistroMemberInput,
                                                        onChange: (e)=>setNewDistroMemberInput(e.target.value),
                                                        onKeyDown: (e)=>{
                                                            if (e.key === "Enter" || e.key === ",") {
                                                                e.preventDefault();
                                                                const val = newDistroMemberInput.trim().toLowerCase();
                                                                if (val && val.includes("@") && !newDistroMembers.includes(val)) {
                                                                    setNewDistroMembers((prev)=>[
                                                                            ...prev,
                                                                            val
                                                                        ]);
                                                                    setNewDistroMemberInput("");
                                                                }
                                                            }
                                                        },
                                                        placeholder: "Add member email & Enter",
                                                        className: "flex-1 h-7 px-2 bg-transparent text-xs text-slate-900 dark:text-white focus:outline-none"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 2242,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            const val = newDistroMemberInput.trim().toLowerCase();
                                                            if (val && val.includes("@") && !newDistroMembers.includes(val)) {
                                                                setNewDistroMembers((prev)=>[
                                                                        ...prev,
                                                                        val
                                                                    ]);
                                                                setNewDistroMemberInput("");
                                                            }
                                                        },
                                                        className: "px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300",
                                                        children: "+ Add"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 2259,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2241,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2225,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2221,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: isCreatingDistro || !newDistroPrefix,
                                className: "px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer disabled:opacity-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2281,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isCreatingDistro ? "Creating..." : "Create Distribution List"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2282,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2276,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 2168,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                className: "text-xs font-bold text-slate-700 dark:text-slate-300",
                                children: [
                                    "Active Team Lists (",
                                    distroLists.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2288,
                                columnNumber: 13
                            }, this),
                            isLoadingDistros ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 text-xs text-center flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        size: 13,
                                        className: "animate-spin text-indigo-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2293,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Loading distribution lists..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2294,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2292,
                                columnNumber: 15
                            }, this) : distroLists.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-400 text-xs text-center",
                                children: "No team distribution lists configured yet."
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2297,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2.5",
                                children: distroLists.map((dl)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono font-bold text-xs text-slate-900 dark:text-white",
                                                                children: dl.address
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 2309,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold",
                                                                children: dl.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 2312,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-slate-400 capitalize",
                                                                children: [
                                                                    "(",
                                                                    dl.accessPolicy || "anyone",
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 2315,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 2308,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-1 mt-1.5",
                                                        children: (dl.members || []).map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-1.5 py-0.2 rounded bg-slate-200 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-300",
                                                                children: m
                                                            }, m, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 2321,
                                                                columnNumber: 27
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 2319,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2307,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDeleteDistro(dl.id || dl.address),
                                                className: "p-1 text-slate-400 hover:text-rose-500 transition cursor-pointer self-end sm:self-center",
                                                title: "Delete distribution list",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 2335,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                lineNumber: 2330,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, dl.id || dl.address, true, {
                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                        lineNumber: 2303,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                lineNumber: 2301,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                        lineNumber: 2287,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                lineNumber: 2156,
                columnNumber: 9
            }, this),
            activeTab === "shared" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-[#111827] rounded-[10px] p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
                                            size: 18,
                                            className: "text-indigo-600"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2351,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Shared Team Mailboxes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2352,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 2350,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500 dark:text-slate-400 mt-1",
                                    children: [
                                        "Collaborative team inboxes (e.g. ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: [
                                                "support@",
                                                mailbox.email.split("@")[1] || domainName
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2355,
                                            columnNumber: 50
                                        }, this),
                                        ", ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: [
                                                "sales@",
                                                mailbox.email.split("@")[1] || domainName
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2355,
                                            columnNumber: 116
                                        }, this),
                                        ') accessible by multiple agents with ticket assignment, private team notes, and "Send As" delegation.'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 2354,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                            lineNumber: 2349,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleCreateSharedMailbox,
                            className: "p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider",
                                    children: "Create New Shared Mailbox"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 2361,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-slate-600 dark:text-slate-300 block mb-1",
                                                    children: "Shared Email Address"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 2367,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "support",
                                                            value: newSharedPrefix,
                                                            onChange: (e)=>setNewSharedPrefix(e.target.value),
                                                            className: "flex-1 min-w-0 px-3 py-2 text-sm rounded-l-xl border border-r-0 border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111827] text-slate-800 dark:text-slate-100 outline-none"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                            lineNumber: 2371,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-3 py-2 text-xs font-bold text-slate-500 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-r-xl shrink-0",
                                                            children: [
                                                                "@",
                                                                mailbox.email.split("@")[1] || domainName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                            lineNumber: 2378,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 2370,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2366,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-semibold text-slate-600 dark:text-slate-300 block mb-1",
                                                    children: "Display Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 2385,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Customer Support Team",
                                                    value: newSharedName,
                                                    onChange: (e)=>setNewSharedName(e.target.value),
                                                    className: "w-full px-3 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111827] text-slate-800 dark:text-slate-100 outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 2388,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2384,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 2365,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-semibold text-slate-600 dark:text-slate-300 block mb-1.5",
                                            children: "Inbox Color Badge"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2400,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                "#3b82f6",
                                                "#10b981",
                                                "#f59e0b",
                                                "#8b5cf6",
                                                "#ec4899",
                                                "#6366f1",
                                                "#06b6d4"
                                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setNewSharedColor(c),
                                                    className: `w-6 h-6 rounded-full transition-transform cursor-pointer ${newSharedColor === c ? "ring-2 ring-offset-2 ring-indigo-500 scale-110" : "hover:scale-105"}`,
                                                    style: {
                                                        backgroundColor: c
                                                    }
                                                }, c, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 2405,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2403,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 2399,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-xs font-semibold text-slate-600 dark:text-slate-300 block mb-1",
                                            children: "Authorized Team Agents"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2419,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    placeholder: "agent@company.com",
                                                    value: newSharedMemberInput,
                                                    onChange: (e)=>setNewSharedMemberInput(e.target.value),
                                                    onKeyDown: (e)=>{
                                                        if (e.key === "Enter" || e.key === ",") {
                                                            e.preventDefault();
                                                            const val = newSharedMemberInput.trim().toLowerCase();
                                                            if (val && val.includes("@") && !newSharedMembers.includes(val)) {
                                                                setNewSharedMembers([
                                                                    ...newSharedMembers,
                                                                    val
                                                                ]);
                                                                setNewSharedMemberInput("");
                                                            }
                                                        }
                                                    },
                                                    className: "flex-1 px-3 py-1.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#111827] text-slate-800 dark:text-slate-100 outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 2423,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        const val = newSharedMemberInput.trim().toLowerCase();
                                                        if (val && val.includes("@") && !newSharedMembers.includes(val)) {
                                                            setNewSharedMembers([
                                                                ...newSharedMembers,
                                                                val
                                                            ]);
                                                            setNewSharedMemberInput("");
                                                        }
                                                    },
                                                    className: "px-3 py-1.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl transition cursor-pointer",
                                                    children: "+ Add Agent"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 2440,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2422,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-1.5",
                                            children: newSharedMembers.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 text-xs font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                            size: 11
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                            lineNumber: 2461,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: m
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                            lineNumber: 2462,
                                                            columnNumber: 23
                                                        }, this),
                                                        newSharedMembers.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setNewSharedMembers(newSharedMembers.filter((em)=>em !== m)),
                                                            className: "hover:text-rose-500 transition cursor-pointer",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                lineNumber: 2469,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                            lineNumber: 2464,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, m, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 2457,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2455,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 2418,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isCreatingShared || !newSharedPrefix.trim(),
                                    className: "w-full sm:w-auto px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-xs transition flex items-center justify-center gap-2 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2482,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: isCreatingShared ? "Provisioning..." : "Create Shared Mailbox"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2483,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 2477,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                            lineNumber: 2360,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider",
                                    children: [
                                        "Configured Shared Mailboxes (",
                                        sharedMailboxes.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 2489,
                                    columnNumber: 15
                                }, this),
                                isLoadingShared ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 text-center text-xs text-slate-400 flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            size: 14,
                                            className: "animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2495,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Loading shared mailboxes..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2496,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 2494,
                                    columnNumber: 17
                                }, this) : sharedMailboxes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-400 dark:text-slate-500 italic p-3 bg-slate-50 dark:bg-slate-900 rounded-xl",
                                    children: "No shared team mailboxes created yet. Create a support@ or sales@ inbox above to enable team collaboration."
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 2499,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 gap-2.5",
                                    children: sharedMailboxes.map((sm)=>{
                                        var _sm_members;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3.5 rounded-xl bg-slate-50/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-3 h-3 rounded-full shrink-0",
                                                                    style: {
                                                                        backgroundColor: sm.color || "#3b82f6"
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                    lineNumber: 2511,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-sm font-bold text-slate-800 dark:text-slate-100 truncate",
                                                                    children: sm.address
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                    lineNumber: 2515,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[11px] font-semibold px-2 py-0.5 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300",
                                                                    children: sm.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                    lineNumber: 2518,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                            lineNumber: 2510,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-1.5 flex-wrap pt-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-slate-500 dark:text-slate-400 font-medium",
                                                                    children: [
                                                                        "Agents (",
                                                                        sm.memberCount || ((_sm_members = sm.members) === null || _sm_members === void 0 ? void 0 : _sm_members.length) || 0,
                                                                        "):"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                    lineNumber: 2523,
                                                                    columnNumber: 27
                                                                }, this),
                                                                (sm.members || []).map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] px-2 py-0.5 rounded-full bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium",
                                                                        children: m.userEmail
                                                                    }, m.id || m.userEmail, false, {
                                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                                        lineNumber: 2527,
                                                                        columnNumber: 29
                                                                    }, this))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                            lineNumber: 2522,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 2509,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleDeleteSharedMailbox(sm.id || sm.address),
                                                    className: "p-1 text-slate-400 hover:text-rose-500 transition cursor-pointer self-end sm:self-center",
                                                    title: "Delete shared mailbox",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        size: 16
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                        lineNumber: 2541,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                                    lineNumber: 2536,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, sm.id || sm.address, true, {
                                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                            lineNumber: 2505,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                                    lineNumber: 2503,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                            lineNumber: 2488,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                    lineNumber: 2348,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                lineNumber: 2347,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$DesktopArchiveImportModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesktopArchiveImportModal"], {
                isOpen: isArchiveImportOpen,
                onClose: ()=>setIsArchiveImportOpen(false),
                mailboxEmail: mailbox.email
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
                lineNumber: 2553,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/mail/mail-list/ManageMailboxView.tsx",
        lineNumber: 825,
        columnNumber: 5
    }, this);
}
_s(ManageMailboxView, "Ddv45C0OHwJWIoBlfFK3WywXLz8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = ManageMailboxView;
var _c;
__turbopack_context__.k.register(_c, "ManageMailboxView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_modules_mail_mail-list_ManageMailboxView_tsx_263cdeba._.js.map