(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/modals/ForwardDialog.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$ForwardDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/ForwardDialog.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChannelProfileDrawer",
    ()=>ChannelProfileDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkBadge01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Megaphone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Megaphone01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PencilEdit01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PencilEdit01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Camera02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserAdd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserAdd01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Share01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Notification01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Notification01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$NotificationOff01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/NotificationOff01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/LockIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Logout01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Logout01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
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
const CATEGORY_OPTIONS = [
    "Entertainment",
    "Sports",
    "Tech",
    "Food",
    "Health",
    "News",
    "Business",
    "Education"
];
const AVATAR_GRADIENTS = [
    "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    "linear-gradient(135deg, #059669 0%, #047857 100%)",
    "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    "linear-gradient(135deg, #db2777 0%, #9d174d 100%)",
    "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
    "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
    "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)"
];
const getAvatarGradient = (name)=>{
    let hash = 0;
    const clean = (name || "Channel").trim();
    for(let i = 0; i < clean.length; i++){
        hash = clean.charCodeAt(i) + ((hash << 5) - hash);
    }
    return AVATAR_GRADIENTS[Math.abs(hash) % AVATAR_GRADIENTS.length];
};
const getChannelInitials = (name)=>{
    if (!name) return "CH";
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.trim().substring(0, 2).toUpperCase();
};
const getAvatarColor = getAvatarGradient;
function ChannelProfileDrawer({ channel, isOpen, onClose, isAdmin, isFollowing, onToggleFollow, onChannelUpdated, onDeleteChannel, onOpenAddSubscribers, messages = [] }) {
    _s();
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const avatarInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [channelName, setChannelName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((channel === null || channel === void 0 ? void 0 : channel.name) || (channel === null || channel === void 0 ? void 0 : channel.sender) || "Channel");
    const [channelDesc, setChannelDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((channel === null || channel === void 0 ? void 0 : channel.description) || "");
    const [channelCategory, setChannelCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((channel === null || channel === void 0 ? void 0 : channel.category) || "Entertainment");
    const [avatarUrl, setAvatarUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((channel === null || channel === void 0 ? void 0 : channel.avatarUrl) || "");
    const [isEditingInfo, setIsEditingInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSavingInfo, setIsSavingInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isUploadingAvatar, setIsUploadingAvatar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [subscribers, setSubscribers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingSubscribers, setIsLoadingSubscribers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [subscriberSearch, setSubscriberSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Boolean(channel === null || channel === void 0 ? void 0 : channel.isMuted));
    const [showDeleteConfirm, setShowDeleteConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDeleting, setIsDeleting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Sync state with incoming channel changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChannelProfileDrawer.useEffect": ()=>{
            if (channel) {
                setChannelName(channel.name || channel.sender || "Channel");
                setChannelDesc(channel.description || "");
                setChannelCategory(channel.category || "Entertainment");
                setAvatarUrl(channel.avatarUrl || "");
                setIsMuted(Boolean(channel.isMuted));
            }
        }
    }["ChannelProfileDrawer.useEffect"], [
        channel
    ]);
    // Fetch subscribers when drawer opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChannelProfileDrawer.useEffect": ()=>{
            if (!isOpen || !(channel === null || channel === void 0 ? void 0 : channel.id)) return;
            setIsLoadingSubscribers(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/chat/rooms/${channel.id}/members`).then({
                "ChannelProfileDrawer.useEffect": (res)=>{
                    if (res.data && res.data.success && Array.isArray(res.data.data)) {
                        setSubscribers(res.data.data);
                    }
                }
            }["ChannelProfileDrawer.useEffect"]).catch({
                "ChannelProfileDrawer.useEffect": (err)=>{
                    console.warn("Could not fetch channel members:", err);
                }
            }["ChannelProfileDrawer.useEffect"]).finally({
                "ChannelProfileDrawer.useEffect": ()=>setIsLoadingSubscribers(false)
            }["ChannelProfileDrawer.useEffect"]);
        }
    }["ChannelProfileDrawer.useEffect"], [
        isOpen,
        channel === null || channel === void 0 ? void 0 : channel.id
    ]);
    // Hardware back listener for drawer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChannelProfileDrawer.useEffect": ()=>{
            if (!isOpen) return;
            const handleBack = {
                "ChannelProfileDrawer.useEffect.handleBack": (e)=>{
                    var _e_stopImmediatePropagation;
                    e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation === void 0 ? void 0 : _e_stopImmediatePropagation.call(e);
                    if (showDeleteConfirm) {
                        setShowDeleteConfirm(false);
                    } else if (isEditingInfo) {
                        setIsEditingInfo(false);
                    } else {
                        onClose();
                    }
                }
            }["ChannelProfileDrawer.useEffect.handleBack"];
            window.addEventListener("app:go_back", handleBack);
            return ({
                "ChannelProfileDrawer.useEffect": ()=>window.removeEventListener("app:go_back", handleBack)
            })["ChannelProfileDrawer.useEffect"];
        }
    }["ChannelProfileDrawer.useEffect"], [
        isOpen,
        showDeleteConfirm,
        isEditingInfo,
        onClose
    ]);
    // Extract media items from messages
    const mediaItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChannelProfileDrawer.useMemo[mediaItems]": ()=>{
            return messages.filter({
                "ChannelProfileDrawer.useMemo[mediaItems]": (m)=>m.type === "image" || m.type === "video" || typeof m.text === "string" && /\.(jpg|jpeg|png|webp|gif|mp4|webm|mov)$/i.test(m.text)
            }["ChannelProfileDrawer.useMemo[mediaItems]"]);
        }
    }["ChannelProfileDrawer.useMemo[mediaItems]"], [
        messages
    ]);
    // Copy shareable link
    const handleCopyLink = ()=>{
        const inviteLink = ("TURBOPACK compile-time truthy", 1) ? `${window.location.origin}/user?tab=Channels&msgId=${channel.id}` : "TURBOPACK unreachable";
        navigator.clipboard.writeText(inviteLink);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Channel invite link copied to clipboard! 📋");
    };
    // Toggle Mute
    const handleToggleMute = async ()=>{
        const next = !isMuted;
        setIsMuted(next);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/chat/rooms/${channel.id}/mute`);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(next ? "Channel notifications muted" : "Channel notifications unmuted");
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(next ? "Channel notifications muted" : "Channel notifications unmuted");
        }
    };
    // Avatar upload
    const handleAvatarFileChange = async (e)=>{
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (!file || !(channel === null || channel === void 0 ? void 0 : channel.id)) return;
        setIsUploadingAvatar(true);
        const formData = new FormData();
        formData.append("file", file);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/chat/rooms/${channel.id}/avatar`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if (res.data && res.data.success) {
                const newUrl = res.data.avatarUrl || URL.createObjectURL(file);
                setAvatarUrl(newUrl);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Channel picture updated! 📸");
                if (onChannelUpdated) onChannelUpdated({
                    avatarUrl: newUrl
                });
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to update channel avatar");
        } finally{
            setIsUploadingAvatar(false);
            if (avatarInputRef.current) avatarInputRef.current.value = "";
        }
    };
    // Save Name, Description & Category edits
    const handleSaveInfo = async ()=>{
        if (!channelName.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Channel name cannot be empty");
            return;
        }
        setIsSavingInfo(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/chat/rooms/${channel.id}`, {
                name: channelName.trim(),
                description: channelDesc.trim(),
                category: channelCategory
            });
            if (res.data && res.data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Channel details updated! ✨");
                setIsEditingInfo(false);
                if (onChannelUpdated) {
                    onChannelUpdated({
                        name: channelName.trim(),
                        description: channelDesc.trim(),
                        category: channelCategory
                    });
                }
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to save channel details");
        } finally{
            setIsSavingInfo(false);
        }
    };
    // Remove member (Admin only)
    const handleRemoveMember = async (memberId, memberName)=>{
        if (!confirm(`Remove ${memberName} from this channel?`)) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].removeMember(channel.id, memberId);
            setSubscribers((prev)=>prev.filter((m)=>m.id !== memberId));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Removed ${memberName}`);
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to remove member");
        }
    };
    // Delete Channel (Admin only)
    const handleDeleteChannelConfirm = async ()=>{
        if (!(channel === null || channel === void 0 ? void 0 : channel.id)) return;
        setIsDeleting(true);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/chat/rooms/${channel.id}`);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Channel deleted successfully.");
            setShowDeleteConfirm(false);
            onClose();
            if (onDeleteChannel) onDeleteChannel();
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to delete channel");
        } finally{
            setIsDeleting(false);
        }
    };
    const filteredSubscribers = subscribers.filter((s)=>{
        if (!subscriberSearch.trim()) return true;
        return s.fullName.toLowerCase().includes(subscriberSearch.toLowerCase().trim());
    });
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200",
        onClick: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full sm:max-w-md md:max-w-lg h-full bg-white dark:bg-[#111827] flex flex-col shadow-2xl overflow-hidden animate-in slide-in-from-right duration-200",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white shadow-sm px-4 pb-3 shrink-0 flex items-center justify-between gap-3 ${isNative ? "pt-[calc(0.75rem+env(safe-area-inset-top,12px))]" : "pt-3.5"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        className: "w-8 h-8 rounded-[8px] bg-white/15 hover:bg-white/25 active:scale-95 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer shrink-0",
                                        title: "Close",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                            lineNumber: 329,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 323,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-base font-black text-white truncate tracking-tight",
                                        children: "Channel Info"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1",
                                children: [
                                    isAdmin && !isEditingInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsEditingInfo(true),
                                        className: "flex items-center gap-1 px-3 py-1.5 rounded-[8px] bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-all cursor-pointer border border-white/25",
                                        title: "Edit Channel Details",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PencilEdit01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PencilEdit01Icon"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 342,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 343,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: handleCopyLink,
                                        className: "w-8 h-8 rounded-[8px] bg-white/15 hover:bg-white/25 active:scale-95 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer",
                                        title: "Share Link",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Share01Icon"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                            lineNumber: 352,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 346,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                lineNumber: 334,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/80 bg-slate-50 dark:bg-[#0b141a]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 bg-white dark:bg-[#111827] flex flex-col items-center text-center space-y-3 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                className: "h-24 w-24 rounded-[16px] border-4 border-white dark:border-[#111827] shadow-lg",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(avatarUrl),
                                                        className: "object-cover rounded-[16px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                        style: {
                                                            background: getAvatarGradient(channelName)
                                                        },
                                                        className: "text-white font-black text-2xl rounded-[16px]",
                                                        children: getChannelInitials(channelName)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 362,
                                                columnNumber: 15
                                            }, this),
                                            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "file",
                                                        ref: avatarInputRef,
                                                        onChange: handleAvatarFileChange,
                                                        accept: "image/*",
                                                        className: "hidden"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            var _avatarInputRef_current;
                                                            return (_avatarInputRef_current = avatarInputRef.current) === null || _avatarInputRef_current === void 0 ? void 0 : _avatarInputRef_current.click();
                                                        },
                                                        disabled: isUploadingAvatar,
                                                        className: "absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center border-2 border-white dark:border-[#111827] shadow-md transition-transform active:scale-90 cursor-pointer disabled:opacity-50",
                                                        title: "Change Channel Photo",
                                                        children: isUploadingAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                            className: "w-4 h-4 animate-spin text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                            lineNumber: 390,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Camera02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Camera02Icon"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                            lineNumber: 392,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 382,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 361,
                                        columnNumber: 13
                                    }, this),
                                    isEditingInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full space-y-3 mt-2 text-left animate-in fade-in duration-150",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[11px] font-bold text-slate-500 dark:text-slate-400 block mb-1",
                                                        children: "Channel Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        value: channelName,
                                                        onChange: (e)=>setChannelName(e.target.value),
                                                        className: "rounded-[8px] text-xs font-bold bg-slate-50 dark:bg-slate-800",
                                                        autoFocus: true
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 402,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[11px] font-bold text-slate-500 dark:text-slate-400 block mb-1",
                                                        children: "Category"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 415,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: channelCategory,
                                                        onChange: (e)=>setChannelCategory(e.target.value),
                                                        className: "w-full px-3 py-2 rounded-[8px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-900 dark:text-white outline-none cursor-pointer",
                                                        children: CATEGORY_OPTIONS.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: cat,
                                                                children: cat
                                                            }, cat, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                                lineNumber: 424,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 414,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "text-[11px] font-bold text-slate-500 dark:text-slate-400 block mb-1",
                                                        children: "Description"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 432,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                        value: channelDesc,
                                                        onChange: (e)=>setChannelDesc(e.target.value),
                                                        placeholder: "Describe what updates your channel shares...",
                                                        rows: 3,
                                                        className: "w-full p-2.5 rounded-[8px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none resize-none leading-relaxed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 431,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-end gap-2 pt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "sm",
                                                        variant: "outline",
                                                        onClick: ()=>setIsEditingInfo(false),
                                                        className: "rounded-[8px] text-xs cursor-pointer",
                                                        children: "Cancel"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 445,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "sm",
                                                        onClick: handleSaveInfo,
                                                        disabled: isSavingInfo,
                                                        className: "bg-blue-600 hover:bg-blue-700 text-white rounded-[8px] text-xs font-bold cursor-pointer",
                                                        children: [
                                                            isSavingInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                className: "w-3.5 h-3.5 animate-spin mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                                lineNumber: 459,
                                                                columnNumber: 37
                                                            }, this) : null,
                                                            "Save Details"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 453,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 444,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 401,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg font-black text-slate-900 dark:text-white tracking-tight",
                                                        children: channelName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 467,
                                                        columnNumber: 19
                                                    }, this),
                                                    (channel === null || channel === void 0 ? void 0 : channel.verified) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {
                                                        size: 18,
                                                        className: "text-blue-600 dark:text-blue-400 shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 471,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 466,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400 font-medium mt-0.5",
                                                children: isAdmin ? "👑 You are the Channel Administrator" : "Official Verified Broadcast Channel"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 474,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center gap-2 mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-bold text-[11px] border border-blue-200/60 dark:border-blue-800",
                                                        children: channelCategory
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 478,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-slate-500 dark:text-slate-400",
                                                        children: subscribers.length > 0 ? `${subscribers.length} subscribers` : `${channel.followersCount || 1} followers`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 477,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 465,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full flex items-center justify-center gap-4 pt-3 border-t border-slate-100 dark:border-slate-800/80",
                                        children: [
                                            isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: onOpenAddSubscribers,
                                                className: "flex flex-col items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-[10px] bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-2xs",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserAdd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserAdd01Icon"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 496,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-bold",
                                                        children: "Add Users"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 499,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 491,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: onToggleFollow,
                                                className: "flex flex-col items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-10 h-10 rounded-[10px] border flex items-center justify-center shadow-2xs ${isFollowing ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 border-emerald-300 dark:border-emerald-800" : "bg-blue-600 text-white border-blue-600"}`,
                                                        children: isFollowing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 36
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Megaphone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Megaphone01Icon"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 58
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 507,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-bold",
                                                        children: isFollowing ? "Following" : "Follow"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 502,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleCopyLink,
                                                className: "flex flex-col items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-2xs",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Share01Icon"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                            lineNumber: 524,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 523,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-bold",
                                                        children: "Share Link"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 526,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 518,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: handleToggleMute,
                                                className: "flex flex-col items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 shadow-2xs",
                                                        children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$NotificationOff01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationOff01Icon"], {
                                                            size: 18,
                                                            className: "text-amber-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                            lineNumber: 535,
                                                            columnNumber: 30
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Notification01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Notification01Icon"], {
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                            lineNumber: 535,
                                                            columnNumber: 81
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 534,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-bold",
                                                        children: isMuted ? "Muted" : "Mute"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 529,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 489,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-white dark:bg-[#111827]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1",
                                        children: "Description"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 544,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-700 dark:text-slate-200 leading-relaxed break-words whitespace-pre-wrap",
                                        children: channelDesc || "No description added yet. Stay tuned for official updates!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 547,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                lineNumber: 543,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-amber-500/5 dark:bg-amber-950/20 flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockIcon"], {
                                        size: 18,
                                        className: "text-amber-600 dark:text-amber-400 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 554,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-amber-900 dark:text-amber-300 leading-relaxed font-medium",
                                        children: "Follower identities and personal phone numbers are hidden from other subscribers for security & privacy."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 555,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                lineNumber: 553,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-white dark:bg-[#111827] space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-bold text-slate-900 dark:text-white block",
                                                        children: [
                                                            "Subscribers (",
                                                            subscribers.length > 0 ? subscribers.length : channel.followersCount || 1,
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-slate-400",
                                                        children: isAdmin ? "Manage and view subscribers" : "Active audience list"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 567,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 563,
                                                columnNumber: 15
                                            }, this),
                                            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: onOpenAddSubscribers,
                                                className: "flex items-center gap-1 px-3 py-1.5 rounded-[8px] bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-xs font-bold hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserAdd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserAdd01Icon"], {
                                                        size: 14
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 578,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Add Users"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 579,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 573,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 562,
                                        columnNumber: 13
                                    }, this),
                                    subscribers.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Search subscribers...",
                                            value: subscriberSearch,
                                            onChange: (e)=>setSubscriberSearch(e.target.value),
                                            className: "w-full px-3 py-1.5 rounded-[6px] bg-slate-100 dark:bg-slate-800 text-xs text-slate-900 dark:text-white outline-none"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                            lineNumber: 587,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 586,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "divide-y divide-slate-100 dark:divide-slate-800/60",
                                        children: isLoadingSubscribers ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-6 text-center text-slate-400 text-xs flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    className: "w-4 h-4 animate-spin text-blue-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                    lineNumber: 601,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Loading subscribers..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                    lineNumber: 602,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                            lineNumber: 600,
                                            columnNumber: 17
                                        }, this) : filteredSubscribers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-6 text-center text-slate-400 text-xs",
                                            children: subscriberSearch ? "No matching subscriber found" : "No subscribers yet"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                            lineNumber: 605,
                                            columnNumber: 17
                                        }, this) : filteredSubscribers.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between py-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2.5 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                                className: "h-9 w-9 rounded-[8px] border border-slate-200 dark:border-slate-700",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                                        src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(member.avatar),
                                                                        className: "object-cover rounded-[8px]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                                        lineNumber: 613,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                        style: {
                                                                            background: getAvatarGradient(member.fullName)
                                                                        },
                                                                        className: "text-white font-bold text-xs rounded-[8px]",
                                                                        children: getChannelInitials(member.fullName)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                                        lineNumber: 614,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                                lineNumber: 612,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-bold text-slate-900 dark:text-white truncate",
                                                                        children: member.fullName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                                        lineNumber: 622,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[10px] text-slate-400",
                                                                        children: member.role === "admin" ? "👑 Channel Creator" : "Subscriber"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                                        lineNumber: 625,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                                lineNumber: 621,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 611,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: member.role === "admin" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-black px-2 py-0.5 rounded-[4px] bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-800/40",
                                                            children: "Admin"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                            lineNumber: 633,
                                                            columnNumber: 25
                                                        }, this) : isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>handleRemoveMember(member.id, member.fullName),
                                                            className: "p-1.5 text-slate-400 hover:text-red-500 rounded-[6px] hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors cursor-pointer",
                                                            title: "Remove user",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                                lineNumber: 643,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                            lineNumber: 637,
                                                            columnNumber: 25
                                                        }, this) : null
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                        lineNumber: 631,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, member.id, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 610,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 598,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                lineNumber: 561,
                                columnNumber: 11
                            }, this),
                            mediaItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-white dark:bg-[#111827] space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-slate-900 dark:text-white",
                                                children: [
                                                    "Media & Attachments (",
                                                    mediaItems.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 657,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] text-blue-600 dark:text-blue-400 font-bold",
                                                children: "Recent"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 660,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 656,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-4 gap-2",
                                        children: mediaItems.slice(0, 8).map((item, idx)=>{
                                            var _item_id;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aspect-square rounded-[8px] bg-slate-100 dark:bg-slate-800 overflow-hidden border border-slate-200 dark:border-slate-700/80 relative",
                                                children: item.type === "video" || /\.(mp4|webm|mov)$/i.test(item.text) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(item.text),
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                    lineNumber: 671,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(item.text),
                                                    alt: "Media attachment",
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                    lineNumber: 676,
                                                    columnNumber: 23
                                                }, this)
                                            }, (_item_id = item.id) !== null && _item_id !== void 0 ? _item_id : idx, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                                lineNumber: 666,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 664,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                lineNumber: 655,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 bg-white dark:bg-[#111827] space-y-2",
                                children: isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setShowDeleteConfirm(true),
                                    className: "w-full flex items-center justify-center gap-2 py-2.5 rounded-[8px] border border-red-200 dark:border-red-900/60 bg-red-50/50 dark:bg-red-950/20 text-red-600 dark:text-red-400 text-xs font-bold hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                            lineNumber: 696,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Delete Broadcast Channel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                            lineNumber: 697,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                    lineNumber: 691,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onToggleFollow,
                                    className: "w-full flex items-center justify-center gap-2 py-2.5 rounded-[8px] border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Logout01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logout01Icon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                            lineNumber: 705,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Unfollow Channel"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                            lineNumber: 706,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                    lineNumber: 700,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                lineNumber: 689,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                        lineNumber: 358,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: showDeleteConfirm,
                onOpenChange: setShowDeleteConfirm,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "sm:max-w-[400px] bg-white dark:bg-[#111827] rounded-[12px] p-6 border border-slate-200 dark:border-slate-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-[8px] bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400 flex items-center justify-center mb-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                        lineNumber: 718,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                    lineNumber: 717,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    className: "text-base font-bold text-slate-900 dark:text-white",
                                    children: [
                                        'Delete "',
                                        channelName,
                                        '"?'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                    lineNumber: 720,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                    children: "This will permanently delete this broadcast channel and all its updates for all subscribers. This action cannot be undone."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                    lineNumber: 723,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                            lineNumber: 716,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                            className: "gap-2 sm:gap-0 pt-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    onClick: ()=>setShowDeleteConfirm(false),
                                    disabled: isDeleting,
                                    className: "rounded-[8px] text-xs cursor-pointer",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                    lineNumber: 728,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleDeleteChannelConfirm,
                                    disabled: isDeleting,
                                    className: "bg-red-600 hover:bg-red-700 text-white rounded-[8px] text-xs font-bold shadow-xs cursor-pointer",
                                    children: [
                                        isDeleting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-3.5 h-3.5 animate-spin mr-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                            lineNumber: 741,
                                            columnNumber: 29
                                        }, this) : null,
                                        "Delete Channel"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                                    lineNumber: 736,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                            lineNumber: 727,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                    lineNumber: 715,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
                lineNumber: 714,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx",
        lineNumber: 308,
        columnNumber: 5
    }, this);
}
_s(ChannelProfileDrawer, "OyEcQDX4EkZ8x3mB+hAkGVVrQnA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = ChannelProfileDrawer;
var _c;
__turbopack_context__.k.register(_c, "ChannelProfileDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/channels/AddSubscribersModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddSubscribersModal",
    ()=>AddSubscribersModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserAdd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserAdd01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-client] (ecmascript)");
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
    "#0891b2"
];
const getAvatarColor = (name)=>AVATAR_COLORS[(name || "U").charCodeAt(0) % AVATAR_COLORS.length];
function AddSubscribersModal({ isOpen, onClose, channelId, channelName, existingMemberIds = [], onSuccess }) {
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [contacts, setContacts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedUserIds, setSelectedUserIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load contacts when modal opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddSubscribersModal.useEffect": ()=>{
            if (!isOpen) {
                setSelectedUserIds([]);
                setSearchQuery("");
                return;
            }
            const handleBack = {
                "AddSubscribersModal.useEffect.handleBack": (e)=>{
                    var _e_stopImmediatePropagation;
                    e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation === void 0 ? void 0 : _e_stopImmediatePropagation.call(e);
                    onClose();
                }
            }["AddSubscribersModal.useEffect.handleBack"];
            window.addEventListener("app:go_back", handleBack);
            setIsLoading(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].getContacts().then({
                "AddSubscribersModal.useEffect": (res)=>{
                    if (res.success && Array.isArray(res.data)) {
                        setContacts(res.data);
                    }
                }
            }["AddSubscribersModal.useEffect"]).catch({
                "AddSubscribersModal.useEffect": (err)=>{
                    console.warn("Failed to load contacts for adding subscribers:", err);
                }
            }["AddSubscribersModal.useEffect"]).finally({
                "AddSubscribersModal.useEffect": ()=>setIsLoading(false)
            }["AddSubscribersModal.useEffect"]);
            return ({
                "AddSubscribersModal.useEffect": ()=>{
                    window.removeEventListener("app:go_back", handleBack);
                }
            })["AddSubscribersModal.useEffect"];
        }
    }["AddSubscribersModal.useEffect"], [
        isOpen,
        onClose
    ]);
    // Live search users when query changes and contacts are few
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddSubscribersModal.useEffect": ()=>{
            if (!searchQuery.trim() || searchQuery.length < 2) return;
            const timer = setTimeout({
                "AddSubscribersModal.useEffect.timer": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/user/search?q=${encodeURIComponent(searchQuery.trim())}`).then({
                        "AddSubscribersModal.useEffect.timer": (res)=>{
                            if (res.data && res.data.success && Array.isArray(res.data.users)) {
                                setContacts({
                                    "AddSubscribersModal.useEffect.timer": (prev)=>{
                                        const map = new Map();
                                        prev.forEach({
                                            "AddSubscribersModal.useEffect.timer": (c)=>map.set(c.id, c)
                                        }["AddSubscribersModal.useEffect.timer"]);
                                        res.data.users.forEach({
                                            "AddSubscribersModal.useEffect.timer": (u)=>{
                                                if (!map.has(u.id)) {
                                                    var _u_email;
                                                    map.set(u.id, {
                                                        id: u.id,
                                                        name: u.fullName || ((_u_email = u.email) === null || _u_email === void 0 ? void 0 : _u_email.split("@")[0]),
                                                        fullName: u.fullName,
                                                        email: u.email,
                                                        phone: u.phone,
                                                        avatar: u.avatar
                                                    });
                                                }
                                            }
                                        }["AddSubscribersModal.useEffect.timer"]);
                                        return Array.from(map.values());
                                    }
                                }["AddSubscribersModal.useEffect.timer"]);
                            }
                        }
                    }["AddSubscribersModal.useEffect.timer"]).catch({
                        "AddSubscribersModal.useEffect.timer": ()=>{}
                    }["AddSubscribersModal.useEffect.timer"]);
                }
            }["AddSubscribersModal.useEffect.timer"], 300);
            return ({
                "AddSubscribersModal.useEffect": ()=>clearTimeout(timer)
            })["AddSubscribersModal.useEffect"];
        }
    }["AddSubscribersModal.useEffect"], [
        searchQuery
    ]);
    const toggleSelectUser = (id)=>{
        setSelectedUserIds((prev)=>prev.includes(id) ? prev.filter((i)=>i !== id) : [
                ...prev,
                id
            ]);
    };
    const filteredContacts = contacts.filter((c)=>{
        const name = (c.fullName || c.name || c.email || "").toLowerCase();
        const q = searchQuery.toLowerCase().trim();
        return !q || name.includes(q) || c.email && c.email.toLowerCase().includes(q);
    });
    const handleAddSubscribers = async ()=>{
        if (selectedUserIds.length === 0 || !channelId) return;
        setIsSubmitting(true);
        let addedCount = 0;
        for (const userId of selectedUserIds){
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].addMember(channelId, userId);
                addedCount++;
            } catch (err) {
                var _err_response_data, _err_response;
                console.warn(`Failed to add user ${userId}:`, (err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || err.message);
            }
        }
        setIsSubmitting(false);
        if (addedCount > 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Added ${addedCount} user(s) to ${channelName}! 🎉`);
            if (onSuccess) onSuccess();
            onClose();
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Users could not be added (they may already be in this channel).");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: (open)=>!open && onClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[460px] bg-white dark:bg-[#111827] rounded-[14px] p-6 border border-slate-200 dark:border-slate-800 shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-[10px] bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center mb-2 shadow-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserAdd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserAdd01Icon"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "text-base font-black text-slate-900 dark:text-white",
                            children: "Add Channel Subscribers"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            className: "text-xs text-slate-500 dark:text-slate-400",
                            children: [
                                "Select users to add to ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: channelName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                                    lineNumber: 174,
                                    columnNumber: 36
                                }, this),
                                ". They will receive all broadcast updates."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative my-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                            size: 15,
                            className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search contacts or users by name/email...",
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value),
                            className: "w-full pl-9 pr-8 py-2 rounded-[8px] bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:ring-1 focus:ring-blue-500 transition-all",
                            autoFocus: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this),
                        searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setSearchQuery(""),
                            className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                                lineNumber: 195,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                            lineNumber: 190,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                    lineNumber: 179,
                    columnNumber: 9
                }, this),
                selectedUserIds.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1.5 mb-2 overflow-x-auto no-scrollbar py-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-bold text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800",
                            children: [
                                selectedUserIds.length,
                                " selected"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setSelectedUserIds([]),
                            className: "text-[11px] text-slate-400 hover:text-red-500 font-semibold cursor-pointer underline ml-1",
                            children: "Clear all"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                            lineNumber: 206,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                    lineNumber: 202,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-64 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/60 border border-slate-100 dark:border-slate-800 rounded-[10px] p-1",
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-10 flex flex-col items-center justify-center gap-2 text-slate-400 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-5 h-5 animate-spin text-blue-600"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                                lineNumber: 220,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Loading contacts..."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                                lineNumber: 221,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                        lineNumber: 219,
                        columnNumber: 13
                    }, this) : filteredContacts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-10 text-center text-slate-400 text-xs",
                        children: searchQuery ? `No users found matching "${searchQuery}"` : "No contacts available to add."
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                        lineNumber: 224,
                        columnNumber: 13
                    }, this) : filteredContacts.map((contact)=>{
                        var _contact_email;
                        const displayName = contact.fullName || contact.name || ((_contact_email = contact.email) === null || _contact_email === void 0 ? void 0 : _contact_email.split("@")[0]) || "User";
                        const isSelected = selectedUserIds.includes(contact.id);
                        const isAlreadyMember = existingMemberIds.includes(contact.id);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>{
                                if (!isAlreadyMember) toggleSelectUser(contact.id);
                            },
                            className: `flex items-center justify-between p-2.5 rounded-[8px] transition-colors ${isAlreadyMember ? "opacity-50 cursor-not-allowed bg-slate-50/50 dark:bg-slate-900/30" : isSelected ? "bg-blue-50/80 dark:bg-blue-950/40 cursor-pointer" : "hover:bg-slate-100/70 dark:hover:bg-slate-800/50 cursor-pointer"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                            className: "h-9 w-9 rounded-[8px] shrink-0 border border-slate-200 dark:border-slate-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                    src: contact.avatar || undefined,
                                                    className: "object-cover rounded-[8px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                    style: {
                                                        background: getAvatarColor(displayName)
                                                    },
                                                    className: "text-white font-bold text-xs rounded-[8px]",
                                                    children: displayName.substring(0, 2).toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                                            lineNumber: 248,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold text-slate-900 dark:text-white truncate",
                                                    children: displayName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 23
                                                }, this),
                                                contact.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-slate-400 truncate",
                                                    children: contact.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                                            lineNumber: 257,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                                    lineNumber: 247,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: isAlreadyMember ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold text-slate-400 px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800",
                                        children: "Joined"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                                        lineNumber: 271,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-5 h-5 rounded-[5px] flex items-center justify-center border transition-all ${isSelected ? "bg-blue-600 border-blue-600 text-white shadow-xs" : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"}`,
                                        children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                                            lineNumber: 282,
                                            columnNumber: 40
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                                        lineNumber: 275,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                                    lineNumber: 269,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, contact.id, true, {
                            fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                            lineNumber: 234,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    className: "gap-2 sm:gap-0 pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: onClose,
                            disabled: isSubmitting,
                            className: "rounded-[8px] text-xs cursor-pointer",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleAddSubscribers,
                            disabled: selectedUserIds.length === 0 || isSubmitting,
                            className: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-[8px] text-xs font-bold shadow-xs hover:opacity-90 cursor-pointer disabled:opacity-40",
                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-3.5 h-3.5 animate-spin mr-1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                                        lineNumber: 308,
                                        columnNumber: 17
                                    }, this),
                                    "Adding..."
                                ]
                            }, void 0, true) : `Add ${selectedUserIds.length > 0 ? selectedUserIds.length : ""} Subscriber${selectedUserIds.length > 1 ? "s" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
                    lineNumber: 292,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
            lineNumber: 165,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/channels/AddSubscribersModal.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s(AddSubscribersModal, "S/EDjqLfM/k0inTS5IB3RSvB3y0=");
_c = AddSubscribersModal;
var _c;
__turbopack_context__.k.register(_c, "AddSubscribersModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/channels/ChannelsListPane.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChannelsListPane",
    ()=>ChannelsListPane
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlusSignIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/PlusSignIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Megaphone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Megaphone01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Search01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$NotificationOff01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/NotificationOff01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CATEGORY_FILTERS = [
    {
        id: "all",
        label: "All"
    },
    {
        id: "Entertainment",
        label: "🎬 Entertainment"
    },
    {
        id: "Sports",
        label: "⚽ Sports"
    },
    {
        id: "Tech",
        label: "💻 Tech & Code"
    },
    {
        id: "Food",
        label: "🍔 Food & City"
    },
    {
        id: "Health",
        label: "💪 Health"
    }
];
const AVATAR_GRADIENTS = [
    "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    "linear-gradient(135deg, #059669 0%, #047857 100%)",
    "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    "linear-gradient(135deg, #db2777 0%, #9d174d 100%)",
    "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
    "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
    "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)"
];
const getAvatarGradient = (name)=>{
    let hash = 0;
    const clean = (name || "Channel").trim();
    for(let i = 0; i < clean.length; i++){
        hash = clean.charCodeAt(i) + ((hash << 5) - hash);
    }
    return AVATAR_GRADIENTS[Math.abs(hash) % AVATAR_GRADIENTS.length];
};
const getChannelInitials = (name)=>{
    if (!name) return "CH";
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.trim().substring(0, 2).toUpperCase();
};
const getAvatarColor = getAvatarGradient;
function ChannelsListPane({ selectedId, onSelect, onBack, onOpenCreate, discoverChannels, isLoadingDiscover, followingMap, onToggleFollow, myBroadcastChannels, isChannelAdmin }) {
    _s();
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("discover");
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSearchOpen, setIsSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const query = searchQuery.trim().toLowerCase();
    const filteredDiscover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChannelsListPane.useMemo[filteredDiscover]": ()=>{
            return discoverChannels.filter({
                "ChannelsListPane.useMemo[filteredDiscover]": (c)=>{
                    const matchesSearch = !query || c.name && c.name.toLowerCase().includes(query) || c.description && c.description.toLowerCase().includes(query);
                    const matchesCategory = selectedCategory === "all" || c.category && c.category.toLowerCase().includes(selectedCategory.toLowerCase());
                    return matchesSearch && matchesCategory;
                }
            }["ChannelsListPane.useMemo[filteredDiscover]"]);
        }
    }["ChannelsListPane.useMemo[filteredDiscover]"], [
        discoverChannels,
        query,
        selectedCategory
    ]);
    const filteredFollowing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChannelsListPane.useMemo[filteredFollowing]": ()=>{
            return discoverChannels.filter({
                "ChannelsListPane.useMemo[filteredFollowing]": (c)=>{
                    // In case this channel admin == me, DO NOT show in Following tab!
                    if (isChannelAdmin === null || isChannelAdmin === void 0 ? void 0 : isChannelAdmin(c)) return false;
                    const isFollowed = !!followingMap[c.id];
                    const matchesSearch = !query || c.name && c.name.toLowerCase().includes(query) || c.description && c.description.toLowerCase().includes(query);
                    return isFollowed && matchesSearch;
                }
            }["ChannelsListPane.useMemo[filteredFollowing]"]);
        }
    }["ChannelsListPane.useMemo[filteredFollowing]"], [
        discoverChannels,
        followingMap,
        query,
        isChannelAdmin
    ]);
    const filteredMy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChannelsListPane.useMemo[filteredMy]": ()=>{
            return myBroadcastChannels.filter({
                "ChannelsListPane.useMemo[filteredMy]": (c)=>{
                    const name = (c.name || c.sender || "").toLowerCase();
                    const desc = (c.description || c.preview || "").toLowerCase();
                    return !query || name.includes(query) || desc.includes(query);
                }
            }["ChannelsListPane.useMemo[filteredMy]"]);
        }
    }["ChannelsListPane.useMemo[filteredMy]"], [
        myBroadcastChannels,
        query
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full md:w-[380px] lg:w-[400px] flex flex-col bg-white dark:bg-[#111827] border-r border-slate-200/80 dark:border-slate-800 shrink-0 ${selectedId ? "hidden md:flex" : "flex"}`,
        children: [
            isNative || isMobile ? /* Mobile Native Top Bar */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white rounded-b-[24px] shadow-sm px-4 shrink-0 overflow-hidden space-y-3 pb-3 pt-[calc(0.75rem+env(safe-area-inset-top,12px))]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onBack,
                                        className: "w-8 h-8 rounded-[8px] bg-white/20 hover:bg-white/30 active:scale-95 border border-white/25 flex items-center justify-center text-white transition-all shrink-0 cursor-pointer",
                                        title: "Back",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                            lineNumber: 143,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-[8px] bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-xs",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Megaphone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Megaphone01Icon"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-base font-black text-white tracking-tight",
                                                children: "Channels"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-blue-100 font-medium -mt-0.5",
                                                children: "Verified updates & creators"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setIsSearchOpen(!isSearchOpen),
                                        className: `w-8 h-8 rounded-[8px] flex items-center justify-center text-white border transition-all cursor-pointer ${isSearchOpen ? "bg-white text-blue-600 border-white" : "bg-white/15 hover:bg-white/25 border-white/20"}`,
                                        title: "Search Channels",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onOpenCreate,
                                        className: "flex items-center gap-1 px-3 py-1.5 rounded-[8px] bg-white/20 hover:bg-white/30 active:scale-95 border border-white/25 text-white font-bold text-xs shadow-xs transition-all cursor-pointer backdrop-blur-md",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlusSignIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlusSignIcon"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Create"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this),
                    isSearchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative animate-in fade-in slide-in-from-top-1 duration-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                size: 14,
                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-white/60"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 184,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search channels or topics...",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                className: "w-full pl-9 pr-8 py-2 rounded-[8px] bg-white/15 backdrop-blur-md border border-white/25 text-xs text-white placeholder:text-white/60 outline-none focus:bg-white/25 transition-colors",
                                autoFocus: true
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 188,
                                columnNumber: 15
                            }, this),
                            searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSearchQuery(""),
                                className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-white/60 hover:text-white cursor-pointer",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                    lineNumber: 202,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 197,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                        lineNumber: 183,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex bg-white/10 backdrop-blur-md p-1 rounded-[8px] border border-white/15",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab("discover"),
                                className: `flex-1 py-1.5 text-xs font-bold rounded-[6px] transition-all text-center cursor-pointer ${activeTab === "discover" ? "bg-white text-blue-600 shadow-xs" : "text-white/80 hover:text-white hover:bg-white/10"}`,
                                children: [
                                    "🔥 Discover (",
                                    filteredDiscover.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab("following"),
                                className: `flex-1 py-1.5 text-xs font-bold rounded-[6px] transition-all text-center cursor-pointer ${activeTab === "following" ? "bg-white text-blue-600 shadow-xs" : "text-white/80 hover:text-white hover:bg-white/10"}`,
                                children: [
                                    "✅ Following (",
                                    filteredFollowing.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 221,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab("my"),
                                className: `flex-1 py-1.5 text-xs font-bold rounded-[6px] transition-all text-center cursor-pointer ${activeTab === "my" ? "bg-white text-blue-600 shadow-xs" : "text-white/80 hover:text-white hover:bg-white/10"}`,
                                children: [
                                    "📢 Mine (",
                                    filteredMy.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                lineNumber: 132,
                columnNumber: 9
            }, this) : /* Desktop Web Header */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-white dark:bg-[#111827] border-b border-slate-200/80 dark:border-slate-800 space-y-3 shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-[8px] bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-xs shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Megaphone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Megaphone01Icon"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-sm font-black text-slate-900 dark:text-white tracking-tight leading-tight truncate",
                                                children: "Channels"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                lineNumber: 254,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400 font-semibold truncate",
                                                children: "Verified updates & creator broadcasts"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                lineNumber: 257,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 253,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 249,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onOpenCreate,
                                className: "px-3 py-1.5 rounded-[8px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white text-xs font-bold shadow-xs flex items-center gap-1 transition-all cursor-pointer",
                                title: "Create Channel",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$PlusSignIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlusSignIcon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Create"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 270,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Search01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Search01Icon"], {
                                size: 15,
                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Search channels or topics…",
                                value: searchQuery,
                                onChange: (e)=>setSearchQuery(e.target.value),
                                className: "w-full pl-9 pr-8 py-2 rounded-[8px] bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-900 dark:text-white placeholder:text-slate-400 outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 280,
                                columnNumber: 13
                            }, this),
                            searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setSearchQuery(""),
                                className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 font-bold cursor-pointer",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 288,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-[8px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab("discover"),
                                className: `flex-1 py-1.5 text-xs font-bold rounded-[6px] transition-all text-center cursor-pointer ${activeTab === "discover" ? "bg-white dark:bg-[#111827] text-blue-600 dark:text-blue-400 shadow-xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`,
                                children: [
                                    "🔥 Discover (",
                                    filteredDiscover.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 300,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab("following"),
                                className: `flex-1 py-1.5 text-xs font-bold rounded-[6px] transition-all text-center cursor-pointer ${activeTab === "following" ? "bg-white dark:bg-[#111827] text-blue-600 dark:text-blue-400 shadow-xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`,
                                children: [
                                    "✅ Following (",
                                    filteredFollowing.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab("my"),
                                className: `flex-1 py-1.5 text-xs font-bold rounded-[6px] transition-all text-center cursor-pointer ${activeTab === "my" ? "bg-white dark:bg-[#111827] text-blue-600 dark:text-blue-400 shadow-xs" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`,
                                children: [
                                    "📢 Mine (",
                                    filteredMy.length,
                                    ")"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 322,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                lineNumber: 247,
                columnNumber: 9
            }, this),
            activeTab === "discover" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full overflow-x-auto no-scrollbar flex gap-1.5 px-4 py-2 bg-white dark:bg-[#111827] border-b border-slate-200/60 dark:border-slate-800/60 shrink-0",
                children: CATEGORY_FILTERS.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setSelectedCategory(cat.id),
                        className: `px-3 py-1 rounded-[6px] text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer ${selectedCategory === cat.id ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xs" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200"}`,
                        children: cat.label
                    }, cat.id, false, {
                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                        lineNumber: 341,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                lineNumber: 339,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex-1 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800/60 p-2 space-y-1 ${isNative || isMobile ? "pb-[max(calc(env(safe-area-inset-bottom,0px)+5.5rem),6.5rem)]" : "pb-6"}`,
                children: [
                    activeTab === "discover" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: isLoadingDiscover ? [
                            1,
                            2,
                            3,
                            4
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 p-3 animate-pulse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 rounded-[8px] bg-slate-200 dark:bg-slate-800 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 371,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-4 w-32 bg-slate-200 dark:bg-slate-800 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                lineNumber: 373,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-3 w-48 bg-slate-200/60 dark:bg-slate-800/60 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                lineNumber: 374,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 372,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 370,
                                columnNumber: 17
                            }, this)) : filteredDiscover.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-12 text-center text-slate-400 text-xs font-medium",
                            children: searchQuery ? `No channels found matching "${searchQuery}"` : "No channels found in this category."
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                            lineNumber: 379,
                            columnNumber: 15
                        }, this) : filteredDiscover.map((ch)=>{
                            const isFollowing = !!followingMap[ch.id];
                            const isSelected = selectedId === ch.id;
                            var _ch_rawFollowersCount;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>onSelect(ch.id),
                                className: `flex items-center justify-between p-3 rounded-[10px] cursor-pointer transition-all duration-200 ${isSelected ? "bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/50" : "hover:bg-slate-100/80 dark:hover:bg-slate-800/60 border border-transparent"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 min-w-0 pr-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative shrink-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                        className: "h-12 w-12 border-2 border-slate-200/60 dark:border-slate-700 rounded-[8px]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                                src: ch.avatarUrl,
                                                                className: "object-cover rounded-[8px]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                                lineNumber: 401,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                                style: {
                                                                    background: getAvatarGradient(ch.name)
                                                                },
                                                                className: "text-white font-black text-sm rounded-[8px]",
                                                                children: getChannelInitials(ch.name)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                                lineNumber: 402,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 25
                                                    }, this),
                                                    ch.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-blue-600 text-white flex items-center justify-center text-[9px] font-black border-2 border-white dark:border-slate-900",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                lineNumber: 399,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-bold text-slate-900 dark:text-slate-100 truncate",
                                                            children: ch.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                            lineNumber: 418,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1",
                                                        children: ch.description || "Official verified updates"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                        lineNumber: 422,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mt-0.5 text-[11px] text-slate-400 font-semibold",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    ch.followersCount,
                                                                    " ",
                                                                    Number((_ch_rawFollowersCount = ch.rawFollowersCount) !== null && _ch_rawFollowersCount !== void 0 ? _ch_rawFollowersCount : ch.followersCount) === 1 ? "follower" : "followers"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                                lineNumber: 426,
                                                                columnNumber: 27
                                                            }, this),
                                                            ch.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-1.5 py-0.2 rounded-[4px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300",
                                                                children: ch.category
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                                lineNumber: 430,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                lineNumber: 416,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 398,
                                        columnNumber: 21
                                    }, this),
                                    (isChannelAdmin === null || isChannelAdmin === void 0 ? void 0 : isChannelAdmin(ch)) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2.5 py-1 rounded-[6px] bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 text-[11px] font-bold shrink-0",
                                        children: "Admin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 439,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: (e)=>onToggleFollow(e, ch.id, ch.name),
                                        className: `px-3 py-1.5 rounded-[8px] text-xs font-bold transition-all shrink-0 active:scale-95 cursor-pointer ${isFollowing ? "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700" : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs hover:opacity-90"}`,
                                        children: isFollowing ? "Joined" : "+ Follow"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 443,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, ch.id, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 389,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false),
                    activeTab === "following" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: filteredFollowing.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-16 text-center space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-[8px] bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$NotificationOff01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationOff01Icon"], {
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 468,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                    lineNumber: 467,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-bold text-slate-700 dark:text-slate-300",
                                    children: searchQuery ? `No followed channels matching "${searchQuery}"` : "Not following any channels yet"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                    lineNumber: 470,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-400 max-w-xs mx-auto",
                                    children: "Explore verified channels to get official announcements and news directly from creators."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                    lineNumber: 475,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActiveTab("discover"),
                                    className: "mt-2 px-4 py-1.5 rounded-[8px] bg-blue-600 text-white font-bold text-xs cursor-pointer shadow-xs",
                                    children: "Browse Discover →"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                    lineNumber: 479,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                            lineNumber: 466,
                            columnNumber: 15
                        }, this) : filteredFollowing.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>onSelect(ch.id),
                                className: `flex items-center justify-between p-3 rounded-[10px] cursor-pointer transition-all ${selectedId === ch.id ? "bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800" : "hover:bg-slate-100/80 dark:hover:bg-slate-800/60"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                className: "h-12 w-12 rounded-[8px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                        src: ch.avatarUrl,
                                                        className: "object-cover rounded-[8px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                        lineNumber: 500,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                        style: {
                                                            background: getAvatarGradient(ch.name)
                                                        },
                                                        className: "text-white font-black text-sm rounded-[8px]",
                                                        children: getChannelInitials(ch.name)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                lineNumber: 499,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-bold text-slate-900 dark:text-slate-100 truncate",
                                                        children: ch.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                        lineNumber: 509,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-500 dark:text-slate-400 line-clamp-1",
                                                        children: ch.description || "Active subscription"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                        lineNumber: 512,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                lineNumber: 508,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 498,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-extrabold px-2 py-1 rounded-[6px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
                                        children: "Subscribed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 517,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, ch.id, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 489,
                                columnNumber: 17
                            }, this))
                    }, void 0, false),
                    activeTab === "my" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: filteredMy.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-16 text-center space-y-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-[8px] bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Megaphone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Megaphone01Icon"], {
                                        size: 22
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 532,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                    lineNumber: 531,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-sm font-bold text-slate-700 dark:text-slate-300",
                                    children: searchQuery ? `No created channels matching "${searchQuery}"` : "You haven't created a channel yet"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                    lineNumber: 534,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-400 max-w-xs mx-auto",
                                    children: "Create your own broadcast channel to share thoughts, news, or updates with your audience."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                    lineNumber: 539,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onOpenCreate,
                                    className: "px-4 py-2 rounded-[8px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-xs cursor-pointer",
                                    children: "+ Create My Channel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                    lineNumber: 543,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                            lineNumber: 530,
                            columnNumber: 15
                        }, this) : filteredMy.map((ch)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>onSelect(ch.id),
                                className: `flex items-center justify-between p-3 rounded-[10px] cursor-pointer transition-all ${selectedId === ch.id ? "bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800" : "hover:bg-slate-100/80 dark:hover:bg-slate-800/60"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                className: "h-12 w-12 rounded-[8px]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                        src: ch.avatarUrl,
                                                        className: "object-cover rounded-[8px]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                        style: {
                                                            background: getAvatarGradient(ch.sender || ch.name)
                                                        },
                                                        className: "text-white font-black text-sm rounded-[8px]",
                                                        children: getChannelInitials(ch.sender || ch.name)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                        lineNumber: 568,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                lineNumber: 563,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-slate-900 dark:text-slate-100 truncate",
                                                                children: ch.sender || ch.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                                lineNumber: 579,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-1.5 py-0.2 rounded-[4px] bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-[9px]",
                                                                children: "Admin"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                                lineNumber: 582,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                        lineNumber: 578,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-500 dark:text-slate-400 truncate",
                                                        children: ch.preview ? ch.preview.replace(/\bgroup\b/gi, "channel") : "Tap to broadcast updates"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                                lineNumber: 577,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 562,
                                        columnNumber: 19
                                    }, this),
                                    ch.unreadCount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-blue-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full",
                                        children: ch.unreadCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                        lineNumber: 594,
                                        columnNumber: 21
                                    }, this) : null
                                ]
                            }, ch.id, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                                lineNumber: 553,
                                columnNumber: 17
                            }, this))
                    }, void 0, false)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/channels/ChannelsListPane.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s(ChannelsListPane, "mWNKbI/Y3S424zzBTIdChs2fmPw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = ChannelsListPane;
var _c;
__turbopack_context__.k.register(_c, "ChannelsListPane");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/channels/ChannelMessageBubble.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChannelMessageBubble",
    ()=>ChannelMessageBubble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$HappyIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/HappyIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MailReply01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/MailReply01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Forward01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Forward01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const QUICK_EMOJIS = [
    "👍",
    "❤️",
    "🔥",
    "😂",
    "😮",
    "🙏"
];
function formatTime(ts) {
    if (!ts) return "";
    const d = new Date(ts);
    if (isNaN(d.getTime())) return String(ts);
    return d.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });
}
function ChannelMessageBubble({ msg, isDark, onReply, onReact, onForward, reactions }) {
    var _msg_data, _msg_data1;
    _s();
    const [showReactionPicker, setShowReactionPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const msgReactions = reactions[msg.id] || {};
    const isSystemMsg = msg.type === "system" || typeof msg.text === "string" && (msg.text.startsWith("~") || msg.text.toLowerCase().includes("created group") || msg.text.toLowerCase().includes("created channel") || msg.text.toLowerCase().includes("changed the group") || msg.text.toLowerCase().includes("changed the channel") || msg.text.toLowerCase().includes("joined the group") || msg.text.toLowerCase().includes("joined the channel") || msg.text.toLowerCase().includes("added "));
    if (isSystemMsg) {
        let text = typeof msg.text === "string" ? msg.text : "";
        if (text.startsWith("~")) text = text.slice(1);
        text = text.replace(/\bgroup\b/gi, "channel");
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center my-2 select-none",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-amber-100/90 dark:bg-[#1e293b] text-amber-900 dark:text-amber-200 text-[11.5px] font-semibold px-3.5 py-1 rounded-[6px] shadow-2xs border border-amber-200/80 dark:border-amber-700/40 max-w-[90%] text-center leading-tight",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    (formatTime(msg.createdAt) || msg.time) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2 text-[10px] opacity-70 font-normal",
                        children: formatTime(msg.createdAt) || msg.time
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this);
    }
    const isMediaImage = msg.type === "image" || typeof msg.text === "string" && /\.(jpg|jpeg|png|webp|gif)$/i.test(msg.text);
    const isMediaVideo = msg.type === "video" || typeof msg.text === "string" && /\.(mp4|webm|mov)$/i.test(msg.text);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-start mb-2.5 relative group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative min-w-[150px] max-w-[92%] sm:max-w-[78%]",
            children: [
                msg.replyTo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-slate-100 dark:bg-slate-800/80 border-l-3 border-blue-600 rounded-t-[8px] px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 truncate",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-bold text-blue-600 dark:text-blue-400 block text-[11px] mb-0.5",
                            children: "Replied to"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this),
                        msg.replyToText || "Message"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `bg-white dark:bg-[#1e293b] border border-slate-200/80 dark:border-slate-800 shadow-xs px-3.5 py-2.5 rounded-[10px] ${msg.replyTo ? "rounded-t-none" : ""}`,
                    children: [
                        isMediaImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 overflow-hidden rounded-[8px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(msg.text),
                                    alt: "Broadcast attachment",
                                    className: "w-full max-h-72 object-cover rounded-[8px]",
                                    onError: (e)=>{
                                        e.target.style.display = "none";
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this),
                                ((_msg_data = msg.data) === null || _msg_data === void 0 ? void 0 : _msg_data.caption) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13.5px] text-slate-800 dark:text-slate-200 mt-1.5 leading-relaxed",
                                    children: msg.data.caption
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this) : isMediaVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-2 overflow-hidden rounded-[8px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(msg.text),
                                    controls: true,
                                    className: "w-full max-h-72 rounded-[8px]"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                                    lineNumber: 116,
                                    columnNumber: 15
                                }, this),
                                ((_msg_data1 = msg.data) === null || _msg_data1 === void 0 ? void 0 : _msg_data1.caption) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[13.5px] text-slate-800 dark:text-slate-200 mt-1.5 leading-relaxed",
                                    children: msg.data.caption
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[14.5px] text-slate-900 dark:text-slate-100 whitespace-pre-wrap leading-relaxed break-words",
                            children: msg.text
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between gap-2 mt-2 pt-1 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1 flex-wrap",
                                    children: [
                                        Object.entries(msgReactions).map(([emoji, count])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>onReact(msg, emoji),
                                                className: "flex items-center gap-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-[6px] px-1.5 py-0.5 text-[11px] hover:scale-105 transition-transform cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: emoji
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-bold text-slate-600 dark:text-slate-300",
                                                        children: count
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, emoji, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setShowReactionPicker(!showReactionPicker),
                                            className: "p-1 text-slate-400 hover:text-amber-500 rounded-[4px] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer",
                                            title: "React",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$HappyIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HappyIcon"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5 shrink-0 font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: formatTime(msg.createdAt) || msg.time
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                                            lineNumber: 161,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onReply(msg),
                                            className: "p-0.5 text-slate-400 hover:text-blue-500 transition-colors cursor-pointer",
                                            title: "Reply",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MailReply01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailReply01Icon"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>onForward(msg),
                                            className: "p-0.5 text-slate-400 hover:text-blue-500 transition-colors cursor-pointer",
                                            title: "Forward",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Forward01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Forward01Icon"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                                            lineNumber: 170,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                showReactionPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-1 bg-white dark:bg-slate-800 rounded-[8px] shadow-md px-2 py-1 mt-1 z-20 border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in-95 duration-100 w-fit",
                    children: [
                        QUICK_EMOJIS.map((emoji)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    onReact(msg, emoji);
                                    setShowReactionPicker(false);
                                },
                                className: "text-base p-1 hover:scale-125 transition-transform cursor-pointer",
                                title: emoji,
                                children: emoji
                            }, emoji, false, {
                                fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setShowReactionPicker(false),
                            className: "p-1 text-slate-400 hover:text-slate-600 text-xs ml-0.5 cursor-pointer",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
                    lineNumber: 184,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/channels/ChannelMessageBubble.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(ChannelMessageBubble, "2Md+RVm1+jdgD0sCNxtuMHG/we4=");
_c = ChannelMessageBubble;
var _c;
__turbopack_context__.k.register(_c, "ChannelMessageBubble");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/channels/ChannelChatArea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChannelChatArea",
    ()=>ChannelChatArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Megaphone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Megaphone01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MoreVerticalIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/MoreVerticalIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Attachment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Attachment01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SentIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/LockIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkBadge01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserAdd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserAdd01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$InformationCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/InformationCircleIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Share01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Logout01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Logout01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$channels$2f$ChannelMessageBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/channels/ChannelMessageBubble.tsx [app-client] (ecmascript)");
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
const AVATAR_GRADIENTS = [
    "linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)",
    "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    "linear-gradient(135deg, #059669 0%, #047857 100%)",
    "linear-gradient(135deg, #d97706 0%, #b45309 100%)",
    "linear-gradient(135deg, #db2777 0%, #9d174d 100%)",
    "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
    "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
    "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)"
];
const getAvatarGradient = (name)=>{
    let hash = 0;
    const clean = (name || "Channel").trim();
    for(let i = 0; i < clean.length; i++){
        hash = clean.charCodeAt(i) + ((hash << 5) - hash);
    }
    return AVATAR_GRADIENTS[Math.abs(hash) % AVATAR_GRADIENTS.length];
};
const getChannelInitials = (name)=>{
    if (!name) return "CH";
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.trim().substring(0, 2).toUpperCase();
};
const getAvatarColor = getAvatarGradient;
function ChannelChatArea({ selectedChannel, selectedId, isAdmin, isFollowing, messages, reactions, isDark, replyTarget, setReplyTarget, messageText, setMessageText, uploadingMedia, onSelect, onToggleFollow, onOpenProfile, onOpenAddSubscribers, onDeleteChannel, onSendMessage, onFileSelect, onReply, onReact, onForward, onBrowseDiscover }) {
    _s();
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatBodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChannelChatArea.useEffect": ()=>{
            if (chatBodyRef.current) {
                chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
            }
        }
    }["ChannelChatArea.useEffect"], [
        messages
    ]);
    const handleInput = (e)=>{
        setMessageText(e.target.value);
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
        }
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSendMessage();
        }
        if (e.key === "Escape" && replyTarget) {
            setReplyTarget(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${selectedId ? isNative || isMobile ? "fixed inset-0 z-40 flex flex-col bg-[#efeae2] dark:bg-[#0b141a]" : "flex-1 flex flex-col h-full bg-[#efeae2] dark:bg-[#0b141a] relative" : "hidden md:flex flex-1 flex-col h-full bg-[#efeae2] dark:bg-[#0b141a] relative"}`,
        children: selectedChannel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `relative bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white shadow-sm shrink-0 z-10 overflow-hidden px-4 pb-3.5 ${isNative ? "pt-[calc(0.75rem+env(safe-area-inset-top,12px))]" : "pt-3.5"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onSelect(null),
                                className: "w-8 h-8 rounded-[8px] bg-white/15 hover:bg-white/25 active:scale-95 border border-white/25 flex items-center justify-center text-white transition-all shrink-0 cursor-pointer",
                                title: "Back to Channels",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                    lineNumber: 169,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                lineNumber: 163,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: onOpenProfile,
                                className: "flex items-center gap-3 flex-1 min-w-0 cursor-pointer hover:opacity-95 active:opacity-85 transition-opacity",
                                title: "View Channel Info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                        className: "h-10 w-10 shrink-0 border-2 border-white/40 shadow-xs rounded-[8px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                src: selectedChannel.avatarUrl,
                                                className: "object-cover rounded-[8px]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                style: {
                                                    background: getAvatarGradient(selectedChannel.name || selectedChannel.sender)
                                                },
                                                className: "text-white font-black text-sm rounded-[8px]",
                                                children: getChannelInitials(selectedChannel.name || selectedChannel.sender)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-black text-white truncate tracking-tight",
                                                        children: selectedChannel.name || selectedChannel.sender
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 21
                                                    }, this),
                                                    selectedChannel.verified && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkBadge01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkBadge01Icon"], {
                                                        size: 15,
                                                        className: "text-white shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] text-blue-100 font-semibold block truncate",
                                                children: isAdmin ? "👑 Channel Administrator • Broadcast updates" : selectedChannel.followersCount ? `${selectedChannel.followersCount} followers` : "Official Broadcast Feed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                lineNumber: 208,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                        lineNumber: 199,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                lineNumber: 173,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1.5 shrink-0",
                                children: [
                                    !isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: (e)=>onToggleFollow(e, selectedChannel.id, selectedChannel.name || "Channel"),
                                        className: `px-3 py-1.5 rounded-[8px] text-xs font-bold transition-all cursor-pointer active:scale-95 border ${isFollowing ? "bg-white/15 border-white/30 text-white" : "bg-white text-blue-600 border-transparent shadow-xs"}`,
                                        children: isFollowing ? "✓ Following" : "+ Follow"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                        lineNumber: 221,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "w-8 h-8 rounded-[8px] bg-white/15 hover:bg-white/25 active:scale-95 border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer",
                                                    title: "Channel Options",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MoreVerticalIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MoreVerticalIcon"], {
                                                        size: 17
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                lineNumber: 241,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                align: "end",
                                                className: "w-52 rounded-[10px] p-1.5 shadow-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-xs z-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: onOpenProfile,
                                                        className: "flex items-center gap-2 px-3 py-2 rounded-[6px] font-semibold cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$InformationCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InformationCircleIcon"], {
                                                                size: 15,
                                                                className: "text-blue-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                                lineNumber: 258,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Channel Profile & Info"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                                lineNumber: 259,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 21
                                                    }, this),
                                                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: onOpenAddSubscribers,
                                                        className: "flex items-center gap-2 px-3 py-2 rounded-[6px] font-semibold cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 text-blue-600 dark:text-blue-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserAdd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserAdd01Icon"], {
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Add Subscribers"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: ()=>{
                                                            const url = `${("TURBOPACK compile-time truthy", 1) ? window.location.origin : "TURBOPACK unreachable"}/channel/${selectedChannel.id}`;
                                                            navigator.clipboard.writeText(url);
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Channel invite link copied!");
                                                        },
                                                        className: "flex items-center gap-2 px-3 py-2 rounded-[6px] font-semibold cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Share01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Share01Icon"], {
                                                                size: 15,
                                                                className: "text-slate-500"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                                lineNumber: 282,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Share Channel Link"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                                                        className: "my-1 bg-slate-100 dark:bg-slate-800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 21
                                                    }, this),
                                                    isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: onOpenProfile,
                                                        className: "flex items-center gap-2 px-3 py-2 rounded-[6px] font-semibold cursor-pointer text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete02Icon"], {
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                                lineNumber: 293,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Delete Channel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                                lineNumber: 294,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: (e)=>onToggleFollow(e, selectedChannel.id, selectedChannel.name || "Channel"),
                                                        className: "flex items-center gap-2 px-3 py-2 rounded-[6px] font-semibold cursor-pointer text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Logout01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logout01Icon"], {
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                                lineNumber: 307,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: isFollowing ? "Unfollow Channel" : "Follow Channel"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                lineNumber: 250,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                        lineNumber: 240,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                lineNumber: 219,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                        lineNumber: 161,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                    lineNumber: 156,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: chatBodyRef,
                    className: "flex-1 overflow-y-auto px-3 py-3 space-y-2.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center pt-1 pb-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-amber-500/10 dark:bg-amber-900/20 text-amber-800 dark:text-amber-300 text-[11px] px-3.5 py-1 rounded-[6px] font-semibold flex items-center gap-1.5 border border-amber-400/20 shadow-2xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$LockIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockIcon"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                        lineNumber: 322,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Follower identities and personal profiles are private in this channel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                        lineNumber: 323,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                lineNumber: 321,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                            lineNumber: 320,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/95 dark:bg-[#1e293b]/90 backdrop-blur-md border border-slate-200/70 dark:border-slate-700/60 rounded-[10px] p-3.5 shadow-2xs max-w-sm mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5 mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                            className: "h-8 w-8 border border-blue-200 dark:border-slate-700 rounded-[8px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                    src: selectedChannel.avatarUrl,
                                                    className: "rounded-[8px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                    lineNumber: 331,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                    style: {
                                                        background: getAvatarGradient(selectedChannel.name || "")
                                                    },
                                                    className: "text-white font-bold text-xs rounded-[8px]",
                                                    children: getChannelInitials(selectedChannel.name || "CH")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-black text-slate-900 dark:text-white leading-tight",
                                                    children: selectedChannel.name || "Welcome to Channel"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] text-blue-500 font-bold",
                                                    children: "📌 Pinned Info"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                    lineNumber: 329,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-600 dark:text-slate-300 leading-relaxed",
                                    children: selectedChannel.description || "Welcome! Stay tuned for exclusive updates, announcements, and media from this channel."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                    lineNumber: 349,
                                    columnNumber: 15
                                }, this),
                                selectedChannel.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block mt-2 text-[11px] font-bold px-2 py-0.5 rounded-[6px] bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/40",
                                    children: selectedChannel.category
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                    lineNumber: 354,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                            lineNumber: 328,
                            columnNumber: 13
                        }, this),
                        (()=>{
                            const seen = new Set();
                            const uniqueMessages = messages.filter((m)=>{
                                const key = (m === null || m === void 0 ? void 0 : m.id) ? String(m.id) : `${m === null || m === void 0 ? void 0 : m.text}_${(m === null || m === void 0 ? void 0 : m.createdAt) || (m === null || m === void 0 ? void 0 : m.time)}`;
                                if (seen.has(key)) return false;
                                seen.add(key);
                                return true;
                            });
                            return uniqueMessages.length > 0 ? uniqueMessages.map((msg, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$channels$2f$ChannelMessageBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChannelMessageBubble"], {
                                    msg: msg,
                                    isDark: isDark,
                                    onReply: onReply,
                                    onReact: onReact,
                                    onForward: onForward,
                                    reactions: reactions
                                }, msg.id ? String(msg.id) : `msg-${idx}`, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                    lineNumber: 372,
                                    columnNumber: 19
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-12 text-center text-slate-400 text-xs font-medium",
                                children: "No broadcast updates posted yet."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                lineNumber: 383,
                                columnNumber: 17
                            }, this);
                        })()
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                    lineNumber: 318,
                    columnNumber: 11
                }, this),
                replyTarget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-full overflow-hidden flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#111827] border-t border-slate-200 dark:border-slate-800 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0 bg-blue-50 dark:bg-blue-950/30 rounded-[8px] px-3 py-1.5 border-l-4 border-blue-500 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-wide truncate",
                                    children: "Replying"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                    lineNumber: 394,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-600 dark:text-slate-300 truncate block mt-0.5",
                                    children: replyTarget.text
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                    lineNumber: 397,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                            lineNumber: 393,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setReplyTarget(null),
                            className: "w-8 h-8 shrink-0 flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-[6px] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                lineNumber: 406,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                            lineNumber: 401,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                    lineNumber: 392,
                    columnNumber: 13
                }, this),
                isAdmin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-3 py-2 bg-white dark:bg-[#111827] border-t border-slate-200/70 dark:border-slate-800 flex items-center gap-2 shrink-0 ${isNative || isMobile ? "pb-[max(calc(env(safe-area-inset-bottom,0px)+8px),12px)]" : "pb-2"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "file",
                            ref: fileInputRef,
                            onChange: onFileSelect,
                            accept: "image/*,video/*,application/pdf",
                            className: "hidden"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                            lineNumber: 420,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>{
                                var _fileInputRef_current;
                                return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                            },
                            disabled: uploadingMedia,
                            className: "w-9 h-9 flex items-center justify-center text-slate-500 hover:text-blue-600 rounded-[8px] hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shrink-0 cursor-pointer disabled:opacity-50",
                            title: "Attach Photo or Video",
                            children: uploadingMedia ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-5 h-5 animate-spin text-blue-600"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                lineNumber: 435,
                                columnNumber: 19
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Attachment01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Attachment01Icon"], {
                                size: 19
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                lineNumber: 437,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                            lineNumber: 427,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-0 bg-slate-100 dark:bg-slate-800 rounded-[8px] flex items-center px-3 py-1.5 border border-slate-200 dark:border-slate-700 min-h-[40px] focus-within:border-blue-400 dark:focus-within:border-blue-500 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                ref: textareaRef,
                                value: messageText,
                                onChange: handleInput,
                                onKeyDown: handleKeyDown,
                                placeholder: "Broadcast an update...",
                                className: "w-full min-w-0 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 outline-none bg-transparent py-1 resize-none overflow-y-auto leading-relaxed",
                                rows: 1,
                                style: {
                                    maxHeight: "100px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                lineNumber: 441,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                            lineNumber: 440,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onSendMessage,
                            disabled: !messageText.trim(),
                            className: "w-9 h-9 rounded-[8px] flex items-center justify-center text-white bg-gradient-to-br from-blue-600 to-indigo-600 disabled:opacity-35 transition-all shrink-0 active:scale-95 cursor-pointer shadow-xs",
                            title: "Broadcast Update",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SentIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentIcon"], {
                                size: 16,
                                className: "ml-0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                lineNumber: 459,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                            lineNumber: 452,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                    lineNumber: 413,
                    columnNumber: 13
                }, this) : !isFollowing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `px-4 py-2.5 bg-white dark:bg-[#111827] border-t border-slate-200/70 dark:border-slate-800 flex items-center justify-between gap-3 shrink-0 ${isNative || isMobile ? "pb-[max(calc(env(safe-area-inset-bottom,0px)+8px),12px)]" : "pb-2.5"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Megaphone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Megaphone01Icon"], {
                                    size: 16,
                                    className: "text-blue-600 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                    lineNumber: 471,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-slate-600 dark:text-slate-300 font-medium truncate",
                                    children: "Follow to receive updates & react to posts"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                    lineNumber: 472,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                            lineNumber: 470,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: (e)=>onToggleFollow(e, selectedChannel.id, selectedChannel.name || "Channel"),
                            className: "px-3.5 py-1.5 rounded-[8px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shrink-0 cursor-pointer shadow-xs hover:opacity-90 active:scale-95 transition-all",
                            children: "+ Follow"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                            lineNumber: 476,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                    lineNumber: 463,
                    columnNumber: 13
                }, this) : null
            ]
        }, void 0, true) : /* ── Premium Empty State ── */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 flex flex-col items-center justify-center p-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 rounded-[10px] bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Megaphone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Megaphone01Icon"], {
                                size: 36,
                                strokeWidth: 1.5,
                                className: "text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                lineNumber: 497,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                            lineNumber: 496,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-emerald-500 border-2 border-white dark:border-[#0b141a] flex items-center justify-center shadow-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-xs font-black",
                                children: "✓"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                                lineNumber: 500,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                            lineNumber: 499,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                    lineNumber: 495,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-black text-slate-800 dark:text-white mb-2 tracking-tight",
                    children: "Explore Channels"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                    lineNumber: 503,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed mb-6",
                    children: "Follow verified channels for exclusive news, updates and content directly from creators."
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                    lineNumber: 506,
                    columnNumber: 11
                }, this),
                onBrowseDiscover && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onBrowseDiscover,
                    className: "px-5 py-2 rounded-[8px] bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs shadow-xs active:scale-95 transition-all cursor-pointer",
                    children: "Browse Channels"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
                    lineNumber: 510,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
            lineNumber: 494,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/channels/ChannelChatArea.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_s(ChannelChatArea, "DLCoBTbxkEfCa2tsBRqwoOC1VP8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = ChannelChatArea;
var _c;
__turbopack_context__.k.register(_c, "ChannelChatArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/channels/CreateChannelModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateChannelModal",
    ()=>CreateChannelModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Megaphone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Megaphone01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-client] (ecmascript)");
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
const CATEGORY_OPTIONS = [
    "Entertainment",
    "Sports",
    "Tech",
    "Food",
    "Health",
    "News",
    "Business"
];
function CreateChannelModal({ isOpen, onClose, onSuccess }) {
    _s();
    const [channelName, setChannelName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [channelDesc, setChannelDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [channelCategory, setChannelCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Entertainment");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCreate = async ()=>{
        if (!channelName.trim() || isSubmitting) return;
        setIsSubmitting(true);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].createRoom(channelName.trim(), "broadcast", []);
            if (res.success && res.data) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Broadcast Channel Created! 🚀");
                setChannelName("");
                setChannelDesc("");
                onClose();
                onSuccess(res.data);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res.message || "Failed to create channel");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            console.error(err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to create channel");
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: (open)=>!open && onClose(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[425px] bg-white dark:bg-[#111827] rounded-[10px] p-6 border border-slate-200 dark:border-slate-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-[8px] bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center mb-2 shadow-xs",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Megaphone01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Megaphone01Icon"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "text-base font-bold text-slate-900 dark:text-white",
                            children: "Create Broadcast Channel"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            className: "text-xs text-slate-500 dark:text-slate-400",
                            children: "Reach unlimited followers with instant news, links, and media updates."
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3 py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                    children: "Channel Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "e.g. Daily Tech Radar",
                                    value: channelName,
                                    onChange: (e)=>setChannelName(e.target.value),
                                    className: "rounded-[8px] bg-slate-100 dark:bg-slate-800 border-none text-xs",
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                    children: "Category"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-1.5",
                                    children: CATEGORY_OPTIONS.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setChannelCategory(cat),
                                            className: `px-2.5 py-1 rounded-[6px] text-xs font-semibold transition-all cursor-pointer ${channelCategory === cat ? "bg-blue-600 text-white shadow-xs" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"}`,
                                            children: cat
                                        }, cat, false, {
                                            fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-[11px] font-bold text-slate-700 dark:text-slate-300 block mb-1",
                                    children: "Description (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "What is this channel about?",
                                    value: channelDesc,
                                    onChange: (e)=>setChannelDesc(e.target.value),
                                    className: "rounded-[8px] bg-slate-100 dark:bg-slate-800 border-none text-xs"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    className: "gap-2 sm:gap-0 pt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: onClose,
                            disabled: isSubmitting,
                            className: "rounded-[8px] text-xs cursor-pointer",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleCreate,
                            disabled: !channelName.trim() || isSubmitting,
                            className: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-[8px] text-xs font-bold shadow-xs hover:opacity-90 cursor-pointer",
                            children: isSubmitting ? "Creating..." : "Create Channel"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
            lineNumber: 64,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/channels/CreateChannelModal.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(CreateChannelModal, "R9ElWGuWT0y15wcUIFdUzL2ryiQ=");
_c = CreateChannelModal;
var _c;
__turbopack_context__.k.register(_c, "CreateChannelModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/screens/ChannelsScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChannelsScreen",
    ()=>ChannelsScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modals$2f$ForwardDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/user/components/modals/ForwardDialog.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$ForwardDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/ForwardDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$channels$2f$ChannelProfileDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/channels/ChannelProfileDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$channels$2f$AddSubscribersModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/channels/AddSubscribersModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$channels$2f$ChannelsListPane$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/channels/ChannelsListPane.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$channels$2f$ChannelChatArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/channels/ChannelChatArea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$channels$2f$CreateChannelModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/channels/CreateChannelModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
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
;
;
;
;
;
;
function ChannelsScreen({ channels, selectedId, onSelect, onBack }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    // Modals & Drawers state
    const [isProfileDrawerOpen, setIsProfileDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAddSubscribersOpen, setIsAddSubscribersOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCreateChannelOpen, setIsCreateChannelOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [forwardOpen, setForwardOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [forwardMsg, setForwardMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Channels state
    const [discoverChannels, setDiscoverChannels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingDiscover, setIsLoadingDiscover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [followingMap, setFollowingMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Active channel messages & composer state
    const [messageText, setMessageText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [uploadingMedia, setUploadingMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [replyTarget, setReplyTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reactions, setReactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isDark, setIsDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Theme observer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChannelsScreen.useEffect": ()=>{
            const check = {
                "ChannelsScreen.useEffect.check": ()=>setIsDark(document.documentElement.classList.contains("dark"))
            }["ChannelsScreen.useEffect.check"];
            check();
            const obs = new MutationObserver(check);
            obs.observe(document.documentElement, {
                attributes: true,
                attributeFilter: [
                    "class"
                ]
            });
            return ({
                "ChannelsScreen.useEffect": ()=>obs.disconnect()
            })["ChannelsScreen.useEffect"];
        }
    }["ChannelsScreen.useEffect"], []);
    // Native back navigation handling
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChannelsScreen.useEffect": ()=>{
            const handleAppGoBack = {
                "ChannelsScreen.useEffect.handleAppGoBack": (e)=>{
                    if (isCreateChannelOpen) {
                        var _e_preventDefault, _e_detail_markHandled, _e_detail, _e_stopImmediatePropagation;
                        setIsCreateChannelOpen(false);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault = e.preventDefault) === null || _e_preventDefault === void 0 ? void 0 : _e_preventDefault.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail = e.detail) === null || _e_detail === void 0 ? void 0 : (_e_detail_markHandled = _e_detail.markHandled) === null || _e_detail_markHandled === void 0 ? void 0 : _e_detail_markHandled.call(_e_detail);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation === void 0 ? void 0 : _e_stopImmediatePropagation.call(e);
                    } else if (isAddSubscribersOpen) {
                        var _e_preventDefault1, _e_detail_markHandled1, _e_detail1, _e_stopImmediatePropagation1;
                        setIsAddSubscribersOpen(false);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault1 = e.preventDefault) === null || _e_preventDefault1 === void 0 ? void 0 : _e_preventDefault1.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail1 = e.detail) === null || _e_detail1 === void 0 ? void 0 : (_e_detail_markHandled1 = _e_detail1.markHandled) === null || _e_detail_markHandled1 === void 0 ? void 0 : _e_detail_markHandled1.call(_e_detail1);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation1 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation1 === void 0 ? void 0 : _e_stopImmediatePropagation1.call(e);
                    } else if (isProfileDrawerOpen) {
                        var _e_preventDefault2, _e_detail_markHandled2, _e_detail2, _e_stopImmediatePropagation2;
                        setIsProfileDrawerOpen(false);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault2 = e.preventDefault) === null || _e_preventDefault2 === void 0 ? void 0 : _e_preventDefault2.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail2 = e.detail) === null || _e_detail2 === void 0 ? void 0 : (_e_detail_markHandled2 = _e_detail2.markHandled) === null || _e_detail_markHandled2 === void 0 ? void 0 : _e_detail_markHandled2.call(_e_detail2);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation2 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation2 === void 0 ? void 0 : _e_stopImmediatePropagation2.call(e);
                    } else if (forwardOpen) {
                        var _e_preventDefault3, _e_detail_markHandled3, _e_detail3, _e_stopImmediatePropagation3;
                        setForwardOpen(false);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault3 = e.preventDefault) === null || _e_preventDefault3 === void 0 ? void 0 : _e_preventDefault3.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail3 = e.detail) === null || _e_detail3 === void 0 ? void 0 : (_e_detail_markHandled3 = _e_detail3.markHandled) === null || _e_detail_markHandled3 === void 0 ? void 0 : _e_detail_markHandled3.call(_e_detail3);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation3 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation3 === void 0 ? void 0 : _e_stopImmediatePropagation3.call(e);
                    } else if (selectedId) {
                        var _e_preventDefault4, _e_detail_markHandled4, _e_detail4, _e_stopImmediatePropagation4;
                        onSelect(null);
                        e === null || e === void 0 ? void 0 : (_e_preventDefault4 = e.preventDefault) === null || _e_preventDefault4 === void 0 ? void 0 : _e_preventDefault4.call(e);
                        e === null || e === void 0 ? void 0 : (_e_detail4 = e.detail) === null || _e_detail4 === void 0 ? void 0 : (_e_detail_markHandled4 = _e_detail4.markHandled) === null || _e_detail_markHandled4 === void 0 ? void 0 : _e_detail_markHandled4.call(_e_detail4);
                        e === null || e === void 0 ? void 0 : (_e_stopImmediatePropagation4 = e.stopImmediatePropagation) === null || _e_stopImmediatePropagation4 === void 0 ? void 0 : _e_stopImmediatePropagation4.call(e);
                    }
                }
            }["ChannelsScreen.useEffect.handleAppGoBack"];
            window.addEventListener("app:back_press", handleAppGoBack);
            return ({
                "ChannelsScreen.useEffect": ()=>window.removeEventListener("app:back_press", handleAppGoBack)
            })["ChannelsScreen.useEffect"];
        }
    }["ChannelsScreen.useEffect"], [
        isCreateChannelOpen,
        isAddSubscribersOpen,
        isProfileDrawerOpen,
        forwardOpen,
        selectedId,
        onSelect
    ]);
    // Fetch real discover channels from backend MySQL
    const loadDiscoverChannels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChannelsScreen.useCallback[loadDiscoverChannels]": ()=>{
            setIsLoadingDiscover(true);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/chat/discover-channels").then({
                "ChannelsScreen.useCallback[loadDiscoverChannels]": (res)=>{
                    if (res.data && res.data.success && Array.isArray(res.data.data)) {
                        setDiscoverChannels(res.data.data);
                        const followMap = {};
                        const currentUserId = (user === null || user === void 0 ? void 0 : user.id) ? Number(user.id) : null;
                        res.data.data.forEach({
                            "ChannelsScreen.useCallback[loadDiscoverChannels]": (ch)=>{
                                const isOwner = ch.role === "admin" || currentUserId && (Number(ch.creatorId) === currentUserId || Number(ch.creator_id) === currentUserId || Number(ch.adminId) === currentUserId);
                                if (ch.isJoined && !isOwner) followMap[ch.id] = true;
                            }
                        }["ChannelsScreen.useCallback[loadDiscoverChannels]"]);
                        setFollowingMap(followMap);
                    }
                }
            }["ChannelsScreen.useCallback[loadDiscoverChannels]"]).catch({
                "ChannelsScreen.useCallback[loadDiscoverChannels]": (err)=>{
                    console.warn("[ChannelsScreen] Failed to load discover channels:", err);
                }
            }["ChannelsScreen.useCallback[loadDiscoverChannels]"]).finally({
                "ChannelsScreen.useCallback[loadDiscoverChannels]": ()=>setIsLoadingDiscover(false)
            }["ChannelsScreen.useCallback[loadDiscoverChannels]"]);
        }
    }["ChannelsScreen.useCallback[loadDiscoverChannels]"], [
        user === null || user === void 0 ? void 0 : user.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChannelsScreen.useEffect": ()=>{
            loadDiscoverChannels();
        }
    }["ChannelsScreen.useEffect"], [
        loadDiscoverChannels
    ]);
    // Real broadcast channels where current user is Admin / Owner
    const myBroadcastChannels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChannelsScreen.useMemo[myBroadcastChannels]": ()=>{
            const combined = [
                ...channels,
                ...discoverChannels
            ];
            const uniqueMap = new Map();
            const currentUserId = (user === null || user === void 0 ? void 0 : user.id) ? Number(user.id) : null;
            combined.forEach({
                "ChannelsScreen.useMemo[myBroadcastChannels]": (c)=>{
                    const isChannel = c.type === "broadcast" || c.type === "channel" || !c.type;
                    const isAdminRole = c.role === "admin";
                    const isCreator = Boolean(currentUserId && (Number(c.creatorId) === currentUserId || Number(c.creator_id) === currentUserId || Number(c.adminId) === currentUserId || Number(c.userId) === currentUserId));
                    if (isChannel && (isAdminRole || isCreator)) {
                        uniqueMap.set(c.id, {
                            ...uniqueMap.get(c.id),
                            ...c,
                            role: "admin"
                        });
                    }
                }
            }["ChannelsScreen.useMemo[myBroadcastChannels]"]);
            return Array.from(uniqueMap.values());
        }
    }["ChannelsScreen.useMemo[myBroadcastChannels]"], [
        channels,
        discoverChannels,
        user === null || user === void 0 ? void 0 : user.id
    ]);
    // Strict check if current user is admin/owner of a channel
    const isChannelAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChannelsScreen.useCallback[isChannelAdmin]": (ch)=>{
            if (!ch) return false;
            if (ch.role === "admin") return true;
            const currentUserId = (user === null || user === void 0 ? void 0 : user.id) ? Number(user.id) : null;
            if (currentUserId) {
                if (Number(ch.creatorId) === currentUserId) return true;
                if (Number(ch.creator_id) === currentUserId) return true;
                if (Number(ch.adminId) === currentUserId) return true;
                if (Number(ch.userId) === currentUserId) return true;
            }
            if (myBroadcastChannels.some({
                "ChannelsScreen.useCallback[isChannelAdmin]": (my)=>my.id === ch.id
            }["ChannelsScreen.useCallback[isChannelAdmin]"])) return true;
            return false;
        }
    }["ChannelsScreen.useCallback[isChannelAdmin]"], [
        user === null || user === void 0 ? void 0 : user.id,
        myBroadcastChannels
    ]);
    // Combined channels list and determine selected channel
    const allChannels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChannelsScreen.useMemo[allChannels]": ()=>{
            const map = new Map();
            discoverChannels.forEach({
                "ChannelsScreen.useMemo[allChannels]": (c)=>map.set(c.id, c)
            }["ChannelsScreen.useMemo[allChannels]"]);
            myBroadcastChannels.forEach({
                "ChannelsScreen.useMemo[allChannels]": (c)=>map.set(c.id, {
                        ...map.get(c.id),
                        ...c
                    })
            }["ChannelsScreen.useMemo[allChannels]"]);
            channels.forEach({
                "ChannelsScreen.useMemo[allChannels]": (c)=>map.set(c.id, {
                        ...map.get(c.id),
                        ...c
                    })
            }["ChannelsScreen.useMemo[allChannels]"]);
            return Array.from(map.values());
        }
    }["ChannelsScreen.useMemo[allChannels]"], [
        channels,
        discoverChannels,
        myBroadcastChannels
    ]);
    const selectedChannel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChannelsScreen.useMemo[selectedChannel]": ()=>{
            return allChannels.find({
                "ChannelsScreen.useMemo[selectedChannel]": (c)=>c.id === selectedId
            }["ChannelsScreen.useMemo[selectedChannel]"]);
        }
    }["ChannelsScreen.useMemo[selectedChannel]"], [
        allChannels,
        selectedId
    ]);
    // Admin permissions check
    const isAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChannelsScreen.useMemo[isAdmin]": ()=>{
            return isChannelAdmin(selectedChannel);
        }
    }["ChannelsScreen.useMemo[isAdmin]"], [
        isChannelAdmin,
        selectedChannel
    ]);
    // Toggle follow / join channel
    const toggleFollow = async (e, id, name)=>{
        e.stopPropagation();
        const isCurrentlyFollowing = !!followingMap[id];
        const next = !isCurrentlyFollowing;
        setFollowingMap((prev)=>({
                ...prev,
                [id]: next
            }));
        // Optimistically update discoverChannels follower count
        setDiscoverChannels((prev)=>prev.map((ch)=>{
                if (ch.id === id) {
                    var _ch_rawFollowersCount;
                    const currentCount = Number((_ch_rawFollowersCount = ch.rawFollowersCount) !== null && _ch_rawFollowersCount !== void 0 ? _ch_rawFollowersCount : typeof ch.followersCount === "number" ? ch.followersCount : parseInt(ch.followersCount, 10) || 0);
                    const newCount = Math.max(0, next ? currentCount + 1 : currentCount - 1);
                    const formatted = newCount >= 1000000 ? `${(newCount / 1000000).toFixed(1).replace(/\.0$/, "")}M` : newCount >= 1000 ? `${(newCount / 1000).toFixed(1).replace(/\.0$/, "")}K` : String(newCount);
                    return {
                        ...ch,
                        rawFollowersCount: newCount,
                        followersCount: formatted,
                        isJoined: next
                    };
                }
                return ch;
            }));
        try {
            if (next) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/rooms/${id}/join`);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Joined ${name}! 📢`);
            } else {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/chat/rooms/${id}/leave`);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`Unfollowed ${name}`);
            }
        } catch (_) {
            if (next) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Joined ${name}! 📢`);
        }
    };
    // Fetch messages and setup socket subscriptions for selected channel
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChannelsScreen.useEffect": ()=>{
            if (!selectedId) {
                setMessages([]);
                setReactions({});
                return;
            }
            let isSubscribed = true;
            __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)").then({
                "ChannelsScreen.useEffect": ({ chatApi })=>{
                    chatApi.getMessages(selectedId).then({
                        "ChannelsScreen.useEffect": (res)=>{
                            if (!isSubscribed) return;
                            if (res.success && Array.isArray(res.data)) {
                                const sanitized = res.data.map({
                                    "ChannelsScreen.useEffect.sanitized": (m)=>({
                                            ...m,
                                            text: typeof m.text === "string" ? m.text.replace(/\bgroup\b/gi, "channel") : m.text
                                        })
                                }["ChannelsScreen.useEffect.sanitized"]);
                                const uniqueMap = new Map();
                                sanitized.forEach({
                                    "ChannelsScreen.useEffect": (m)=>{
                                        const key = String(m.id);
                                        if (!uniqueMap.has(key)) {
                                            uniqueMap.set(key, m);
                                        }
                                    }
                                }["ChannelsScreen.useEffect"]);
                                const uniqueList = Array.from(uniqueMap.values());
                                setMessages(uniqueList);
                                const initReact = {};
                                uniqueList.forEach({
                                    "ChannelsScreen.useEffect": (m)=>{
                                        var _m_data;
                                        if (((_m_data = m.data) === null || _m_data === void 0 ? void 0 : _m_data.reactions) && typeof m.data.reactions === "object") {
                                            const parsed = {};
                                            Object.entries(m.data.reactions).forEach({
                                                "ChannelsScreen.useEffect": ([k, v])=>{
                                                    parsed[k] = Array.isArray(v) ? v.length : Number(v) || 0;
                                                }
                                            }["ChannelsScreen.useEffect"]);
                                            initReact[m.id] = parsed;
                                        } else if (m.reactions && typeof m.reactions === "object") {
                                            initReact[m.id] = m.reactions;
                                        }
                                    }
                                }["ChannelsScreen.useEffect"]);
                                setReactions(initReact);
                            }
                        }
                    }["ChannelsScreen.useEffect"]).catch({
                        "ChannelsScreen.useEffect": (e)=>{
                            console.warn("[ChannelsScreen] Error loading messages:", e);
                        }
                    }["ChannelsScreen.useEffect"]);
                }
            }["ChannelsScreen.useEffect"]);
            let socket;
            __turbopack_context__.A("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript, async loader)").then({
                "ChannelsScreen.useEffect": ({ io })=>{
                    const token = localStorage.getItem("access_token");
                    const socketUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])();
                    socket = io(`${socketUrl}/api/realtime/`, {
                        query: {
                            token
                        },
                        transports: [
                            "polling",
                            "websocket"
                        ],
                        upgrade: true
                    });
                    socket.emit("join:chat", selectedId);
                    socket.on("chat:new_message", {
                        "ChannelsScreen.useEffect": (msg)=>{
                            if (String(msg.roomId) === String(selectedId)) {
                                const sanitizedMsg = {
                                    ...msg,
                                    text: typeof msg.text === "string" ? msg.text.replace(/\bgroup\b/gi, "channel") : msg.text
                                };
                                setMessages({
                                    "ChannelsScreen.useEffect": (prev)=>{
                                        if (prev.some({
                                            "ChannelsScreen.useEffect": (p)=>String(p.id) === String(sanitizedMsg.id)
                                        }["ChannelsScreen.useEffect"])) return prev;
                                        return [
                                            ...prev,
                                            sanitizedMsg
                                        ];
                                    }
                                }["ChannelsScreen.useEffect"]);
                            }
                        }
                    }["ChannelsScreen.useEffect"]);
                    socket.on("chat:reaction", {
                        "ChannelsScreen.useEffect": (data)=>{
                            if (String(data.roomId) === String(selectedId)) {
                                setReactions({
                                    "ChannelsScreen.useEffect": (prev)=>{
                                        const msgR = {
                                            ...prev[data.messageId] || {}
                                        };
                                        if (data.removed) {
                                            const cnt = (msgR[data.emoji] || 1) - 1;
                                            if (cnt <= 0) delete msgR[data.emoji];
                                            else msgR[data.emoji] = cnt;
                                        } else {
                                            msgR[data.emoji] = (msgR[data.emoji] || 0) + 1;
                                        }
                                        return {
                                            ...prev,
                                            [data.messageId]: msgR
                                        };
                                    }
                                }["ChannelsScreen.useEffect"]);
                            }
                        }
                    }["ChannelsScreen.useEffect"]);
                }
            }["ChannelsScreen.useEffect"]);
            return ({
                "ChannelsScreen.useEffect": ()=>{
                    isSubscribed = false;
                    if (socket) socket.disconnect();
                }
            })["ChannelsScreen.useEffect"];
        }
    }["ChannelsScreen.useEffect"], [
        selectedId
    ]);
    // Send message handler
    const handleSend = async ()=>{
        if (!messageText.trim() || !selectedId) return;
        const text = messageText.trim();
        const reply = replyTarget;
        setMessageText("");
        setReplyTarget(null);
        try {
            const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
            const res = await chatApi.sendMessage(selectedId, text, "text", reply ? {
                replyToId: reply.id
            } : null);
            if (res.success && res.data) {
                const created = {
                    ...res.data,
                    replyTo: reply === null || reply === void 0 ? void 0 : reply.id,
                    replyToText: reply === null || reply === void 0 ? void 0 : reply.text,
                    text: typeof res.data.text === "string" ? res.data.text.replace(/\bgroup\b/gi, "channel") : res.data.text
                };
                setMessages((prev)=>{
                    if (prev.some((p)=>String(p.id) === String(created.id))) return prev;
                    return [
                        ...prev,
                        created
                    ];
                });
            }
        } catch (error) {
            console.error(error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to post broadcast update");
        }
    };
    // Upload attachment handler
    const handleFileSelect = async (e)=>{
        var _e_target_files;
        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];
        if (!file || !selectedId) return;
        setUploadingMedia(true);
        try {
            const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
            const res = await chatApi.sendAttachment(selectedId, file);
            if (res.success && res.data) {
                const created = {
                    ...res.data,
                    text: typeof res.data.text === "string" ? res.data.text.replace(/\bgroup\b/gi, "channel") : res.data.text
                };
                setMessages((prev)=>{
                    if (prev.some((p)=>String(p.id) === String(created.id))) return prev;
                    return [
                        ...prev,
                        created
                    ];
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Broadcast media sent! 📢");
            }
        } catch (err) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || "Failed to upload media");
        } finally{
            setUploadingMedia(false);
            e.target.value = "";
        }
    };
    const handleReply = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChannelsScreen.useCallback[handleReply]": (msg)=>{
            setReplyTarget(msg);
        }
    }["ChannelsScreen.useCallback[handleReply]"], []);
    const handleReact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChannelsScreen.useCallback[handleReact]": async (msg, emoji)=>{
            if (!selectedId) return;
            setReactions({
                "ChannelsScreen.useCallback[handleReact]": (prev)=>{
                    const msgR = {
                        ...prev[msg.id] || {}
                    };
                    msgR[emoji] = (msgR[emoji] || 0) + 1;
                    return {
                        ...prev,
                        [msg.id]: msgR
                    };
                }
            }["ChannelsScreen.useCallback[handleReact]"]);
            try {
                const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
                await chatApi.reactMessage(selectedId, msg.id, emoji);
            } catch (e) {
                console.error("[Channel] React failed:", e);
            }
        }
    }["ChannelsScreen.useCallback[handleReact]"], [
        selectedId
    ]);
    const handleForward = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChannelsScreen.useCallback[handleForward]": (msg)=>{
            setForwardMsg(msg);
            setForwardOpen(true);
        }
    }["ChannelsScreen.useCallback[handleForward]"], []);
    const handleChannelUpdated = (updated)=>{
        setDiscoverChannels((prev)=>prev.map((c)=>c.id === updated.id ? {
                    ...c,
                    ...updated
                } : c));
    };
    const handleDeleteChannel = ()=>{
        onSelect(null);
        setIsProfileDrawerOpen(false);
        loadDiscoverChannels();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full w-full overflow-hidden bg-slate-50 dark:bg-[#0b141a]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$channels$2f$ChannelsListPane$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChannelsListPane"], {
                selectedId: selectedId,
                onSelect: onSelect,
                onBack: onBack,
                onOpenCreate: ()=>setIsCreateChannelOpen(true),
                discoverChannels: discoverChannels,
                isLoadingDiscover: isLoadingDiscover,
                followingMap: followingMap,
                onToggleFollow: toggleFollow,
                myBroadcastChannels: myBroadcastChannels,
                isChannelAdmin: isChannelAdmin
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/ChannelsScreen.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$channels$2f$ChannelChatArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChannelChatArea"], {
                selectedChannel: selectedChannel,
                selectedId: selectedId,
                isAdmin: isAdmin,
                isFollowing: Boolean(selectedChannel && followingMap[selectedChannel.id]),
                messages: messages,
                reactions: reactions,
                isDark: isDark,
                replyTarget: replyTarget,
                setReplyTarget: setReplyTarget,
                messageText: messageText,
                setMessageText: setMessageText,
                uploadingMedia: uploadingMedia,
                onSelect: onSelect,
                onToggleFollow: toggleFollow,
                onOpenProfile: ()=>setIsProfileDrawerOpen(true),
                onOpenAddSubscribers: ()=>setIsAddSubscribersOpen(true),
                onDeleteChannel: handleDeleteChannel,
                onSendMessage: handleSend,
                onFileSelect: handleFileSelect,
                onReply: handleReply,
                onReact: handleReact,
                onForward: handleForward,
                onBrowseDiscover: ()=>onSelect(null)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/ChannelsScreen.tsx",
                lineNumber: 450,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$channels$2f$CreateChannelModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateChannelModal"], {
                isOpen: isCreateChannelOpen,
                onClose: ()=>setIsCreateChannelOpen(false),
                onSuccess: (newRoom)=>{
                    loadDiscoverChannels();
                    if (newRoom === null || newRoom === void 0 ? void 0 : newRoom.id) onSelect(newRoom.id);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/ChannelsScreen.tsx",
                lineNumber: 477,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$ForwardDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForwardDialog"], {
                open: forwardOpen,
                onClose: ()=>setForwardOpen(false),
                message: forwardMsg
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/ChannelsScreen.tsx",
                lineNumber: 486,
                columnNumber: 7
            }, this),
            selectedChannel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$channels$2f$ChannelProfileDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChannelProfileDrawer"], {
                channel: selectedChannel,
                isOpen: isProfileDrawerOpen,
                onClose: ()=>setIsProfileDrawerOpen(false),
                isAdmin: isAdmin,
                isFollowing: Boolean(followingMap[selectedChannel.id]),
                onToggleFollow: ()=>toggleFollow({
                        stopPropagation: ()=>{}
                    }, selectedChannel.id, selectedChannel.name || selectedChannel.sender || "Channel"),
                onChannelUpdated: handleChannelUpdated,
                onDeleteChannel: handleDeleteChannel,
                onOpenAddSubscribers: ()=>setIsAddSubscribersOpen(true),
                messages: messages
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/ChannelsScreen.tsx",
                lineNumber: 493,
                columnNumber: 9
            }, this),
            selectedChannel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$channels$2f$AddSubscribersModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddSubscribersModal"], {
                isOpen: isAddSubscribersOpen,
                onClose: ()=>setIsAddSubscribersOpen(false),
                channelId: selectedChannel.id,
                channelName: selectedChannel.name || selectedChannel.sender || "Channel",
                onSuccess: ()=>loadDiscoverChannels()
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/screens/ChannelsScreen.tsx",
                lineNumber: 514,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/screens/ChannelsScreen.tsx",
        lineNumber: 434,
        columnNumber: 5
    }, this);
}
_s(ChannelsScreen, "zqPIuyfwEHahZU7O3cnBkkxrG34=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = ChannelsScreen;
var _c;
__turbopack_context__.k.register(_c, "ChannelsScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1f9960a8._.js.map