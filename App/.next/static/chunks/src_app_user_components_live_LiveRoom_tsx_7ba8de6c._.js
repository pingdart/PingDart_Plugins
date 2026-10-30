(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/user/components/live/LiveRoom.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveRoom",
    ()=>LiveRoom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.mjs [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.mjs [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.mjs [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video-off.mjs [app-client] (ecmascript) <export default as VideoOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.mjs [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-x.mjs [app-client] (ecmascript) <export default as UserX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.mjs [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wifi-off.mjs [app-client] (ecmascript) <export default as WifiOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/camera.mjs [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-x.mjs [app-client] (ecmascript) <export default as VolumeX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-3x3.mjs [app-client] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bell.mjs [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$livekitApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/livekitApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$LiveHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/live/components/LiveHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$LiveGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/live/components/LiveGrid.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$LiveControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/live/components/LiveControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$LiveChatPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/live/components/LiveChatPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$WalletDashboardModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/live/components/WalletDashboardModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function LiveRoom({ onLeave, isHost, roomTitle, roomId, hostId, roomFormat = 'broadcast', broadcastType = 'video' }) {
    var _user_email;
    _s();
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "LiveRoom.useAuthStore[user]": (state)=>state.user
    }["LiveRoom.useAuthStore[user]"]);
    // Panels & Layout
    const [showMembersPanel, setShowMembersPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAdminSettings, setShowAdminSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCreatorWallet, setShowCreatorWallet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rightPanelTab, setRightPanelTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('chat');
    const [roomLayoutMode, setRoomLayoutMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(roomFormat === 'meet' ? 'grid' : 'stage');
    const [allowAllMic, setAllowAllMic] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [allowAllVideo, setAllowAllVideo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [allowAllScreenShare, setAllowAllScreenShare] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [adminNotification, setAdminNotification] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Stage & Co-Host State (YouTube Live / Broadcast Rooms)
    const [isOnStage, setIsOnStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isHost || roomFormat === 'meet');
    const [stageMemberIds, setStageMemberIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [raisedHands, setRaisedHands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Media Controls State
    // In Meet: participants start with mic/video enabled.
    // In Broadcast: Host starts broadcasting; viewers start muted and video off (audience only).
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(roomFormat === 'meet' ? false : !isHost);
    const [isVideoOff, setIsVideoOff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(roomFormat === 'meet' ? false : broadcastType === 'audio' ? true : !isHost);
    const [isScreenSharing, setIsScreenSharing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHandRaised, setIsHandRaised] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showRightPanel, setShowRightPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!isNative && !isMobile);
    const [streamEnded, setStreamEnded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [recentGiftBanner, setRecentGiftBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // In-room comments & likes
    const [comments, setComments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [commentInput, setCommentInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submittingComment, setSubmittingComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const commentsEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [likeCount, setLikeCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [hasLiked, setHasLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [likePulsing, setLikePulsing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Offline Notification State
    const [isNotifyActive, setIsNotifyActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [togglingNotify, setTogglingNotify] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveRoom.useEffect": ()=>{
            if (!roomId) return;
            const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('access_token') : "TURBOPACK unreachable";
            const apiV1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])();
            // Automatically mark user as joined so recurring push notifications stop
            if (token) {
                fetch(`${apiV1}/live/mark-joined/${roomId}`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).catch({
                    "LiveRoom.useEffect": ()=>{}
                }["LiveRoom.useEffect"]);
                // Check current subscription status
                fetch(`${apiV1}/live/notify-status/${roomId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then({
                    "LiveRoom.useEffect": (r)=>r.json()
                }["LiveRoom.useEffect"]).then({
                    "LiveRoom.useEffect": (d)=>{
                        if (d.success) setIsNotifyActive(!!d.subscribed);
                    }
                }["LiveRoom.useEffect"]).catch({
                    "LiveRoom.useEffect": ()=>{}
                }["LiveRoom.useEffect"]);
            }
        }
    }["LiveRoom.useEffect"], [
        roomId
    ]);
    const handleToggleNotify = async ()=>{
        const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('access_token') : "TURBOPACK unreachable";
        if (!token) return;
        setTogglingNotify(true);
        try {
            const apiV1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])();
            const res = await fetch(`${apiV1}/live/toggle-notify/${roomId}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await res.json();
            if (data.success) {
                setIsNotifyActive(Boolean(data.subscribed));
            }
        } catch (_) {} finally{
            setTogglingNotify(false);
        }
    };
    const isScreenShareSupported = typeof navigator !== 'undefined' && navigator.mediaDevices && !!navigator.mediaDevices.getDisplayMedia;
    // LiveKit Refs & State
    const roomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [remoteParticipants, setRemoteParticipants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tracks, setTracks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isConnectedToLiveKit, setIsConnectedToLiveKit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [liveKitError, setLiveKitError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [localParticipant, setLocalParticipant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Connect to LiveKit Room
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveRoom.useEffect": ()=>{
            let isMounted = true;
            const room = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Room"]({
                adaptiveStream: true,
                dynacast: true
            });
            roomRef.current = room;
            const connectLiveKit = {
                "LiveRoom.useEffect.connectLiveKit": async ()=>{
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$livekitApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["livekitApi"].getToken(roomId, 'video');
                        if (!isMounted) return;
                        if (!res.success) {
                            setLiveKitError(res.error || 'Failed to fetch LiveKit access token');
                            return;
                        }
                        const syncTracks = {
                            "LiveRoom.useEffect.connectLiveKit.syncTracks": ()=>{
                                if (!isMounted) return;
                                const trackMap = {};
                                // Local participant tracks
                                const localVidPubs = Array.from(room.localParticipant.videoTrackPublications.values());
                                const localVid = localVidPubs.find({
                                    "LiveRoom.useEffect.connectLiveKit.syncTracks": (p)=>p.track || p.videoTrack
                                }["LiveRoom.useEffect.connectLiveKit.syncTracks"]) || localVidPubs[0];
                                const localAudPubs = Array.from(room.localParticipant.audioTrackPublications.values());
                                const localAud = localAudPubs.find({
                                    "LiveRoom.useEffect.connectLiveKit.syncTracks": (p)=>p.track || p.audioTrack
                                }["LiveRoom.useEffect.connectLiveKit.syncTracks"]) || localAudPubs[0];
                                trackMap['local'] = {
                                    video: localVid,
                                    audio: localAud
                                };
                                // Remote participants tracks
                                room.remoteParticipants.forEach({
                                    "LiveRoom.useEffect.connectLiveKit.syncTracks": (p)=>{
                                        const vidPubs = Array.from(p.videoTrackPublications.values());
                                        const vidPub = vidPubs.find({
                                            "LiveRoom.useEffect.connectLiveKit.syncTracks": (pub)=>pub.track || pub.videoTrack
                                        }["LiveRoom.useEffect.connectLiveKit.syncTracks"]) || vidPubs[0];
                                        const audPubs = Array.from(p.audioTrackPublications.values());
                                        const audPub = audPubs.find({
                                            "LiveRoom.useEffect.connectLiveKit.syncTracks": (pub)=>pub.track || pub.audioTrack
                                        }["LiveRoom.useEffect.connectLiveKit.syncTracks"]) || audPubs[0];
                                        trackMap[p.identity] = {
                                            video: vidPub,
                                            audio: audPub
                                        };
                                        trackMap[p.sid] = {
                                            video: vidPub,
                                            audio: audPub
                                        };
                                    }
                                }["LiveRoom.useEffect.connectLiveKit.syncTracks"]);
                                setTracks(trackMap);
                                setLocalParticipant(room.localParticipant);
                                setRemoteParticipants(Array.from(room.remoteParticipants.values()));
                            }
                        }["LiveRoom.useEffect.connectLiveKit.syncTracks"];
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantConnected, {
                            "LiveRoom.useEffect.connectLiveKit": ()=>syncTracks()
                        }["LiveRoom.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantDisconnected, {
                            "LiveRoom.useEffect.connectLiveKit": ()=>syncTracks()
                        }["LiveRoom.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackSubscribed, {
                            "LiveRoom.useEffect.connectLiveKit": ()=>syncTracks()
                        }["LiveRoom.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackUnsubscribed, {
                            "LiveRoom.useEffect.connectLiveKit": ()=>syncTracks()
                        }["LiveRoom.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackMuted, {
                            "LiveRoom.useEffect.connectLiveKit": ()=>syncTracks()
                        }["LiveRoom.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackUnmuted, {
                            "LiveRoom.useEffect.connectLiveKit": ()=>syncTracks()
                        }["LiveRoom.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].LocalTrackPublished, {
                            "LiveRoom.useEffect.connectLiveKit": (pub)=>{
                                console.log('[LiveRoom] LocalTrackPublished:', pub.trackSid || pub.sid);
                                syncTracks();
                            }
                        }["LiveRoom.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].LocalTrackUnpublished, {
                            "LiveRoom.useEffect.connectLiveKit": (pub)=>{
                                console.log('[LiveRoom] LocalTrackUnpublished:', pub.trackSid || pub.sid);
                                syncTracks();
                            }
                        }["LiveRoom.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackPublished, {
                            "LiveRoom.useEffect.connectLiveKit": (pub)=>{
                                console.log('[LiveRoom] TrackPublished:', pub.trackSid || pub.sid);
                                syncTracks();
                            }
                        }["LiveRoom.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackUnpublished, {
                            "LiveRoom.useEffect.connectLiveKit": (pub)=>{
                                console.log('[LiveRoom] TrackUnpublished:', pub.trackSid || pub.sid);
                                syncTracks();
                            }
                        }["LiveRoom.useEffect.connectLiveKit"]);
                        // Listen for layout change data packets
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].DataReceived, {
                            "LiveRoom.useEffect.connectLiveKit": (payload)=>{
                                try {
                                    const text = new TextDecoder().decode(payload);
                                    const data = JSON.parse(text);
                                    if (data.type === 'layout' && data.mode) {
                                        setRoomLayoutMode(data.mode);
                                    }
                                } catch (_) {}
                            }
                        }["LiveRoom.useEffect.connectLiveKit"]);
                        const livekitWsUrl = ("TURBOPACK compile-time value", "wss://livekit.pingdart.com") || res.wsUrl || 'wss://livekit.pingdart.com';
                        console.log('[LiveRoom] Connecting to LiveKit Server:', livekitWsUrl);
                        await room.connect(livekitWsUrl, res.token);
                        if (!isMounted) {
                            try {
                                room.disconnect();
                            } catch (_) {}
                            return;
                        }
                        setIsConnectedToLiveKit(true);
                        // Publish local microphone and camera
                        try {
                            await room.localParticipant.setMicrophoneEnabled(!isMuted);
                            await room.localParticipant.setCameraEnabled(!isVideoOff);
                        } catch (mediaErr) {
                            console.warn('[LiveRoom] Media permission warning:', mediaErr);
                        }
                        syncTracks();
                    } catch (err) {
                        console.error('[LiveRoom] Error connecting to LiveKit:', err);
                        if (isMounted) setLiveKitError((err === null || err === void 0 ? void 0 : err.message) || 'Failed to connect to LiveKit server');
                    }
                }
            }["LiveRoom.useEffect.connectLiveKit"];
            connectLiveKit();
            return ({
                "LiveRoom.useEffect": ()=>{
                    isMounted = false;
                    if (roomRef.current) {
                        try {
                            roomRef.current.disconnect();
                        } catch (_) {}
                        roomRef.current = null;
                    }
                }
            })["LiveRoom.useEffect"];
        }
    }["LiveRoom.useEffect"], [
        roomId
    ]);
    // Socket.IO connection for chat, likes, and admin permissions
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveRoom.useEffect": ()=>{
            let isMounted = true;
            const token = localStorage.getItem('access_token');
            const socketUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])();
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(`${socketUrl}/api/realtime/`, {
                query: {
                    token
                },
                transports: [
                    'polling',
                    'websocket'
                ],
                upgrade: true,
                reconnection: true,
                reconnectionAttempts: 10,
                reconnectionDelay: 1000
            });
            socketRef.current = socket;
            socket.emit(isHost ? 'live:host_join' : 'live:join', {
                roomId,
                hostId,
                isMuted,
                isVideoOff
            });
            socket.on('live:room_ended', {
                "LiveRoom.useEffect": ()=>{
                    if (!isHost) setStreamEnded(true);
                }
            }["LiveRoom.useEffect"]);
            socket.on('live:new_comment', {
                "LiveRoom.useEffect": (data)=>{
                    if (data.comment) {
                        setComments({
                            "LiveRoom.useEffect": (prev)=>{
                                const exists = prev.some({
                                    "LiveRoom.useEffect.exists": (c)=>String(c.id) === String(data.comment.id)
                                }["LiveRoom.useEffect.exists"]);
                                if (exists) return prev;
                                return [
                                    ...prev.slice(-99),
                                    data.comment
                                ];
                            }
                        }["LiveRoom.useEffect"]);
                    }
                }
            }["LiveRoom.useEffect"]);
            socket.on('live:chat_message', {
                "LiveRoom.useEffect": (data)=>{
                    if (data) {
                        if (data.isGift) {
                            var _data_author;
                            setRecentGiftBanner({
                                senderName: ((_data_author = data.author) === null || _data_author === void 0 ? void 0 : _data_author.fullName) || 'A viewer',
                                giftName: data.text,
                                coins: data.coinsSpent || 0
                            });
                            setTimeout({
                                "LiveRoom.useEffect": ()=>setRecentGiftBanner(null)
                            }["LiveRoom.useEffect"], 4000);
                        }
                        setComments({
                            "LiveRoom.useEffect": (prev)=>[
                                    ...prev.slice(-99),
                                    {
                                        id: data.id || `msg_${Date.now()}`,
                                        text: data.text,
                                        author: data.author || {
                                            fullName: 'Guest'
                                        },
                                        createdAt: data.createdAt || new Date().toISOString(),
                                        isGift: data.isGift
                                    }
                                ]
                        }["LiveRoom.useEffect"]);
                    }
                }
            }["LiveRoom.useEffect"]);
            socket.on('live:like_updated', {
                "LiveRoom.useEffect": (data)=>{
                    setLikeCount(data.count);
                }
            }["LiveRoom.useEffect"]);
            socket.on('live:admin_control', {
                "LiveRoom.useEffect": (data)=>{
                    if (data.action === 'mute') {
                        var _roomRef_current;
                        setIsMuted(true);
                        if ((_roomRef_current = roomRef.current) === null || _roomRef_current === void 0 ? void 0 : _roomRef_current.localParticipant) {
                            roomRef.current.localParticipant.setMicrophoneEnabled(false);
                        }
                        setAdminNotification('Host has muted your microphone.');
                        setTimeout({
                            "LiveRoom.useEffect": ()=>setAdminNotification('')
                        }["LiveRoom.useEffect"], 4000);
                    } else if (data.action === 'disable_camera') {
                        var _roomRef_current1;
                        setIsVideoOff(true);
                        if ((_roomRef_current1 = roomRef.current) === null || _roomRef_current1 === void 0 ? void 0 : _roomRef_current1.localParticipant) {
                            roomRef.current.localParticipant.setCameraEnabled(false);
                        }
                        setAdminNotification('Host has turned off your camera.');
                        setTimeout({
                            "LiveRoom.useEffect": ()=>setAdminNotification('')
                        }["LiveRoom.useEffect"], 4000);
                    } else if (data.action === 'kick') {
                        alert('You have been removed from the room by the host.');
                        onLeave();
                    }
                }
            }["LiveRoom.useEffect"]);
            socket.on('live:room_permissions_updated', {
                "LiveRoom.useEffect": (data)=>{
                    if (data.roomLayoutMode !== undefined) setRoomLayoutMode(data.roomLayoutMode);
                    if (data.allowAllMic !== undefined) setAllowAllMic(data.allowAllMic);
                    if (data.allowAllVideo !== undefined) setAllowAllVideo(data.allowAllVideo);
                    if (data.allowAllScreenShare !== undefined) setAllowAllScreenShare(data.allowAllScreenShare);
                }
            }["LiveRoom.useEffect"]);
            // ── Hand Raise & Stage Sockets ──
            socket.on('live:hand_raised', {
                "LiveRoom.useEffect": (data)=>{
                    setRaisedHands({
                        "LiveRoom.useEffect": (prev)=>{
                            if (prev.some({
                                "LiveRoom.useEffect": (h)=>String(h.userId) === String(data.viewerId)
                            }["LiveRoom.useEffect"])) return prev;
                            return [
                                ...prev,
                                {
                                    userId: data.viewerId,
                                    socketId: data.viewerSocketId,
                                    name: data.viewerName,
                                    avatar: data.viewerAvatar
                                }
                            ];
                        }
                    }["LiveRoom.useEffect"]);
                    if (isHost) {
                        setAdminNotification(`✋ ${data.viewerName} requested to speak`);
                        setTimeout({
                            "LiveRoom.useEffect": ()=>setAdminNotification('')
                        }["LiveRoom.useEffect"], 4000);
                    }
                }
            }["LiveRoom.useEffect"]);
            socket.on('live:hand_lowered', {
                "LiveRoom.useEffect": (data)=>{
                    setRaisedHands({
                        "LiveRoom.useEffect": (prev)=>prev.filter({
                                "LiveRoom.useEffect": (h)=>String(h.userId) !== String(data.viewerId)
                            }["LiveRoom.useEffect"])
                    }["LiveRoom.useEffect"]);
                }
            }["LiveRoom.useEffect"]);
            socket.on('live:stage_invited', {
                "LiveRoom.useEffect": (data)=>{
                    const isTarget = String(data.targetUserId) === String(user === null || user === void 0 ? void 0 : user.id) || data.targetSocketId && data.targetSocketId === socket.id;
                    if (isTarget) {
                        var _roomRef_current;
                        setIsOnStage(true);
                        setIsMuted(false);
                        setIsVideoOff(!data.allowVideo);
                        setIsHandRaised(false);
                        if ((_roomRef_current = roomRef.current) === null || _roomRef_current === void 0 ? void 0 : _roomRef_current.localParticipant) {
                            roomRef.current.localParticipant.setMicrophoneEnabled(true).catch({
                                "LiveRoom.useEffect": ()=>{}
                            }["LiveRoom.useEffect"]);
                            if (data.allowVideo) {
                                roomRef.current.localParticipant.setCameraEnabled(true).catch({
                                    "LiveRoom.useEffect": ()=>{}
                                }["LiveRoom.useEffect"]);
                            }
                        }
                        setAdminNotification('🎉 You have been brought to the stage by the host!');
                        setTimeout({
                            "LiveRoom.useEffect": ()=>setAdminNotification('')
                        }["LiveRoom.useEffect"], 5000);
                    }
                    setStageMemberIds({
                        "LiveRoom.useEffect": (prev)=>{
                            if (prev.some({
                                "LiveRoom.useEffect": (id)=>String(id) === String(data.targetUserId)
                            }["LiveRoom.useEffect"])) return prev;
                            return [
                                ...prev,
                                data.targetUserId
                            ];
                        }
                    }["LiveRoom.useEffect"]);
                    setRaisedHands({
                        "LiveRoom.useEffect": (prev)=>prev.filter({
                                "LiveRoom.useEffect": (h)=>String(h.userId) !== String(data.targetUserId)
                            }["LiveRoom.useEffect"])
                    }["LiveRoom.useEffect"]);
                }
            }["LiveRoom.useEffect"]);
            socket.on('live:stage_removed', {
                "LiveRoom.useEffect": (data)=>{
                    const isTarget = String(data.targetUserId) === String(user === null || user === void 0 ? void 0 : user.id) || data.targetSocketId && data.targetSocketId === socket.id;
                    if (isTarget) {
                        var _roomRef_current;
                        setIsOnStage(false);
                        setIsMuted(true);
                        setIsVideoOff(true);
                        if ((_roomRef_current = roomRef.current) === null || _roomRef_current === void 0 ? void 0 : _roomRef_current.localParticipant) {
                            roomRef.current.localParticipant.setMicrophoneEnabled(false).catch({
                                "LiveRoom.useEffect": ()=>{}
                            }["LiveRoom.useEffect"]);
                            roomRef.current.localParticipant.setCameraEnabled(false).catch({
                                "LiveRoom.useEffect": ()=>{}
                            }["LiveRoom.useEffect"]);
                        }
                        setAdminNotification('Host has returned you to the audience.');
                        setTimeout({
                            "LiveRoom.useEffect": ()=>setAdminNotification('')
                        }["LiveRoom.useEffect"], 4000);
                    }
                    setStageMemberIds({
                        "LiveRoom.useEffect": (prev)=>prev.filter({
                                "LiveRoom.useEffect": (id)=>String(id) !== String(data.targetUserId)
                            }["LiveRoom.useEffect"])
                    }["LiveRoom.useEffect"]);
                }
            }["LiveRoom.useEffect"]);
            return ({
                "LiveRoom.useEffect": ()=>{
                    isMounted = false;
                    socket.emit('live:leave', {
                        roomId,
                        hostId
                    });
                    socket.disconnect();
                }
            })["LiveRoom.useEffect"];
        }
    }["LiveRoom.useEffect"], [
        roomId,
        isHost,
        hostId
    ]);
    // Fetch initial comments & likes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveRoom.useEffect": ()=>{
            const apiV1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])();
            const token = localStorage.getItem('access_token');
            fetch(`${apiV1}/live/comments/${roomId}`).then({
                "LiveRoom.useEffect": (r)=>r.json()
            }["LiveRoom.useEffect"]).then({
                "LiveRoom.useEffect": (d)=>{
                    if (d.success) setComments(d.comments || []);
                }
            }["LiveRoom.useEffect"]).catch({
                "LiveRoom.useEffect": ()=>{}
            }["LiveRoom.useEffect"]);
            fetch(`${apiV1}/live/likes/${roomId}`, {
                headers: token ? {
                    Authorization: `Bearer ${token}`
                } : {}
            }).then({
                "LiveRoom.useEffect": (r)=>r.json()
            }["LiveRoom.useEffect"]).then({
                "LiveRoom.useEffect": (d)=>{
                    if (d.success) {
                        setLikeCount(d.count || 0);
                        setHasLiked(!!d.liked);
                    }
                }
            }["LiveRoom.useEffect"]).catch({
                "LiveRoom.useEffect": ()=>{}
            }["LiveRoom.useEffect"]);
        }
    }["LiveRoom.useEffect"], [
        roomId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LiveRoom.useEffect": ()=>{
            var _commentsEndRef_current;
            (_commentsEndRef_current = commentsEndRef.current) === null || _commentsEndRef_current === void 0 ? void 0 : _commentsEndRef_current.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }["LiveRoom.useEffect"], [
        comments
    ]);
    const changeLayoutMode = (mode)=>{
        var _socketRef_current, _roomRef_current;
        setRoomLayoutMode(mode);
        (_socketRef_current = socketRef.current) === null || _socketRef_current === void 0 ? void 0 : _socketRef_current.emit('live:room_permissions', {
            roomId,
            allowAllMic,
            allowAllVideo,
            allowAllScreenShare,
            roomLayoutMode: mode
        });
        if ((_roomRef_current = roomRef.current) === null || _roomRef_current === void 0 ? void 0 : _roomRef_current.localParticipant) {
            try {
                const payload = new TextEncoder().encode(JSON.stringify({
                    type: 'layout',
                    mode
                }));
                roomRef.current.localParticipant.publishData(payload, {
                    reliable: true
                });
            } catch (_) {}
        }
    };
    const handleToggleLike = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LiveRoom.useCallback[handleToggleLike]": async ()=>{
            const token = localStorage.getItem('access_token');
            if (!token) return;
            const apiV1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])();
            const next = !hasLiked;
            setHasLiked(next);
            setLikeCount({
                "LiveRoom.useCallback[handleToggleLike]": (prev)=>Math.max(0, prev + (next ? 1 : -1))
            }["LiveRoom.useCallback[handleToggleLike]"]);
            setLikePulsing(true);
            setTimeout({
                "LiveRoom.useCallback[handleToggleLike]": ()=>setLikePulsing(false)
            }["LiveRoom.useCallback[handleToggleLike]"], 600);
            try {
                await fetch(`${apiV1}/live/like/${roomId}`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            } catch (_) {}
        }
    }["LiveRoom.useCallback[handleToggleLike]"], [
        hasLiked,
        roomId
    ]);
    const handleSendComment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LiveRoom.useCallback[handleSendComment]": async ()=>{
            const text = commentInput.trim();
            if (!text || submittingComment) return;
            const token = localStorage.getItem('access_token');
            if (!token) return;
            setSubmittingComment(true);
            const apiV1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])();
            var _user_avatar;
            const optimistic = {
                id: `opt_${Date.now()}`,
                text,
                author: {
                    fullName: (user === null || user === void 0 ? void 0 : user.fullName) || 'You',
                    avatar: (_user_avatar = user === null || user === void 0 ? void 0 : user.avatar) !== null && _user_avatar !== void 0 ? _user_avatar : undefined
                },
                createdAt: new Date().toISOString()
            };
            setComments({
                "LiveRoom.useCallback[handleSendComment]": (prev)=>[
                        ...prev,
                        optimistic
                    ]
            }["LiveRoom.useCallback[handleSendComment]"]);
            setCommentInput('');
            try {
                await fetch(`${apiV1}/live/comment/${roomId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        text
                    })
                });
            } catch (_) {}
            setSubmittingComment(false);
        }
    }["LiveRoom.useCallback[handleSendComment]"], [
        commentInput,
        submittingComment,
        roomId,
        user
    ]);
    const handleLeave = async ()=>{
        var _socketRef_current;
        (_socketRef_current = socketRef.current) === null || _socketRef_current === void 0 ? void 0 : _socketRef_current.emit('live:leave', {
            roomId,
            hostId
        });
        if (isHost) {
            try {
                const token = localStorage.getItem('access_token');
                const apiV1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])();
                await fetch(`${apiV1}/live/end/${roomId}`, {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            } catch (err) {
                console.error('Failed to end room', err);
            }
        }
        if (roomRef.current) {
            try {
                roomRef.current.disconnect();
            } catch (_) {}
        }
        onLeave();
    };
    // Media Control Handlers
    const toggleMic = async ()=>{
        var _roomRef_current, _socketRef_current;
        const nextMuted = !isMuted;
        setIsMuted(nextMuted);
        if ((_roomRef_current = roomRef.current) === null || _roomRef_current === void 0 ? void 0 : _roomRef_current.localParticipant) {
            try {
                await roomRef.current.localParticipant.setMicrophoneEnabled(!nextMuted);
            } catch (err) {
                console.warn('Microphone toggle error:', err);
            }
        }
        (_socketRef_current = socketRef.current) === null || _socketRef_current === void 0 ? void 0 : _socketRef_current.emit('live:toggle_media', {
            roomId,
            hostId,
            isMuted: nextMuted,
            isVideoOff,
            isHandRaised
        });
    };
    const toggleVideo = async ()=>{
        var _roomRef_current, _socketRef_current;
        const nextVideoOff = !isVideoOff;
        setIsVideoOff(nextVideoOff);
        if ((_roomRef_current = roomRef.current) === null || _roomRef_current === void 0 ? void 0 : _roomRef_current.localParticipant) {
            try {
                await roomRef.current.localParticipant.setCameraEnabled(!nextVideoOff);
            } catch (err) {
                console.warn('Camera toggle error:', err);
            }
        }
        (_socketRef_current = socketRef.current) === null || _socketRef_current === void 0 ? void 0 : _socketRef_current.emit('live:toggle_media', {
            roomId,
            hostId,
            isMuted,
            isVideoOff: nextVideoOff,
            isHandRaised
        });
    };
    const toggleScreenShare = async ()=>{
        var _roomRef_current;
        const nextShare = !isScreenSharing;
        setIsScreenSharing(nextShare);
        if ((_roomRef_current = roomRef.current) === null || _roomRef_current === void 0 ? void 0 : _roomRef_current.localParticipant) {
            try {
                await roomRef.current.localParticipant.setScreenShareEnabled(nextShare);
            } catch (err) {
                console.warn('Screen share toggle error:', err);
            }
        }
    };
    const handleToggleRaiseHand = ()=>{
        const nextHand = !isHandRaised;
        setIsHandRaised(nextHand);
        if (nextHand) {
            var _user_email, _socketRef_current;
            (_socketRef_current = socketRef.current) === null || _socketRef_current === void 0 ? void 0 : _socketRef_current.emit('live:raise_hand', {
                roomId,
                viewerId: user === null || user === void 0 ? void 0 : user.id,
                viewerName: (user === null || user === void 0 ? void 0 : user.fullName) || (user === null || user === void 0 ? void 0 : (_user_email = user.email) === null || _user_email === void 0 ? void 0 : _user_email.split('@')[0]) || 'Viewer',
                viewerAvatar: user === null || user === void 0 ? void 0 : user.avatar
            });
            setAdminNotification('✋ You requested to speak. Waiting for host...');
            setTimeout(()=>setAdminNotification(''), 4000);
        } else {
            var _socketRef_current1;
            (_socketRef_current1 = socketRef.current) === null || _socketRef_current1 === void 0 ? void 0 : _socketRef_current1.emit('live:lower_hand', {
                roomId,
                viewerId: user === null || user === void 0 ? void 0 : user.id
            });
        }
    };
    const handleBringToStage = (targetUserId, targetSocketId, allowVideo = true)=>{
        var _socketRef_current;
        (_socketRef_current = socketRef.current) === null || _socketRef_current === void 0 ? void 0 : _socketRef_current.emit('live:invite_stage', {
            roomId,
            targetUserId,
            targetSocketId,
            allowVideo,
            allowAudio: true
        });
        setStageMemberIds((prev)=>[
                ...prev,
                targetUserId
            ]);
        setRaisedHands((prev)=>prev.filter((h)=>String(h.userId) !== String(targetUserId)));
        setAdminNotification(`Invited user to stage`);
        setTimeout(()=>setAdminNotification(''), 3000);
    };
    const handleRemoveFromStage = (targetUserId, targetSocketId)=>{
        var _socketRef_current;
        (_socketRef_current = socketRef.current) === null || _socketRef_current === void 0 ? void 0 : _socketRef_current.emit('live:remove_stage', {
            roomId,
            targetUserId,
            targetSocketId
        });
        setStageMemberIds((prev)=>prev.filter((id)=>String(id) !== String(targetUserId)));
        setAdminNotification(`Returned user to audience`);
        setTimeout(()=>setAdminNotification(''), 3000);
    };
    // Stream Ended Screen
    if (streamEnded) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full h-full items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 pointer-events-none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                        lineNumber: 573,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                    lineNumber: 572,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center text-center max-w-sm px-6 z-10 animate-in fade-in slide-in-from-bottom-4 duration-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24 h-24 rounded-full bg-gray-800 border-2 border-gray-700 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                        className: "w-10 h-10 text-gray-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 579,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                    lineNumber: 578,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-1 -right-1 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center border-2 border-gray-950",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                        className: "w-4 h-4 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 582,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                    lineNumber: 581,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                            lineNumber: 577,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-1 px-3 py-1 bg-gray-800/80 text-gray-400 text-xs font-semibold rounded-full flex items-center gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-2 h-2 rounded-full bg-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                    lineNumber: 587,
                                    columnNumber: 13
                                }, this),
                                "STREAM ENDED"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                            lineNumber: 586,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 text-2xl font-extrabold text-white",
                            children: roomTitle
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                            lineNumber: 591,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-base text-gray-400 font-medium",
                            children: "The host has ended the room."
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                            lineNumber: 592,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-gray-500",
                            children: "🎙️ Come back after live — see you next time!"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                            lineNumber: 593,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onLeave,
                            className: "mt-8 flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-[10px] transition-all border border-white/10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                    lineNumber: 599,
                                    columnNumber: 13
                                }, this),
                                "Back to Explore"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                            lineNumber: 595,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                    lineNumber: 576,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
            lineNumber: 571,
            columnNumber: 7
        }, this);
    }
    const handleGiftSent = (giftName, coinsSpent)=>{
        var _socketRef_current;
        const senderName = (user === null || user === void 0 ? void 0 : user.fullName) || 'A viewer';
        const giftComment = {
            id: `gift_${Date.now()}`,
            text: `🎁 sent ${giftName} (${coinsSpent} Coins)!`,
            author: {
                fullName: senderName,
                avatar: (user === null || user === void 0 ? void 0 : user.avatar) || undefined
            },
            createdAt: new Date().toISOString()
        };
        setComments((prev)=>[
                ...prev,
                giftComment
            ]);
        (_socketRef_current = socketRef.current) === null || _socketRef_current === void 0 ? void 0 : _socketRef_current.emit('live:chat_message', {
            roomId,
            text: `🎁 sent ${giftName} (${coinsSpent} Coins)!`,
            author: {
                fullName: senderName,
                avatar: (user === null || user === void 0 ? void 0 : user.avatar) || undefined
            },
            isGift: true
        });
    };
    const localTrackInfo = tracks['local'] || {};
    const hostParticipant = remoteParticipants.find((p)=>p.identity === String(hostId)) || remoteParticipants[0];
    const hostTrackInfo = hostParticipant ? tracks[hostParticipant.identity] || tracks[hostParticipant.sid] : undefined;
    const totalMembersCount = remoteParticipants.length + 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full h-full bg-black overflow-hidden flex ${isNative || isMobile ? 'fixed inset-0 z-50 flex-col' : 'relative flex-row'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex flex-col items-center justify-center bg-black transition-all duration-300 w-full h-full flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$LiveHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        roomTitle: roomTitle,
                        roomId: roomId,
                        totalMembersCount: totalMembersCount,
                        isHost: isHost,
                        hostId: hostId,
                        showMembersPanel: showMembersPanel,
                        setShowMembersPanel: setShowMembersPanel,
                        showRightPanel: showRightPanel,
                        setShowRightPanel: setShowRightPanel,
                        showAdminSettings: showAdminSettings,
                        setShowAdminSettings: setShowAdminSettings,
                        onLeave: handleLeave,
                        onGiftSent: handleGiftSent,
                        onOpenGifts: ()=>{
                            setShowRightPanel(true);
                            setRightPanelTab(isHost ? 'report' : 'gifts');
                        },
                        roomFormat: roomFormat,
                        broadcastType: broadcastType,
                        raisedHandsCount: raisedHands.length
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                        lineNumber: 640,
                        columnNumber: 9
                    }, this),
                    isHost && showAdminSettings && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-18 right-4 w-72 bg-white dark:bg-gray-900 rounded-[10px] shadow-2xl z-50 border border-gray-200 dark:border-gray-800 p-4 animate-in fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-extrabold text-gray-900 dark:text-white text-xs uppercase tracking-wider flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                className: "w-3.5 h-3.5 text-indigo-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                lineNumber: 665,
                                                columnNumber: 17
                                            }, this),
                                            "Room Settings"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 664,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowAdminSettings(false),
                                        className: "text-gray-400 hover:text-gray-600 dark:hover:text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                            lineNumber: 669,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 668,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                lineNumber: 663,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "text-xs font-bold text-gray-600 dark:text-gray-400 block mb-1.5",
                                        children: "Layout Mode"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 675,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-1.5 bg-gray-100 dark:bg-gray-800 p-1 rounded-[8px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>changeLayoutMode('grid'),
                                                className: `py-1 rounded-[6px] text-xs font-bold flex items-center justify-center gap-1 transition-all ${roomLayoutMode === 'grid' ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-xs' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$3x3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                        lineNumber: 685,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Grid (Meet)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                        lineNumber: 686,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                lineNumber: 677,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>changeLayoutMode('stage'),
                                                className: `py-1 rounded-[6px] text-xs font-bold flex items-center justify-center gap-1 transition-all ${roomLayoutMode === 'stage' ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-xs' : 'text-gray-500 hover:text-gray-900 dark:hover:text-white'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                        className: "w-3.5 h-3.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                        lineNumber: 696,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Stage (Live)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                lineNumber: 688,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 676,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                lineNumber: 674,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center justify-between p-2 rounded-[8px] bg-gray-50 dark:bg-gray-800/50 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-gray-700 dark:text-gray-300",
                                                children: "Allow Members Mic"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                lineNumber: 705,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: allowAllMic,
                                                onChange: (e)=>{
                                                    var _socketRef_current;
                                                    setAllowAllMic(e.target.checked);
                                                    (_socketRef_current = socketRef.current) === null || _socketRef_current === void 0 ? void 0 : _socketRef_current.emit('live:room_permissions', {
                                                        roomId,
                                                        allowAllMic: e.target.checked,
                                                        allowAllVideo,
                                                        allowAllScreenShare,
                                                        roomLayoutMode
                                                    });
                                                },
                                                className: "w-4 h-4 accent-purple-600 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                lineNumber: 706,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 704,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center justify-between p-2 rounded-[8px] bg-gray-50 dark:bg-gray-800/50 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-gray-700 dark:text-gray-300",
                                                children: "Allow Members Video"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                lineNumber: 718,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: allowAllVideo,
                                                onChange: (e)=>{
                                                    var _socketRef_current;
                                                    setAllowAllVideo(e.target.checked);
                                                    (_socketRef_current = socketRef.current) === null || _socketRef_current === void 0 ? void 0 : _socketRef_current.emit('live:room_permissions', {
                                                        roomId,
                                                        allowAllMic,
                                                        allowAllVideo: e.target.checked,
                                                        allowAllScreenShare,
                                                        roomLayoutMode
                                                    });
                                                },
                                                className: "w-4 h-4 accent-purple-600 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                lineNumber: 719,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 717,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center justify-between p-2 rounded-xl bg-gray-50 dark:bg-gray-800/50 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-gray-700 dark:text-gray-300",
                                                children: "Allow Screen Share"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                lineNumber: 731,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: allowAllScreenShare,
                                                onChange: (e)=>{
                                                    var _socketRef_current;
                                                    setAllowAllScreenShare(e.target.checked);
                                                    (_socketRef_current = socketRef.current) === null || _socketRef_current === void 0 ? void 0 : _socketRef_current.emit('live:room_permissions', {
                                                        roomId,
                                                        allowAllMic,
                                                        allowAllVideo,
                                                        allowAllScreenShare: e.target.checked,
                                                        roomLayoutMode
                                                    });
                                                },
                                                className: "w-4 h-4 accent-purple-600 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                lineNumber: 732,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 730,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                lineNumber: 703,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                        lineNumber: 662,
                        columnNumber: 11
                    }, this),
                    showMembersPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-18 left-3 sm:left-4 w-[310px] sm:w-80 bg-gray-900/95 backdrop-blur-2xl text-white rounded-[10px] shadow-2xl z-50 border border-white/15 overflow-hidden flex flex-col max-h-[75%] animate-in fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 border-b border-white/10 flex justify-between items-center bg-white/5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-extrabold text-white flex items-center gap-2 text-xs uppercase tracking-wider",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "w-4 h-4 text-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                    lineNumber: 752,
                                                    columnNumber: 19
                                                }, this),
                                                roomFormat === 'meet' ? `Meeting Members (${totalMembersCount})` : `Viewers & Audience (${totalMembersCount})`
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                            lineNumber: 751,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 750,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowMembersPanel(false),
                                        className: "text-gray-400 hover:text-white cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                            lineNumber: 757,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 756,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                lineNumber: 749,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-y-auto p-2.5 space-y-2 flex-1 min-h-0",
                                children: [
                                    raisedHands.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-[8px] space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[11px] font-black text-amber-400 uppercase tracking-wide flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "✋"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                            lineNumber: 767,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Request to Speak (",
                                                        raisedHands.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                    lineNumber: 766,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                lineNumber: 765,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5",
                                                children: raisedHands.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between bg-black/50 px-2.5 py-1.5 rounded-[6px] border border-white/10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2 min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "w-6 h-6 rounded-full bg-amber-500/30 text-amber-300 font-bold text-[11px] flex items-center justify-center shrink-0",
                                                                        children: (h.name || '?')[0].toUpperCase()
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                        lineNumber: 774,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-bold text-white truncate max-w-[90px] sm:max-w-[110px]",
                                                                        children: h.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                        lineNumber: 777,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                lineNumber: 773,
                                                                columnNumber: 25
                                                            }, this),
                                                            isHost ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-1 shrink-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleBringToStage(h.userId, h.socketId, false),
                                                                        className: "px-2 py-1 bg-white/15 hover:bg-white/25 text-white rounded-[6px] text-[10px] font-bold cursor-pointer",
                                                                        title: "Allow Mic Only",
                                                                        children: "🎤 Mic"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                        lineNumber: 781,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>handleBringToStage(h.userId, h.socketId, true),
                                                                        className: "px-2 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-[6px] text-[10px] font-bold cursor-pointer",
                                                                        title: "Bring to Stage (Video + Audio)",
                                                                        children: "📹 Stage"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                        lineNumber: 789,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                lineNumber: 780,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-bold text-amber-400",
                                                                children: "Waiting..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                lineNumber: 799,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, String(h.userId), true, {
                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                        lineNumber: 772,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                lineNumber: 770,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 764,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-2 rounded-xl bg-white/5 border border-white/5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2.5 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs shrink-0",
                                                        children: ((user === null || user === void 0 ? void 0 : user.fullName) || (user === null || user === void 0 ? void 0 : user.email) || 'Y')[0].toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                        lineNumber: 810,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "min-w-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs font-bold text-white flex items-center gap-1.5 truncate",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate",
                                                                    children: (user === null || user === void 0 ? void 0 : user.fullName) || (user === null || user === void 0 ? void 0 : (_user_email = user.email) === null || _user_email === void 0 ? void 0 : _user_email.split('@')[0]) || 'You'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                    lineNumber: 815,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-gray-400",
                                                                    children: "(You)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                    lineNumber: 816,
                                                                    columnNumber: 23
                                                                }, this),
                                                                isHost ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-purple-900/60 text-purple-300 text-[10px] px-1.5 py-0.2 rounded font-black uppercase",
                                                                    children: "Host"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                    lineNumber: 818,
                                                                    columnNumber: 25
                                                                }, this) : isOnStage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-indigo-900/60 text-indigo-300 text-[10px] px-1.5 py-0.2 rounded font-black uppercase",
                                                                    children: "Stage"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                    lineNumber: 820,
                                                                    columnNumber: 25
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-white/10 text-gray-400 text-[10px] px-1.5 py-0.2 rounded font-medium",
                                                                    children: "Audience"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                    lineNumber: 822,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                            lineNumber: 814,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                        lineNumber: 813,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                lineNumber: 809,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 text-gray-400 shrink-0",
                                                children: [
                                                    isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                                        className: "w-3.5 h-3.5 text-red-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                        lineNumber: 828,
                                                        columnNumber: 30
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                        className: "w-3.5 h-3.5 text-emerald-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                        lineNumber: 828,
                                                        columnNumber: 80
                                                    }, this),
                                                    isVideoOff ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                                        className: "w-3.5 h-3.5 text-red-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 33
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                        className: "w-3.5 h-3.5 text-blue-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                        lineNumber: 829,
                                                        columnNumber: 85
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                lineNumber: 827,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 808,
                                        columnNumber: 15
                                    }, this),
                                    remoteParticipants.map((p)=>{
                                        const isParticipantMuted = !p.isMicrophoneEnabled;
                                        const isParticipantVideoOff = !p.isCameraEnabled;
                                        const isThisHost = String(p.identity) === String(hostId);
                                        const isThisOnStage = stageMemberIds.some((id)=>String(id) === String(p.identity));
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2.5 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-xs shrink-0",
                                                            children: (p.name || p.identity || '?')[0].toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                            lineNumber: 843,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "min-w-0",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs font-bold text-gray-200 truncate flex items-center gap-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "truncate",
                                                                        children: p.name || p.identity
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                        lineNumber: 848,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    isThisHost ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "bg-purple-900/60 text-purple-300 text-[10px] px-1.5 py-0.2 rounded font-black uppercase shrink-0",
                                                                        children: "Host"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                        lineNumber: 850,
                                                                        columnNumber: 29
                                                                    }, this) : isThisOnStage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "bg-indigo-900/60 text-indigo-300 text-[10px] px-1.5 py-0.2 rounded font-black uppercase shrink-0",
                                                                        children: "Stage"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                        lineNumber: 852,
                                                                        columnNumber: 29
                                                                    }, this) : null
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                lineNumber: 847,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                            lineNumber: 846,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                    lineNumber: 842,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 shrink-0",
                                                    children: [
                                                        isParticipantMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                                            className: "w-3.5 h-3.5 text-red-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                            lineNumber: 859,
                                                            columnNumber: 45
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                            className: "w-3.5 h-3.5 text-emerald-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                            lineNumber: 859,
                                                            columnNumber: 95
                                                        }, this),
                                                        isParticipantVideoOff ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                                            className: "w-3.5 h-3.5 text-red-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                            lineNumber: 860,
                                                            columnNumber: 48
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                            className: "w-3.5 h-3.5 text-blue-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                            lineNumber: 860,
                                                            columnNumber: 100
                                                        }, this),
                                                        isHost && !isThisHost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center ml-1 border-l pl-1 border-white/10 gap-1",
                                                            children: [
                                                                roomFormat === 'broadcast' && (isThisOnStage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleRemoveFromStage(p.identity),
                                                                    className: "px-1.5 py-0.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded text-[10px] font-bold cursor-pointer",
                                                                    title: "Remove from stage",
                                                                    children: "Off Stage"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                    lineNumber: 867,
                                                                    columnNumber: 31
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>handleBringToStage(p.identity, undefined, true),
                                                                    className: "px-1.5 py-0.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded text-[10px] font-bold cursor-pointer",
                                                                    title: "Invite to stage",
                                                                    children: "+ Stage"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                    lineNumber: 876,
                                                                    columnNumber: 31
                                                                }, this)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>{
                                                                        var _socketRef_current;
                                                                        return (_socketRef_current = socketRef.current) === null || _socketRef_current === void 0 ? void 0 : _socketRef_current.emit('live:admin_control', {
                                                                            action: 'mute',
                                                                            targetSocketId: p.identity,
                                                                            roomId
                                                                        });
                                                                    },
                                                                    className: "p-1 hover:bg-white/10 text-gray-400 hover:text-red-400 rounded cursor-pointer",
                                                                    title: "Mute participant",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VolumeX$3e$__["VolumeX"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                        lineNumber: 893,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                    lineNumber: 887,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>{
                                                                        var _socketRef_current;
                                                                        return (_socketRef_current = socketRef.current) === null || _socketRef_current === void 0 ? void 0 : _socketRef_current.emit('live:admin_control', {
                                                                            action: 'kick',
                                                                            targetSocketId: p.identity,
                                                                            roomId
                                                                        });
                                                                    },
                                                                    className: "p-1 hover:bg-white/10 text-gray-400 hover:text-red-400 rounded cursor-pointer",
                                                                    title: "Kick from room",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__["UserX"], {
                                                                        className: "w-3.5 h-3.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                        lineNumber: 901,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                                    lineNumber: 895,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                            lineNumber: 863,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                    lineNumber: 858,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, p.sid, true, {
                                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                            lineNumber: 841,
                                            columnNumber: 19
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                lineNumber: 761,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                        lineNumber: 748,
                        columnNumber: 11
                    }, this),
                    !isConnectedToLiveKit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-30 text-white",
                        children: liveKitError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-3 p-6 text-center max-w-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wifi$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__WifiOff$3e$__["WifiOff"], {
                                    className: "w-10 h-10 text-red-500 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                    lineNumber: 918,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold text-red-400",
                                    children: liveKitError
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                    lineNumber: 919,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onLeave,
                                    className: "px-4 py-2 bg-red-600 hover:bg-red-700 font-bold text-xs rounded-xl cursor-pointer",
                                    children: "Close Room"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                    lineNumber: 920,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                            lineNumber: 917,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                    className: "w-10 h-10 text-emerald-400 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                    lineNumber: 929,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-semibold tracking-wide animate-pulse",
                                    children: "Connecting LiveKit Room..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                    lineNumber: 930,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                            lineNumber: 928,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                        lineNumber: 915,
                        columnNumber: 11
                    }, this),
                    !isHost && !remoteParticipants.some((p)=>String(p.identity) === String(hostId)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute z-40 bg-gray-900/95 backdrop-blur-xl border border-amber-500/40 rounded-[10px] p-3 sm:px-4 sm:py-3 flex items-center gap-3 shadow-2xl animate-in fade-in slide-in-from-top-3 ${isNative || isMobile ? 'top-[calc(env(safe-area-inset-top,12px)+3.8rem)] left-3 right-3 max-w-lg mx-auto' : 'top-18 left-1/2 -translate-x-1/2 max-w-lg w-[90%]'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-9 h-9 rounded-[8px] bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"], {
                                    className: "w-4 h-4 animate-pulse"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                    lineNumber: 943,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                lineNumber: 942,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold text-white tracking-wide",
                                        children: "Host is currently offline"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 946,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-gray-300 leading-snug mt-0.5",
                                        children: "We will send you a push notification once the host starts broadcasting."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 947,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                lineNumber: 945,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleToggleNotify,
                                disabled: togglingNotify,
                                className: `px-3 py-1.5 rounded-[8px] text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${isNotifyActive ? 'bg-amber-500 text-gray-950 shadow-md font-black' : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                                        className: `w-3.5 h-3.5 ${isNotifyActive ? 'fill-gray-950' : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 959,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: isNotifyActive ? 'Notified' : 'Notify Me'
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 960,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                lineNumber: 951,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                        lineNumber: 938,
                        columnNumber: 11
                    }, this),
                    recentGiftBanner && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-20 left-1/2 -translate-x-1/2 z-40 bg-gradient-to-r from-pink-500/90 via-purple-600/90 to-indigo-600/90 backdrop-blur-md px-4 py-2 rounded-full border border-pink-400/50 shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-top duration-300 pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg shadow-sm animate-bounce",
                                children: "🎁"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                lineNumber: 968,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "leading-tight",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-black tracking-wide text-pink-100 flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-extrabold",
                                                children: recentGiftBanner.senderName
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                lineNumber: 973,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-yellow-300 font-black",
                                                children: recentGiftBanner.giftName
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                                lineNumber: 974,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 972,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[14px] text-pink-200 font-semibold",
                                        children: "Supporting the creator in live stream ✨"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 976,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                lineNumber: 971,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                        lineNumber: 967,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$LiveGrid$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        roomLayoutMode: roomLayoutMode,
                        isHost: isHost,
                        user: user,
                        isMuted: isMuted,
                        isVideoOff: isVideoOff,
                        localTrackInfo: localTrackInfo,
                        hostParticipant: hostParticipant,
                        hostTrackInfo: hostTrackInfo,
                        remoteParticipants: remoteParticipants,
                        tracks: tracks,
                        localParticipant: localParticipant,
                        isOnStage: isOnStage,
                        stageMemberIds: stageMemberIds,
                        broadcastType: broadcastType
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                        lineNumber: 982,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$LiveControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isMuted: isMuted,
                        isVideoOff: isVideoOff,
                        isScreenSharing: isScreenSharing,
                        isScreenShareSupported: isScreenShareSupported,
                        toggleMic: toggleMic,
                        toggleVideo: toggleVideo,
                        toggleScreenShare: toggleScreenShare,
                        handleLeave: handleLeave,
                        onSendGiftClick: !isHost ? ()=>{
                            setShowRightPanel(true);
                            setRightPanelTab('gifts');
                        } : undefined,
                        roomFormat: roomFormat,
                        isHost: isHost,
                        isOnStage: isOnStage,
                        isHandRaised: isHandRaised,
                        onToggleRaiseHand: handleToggleRaiseHand,
                        broadcastType: broadcastType
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                        lineNumber: 1000,
                        columnNumber: 9
                    }, this),
                    (isNative || isMobile) && !showRightPanel && comments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[max(calc(env(safe-area-inset-bottom,0px)+5.5rem),6.5rem)] left-3 z-30 max-w-[82%] max-h-[160px] overflow-y-auto space-y-1.5 pointer-events-none select-none",
                        children: comments.slice(-4).map((c)=>{
                            var _c_author_fullName, _c_author;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-[8px] text-white text-xs inline-flex items-center gap-1.5 border border-white/10 shadow-lg animate-in fade-in slide-in-from-bottom-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-extrabold text-indigo-300",
                                        children: [
                                            ((_c_author = c.author) === null || _c_author === void 0 ? void 0 : (_c_author_fullName = _c_author.fullName) === null || _c_author_fullName === void 0 ? void 0 : _c_author_fullName.split(' ')[0]) || 'User',
                                            ":"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 1023,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-white/90",
                                        children: c.text
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                        lineNumber: 1024,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, c.id, true, {
                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                lineNumber: 1022,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                        lineNumber: 1020,
                        columnNumber: 11
                    }, this),
                    adminNotification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-24 left-1/2 -translate-x-1/2 z-50 bg-red-600 text-white px-5 py-2.5 rounded-full shadow-2xl font-bold text-xs flex items-center gap-2 animate-in fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                className: "w-4 h-4 animate-bounce"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                lineNumber: 1033,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: adminNotification
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                                lineNumber: 1034,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                        lineNumber: 1032,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                lineNumber: 638,
                columnNumber: 7
            }, this),
            showRightPanel && (isNative || isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex flex-col justify-end pointer-events-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200 cursor-pointer",
                        onClick: ()=>setShowRightPanel(false)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                        lineNumber: 1044,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-full h-[62vh] max-h-[520px] rounded-t-[28px] bg-[#0f172a] border-t border-white/15 shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$LiveChatPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            comments: comments,
                            commentInput: commentInput,
                            submittingComment: submittingComment,
                            likeCount: likeCount,
                            hasLiked: hasLiked,
                            likePulsing: likePulsing,
                            commentsEndRef: commentsEndRef,
                            setCommentInput: setCommentInput,
                            handleSendComment: handleSendComment,
                            handleToggleLike: handleToggleLike,
                            setShowRightPanel: setShowRightPanel,
                            isHost: isHost,
                            totalMembersCount: totalMembersCount,
                            recipientId: hostId || 1,
                            roomId: roomId,
                            onGiftSent: handleGiftSent,
                            activePanelTab: rightPanelTab,
                            setActivePanelTab: setRightPanelTab,
                            onOpenCreatorWallet: ()=>setShowCreatorWallet(true)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                            lineNumber: 1050,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                        lineNumber: 1049,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                lineNumber: 1042,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$LiveChatPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                comments: comments,
                commentInput: commentInput,
                submittingComment: submittingComment,
                likeCount: likeCount,
                hasLiked: hasLiked,
                likePulsing: likePulsing,
                commentsEndRef: commentsEndRef,
                setCommentInput: setCommentInput,
                handleSendComment: handleSendComment,
                handleToggleLike: handleToggleLike,
                setShowRightPanel: setShowRightPanel,
                isHost: isHost,
                totalMembersCount: totalMembersCount,
                recipientId: hostId || 1,
                roomId: roomId,
                onGiftSent: handleGiftSent,
                activePanelTab: rightPanelTab,
                setActivePanelTab: setRightPanelTab,
                onOpenCreatorWallet: ()=>setShowCreatorWallet(true)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                lineNumber: 1074,
                columnNumber: 11
            }, this)),
            isHost && showCreatorWallet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$WalletDashboardModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setShowCreatorWallet(false)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
                lineNumber: 1100,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/live/LiveRoom.tsx",
        lineNumber: 633,
        columnNumber: 5
    }, this);
}
_s(LiveRoom, "24dURFT9Ei7q5hYdBlFMuplp5Ks=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = LiveRoom;
var _c;
__turbopack_context__.k.register(_c, "LiveRoom");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_user_components_live_LiveRoom_tsx_7ba8de6c._.js.map