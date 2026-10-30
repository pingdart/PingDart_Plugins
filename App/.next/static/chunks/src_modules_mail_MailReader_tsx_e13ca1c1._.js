(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/mail/MailReader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MailReader",
    ()=>MailReader,
    "SenderAvatar",
    ()=>SenderAvatar,
    "extractEmail",
    ()=>extractEmail,
    "formatSender",
    ()=>formatSender,
    "getReplyRecipient",
    ()=>getReplyRecipient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MailReply01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/MailReply01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Forward01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Forward01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MoreVerticalIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/MoreVerticalIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$HappyIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/HappyIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Attachment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Attachment01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SentIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mic01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/StarIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$NoteEditIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/NoteEditIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/mailApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.mjs [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.mjs [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file.mjs [app-client] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.mjs [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$MailList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/modules/mail/MailList.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$mailUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/mail-list/mailUtils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$view$2f$SharedMailboxCollabBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/mail/mail-view/SharedMailboxCollabBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/dompurify/dist/purify.es.mjs [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
const formatSender = (fromStr)=>{
    if (!fromStr) return "Unknown";
    const decoded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$mailUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeMimeWords"])(fromStr);
    const regex = /^(.*?)\s*<([^>]+)>$/;
    const match = fromStr.match(regex);
    if (match) {
        let name = match[1].trim();
        if (name.startsWith('"') && name.endsWith('"')) {
            name = name.slice(1, -1).trim();
        }
        return name || match[2];
    }
    return decoded;
};
const extractEmail = (fromStr)=>{
    if (!fromStr) return "";
    const regex = /<([^>]+)>/;
    const match = fromStr.match(regex);
    if (match) return match[1].trim().toLowerCase();
    return fromStr.trim().toLowerCase();
};
const getReplyRecipient = (mail, myEmail)=>{
    if (!mail) return "";
    const cleanMyEmail = (myEmail || "").trim().toLowerCase();
    const fromEmail = extractEmail(mail.from || "");
    const replyToEmail = extractEmail(mail.replyTo || mail.reply_to || "");
    // 1. If there's a valid Reply-To header and it's not the user's own email, use it
    if (replyToEmail && replyToEmail !== cleanMyEmail) {
        return mail.replyTo || mail.reply_to;
    }
    // 2. If 'from' is NOT the user's own email, reply to 'from'
    if (fromEmail && fromEmail !== cleanMyEmail) {
        return mail.from;
    }
    // 3. If 'from' IS the user's own email (e.g. sent folder or outgoing mail), reply to recipient ('to')
    const toField = mail.to || mail.to_address;
    if (toField) {
        if (Array.isArray(toField)) {
            const otherRecipients = toField.filter((addr)=>extractEmail(addr) !== cleanMyEmail);
            return (otherRecipients.length > 0 ? otherRecipients : toField).join(", ");
        }
        const toArr = String(toField).split(',').map((s)=>s.trim()).filter(Boolean);
        const filtered = toArr.filter((addr)=>extractEmail(addr) !== cleanMyEmail);
        return (filtered.length > 0 ? filtered : toArr).join(", ");
    }
    return mail.from || "";
};
const avatarCache = {};
function SenderAvatar({ from, user, getAvatarColor, className = "h-[40px] w-[40px]" }) {
    _s();
    const email = extractEmail(from);
    const [avatarUrl, setAvatarUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SenderAvatar.useState": ()=>email && avatarCache[email] !== undefined ? avatarCache[email] : null
    }["SenderAvatar.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SenderAvatar.useEffect": ()=>{
            var _user_mailbox_email, _user_email;
            if (!email) return;
            if (avatarCache[email] !== undefined) {
                setAvatarUrl(avatarCache[email]);
                return;
            }
            const loggedInEmail = (user === null || user === void 0 ? void 0 : (_user_mailbox_email = user.mailbox_email) === null || _user_mailbox_email === void 0 ? void 0 : _user_mailbox_email.toLowerCase()) || (user === null || user === void 0 ? void 0 : (_user_email = user.email) === null || _user_email === void 0 ? void 0 : _user_email.toLowerCase());
            if (email === loggedInEmail && (user === null || user === void 0 ? void 0 : user.avatar)) {
                avatarCache[email] = user.avatar;
                setAvatarUrl(user.avatar);
                return;
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].getAvatarByEmail(email).then({
                "SenderAvatar.useEffect": (res)=>{
                    if (res.success && res.avatar) {
                        avatarCache[email] = res.avatar;
                        setAvatarUrl(res.avatar);
                    } else {
                        const fallbackUrl = `https://unavatar.io/${email}?fallback=false`;
                        avatarCache[email] = fallbackUrl;
                        setAvatarUrl(fallbackUrl);
                    }
                }
            }["SenderAvatar.useEffect"]).catch({
                "SenderAvatar.useEffect": ()=>{
                    const fallbackUrl = `https://unavatar.io/${email}?fallback=false`;
                    avatarCache[email] = fallbackUrl;
                    setAvatarUrl(fallbackUrl);
                }
            }["SenderAvatar.useEffect"]);
        }
    }["SenderAvatar.useEffect"], [
        email,
        user === null || user === void 0 ? void 0 : user.mailbox_email,
        user === null || user === void 0 ? void 0 : user.email,
        user === null || user === void 0 ? void 0 : user.avatar
    ]);
    const name = formatSender(from);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
        className: className,
        children: [
            avatarUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                src: avatarUrl,
                alt: name,
                className: "object-cover"
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/MailReader.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                style: {
                    background: getAvatarColor(name)
                },
                className: "text-white font-medium",
                children: name.substring(0, 2).toUpperCase()
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/MailReader.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/mail/MailReader.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(SenderAvatar, "gC8mUUGZ5HgEp8rhZ57E2thoFdA=");
_c = SenderAvatar;
function MailReader({ activeMail, activeFolder, password, setSelectedMail, replyText, setReplyText, getAvatarColor, onReply, onForward, onDelete, onArchive, onMarkUnread, onToggleStar, onReportSpam, fetchMails, onMarkRead, targetEmail }) {
    var _matchedSharedMbx_members, _parseSafeDate, _parseSafeDate1;
    _s1();
    const { user, accessToken } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const [detail, setDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(activeMail || null);
    const [sharedMailboxes, setSharedMailboxes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailReader.useEffect": ()=>{
            let isMounted = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/shared-mailboxes").then({
                "MailReader.useEffect": (res)=>{
                    var _res_data;
                    if (isMounted && ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && Array.isArray(res.data.data)) {
                        setSharedMailboxes(res.data.data);
                    }
                }
            }["MailReader.useEffect"]).catch({
                "MailReader.useEffect": ()=>{}
            }["MailReader.useEffect"]);
            return ({
                "MailReader.useEffect": ()=>{
                    isMounted = false;
                }
            })["MailReader.useEffect"];
        }
    }["MailReader.useEffect"], []);
    const matchedSharedMbx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MailReader.useMemo[matchedSharedMbx]": ()=>{
            var _activeMail_recipient;
            if (!sharedMailboxes.length) return null;
            const targets = [
                targetEmail === null || targetEmail === void 0 ? void 0 : targetEmail.toLowerCase().trim(),
                ...Array.isArray(activeMail === null || activeMail === void 0 ? void 0 : activeMail.to) ? activeMail.to : [
                    activeMail === null || activeMail === void 0 ? void 0 : activeMail.to
                ],
                activeMail === null || activeMail === void 0 ? void 0 : (_activeMail_recipient = activeMail.recipient) === null || _activeMail_recipient === void 0 ? void 0 : _activeMail_recipient.toLowerCase().trim()
            ].filter(Boolean);
            return sharedMailboxes.find({
                "MailReader.useMemo[matchedSharedMbx]": (sm)=>targets.some({
                        "MailReader.useMemo[matchedSharedMbx]": (t)=>t && t.includes(sm.address.toLowerCase())
                    }["MailReader.useMemo[matchedSharedMbx]"])
            }["MailReader.useMemo[matchedSharedMbx]"]);
        }
    }["MailReader.useMemo[matchedSharedMbx]"], [
        sharedMailboxes,
        targetEmail,
        activeMail
    ]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSendingReply, setIsSendingReply] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [previewAttachment, setPreviewAttachment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [iframeHeight, setIframeHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(80);
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [replyAttachments, setReplyAttachments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const replyFileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showReplyEmojiPicker, setShowReplyEmojiPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const replyEmojiPickerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailReader.useEffect": ()=>{
            const previewUrl = previewAttachment === null || previewAttachment === void 0 ? void 0 : previewAttachment.url;
            return ({
                "MailReader.useEffect": ()=>{
                    if (previewUrl === null || previewUrl === void 0 ? void 0 : previewUrl.startsWith('blob:')) URL.revokeObjectURL(previewUrl);
                }
            })["MailReader.useEffect"];
        }
    }["MailReader.useEffect"], [
        previewAttachment === null || previewAttachment === void 0 ? void 0 : previewAttachment.url
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailReader.useEffect": ()=>{
            const handleClickOutside = {
                "MailReader.useEffect.handleClickOutside": (e)=>{
                    if (replyEmojiPickerRef.current && !replyEmojiPickerRef.current.contains(e.target)) {
                        setShowReplyEmojiPicker(false);
                    }
                }
            }["MailReader.useEffect.handleClickOutside"];
            if (showReplyEmojiPicker) {
                document.addEventListener("mousedown", handleClickOutside);
            }
            return ({
                "MailReader.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["MailReader.useEffect"];
        }
    }["MailReader.useEffect"], [
        showReplyEmojiPicker
    ]);
    const handleReplyFileSelect = (e)=>{
        if (e.target.files && e.target.files.length > 0) {
            const newFiles = Array.from(e.target.files);
            const totalSize = [
                ...replyAttachments,
                ...newFiles
            ].reduce((acc, f)=>acc + f.size, 0);
            if (totalSize > 512 * 1024 * 1024) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Total attachments size exceeds 512 MB limit");
                return;
            }
            setReplyAttachments((prev)=>[
                    ...prev,
                    ...newFiles
                ]);
        }
        if (e.target) {
            e.target.value = "";
        }
    };
    const removeReplyAttachment = (indexToRemove)=>{
        setReplyAttachments((prev)=>prev.filter((_, idx)=>idx !== indexToRemove));
    };
    const formatReplyFileSize = (bytes)=>{
        if (bytes < 1024) return bytes + " B";
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
        return (bytes / (1024 * 1024)).toFixed(1) + " MB";
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailReader.useEffect": ()=>{
            if (typeof document !== 'undefined') {
                const checkDark = {
                    "MailReader.useEffect.checkDark": ()=>setIsDarkMode(document.documentElement.classList.contains('dark'))
                }["MailReader.useEffect.checkDark"];
                checkDark();
                const observer = new MutationObserver(checkDark);
                observer.observe(document.documentElement, {
                    attributes: true,
                    attributeFilter: [
                        'class'
                    ]
                });
                return ({
                    "MailReader.useEffect": ()=>observer.disconnect()
                })["MailReader.useEffect"];
            }
        }
    }["MailReader.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailReader.useEffect": ()=>{
            setIframeHeight(80);
        }
    }["MailReader.useEffect"], [
        activeMail === null || activeMail === void 0 ? void 0 : activeMail.uid
    ]);
    const displaySubject = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MailReader.useMemo[displaySubject]": ()=>{
            let subj = ((activeMail === null || activeMail === void 0 ? void 0 : activeMail.subject) || (detail === null || detail === void 0 ? void 0 : detail.subject) || '').replace(/^[:\s-]+/, '').trim();
            if (!subj || subj.toLowerCase() === '(no subject)' || subj.toLowerCase() === 'no subject' || subj.endsWith('=')) {
                var _subjMatch_;
                let bodyToScan = (detail === null || detail === void 0 ? void 0 : detail.bodyText) || (detail === null || detail === void 0 ? void 0 : detail.bodyHtml) || (activeMail === null || activeMail === void 0 ? void 0 : activeMail.bodyText) || (activeMail === null || activeMail === void 0 ? void 0 : activeMail.snippet) || '';
                if (bodyToScan.includes('=')) {
                    bodyToScan = bodyToScan.replace(/=(?:\r?\n|<br\s*\/?>)/gi, '');
                }
                const subjMatch = bodyToScan.match(/(?:^|\r?\n|<br\s*\/?>)\s*Subject:\s*([^\r\n<]+)/i);
                if (subjMatch && ((_subjMatch_ = subjMatch[1]) === null || _subjMatch_ === void 0 ? void 0 : _subjMatch_.trim())) {
                    subj = subjMatch[1].replace(/=\r?\n/g, '').replace(/^[=:\s-]+/, '').trim();
                }
            }
            return subj.replace(/=$/, '').trim() || '(no subject)';
        }
    }["MailReader.useMemo[displaySubject]"], [
        activeMail === null || activeMail === void 0 ? void 0 : activeMail.subject,
        detail === null || detail === void 0 ? void 0 : detail.subject,
        detail === null || detail === void 0 ? void 0 : detail.bodyText,
        detail === null || detail === void 0 ? void 0 : detail.bodyHtml,
        activeMail === null || activeMail === void 0 ? void 0 : activeMail.bodyText,
        activeMail === null || activeMail === void 0 ? void 0 : activeMail.snippet
    ]);
    const displayCc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MailReader.useMemo[displayCc]": ()=>{
            var _ccMatch_, _headerPrefixMatch_;
            const rawCc = (detail === null || detail === void 0 ? void 0 : detail.cc) || (activeMail === null || activeMail === void 0 ? void 0 : activeMail.cc) || (detail === null || detail === void 0 ? void 0 : detail.recipients_cc) || (activeMail === null || activeMail === void 0 ? void 0 : activeMail.recipients_cc);
            if (rawCc) {
                if (Array.isArray(rawCc)) return rawCc.join(', ');
                if (typeof rawCc === 'object' && rawCc.cc) {
                    return Array.isArray(rawCc.cc) ? rawCc.cc.join(', ') : String(rawCc.cc);
                }
                return String(rawCc).trim();
            }
            let bodyToScan = (detail === null || detail === void 0 ? void 0 : detail.bodyText) || (activeMail === null || activeMail === void 0 ? void 0 : activeMail.bodyText) || '';
            if (bodyToScan.includes('=')) {
                bodyToScan = bodyToScan.replace(/=(?:\r?\n|<br\s*\/?>)/gi, '');
            }
            const ccMatch = bodyToScan.match(/(?:^|\r?\n|<br\s*\/?>)\s*(?:Cc|CC):\s*([^]*?)(?=(?:\r?\n\s*Subject:|<br\s*\/?>\s*Subject:|\r?\n\s*\r?\n|<br\s*\/?>\s*<br\s*\/?>|$))/i);
            if (ccMatch && ((_ccMatch_ = ccMatch[1]) === null || _ccMatch_ === void 0 ? void 0 : _ccMatch_.trim())) {
                return ccMatch[1].replace(/<br\s*\/?>/gi, ' ').replace(/\r?\n/g, ' ').trim();
            }
            const headerPrefixMatch = bodyToScan.match(/^(?:&lt;|<)?([a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+>?[^]*?)(?=(?:\r?\n\s*Subject:|<br\s*\/?>\s*Subject:))/i);
            if (headerPrefixMatch && ((_headerPrefixMatch_ = headerPrefixMatch[1]) === null || _headerPrefixMatch_ === void 0 ? void 0 : _headerPrefixMatch_.trim())) {
                const addrs = headerPrefixMatch[1].replace(/<br\s*\/?>/gi, ' ').replace(/\r?\n/g, ' ').replace(/\s+/g, ' ').trim();
                if (addrs.includes('@')) {
                    return addrs;
                }
            }
            return '';
        }
    }["MailReader.useMemo[displayCc]"], [
        detail === null || detail === void 0 ? void 0 : detail.cc,
        activeMail === null || activeMail === void 0 ? void 0 : activeMail.cc,
        detail === null || detail === void 0 ? void 0 : detail.recipients_cc,
        activeMail === null || activeMail === void 0 ? void 0 : activeMail.recipients_cc,
        detail === null || detail === void 0 ? void 0 : detail.bodyText,
        activeMail === null || activeMail === void 0 ? void 0 : activeMail.bodyText
    ]);
    const displayBcc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MailReader.useMemo[displayBcc]": ()=>{
            var _bccMatch_;
            const rawBcc = (detail === null || detail === void 0 ? void 0 : detail.bcc) || (activeMail === null || activeMail === void 0 ? void 0 : activeMail.bcc) || (detail === null || detail === void 0 ? void 0 : detail.recipients_bcc) || (activeMail === null || activeMail === void 0 ? void 0 : activeMail.recipients_bcc);
            if (rawBcc) {
                if (Array.isArray(rawBcc)) return rawBcc.join(', ');
                if (typeof rawBcc === 'object' && rawBcc.bcc) {
                    return Array.isArray(rawBcc.bcc) ? rawBcc.bcc.join(', ') : String(rawBcc.bcc);
                }
                return String(rawBcc).trim();
            }
            let bodyToScan = (detail === null || detail === void 0 ? void 0 : detail.bodyText) || (activeMail === null || activeMail === void 0 ? void 0 : activeMail.bodyText) || '';
            if (bodyToScan.includes('=')) {
                bodyToScan = bodyToScan.replace(/=(?:\r?\n|<br\s*\/?>)/gi, '');
            }
            const bccMatch = bodyToScan.match(/(?:^|\r?\n|<br\s*\/?>)\s*(?:Bcc|BCC):\s*([^]*?)(?=(?:\r?\n\s*Subject:|<br\s*\/?>\s*Subject:|\r?\n\s*\r?\n|<br\s*\/?>\s*<br\s*\/?>|$))/i);
            if (bccMatch && ((_bccMatch_ = bccMatch[1]) === null || _bccMatch_ === void 0 ? void 0 : _bccMatch_.trim())) {
                return bccMatch[1].replace(/<br\s*\/?>/gi, ' ').replace(/\r?\n/g, ' ').trim();
            }
            return '';
        }
    }["MailReader.useMemo[displayBcc]"], [
        detail === null || detail === void 0 ? void 0 : detail.bcc,
        activeMail === null || activeMail === void 0 ? void 0 : activeMail.bcc,
        detail === null || detail === void 0 ? void 0 : detail.recipients_bcc,
        activeMail === null || activeMail === void 0 ? void 0 : activeMail.recipients_bcc,
        detail === null || detail === void 0 ? void 0 : detail.bodyText,
        activeMail === null || activeMail === void 0 ? void 0 : activeMail.bodyText
    ]);
    const sanitizedHtml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MailReader.useMemo[sanitizedHtml]": ()=>{
            let html = (detail === null || detail === void 0 ? void 0 : detail.bodyHtml) || '';
            const rawText = (detail === null || detail === void 0 ? void 0 : detail.bodyText) || '';
            const isPlain = !html.trim() && Boolean(rawText.trim());
            if (isPlain) {
                let cleanText = rawText.trim();
                // 1. Strip leaked header prefix (e.g. starts with orphan addresses or From/To/Cc and ends with Subject:)
                const prefix = cleanText.substring(0, 1200);
                const subjMatch = prefix.match(/(?:^|\r?\n)\s*Subject:\s*[^\r\n<]+(?:\r?\n)*/i);
                if (subjMatch && subjMatch.index !== undefined) {
                    const headerPrefix = prefix.substring(0, subjMatch.index);
                    if (headerPrefix.length < 60 || /(?:From|To|Cc|CC|Date|Sent):|@|>>/i.test(headerPrefix)) {
                        cleanText = cleanText.substring(subjMatch.index + subjMatch[0].length).trim();
                    }
                }
                // 2. Deduplicate mailto patterns: email<mailto:email>
                cleanText = cleanText.replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\s*<mailto:\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\s*>/gi, {
                    "MailReader.useMemo[sanitizedHtml]": (m, e1, e2)=>{
                        return e1.toLowerCase() === e2.toLowerCase() ? e1 : m;
                    }
                }["MailReader.useMemo[sanitizedHtml]"]);
                // 3. Clean CID references in text signatures e.g. [cid:image...]<https://facebook.com>
                cleanText = cleanText.replace(/\[cid:[^\]]+\]\s*<(https?:\/\/[^\s>]+)>/gi, {
                    "MailReader.useMemo[sanitizedHtml]": (match, url)=>{
                        const lower = url.toLowerCase();
                        if (lower.includes("facebook.com")) return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #1877f2; text-decoration: underline; font-weight: 500;">Facebook</a>`;
                        if (lower.includes("linkedin.com")) return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #0a66c2; text-decoration: underline; font-weight: 500;">LinkedIn</a>`;
                        if (lower.includes("twitter.com") || lower.includes("x.com")) return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #1da1f2; text-decoration: underline; font-weight: 500;">Twitter</a>`;
                        if (lower.includes("instagram.com")) return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #e4405f; text-decoration: underline; font-weight: 500;">Instagram</a>`;
                        const host = url.replace(/^https?:\/\/(?:www\.)?([^/]+).*/i, "$1");
                        return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; font-weight: 500;">${host}</a>`;
                    }
                }["MailReader.useMemo[sanitizedHtml]"]);
                cleanText = cleanText.replace(/\[cid:[^\]]+\]/gi, '');
                html = cleanText.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');
                // Restore generated anchor tags
                html = html.replace(/&lt;a\s+href="([^"]+)"\s+target="_blank"\s+rel="noopener noreferrer"\s+style="([^"]+)"&gt;(.*?)&lt;\/a&gt;/gi, '<a href="$1" target="_blank" rel="noopener noreferrer" style="$2">$3</a>');
                // Autolink remaining urls and emails cleanly
                html = html.replace(/(?:<|&lt;)(https?:\/\/[^\s>&]+)(?:>|&gt;)/gi, '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline;">$1</a>');
                html = html.replace(/(^|\s|>)([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(?=[<\s]|$)/gi, '$1<a href="mailto:$2" style="color: #2563eb; text-decoration: underline;">$2</a>');
            }
            if (!html.trim()) return '';
            // Strip leaked headers in HTML if present
            const htmlPrefix = html.substring(0, 1500);
            const htmlSubjMatch = htmlPrefix.match(/(?:^|\r?\n|<br\s*\/?>)\s*Subject:\s*[^\r\n<]+(?:\r?\n|<br\s*\/?>)*/i);
            if (htmlSubjMatch && htmlSubjMatch.index !== undefined) {
                const headerPrefix = htmlPrefix.substring(0, htmlSubjMatch.index);
                if (headerPrefix.length < 100 || /(?:From|To|Cc|CC|Date|Sent):|@|>>/i.test(headerPrefix)) {
                    html = html.substring(htmlSubjMatch.index + htmlSubjMatch[0].length).trim();
                }
            }
            // Deduplicate mailto links in HTML
            html = html.replace(/<a\s+[^>]*href=["']mailto:([^"']+)["'][^>]*>\s*\1\s*<\/a>\s*(?:&lt;|<)\s*<a\s+[^>]*href=["']mailto:\1["'][^>]*>\s*mailto:\1\s*<\/a>\s*(?:&gt;|>)/gi, {
                "MailReader.useMemo[sanitizedHtml]": (match, email)=>{
                    return `<a href="mailto:${email}" style="color: #2563eb; text-decoration: underline;">${email}</a>`;
                }
            }["MailReader.useMemo[sanitizedHtml]"]);
            html = html.replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\s*(?:<|&lt;)?<a\s+[^>]*href=["']mailto:\1["'][^>]*>\s*\1\s*<\/a>(?:>|&gt;)?/gi, {
                "MailReader.useMemo[sanitizedHtml]": (match, email)=>{
                    return `<a href="mailto:${email}" style="color: #2563eb; text-decoration: underline;">${email}</a>`;
                }
            }["MailReader.useMemo[sanitizedHtml]"]);
            // Strip orphan [cid:...], [Logo Description...], and [image:...] in HTML
            html = html.replace(/\[cid:[^\]]+\]/gi, '').replace(/\[Logo\s+Description[^\]]*\]/gi, '').replace(/\[image:[^\]]+\]/gi, '');
            // Resolve CID inline images if inlineImages map or attachments are present
            const hasInlineImages = (detail === null || detail === void 0 ? void 0 : detail.inlineImages) && typeof detail.inlineImages === 'object';
            const hasAttachments = Array.isArray(detail === null || detail === void 0 ? void 0 : detail.attachments) && detail.attachments.length > 0;
            if (hasInlineImages || hasAttachments) {
                const token = accessToken;
                const apiBase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])();
                const resolveCidUrl = {
                    "MailReader.useMemo[sanitizedHtml].resolveCidUrl": (cleanCid, originalCid)=>{
                        let resolved = null;
                        if (hasInlineImages && detail.inlineImages) {
                            resolved = detail.inlineImages[cleanCid] || detail.inlineImages[cleanCid.toLowerCase()] || detail.inlineImages[`cid:${cleanCid}`] || detail.inlineImages[originalCid];
                            if (!resolved) {
                                const foundKey = Object.keys(detail.inlineImages).find({
                                    "MailReader.useMemo[sanitizedHtml].resolveCidUrl.foundKey": (k)=>k.toLowerCase() === cleanCid.toLowerCase() || k.replace(/^<|>$/g, '').toLowerCase() === cleanCid.toLowerCase()
                                }["MailReader.useMemo[sanitizedHtml].resolveCidUrl.foundKey"]);
                                if (foundKey) resolved = detail.inlineImages[foundKey];
                            }
                        }
                        // Fallback: Check attachments list for matching Content-ID or filename
                        if (!resolved && hasAttachments && Array.isArray(detail === null || detail === void 0 ? void 0 : detail.attachments)) {
                            const matchedAtt = detail.attachments.find({
                                "MailReader.useMemo[sanitizedHtml].resolveCidUrl.matchedAtt": (att)=>{
                                    const attCid = (att.contentId || att.cid || '').replace(/^<|>$/g, '').trim().toLowerCase();
                                    const attName = (att.filename || '').trim().toLowerCase();
                                    const target = cleanCid.toLowerCase();
                                    return attCid === target || attName && attName === target;
                                }
                            }["MailReader.useMemo[sanitizedHtml].resolveCidUrl.matchedAtt"]);
                            const currentMsgId = (activeMail === null || activeMail === void 0 ? void 0 : activeMail.id) || (detail === null || detail === void 0 ? void 0 : detail.id);
                            if (matchedAtt && (matchedAtt.id !== undefined || matchedAtt.url)) {
                                resolved = matchedAtt.url || `/api/v1/mail/${currentMsgId}/attachments/${matchedAtt.id}`;
                            }
                        }
                        if (!resolved) return null;
                        if (resolved.startsWith('/api/')) {
                            const rootUrl = apiBase.replace(/\/api\/v1\/?$/, '');
                            const fullUrl = resolved.startsWith('http') ? resolved : `${rootUrl}${resolved}`;
                            return token ? `${fullUrl}${fullUrl.includes('?') ? '&' : '?'}token=${encodeURIComponent(token)}` : fullUrl;
                        }
                        return resolved;
                    }
                }["MailReader.useMemo[sanitizedHtml].resolveCidUrl"];
                // 1. Replace src="cid:..." and src=cid:...
                html = html.replace(/src=["']?cid:([^"'\s>]+)["']?/gi, {
                    "MailReader.useMemo[sanitizedHtml]": (match, cid)=>{
                        const cleanCid = cid.replace(/^<|>$/g, '').trim();
                        const url = resolveCidUrl(cleanCid, cid);
                        return url ? `src="${url}"` : match;
                    }
                }["MailReader.useMemo[sanitizedHtml]"]);
                // 2. Replace CSS url('cid:...')
                html = html.replace(/url\(\s*["']?cid:([^"'\s)]+)["']?\s*\)/gi, {
                    "MailReader.useMemo[sanitizedHtml]": (match, cid)=>{
                        const cleanCid = cid.replace(/^<|>$/g, '').trim();
                        const url = resolveCidUrl(cleanCid, cid);
                        return url ? `url("${url}")` : match;
                    }
                }["MailReader.useMemo[sanitizedHtml]"]);
            }
            // Unescape if whole email was accidentally entity-encoded
            if (html.includes('&lt;html') || html.includes('&lt;div') || html.includes('&lt;p&gt;') && !html.includes('<p>')) {
                html = html.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
            }
            // Sanitize with DOMPurify while preserving layout, tables, styles and CID/data images
            try {
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$dompurify$2f$dist$2f$purify$2e$es$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sanitize(html, {
                    ADD_ATTR: [
                        'target',
                        'style',
                        'class',
                        'width',
                        'height',
                        'align',
                        'valign',
                        'bgcolor',
                        'background',
                        'srcset',
                        'border',
                        'cellpadding',
                        'cellspacing',
                        'colspan',
                        'rowspan'
                    ],
                    ADD_TAGS: [
                        'style',
                        'base'
                    ],
                    FORBID_TAGS: [
                        'script',
                        'iframe',
                        'object',
                        'embed',
                        'form'
                    ],
                    FORBID_ATTR: [
                        'onload',
                        'onclick',
                        'onerror'
                    ],
                    WHOLE_DOCUMENT: false
                });
            } catch (e) {
                console.error('DOMPurify sanitize error:', e);
                return html;
            }
        }
    }["MailReader.useMemo[sanitizedHtml]"], [
        detail === null || detail === void 0 ? void 0 : detail.bodyHtml,
        detail === null || detail === void 0 ? void 0 : detail.bodyText,
        detail === null || detail === void 0 ? void 0 : detail.inlineImages,
        accessToken
    ]);
    const emailSrcDoc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MailReader.useMemo[emailSrcDoc]": ()=>{
            if (!sanitizedHtml) return '';
            const emailStyle = `
      <style>
        * { box-sizing: border-box; }
        html, body {
          height: auto !important;
          min-height: 0 !important;
          background: transparent !important;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: 14.5px;
          line-height: 1.6;
          color: ${isDarkMode ? '#e9edef' : '#111b21'};
          margin: 0;
          padding: 8px 12px;
          word-break: break-word;
        }
        a {
          color: #3b82f6;
          text-decoration: underline;
        }
        img {
          max-width: 100%;
          height: auto;
        }
        table {
          max-width: 100%;
        }
        @media (prefers-color-scheme: dark) {
          body {
            color: #e9edef;
          }
        }
      </style>
    `;
            return `${emailStyle}${sanitizedHtml}`;
        }
    }["MailReader.useMemo[emailSrcDoc]"], [
        sanitizedHtml,
        isDarkMode
    ]);
    const handleSendReply = async ()=>{
        if (!replyText.trim() && replyAttachments.length === 0) return;
        try {
            setIsSendingReply(true);
            const email = targetEmail || (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || "";
            const currentMail = {
                ...activeMail || {},
                ...detail || {}
            };
            const to = getReplyRecipient(currentMail, email) || activeMail.from;
            const baseSubj = displaySubject && displaySubject !== '(no subject)' ? displaySubject : (activeMail === null || activeMail === void 0 ? void 0 : activeMail.subject) || '';
            const subject = baseSubj.toLowerCase().startsWith("re:") ? baseSubj : `Re: ${baseSubj}`;
            const formattedDate = activeMail.date ? new Date(activeMail.date).toLocaleString([], {
                dateStyle: 'medium',
                timeStyle: 'short'
            }) : '';
            const quotedSender = activeMail.from || 'Sender';
            const origText = (detail === null || detail === void 0 ? void 0 : detail.bodyText) || (detail === null || detail === void 0 ? void 0 : detail.snippet) || '';
            const origHtml = (detail === null || detail === void 0 ? void 0 : detail.bodyHtml) || (origText ? origText.replace(/\n/g, '<br>') : '');
            const textBody = `${replyText.trim()}\n\nOn ${formattedDate}, ${quotedSender} wrote:\n> ${origText.split('\n').join('\n> ')}`;
            const htmlBody = `
        <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #111827; line-height: 1.6;">
          <p style="margin: 0 0 16px 0;">${replyText.trim().replace(/\n/g, '<br>')}</p>
          <div style="border-left: 3px solid #cbd5e1; padding-left: 12px; margin-top: 16px; color: #475569;">
            <div style="font-size: 12px; color: #64748b; margin-bottom: 8px;">
              On ${formattedDate}, <strong>${quotedSender}</strong> wrote:
            </div>
            <div>${origHtml}</div>
          </div>
        </div>
      `.trim();
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].sendMail(email, password, to, "", "", subject, textBody, htmlBody, activeMail.uid.toString(), replyAttachments.length > 0 ? replyAttachments : undefined);
            if (res.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Reply sent successfully!");
                setReplyText("");
                setReplyAttachments([]);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to send reply: " + (res.message || "Unknown error"));
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to send reply: " + err.message);
        } finally{
            setIsSendingReply(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MailReader.useEffect": ()=>{
            if (activeMail) {
                const initialText = activeMail.bodyText && activeMail.bodyText !== 'Click to read...' ? activeMail.bodyText : activeMail.snippet && activeMail.snippet !== 'Click to read...' ? activeMail.snippet : "";
                setDetail({
                    "MailReader.useEffect": (prev)=>({
                            ...activeMail,
                            attachments: activeMail.attachments && activeMail.attachments.length > 0 ? activeMail.attachments : (prev === null || prev === void 0 ? void 0 : prev.attachments) || [],
                            bodyText: initialText
                        })
                }["MailReader.useEffect"]);
            }
            const fetchDetail = {
                "MailReader.useEffect.fetchDetail": async ()=>{
                    const emailToUse = targetEmail || (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email);
                    if (!emailToUse || !(activeMail === null || activeMail === void 0 ? void 0 : activeMail.uid)) return;
                    // Optimistic in-flight email already has complete body & attachments
                    if (String(activeMail.uid).startsWith('temp_')) {
                        return;
                    }
                    const hasContent = activeMail.bodyHtml || activeMail.bodyText && activeMail.bodyText.length > 50 && activeMail.bodyText !== 'Click to read...';
                    if (!hasContent) {
                        setIsLoading(true);
                    }
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].getMessageDetail(activeMail.uid, emailToUse, activeFolder, password, activeMail.messageId || activeMail.message_id);
                        if (res.success && res.data) {
                            setDetail({
                                "MailReader.useEffect.fetchDetail": (prev)=>({
                                        ...res.data,
                                        attachments: res.data.attachments && res.data.attachments.length > 0 ? res.data.attachments : (prev === null || prev === void 0 ? void 0 : prev.attachments) || activeMail.attachments || []
                                    })
                            }["MailReader.useEffect.fetchDetail"]);
                            // Mark as read if it wasn't
                            if (!activeMail.isRead) {
                                if (onMarkRead) onMarkRead(activeMail.uid);
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].markRead(activeMail.uid, emailToUse, activeFolder, password).catch({
                                    "MailReader.useEffect.fetchDetail": (err)=>{
                                        console.error("Failed to mark read in backend:", err);
                                    }
                                }["MailReader.useEffect.fetchDetail"]);
                            }
                        }
                    } catch (err) {
                        console.error("Failed to fetch message detail", err);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["MailReader.useEffect.fetchDetail"];
            fetchDetail();
        }
    }["MailReader.useEffect"], [
        activeMail === null || activeMail === void 0 ? void 0 : activeMail.uid,
        user === null || user === void 0 ? void 0 : user.email,
        activeFolder,
        password
    ]);
    const handleDownloadAttachment = async (attachment)=>{
        try {
            const email = targetEmail || (user === null || user === void 0 ? void 0 : user.mailbox_email) || (user === null || user === void 0 ? void 0 : user.email) || "";
            var _activeMail_uid, _ref, _ref1;
            const uidToUse = (_ref1 = (_ref = (_activeMail_uid = activeMail === null || activeMail === void 0 ? void 0 : activeMail.uid) !== null && _activeMail_uid !== void 0 ? _activeMail_uid : detail === null || detail === void 0 ? void 0 : detail.uid) !== null && _ref !== void 0 ? _ref : activeMail === null || activeMail === void 0 ? void 0 : activeMail.id) !== null && _ref1 !== void 0 ? _ref1 : detail === null || detail === void 0 ? void 0 : detail.id;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$mailApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mailApi"].getAttachmentUrl(uidToUse, attachment.id || attachment.filename, email, activeFolder);
            if (res.success && res.url) {
                let finalUrl = res.url;
                if (finalUrl.startsWith('/api/')) {
                    const rootUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])().replace(/\/api\/v1\/?$/, '');
                    finalUrl = `${rootUrl}${finalUrl}`;
                }
                const name = (attachment.filename || "").toLowerCase();
                const mime = (attachment.contentType || attachment.mimeType || attachment.mime_type || "").toLowerCase();
                let type = 'other';
                if (name.endsWith('.pdf') || mime.includes('pdf')) type = 'pdf';
                else if (name.match(/\.(png|jpe?g|gif|webp|svg)$/) || mime.startsWith('image/')) type = 'image';
                else if (name.match(/\.(mp4|webm|ogg|mov)$/) || mime.startsWith('video/')) type = 'video';
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(finalUrl, {
                    params: {
                        inline: true
                    },
                    responseType: 'blob'
                });
                const attachmentBlob = response.data;
                if (type === 'pdf') {
                    const pdfHeader = await attachmentBlob.slice(0, 1024).text();
                    if (!pdfHeader.includes('%PDF-')) {
                        const responseType = attachmentBlob.type || 'unknown content type';
                        console.error('[MailReader] Attachment response is not a PDF', {
                            contentType: responseType,
                            size: attachmentBlob.size
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`This attachment is not a valid PDF (server returned ${responseType}).`);
                        return;
                    }
                }
                const previewBlob = type === 'pdf' ? new Blob([
                    attachmentBlob
                ], {
                    type: 'application/pdf'
                }) : attachmentBlob;
                const previewUrl = URL.createObjectURL(previewBlob);
                if (type !== 'other') {
                    setPreviewAttachment({
                        url: previewUrl,
                        name: attachment.filename,
                        type
                    });
                } else {
                    const link = document.createElement('a');
                    link.href = previewUrl;
                    link.download = attachment.filename || 'attachment';
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                    window.setTimeout(()=>URL.revokeObjectURL(previewUrl), 1000);
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to get download URL: " + (res.message || "Unknown error"));
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to download attachment: " + err.message);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-w-0 max-w-full overflow-x-hidden flex flex-col h-full flex-1 min-h-0",
        children: [
            isNative ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-full min-w-0 box-border flex items-center gap-2 px-3 pt-[calc(0.6rem+env(safe-area-inset-top,0px))] pb-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white rounded-b-[24px] shadow-md shrink-0 sticky top-0 z-40 select-none overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedMail(null),
                        className: "w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all active:scale-95 shadow-xs cursor-pointer shrink-0",
                        title: "Back",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                            lineNumber: 747,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                        lineNumber: 742,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SenderAvatar, {
                        from: activeMail.from || "",
                        user: user,
                        getAvatarColor: getAvatarColor,
                        className: "h-[36px] w-[36px] cursor-pointer ring-2 ring-white/30 shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                        lineNumber: 749,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0 max-w-full overflow-hidden cursor-pointer pr-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[14px] font-black text-white leading-tight truncate",
                                children: formatSender(activeMail.from || "")
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 756,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-blue-100 truncate",
                                children: displaySubject
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 757,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                        lineNumber: 755,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 shrink-0 max-w-fit",
                        children: [
                            onToggleStar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onToggleStar(!activeMail.isStarred),
                                className: `w-8 h-8 rounded-full flex items-center justify-center transition-all bg-white/15 hover:bg-white/25 border border-white/20 ${activeMail.isStarred ? 'text-yellow-300' : 'text-white'} active:scale-95 shadow-xs`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"], {
                                    size: 16,
                                    fill: activeMail.isStarred ? 'currentColor' : 'none'
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                    lineNumber: 765,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 761,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onReply,
                                className: "w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all active:scale-95 shadow-xs",
                                title: "Reply",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MailReply01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailReply01Icon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                    lineNumber: 768,
                                    columnNumber: 224
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 768,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all active:scale-95 shadow-xs cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MoreVerticalIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreVerticalIcon"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 771,
                                                columnNumber: 211
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                            lineNumber: 771,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                                        lineNumber: 770,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                        align: "end",
                                        className: "w-52 rounded-2xl shadow-xl p-1.5 bg-white dark:bg-[#1e293b] border border-slate-100 dark:border-slate-800 z-[100]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onSelect: ()=>onForward(),
                                                onClick: ()=>onForward(),
                                                className: "rounded-xl text-xs font-semibold py-2.5 cursor-pointer",
                                                children: "Forward"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 774,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onSelect: ()=>onDelete(),
                                                onClick: ()=>onDelete(),
                                                className: "rounded-xl text-xs font-semibold py-2.5 text-red-500 cursor-pointer",
                                                children: "Delete"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 775,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onSelect: ()=>onMarkUnread(),
                                                onClick: ()=>onMarkUnread(),
                                                className: "rounded-xl text-xs font-semibold py-2.5 cursor-pointer",
                                                children: "Mark as unread"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 776,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onSelect: ()=>onArchive(),
                                                onClick: ()=>onArchive(),
                                                className: "rounded-xl text-xs font-semibold py-2.5 cursor-pointer",
                                                children: "Archive"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 777,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onSelect: ()=>window.print(),
                                                onClick: ()=>window.print(),
                                                className: "rounded-xl text-xs font-semibold py-2.5 cursor-pointer",
                                                children: "Print"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 778,
                                                columnNumber: 17
                                            }, this),
                                            onReportSpam && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onSelect: ()=>onReportSpam(),
                                                onClick: ()=>onReportSpam(),
                                                className: "rounded-xl text-xs font-semibold py-2.5 text-red-500 cursor-pointer",
                                                children: "Report spam"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 779,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                                        lineNumber: 773,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 769,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                        lineNumber: 759,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/MailReader.tsx",
                lineNumber: 741,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mobile-header card-header flex items-center gap-3 px-4 pt-[calc(0.6rem+env(safe-area-inset-top))] pb-2.5 bg-[#f0f2f5] dark:bg-[#1a1c20] border-b border-[#d1d7db] dark:border-[#2d3139] shrink-0 min-h-[56px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setSelectedMail(null),
                        className: "lg:hidden p-1 rounded-full hover:bg-[#d9dbdf] dark:bg-[#2d3139] dark:hover:bg-[#2d3139] text-[#54656f] dark:text-[#a0abb2] mr-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                            lineNumber: 787,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                        lineNumber: 786,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SenderAvatar, {
                        from: activeMail.from || "",
                        user: user,
                        getAvatarColor: getAvatarColor,
                        className: "h-[40px] w-[40px] cursor-pointer"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                        lineNumber: 789,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0 cursor-pointer pr-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[16px] font-semibold text-[#111b21] dark:text-[#e9edef] leading-tight truncate",
                                children: formatSender(activeMail.from || "")
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 796,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12.5px] text-[#667781] dark:text-[#a0abb2] truncate",
                                children: displaySubject
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 797,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                        lineNumber: 795,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-0.5 ml-auto",
                        children: [
                            onToggleStar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onToggleStar(!activeMail.isStarred),
                                className: `w-9 h-9 rounded-full flex items-center justify-center transition-colors ${activeMail.isStarred ? 'text-yellow-500' : 'text-[#54656f] dark:text-[#a0abb2]'} hover:bg-[#d9dbdf] dark:bg-[#2d3139] dark:hover:bg-[#2d3139]`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$StarIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarIcon"], {
                                    size: 20,
                                    fill: activeMail.isStarred ? 'currentColor' : 'none'
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                    lineNumber: 805,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 801,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onReply,
                                className: "w-9 h-9 rounded-full flex items-center justify-center text-[#54656f] dark:text-[#a0abb2] hover:bg-[#d9dbdf] dark:bg-[#2d3139] dark:hover:bg-[#2d3139] transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MailReply01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailReply01Icon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                    lineNumber: 808,
                                    columnNumber: 219
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 808,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onForward,
                                className: "w-9 h-9 rounded-full flex items-center justify-center text-[#54656f] dark:text-[#a0abb2] hover:bg-[#d9dbdf] dark:bg-[#2d3139] dark:hover:bg-[#2d3139] transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Forward01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Forward01Icon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                    lineNumber: 809,
                                    columnNumber: 221
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 809,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onDelete,
                                className: "w-9 h-9 rounded-full flex items-center justify-center text-[#54656f] dark:text-[#a0abb2] hover:bg-[#d9dbdf] dark:bg-[#2d3139] dark:hover:bg-[#2d3139] transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                    lineNumber: 810,
                                    columnNumber: 220
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 810,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-9 h-9 rounded-full flex items-center justify-center text-[#54656f] dark:text-[#a0abb2] hover:bg-[#d9dbdf] dark:bg-[#2d3139] dark:hover:bg-[#2d3139] transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MoreVerticalIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreVerticalIcon"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 813,
                                                columnNumber: 205
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                            lineNumber: 813,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                                        lineNumber: 812,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                        align: "end",
                                        className: "w-52 rounded-lg shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: onMarkUnread,
                                                children: "Mark as unread"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 816,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: onArchive,
                                                children: "Archive"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 817,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>window.print(),
                                                children: "Print"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 818,
                                                columnNumber: 17
                                            }, this),
                                            onReportSpam && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: onReportSpam,
                                                className: "text-red-500",
                                                children: "Report spam"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 819,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                                        lineNumber: 815,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 811,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                        lineNumber: 799,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/MailReader.tsx",
                lineNumber: 785,
                columnNumber: 9
            }, this),
            matchedSharedMbx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$view$2f$SharedMailboxCollabBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SharedMailboxCollabBar"], {
                sharedMailboxId: matchedSharedMbx.id || matchedSharedMbx.address,
                sharedAddress: matchedSharedMbx.address,
                threadId: activeMail.threadId || String(activeMail.id || activeMail.uid || "thread_1"),
                currentUserEmail: user === null || user === void 0 ? void 0 : user.email,
                currentUserName: (user === null || user === void 0 ? void 0 : user.full_name) || (user === null || user === void 0 ? void 0 : user.fullName) || (user === null || user === void 0 ? void 0 : user.username),
                availableAgents: ((_matchedSharedMbx_members = matchedSharedMbx.members) === null || _matchedSharedMbx_members === void 0 ? void 0 : _matchedSharedMbx_members.map((m)=>({
                        email: m.userEmail,
                        name: m.userName || m.userEmail.split("@")[0]
                    }))) || []
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/MailReader.tsx",
                lineNumber: 828,
                columnNumber: 9
            }, this),
            (activeFolder.toLowerCase() === 'drafts' || activeMail.status === 'Draft' || activeMail.folder === 'Drafts') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#eef2ff] dark:bg-[#1e1b4b] border-b border-[#c7d2fe] dark:border-[#3730a3] px-6 py-2.5 flex items-center justify-between shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-[#3730a3] dark:text-[#c7d2fe] text-[14px] font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$NoteEditIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoteEditIcon"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 847,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "This message is a saved draft."
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 848,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                        lineNumber: 846,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onReply,
                        className: "bg-[#4338ca] text-white px-4 py-1.5 rounded-lg text-[13px] font-semibold hover:bg-[#3730a3] transition-colors shadow-sm flex items-center gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$NoteEditIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoteEditIcon"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 854,
                                columnNumber: 13
                            }, this),
                            "Edit & Send Draft"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                        lineNumber: 850,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/MailReader.tsx",
                lineNumber: 845,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex-1 min-h-0 overflow-y-auto px-3 sm:px-6 py-4 space-y-1 relative ${isNative ? "bg-[#f8fafc] dark:bg-[#0f172a]" : "bg-[#efeae2] dark:bg-[#111827]"}`,
                style: isNative ? undefined : {
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='40' r='1' fill='%23c8b89a' fill-opacity='0.3'/%3E%3C/svg%3E")`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center my-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-white dark:bg-[#1e293b] text-[#54656f] dark:text-[#a0abb2] text-[14px] font-semibold px-4 py-1 rounded-full shadow-2xs border border-slate-100 dark:border-slate-800",
                            children: activeMail.date ? ((_parseSafeDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$mailUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSafeDate"])(activeMail.date)) === null || _parseSafeDate === void 0 ? void 0 : _parseSafeDate.toLocaleString()) || activeMail.date : ""
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                            lineNumber: 873,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                        lineNumber: 872,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-0.5 relative w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative bg-white dark:bg-[#1e293b] shadow-xs border border-slate-100 dark:border-slate-800 overflow-hidden rounded-[10px]",
                            children: [
                                isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-1 bg-indigo-100 dark:bg-indigo-950 overflow-hidden absolute top-0 left-0 right-0 z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-pulse w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                                        lineNumber: 883,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                    lineNumber: 882,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-5 pt-4 pb-3.5 border-b border-[#e9edef] dark:border-[#2d3139]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2.5 flex-wrap",
                                            children: [
                                                activeMail.category && activeMail.category !== 'Primary' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `inline-flex items-center px-2.5 py-0.5 rounded text-xs font-semibold shrink-0 ${activeMail.category === 'Promotions' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' : activeMail.category === 'Social' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800' : 'bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800'}`,
                                                    children: activeMail.category
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                    lineNumber: 889,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-lg md:text-2xl font-black text-[#111b21] dark:text-[#e9edef] leading-snug font-[family-name:var(--font-magettas)]",
                                                    children: displaySubject
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                    lineNumber: 898,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                            lineNumber: 887,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5 text-[#54656f] dark:text-[#a0abb2] text-[12.5px] font-[family-name:var(--font-magettas)]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "truncate min-w-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "From: ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        className: "text-[#111b21] dark:text-[#e9edef] font-semibold",
                                                                        children: activeMail.from
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                                        lineNumber: 907,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                                lineNumber: 907,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                            lineNumber: 906,
                                                            columnNumber: 19
                                                        }, this),
                                                        ((detail === null || detail === void 0 ? void 0 : detail.date) || activeMail.date) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11.5px] text-[#667781] dark:text-[#8696a0] shrink-0 font-medium",
                                                            children: ((_parseSafeDate1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$mail$2f$mail$2d$list$2f$mailUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSafeDate"])((detail === null || detail === void 0 ? void 0 : detail.date) || activeMail.date)) === null || _parseSafeDate1 === void 0 ? void 0 : _parseSafeDate1.toLocaleString(undefined, {
                                                                weekday: 'short',
                                                                year: 'numeric',
                                                                month: 'short',
                                                                day: 'numeric',
                                                                hour: 'numeric',
                                                                minute: '2-digit',
                                                                hour12: true
                                                            })) || String((detail === null || detail === void 0 ? void 0 : detail.date) || activeMail.date)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                            lineNumber: 910,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                    lineNumber: 905,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "truncate",
                                                    children: [
                                                        "To: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-[#111b21] dark:text-[#e9edef] font-semibold",
                                                            children: (detail === null || detail === void 0 ? void 0 : detail.to) ? Array.isArray(detail.to) ? detail.to.join(', ') : detail.to : activeMail.to || 'me'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                            lineNumber: 924,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                    lineNumber: 923,
                                                    columnNumber: 17
                                                }, this),
                                                displayCc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "truncate",
                                                    children: [
                                                        "Cc: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-[#111b21] dark:text-[#e9edef] font-semibold",
                                                            children: displayCc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                            lineNumber: 930,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                    lineNumber: 929,
                                                    columnNumber: 19
                                                }, this) : null,
                                                displayBcc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "truncate",
                                                    children: [
                                                        "Bcc: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-[#111b21] dark:text-[#e9edef] font-semibold",
                                                            children: displayBcc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                            lineNumber: 937,
                                                            columnNumber: 26
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                    lineNumber: 936,
                                                    columnNumber: 19
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                            lineNumber: 904,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                    lineNumber: 886,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-5 py-5 text-[15px] text-[#111b21] dark:text-[#d1d7db] leading-[1.6] font-[family-name:var(--font-magettas)]",
                                    children: isLoading && !(detail === null || detail === void 0 ? void 0 : detail.bodyHtml) && !(detail === null || detail === void 0 ? void 0 : detail.bodyText) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4 animate-pulse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-4 bg-gray-200 dark:bg-gray-800 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 949,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-5/6 h-4 bg-gray-200 dark:bg-gray-800 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 950,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-4/6 h-4 bg-gray-200 dark:bg-gray-800 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 951,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-4 bg-gray-200 dark:bg-gray-800 rounded mt-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 952,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 953,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-1/2 h-4 bg-gray-200 dark:bg-gray-800 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 954,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                                        lineNumber: 948,
                                        columnNumber: 17
                                    }, this) : emailSrcDoc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                        srcDoc: emailSrcDoc,
                                        title: "Email Content",
                                        className: "w-full border-none bg-transparent email-iframe rounded-xl",
                                        style: {
                                            height: `${iframeHeight}px`,
                                            minHeight: '40px',
                                            transition: 'height 0.15s ease-out'
                                        },
                                        sandbox: "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
                                        onLoad: (e)=>{
                                            const iframe = e.target;
                                            try {
                                                var _iframe_contentWindow;
                                                const doc = (_iframe_contentWindow = iframe.contentWindow) === null || _iframe_contentWindow === void 0 ? void 0 : _iframe_contentWindow.document;
                                                if (doc === null || doc === void 0 ? void 0 : doc.body) {
                                                    if (!doc.querySelector('base')) {
                                                        const base = doc.createElement('base');
                                                        base.target = '_blank';
                                                        doc.head.appendChild(base);
                                                    }
                                                    doc.querySelectorAll('a').forEach((a)=>{
                                                        a.setAttribute('target', '_blank');
                                                        a.setAttribute('rel', 'noopener noreferrer');
                                                    });
                                                    let lastH = 0;
                                                    const updateHeight = ()=>{
                                                        var _doc_documentElement;
                                                        const body = doc.body;
                                                        const scrollH = body ? body.scrollHeight || body.offsetHeight : ((_doc_documentElement = doc.documentElement) === null || _doc_documentElement === void 0 ? void 0 : _doc_documentElement.scrollHeight) || 0;
                                                        if (scrollH > 10 && Math.abs(scrollH - lastH) > 4) {
                                                            lastH = scrollH;
                                                            setIframeHeight(Math.ceil(scrollH) + 12);
                                                        }
                                                    };
                                                    updateHeight();
                                                    if (iframe.contentWindow && 'ResizeObserver' in iframe.contentWindow) {
                                                        const observer = new iframe.contentWindow.ResizeObserver(()=>{
                                                            updateHeight();
                                                        });
                                                        observer.observe(doc.body);
                                                    }
                                                }
                                            } catch (e) {}
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                                        lineNumber: 957,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "whitespace-pre-wrap",
                                        children: (detail === null || detail === void 0 ? void 0 : detail.bodyText) || "No content available."
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                                        lineNumber: 1003,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                    lineNumber: 944,
                                    columnNumber: 13
                                }, this),
                                (detail === null || detail === void 0 ? void 0 : detail.attachments) && detail.attachments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-6 py-4 border-t border-[#e9edef] dark:border-[#2d3139]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[13px] font-semibold text-[#54656f] dark:text-[#a0abb2] mb-3 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Attachment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Attachment01Icon"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                    lineNumber: 1011,
                                                    columnNumber: 19
                                                }, this),
                                                " Attachments (",
                                                detail.attachments.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                            lineNumber: 1010,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-3",
                                            children: detail.attachments.map((att, idx)=>{
                                                // Determine file type icon
                                                const name = (att.filename || "").toLowerCase();
                                                const mime = (att.contentType || att.mimeType || att.mime_type || "").toLowerCase();
                                                let IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"];
                                                if (name.endsWith('.pdf') || mime.includes('pdf')) IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"];
                                                else if (name.match(/\.(png|jpe?g|gif|webp|svg)$/) || mime.startsWith('image/')) IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"];
                                                else if (name.match(/\.(mp4|webm|ogg|mov)$/) || mime.startsWith('video/')) IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"];
                                                else if (name.match(/\.(mp3|wav|m4a)$/) || mime.startsWith('audio/')) IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"];
                                                else if (name.match(/\.(doc|docx|txt|rtf|csv|xlsx|xls)$/)) IconComponent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"];
                                                const rawSize = att.sizeBytes || att.size || att.size_bytes || 0;
                                                const displaySize = (rawSize / 1024).toFixed(1) + " KB";
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>handleDownloadAttachment(att),
                                                    className: "flex items-center gap-3 p-3 border border-[#e9edef] dark:border-[#2d3139] rounded-lg hover:bg-[#f0f2f5] dark:hover:bg-[#1a1c20] cursor-pointer transition-colors max-w-sm group relative",
                                                    title: "Click to download",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 bg-[#e9edef] dark:bg-[#2d3139] rounded flex items-center justify-center text-[#54656f] dark:text-[#a0abb2] relative overflow-hidden group-hover:bg-[#d9dbdf] dark:group-hover:bg-[#3d424b] transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                                    size: 20,
                                                                    className: "opacity-90 group-hover:opacity-20 transition-opacity"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                                    lineNumber: 1036,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                        size: 20,
                                                                        className: "text-[#3b4a54] dark:text-[#e9edef]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                                        lineNumber: 1038,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                                    lineNumber: 1037,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                            lineNumber: 1035,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col overflow-hidden text-ellipsis pr-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[14px] font-medium text-[#111b21] dark:text-[#e9edef] whitespace-nowrap overflow-hidden text-ellipsis",
                                                                    children: att.filename
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                                    lineNumber: 1042,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[14px] text-[#54656f] dark:text-[#a0abb2]",
                                                                    children: displaySize
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                                    lineNumber: 1045,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                            lineNumber: 1041,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, att.id || `${att.filename}-${idx}`, true, {
                                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                    lineNumber: 1029,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                            lineNumber: 1013,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                    lineNumber: 1009,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                            lineNumber: 880,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                        lineNumber: 879,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/MailReader.tsx",
                lineNumber: 861,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `px-4 py-3 bg-[#f0f2f5] dark:bg-[#1a1c20] border-t border-[#d1d7db] dark:border-[#2d3139] shrink-0 ${isNative ? "pb-[calc(0.8rem+env(safe-area-inset-bottom,0px))]" : ""}`,
                children: [
                    replyAttachments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-2 p-2 bg-white/70 dark:bg-[#111827]/70 rounded-xl border border-[#d1d7db] dark:border-[#2d3139]",
                        children: replyAttachments.map((file, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 bg-[#f0f2f5] dark:bg-[#2d3139] px-2.5 py-1.5 rounded-lg border border-[#d1d7db] dark:border-[#404650] text-[12px] text-[#111b21] dark:text-[#f0f2f5] max-w-[260px] shadow-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        size: 14,
                                        className: "text-[#4338ca] dark:text-[#818cf8] shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                                        lineNumber: 1069,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate font-medium",
                                                children: file.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 1071,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] text-[#54656f] dark:text-[#a0abb2]",
                                                children: formatReplyFileSize(file.size)
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 1072,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                                        lineNumber: 1070,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>removeReplyAttachment(idx),
                                        className: "p-1 hover:bg-[#d9dbdf] dark:hover:bg-[#404650] rounded-full text-[#8696a0] hover:text-[#dc2626] dark:hover:text-[#f87171] transition-colors shrink-0",
                                        title: "Remove attachment",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                            lineNumber: 1080,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                                        lineNumber: 1074,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `${file.name}-${idx}`, true, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 1065,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                        lineNumber: 1063,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: replyEmojiPickerRef,
                                className: "relative shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowReplyEmojiPicker((prev)=>!prev),
                                        className: "w-10 h-10 rounded-full flex items-center justify-center text-[#54656f] dark:text-[#a0abb2] hover:bg-[#d9dbdf] dark:bg-[#2d3139] dark:hover:bg-[#2d3139] transition-colors shrink-0 mb-[1px]",
                                        title: "Emoji",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$HappyIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HappyIcon"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                            lineNumber: 1096,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                                        lineNumber: 1090,
                                        columnNumber: 13
                                    }, this),
                                    showReplyEmojiPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-12 left-0 z-50 shadow-2xl",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            onEmojiClick: (emojiData)=>{
                                                setReplyText(replyText + (emojiData.emoji || ""));
                                                setShowReplyEmojiPicker(false);
                                            },
                                            theme: isDarkMode ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Theme"].DARK : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Theme"].LIGHT,
                                            searchDisabled: false,
                                            lazyLoadEmojis: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                            lineNumber: 1100,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                                        lineNumber: 1099,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 1089,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        ref: replyFileInputRef,
                                        onChange: handleReplyFileSelect,
                                        multiple: true,
                                        className: "hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                                        lineNumber: 1115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            var _replyFileInputRef_current;
                                            return (_replyFileInputRef_current = replyFileInputRef.current) === null || _replyFileInputRef_current === void 0 ? void 0 : _replyFileInputRef_current.click();
                                        },
                                        className: "w-10 h-10 rounded-full flex items-center justify-center text-[#54656f] dark:text-[#a0abb2] hover:bg-[#d9dbdf] dark:bg-[#2d3139] dark:hover:bg-[#2d3139] transition-colors shrink-0 mb-[1px] relative",
                                        title: "Attach files (max 512MB)",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Attachment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Attachment01Icon"], {
                                                size: 22
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 1128,
                                                columnNumber: 15
                                            }, this),
                                            replyAttachments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute top-1 right-1 bg-[#4338ca] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold",
                                                children: replyAttachments.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 1130,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                                        lineNumber: 1122,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 1114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 bg-white dark:bg-[#111827] rounded-[24px] flex items-center px-4 shadow-[0_1px_2px_rgba(0,0,0,0.08)] border border-[#e9edef] dark:border-[#2d3139] min-h-[44px] py-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "reply-input",
                                    value: replyText,
                                    onChange: (e)=>setReplyText(e.target.value),
                                    placeholder: "Reply to this email",
                                    className: "flex-1 text-[14.5px] text-[#3b4a54] dark:text-[#f0f2f5] placeholder:text-[#8696a0] outline-none bg-transparent py-1.5 font-[family-name:var(--font-magettas)]"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                    lineNumber: 1138,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 1137,
                                columnNumber: 11
                            }, this),
                            replyText.trim() || replyAttachments.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSendReply,
                                disabled: isSendingReply,
                                className: `w-11 h-11 rounded-full flex items-center justify-center transition-all ${isSendingReply ? 'opacity-50' : 'hover:scale-105 active:scale-95'} shrink-0 bg-[#4338ca]`,
                                children: isSendingReply ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                    lineNumber: 1154,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                    size: 18,
                                    className: "text-white ml-0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                    lineNumber: 1156,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 1148,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "w-11 h-11 rounded-full flex items-center justify-center shrink-0 bg-[#4338ca]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mic01Icon"], {
                                    size: 20,
                                    className: "text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                    lineNumber: 1161,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 1160,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/mail/MailReader.tsx",
                        lineNumber: 1087,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/mail/MailReader.tsx",
                lineNumber: 1060,
                columnNumber: 7
            }, this),
            previewAttachment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-full max-w-6xl max-h-full flex flex-col bg-white dark:bg-[#111827] rounded-xl overflow-hidden shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between p-4 border-b border-[#e9edef] dark:border-[#2d3139] shrink-0 bg-white dark:bg-[#111827]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-lg text-[#111b21] dark:text-[#e9edef] truncate pr-4",
                                    children: previewAttachment.name
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                    lineNumber: 1173,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                const link = document.createElement('a');
                                                link.href = previewAttachment.url;
                                                link.download = previewAttachment.name;
                                                document.body.appendChild(link);
                                                link.click();
                                                link.remove();
                                            },
                                            className: "p-2 rounded-lg hover:bg-[#f0f2f5] dark:hover:bg-[#1a1c20] text-[#54656f] dark:text-[#a0abb2] transition-colors",
                                            title: "Download",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 1189,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                            lineNumber: 1177,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setPreviewAttachment(null),
                                            className: "p-2 rounded-lg hover:bg-[#f0f2f5] dark:hover:bg-[#1a1c20] text-[#54656f] dark:text-[#a0abb2] transition-colors",
                                            title: "Close",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                                lineNumber: 1196,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                                            lineNumber: 1191,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                                    lineNumber: 1176,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                            lineNumber: 1172,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-auto bg-[#f0f2f5] dark:bg-black/50 p-4 flex items-center justify-center min-h-0",
                            children: previewAttachment.type === 'image' ? // eslint-disable-next-line @next/next/no-img-element
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: previewAttachment.url,
                                alt: previewAttachment.name,
                                className: "max-w-full max-h-full object-contain"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 1205,
                                columnNumber: 17
                            }, this) : previewAttachment.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: previewAttachment.url,
                                controls: true,
                                className: "max-w-full max-h-full object-contain bg-black"
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 1211,
                                columnNumber: 17
                            }, this) : previewAttachment.type === 'pdf' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                src: previewAttachment.url,
                                className: "w-full h-full border-0",
                                title: previewAttachment.name
                            }, void 0, false, {
                                fileName: "[project]/src/modules/mail/MailReader.tsx",
                                lineNumber: 1217,
                                columnNumber: 17
                            }, this) : null
                        }, void 0, false, {
                            fileName: "[project]/src/modules/mail/MailReader.tsx",
                            lineNumber: 1202,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/mail/MailReader.tsx",
                    lineNumber: 1170,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/modules/mail/MailReader.tsx",
                lineNumber: 1169,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/mail/MailReader.tsx",
        lineNumber: 738,
        columnNumber: 5
    }, this);
}
_s1(MailReader, "wQ7xs71hnsZBioxqegVpdyOSpao=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c1 = MailReader;
var _c, _c1;
__turbopack_context__.k.register(_c, "SenderAvatar");
__turbopack_context__.k.register(_c1, "MailReader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_modules_mail_MailReader_tsx_e13ca1c1._.js.map