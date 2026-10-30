(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/call/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// Call Subsystem — Common Types (P2P & P2G)
// ============================================================
__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/call/p2p/P2PVoiceCall.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// P2P Voice Call Component (Peer-to-Peer Direct 1-on-1 Voice Call)
// ============================================================
__turbopack_context__.s([
    "P2PVoiceCall",
    ()=>P2PVoiceCall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mic01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MicOff01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/MicOff01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/VolumeHighIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallEnd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CallEnd01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$livekitApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/livekitApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$devicePermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/devicePermissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/audioOutput.ts [app-client] (ecmascript)");
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
function P2PVoiceCall({ onClose, chatName, avatarUrl, isAccepted, isRingingStatus, busyMessage, roomId }) {
    _s();
    const [seconds, setSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSpeaker, setIsSpeaker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeDeviceId, setActiveDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('default');
    const [activeDeviceLabel, setActiveDeviceLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Default');
    const [availableOutputs, setAvailableOutputs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showDeviceMenu, setShowDeviceMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioOutputError, setAudioOutputError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [avatarError, setAvatarError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRinging, setIsRinging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isRingingStatus && !isAccepted);
    const [isConnectedToRoom, setIsConnectedToRoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [permissionError, setPermissionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasRemoteParticipant, setHasRemoteParticipant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRemoteAudioMuted, setIsRemoteAudioMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const resolvedAvatar = avatarUrl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(avatarUrl) : undefined;
    const initials = (chatName || 'User').trim().substring(0, 2).toUpperCase();
    const remoteAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const roomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const secondsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const hasClosedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const onCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onClose);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "P2PVoiceCall.useEffect": ()=>{
            onCloseRef.current = onClose;
        }
    }["P2PVoiceCall.useEffect"], [
        onClose
    ]);
    const handleSafeClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "P2PVoiceCall.useCallback[handleSafeClose]": (dur)=>{
            if (hasClosedRef.current) return;
            hasClosedRef.current = true;
            const finalDuration = typeof dur === 'number' ? dur : secondsRef.current;
            if (roomRef.current) {
                try {
                    roomRef.current.disconnect();
                } catch (e) {}
                roomRef.current = null;
            }
            if (onCloseRef.current) {
                onCloseRef.current(finalDuration);
            }
        }
    }["P2PVoiceCall.useCallback[handleSafeClose]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "P2PVoiceCall.useEffect": ()=>{
            if (isAccepted || hasRemoteParticipant) {
                setIsRinging(false);
            } else {
                setIsRinging(Boolean(isRingingStatus));
            }
        }
    }["P2PVoiceCall.useEffect"], [
        isAccepted,
        isRingingStatus,
        hasRemoteParticipant
    ]);
    // 45-second timeout: automatically cut call if user does not answer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "P2PVoiceCall.useEffect": ()=>{
            if (isAccepted || hasRemoteParticipant) return;
            const noAnswerTimer = setTimeout({
                "P2PVoiceCall.useEffect.noAnswerTimer": ()=>{
                    console.log('[P2PVoiceCall] 45s timeout reached: user did not answer. Auto-cutting call.');
                    handleSafeClose(0);
                }
            }["P2PVoiceCall.useEffect.noAnswerTimer"], 45000);
            return ({
                "P2PVoiceCall.useEffect": ()=>clearTimeout(noAnswerTimer)
            })["P2PVoiceCall.useEffect"];
        }
    }["P2PVoiceCall.useEffect"], [
        isAccepted,
        hasRemoteParticipant
    ]);
    // LiveKit Room Connection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "P2PVoiceCall.useEffect": ()=>{
            let isMounted = true;
            const connectLiveKit = {
                "P2PVoiceCall.useEffect.connectLiveKit": async ()=>{
                    try {
                        if (!roomId) return;
                        const permRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$devicePermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestDevicePermissions"])('audio');
                        if (!(permRes === null || permRes === void 0 ? void 0 : permRes.granted) && isMounted) {
                            setPermissionError('Microphone permission required for voice calls');
                        }
                        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$livekitApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["livekitApi"].getToken(roomId, 'audio');
                        if (!(data === null || data === void 0 ? void 0 : data.token) || !(data === null || data === void 0 ? void 0 : data.wsUrl)) {
                            throw new Error('Failed to acquire LiveKit token');
                        }
                        if (!isMounted) return;
                        const room = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Room"]({
                            adaptiveStream: true,
                            dynacast: true,
                            stopLocalTrackOnUnpublish: true,
                            publishDefaults: {
                                audioPreset: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioPresets"].music,
                                dtx: true,
                                red: true
                            },
                            audioCaptureDefaults: {
                                echoCancellation: true,
                                noiseSuppression: true,
                                autoGainControl: true,
                                sampleRate: 48000,
                                channelCount: 1
                            }
                        });
                        roomRef.current = room;
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackSubscribed, {
                            "P2PVoiceCall.useEffect.connectLiveKit": (track, publication, participant)=>{
                                if (track.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Audio && remoteAudioRef.current) {
                                    track.attach(remoteAudioRef.current);
                                    remoteAudioRef.current.volume = 1.0;
                                    remoteAudioRef.current.autoplay = true;
                                    setIsRinging(false);
                                    setHasRemoteParticipant(true);
                                    if ((publication === null || publication === void 0 ? void 0 : publication.isMuted) !== undefined) {
                                        setIsRemoteAudioMuted(publication.isMuted);
                                    }
                                }
                            }
                        }["P2PVoiceCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackMuted, {
                            "P2PVoiceCall.useEffect.connectLiveKit": (pub, participant)=>{
                                if (participant !== room.localParticipant && (pub === null || pub === void 0 ? void 0 : pub.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Audio) {
                                    setIsRemoteAudioMuted(true);
                                }
                            }
                        }["P2PVoiceCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackUnmuted, {
                            "P2PVoiceCall.useEffect.connectLiveKit": (pub, participant)=>{
                                if (participant !== room.localParticipant && (pub === null || pub === void 0 ? void 0 : pub.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Audio) {
                                    setIsRemoteAudioMuted(false);
                                }
                            }
                        }["P2PVoiceCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantConnected, {
                            "P2PVoiceCall.useEffect.connectLiveKit": ()=>{
                                setIsRinging(false);
                                setHasRemoteParticipant(true);
                            }
                        }["P2PVoiceCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantDisconnected, {
                            "P2PVoiceCall.useEffect.connectLiveKit": ()=>{
                                if (room.remoteParticipants.size === 0) {
                                    setIsRemoteAudioMuted(false);
                                    handleSafeClose(secondsRef.current);
                                }
                            }
                        }["P2PVoiceCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Disconnected, {
                            "P2PVoiceCall.useEffect.connectLiveKit": ()=>{
                                if (isMounted) handleSafeClose(secondsRef.current);
                            }
                        }["P2PVoiceCall.useEffect.connectLiveKit"]);
                        await room.connect(data.wsUrl, data.token);
                        if (isMounted) {
                            setIsConnectedToRoom(true);
                            // Check if remote participant is already in room
                            if (room.remoteParticipants.size > 0) {
                                setHasRemoteParticipant(true);
                                setIsRinging(false);
                                room.remoteParticipants.forEach({
                                    "P2PVoiceCall.useEffect.connectLiveKit": (participant)=>{
                                        participant.trackPublications.forEach({
                                            "P2PVoiceCall.useEffect.connectLiveKit": (pub)=>{
                                                if (pub.track && pub.track.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Audio && remoteAudioRef.current) {
                                                    pub.track.attach(remoteAudioRef.current);
                                                    remoteAudioRef.current.volume = 1.0;
                                                    remoteAudioRef.current.autoplay = true;
                                                    remoteAudioRef.current.play().catch({
                                                        "P2PVoiceCall.useEffect.connectLiveKit": ()=>{}
                                                    }["P2PVoiceCall.useEffect.connectLiveKit"]);
                                                    setIsRemoteAudioMuted(Boolean(pub.isMuted));
                                                }
                                            }
                                        }["P2PVoiceCall.useEffect.connectLiveKit"]);
                                    }
                                }["P2PVoiceCall.useEffect.connectLiveKit"]);
                            }
                            __turbopack_context__.A("[project]/src/services/presenceLifecycleManager.ts [app-client] (ecmascript, async loader)").then({
                                "P2PVoiceCall.useEffect.connectLiveKit": ({ presenceLifecycleManager })=>{
                                    presenceLifecycleManager.setInCall(true, 'direct');
                                }
                            }["P2PVoiceCall.useEffect.connectLiveKit"]).catch({
                                "P2PVoiceCall.useEffect.connectLiveKit": ()=>{}
                            }["P2PVoiceCall.useEffect.connectLiveKit"]);
                            try {
                                await room.localParticipant.setMicrophoneEnabled(true, {
                                    echoCancellation: true,
                                    noiseSuppression: true,
                                    autoGainControl: true,
                                    sampleRate: 48000,
                                    channelCount: 1
                                });
                            } catch (mediaErr) {
                                console.warn('[P2PVoiceCall] Microphone permission error:', mediaErr);
                                setPermissionError('Could not start microphone');
                            }
                        }
                    } catch (err) {
                        var _err_message;
                        if ((err === null || err === void 0 ? void 0 : err.name) === 'ConnectionError' || (err === null || err === void 0 ? void 0 : (_err_message = err.message) === null || _err_message === void 0 ? void 0 : _err_message.includes('Client initiated disconnect'))) {
                            return;
                        }
                        console.error('[P2PVoiceCall] Error connecting to LiveKit room:', err);
                        setPermissionError('Unable to access audio device. Check microphone permissions.');
                    }
                }
            }["P2PVoiceCall.useEffect.connectLiveKit"];
            connectLiveKit();
            return ({
                "P2PVoiceCall.useEffect": ()=>{
                    isMounted = false;
                    __turbopack_context__.A("[project]/src/services/presenceLifecycleManager.ts [app-client] (ecmascript, async loader)").then({
                        "P2PVoiceCall.useEffect": ({ presenceLifecycleManager })=>{
                            presenceLifecycleManager.setInCall(false);
                        }
                    }["P2PVoiceCall.useEffect"]).catch({
                        "P2PVoiceCall.useEffect": ()=>{}
                    }["P2PVoiceCall.useEffect"]);
                    if (roomRef.current) {
                        try {
                            roomRef.current.disconnect();
                        } catch (e) {}
                        roomRef.current = null;
                    }
                }
            })["P2PVoiceCall.useEffect"];
        }
    }["P2PVoiceCall.useEffect"], [
        roomId
    ]);
    // Toggle Mute
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "P2PVoiceCall.useEffect": ()=>{
            if (roomRef.current && isConnectedToRoom) {
                roomRef.current.localParticipant.setMicrophoneEnabled(!isMuted);
            }
        }
    }["P2PVoiceCall.useEffect"], [
        isMuted,
        isConnectedToRoom
    ]);
    // Timer logic for call duration: only count once remote participant is connected in room
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "P2PVoiceCall.useEffect": ()=>{
            if (!hasRemoteParticipant || !isConnectedToRoom) return;
            const timer = setInterval({
                "P2PVoiceCall.useEffect.timer": ()=>{
                    setSeconds({
                        "P2PVoiceCall.useEffect.timer": (s)=>{
                            const next = s + 1;
                            secondsRef.current = next;
                            return next;
                        }
                    }["P2PVoiceCall.useEffect.timer"]);
                }
            }["P2PVoiceCall.useEffect.timer"], 1000);
            return ({
                "P2PVoiceCall.useEffect": ()=>clearInterval(timer)
            })["P2PVoiceCall.useEffect"];
        }
    }["P2PVoiceCall.useEffect"], [
        hasRemoteParticipant,
        isConnectedToRoom
    ]);
    // Audio ringtone synthesis
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "P2PVoiceCall.useEffect": ()=>{
            if (!isRinging) return;
            let audioCtx;
            let osc1, osc2, gainNode;
            let ringInterval;
            try {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                gainNode = audioCtx.createGain();
                gainNode.connect(audioCtx.destination);
                gainNode.gain.value = 0;
                osc1 = audioCtx.createOscillator();
                osc1.type = 'sine';
                osc1.frequency.value = 440;
                osc1.connect(gainNode);
                osc2 = audioCtx.createOscillator();
                osc2.type = 'sine';
                osc2.frequency.value = 480;
                osc2.connect(gainNode);
                osc1.start();
                osc2.start();
                const ring = {
                    "P2PVoiceCall.useEffect.ring": ()=>{
                        if (audioCtx.state === 'closed') return;
                        const now = audioCtx.currentTime;
                        gainNode.gain.setValueAtTime(0, now);
                        gainNode.gain.linearRampToValueAtTime(0.05, now + 0.1);
                        gainNode.gain.setValueAtTime(0.05, now + 2);
                        gainNode.gain.linearRampToValueAtTime(0, now + 2.1);
                    }
                }["P2PVoiceCall.useEffect.ring"];
                ring();
                ringInterval = setInterval(ring, 4000);
            } catch (e) {
                console.error("Audio synth error", e);
            }
            return ({
                "P2PVoiceCall.useEffect": ()=>{
                    if (ringInterval) clearInterval(ringInterval);
                    if (osc1) {
                        try {
                            osc1.stop();
                        } catch (e) {}
                    }
                    if (osc2) {
                        try {
                            osc2.stop();
                        } catch (e) {}
                    }
                    if (audioCtx) {
                        try {
                            audioCtx.close();
                        } catch (e) {}
                    }
                }
            })["P2PVoiceCall.useEffect"];
        }
    }["P2PVoiceCall.useEffect"], [
        isRinging
    ]);
    // Monitor available audio output devices (Speaker, Bluetooth, Default)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "P2PVoiceCall.useEffect": ()=>{
            const updateDevices = {
                "P2PVoiceCall.useEffect.updateDevices": async ()=>{
                    const outputs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvailableAudioOutputs"])();
                    setAvailableOutputs(outputs);
                    // 1. Auto-recovery: If active Bluetooth/Speaker disconnected mid-call, fall back to default
                    if (activeDeviceId !== 'default') {
                        const recovery = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleDeviceDisconnectRecovery"])(activeDeviceId, remoteAudioRef.current, roomRef.current);
                        if (recovery.recovered) {
                            setActiveDeviceId('default');
                            setActiveDeviceLabel(recovery.newDeviceLabel);
                            setIsSpeaker(false);
                            setAudioOutputError('🎧 Bluetooth audio disconnected. Switched to default output.');
                            return;
                        }
                    }
                    // 2. Restore saved user preference if connected device matches
                    const savedPref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSavedAudioOutputPreference"])();
                    if (savedPref && activeDeviceId === 'default' && outputs.some({
                        "P2PVoiceCall.useEffect.updateDevices": (d)=>d.deviceId === savedPref
                    }["P2PVoiceCall.useEffect.updateDevices"])) {
                        const prefDevice = outputs.find({
                            "P2PVoiceCall.useEffect.updateDevices.prefDevice": (d)=>d.deviceId === savedPref
                        }["P2PVoiceCall.useEffect.updateDevices.prefDevice"]);
                        if (prefDevice) {
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routeAudioOutput"])(remoteAudioRef.current, roomRef.current, savedPref);
                            setActiveDeviceId(savedPref);
                            setActiveDeviceLabel(prefDevice.label);
                            setIsSpeaker(prefDevice.type === 'speaker');
                            return;
                        }
                    }
                    // 3. Highlight connected Bluetooth if present
                    const bt = outputs.find({
                        "P2PVoiceCall.useEffect.updateDevices.bt": (d)=>d.type === 'bluetooth'
                    }["P2PVoiceCall.useEffect.updateDevices.bt"]);
                    if (bt && !isSpeaker && activeDeviceId === 'default') {
                        setActiveDeviceLabel(bt.label);
                    }
                }
            }["P2PVoiceCall.useEffect.updateDevices"];
            updateDevices();
            if (typeof navigator !== 'undefined' && navigator.mediaDevices) {
                navigator.mediaDevices.addEventListener('devicechange', updateDevices);
                return ({
                    "P2PVoiceCall.useEffect": ()=>{
                        navigator.mediaDevices.removeEventListener('devicechange', updateDevices);
                    }
                })["P2PVoiceCall.useEffect"];
            }
        }
    }["P2PVoiceCall.useEffect"], [
        isSpeaker,
        activeDeviceId
    ]);
    const handleToggleSpeaker = async ()=>{
        setAudioOutputError(null);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleSpeakerphone"])(remoteAudioRef.current, roomRef.current, isSpeaker);
            if (!res.success && res.error) {
                setAudioOutputError(res.error);
                return;
            }
            setIsSpeaker(res.isSpeaker);
            setActiveDeviceId(res.activeDeviceId);
            setActiveDeviceLabel(res.activeDeviceLabel);
        } catch (err) {
            console.warn('[P2PVoiceCall] Unable to toggle speaker output:', err);
            setAudioOutputError('Could not route audio output. Bluetooth/speaker follows OS default.');
        }
    };
    const handleSelectDevice = async (deviceId, label, type)=>{
        setAudioOutputError(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routeAudioOutput"])(remoteAudioRef.current, roomRef.current, deviceId);
            setIsSpeaker(type === 'speaker');
            setActiveDeviceId(deviceId);
            setActiveDeviceLabel(label);
            setShowDeviceMenu(false);
        } catch (err) {
            console.warn('[P2PVoiceCall] Error selecting audio output:', err);
            setAudioOutputError(`Could not route to ${label}`);
        }
    };
    const formatTime = (totalSeconds)=>{
        const m = Math.floor(totalSeconds / 60);
        const s = totalSeconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md overflow-hidden select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: remoteAudioRef,
                autoPlay: true,
                playsInline: true
            }, void 0, false, {
                fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                lineNumber: 390,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[100dvh] sm:h-[85vh] sm:max-w-md sm:rounded-3xl shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#192229] via-[#0d1418] to-[#0b1014] flex flex-col items-center justify-between px-6",
                style: {
                    paddingTop: 'max(env(safe-area-inset-top, 0px), 48px)',
                    paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 28px)'
                },
                children: [
                    permissionError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full bg-amber-600/90 text-white text-xs px-4 py-2 rounded-xl text-center font-medium shadow-md z-50 flex items-center justify-center gap-2 mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "⚠️ ",
                                permissionError
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                            lineNumber: 403,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                        lineNumber: 400,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-6 mt-4 sm:mt-8 z-10 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-36 h-36 rounded-full overflow-hidden border-4 border-blue-500/30 flex items-center justify-center bg-[#202c33] shadow-[0_0_50px_rgba(59,130,246,0.35)]",
                                children: [
                                    resolvedAvatar && !avatarError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: resolvedAvatar,
                                        alt: chatName,
                                        className: "w-full h-full object-cover",
                                        onError: ()=>setAvatarError(true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                        lineNumber: 411,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 flex items-center justify-center text-white text-4xl font-bold select-none tracking-wider",
                                        children: initials
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                        lineNumber: 418,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 rounded-full border-2 border-blue-400 animate-[ping_2.5s_ease-in-out_infinite] opacity-40 pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                        lineNumber: 422,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                lineNumber: 409,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[28px] font-bold text-white tracking-wide truncate max-w-xs",
                                        children: chatName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                        lineNumber: 426,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `font-medium tracking-wide mt-1 ${busyMessage ? 'text-red-400 font-semibold animate-pulse' : 'text-[#36b2f4]'}`,
                                        children: busyMessage ? busyMessage : (isAccepted || isConnectedToRoom) && !hasRemoteParticipant ? "Connecting..." : hasRemoteParticipant && isConnectedToRoom ? formatTime(seconds) : !isRingingStatus ? "Calling..." : "Ringing..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                        lineNumber: 427,
                                        columnNumber: 13
                                    }, this),
                                    isRemoteAudioMuted && isConnectedToRoom && hasRemoteParticipant ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/35 shadow-sm animate-pulse",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MicOff01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MicOff01Icon"], {
                                                size: 13,
                                                className: "text-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                                lineNumber: 438,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Microphone muted"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                                lineNumber: 439,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                        lineNumber: 437,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block mt-2 px-3 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20",
                                        children: "Direct Voice Call"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                        lineNumber: 442,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                lineNumber: 425,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6 z-10 mt-16 sm:mt-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMuted(!isMuted),
                                className: `w-14 h-14 rounded-full flex items-center justify-center transition shadow-lg ${isMuted ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`,
                                title: isMuted ? "Unmute" : "Mute",
                                children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$MicOff01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MicOff01Icon"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                    lineNumber: 458,
                                    columnNumber: 24
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mic01Icon"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                    lineNumber: 458,
                                    columnNumber: 47
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                lineNumber: 451,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleSafeClose(secondsRef.current),
                                className: "w-20 h-20 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.5)] transition hover:scale-105 active:scale-95",
                                title: "End Call",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CallEnd01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallEnd01Icon"], {
                                    size: 32,
                                    className: "text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                    lineNumber: 466,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                lineNumber: 461,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (availableOutputs.length > 1) {
                                                setShowDeviceMenu(!showDeviceMenu);
                                            } else {
                                                handleToggleSpeaker();
                                            }
                                        },
                                        className: `w-14 h-14 rounded-full flex items-center justify-center transition shadow-lg ${isSpeaker ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white/20'}`,
                                        title: isSpeaker ? `Speaker Active (${activeDeviceLabel})` : `Audio Output (${activeDeviceLabel})`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$VolumeHighIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeHighIcon"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                            lineNumber: 483,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                        lineNumber: 470,
                                        columnNumber: 13
                                    }, this),
                                    showDeviceMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-20 -right-12 w-64 bg-[#161626]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-3 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-xs font-semibold text-white/80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Audio Output Device"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowDeviceMenu(false),
                                                        className: "text-white/60 hover:text-white",
                                                        children: "✕"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                                lineNumber: 489,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 max-h-48 overflow-y-auto pr-1",
                                                children: availableOutputs.map((dev)=>{
                                                    const isSelected = activeDeviceId !== 'default' ? dev.deviceId === activeDeviceId : isSpeaker ? dev.type === 'speaker' : dev.label === activeDeviceLabel || dev.isDefault;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleSelectDevice(dev.deviceId, dev.label, dev.type),
                                                        className: `w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition ${isSelected ? 'bg-blue-600 text-white font-semibold' : 'bg-white/5 text-gray-200 hover:bg-white/10'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "truncate mr-2",
                                                                children: [
                                                                    dev.type === 'bluetooth' ? '🎧 ' : dev.type === 'speaker' ? '🔊 ' : '📱 ',
                                                                    dev.label
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                                                lineNumber: 506,
                                                                columnNumber: 25
                                                            }, this),
                                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-blue-200",
                                                                children: "Active"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                                                lineNumber: 510,
                                                                columnNumber: 40
                                                            }, this)
                                                        ]
                                                    }, dev.deviceId || dev.label, true, {
                                                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                                        lineNumber: 499,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                                lineNumber: 493,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                        lineNumber: 488,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                lineNumber: 469,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "z-10 flex flex-col items-center mt-3 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-gray-400 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Audio Route:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                        lineNumber: 523,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-medium truncate max-w-[200px]",
                                        children: isSpeaker ? '🔊 Speakerphone' : `🎧 ${activeDeviceLabel}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                        lineNumber: 524,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                lineNumber: 522,
                                columnNumber: 11
                            }, this),
                            audioOutputError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-amber-300 font-medium px-4",
                                role: "status",
                                children: [
                                    "⚠️ ",
                                    audioOutputError
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                                lineNumber: 529,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                        lineNumber: 521,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
                lineNumber: 392,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/call/p2p/P2PVoiceCall.tsx",
        lineNumber: 389,
        columnNumber: 5
    }, this);
}
_s(P2PVoiceCall, "wzeOE7A9znWk9hGIkjjKRaVl9UY=");
_c = P2PVoiceCall;
var _c;
__turbopack_context__.k.register(_c, "P2PVoiceCall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/call/p2p/P2PVideoCall.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// P2P Video Call Component (Peer-to-Peer Direct 1-on-1 Video Call)
// Safe Area Compliant, Bluetooth/Speaker Routing, HD Avatar & Modern UI
// ============================================================
__turbopack_context__.s([
    "P2PVideoCall",
    ()=>P2PVideoCall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.mjs [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video-off.mjs [app-client] (ecmascript) <export default as VideoOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.mjs [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.mjs [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-off.mjs [app-client] (ecmascript) <export default as PhoneOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$switch$2d$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SwitchCamera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/switch-camera.mjs [app-client] (ecmascript) <export default as SwitchCamera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bluetooth.mjs [app-client] (ecmascript) <export default as Bluetooth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.mjs [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$livekitApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/livekitApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$devicePermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/devicePermissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/audioOutput.ts [app-client] (ecmascript)");
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
function P2PVideoCall({ onClose, chatName, avatarUrl, isAccepted, isRingingStatus, busyMessage, roomId }) {
    _s();
    const [seconds, setSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRinging, setIsRinging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isRingingStatus && !isAccepted);
    const [isVideoOff, setIsVideoOff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [facingMode, setFacingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('user');
    const [isSwitchingCamera, setIsSwitchingCamera] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isConnectedToRoom, setIsConnectedToRoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [permissionError, setPermissionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasRemoteParticipant, setHasRemoteParticipant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLocalVideoReady, setIsLocalVideoReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRemoteVideoReady, setIsRemoteVideoReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRemoteAudioMuted, setIsRemoteAudioMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [avatarError, setAvatarError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Audio output state (Speaker, Bluetooth, Earpiece)
    const [isSpeaker, setIsSpeaker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // Video calls default to loudspeaker
    const [activeDeviceId, setActiveDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('default');
    const [activeDeviceLabel, setActiveDeviceLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Speaker');
    const [availableOutputs, setAvailableOutputs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showDeviceMenu, setShowDeviceMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioOutputError, setAudioOutputError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const localVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const remoteVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const remoteAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const roomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const secondsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const hasClosedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const resolvedAvatar = avatarUrl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(avatarUrl) : undefined;
    const initials = (chatName || 'User').trim().substring(0, 2).toUpperCase();
    const onCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onClose);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "P2PVideoCall.useEffect": ()=>{
            onCloseRef.current = onClose;
        }
    }["P2PVideoCall.useEffect"], [
        onClose
    ]);
    const handleSafeClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "P2PVideoCall.useCallback[handleSafeClose]": (dur)=>{
            if (hasClosedRef.current) return;
            hasClosedRef.current = true;
            const finalDuration = typeof dur === 'number' ? dur : secondsRef.current;
            if (roomRef.current) {
                try {
                    roomRef.current.disconnect();
                } catch (e) {}
                roomRef.current = null;
            }
            onCloseRef.current(finalDuration);
        }
    }["P2PVideoCall.useCallback[handleSafeClose]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "P2PVideoCall.useEffect": ()=>{
            if (isAccepted || hasRemoteParticipant) {
                setIsRinging(false);
            } else {
                setIsRinging(Boolean(isRingingStatus));
            }
        }
    }["P2PVideoCall.useEffect"], [
        isAccepted,
        isRingingStatus,
        hasRemoteParticipant
    ]);
    // 45-second timeout: automatically cut call if user does not answer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "P2PVideoCall.useEffect": ()=>{
            if (isAccepted || hasRemoteParticipant) return;
            const noAnswerTimer = setTimeout({
                "P2PVideoCall.useEffect.noAnswerTimer": ()=>{
                    console.log('[P2PVideoCall] 45s timeout reached: user did not answer. Auto-cutting call.');
                    handleSafeClose(0);
                }
            }["P2PVideoCall.useEffect.noAnswerTimer"], 45000);
            return ({
                "P2PVideoCall.useEffect": ()=>clearTimeout(noAnswerTimer)
            })["P2PVideoCall.useEffect"];
        }
    }["P2PVideoCall.useEffect"], [
        isAccepted,
        hasRemoteParticipant,
        handleSafeClose
    ]);
    // Synthesize Ringing Tone during calling / ringing state before answer
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "P2PVideoCall.useEffect": ()=>{
            if (!isRinging || isAccepted || hasRemoteParticipant) return;
            let audioCtx = null;
            let osc1 = null;
            let osc2 = null;
            let gainNode = null;
            let ringInterval = null;
            try {
                const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
                if (!AudioCtxClass) return;
                audioCtx = new AudioCtxClass();
                gainNode = audioCtx.createGain();
                gainNode.connect(audioCtx.destination);
                gainNode.gain.value = 0;
                osc1 = audioCtx.createOscillator();
                osc1.type = 'sine';
                osc1.frequency.value = 440;
                osc1.connect(gainNode);
                osc2 = audioCtx.createOscillator();
                osc2.type = 'sine';
                osc2.frequency.value = 480;
                osc2.connect(gainNode);
                osc1.start();
                osc2.start();
                const ring = {
                    "P2PVideoCall.useEffect.ring": ()=>{
                        if (!audioCtx || audioCtx.state === 'closed') return;
                        const now = audioCtx.currentTime;
                        gainNode === null || gainNode === void 0 ? void 0 : gainNode.gain.setValueAtTime(0, now);
                        gainNode === null || gainNode === void 0 ? void 0 : gainNode.gain.linearRampToValueAtTime(0.04, now + 0.1);
                        gainNode === null || gainNode === void 0 ? void 0 : gainNode.gain.setValueAtTime(0.04, now + 1.8);
                        gainNode === null || gainNode === void 0 ? void 0 : gainNode.gain.linearRampToValueAtTime(0, now + 1.9);
                    }
                }["P2PVideoCall.useEffect.ring"];
                ring();
                ringInterval = setInterval(ring, 3800);
            } catch (e) {
                console.warn('[P2PVideoCall] Audio synth tone note:', e);
            }
            return ({
                "P2PVideoCall.useEffect": ()=>{
                    if (ringInterval) clearInterval(ringInterval);
                    if (osc1) {
                        try {
                            osc1.stop();
                        } catch (e) {}
                    }
                    if (osc2) {
                        try {
                            osc2.stop();
                        } catch (e) {}
                    }
                    if (audioCtx) {
                        try {
                            audioCtx.close();
                        } catch (e) {}
                    }
                }
            })["P2PVideoCall.useEffect"];
        }
    }["P2PVideoCall.useEffect"], [
        isRinging,
        isAccepted,
        hasRemoteParticipant
    ]);
    // Connect to LiveKit Room
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "P2PVideoCall.useEffect": ()=>{
            let isMounted = true;
            const connectLiveKit = {
                "P2PVideoCall.useEffect.connectLiveKit": async ()=>{
                    try {
                        if (!roomId) return;
                        const permRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$devicePermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestDevicePermissions"])('video');
                        if (!(permRes === null || permRes === void 0 ? void 0 : permRes.granted) && isMounted) {
                            setPermissionError('Camera and microphone permissions are required for video calls');
                        }
                        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$livekitApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["livekitApi"].getToken(roomId, 'video');
                        if (!(data === null || data === void 0 ? void 0 : data.token) || !(data === null || data === void 0 ? void 0 : data.wsUrl)) {
                            throw new Error('Failed to acquire LiveKit token');
                        }
                        if (!isMounted) return;
                        const room = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Room"]({
                            adaptiveStream: true,
                            dynacast: false,
                            stopLocalTrackOnUnpublish: true,
                            videoCaptureDefaults: {
                                facingMode
                            },
                            publishDefaults: {
                                simulcast: false,
                                videoCodec: 'vp8',
                                videoEncoding: {
                                    maxBitrate: 1_700_000,
                                    maxFramerate: 30
                                },
                                audioPreset: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioPresets"].speech,
                                dtx: true,
                                red: true
                            },
                            audioCaptureDefaults: {
                                echoCancellation: true,
                                noiseSuppression: true,
                                autoGainControl: true,
                                sampleRate: 48000,
                                channelCount: 1
                            }
                        });
                        roomRef.current = room;
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackSubscribed, {
                            "P2PVideoCall.useEffect.connectLiveKit": (track, publication, participant)=>{
                                if (track.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video && remoteVideoRef.current) {
                                    track.attach(remoteVideoRef.current);
                                    remoteVideoRef.current.playsInline = true;
                                    remoteVideoRef.current.muted = true;
                                    remoteVideoRef.current.autoplay = true;
                                    remoteVideoRef.current.play().catch({
                                        "P2PVideoCall.useEffect.connectLiveKit": ()=>{}
                                    }["P2PVideoCall.useEffect.connectLiveKit"]);
                                    setIsRinging(false);
                                    setHasRemoteParticipant(true);
                                    setIsRemoteVideoReady(!(publication === null || publication === void 0 ? void 0 : publication.isMuted));
                                }
                                if (track.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Audio && remoteAudioRef.current) {
                                    track.attach(remoteAudioRef.current);
                                    remoteAudioRef.current.volume = 1.0;
                                    remoteAudioRef.current.autoplay = true;
                                    remoteAudioRef.current.play().catch({
                                        "P2PVideoCall.useEffect.connectLiveKit": ()=>{}
                                    }["P2PVideoCall.useEffect.connectLiveKit"]);
                                    setIsRinging(false);
                                    setHasRemoteParticipant(true);
                                    if ((publication === null || publication === void 0 ? void 0 : publication.isMuted) !== undefined) {
                                        setIsRemoteAudioMuted(publication.isMuted);
                                    }
                                    // Default route to speakerphone on video call
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleSpeakerphone"])(remoteAudioRef.current, room, true).catch({
                                        "P2PVideoCall.useEffect.connectLiveKit": ()=>{}
                                    }["P2PVideoCall.useEffect.connectLiveKit"]);
                                }
                            }
                        }["P2PVideoCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackUnsubscribed, {
                            "P2PVideoCall.useEffect.connectLiveKit": (track, publication, participant)=>{
                                if (track.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video && participant !== room.localParticipant) {
                                    if (remoteVideoRef.current) track.detach(remoteVideoRef.current);
                                    setIsRemoteVideoReady(false);
                                }
                            }
                        }["P2PVideoCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackMuted, {
                            "P2PVideoCall.useEffect.connectLiveKit": (pub, participant)=>{
                                // Track when remote participant mutes their video or audio
                                if (participant !== room.localParticipant) {
                                    if ((pub === null || pub === void 0 ? void 0 : pub.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video) {
                                        setIsRemoteVideoReady(false);
                                    } else if ((pub === null || pub === void 0 ? void 0 : pub.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Audio) {
                                        setIsRemoteAudioMuted(true);
                                    }
                                }
                            }
                        }["P2PVideoCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackUnmuted, {
                            "P2PVideoCall.useEffect.connectLiveKit": (pub, participant)=>{
                                // Track when remote participant unmutes their video or audio
                                if (participant !== room.localParticipant) {
                                    if ((pub === null || pub === void 0 ? void 0 : pub.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video) {
                                        setIsRemoteVideoReady(true);
                                    } else if ((pub === null || pub === void 0 ? void 0 : pub.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Audio) {
                                        setIsRemoteAudioMuted(false);
                                    }
                                }
                            }
                        }["P2PVideoCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantConnected, {
                            "P2PVideoCall.useEffect.connectLiveKit": ()=>{
                                setIsRinging(false);
                                setHasRemoteParticipant(true);
                            }
                        }["P2PVideoCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantDisconnected, {
                            "P2PVideoCall.useEffect.connectLiveKit": ()=>{
                                if (room.remoteParticipants.size === 0) {
                                    setIsRemoteAudioMuted(false);
                                    handleSafeClose(secondsRef.current);
                                }
                            }
                        }["P2PVideoCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Disconnected, {
                            "P2PVideoCall.useEffect.connectLiveKit": ()=>{
                                if (isMounted) handleSafeClose(secondsRef.current);
                            }
                        }["P2PVideoCall.useEffect.connectLiveKit"]);
                        await room.connect(data.wsUrl, data.token);
                        if (isMounted) {
                            setIsConnectedToRoom(true);
                            // Check if remote participant is already in room
                            if (room.remoteParticipants.size > 0) {
                                setHasRemoteParticipant(true);
                                setIsRinging(false);
                                room.remoteParticipants.forEach({
                                    "P2PVideoCall.useEffect.connectLiveKit": (participant)=>{
                                        participant.trackPublications.forEach({
                                            "P2PVideoCall.useEffect.connectLiveKit": (pub)=>{
                                                if (pub.track) {
                                                    if (pub.track.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video && remoteVideoRef.current) {
                                                        pub.track.attach(remoteVideoRef.current);
                                                        remoteVideoRef.current.playsInline = true;
                                                        remoteVideoRef.current.muted = true;
                                                        remoteVideoRef.current.autoplay = true;
                                                        remoteVideoRef.current.play().catch({
                                                            "P2PVideoCall.useEffect.connectLiveKit": ()=>{}
                                                        }["P2PVideoCall.useEffect.connectLiveKit"]);
                                                        setIsRemoteVideoReady(!pub.isMuted);
                                                    }
                                                    if (pub.track.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Audio && remoteAudioRef.current) {
                                                        pub.track.attach(remoteAudioRef.current);
                                                        remoteAudioRef.current.volume = 1.0;
                                                        remoteAudioRef.current.autoplay = true;
                                                        remoteAudioRef.current.play().catch({
                                                            "P2PVideoCall.useEffect.connectLiveKit": ()=>{}
                                                        }["P2PVideoCall.useEffect.connectLiveKit"]);
                                                        setIsRemoteAudioMuted(Boolean(pub.isMuted));
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleSpeakerphone"])(remoteAudioRef.current, room, true).catch({
                                                            "P2PVideoCall.useEffect.connectLiveKit": ()=>{}
                                                        }["P2PVideoCall.useEffect.connectLiveKit"]);
                                                    }
                                                }
                                            }
                                        }["P2PVideoCall.useEffect.connectLiveKit"]);
                                    }
                                }["P2PVideoCall.useEffect.connectLiveKit"]);
                            }
                            __turbopack_context__.A("[project]/src/services/presenceLifecycleManager.ts [app-client] (ecmascript, async loader)").then({
                                "P2PVideoCall.useEffect.connectLiveKit": ({ presenceLifecycleManager })=>{
                                    presenceLifecycleManager.setInCall(true, 'direct');
                                }
                            }["P2PVideoCall.useEffect.connectLiveKit"]).catch({
                                "P2PVideoCall.useEffect.connectLiveKit": ()=>{}
                            }["P2PVideoCall.useEffect.connectLiveKit"]);
                            // 1. Enable Microphone
                            try {
                                await room.localParticipant.setMicrophoneEnabled(true, {
                                    echoCancellation: true,
                                    noiseSuppression: true,
                                    autoGainControl: true,
                                    sampleRate: 48000,
                                    channelCount: 1
                                });
                            } catch (micErr) {
                                console.warn('[P2PVideoCall] Microphone capture error:', micErr);
                            }
                            // 2. Enable Camera with automatic fallback
                            try {
                                var _this, _Array_from_find;
                                let pub;
                                try {
                                    pub = await room.localParticipant.setCameraEnabled(true, {
                                        facingMode
                                    });
                                } catch (initialErr) {
                                    console.warn('[P2PVideoCall] Standard camera start failed, trying basic fallback:', initialErr);
                                    pub = await room.localParticipant.setCameraEnabled(true);
                                }
                                const videoTrack = ((_this = pub) === null || _this === void 0 ? void 0 : _this.track) || ((_Array_from_find = Array.from(room.localParticipant.videoTrackPublications.values()).find({
                                    "P2PVideoCall.useEffect.connectLiveKit": (p)=>p.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video
                                }["P2PVideoCall.useEffect.connectLiveKit"])) === null || _Array_from_find === void 0 ? void 0 : _Array_from_find.track);
                                if (videoTrack && localVideoRef.current) {
                                    videoTrack.attach(localVideoRef.current);
                                    localVideoRef.current.muted = true;
                                    localVideoRef.current.playsInline = true;
                                    await localVideoRef.current.play().catch({
                                        "P2PVideoCall.useEffect.connectLiveKit": ()=>{}
                                    }["P2PVideoCall.useEffect.connectLiveKit"]);
                                    setIsLocalVideoReady(true);
                                    setPermissionError(null);
                                }
                            } catch (mediaErr) {
                                console.warn('[P2PVideoCall] Media capture error:', mediaErr);
                                setPermissionError('Could not start video stream');
                            }
                        }
                    } catch (err) {
                        var _err_message;
                        if ((err === null || err === void 0 ? void 0 : err.name) === 'ConnectionError' || (err === null || err === void 0 ? void 0 : (_err_message = err.message) === null || _err_message === void 0 ? void 0 : _err_message.includes('Client initiated disconnect'))) {
                            return;
                        }
                        console.error('[P2PVideoCall] Error connecting to LiveKit room:', err);
                        setPermissionError('Unable to access camera or microphone. Check permissions.');
                    }
                }
            }["P2PVideoCall.useEffect.connectLiveKit"];
            connectLiveKit();
            return ({
                "P2PVideoCall.useEffect": ()=>{
                    isMounted = false;
                    __turbopack_context__.A("[project]/src/services/presenceLifecycleManager.ts [app-client] (ecmascript, async loader)").then({
                        "P2PVideoCall.useEffect": ({ presenceLifecycleManager })=>{
                            presenceLifecycleManager.setInCall(false);
                        }
                    }["P2PVideoCall.useEffect"]).catch({
                        "P2PVideoCall.useEffect": ()=>{}
                    }["P2PVideoCall.useEffect"]);
                    if (roomRef.current) {
                        try {
                            roomRef.current.disconnect();
                        } catch (e) {}
                        roomRef.current = null;
                    }
                }
            })["P2PVideoCall.useEffect"];
        }
    }["P2PVideoCall.useEffect"], [
        roomId
    ]);
    // Audio outputs monitoring (Speaker, Bluetooth, Earpiece)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "P2PVideoCall.useEffect": ()=>{
            const updateDevices = {
                "P2PVideoCall.useEffect.updateDevices": async ()=>{
                    const outputs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvailableAudioOutputs"])();
                    setAvailableOutputs(outputs);
                    // Auto-recovery: If active Bluetooth/Speaker disconnected mid-call, fall back to default
                    if (activeDeviceId !== 'default') {
                        const recovery = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleDeviceDisconnectRecovery"])(activeDeviceId, remoteAudioRef.current, roomRef.current);
                        if (recovery.recovered) {
                            setActiveDeviceId('default');
                            setActiveDeviceLabel(recovery.newDeviceLabel);
                            setIsSpeaker(false);
                            setAudioOutputError('🎧 Bluetooth audio disconnected. Switched output.');
                            return;
                        }
                    }
                    // Check for connected Bluetooth device
                    const bt = outputs.find({
                        "P2PVideoCall.useEffect.updateDevices.bt": (d)=>d.type === 'bluetooth'
                    }["P2PVideoCall.useEffect.updateDevices.bt"]);
                    if (bt && activeDeviceId === 'default') {
                        setActiveDeviceLabel(bt.label);
                    } else if (isSpeaker) {
                        setActiveDeviceLabel('Speaker');
                    }
                    // Restore saved user preference if available
                    const savedPref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSavedAudioOutputPreference"])();
                    if (savedPref && activeDeviceId === 'default' && outputs.some({
                        "P2PVideoCall.useEffect.updateDevices": (d)=>d.deviceId === savedPref
                    }["P2PVideoCall.useEffect.updateDevices"])) {
                        const prefDevice = outputs.find({
                            "P2PVideoCall.useEffect.updateDevices.prefDevice": (d)=>d.deviceId === savedPref
                        }["P2PVideoCall.useEffect.updateDevices.prefDevice"]);
                        if (prefDevice) {
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routeAudioOutput"])(remoteAudioRef.current, roomRef.current, savedPref);
                            setActiveDeviceId(savedPref);
                            setActiveDeviceLabel(prefDevice.label);
                            setIsSpeaker(prefDevice.type === 'speaker');
                        }
                    }
                }
            }["P2PVideoCall.useEffect.updateDevices"];
            updateDevices();
            if (typeof navigator !== 'undefined' && navigator.mediaDevices) {
                navigator.mediaDevices.addEventListener('devicechange', updateDevices);
                return ({
                    "P2PVideoCall.useEffect": ()=>{
                        navigator.mediaDevices.removeEventListener('devicechange', updateDevices);
                    }
                })["P2PVideoCall.useEffect"];
            }
        }
    }["P2PVideoCall.useEffect"], [
        isSpeaker,
        activeDeviceId
    ]);
    // Explicit Camera Video Toggle: stops transmitting local video, but keeps remote video intact!
    const handleToggleVideo = async ()=>{
        const nextVideoOff = !isVideoOff;
        setIsVideoOff(nextVideoOff);
        if (!roomRef.current) return;
        try {
            if (nextVideoOff) {
                setIsLocalVideoReady(false);
                await roomRef.current.localParticipant.setCameraEnabled(false);
            } else {
                var _this, _Array_from_find;
                let pub;
                try {
                    pub = await roomRef.current.localParticipant.setCameraEnabled(true, {
                        facingMode
                    });
                } catch (initialErr) {
                    pub = await roomRef.current.localParticipant.setCameraEnabled(true);
                }
                const videoTrack = ((_this = pub) === null || _this === void 0 ? void 0 : _this.track) || ((_Array_from_find = Array.from(roomRef.current.localParticipant.videoTrackPublications.values()).find((p)=>p.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video)) === null || _Array_from_find === void 0 ? void 0 : _Array_from_find.track);
                if (videoTrack && localVideoRef.current) {
                    videoTrack.attach(localVideoRef.current);
                    localVideoRef.current.muted = true;
                    localVideoRef.current.playsInline = true;
                    localVideoRef.current.play().catch(()=>{});
                    setIsLocalVideoReady(true);
                    setPermissionError(null);
                }
            }
        } catch (err) {
            console.warn('[P2PVideoCall] Error toggling camera:', err);
        }
    };
    // Explicit Microphone Mute Toggle
    const handleToggleMute = async ()=>{
        const nextMuted = !isMuted;
        setIsMuted(nextMuted);
        if (!roomRef.current) return;
        try {
            await roomRef.current.localParticipant.setMicrophoneEnabled(!nextMuted);
        } catch (err) {
            console.warn('[P2PVideoCall] Error toggling microphone:', err);
        }
    };
    // Flip Camera (Front / Back switch)
    const handleSwitchCamera = async ()=>{
        if (!roomRef.current || isVideoOff || isSwitchingCamera) return;
        const nextFacing = facingMode === 'user' ? 'environment' : 'user';
        setIsSwitchingCamera(true);
        try {
            var _Array_from_find;
            const videoPub = Array.from(roomRef.current.localParticipant.videoTrackPublications.values()).find((p)=>p.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video);
            const videoTrack = videoPub === null || videoPub === void 0 ? void 0 : videoPub.track;
            // 1. Try to discover devices by label or facing mode
            let targetDeviceId;
            try {
                const devices = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Room"].getLocalDevices('videoinput');
                if (devices && devices.length > 1) {
                    if (nextFacing === 'environment') {
                        var _devices_;
                        const backDev = devices.find((d)=>{
                            const l = (d.label || '').toLowerCase();
                            return l.includes('back') || l.includes('rear') || l.includes('environment') || l.includes('0');
                        });
                        targetDeviceId = (backDev === null || backDev === void 0 ? void 0 : backDev.deviceId) || ((_devices_ = devices[1]) === null || _devices_ === void 0 ? void 0 : _devices_.deviceId);
                    } else {
                        var _devices_1;
                        const frontDev = devices.find((d)=>{
                            const l = (d.label || '').toLowerCase();
                            return l.includes('front') || l.includes('user') || l.includes('1');
                        });
                        targetDeviceId = (frontDev === null || frontDev === void 0 ? void 0 : frontDev.deviceId) || ((_devices_1 = devices[0]) === null || _devices_1 === void 0 ? void 0 : _devices_1.deviceId);
                    }
                }
            } catch (devErr) {
                console.warn('[P2PVideoCall] Device enumeration error:', devErr);
            }
            let switched = false;
            // 2. Try restartTrack on the existing track if available
            if (videoTrack && typeof videoTrack.restartTrack === 'function') {
                try {
                    await videoTrack.restartTrack({
                        facingMode: nextFacing,
                        deviceId: targetDeviceId
                    });
                    switched = true;
                } catch (restartErr) {
                    console.warn('[P2PVideoCall] restartTrack failed, trying fallback:', restartErr);
                }
            }
            // 3. Fallback: unpublish previous track completely and publish new track with target facingMode
            if (!switched) {
                if (videoPub === null || videoPub === void 0 ? void 0 : videoPub.track) {
                    try {
                        await roomRef.current.localParticipant.unpublishTrack(videoPub.track, true);
                    } catch (unpubErr) {}
                }
                await roomRef.current.localParticipant.setCameraEnabled(true, {
                    facingMode: nextFacing,
                    deviceId: targetDeviceId
                });
            }
            setFacingMode(nextFacing);
            // Re-attach active local video track
            const activeTrack = (_Array_from_find = Array.from(roomRef.current.localParticipant.videoTrackPublications.values()).find((p)=>p.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video)) === null || _Array_from_find === void 0 ? void 0 : _Array_from_find.track;
            if (activeTrack && localVideoRef.current) {
                activeTrack.attach(localVideoRef.current);
                localVideoRef.current.muted = true;
                localVideoRef.current.playsInline = true;
                localVideoRef.current.play().catch(()=>{});
                setIsLocalVideoReady(true);
            }
        } catch (err) {
            console.warn('[P2PVideoCall] Error flipping camera:', err);
        } finally{
            setIsSwitchingCamera(false);
        }
    };
    // Toggle Speakerphone
    const handleToggleSpeaker = async ()=>{
        setAudioOutputError(null);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleSpeakerphone"])(remoteAudioRef.current, roomRef.current, !isSpeaker);
            setIsSpeaker(res.isSpeaker);
            setActiveDeviceId(res.activeDeviceId);
            setActiveDeviceLabel(res.activeDeviceLabel);
        } catch (err) {
            console.warn('[P2PVideoCall] Unable to toggle speaker output:', err);
            setAudioOutputError('Could not switch audio route.');
        }
    };
    // Select Specific Audio Device
    const handleSelectDevice = async (deviceId, label, type)=>{
        setAudioOutputError(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routeAudioOutput"])(remoteAudioRef.current, roomRef.current, deviceId);
            setIsSpeaker(type === 'speaker');
            setActiveDeviceId(deviceId);
            setActiveDeviceLabel(label);
            setShowDeviceMenu(false);
        } catch (err) {
            console.warn('[P2PVideoCall] Error selecting audio output:', err);
            setAudioOutputError(`Could not route to ${label}`);
        }
    };
    // Duration Timer: starts only when call is actually connected with remote participant!
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "P2PVideoCall.useEffect": ()=>{
            if (!hasRemoteParticipant || !isConnectedToRoom) return;
            const timer = setInterval({
                "P2PVideoCall.useEffect.timer": ()=>{
                    setSeconds({
                        "P2PVideoCall.useEffect.timer": (s)=>{
                            const next = s + 1;
                            secondsRef.current = next;
                            return next;
                        }
                    }["P2PVideoCall.useEffect.timer"]);
                }
            }["P2PVideoCall.useEffect.timer"], 1000);
            return ({
                "P2PVideoCall.useEffect": ()=>clearInterval(timer)
            })["P2PVideoCall.useEffect"];
        }
    }["P2PVideoCall.useEffect"], [
        hasRemoteParticipant,
        isConnectedToRoom
    ]);
    const formatTime = (totalSeconds)=>{
        const m = Math.floor(totalSeconds / 60);
        const s = totalSeconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };
    const isCallConnected = isConnectedToRoom && hasRemoteParticipant;
    const isConnecting = (isAccepted || isConnectedToRoom) && !isCallConnected;
    const hasBluetooth = availableOutputs.some((d)=>d.type === 'bluetooth');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-236de790bb1e1f1e" + " " + "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md overflow-hidden select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "236de790bb1e1f1e",
                children: "video::-webkit-media-controls{display:none!important}video::-webkit-media-controls-enclosure{display:none!important}video::-webkit-media-controls-play-button{display:none!important}video::-webkit-media-controls-start-playback-button{display:none!important}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: remoteAudioRef,
                autoPlay: true,
                playsInline: true,
                className: "jsx-236de790bb1e1f1e" + " " + "hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                lineNumber: 626,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-236de790bb1e1f1e" + " " + "w-full h-[100dvh] sm:h-[88vh] sm:max-w-4xl sm:rounded-3xl shadow-2xl relative overflow-hidden bg-[#0c1317] flex flex-col justify-between",
                children: [
                    (permissionError || audioOutputError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            paddingTop: 'max(env(safe-area-inset-top, 0px), 48px)',
                            paddingBottom: '12px'
                        },
                        className: "jsx-236de790bb1e1f1e" + " " + "absolute top-0 inset-x-0 z-50 bg-amber-600/95 backdrop-blur-md text-white text-xs px-4 text-center font-medium shadow-lg flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-2 truncate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        size: 15,
                                        className: "shrink-0 text-amber-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 641,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "truncate",
                                        children: permissionError || audioOutputError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 642,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                lineNumber: 640,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setPermissionError(null);
                                    setAudioOutputError(null);
                                },
                                title: "Dismiss",
                                className: "jsx-236de790bb1e1f1e" + " " + "p-1 font-bold opacity-80 hover:opacity-100 rounded-md hover:bg-white/10",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                lineNumber: 644,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                        lineNumber: 633,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        style: {
                            paddingTop: permissionError || audioOutputError ? 'calc(max(env(safe-area-inset-top, 0px), 48px) + 48px)' : 'max(env(safe-area-inset-top, 0px), 48px)'
                        },
                        className: "jsx-236de790bb1e1f1e" + " " + "relative z-30 w-full flex items-center justify-between px-4 sm:px-6 shrink-0 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-2.5 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg max-w-[65%]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-236de790bb1e1f1e" + " " + `w-2 h-2 rounded-full shrink-0 ${isCallConnected ? 'bg-emerald-400 animate-pulse' : isConnecting ? 'bg-cyan-400 animate-pulse' : 'bg-amber-400 animate-ping'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 667,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "text-white font-semibold text-xs sm:text-sm truncate",
                                        children: chatName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 673,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "text-white/40 text-xs",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 676,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-236de790bb1e1f1e" + " " + `font-mono text-xs ${busyMessage ? 'text-red-400 font-semibold' : isCallConnected ? 'text-emerald-400 font-medium' : isConnecting ? 'text-cyan-400 font-medium' : 'text-slate-300'}`,
                                        children: busyMessage ? busyMessage : isConnecting ? "Connecting..." : isCallConnected ? formatTime(seconds) : !isRingingStatus ? "Calling..." : "Ringing..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 677,
                                        columnNumber: 13
                                    }, this),
                                    isRemoteAudioMuted && isCallConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-1 text-[10px] font-bold bg-amber-500/25 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded-full shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                                size: 10,
                                                className: "text-amber-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                lineNumber: 695,
                                                columnNumber: 17
                                            }, this),
                                            "Muted"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 694,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                lineNumber: 666,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (availableOutputs.length > 1) {
                                                setShowDeviceMenu(!showDeviceMenu);
                                            } else {
                                                handleToggleSpeaker();
                                            }
                                        },
                                        title: "Change Audio Device",
                                        className: "jsx-236de790bb1e1f1e" + " " + `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md border transition shadow-md ${hasBluetooth ? 'bg-blue-600/80 text-white border-blue-400/40 hover:bg-blue-600' : isSpeaker ? 'bg-white/15 text-white border-white/20 hover:bg-white/25' : 'bg-black/50 text-slate-300 border-white/10'}`,
                                        children: [
                                            hasBluetooth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__["Bluetooth"], {
                                                size: 14,
                                                className: "text-blue-200"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                lineNumber: 721,
                                                columnNumber: 17
                                            }, this) : isSpeaker ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                size: 14,
                                                className: "text-emerald-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                lineNumber: 723,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                                size: 14,
                                                className: "text-slate-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                lineNumber: 725,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-236de790bb1e1f1e" + " " + "max-w-[70px] sm:max-w-[100px] truncate hidden xs:inline",
                                                children: hasBluetooth ? 'Bluetooth' : isSpeaker ? 'Speaker' : 'Phone'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                lineNumber: 727,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 12,
                                                className: "opacity-70"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                lineNumber: 730,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 704,
                                        columnNumber: 13
                                    }, this),
                                    !isVideoOff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSwitchCamera,
                                        disabled: isSwitchingCamera,
                                        title: `Switch Camera (${facingMode === 'user' ? 'Front' : 'Back'})`,
                                        className: "jsx-236de790bb1e1f1e" + " " + "w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center border border-white/15 transition backdrop-blur-md shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$switch$2d$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SwitchCamera$3e$__["SwitchCamera"], {
                                            size: 15,
                                            className: isSwitchingCamera ? 'animate-spin' : ''
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                            lineNumber: 741,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 735,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                lineNumber: 702,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                        lineNumber: 657,
                        columnNumber: 9
                    }, this),
                    isRemoteAudioMuted && isCallConnected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            top: permissionError || audioOutputError ? 'calc(max(env(safe-area-inset-top, 0px), 48px) + 96px)' : 'calc(max(env(safe-area-inset-top, 0px), 48px) + 54px)'
                        },
                        className: "jsx-236de790bb1e1f1e" + " " + "absolute z-40 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#1c1917]/90 backdrop-blur-md border border-amber-500/40 text-amber-200 text-xs px-4 py-1.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.6)] animate-pulse pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                size: 14,
                                className: "text-amber-400"
                            }, void 0, false, {
                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                lineNumber: 757,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-236de790bb1e1f1e" + " " + "font-semibold",
                                children: [
                                    chatName,
                                    " is muted"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                lineNumber: 758,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                        lineNumber: 749,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-236de790bb1e1f1e" + " " + "absolute inset-0 z-10 flex items-center justify-center bg-black overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: remoteVideoRef,
                                autoPlay: true,
                                playsInline: true,
                                muted: true,
                                onPlaying: ()=>setIsRemoteVideoReady(true),
                                onLoadedMetadata: ()=>{
                                    var _remoteVideoRef_current;
                                    (_remoteVideoRef_current = remoteVideoRef.current) === null || _remoteVideoRef_current === void 0 ? void 0 : _remoteVideoRef_current.play().catch(()=>{});
                                    setIsRemoteVideoReady(true);
                                },
                                style: {
                                    transform: 'translateZ(0)',
                                    willChange: 'transform'
                                },
                                className: "jsx-236de790bb1e1f1e" + " " + `w-full h-full object-cover bg-black transition-opacity duration-300 ${isRemoteVideoReady ? 'block opacity-100' : 'hidden opacity-0'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                lineNumber: 767,
                                columnNumber: 11
                            }, this),
                            !isRemoteVideoReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-236de790bb1e1f1e" + " " + "absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#091017] to-[#04080c] flex flex-col items-center justify-center px-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "relative flex items-center justify-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    animationDuration: '3.2s'
                                                },
                                                className: "jsx-236de790bb1e1f1e" + " " + "absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-blue-500/25 animate-ping pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                lineNumber: 788,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    animationDuration: '2s'
                                                },
                                                className: "jsx-236de790bb1e1f1e" + " " + "absolute w-40 h-40 sm:w-44 sm:h-44 rounded-full border-2 border-blue-400/40 animate-pulse pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                lineNumber: 794,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-236de790bb1e1f1e" + " " + "absolute w-36 h-36 rounded-full bg-blue-500/20 blur-xl pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                lineNumber: 800,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-236de790bb1e1f1e" + " " + "w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_50px_rgba(59,130,246,0.35)] relative bg-[#1e293b] flex items-center justify-center z-10",
                                                children: resolvedAvatar && !avatarError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: resolvedAvatar,
                                                    alt: chatName,
                                                    onError: ()=>setAvatarError(true),
                                                    className: "jsx-236de790bb1e1f1e" + " " + "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                    lineNumber: 805,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-236de790bb1e1f1e" + " " + "w-full h-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-500 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold select-none tracking-wider shadow-inner",
                                                    children: initials
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                    lineNumber: 812,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                lineNumber: 803,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 786,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "text-2xl sm:text-3xl font-bold text-white tracking-wide text-center truncate max-w-xs sm:max-w-md",
                                        children: chatName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 820,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                                size: 13,
                                                className: "text-blue-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                lineNumber: 826,
                                                columnNumber: 17
                                            }, this),
                                            "1-on-1 Video Call"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 825,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "mt-3 flex items-center justify-center gap-2",
                                        children: busyMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-236de790bb1e1f1e" + " " + "text-sm font-semibold text-red-400 tracking-wide text-center",
                                            children: busyMessage
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                            lineNumber: 833,
                                            columnNumber: 19
                                        }, this) : isConnecting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-2 text-cyan-300 text-sm font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    size: 16,
                                                    className: "animate-spin text-cyan-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                    lineNumber: 836,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-236de790bb1e1f1e",
                                                    children: "Connecting..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                    lineNumber: 837,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                            lineNumber: 835,
                                            columnNumber: 19
                                        }, this) : isCallConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-2 text-slate-300 text-sm font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                                    size: 16,
                                                    className: "text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                    lineNumber: 841,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-236de790bb1e1f1e",
                                                    children: "Camera is off"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                    lineNumber: 842,
                                                    columnNumber: 21
                                                }, this),
                                                isRemoteAudioMuted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-236de790bb1e1f1e" + " " + "text-slate-500",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                            lineNumber: 845,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                                            size: 15,
                                                            className: "text-amber-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                            lineNumber: 846,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-236de790bb1e1f1e" + " " + "text-amber-300",
                                                            children: "Microphone muted"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                            lineNumber: 847,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                            lineNumber: 840,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-236de790bb1e1f1e" + " " + "text-sm font-medium tracking-wide text-center text-slate-300 animate-pulse",
                                            children: !isRingingStatus ? "Calling..." : "Ringing..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                            lineNumber: 852,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 831,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "mt-5 flex items-center gap-2 text-[11px] text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10",
                                        children: hasBluetooth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__["Bluetooth"], {
                                                    size: 13,
                                                    className: "text-blue-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                    lineNumber: 862,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-236de790bb1e1f1e",
                                                    children: [
                                                        "Audio: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "jsx-236de790bb1e1f1e" + " " + "text-slate-200",
                                                            children: activeDeviceLabel
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                            lineNumber: 863,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                    lineNumber: 863,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                    size: 13,
                                                    className: "text-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                    lineNumber: 867,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-236de790bb1e1f1e",
                                                    children: [
                                                        "Audio: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "jsx-236de790bb1e1f1e" + " " + "text-slate-200",
                                                            children: "Speakerphone"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                            lineNumber: 868,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                    lineNumber: 868,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 859,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                lineNumber: 783,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                        lineNumber: 765,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            top: permissionError || audioOutputError ? 'calc(max(env(safe-area-inset-top, 0px), 48px) + 96px)' : 'calc(max(env(safe-area-inset-top, 0px), 48px) + 54px)'
                        },
                        className: "jsx-236de790bb1e1f1e" + " " + "absolute z-30 w-28 h-40 sm:w-36 sm:h-52 rounded-[10px] overflow-hidden shadow-2xl border-2 border-white/20 bg-[#162026] right-4 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: localVideoRef,
                                autoPlay: true,
                                playsInline: true,
                                muted: true,
                                style: {
                                    transform: facingMode === 'user' ? 'scaleX(-1) translateZ(0)' : 'none',
                                    willChange: 'transform'
                                },
                                className: "jsx-236de790bb1e1f1e" + " " + `w-full h-full object-cover ${isVideoOff || !isLocalVideoReady ? 'hidden' : 'block'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                lineNumber: 889,
                                columnNumber: 11
                            }, this),
                            !isVideoOff && !isLocalVideoReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-236de790bb1e1f1e" + " " + "w-full h-full flex flex-col items-center justify-center bg-[#131b20] text-slate-400 p-2 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 901,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "text-[10px] leading-tight",
                                        children: "Starting camera..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 902,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                lineNumber: 900,
                                columnNumber: 13
                            }, this),
                            isVideoOff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-236de790bb1e1f1e" + " " + "w-full h-full flex flex-col items-center justify-center bg-[#162026] text-white/50 p-2 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                        size: 22,
                                        className: "text-slate-400 mb-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 909,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "text-[10px] text-slate-300",
                                        children: "Camera Off"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 910,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                lineNumber: 908,
                                columnNumber: 13
                            }, this),
                            !isVideoOff && isLocalVideoReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    handleSwitchCamera();
                                },
                                disabled: isSwitchingCamera,
                                title: "Flip Camera",
                                className: "jsx-236de790bb1e1f1e" + " " + "absolute bottom-2 right-2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 active:scale-90 transition hover:bg-black/80",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$switch$2d$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SwitchCamera$3e$__["SwitchCamera"], {
                                    size: 13,
                                    className: isSwitchingCamera ? 'animate-spin' : ''
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                    lineNumber: 925,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                lineNumber: 916,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                        lineNumber: 880,
                        columnNumber: 9
                    }, this),
                    showDeviceMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-236de790bb1e1f1e" + " " + "absolute inset-0 z-40 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: 'max(env(safe-area-inset-bottom, 0px), 16px)'
                            },
                            className: "jsx-236de790bb1e1f1e" + " " + "w-full max-w-xs bg-[#161f26]/95 backdrop-blur-xl border border-white/15 rounded-3xl p-4 shadow-2xl animate-in fade-in slide-in-from-bottom duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-236de790bb1e1f1e" + " " + "flex items-center justify-between pb-3 mb-2 border-b border-white/10 text-sm font-semibold text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                    size: 16,
                                                    className: "text-blue-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                    lineNumber: 941,
                                                    columnNumber: 19
                                                }, this),
                                                "Select Audio Output"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                            lineNumber: 940,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowDeviceMenu(false),
                                            className: "jsx-236de790bb1e1f1e" + " " + "w-6 h-6 rounded-full bg-white/10 text-white/70 hover:text-white flex items-center justify-center text-xs",
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                            lineNumber: 944,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                    lineNumber: 939,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-236de790bb1e1f1e" + " " + "space-y-1.5 max-h-56 overflow-y-auto pr-1",
                                    children: availableOutputs.map((dev)=>{
                                        const isSelected = activeDeviceId !== 'default' ? dev.deviceId === activeDeviceId : isSpeaker ? dev.type === 'speaker' : dev.label === activeDeviceLabel || dev.isDefault;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleSelectDevice(dev.deviceId, dev.label, dev.type),
                                            className: "jsx-236de790bb1e1f1e" + " " + `w-full text-left px-3.5 py-2.5 rounded-xl text-xs flex items-center justify-between transition ${isSelected ? 'bg-blue-600 text-white font-medium shadow-md' : 'bg-white/5 text-slate-200 hover:bg-white/10'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-2 truncate mr-2",
                                                    children: [
                                                        dev.type === 'bluetooth' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__["Bluetooth"], {
                                                            size: 15,
                                                            className: isSelected ? 'text-white' : 'text-blue-400'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                            lineNumber: 969,
                                                            columnNumber: 27
                                                        }, this) : dev.type === 'speaker' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                            size: 15,
                                                            className: isSelected ? 'text-white' : 'text-emerald-400'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                            lineNumber: 971,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                                            size: 15,
                                                            className: isSelected ? 'text-white' : 'text-slate-400'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                            lineNumber: 973,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-236de790bb1e1f1e" + " " + "truncate",
                                                            children: dev.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                            lineNumber: 975,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                    lineNumber: 967,
                                                    columnNumber: 23
                                                }, this),
                                                isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-236de790bb1e1f1e" + " " + "text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold",
                                                    children: "Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                                    lineNumber: 978,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, dev.deviceId || dev.label, true, {
                                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                            lineNumber: 959,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                    lineNumber: 952,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                            lineNumber: 935,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                        lineNumber: 934,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        style: {
                            paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 24px)'
                        },
                        className: "jsx-236de790bb1e1f1e" + " " + "relative z-30 w-full flex flex-col items-center justify-center shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-3 sm:gap-4 bg-[#0a1014]/90 backdrop-blur-xl px-5 sm:px-8 py-3 rounded-full border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.6)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleToggleMute,
                                    title: isMuted ? "Unmute Mic" : "Mute Mic",
                                    className: "jsx-236de790bb1e1f1e" + " " + `w-12 h-12 rounded-full flex items-center justify-center transition shadow-md active:scale-95 ${isMuted ? 'bg-amber-500 text-white shadow-amber-500/30' : 'bg-white/10 text-white hover:bg-white/20'}`,
                                    children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 1009,
                                        columnNumber: 26
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 1009,
                                        columnNumber: 49
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                    lineNumber: 1001,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleToggleVideo,
                                    title: isVideoOff ? "Turn On Camera" : "Turn Off Camera",
                                    className: "jsx-236de790bb1e1f1e" + " " + `w-12 h-12 rounded-full flex items-center justify-center transition shadow-md active:scale-95 ${isVideoOff ? 'bg-amber-500 text-white shadow-amber-500/30' : 'bg-white/10 text-white hover:bg-white/20'}`,
                                    children: isVideoOff ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 1021,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 1021,
                                        columnNumber: 54
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                    lineNumber: 1013,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSwitchCamera,
                                    disabled: isVideoOff || isSwitchingCamera,
                                    title: "Flip Camera (Front/Rear)",
                                    className: "jsx-236de790bb1e1f1e" + " " + `w-12 h-12 rounded-full flex items-center justify-center transition shadow-md active:scale-95 ${isVideoOff ? 'bg-white/5 text-white/30 cursor-not-allowed' : 'bg-white/10 text-white hover:bg-white/20'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$switch$2d$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SwitchCamera$3e$__["SwitchCamera"], {
                                        size: 20,
                                        className: isSwitchingCamera ? 'animate-spin' : ''
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 1034,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                    lineNumber: 1025,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (availableOutputs.length > 1) {
                                            setShowDeviceMenu(!showDeviceMenu);
                                        } else {
                                            handleToggleSpeaker();
                                        }
                                    },
                                    title: isSpeaker ? `Speaker Active (${activeDeviceLabel})` : `Audio Output (${activeDeviceLabel})`,
                                    className: "jsx-236de790bb1e1f1e" + " " + `w-12 h-12 rounded-full flex items-center justify-center transition shadow-md active:scale-95 ${hasBluetooth ? 'bg-blue-600 text-white shadow-blue-500/30' : isSpeaker ? 'bg-white/15 text-white hover:bg-white/25' : 'bg-white/10 text-slate-300 hover:bg-white/20'}`,
                                    children: hasBluetooth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__["Bluetooth"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 1055,
                                        columnNumber: 17
                                    }, this) : isSpeaker ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 1057,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 1059,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                    lineNumber: 1038,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSafeClose(secondsRef.current),
                                    title: "End Call",
                                    className: "jsx-236de790bb1e1f1e" + " " + "w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.6)] transition hover:scale-105 active:scale-90",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
                                        size: 24,
                                        className: "text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                        lineNumber: 1069,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                                    lineNumber: 1064,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                            lineNumber: 998,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                        lineNumber: 993,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
                lineNumber: 629,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/call/p2p/P2PVideoCall.tsx",
        lineNumber: 617,
        columnNumber: 5
    }, this);
}
_s(P2PVideoCall, "+vAgJrp4nRlenToOV8YEjFAutus=");
_c = P2PVideoCall;
var _c;
__turbopack_context__.k.register(_c, "P2PVideoCall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/call/p2g/GroupVoiceCall.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ====================================================================
// P2G Group Voice Call Component (Peer-to-Group Voice Call)
// Safe Area Compliant, Bluetooth/Speaker Routing, HD Avatar & Modern UI
// ====================================================================
__turbopack_context__.s([
    "GroupVoiceCall",
    ()=>GroupVoiceCall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.mjs [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.mjs [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-off.mjs [app-client] (ecmascript) <export default as PhoneOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bluetooth.mjs [app-client] (ecmascript) <export default as Bluetooth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.mjs [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$livekitApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/livekitApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$devicePermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/devicePermissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/audioOutput.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
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
function GroupVoiceCall({ onClose, chatName, avatarUrl, isAccepted, isRingingStatus, busyMessage, roomId }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [seconds, setSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSpeaker, setIsSpeaker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeDeviceId, setActiveDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('default');
    const [activeDeviceLabel, setActiveDeviceLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Default');
    const [availableOutputs, setAvailableOutputs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showDeviceMenu, setShowDeviceMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioOutputError, setAudioOutputError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRinging, setIsRinging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isRingingStatus && !isAccepted);
    const [isConnectedToRoom, setIsConnectedToRoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [permissionError, setPermissionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [connectedParticipantIds, setConnectedParticipantIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [groupMembers, setGroupMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showMembersDrawer, setShowMembersDrawer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [avatarError, setAvatarError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const remoteAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const roomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const secondsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const hasClosedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const resolvedAvatar = avatarUrl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(avatarUrl) : undefined;
    const initials = (chatName || 'Group').trim().substring(0, 2).toUpperCase();
    const onCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onClose);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupVoiceCall.useEffect": ()=>{
            onCloseRef.current = onClose;
        }
    }["GroupVoiceCall.useEffect"], [
        onClose
    ]);
    const handleSafeClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GroupVoiceCall.useCallback[handleSafeClose]": (dur)=>{
            if (hasClosedRef.current) return;
            hasClosedRef.current = true;
            const finalDuration = typeof dur === 'number' ? dur : secondsRef.current;
            if (roomRef.current) {
                try {
                    roomRef.current.disconnect();
                } catch (e) {}
                roomRef.current = null;
            }
            if (onCloseRef.current) {
                onCloseRef.current(finalDuration);
            }
        }
    }["GroupVoiceCall.useCallback[handleSafeClose]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupVoiceCall.useEffect": ()=>{
            if (isAccepted || connectedParticipantIds.size > 0) {
                setIsRinging(false);
            } else {
                setIsRinging(Boolean(isRingingStatus));
            }
        }
    }["GroupVoiceCall.useEffect"], [
        isAccepted,
        isRingingStatus,
        connectedParticipantIds.size
    ]);
    // Fetch Group Members
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupVoiceCall.useEffect": ()=>{
            if (!roomId) return;
            let isMounted = true;
            const fetchMembers = {
                "GroupVoiceCall.useEffect.fetchMembers": async ()=>{
                    try {
                        const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
                        const res = await chatApi.getRoomMembers(Number(roomId));
                        if (isMounted && (res === null || res === void 0 ? void 0 : res.success) && Array.isArray(res.data)) {
                            setGroupMembers(res.data);
                        }
                    } catch (err) {}
                }
            }["GroupVoiceCall.useEffect.fetchMembers"];
            fetchMembers();
            return ({
                "GroupVoiceCall.useEffect": ()=>{
                    isMounted = false;
                }
            })["GroupVoiceCall.useEffect"];
        }
    }["GroupVoiceCall.useEffect"], [
        roomId
    ]);
    // Synthesize Ringing Tone during calling / ringing state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupVoiceCall.useEffect": ()=>{
            if (!isRinging || isAccepted || connectedParticipantIds.size > 0) return;
            let audioCtx = null;
            let osc1 = null;
            let osc2 = null;
            let gainNode = null;
            let ringInterval = null;
            try {
                const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
                if (!AudioCtxClass) return;
                audioCtx = new AudioCtxClass();
                gainNode = audioCtx.createGain();
                gainNode.connect(audioCtx.destination);
                gainNode.gain.value = 0;
                osc1 = audioCtx.createOscillator();
                osc1.type = 'sine';
                osc1.frequency.value = 440;
                osc1.connect(gainNode);
                osc2 = audioCtx.createOscillator();
                osc2.type = 'sine';
                osc2.frequency.value = 480;
                osc2.connect(gainNode);
                osc1.start();
                osc2.start();
                const ring = {
                    "GroupVoiceCall.useEffect.ring": ()=>{
                        if (!audioCtx || audioCtx.state === 'closed') return;
                        const now = audioCtx.currentTime;
                        gainNode === null || gainNode === void 0 ? void 0 : gainNode.gain.setValueAtTime(0, now);
                        gainNode === null || gainNode === void 0 ? void 0 : gainNode.gain.linearRampToValueAtTime(0.04, now + 0.1);
                        gainNode === null || gainNode === void 0 ? void 0 : gainNode.gain.setValueAtTime(0.04, now + 1.8);
                        gainNode === null || gainNode === void 0 ? void 0 : gainNode.gain.linearRampToValueAtTime(0, now + 1.9);
                    }
                }["GroupVoiceCall.useEffect.ring"];
                ring();
                ringInterval = setInterval(ring, 3800);
            } catch (e) {
                console.warn('[GroupVoiceCall] Audio synth tone note:', e);
            }
            return ({
                "GroupVoiceCall.useEffect": ()=>{
                    if (ringInterval) clearInterval(ringInterval);
                    if (osc1) {
                        try {
                            osc1.stop();
                        } catch (e) {}
                    }
                    if (osc2) {
                        try {
                            osc2.stop();
                        } catch (e) {}
                    }
                    if (audioCtx) {
                        try {
                            audioCtx.close();
                        } catch (e) {}
                    }
                }
            })["GroupVoiceCall.useEffect"];
        }
    }["GroupVoiceCall.useEffect"], [
        isRinging,
        isAccepted,
        connectedParticipantIds.size
    ]);
    // Connect to LiveKit Room
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupVoiceCall.useEffect": ()=>{
            let isMounted = true;
            const connectLiveKit = {
                "GroupVoiceCall.useEffect.connectLiveKit": async ()=>{
                    try {
                        if (!roomId) return;
                        const permRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$devicePermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestDevicePermissions"])('audio');
                        if (!(permRes === null || permRes === void 0 ? void 0 : permRes.granted) && isMounted) {
                            setPermissionError('Microphone permission required for group call');
                        }
                        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$livekitApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["livekitApi"].getToken(roomId, 'audio');
                        if (!(data === null || data === void 0 ? void 0 : data.token) || !(data === null || data === void 0 ? void 0 : data.wsUrl)) {
                            throw new Error('Failed to acquire LiveKit token');
                        }
                        if (!isMounted) return;
                        const room = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Room"]({
                            adaptiveStream: true,
                            dynacast: true,
                            stopLocalTrackOnUnpublish: true,
                            publishDefaults: {
                                audioPreset: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioPresets"].music,
                                dtx: true,
                                red: true
                            },
                            audioCaptureDefaults: {
                                echoCancellation: true,
                                noiseSuppression: true,
                                autoGainControl: true,
                                sampleRate: 48000,
                                channelCount: 1
                            }
                        });
                        roomRef.current = room;
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackSubscribed, {
                            "GroupVoiceCall.useEffect.connectLiveKit": (track)=>{
                                if (track.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Audio && remoteAudioRef.current) {
                                    track.attach(remoteAudioRef.current);
                                    remoteAudioRef.current.volume = 1.0;
                                    remoteAudioRef.current.autoplay = true;
                                    setIsRinging(false);
                                }
                            }
                        }["GroupVoiceCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantConnected, {
                            "GroupVoiceCall.useEffect.connectLiveKit": (participant)=>{
                                setIsRinging(false);
                                setConnectedParticipantIds({
                                    "GroupVoiceCall.useEffect.connectLiveKit": (prev)=>new Set(prev).add(String(participant.identity))
                                }["GroupVoiceCall.useEffect.connectLiveKit"]);
                            }
                        }["GroupVoiceCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantDisconnected, {
                            "GroupVoiceCall.useEffect.connectLiveKit": (participant)=>{
                                setConnectedParticipantIds({
                                    "GroupVoiceCall.useEffect.connectLiveKit": (prev)=>{
                                        const next = new Set(prev);
                                        next.delete(String(participant.identity));
                                        return next;
                                    }
                                }["GroupVoiceCall.useEffect.connectLiveKit"]);
                            }
                        }["GroupVoiceCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Disconnected, {
                            "GroupVoiceCall.useEffect.connectLiveKit": ()=>{
                                if (isMounted) handleSafeClose(secondsRef.current);
                            }
                        }["GroupVoiceCall.useEffect.connectLiveKit"]);
                        await room.connect(data.wsUrl, data.token);
                        if (isMounted) {
                            setIsConnectedToRoom(true);
                            // Check if remote participants are already in the room
                            if (room.remoteParticipants.size > 0) {
                                setConnectedParticipantIds(new Set(Array.from(room.remoteParticipants.keys()).map(String)));
                                setIsRinging(false);
                                room.remoteParticipants.forEach({
                                    "GroupVoiceCall.useEffect.connectLiveKit": (participant)=>{
                                        participant.trackPublications.forEach({
                                            "GroupVoiceCall.useEffect.connectLiveKit": (pub)=>{
                                                if (pub.track && pub.track.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Audio && remoteAudioRef.current) {
                                                    pub.track.attach(remoteAudioRef.current);
                                                    remoteAudioRef.current.volume = 1.0;
                                                    remoteAudioRef.current.autoplay = true;
                                                    remoteAudioRef.current.play().catch({
                                                        "GroupVoiceCall.useEffect.connectLiveKit": ()=>{}
                                                    }["GroupVoiceCall.useEffect.connectLiveKit"]);
                                                }
                                            }
                                        }["GroupVoiceCall.useEffect.connectLiveKit"]);
                                    }
                                }["GroupVoiceCall.useEffect.connectLiveKit"]);
                            }
                            __turbopack_context__.A("[project]/src/services/presenceLifecycleManager.ts [app-client] (ecmascript, async loader)").then({
                                "GroupVoiceCall.useEffect.connectLiveKit": ({ presenceLifecycleManager })=>{
                                    presenceLifecycleManager.setInCall(true, 'group');
                                }
                            }["GroupVoiceCall.useEffect.connectLiveKit"]).catch({
                                "GroupVoiceCall.useEffect.connectLiveKit": ()=>{}
                            }["GroupVoiceCall.useEffect.connectLiveKit"]);
                            try {
                                await room.localParticipant.setMicrophoneEnabled(true, {
                                    echoCancellation: true,
                                    noiseSuppression: true,
                                    autoGainControl: true,
                                    sampleRate: 48000,
                                    channelCount: 1
                                });
                            } catch (mediaErr) {
                                console.warn('[GroupVoiceCall] Microphone error:', mediaErr);
                            }
                        }
                    } catch (err) {
                        var _err_message;
                        if ((err === null || err === void 0 ? void 0 : err.name) === 'ConnectionError' || (err === null || err === void 0 ? void 0 : (_err_message = err.message) === null || _err_message === void 0 ? void 0 : _err_message.includes('Client initiated disconnect'))) {
                            return;
                        }
                        console.error('[GroupVoiceCall] Error connecting to LiveKit room:', err);
                        setPermissionError('Unable to access audio. Check microphone permissions.');
                    }
                }
            }["GroupVoiceCall.useEffect.connectLiveKit"];
            connectLiveKit();
            return ({
                "GroupVoiceCall.useEffect": ()=>{
                    isMounted = false;
                    __turbopack_context__.A("[project]/src/services/presenceLifecycleManager.ts [app-client] (ecmascript, async loader)").then({
                        "GroupVoiceCall.useEffect": ({ presenceLifecycleManager })=>{
                            presenceLifecycleManager.setInCall(false);
                        }
                    }["GroupVoiceCall.useEffect"]).catch({
                        "GroupVoiceCall.useEffect": ()=>{}
                    }["GroupVoiceCall.useEffect"]);
                    if (roomRef.current) {
                        try {
                            roomRef.current.disconnect();
                        } catch (e) {}
                        roomRef.current = null;
                    }
                }
            })["GroupVoiceCall.useEffect"];
        }
    }["GroupVoiceCall.useEffect"], [
        roomId
    ]);
    // Direct toggle mute handler
    const handleToggleMute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GroupVoiceCall.useCallback[handleToggleMute]": async ()=>{
            var _roomRef_current;
            const nextMuted = !isMuted;
            setIsMuted(nextMuted);
            if ((_roomRef_current = roomRef.current) === null || _roomRef_current === void 0 ? void 0 : _roomRef_current.localParticipant) {
                try {
                    await roomRef.current.localParticipant.setMicrophoneEnabled(!nextMuted);
                } catch (err) {
                    console.warn('[GroupVoiceCall] Failed to toggle mic:', err);
                }
            }
        }
    }["GroupVoiceCall.useCallback[handleToggleMute]"], [
        isMuted
    ]);
    // Audio outputs monitoring (Speaker, Bluetooth, Earpiece)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupVoiceCall.useEffect": ()=>{
            const updateDevices = {
                "GroupVoiceCall.useEffect.updateDevices": async ()=>{
                    const outputs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvailableAudioOutputs"])();
                    setAvailableOutputs(outputs);
                    if (activeDeviceId !== 'default') {
                        const recovery = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleDeviceDisconnectRecovery"])(activeDeviceId, remoteAudioRef.current, roomRef.current);
                        if (recovery.recovered) {
                            setActiveDeviceId('default');
                            setActiveDeviceLabel(recovery.newDeviceLabel);
                            setIsSpeaker(false);
                            setAudioOutputError('🎧 Bluetooth audio disconnected. Switched output.');
                            return;
                        }
                    }
                    const savedPref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSavedAudioOutputPreference"])();
                    if (savedPref && activeDeviceId === 'default' && outputs.some({
                        "GroupVoiceCall.useEffect.updateDevices": (d)=>d.deviceId === savedPref
                    }["GroupVoiceCall.useEffect.updateDevices"])) {
                        const prefDevice = outputs.find({
                            "GroupVoiceCall.useEffect.updateDevices.prefDevice": (d)=>d.deviceId === savedPref
                        }["GroupVoiceCall.useEffect.updateDevices.prefDevice"]);
                        if (prefDevice) {
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routeAudioOutput"])(remoteAudioRef.current, roomRef.current, savedPref);
                            setActiveDeviceId(savedPref);
                            setActiveDeviceLabel(prefDevice.label);
                            setIsSpeaker(prefDevice.type === 'speaker');
                            return;
                        }
                    }
                    const bt = outputs.find({
                        "GroupVoiceCall.useEffect.updateDevices.bt": (d)=>d.type === 'bluetooth'
                    }["GroupVoiceCall.useEffect.updateDevices.bt"]);
                    if (bt && !isSpeaker && activeDeviceId === 'default') {
                        setActiveDeviceLabel(bt.label);
                    }
                }
            }["GroupVoiceCall.useEffect.updateDevices"];
            updateDevices();
            if (typeof navigator !== 'undefined' && navigator.mediaDevices) {
                navigator.mediaDevices.addEventListener('devicechange', updateDevices);
                return ({
                    "GroupVoiceCall.useEffect": ()=>{
                        navigator.mediaDevices.removeEventListener('devicechange', updateDevices);
                    }
                })["GroupVoiceCall.useEffect"];
            }
        }
    }["GroupVoiceCall.useEffect"], [
        isSpeaker,
        activeDeviceId
    ]);
    // Toggle Speakerphone
    const handleToggleSpeaker = async ()=>{
        setAudioOutputError(null);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleSpeakerphone"])(remoteAudioRef.current, roomRef.current, !isSpeaker);
            setIsSpeaker(res.isSpeaker);
            setActiveDeviceId(res.activeDeviceId);
            setActiveDeviceLabel(res.activeDeviceLabel);
        } catch (err) {
            console.warn('[GroupVoiceCall] Unable to toggle speaker output:', err);
            setAudioOutputError('Could not route audio output.');
        }
    };
    // Select Specific Audio Device
    const handleSelectDevice = async (deviceId, label, type)=>{
        setAudioOutputError(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routeAudioOutput"])(remoteAudioRef.current, roomRef.current, deviceId);
            setIsSpeaker(type === 'speaker');
            setActiveDeviceId(deviceId);
            setActiveDeviceLabel(label);
            setShowDeviceMenu(false);
        } catch (err) {
            console.warn('[GroupVoiceCall] Error selecting audio output:', err);
            setAudioOutputError(`Could not route to ${label}`);
        }
    };
    // Call duration timer: starts only when participants are connected in room
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupVoiceCall.useEffect": ()=>{
            if (!isConnectedToRoom || connectedParticipantIds.size === 0) return;
            const timer = setInterval({
                "GroupVoiceCall.useEffect.timer": ()=>{
                    setSeconds({
                        "GroupVoiceCall.useEffect.timer": (s)=>{
                            const next = s + 1;
                            secondsRef.current = next;
                            return next;
                        }
                    }["GroupVoiceCall.useEffect.timer"]);
                }
            }["GroupVoiceCall.useEffect.timer"], 1000);
            return ({
                "GroupVoiceCall.useEffect": ()=>clearInterval(timer)
            })["GroupVoiceCall.useEffect"];
        }
    }["GroupVoiceCall.useEffect"], [
        isConnectedToRoom,
        connectedParticipantIds.size
    ]);
    const formatTime = (totalSeconds)=>{
        const m = Math.floor(totalSeconds / 60);
        const s = totalSeconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };
    const isCallConnected = isConnectedToRoom && (connectedParticipantIds.size > 0 || isAccepted);
    const isConnecting = (isAccepted || isConnectedToRoom) && (!isConnectedToRoom || connectedParticipantIds.size === 0);
    const hasBluetooth = availableOutputs.some((d)=>d.type === 'bluetooth');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md overflow-hidden select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: remoteAudioRef,
                autoPlay: true,
                playsInline: true
            }, void 0, false, {
                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[100dvh] sm:h-[85vh] sm:max-w-md sm:rounded-3xl shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#182026] via-[#10171d] to-[#0c1115] flex flex-col items-center justify-between px-6",
                style: {
                    paddingTop: 'max(env(safe-area-inset-top, 0px), 48px)',
                    paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 28px)'
                },
                children: [
                    permissionError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-amber-600/90 text-white text-xs px-4 py-2 rounded-full text-center font-medium shadow-md z-50 flex items-center justify-center gap-2 mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "⚠️ ",
                                permissionError
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                            lineNumber: 413,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                        lineNumber: 412,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-4 mt-2 sm:mt-6 z-10 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-center justify-center mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-44 h-44 rounded-full border border-emerald-500/25 animate-ping pointer-events-none",
                                        style: {
                                            animationDuration: '3.2s'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                        lineNumber: 422,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-36 h-36 rounded-full border-2 border-emerald-400/40 animate-pulse pointer-events-none",
                                        style: {
                                            animationDuration: '2s'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                        lineNumber: 426,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute w-32 h-32 rounded-full bg-emerald-500/20 blur-xl pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                        lineNumber: 430,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_40px_rgba(16,185,129,0.35)] relative bg-[#1e293b] flex items-center justify-center z-10",
                                        children: resolvedAvatar && !avatarError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: resolvedAvatar,
                                            alt: chatName,
                                            className: "w-full h-full object-cover",
                                            onError: ()=>setAvatarError(true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full h-full bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-600 flex items-center justify-center text-white text-3xl font-bold select-none tracking-wider shadow-inner",
                                            children: initials
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                            lineNumber: 441,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                        lineNumber: 432,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                lineNumber: 421,
                                columnNumber: 11
                            }, this),
                            groupMembers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex -space-x-2.5 my-1",
                                children: [
                                    groupMembers.slice(0, 5).map((m, idx)=>{
                                        var _m_fullName;
                                        const memberAvatar = m.avatar ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(m.avatar) : undefined;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-9 h-9 rounded-full border-2 border-[#182026] overflow-hidden bg-[#202c33] shadow-md",
                                            children: memberAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: memberAvatar,
                                                alt: m.fullName,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                lineNumber: 456,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-full h-full bg-[#00a884] text-white flex items-center justify-center font-bold text-xs",
                                                children: ((_m_fullName = m.fullName) === null || _m_fullName === void 0 ? void 0 : _m_fullName.substring(0, 1).toUpperCase()) || 'U'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                lineNumber: 458,
                                                columnNumber: 23
                                            }, this)
                                        }, m.id || idx, false, {
                                            fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                            lineNumber: 454,
                                            columnNumber: 19
                                        }, this);
                                    }),
                                    groupMembers.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-full border-2 border-[#182026] bg-[#2a373f] text-white flex items-center justify-center text-[10px] font-bold",
                                        children: [
                                            "+",
                                            groupMembers.length - 5
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                        lineNumber: 466,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                lineNumber: 450,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl font-bold text-white tracking-wide truncate max-w-xs",
                                        children: chatName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                        lineNumber: 474,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-2 mt-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
                                                children: "👥 Group Voice Call"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                lineNumber: 476,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-medium text-xs ${isCallConnected && connectedParticipantIds.size > 0 ? 'text-emerald-400' : isConnecting ? 'text-cyan-400 animate-pulse' : 'text-slate-300 animate-pulse'}`,
                                                children: isConnecting ? "Connecting..." : isCallConnected && connectedParticipantIds.size > 0 ? formatTime(seconds) : !isRingingStatus ? "Calling group..." : "Ringing..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                lineNumber: 479,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                        lineNumber: 475,
                                        columnNumber: 13
                                    }, this),
                                    groupMembers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowMembersDrawer(!showMembersDrawer),
                                        className: "mt-3 bg-white/10 hover:bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white text-xs font-semibold inline-flex items-center gap-1.5 transition active:scale-95 cursor-pointer shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                lineNumber: 499,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Participants (",
                                                    connectedParticipantIds.size + 1,
                                                    "/",
                                                    groupMembers.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                lineNumber: 500,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                        lineNumber: 495,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                lineNumber: 473,
                                columnNumber: 11
                            }, this),
                            showMembersDrawer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-sm bg-[#161f26]/95 backdrop-blur-xl rounded-2xl p-4 border border-white/15 shadow-2xl space-y-3 animate-in fade-in zoom-in-95 duration-200 z-30",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-white/10 pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        size: 13,
                                                        className: "text-emerald-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Group Call Roster"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                lineNumber: 509,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowMembersDrawer(false),
                                                className: "w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                lineNumber: 513,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                        lineNumber: 508,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "max-h-48 overflow-y-auto space-y-1.5 pr-1 no-scrollbar",
                                        children: groupMembers.map((m)=>{
                                            var _m_fullName;
                                            const isSelf = Number(m.id) === Number(user === null || user === void 0 ? void 0 : user.id);
                                            const isConnected = isSelf || connectedParticipantIds.has(String(m.id)) || connectedParticipantIds.has(String(Number(m.id)));
                                            const memberAvatar = m.avatar ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(m.avatar) : undefined;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between text-xs py-1 px-1 rounded-lg hover:bg-white/5 transition",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 min-w-0 flex-1",
                                                        children: [
                                                            memberAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: memberAvatar,
                                                                alt: m.fullName,
                                                                className: "w-6 h-6 rounded-full object-cover shrink-0 border border-white/20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                                lineNumber: 531,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-6 h-6 rounded-full bg-[#007bfc] text-white flex items-center justify-center font-bold text-[11px] shrink-0",
                                                                children: (_m_fullName = m.fullName) === null || _m_fullName === void 0 ? void 0 : _m_fullName.substring(0, 1).toUpperCase()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                                lineNumber: 533,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-white font-medium truncate",
                                                                children: [
                                                                    m.fullName,
                                                                    " ",
                                                                    isSelf && "(You)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                                lineNumber: 537,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 shrink-0 ml-2",
                                                        children: isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1 text-emerald-400 font-medium text-[11px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                                    lineNumber: 545,
                                                                    columnNumber: 29
                                                                }, this),
                                                                "Connected"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                            lineNumber: 544,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1 text-amber-400 font-medium text-[11px] animate-pulse",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-1.5 h-1.5 rounded-full bg-amber-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                                    lineNumber: 550,
                                                                    columnNumber: 29
                                                                }, this),
                                                                "Ringing..."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                            lineNumber: 549,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                        lineNumber: 542,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, m.id, true, {
                                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                lineNumber: 528,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                        lineNumber: 521,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                lineNumber: 507,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                        lineNumber: 418,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-6 z-10 mt-6 sm:mt-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleToggleMute,
                                className: `w-14 h-14 rounded-full flex items-center justify-center transition shadow-lg active:scale-95 ${isMuted ? 'bg-amber-500 text-white shadow-amber-500/30' : 'bg-white/10 text-white hover:bg-white/20'}`,
                                title: isMuted ? "Unmute" : "Mute",
                                children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                    lineNumber: 572,
                                    columnNumber: 24
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                    lineNumber: 572,
                                    columnNumber: 47
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                lineNumber: 565,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleSafeClose(secondsRef.current),
                                className: "w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.6)] transition hover:scale-105 active:scale-90",
                                title: "Leave Call",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
                                    size: 30,
                                    className: "text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                    lineNumber: 580,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                lineNumber: 575,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (availableOutputs.length > 1) {
                                                setShowDeviceMenu(!showDeviceMenu);
                                            } else {
                                                handleToggleSpeaker();
                                            }
                                        },
                                        className: `w-14 h-14 rounded-full flex items-center justify-center transition shadow-lg active:scale-95 ${hasBluetooth ? 'bg-blue-600 text-white shadow-blue-500/30' : isSpeaker ? 'bg-white/15 text-white hover:bg-white/25' : 'bg-white/10 text-white hover:bg-white/20'}`,
                                        title: isSpeaker ? `Speaker Active (${activeDeviceLabel})` : `Audio Output (${activeDeviceLabel})`,
                                        children: hasBluetooth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__["Bluetooth"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                            lineNumber: 602,
                                            columnNumber: 17
                                        }, this) : isSpeaker ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                            lineNumber: 604,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                            lineNumber: 606,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                        lineNumber: 584,
                                        columnNumber: 13
                                    }, this),
                                    showDeviceMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-20 -right-12 w-64 bg-[#161f26]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-3 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-xs font-semibold text-white/90",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                                size: 14,
                                                                className: "text-emerald-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                                lineNumber: 615,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Audio Output Device"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                        lineNumber: 614,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setShowDeviceMenu(false),
                                                        className: "text-white/60 hover:text-white",
                                                        children: "✕"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                        lineNumber: 618,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                lineNumber: 613,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-1.5 max-h-48 overflow-y-auto pr-1",
                                                children: availableOutputs.map((dev)=>{
                                                    const isSelected = activeDeviceId !== 'default' ? dev.deviceId === activeDeviceId : isSpeaker ? dev.type === 'speaker' : dev.label === activeDeviceLabel || dev.isDefault;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleSelectDevice(dev.deviceId, dev.label, dev.type),
                                                        className: `w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition ${isSelected ? 'bg-emerald-600 text-white font-semibold' : 'bg-white/5 text-gray-200 hover:bg-white/10'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-1.5 truncate mr-2",
                                                                children: [
                                                                    dev.type === 'bluetooth' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__["Bluetooth"], {
                                                                        size: 13,
                                                                        className: "text-blue-300"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                                        lineNumber: 634,
                                                                        columnNumber: 55
                                                                    }, this) : dev.type === 'speaker' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                                        size: 13,
                                                                        className: "text-emerald-300"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                                        lineNumber: 634,
                                                                        columnNumber: 132
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                                                        size: 13,
                                                                        className: "text-slate-300"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                                        lineNumber: 634,
                                                                        columnNumber: 185
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "truncate",
                                                                        children: dev.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                                        lineNumber: 635,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                                lineNumber: 633,
                                                                columnNumber: 25
                                                            }, this),
                                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] text-emerald-200",
                                                                children: "Active"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                                lineNumber: 637,
                                                                columnNumber: 40
                                                            }, this)
                                                        ]
                                                    }, dev.deviceId || dev.label, true, {
                                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                        lineNumber: 626,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                                lineNumber: 620,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                        lineNumber: 612,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                lineNumber: 583,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                        lineNumber: 564,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "z-10 flex flex-col items-center mt-2 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] text-gray-400 flex items-center gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Audio Route:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                        lineNumber: 650,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-medium truncate max-w-[200px]",
                                        children: hasBluetooth ? `🎧 ${activeDeviceLabel}` : isSpeaker ? '🔊 Speakerphone' : `📱 ${activeDeviceLabel}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                        lineNumber: 651,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                lineNumber: 649,
                                columnNumber: 11
                            }, this),
                            audioOutputError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-amber-300 font-medium px-4",
                                role: "status",
                                children: [
                                    "⚠️ ",
                                    audioOutputError
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                                lineNumber: 656,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                        lineNumber: 648,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
                lineNumber: 404,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/call/p2g/GroupVoiceCall.tsx",
        lineNumber: 401,
        columnNumber: 5
    }, this);
}
_s(GroupVoiceCall, "K3x4ryP0Yk7+AA3n52dpC9ut78I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = GroupVoiceCall;
var _c;
__turbopack_context__.k.register(_c, "GroupVoiceCall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/call/p2g/GroupVideoCall.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// P2G Group Video Call Component (Peer-to-Group Video Call)
// Safe Area Compliant, Bluetooth/Speaker Routing, HD Avatar & Modern UI
// ============================================================
__turbopack_context__.s([
    "GroupVideoCall",
    ()=>GroupVideoCall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.mjs [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video-off.mjs [app-client] (ecmascript) <export default as VideoOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.mjs [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic-off.mjs [app-client] (ecmascript) <export default as MicOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone-off.mjs [app-client] (ecmascript) <export default as PhoneOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$switch$2d$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SwitchCamera$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/switch-camera.mjs [app-client] (ecmascript) <export default as SwitchCamera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/volume-2.mjs [app-client] (ecmascript) <export default as Volume2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bluetooth.mjs [app-client] (ecmascript) <export default as Bluetooth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.mjs [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/livekit-client/dist/livekit-client.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$livekitApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/livekitApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$devicePermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/devicePermissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/audioOutput.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
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
function GroupVideoCall({ onClose, chatName, avatarUrl, isAccepted, isRingingStatus, busyMessage, roomId }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [seconds, setSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRinging, setIsRinging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isRingingStatus && !isAccepted);
    const [isVideoOff, setIsVideoOff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [facingMode, setFacingMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('user');
    const [isSwitchingCamera, setIsSwitchingCamera] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isConnectedToRoom, setIsConnectedToRoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [permissionError, setPermissionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [groupMembers, setGroupMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showMembersDrawer, setShowMembersDrawer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [connectedParticipantIds, setConnectedParticipantIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [isLocalVideoReady, setIsLocalVideoReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isRemoteVideoReady, setIsRemoteVideoReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [avatarError, setAvatarError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Audio output state (Speaker, Bluetooth, Earpiece)
    const [isSpeaker, setIsSpeaker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true); // Video calls default to loudspeaker
    const [activeDeviceId, setActiveDeviceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('default');
    const [activeDeviceLabel, setActiveDeviceLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Speaker');
    const [availableOutputs, setAvailableOutputs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showDeviceMenu, setShowDeviceMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [audioOutputError, setAudioOutputError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const localVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const remoteVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const remoteAudioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const roomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const secondsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const hasClosedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const resolvedAvatar = avatarUrl ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(avatarUrl) : undefined;
    const initials = (chatName || 'Group').trim().substring(0, 2).toUpperCase();
    const onCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onClose);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupVideoCall.useEffect": ()=>{
            onCloseRef.current = onClose;
        }
    }["GroupVideoCall.useEffect"], [
        onClose
    ]);
    const handleSafeClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GroupVideoCall.useCallback[handleSafeClose]": (dur)=>{
            if (hasClosedRef.current) return;
            hasClosedRef.current = true;
            const finalDuration = typeof dur === 'number' ? dur : secondsRef.current;
            if (roomRef.current) {
                try {
                    roomRef.current.disconnect();
                } catch (e) {}
                roomRef.current = null;
            }
            onCloseRef.current(finalDuration);
        }
    }["GroupVideoCall.useCallback[handleSafeClose]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupVideoCall.useEffect": ()=>{
            if (isAccepted || connectedParticipantIds.size > 0) {
                setIsRinging(false);
            } else {
                setIsRinging(Boolean(isRingingStatus));
            }
        }
    }["GroupVideoCall.useEffect"], [
        isAccepted,
        isRingingStatus,
        connectedParticipantIds.size
    ]);
    // Fetch Room Members
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupVideoCall.useEffect": ()=>{
            if (!roomId) return;
            let isMounted = true;
            const fetchMembers = {
                "GroupVideoCall.useEffect.fetchMembers": async ()=>{
                    try {
                        const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
                        const res = await chatApi.getRoomMembers(Number(roomId));
                        if (isMounted && (res === null || res === void 0 ? void 0 : res.success) && Array.isArray(res.data)) {
                            setGroupMembers(res.data);
                        }
                    } catch (err) {}
                }
            }["GroupVideoCall.useEffect.fetchMembers"];
            fetchMembers();
            return ({
                "GroupVideoCall.useEffect": ()=>{
                    isMounted = false;
                }
            })["GroupVideoCall.useEffect"];
        }
    }["GroupVideoCall.useEffect"], [
        roomId
    ]);
    // Synthesize Ringing Tone during calling / ringing state
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupVideoCall.useEffect": ()=>{
            if (!isRinging || isAccepted || connectedParticipantIds.size > 0) return;
            let audioCtx = null;
            let osc1 = null;
            let osc2 = null;
            let gainNode = null;
            let ringInterval = null;
            try {
                const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
                if (!AudioCtxClass) return;
                audioCtx = new AudioCtxClass();
                gainNode = audioCtx.createGain();
                gainNode.connect(audioCtx.destination);
                gainNode.gain.value = 0;
                osc1 = audioCtx.createOscillator();
                osc1.type = 'sine';
                osc1.frequency.value = 440;
                osc1.connect(gainNode);
                osc2 = audioCtx.createOscillator();
                osc2.type = 'sine';
                osc2.frequency.value = 480;
                osc2.connect(gainNode);
                osc1.start();
                osc2.start();
                const ring = {
                    "GroupVideoCall.useEffect.ring": ()=>{
                        if (!audioCtx || audioCtx.state === 'closed') return;
                        const now = audioCtx.currentTime;
                        gainNode === null || gainNode === void 0 ? void 0 : gainNode.gain.setValueAtTime(0, now);
                        gainNode === null || gainNode === void 0 ? void 0 : gainNode.gain.linearRampToValueAtTime(0.04, now + 0.1);
                        gainNode === null || gainNode === void 0 ? void 0 : gainNode.gain.setValueAtTime(0.04, now + 1.8);
                        gainNode === null || gainNode === void 0 ? void 0 : gainNode.gain.linearRampToValueAtTime(0, now + 1.9);
                    }
                }["GroupVideoCall.useEffect.ring"];
                ring();
                ringInterval = setInterval(ring, 3800);
            } catch (e) {
                console.warn('[GroupVideoCall] Audio synth tone error:', e);
            }
            return ({
                "GroupVideoCall.useEffect": ()=>{
                    if (ringInterval) clearInterval(ringInterval);
                    if (osc1) {
                        try {
                            osc1.stop();
                        } catch (e) {}
                    }
                    if (osc2) {
                        try {
                            osc2.stop();
                        } catch (e) {}
                    }
                    if (audioCtx) {
                        try {
                            audioCtx.close();
                        } catch (e) {}
                    }
                }
            })["GroupVideoCall.useEffect"];
        }
    }["GroupVideoCall.useEffect"], [
        isRinging,
        isAccepted,
        connectedParticipantIds.size
    ]);
    // Connect to LiveKit
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupVideoCall.useEffect": ()=>{
            let isMounted = true;
            const connectLiveKit = {
                "GroupVideoCall.useEffect.connectLiveKit": async ()=>{
                    try {
                        if (!roomId) return;
                        const permRes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$devicePermissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestDevicePermissions"])('video');
                        if (!(permRes === null || permRes === void 0 ? void 0 : permRes.granted) && isMounted) {
                            setPermissionError('Camera & microphone permissions required');
                        }
                        const data = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$livekitApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["livekitApi"].getToken(roomId, 'video');
                        if (!(data === null || data === void 0 ? void 0 : data.token) || !(data === null || data === void 0 ? void 0 : data.wsUrl)) {
                            throw new Error('Failed to acquire LiveKit token');
                        }
                        if (!isMounted) return;
                        const room = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Room"]({
                            adaptiveStream: true,
                            dynacast: true,
                            stopLocalTrackOnUnpublish: true,
                            videoCaptureDefaults: {
                                facingMode
                            },
                            publishDefaults: {
                                simulcast: true,
                                videoSimulcastLayers: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoPresets"].h720,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoPresets"].h360,
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoPresets"].h180
                                ],
                                videoCodec: 'vp8',
                                videoEncoding: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoPresets"].h720.encoding,
                                audioPreset: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AudioPresets"].music,
                                dtx: true,
                                red: true
                            },
                            audioCaptureDefaults: {
                                echoCancellation: true,
                                noiseSuppression: true,
                                autoGainControl: true,
                                sampleRate: 48000,
                                channelCount: 1
                            }
                        });
                        roomRef.current = room;
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackSubscribed, {
                            "GroupVideoCall.useEffect.connectLiveKit": (track)=>{
                                if (track.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video && remoteVideoRef.current) {
                                    track.attach(remoteVideoRef.current);
                                    remoteVideoRef.current.playsInline = true;
                                    remoteVideoRef.current.muted = true;
                                    remoteVideoRef.current.autoplay = true;
                                    remoteVideoRef.current.play().catch({
                                        "GroupVideoCall.useEffect.connectLiveKit": ()=>{}
                                    }["GroupVideoCall.useEffect.connectLiveKit"]);
                                    setIsRinging(false);
                                    setIsRemoteVideoReady(true);
                                }
                                if (track.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Audio && remoteAudioRef.current) {
                                    track.attach(remoteAudioRef.current);
                                    remoteAudioRef.current.volume = 1.0;
                                    remoteAudioRef.current.autoplay = true;
                                    remoteAudioRef.current.play().catch({
                                        "GroupVideoCall.useEffect.connectLiveKit": ()=>{}
                                    }["GroupVideoCall.useEffect.connectLiveKit"]);
                                    setIsRinging(false);
                                    // Default route to speakerphone on video call
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleSpeakerphone"])(remoteAudioRef.current, room, true).catch({
                                        "GroupVideoCall.useEffect.connectLiveKit": ()=>{}
                                    }["GroupVideoCall.useEffect.connectLiveKit"]);
                                }
                            }
                        }["GroupVideoCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackUnsubscribed, {
                            "GroupVideoCall.useEffect.connectLiveKit": (track, publication, participant)=>{
                                if (track.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video && participant !== room.localParticipant) {
                                    if (remoteVideoRef.current) track.detach(remoteVideoRef.current);
                                    setIsRemoteVideoReady(false);
                                }
                            }
                        }["GroupVideoCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackMuted, {
                            "GroupVideoCall.useEffect.connectLiveKit": (pub, participant)=>{
                                if ((pub === null || pub === void 0 ? void 0 : pub.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video && participant !== room.localParticipant) {
                                    setIsRemoteVideoReady(false);
                                }
                            }
                        }["GroupVideoCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].TrackUnmuted, {
                            "GroupVideoCall.useEffect.connectLiveKit": (pub, participant)=>{
                                if ((pub === null || pub === void 0 ? void 0 : pub.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video && participant !== room.localParticipant) {
                                    setIsRemoteVideoReady(true);
                                }
                            }
                        }["GroupVideoCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantConnected, {
                            "GroupVideoCall.useEffect.connectLiveKit": (participant)=>{
                                setIsRinging(false);
                                setConnectedParticipantIds({
                                    "GroupVideoCall.useEffect.connectLiveKit": (prev)=>new Set(prev).add(String(participant.identity))
                                }["GroupVideoCall.useEffect.connectLiveKit"]);
                            }
                        }["GroupVideoCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].ParticipantDisconnected, {
                            "GroupVideoCall.useEffect.connectLiveKit": (participant)=>{
                                setConnectedParticipantIds({
                                    "GroupVideoCall.useEffect.connectLiveKit": (prev)=>{
                                        const next = new Set(prev);
                                        next.delete(String(participant.identity));
                                        return next;
                                    }
                                }["GroupVideoCall.useEffect.connectLiveKit"]);
                            }
                        }["GroupVideoCall.useEffect.connectLiveKit"]);
                        room.on(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RoomEvent"].Disconnected, {
                            "GroupVideoCall.useEffect.connectLiveKit": ()=>{
                                if (isMounted) handleSafeClose(secondsRef.current);
                            }
                        }["GroupVideoCall.useEffect.connectLiveKit"]);
                        await room.connect(data.wsUrl, data.token);
                        if (isMounted) {
                            setIsConnectedToRoom(true);
                            // Check if remote participants are already in the room
                            if (room.remoteParticipants.size > 0) {
                                setConnectedParticipantIds(new Set(Array.from(room.remoteParticipants.keys()).map(String)));
                                setIsRinging(false);
                                room.remoteParticipants.forEach({
                                    "GroupVideoCall.useEffect.connectLiveKit": (participant)=>{
                                        participant.trackPublications.forEach({
                                            "GroupVideoCall.useEffect.connectLiveKit": (pub)=>{
                                                if (pub.track) {
                                                    if (pub.track.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video && remoteVideoRef.current) {
                                                        pub.track.attach(remoteVideoRef.current);
                                                        remoteVideoRef.current.playsInline = true;
                                                        remoteVideoRef.current.muted = true;
                                                        remoteVideoRef.current.autoplay = true;
                                                        remoteVideoRef.current.play().catch({
                                                            "GroupVideoCall.useEffect.connectLiveKit": ()=>{}
                                                        }["GroupVideoCall.useEffect.connectLiveKit"]);
                                                        setIsRemoteVideoReady(true);
                                                    }
                                                    if (pub.track.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Audio && remoteAudioRef.current) {
                                                        pub.track.attach(remoteAudioRef.current);
                                                        remoteAudioRef.current.volume = 1.0;
                                                        remoteAudioRef.current.autoplay = true;
                                                        remoteAudioRef.current.play().catch({
                                                            "GroupVideoCall.useEffect.connectLiveKit": ()=>{}
                                                        }["GroupVideoCall.useEffect.connectLiveKit"]);
                                                    }
                                                }
                                            }
                                        }["GroupVideoCall.useEffect.connectLiveKit"]);
                                    }
                                }["GroupVideoCall.useEffect.connectLiveKit"]);
                            }
                            __turbopack_context__.A("[project]/src/services/presenceLifecycleManager.ts [app-client] (ecmascript, async loader)").then({
                                "GroupVideoCall.useEffect.connectLiveKit": ({ presenceLifecycleManager })=>{
                                    presenceLifecycleManager.setInCall(true, 'group');
                                }
                            }["GroupVideoCall.useEffect.connectLiveKit"]).catch({
                                "GroupVideoCall.useEffect.connectLiveKit": ()=>{}
                            }["GroupVideoCall.useEffect.connectLiveKit"]);
                            // 1. Enable Microphone
                            try {
                                await room.localParticipant.setMicrophoneEnabled(true, {
                                    echoCancellation: true,
                                    noiseSuppression: true,
                                    autoGainControl: true,
                                    sampleRate: 48000,
                                    channelCount: 1
                                });
                            } catch (micErr) {
                                console.warn('[GroupVideoCall] Microphone capture error:', micErr);
                            }
                            // 2. Enable Camera with automatic fallback
                            try {
                                var _this, _Array_from_find;
                                let pub;
                                try {
                                    pub = await room.localParticipant.setCameraEnabled(true, {
                                        facingMode
                                    });
                                } catch (initialErr) {
                                    console.warn('[GroupVideoCall] Standard camera start failed, trying basic fallback:', initialErr);
                                    pub = await room.localParticipant.setCameraEnabled(true);
                                }
                                const videoTrack = ((_this = pub) === null || _this === void 0 ? void 0 : _this.track) || ((_Array_from_find = Array.from(room.localParticipant.videoTrackPublications.values()).find({
                                    "GroupVideoCall.useEffect.connectLiveKit": (p)=>p.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video
                                }["GroupVideoCall.useEffect.connectLiveKit"])) === null || _Array_from_find === void 0 ? void 0 : _Array_from_find.track);
                                if (videoTrack && localVideoRef.current) {
                                    videoTrack.attach(localVideoRef.current);
                                    localVideoRef.current.muted = true;
                                    localVideoRef.current.playsInline = true;
                                    await localVideoRef.current.play().catch({
                                        "GroupVideoCall.useEffect.connectLiveKit": ()=>{}
                                    }["GroupVideoCall.useEffect.connectLiveKit"]);
                                    setIsLocalVideoReady(true);
                                    setPermissionError(null);
                                }
                            } catch (mediaErr) {
                                console.warn('[GroupVideoCall] Media capture error:', mediaErr);
                            }
                        }
                    } catch (err) {
                        var _err_message;
                        if ((err === null || err === void 0 ? void 0 : err.name) === 'ConnectionError' || (err === null || err === void 0 ? void 0 : (_err_message = err.message) === null || _err_message === void 0 ? void 0 : _err_message.includes('Client initiated disconnect'))) {
                            return;
                        }
                        console.error('[GroupVideoCall] Error connecting to LiveKit room:', err);
                        setPermissionError('Unable to connect to group video call.');
                    }
                }
            }["GroupVideoCall.useEffect.connectLiveKit"];
            connectLiveKit();
            return ({
                "GroupVideoCall.useEffect": ()=>{
                    isMounted = false;
                    __turbopack_context__.A("[project]/src/services/presenceLifecycleManager.ts [app-client] (ecmascript, async loader)").then({
                        "GroupVideoCall.useEffect": ({ presenceLifecycleManager })=>{
                            presenceLifecycleManager.setInCall(false);
                        }
                    }["GroupVideoCall.useEffect"]).catch({
                        "GroupVideoCall.useEffect": ()=>{}
                    }["GroupVideoCall.useEffect"]);
                    if (roomRef.current) {
                        try {
                            roomRef.current.disconnect();
                        } catch (e) {}
                        roomRef.current = null;
                    }
                }
            })["GroupVideoCall.useEffect"];
        }
    }["GroupVideoCall.useEffect"], [
        roomId
    ]);
    // Audio outputs monitoring (Speaker, Bluetooth, Earpiece)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupVideoCall.useEffect": ()=>{
            const updateDevices = {
                "GroupVideoCall.useEffect.updateDevices": async ()=>{
                    const outputs = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAvailableAudioOutputs"])();
                    setAvailableOutputs(outputs);
                    // Auto-recovery: If active Bluetooth disconnected mid-call, fall back to default
                    if (activeDeviceId !== 'default') {
                        const recovery = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleDeviceDisconnectRecovery"])(activeDeviceId, remoteAudioRef.current, roomRef.current);
                        if (recovery.recovered) {
                            setActiveDeviceId('default');
                            setActiveDeviceLabel(recovery.newDeviceLabel);
                            setIsSpeaker(false);
                            setAudioOutputError('🎧 Bluetooth audio disconnected. Switched output.');
                            return;
                        }
                    }
                    // Check for connected Bluetooth device
                    const bt = outputs.find({
                        "GroupVideoCall.useEffect.updateDevices.bt": (d)=>d.type === 'bluetooth'
                    }["GroupVideoCall.useEffect.updateDevices.bt"]);
                    if (bt && activeDeviceId === 'default') {
                        setActiveDeviceLabel(bt.label);
                    } else if (isSpeaker) {
                        setActiveDeviceLabel('Speaker');
                    }
                    // Restore saved user preference if available
                    const savedPref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSavedAudioOutputPreference"])();
                    if (savedPref && activeDeviceId === 'default' && outputs.some({
                        "GroupVideoCall.useEffect.updateDevices": (d)=>d.deviceId === savedPref
                    }["GroupVideoCall.useEffect.updateDevices"])) {
                        const prefDevice = outputs.find({
                            "GroupVideoCall.useEffect.updateDevices.prefDevice": (d)=>d.deviceId === savedPref
                        }["GroupVideoCall.useEffect.updateDevices.prefDevice"]);
                        if (prefDevice) {
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routeAudioOutput"])(remoteAudioRef.current, roomRef.current, savedPref);
                            setActiveDeviceId(savedPref);
                            setActiveDeviceLabel(prefDevice.label);
                            setIsSpeaker(prefDevice.type === 'speaker');
                        }
                    }
                }
            }["GroupVideoCall.useEffect.updateDevices"];
            updateDevices();
            if (typeof navigator !== 'undefined' && navigator.mediaDevices) {
                navigator.mediaDevices.addEventListener('devicechange', updateDevices);
                return ({
                    "GroupVideoCall.useEffect": ()=>{
                        navigator.mediaDevices.removeEventListener('devicechange', updateDevices);
                    }
                })["GroupVideoCall.useEffect"];
            }
        }
    }["GroupVideoCall.useEffect"], [
        isSpeaker,
        activeDeviceId
    ]);
    // Camera Video Toggle
    const handleToggleVideo = async ()=>{
        const nextVideoOff = !isVideoOff;
        setIsVideoOff(nextVideoOff);
        if (!roomRef.current) return;
        try {
            if (nextVideoOff) {
                setIsLocalVideoReady(false);
                await roomRef.current.localParticipant.setCameraEnabled(false);
            } else {
                var _this, _Array_from_find;
                let pub;
                try {
                    pub = await roomRef.current.localParticipant.setCameraEnabled(true, {
                        facingMode
                    });
                } catch (initialErr) {
                    pub = await roomRef.current.localParticipant.setCameraEnabled(true);
                }
                const videoTrack = ((_this = pub) === null || _this === void 0 ? void 0 : _this.track) || ((_Array_from_find = Array.from(roomRef.current.localParticipant.videoTrackPublications.values()).find((p)=>p.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video)) === null || _Array_from_find === void 0 ? void 0 : _Array_from_find.track);
                if (videoTrack && localVideoRef.current) {
                    videoTrack.attach(localVideoRef.current);
                    localVideoRef.current.muted = true;
                    localVideoRef.current.playsInline = true;
                    localVideoRef.current.play().catch(()=>{});
                    setIsLocalVideoReady(true);
                    setPermissionError(null);
                }
            }
        } catch (err) {
            console.warn('[GroupVideoCall] Error toggling camera:', err);
        }
    };
    // Microphone Mute Toggle
    const handleToggleMute = async ()=>{
        const nextMuted = !isMuted;
        setIsMuted(nextMuted);
        if (!roomRef.current) return;
        try {
            await roomRef.current.localParticipant.setMicrophoneEnabled(!nextMuted);
        } catch (err) {
            console.warn('[GroupVideoCall] Error toggling microphone:', err);
        }
    };
    // Flip Camera (Front / Back switch)
    const handleSwitchCamera = async ()=>{
        if (!roomRef.current || isVideoOff || isSwitchingCamera) return;
        const nextFacing = facingMode === 'user' ? 'environment' : 'user';
        setIsSwitchingCamera(true);
        try {
            var _Array_from_find;
            const videoPub = Array.from(roomRef.current.localParticipant.videoTrackPublications.values()).find((p)=>p.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video);
            const videoTrack = videoPub === null || videoPub === void 0 ? void 0 : videoPub.track;
            // 1. Try to discover devices by label or facing mode
            let targetDeviceId;
            try {
                const devices = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Room"].getLocalDevices('videoinput');
                if (devices && devices.length > 1) {
                    if (nextFacing === 'environment') {
                        var _devices_;
                        const backDev = devices.find((d)=>{
                            const l = (d.label || '').toLowerCase();
                            return l.includes('back') || l.includes('rear') || l.includes('environment') || l.includes('0');
                        });
                        targetDeviceId = (backDev === null || backDev === void 0 ? void 0 : backDev.deviceId) || ((_devices_ = devices[1]) === null || _devices_ === void 0 ? void 0 : _devices_.deviceId);
                    } else {
                        var _devices_1;
                        const frontDev = devices.find((d)=>{
                            const l = (d.label || '').toLowerCase();
                            return l.includes('front') || l.includes('user') || l.includes('1');
                        });
                        targetDeviceId = (frontDev === null || frontDev === void 0 ? void 0 : frontDev.deviceId) || ((_devices_1 = devices[0]) === null || _devices_1 === void 0 ? void 0 : _devices_1.deviceId);
                    }
                }
            } catch (devErr) {
                console.warn('[GroupVideoCall] Device enumeration error:', devErr);
            }
            let switched = false;
            // 2. Try restartTrack on the existing track if available
            if (videoTrack && typeof videoTrack.restartTrack === 'function') {
                try {
                    await videoTrack.restartTrack({
                        facingMode: nextFacing,
                        deviceId: targetDeviceId
                    });
                    switched = true;
                } catch (restartErr) {
                    console.warn('[GroupVideoCall] restartTrack failed, trying fallback:', restartErr);
                }
            }
            // 3. Fallback: unpublish previous track completely and publish new track with target facingMode
            if (!switched) {
                if (videoPub === null || videoPub === void 0 ? void 0 : videoPub.track) {
                    try {
                        await roomRef.current.localParticipant.unpublishTrack(videoPub.track, true);
                    } catch (unpubErr) {}
                }
                await roomRef.current.localParticipant.setCameraEnabled(true, {
                    facingMode: nextFacing,
                    deviceId: targetDeviceId
                });
            }
            setFacingMode(nextFacing);
            // Re-attach active local video track
            const activeTrack = (_Array_from_find = Array.from(roomRef.current.localParticipant.videoTrackPublications.values()).find((p)=>p.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$livekit$2d$client$2f$dist$2f$livekit$2d$client$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"].Kind.Video)) === null || _Array_from_find === void 0 ? void 0 : _Array_from_find.track;
            if (activeTrack && localVideoRef.current) {
                activeTrack.attach(localVideoRef.current);
                localVideoRef.current.muted = true;
                localVideoRef.current.playsInline = true;
                localVideoRef.current.play().catch(()=>{});
                setIsLocalVideoReady(true);
            }
        } catch (err) {
            console.warn('[GroupVideoCall] Error flipping camera:', err);
        } finally{
            setIsSwitchingCamera(false);
        }
    };
    // Toggle Speakerphone
    const handleToggleSpeaker = async ()=>{
        setAudioOutputError(null);
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleSpeakerphone"])(remoteAudioRef.current, roomRef.current, !isSpeaker);
            setIsSpeaker(res.isSpeaker);
            setActiveDeviceId(res.activeDeviceId);
            setActiveDeviceLabel(res.activeDeviceLabel);
        } catch (err) {
            console.warn('[GroupVideoCall] Unable to toggle speaker output:', err);
            setAudioOutputError('Could not switch audio route.');
        }
    };
    // Select Specific Audio Device
    const handleSelectDevice = async (deviceId, label, type)=>{
        setAudioOutputError(null);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$audioOutput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routeAudioOutput"])(remoteAudioRef.current, roomRef.current, deviceId);
            setIsSpeaker(type === 'speaker');
            setActiveDeviceId(deviceId);
            setActiveDeviceLabel(label);
            setShowDeviceMenu(false);
        } catch (err) {
            console.warn('[GroupVideoCall] Error selecting audio output:', err);
            setAudioOutputError(`Could not route to ${label}`);
        }
    };
    // Call Duration Timer: starts only when participants are connected in room
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GroupVideoCall.useEffect": ()=>{
            if (!isConnectedToRoom || connectedParticipantIds.size === 0) return;
            const timer = setInterval({
                "GroupVideoCall.useEffect.timer": ()=>{
                    setSeconds({
                        "GroupVideoCall.useEffect.timer": (s)=>{
                            const next = s + 1;
                            secondsRef.current = next;
                            return next;
                        }
                    }["GroupVideoCall.useEffect.timer"]);
                }
            }["GroupVideoCall.useEffect.timer"], 1000);
            return ({
                "GroupVideoCall.useEffect": ()=>clearInterval(timer)
            })["GroupVideoCall.useEffect"];
        }
    }["GroupVideoCall.useEffect"], [
        isConnectedToRoom,
        connectedParticipantIds.size
    ]);
    const formatTime = (totalSeconds)=>{
        const m = Math.floor(totalSeconds / 60);
        const s = totalSeconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };
    const isCallConnected = isConnectedToRoom && (connectedParticipantIds.size > 0 || isAccepted);
    const isConnecting = (isAccepted || isConnectedToRoom) && (!isConnectedToRoom || connectedParticipantIds.size === 0);
    const hasBluetooth = availableOutputs.some((d)=>d.type === 'bluetooth');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-236de790bb1e1f1e" + " " + "fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md overflow-hidden select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "236de790bb1e1f1e",
                children: "video::-webkit-media-controls{display:none!important}video::-webkit-media-controls-enclosure{display:none!important}video::-webkit-media-controls-play-button{display:none!important}video::-webkit-media-controls-start-playback-button{display:none!important}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: remoteAudioRef,
                autoPlay: true,
                playsInline: true,
                className: "jsx-236de790bb1e1f1e" + " " + "hidden"
            }, void 0, false, {
                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                lineNumber: 620,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-236de790bb1e1f1e" + " " + "w-full h-[100dvh] sm:h-[88vh] sm:max-w-4xl sm:rounded-3xl shadow-2xl relative overflow-hidden bg-[#0c1317] flex flex-col justify-between",
                children: [
                    (permissionError || audioOutputError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            paddingTop: 'max(env(safe-area-inset-top, 0px), 48px)',
                            paddingBottom: '12px'
                        },
                        className: "jsx-236de790bb1e1f1e" + " " + "absolute top-0 inset-x-0 z-50 bg-amber-600/95 backdrop-blur-md text-white text-xs px-4 text-center font-medium shadow-lg flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-2 truncate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        size: 15,
                                        className: "shrink-0 text-amber-200"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 635,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "truncate",
                                        children: permissionError || audioOutputError
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 636,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                lineNumber: 634,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setPermissionError(null);
                                    setAudioOutputError(null);
                                },
                                title: "Dismiss",
                                className: "jsx-236de790bb1e1f1e" + " " + "p-1 font-bold opacity-80 hover:opacity-100 rounded-md hover:bg-white/10",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                lineNumber: 638,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                        lineNumber: 627,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        style: {
                            paddingTop: permissionError || audioOutputError ? 'calc(max(env(safe-area-inset-top, 0px), 48px) + 48px)' : 'max(env(safe-area-inset-top, 0px), 48px)'
                        },
                        className: "jsx-236de790bb1e1f1e" + " " + "relative z-30 w-full flex items-center justify-between px-4 sm:px-6 shrink-0 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-2.5 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-lg max-w-[65%]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-236de790bb1e1f1e" + " " + `w-2 h-2 rounded-full shrink-0 ${isCallConnected && connectedParticipantIds.size > 0 ? 'bg-emerald-400 animate-pulse' : isConnecting ? 'bg-cyan-400 animate-pulse' : 'bg-amber-400 animate-ping'}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 661,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "text-white font-semibold text-xs sm:text-sm truncate",
                                        children: chatName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 667,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "text-white/40 text-xs",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 670,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-236de790bb1e1f1e" + " " + `font-mono text-xs ${isCallConnected && connectedParticipantIds.size > 0 ? 'text-emerald-400 font-medium' : isConnecting ? 'text-cyan-400 font-medium' : 'text-slate-300'}`,
                                        children: isConnecting ? "Connecting..." : isCallConnected && connectedParticipantIds.size > 0 ? formatTime(seconds) : !isRingingStatus ? "Calling group..." : "Ringing..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 671,
                                        columnNumber: 13
                                    }, this),
                                    groupMembers.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowMembersDrawer(!showMembersDrawer),
                                        className: "jsx-236de790bb1e1f1e" + " " + "ml-1 text-[11px] bg-white/15 hover:bg-white/25 text-white px-2 py-0.5 rounded-full font-medium transition flex items-center gap-1 active:scale-95",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                size: 11
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                lineNumber: 688,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-236de790bb1e1f1e",
                                                children: [
                                                    connectedParticipantIds.size + 1,
                                                    "/",
                                                    groupMembers.length
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                lineNumber: 689,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 684,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                lineNumber: 660,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            if (availableOutputs.length > 1) {
                                                setShowDeviceMenu(!showDeviceMenu);
                                            } else {
                                                handleToggleSpeaker();
                                            }
                                        },
                                        title: "Change Audio Device",
                                        className: "jsx-236de790bb1e1f1e" + " " + `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-md border transition shadow-md ${hasBluetooth ? 'bg-blue-600/80 text-white border-blue-400/40 hover:bg-blue-600' : isSpeaker ? 'bg-white/15 text-white border-white/20 hover:bg-white/25' : 'bg-black/50 text-slate-300 border-white/10'}`,
                                        children: [
                                            hasBluetooth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__["Bluetooth"], {
                                                size: 14,
                                                className: "text-blue-200"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                lineNumber: 714,
                                                columnNumber: 17
                                            }, this) : isSpeaker ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                size: 14,
                                                className: "text-emerald-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                lineNumber: 716,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                                size: 14,
                                                className: "text-slate-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                lineNumber: 718,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-236de790bb1e1f1e" + " " + "max-w-[70px] sm:max-w-[100px] truncate hidden xs:inline",
                                                children: hasBluetooth ? 'Bluetooth' : isSpeaker ? 'Speaker' : 'Phone'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                lineNumber: 720,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 12,
                                                className: "opacity-70"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                lineNumber: 723,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 697,
                                        columnNumber: 13
                                    }, this),
                                    !isVideoOff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSwitchCamera,
                                        disabled: isSwitchingCamera,
                                        title: `Switch Camera (${facingMode === 'user' ? 'Front' : 'Back'})`,
                                        className: "jsx-236de790bb1e1f1e" + " " + "w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center border border-white/15 transition backdrop-blur-md shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$switch$2d$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SwitchCamera$3e$__["SwitchCamera"], {
                                            size: 15,
                                            className: isSwitchingCamera ? 'animate-spin' : ''
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                            lineNumber: 734,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 728,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                lineNumber: 695,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                        lineNumber: 651,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-236de790bb1e1f1e" + " " + "absolute inset-0 z-10 flex items-center justify-center bg-black overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: remoteVideoRef,
                                autoPlay: true,
                                playsInline: true,
                                muted: true,
                                onPlaying: ()=>setIsRemoteVideoReady(true),
                                onLoadedMetadata: ()=>{
                                    var _remoteVideoRef_current;
                                    (_remoteVideoRef_current = remoteVideoRef.current) === null || _remoteVideoRef_current === void 0 ? void 0 : _remoteVideoRef_current.play().catch(()=>{});
                                    setIsRemoteVideoReady(true);
                                },
                                style: {
                                    transform: 'translateZ(0)',
                                    willChange: 'transform'
                                },
                                className: "jsx-236de790bb1e1f1e" + " " + `w-full h-full object-cover bg-black transition-opacity duration-300 ${isRemoteVideoReady ? 'block opacity-100' : 'hidden opacity-0'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                lineNumber: 745,
                                columnNumber: 11
                            }, this),
                            !isRemoteVideoReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-236de790bb1e1f1e" + " " + "absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#091017] to-[#04080c] flex flex-col items-center justify-center px-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "relative flex items-center justify-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    animationDuration: '3.2s'
                                                },
                                                className: "jsx-236de790bb1e1f1e" + " " + "absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full border border-emerald-500/25 animate-ping pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                lineNumber: 765,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    animationDuration: '2s'
                                                },
                                                className: "jsx-236de790bb1e1f1e" + " " + "absolute w-40 h-40 sm:w-44 sm:h-44 rounded-full border-2 border-emerald-400/40 animate-pulse pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                lineNumber: 769,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-236de790bb1e1f1e" + " " + "absolute w-36 h-36 rounded-full bg-emerald-500/20 blur-xl pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                lineNumber: 773,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-236de790bb1e1f1e" + " " + "w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white/20 shadow-[0_0_50px_rgba(16,185,129,0.35)] relative bg-[#1e293b] flex items-center justify-center z-10",
                                                children: resolvedAvatar && !avatarError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: resolvedAvatar,
                                                    alt: chatName,
                                                    onError: ()=>setAvatarError(true),
                                                    className: "jsx-236de790bb1e1f1e" + " " + "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                    lineNumber: 778,
                                                    columnNumber: 21
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-236de790bb1e1f1e" + " " + "w-full h-full bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-600 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold select-none tracking-wider shadow-inner",
                                                    children: initials
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                    lineNumber: 785,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                lineNumber: 776,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 764,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "text-2xl sm:text-3xl font-bold text-white tracking-wide text-center truncate max-w-xs sm:max-w-md",
                                        children: chatName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 793,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                size: 13,
                                                className: "text-emerald-400"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                lineNumber: 799,
                                                columnNumber: 17
                                            }, this),
                                            "Group Video Call"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 798,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "mt-3 flex items-center justify-center gap-2",
                                        children: busyMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-236de790bb1e1f1e" + " " + "text-sm font-semibold text-red-400 tracking-wide text-center",
                                            children: busyMessage
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                            lineNumber: 806,
                                            columnNumber: 19
                                        }, this) : isConnecting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-2 text-cyan-300 text-sm font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    size: 16,
                                                    className: "animate-spin text-cyan-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                    lineNumber: 809,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-236de790bb1e1f1e",
                                                    children: "Connecting..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                    lineNumber: 810,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                            lineNumber: 808,
                                            columnNumber: 19
                                        }, this) : connectedParticipantIds.size > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-2 text-slate-300 text-sm font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                                    size: 16,
                                                    className: "text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                    lineNumber: 814,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-236de790bb1e1f1e",
                                                    children: "Waiting for video..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                    lineNumber: 815,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                            lineNumber: 813,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-236de790bb1e1f1e" + " " + "text-sm font-medium tracking-wide text-center text-slate-300 animate-pulse",
                                            children: !isRingingStatus ? "Calling group..." : "Ringing..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                            lineNumber: 818,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 804,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "mt-5 flex items-center gap-2 text-[11px] text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10",
                                        children: hasBluetooth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__["Bluetooth"], {
                                                    size: 13,
                                                    className: "text-blue-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                    lineNumber: 828,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-236de790bb1e1f1e",
                                                    children: [
                                                        "Audio: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "jsx-236de790bb1e1f1e" + " " + "text-slate-200",
                                                            children: activeDeviceLabel
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                            lineNumber: 829,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                    lineNumber: 829,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                    size: 13,
                                                    className: "text-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                    lineNumber: 833,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-236de790bb1e1f1e",
                                                    children: [
                                                        "Audio: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "jsx-236de790bb1e1f1e" + " " + "text-slate-200",
                                                            children: "Speakerphone"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                            lineNumber: 834,
                                                            columnNumber: 34
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                    lineNumber: 834,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 825,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                lineNumber: 761,
                                columnNumber: 13
                            }, this),
                            showMembersDrawer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    top: permissionError || audioOutputError ? 'calc(max(env(safe-area-inset-top, 0px), 48px) + 96px)' : 'calc(max(env(safe-area-inset-top, 0px), 48px) + 54px)'
                                },
                                className: "jsx-236de790bb1e1f1e" + " " + "absolute z-40 w-72 bg-[#161f26]/95 backdrop-blur-xl rounded-[10px] p-4 border border-white/15 shadow-2xl space-y-3 animate-in fade-in zoom-in-95 duration-200 left-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "flex items-center justify-between border-b border-white/10 pb-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-236de790bb1e1f1e" + " " + "text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        size: 13,
                                                        className: "text-blue-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                        lineNumber: 853,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Group Participants (",
                                                    groupMembers.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                lineNumber: 852,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowMembersDrawer(false),
                                                className: "jsx-236de790bb1e1f1e" + " " + "w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-xs",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                    lineNumber: 860,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                lineNumber: 856,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 851,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "max-h-56 overflow-y-auto space-y-2 pr-1 no-scrollbar",
                                        children: groupMembers.map((m)=>{
                                            var _m_fullName;
                                            const isSelf = Number(m.id) === Number(user === null || user === void 0 ? void 0 : user.id);
                                            const isConnected = isSelf || connectedParticipantIds.has(String(m.id)) || connectedParticipantIds.has(String(Number(m.id)));
                                            const memberAvatar = m.avatar ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(m.avatar) : undefined;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-236de790bb1e1f1e" + " " + "flex items-center justify-between text-xs py-1 px-1 rounded-lg hover:bg-white/5 transition",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-2 min-w-0 flex-1",
                                                        children: [
                                                            memberAvatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: memberAvatar,
                                                                alt: m.fullName,
                                                                className: "jsx-236de790bb1e1f1e" + " " + "w-7 h-7 rounded-full object-cover shrink-0 border border-white/20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                                lineNumber: 874,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-236de790bb1e1f1e" + " " + "w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-[11px] shrink-0",
                                                                children: (_m_fullName = m.fullName) === null || _m_fullName === void 0 ? void 0 : _m_fullName.substring(0, 1).toUpperCase()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                                lineNumber: 876,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-236de790bb1e1f1e" + " " + "text-white font-medium truncate",
                                                                children: [
                                                                    m.fullName,
                                                                    " ",
                                                                    isSelf && "(You)"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                                lineNumber: 880,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                        lineNumber: 872,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-1.5 shrink-0 ml-2",
                                                        children: isConnected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-1 text-emerald-400 font-medium text-[11px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-236de790bb1e1f1e" + " " + "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                                    lineNumber: 888,
                                                                    columnNumber: 29
                                                                }, this),
                                                                "Connected"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                            lineNumber: 887,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-1 text-slate-400 font-normal text-[11px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-236de790bb1e1f1e" + " " + "w-1.5 h-1.5 rounded-full bg-slate-500"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                                    lineNumber: 893,
                                                                    columnNumber: 29
                                                                }, this),
                                                                "Offline"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                            lineNumber: 892,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                        lineNumber: 885,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, m.id, true, {
                                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                lineNumber: 871,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 864,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                lineNumber: 843,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                        lineNumber: 743,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            top: permissionError || audioOutputError ? 'calc(max(env(safe-area-inset-top, 0px), 48px) + 96px)' : 'calc(max(env(safe-area-inset-top, 0px), 48px) + 54px)'
                        },
                        className: "jsx-236de790bb1e1f1e" + " " + "absolute z-30 w-28 h-40 sm:w-36 sm:h-52 rounded-[10px] overflow-hidden shadow-2xl border-2 border-white/20 bg-[#162026] right-4 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                ref: localVideoRef,
                                autoPlay: true,
                                playsInline: true,
                                muted: true,
                                style: {
                                    transform: facingMode === 'user' ? 'scaleX(-1) translateZ(0)' : 'none',
                                    willChange: 'transform'
                                },
                                className: "jsx-236de790bb1e1f1e" + " " + `w-full h-full object-cover ${isVideoOff || !isLocalVideoReady ? 'hidden' : 'block'}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                lineNumber: 919,
                                columnNumber: 11
                            }, this),
                            !isVideoOff && !isLocalVideoReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-236de790bb1e1f1e" + " " + "w-full h-full flex flex-col items-center justify-center bg-[#131b20] text-slate-400 p-2 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "w-5 h-5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin mb-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 931,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "text-[10px] leading-tight",
                                        children: "Starting camera..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 932,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                lineNumber: 930,
                                columnNumber: 13
                            }, this),
                            isVideoOff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-236de790bb1e1f1e" + " " + "w-full h-full flex flex-col items-center justify-center bg-[#162026] text-white/50 p-2 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                        size: 22,
                                        className: "text-slate-400 mb-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 939,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-236de790bb1e1f1e" + " " + "text-[10px] text-slate-300",
                                        children: "Camera Off"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 940,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                lineNumber: 938,
                                columnNumber: 13
                            }, this),
                            !isVideoOff && isLocalVideoReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    handleSwitchCamera();
                                },
                                disabled: isSwitchingCamera,
                                title: "Flip Camera",
                                className: "jsx-236de790bb1e1f1e" + " " + "absolute bottom-2 right-2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/20 active:scale-90 transition hover:bg-black/80",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$switch$2d$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SwitchCamera$3e$__["SwitchCamera"], {
                                    size: 13,
                                    className: isSwitchingCamera ? 'animate-spin' : ''
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                    lineNumber: 955,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                lineNumber: 946,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                        lineNumber: 910,
                        columnNumber: 9
                    }, this),
                    showDeviceMenu && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-236de790bb1e1f1e" + " " + "absolute inset-0 z-40 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginBottom: 'max(env(safe-area-inset-bottom, 0px), 16px)'
                            },
                            className: "jsx-236de790bb1e1f1e" + " " + "w-full max-w-xs bg-[#161f26]/95 backdrop-blur-xl border border-white/15 rounded-3xl p-4 shadow-2xl animate-in fade-in slide-in-from-bottom duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-236de790bb1e1f1e" + " " + "flex items-center justify-between pb-3 mb-2 border-b border-white/10 text-sm font-semibold text-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                    size: 16,
                                                    className: "text-emerald-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                    lineNumber: 971,
                                                    columnNumber: 19
                                                }, this),
                                                "Select Audio Output"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                            lineNumber: 970,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowDeviceMenu(false),
                                            className: "jsx-236de790bb1e1f1e" + " " + "w-6 h-6 rounded-full bg-white/10 text-white/70 hover:text-white flex items-center justify-center text-xs",
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                            lineNumber: 974,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                    lineNumber: 969,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-236de790bb1e1f1e" + " " + "space-y-1.5 max-h-56 overflow-y-auto pr-1",
                                    children: availableOutputs.map((dev)=>{
                                        const isSelected = activeDeviceId !== 'default' ? dev.deviceId === activeDeviceId : isSpeaker ? dev.type === 'speaker' : dev.label === activeDeviceLabel || dev.isDefault;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleSelectDevice(dev.deviceId, dev.label, dev.type),
                                            className: "jsx-236de790bb1e1f1e" + " " + `w-full text-left px-3.5 py-2.5 rounded-xl text-xs flex items-center justify-between transition ${isSelected ? 'bg-emerald-600 text-white font-medium shadow-md' : 'bg-white/5 text-slate-200 hover:bg-white/10'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-2 truncate mr-2",
                                                    children: [
                                                        dev.type === 'bluetooth' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__["Bluetooth"], {
                                                            size: 15,
                                                            className: isSelected ? 'text-white' : 'text-blue-400'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                            lineNumber: 999,
                                                            columnNumber: 27
                                                        }, this) : dev.type === 'speaker' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                                            size: 15,
                                                            className: isSelected ? 'text-white' : 'text-emerald-400'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                            lineNumber: 1001,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                                            size: 15,
                                                            className: isSelected ? 'text-white' : 'text-slate-400'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                            lineNumber: 1003,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-236de790bb1e1f1e" + " " + "truncate",
                                                            children: dev.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                            lineNumber: 1005,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                    lineNumber: 997,
                                                    columnNumber: 23
                                                }, this),
                                                isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-236de790bb1e1f1e" + " " + "text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold",
                                                    children: "Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                                    lineNumber: 1008,
                                                    columnNumber: 25
                                                }, this)
                                            ]
                                        }, dev.deviceId || dev.label, true, {
                                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                            lineNumber: 989,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                    lineNumber: 982,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                            lineNumber: 965,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                        lineNumber: 964,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        style: {
                            paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 24px)'
                        },
                        className: "jsx-236de790bb1e1f1e" + " " + "relative z-30 w-full flex flex-col items-center justify-center shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-236de790bb1e1f1e" + " " + "flex items-center gap-3 sm:gap-4 bg-[#0a1014]/90 backdrop-blur-xl px-5 sm:px-8 py-3 rounded-full border border-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.6)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleToggleMute,
                                    title: isMuted ? "Unmute Mic" : "Mute Mic",
                                    className: "jsx-236de790bb1e1f1e" + " " + `w-12 h-12 rounded-full flex items-center justify-center transition shadow-md active:scale-95 ${isMuted ? 'bg-amber-500 text-white shadow-amber-500/30' : 'bg-white/10 text-white hover:bg-white/20'}`,
                                    children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MicOff$3e$__["MicOff"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 1039,
                                        columnNumber: 26
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 1039,
                                        columnNumber: 49
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                    lineNumber: 1031,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleToggleVideo,
                                    title: isVideoOff ? "Turn On Camera" : "Turn Off Camera",
                                    className: "jsx-236de790bb1e1f1e" + " " + `w-12 h-12 rounded-full flex items-center justify-center transition shadow-md active:scale-95 ${isVideoOff ? 'bg-amber-500 text-white shadow-amber-500/30' : 'bg-white/10 text-white hover:bg-white/20'}`,
                                    children: isVideoOff ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__VideoOff$3e$__["VideoOff"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 1051,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 1051,
                                        columnNumber: 54
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                    lineNumber: 1043,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSwitchCamera,
                                    disabled: isVideoOff || isSwitchingCamera,
                                    title: "Flip Camera (Front/Rear)",
                                    className: "jsx-236de790bb1e1f1e" + " " + `w-12 h-12 rounded-full flex items-center justify-center transition shadow-md active:scale-95 ${isVideoOff ? 'bg-white/5 text-white/30 cursor-not-allowed' : 'bg-white/10 text-white hover:bg-white/20'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$switch$2d$camera$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SwitchCamera$3e$__["SwitchCamera"], {
                                        size: 20,
                                        className: isSwitchingCamera ? 'animate-spin' : ''
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 1064,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                    lineNumber: 1055,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (availableOutputs.length > 1) {
                                            setShowDeviceMenu(!showDeviceMenu);
                                        } else {
                                            handleToggleSpeaker();
                                        }
                                    },
                                    title: isSpeaker ? `Speaker Active (${activeDeviceLabel})` : `Audio Output (${activeDeviceLabel})`,
                                    className: "jsx-236de790bb1e1f1e" + " " + `w-12 h-12 rounded-full flex items-center justify-center transition shadow-md active:scale-95 ${hasBluetooth ? 'bg-blue-600 text-white shadow-blue-500/30' : isSpeaker ? 'bg-white/15 text-white hover:bg-white/25' : 'bg-white/10 text-slate-300 hover:bg-white/20'}`,
                                    children: hasBluetooth ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bluetooth$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bluetooth$3e$__["Bluetooth"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 1085,
                                        columnNumber: 17
                                    }, this) : isSpeaker ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$volume$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Volume2$3e$__["Volume2"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 1087,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 1089,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                    lineNumber: 1068,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSafeClose(secondsRef.current),
                                    title: "Leave Call",
                                    className: "jsx-236de790bb1e1f1e" + " " + "w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.6)] transition hover:scale-105 active:scale-90",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2d$off$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneOff$3e$__["PhoneOff"], {
                                        size: 24,
                                        className: "text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                        lineNumber: 1099,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                                    lineNumber: 1094,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                            lineNumber: 1028,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                        lineNumber: 1023,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
                lineNumber: 623,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/call/p2g/GroupVideoCall.tsx",
        lineNumber: 611,
        columnNumber: 5
    }, this);
}
_s(GroupVideoCall, "LFfL7GyQ4r4/b7wNL9vn3MwBdyc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = GroupVideoCall;
var _c;
__turbopack_context__.k.register(_c, "GroupVideoCall");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/call/context/CallContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// Call Context & State Provider (P2P Direct & P2G Group Calls)
// ============================================================
__turbopack_context__.s([
    "CallProvider",
    ()=>CallProvider,
    "useCallContext",
    ()=>useCallContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const CallContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function useCallContext() {
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CallContext);
    if (!context) {
        throw new Error('useCallContext must be used within a CallProvider');
    }
    return context;
}
_s(useCallContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function CallProvider({ children }) {
    _s1();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [socket, setSocket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeCall, setActiveCall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [incomingCall, setIncomingCall] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeCallRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(activeCall);
    const incomingCallRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(incomingCall);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CallProvider.useEffect": ()=>{
            activeCallRef.current = activeCall;
        }
    }["CallProvider.useEffect"], [
        activeCall
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CallProvider.useEffect": ()=>{
            incomingCallRef.current = incomingCall;
        }
    }["CallProvider.useEffect"], [
        incomingCall
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CallProvider.useEffect": ()=>{
            if (!socket) return;
            const onIncoming = {
                "CallProvider.useEffect.onIncoming": (data)=>{
                    if (activeCallRef.current || incomingCallRef.current) {
                        socket.emit('call:busy', {
                            targetUserId: data.fromUserId,
                            fromUserId: user === null || user === void 0 ? void 0 : user.id,
                            roomId: data.roomId,
                            callType: data.callType,
                            reason: 'already_in_call',
                            message: 'User is on another call'
                        });
                        return;
                    }
                    setIncomingCall({
                        targetUserId: data.fromUserId,
                        roomId: data.roomId,
                        callType: data.callType,
                        callerName: data.callerName,
                        callerAvatar: data.callerAvatar,
                        isIncoming: true,
                        isSilenced: !!data.isSilenced,
                        isUnknownCaller: !!data.isUnknownCaller,
                        isGroup: !!data.isGroup
                    });
                    socket.emit('call:ringing', {
                        targetUserId: data.fromUserId
                    });
                }
            }["CallProvider.useEffect.onIncoming"];
            const onRinging = {
                "CallProvider.useEffect.onRinging": (data)=>{
                    setActiveCall({
                        "CallProvider.useEffect.onRinging": (prev)=>{
                            if (prev && String(prev.targetUserId) === String(data.fromUserId)) {
                                return {
                                    ...prev,
                                    isRingingStatus: true
                                };
                            }
                            return prev;
                        }
                    }["CallProvider.useEffect.onRinging"]);
                }
            }["CallProvider.useEffect.onRinging"];
            const onEnded = {
                "CallProvider.useEffect.onEnded": ()=>{
                    setActiveCall(null);
                    setIncomingCall(null);
                }
            }["CallProvider.useEffect.onEnded"];
            const onRejected = {
                "CallProvider.useEffect.onRejected": ()=>{
                    setActiveCall(null);
                    setIncomingCall(null);
                }
            }["CallProvider.useEffect.onRejected"];
            const onAccepted = {
                "CallProvider.useEffect.onAccepted": ()=>{
                    setActiveCall({
                        "CallProvider.useEffect.onAccepted": (prev)=>prev ? {
                                ...prev,
                                isAccepted: true
                            } : null
                    }["CallProvider.useEffect.onAccepted"]);
                }
            }["CallProvider.useEffect.onAccepted"];
            const onBusy = {
                "CallProvider.useEffect.onBusy": (data)=>{
                    const msg = (data === null || data === void 0 ? void 0 : data.message) || 'User is on another call';
                    __turbopack_context__.A("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript, async loader)").then({
                        "CallProvider.useEffect.onBusy": ({ toast })=>{
                            toast.error(`🔴 ${msg}`, {
                                id: 'call-busy-notice',
                                duration: 4500
                            });
                        }
                    }["CallProvider.useEffect.onBusy"]);
                    setActiveCall({
                        "CallProvider.useEffect.onBusy": (prev)=>prev ? {
                                ...prev,
                                busyMessage: msg
                            } : null
                    }["CallProvider.useEffect.onBusy"]);
                    setTimeout({
                        "CallProvider.useEffect.onBusy": ()=>{
                            setActiveCall(null);
                            setIncomingCall(null);
                        }
                    }["CallProvider.useEffect.onBusy"], 3000);
                }
            }["CallProvider.useEffect.onBusy"];
            const onMissed = {
                "CallProvider.useEffect.onMissed": (data)=>{
                    __turbopack_context__.A("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript, async loader)").then({
                        "CallProvider.useEffect.onMissed": ({ toast })=>{
                            toast.info((data === null || data === void 0 ? void 0 : data.reason) === 'timeout' ? '📞 Call unanswered (timeout)' : '📞 Missed call', {
                                id: 'call-missed-notice',
                                duration: 4000
                            });
                        }
                    }["CallProvider.useEffect.onMissed"]);
                    setActiveCall(null);
                    setIncomingCall(null);
                }
            }["CallProvider.useEffect.onMissed"];
            const onAnsweredElsewhere = {
                "CallProvider.useEffect.onAnsweredElsewhere": ()=>{
                    setIncomingCall(null);
                    setActiveCall(null);
                }
            }["CallProvider.useEffect.onAnsweredElsewhere"];
            const onGroupEnded = {
                "CallProvider.useEffect.onGroupEnded": (data)=>{
                    var _activeCallRef_current, _incomingCallRef_current;
                    if (Number((_activeCallRef_current = activeCallRef.current) === null || _activeCallRef_current === void 0 ? void 0 : _activeCallRef_current.roomId) === Number(data === null || data === void 0 ? void 0 : data.roomId) || Number((_incomingCallRef_current = incomingCallRef.current) === null || _incomingCallRef_current === void 0 ? void 0 : _incomingCallRef_current.roomId) === Number(data === null || data === void 0 ? void 0 : data.roomId)) {
                        setActiveCall(null);
                        setIncomingCall(null);
                    }
                }
            }["CallProvider.useEffect.onGroupEnded"];
            socket.on('call:incoming', onIncoming);
            socket.on('call:ringing', onRinging);
            socket.on('call:accepted', onAccepted);
            socket.on('call:ended', onEnded);
            socket.on('call:rejected', onRejected);
            socket.on('call:busy', onBusy);
            socket.on('call:missed', onMissed);
            socket.on('call:answered_elsewhere', onAnsweredElsewhere);
            socket.on('call:group_ended', onGroupEnded);
            return ({
                "CallProvider.useEffect": ()=>{
                    socket.off('call:incoming', onIncoming);
                    socket.off('call:ringing', onRinging);
                    socket.off('call:accepted', onAccepted);
                    socket.off('call:ended', onEnded);
                    socket.off('call:rejected', onRejected);
                    socket.off('call:busy', onBusy);
                    socket.off('call:missed', onMissed);
                    socket.off('call:answered_elsewhere', onAnsweredElsewhere);
                    socket.off('call:group_ended', onGroupEnded);
                }
            })["CallProvider.useEffect"];
        }
    }["CallProvider.useEffect"], [
        socket
    ]);
    // Initiate P2P 1-on-1 Call
    const initiateCall = (targetUserId, roomId, callType, calleeName, calleeAvatar)=>{
        if (!socket) {
            console.warn("[CallContext] Cannot initiate call: socket is not connected");
            return;
        }
        const localData = {
            targetUserId,
            roomId,
            callType,
            callerName: calleeName,
            callerAvatar: calleeAvatar,
            isIncoming: false,
            isGroup: false,
            isRingingStatus: false
        };
        setActiveCall(localData);
        const myName = (user === null || user === void 0 ? void 0 : user.full_name) || (user === null || user === void 0 ? void 0 : user.username) || 'Someone';
        socket.emit('call:initiate', {
            targetUserId,
            roomId,
            callType,
            callerName: myName,
            callerAvatar: user === null || user === void 0 ? void 0 : user.avatar,
            fromUserId: user === null || user === void 0 ? void 0 : user.id
        });
    };
    // Initiate P2G Group Call
    const initiateGroupCall = (roomId, callType, groupName, groupAvatar)=>{
        if (!socket) {
            console.warn("[CallContext] Cannot initiate group call: socket is not connected");
            return;
        }
        const localData = {
            targetUserId: 0,
            roomId,
            callType,
            callerName: groupName,
            callerAvatar: groupAvatar,
            isIncoming: false,
            isAccepted: true,
            isGroup: true
        };
        setActiveCall(localData);
        const myName = (user === null || user === void 0 ? void 0 : user.full_name) || (user === null || user === void 0 ? void 0 : user.username) || 'Someone';
        socket.emit('call:initiate_group', {
            roomId,
            callType,
            callerName: `${myName} (${groupName})`,
            callerAvatar: user === null || user === void 0 ? void 0 : user.avatar,
            fromUserId: user === null || user === void 0 ? void 0 : user.id,
            isGroup: true
        });
    };
    const acceptCall = ()=>{
        if (!incomingCall || !socket) return;
        const currentIncoming = incomingCall;
        socket.emit('call:accept', {
            targetUserId: currentIncoming.targetUserId,
            fromUserId: user === null || user === void 0 ? void 0 : user.id,
            isGroup: currentIncoming.isGroup,
            roomId: currentIncoming.roomId
        });
        setActiveCall({
            ...currentIncoming,
            isAccepted: true
        });
        setIncomingCall(null);
    };
    const rejectCall = ()=>{
        if (!incomingCall || !socket) return;
        const isGroup = Boolean(incomingCall.isGroup);
        if (isGroup) {
            socket.emit('call:reject_group', {
                roomId: incomingCall.roomId,
                fromUserId: user === null || user === void 0 ? void 0 : user.id,
                callerId: incomingCall.targetUserId,
                callType: incomingCall.callType
            });
        } else {
            socket.emit('call:reject', {
                targetUserId: incomingCall.targetUserId,
                fromUserId: user === null || user === void 0 ? void 0 : user.id,
                roomId: incomingCall.roomId,
                callType: incomingCall.callType
            });
        }
        setIncomingCall(null);
    };
    const endCall = (duration = 0)=>{
        const isGroup = Boolean((activeCall === null || activeCall === void 0 ? void 0 : activeCall.isGroup) || (incomingCall === null || incomingCall === void 0 ? void 0 : incomingCall.isGroup));
        const targetUserId = (activeCall === null || activeCall === void 0 ? void 0 : activeCall.targetUserId) || (incomingCall === null || incomingCall === void 0 ? void 0 : incomingCall.targetUserId) || 0;
        const isCaller = !(activeCall === null || activeCall === void 0 ? void 0 : activeCall.isIncoming);
        const callerId = (activeCall === null || activeCall === void 0 ? void 0 : activeCall.isIncoming) ? activeCall.targetUserId : user === null || user === void 0 ? void 0 : user.id;
        const roomId = (activeCall === null || activeCall === void 0 ? void 0 : activeCall.roomId) || (incomingCall === null || incomingCall === void 0 ? void 0 : incomingCall.roomId);
        const callType = (activeCall === null || activeCall === void 0 ? void 0 : activeCall.callType) || (incomingCall === null || incomingCall === void 0 ? void 0 : incomingCall.callType);
        if (socket && (targetUserId || roomId)) {
            if (isGroup) {
                socket.emit('call:end_group', {
                    roomId,
                    fromUserId: user === null || user === void 0 ? void 0 : user.id,
                    callType,
                    duration: Number(duration) || 0,
                    isCaller,
                    callerId
                });
            } else if (targetUserId) {
                socket.emit('call:end', {
                    targetUserId,
                    fromUserId: user === null || user === void 0 ? void 0 : user.id,
                    roomId,
                    callType,
                    duration: Number(duration) || 0,
                    isCaller,
                    callerId
                });
            }
        }
        setActiveCall(null);
        setIncomingCall(null);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CallProvider.useEffect": ()=>{
            const handleNativeAccept = {
                "CallProvider.useEffect.handleNativeAccept": ()=>{
                    acceptCall();
                }
            }["CallProvider.useEffect.handleNativeAccept"];
            const handleNativeDecline = {
                "CallProvider.useEffect.handleNativeDecline": (e)=>{
                    var _e_detail;
                    const targetUserId = (_e_detail = e.detail) === null || _e_detail === void 0 ? void 0 : _e_detail.targetUserId;
                    if (targetUserId && socket) {
                        var _incomingCallRef_current, _incomingCallRef_current1;
                        socket.emit('call:reject', {
                            targetUserId,
                            fromUserId: user === null || user === void 0 ? void 0 : user.id,
                            roomId: (_incomingCallRef_current = incomingCallRef.current) === null || _incomingCallRef_current === void 0 ? void 0 : _incomingCallRef_current.roomId,
                            callType: (_incomingCallRef_current1 = incomingCallRef.current) === null || _incomingCallRef_current1 === void 0 ? void 0 : _incomingCallRef_current1.callType
                        });
                    } else {
                        rejectCall();
                    }
                }
            }["CallProvider.useEffect.handleNativeDecline"];
            window.addEventListener('acceptIncomingCall', handleNativeAccept);
            window.addEventListener('declineIncomingCall', handleNativeDecline);
            return ({
                "CallProvider.useEffect": ()=>{
                    window.removeEventListener('acceptIncomingCall', handleNativeAccept);
                    window.removeEventListener('declineIncomingCall', handleNativeDecline);
                }
            })["CallProvider.useEffect"];
        }
    }["CallProvider.useEffect"], [
        incomingCall,
        socket,
        user
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CallContext.Provider, {
        value: {
            activeCall,
            incomingCall,
            initiateCall,
            initiateGroupCall,
            acceptCall,
            rejectCall,
            endCall,
            socket,
            setSocket
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/call/context/CallContext.tsx",
        lineNumber: 313,
        columnNumber: 5
    }, this);
}
_s1(CallProvider, "4cKbBZhMKVI+yxTe6keJHgGBe4w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = CallProvider;
var _c;
__turbopack_context__.k.register(_c, "CallProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/call/ui/IncomingCallModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IncomingCallModal",
    ()=>IncomingCallModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.mjs [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function IncomingCallModal({ incomingCall, onAccept, onReject }) {
    _s();
    const isVideo = incomingCall.callType === 'video';
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const rawAvatar = incomingCall.callerAvatar;
    const resolvedAvatar = rawAvatar ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(rawAvatar) : undefined;
    const initials = (incomingCall.callerName || "User").trim().substring(0, 2).toUpperCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#111b21] p-8 flex flex-col items-center animate-in zoom-in-95 duration-300 border border-[#2d3139] shadow-2xl w-80 rounded-[10px]",
            style: {
                borderRadius: '10px'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#202c33] relative shrink-0 bg-[#202c33] flex items-center justify-center",
                    children: resolvedAvatar && !imgError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: resolvedAvatar,
                        alt: incomingCall.callerName,
                        className: "w-full h-full object-cover",
                        onError: ()=>setImgError(true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full bg-[#00a884] flex items-center justify-center text-white text-3xl font-semibold select-none",
                        children: initials
                    }, void 0, false, {
                        fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
                        lineNumber: 37,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl text-white font-semibold mb-1 text-center truncate w-full",
                    children: incomingCall.callerName
                }, void 0, false, {
                    fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                incomingCall.isSilenced ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 text-center space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold",
                            children: "🔕 Silenced Unknown Caller"
                        }, void 0, false, {
                            fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-gray-400",
                            children: "Ringtone muted by your Silence Unknown Callers setting"
                        }, void 0, false, {
                            fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[#8696a0] mb-8 text-sm flex items-center gap-2",
                    children: [
                        isVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                            size: 16,
                            className: "text-blue-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
                            lineNumber: 58,
                            columnNumber: 24
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                            size: 16,
                            className: "text-emerald-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
                            lineNumber: 58,
                            columnNumber: 72
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "Incoming ",
                                isVideo ? 'Video' : 'Voice',
                                " Call..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
                            lineNumber: 59,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between w-full px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onReject,
                            className: "w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center text-white shadow-lg transition active:scale-95",
                            title: "Decline",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onAccept,
                            className: "w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-white shadow-lg transition active:scale-95 animate-bounce",
                            title: "Accept",
                            children: isVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
                                lineNumber: 77,
                                columnNumber: 24
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
                                lineNumber: 77,
                                columnNumber: 46
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/call/ui/IncomingCallModal.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(IncomingCallModal, "0doYx/lFKmVVbvtO/eWR8SJrtgo=");
_c = IncomingCallModal;
var _c;
__turbopack_context__.k.register(_c, "IncomingCallModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/call/ui/GlobalCallUI.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ============================================================
// Global Call UI Manager (Routes to P2P or P2G Voice & Video)
// ============================================================
__turbopack_context__.s([
    "GlobalCallUI",
    ()=>GlobalCallUI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$context$2f$CallContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/context/CallContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$ui$2f$IncomingCallModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/ui/IncomingCallModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2p$2f$P2PVoiceCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/p2p/P2PVoiceCall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2p$2f$P2PVideoCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/p2p/P2PVideoCall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2g$2f$GroupVoiceCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/p2g/GroupVoiceCall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2g$2f$GroupVideoCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/p2g/GroupVideoCall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
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
function GlobalCallUI() {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { incomingCall, activeCall, acceptCall, rejectCall, endCall } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$context$2f$CallContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallContext"])();
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalCallUI.useEffect": ()=>{
            if (incomingCall && !incomingCall.isSilenced) {
                const audio = new Audio('/ringtone.mp3');
                audio.loop = true;
                audio.play().catch({
                    "GlobalCallUI.useEffect": (e)=>console.error("Audio play failed", e)
                }["GlobalCallUI.useEffect"]);
                audioRef.current = audio;
            } else {
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0;
                }
            }
            return ({
                "GlobalCallUI.useEffect": ()=>{
                    if (audioRef.current) {
                        audioRef.current.pause();
                    }
                }
            })["GlobalCallUI.useEffect"];
        }
    }["GlobalCallUI.useEffect"], [
        incomingCall
    ]);
    const handleCallClose = async (duration)=>{
        if (activeCall && activeCall.roomId) {
            const callData = {
                ...activeCall
            };
            const callerId = callData.isIncoming ? callData.targetUserId : (user === null || user === void 0 ? void 0 : user.id) || 0;
            try {
                const { chatApi } = await __turbopack_context__.A("[project]/src/services/chatApi.ts [app-client] (ecmascript, async loader)");
                const res = await chatApi.sendMessage(callData.roomId, '', 'call', {
                    duration,
                    callType: callData.callType,
                    isGroup: callData.isGroup,
                    callerId,
                    status: duration > 0 ? 'completed' : 'missed'
                });
                const msgPayload = (res === null || res === void 0 ? void 0 : res.data) || {
                    id: Date.now(),
                    roomId: callData.roomId,
                    from: callData.isIncoming ? 'them' : 'me',
                    senderId: callerId,
                    type: 'call',
                    data: {
                        callType: callData.callType,
                        duration,
                        isGroup: callData.isGroup,
                        status: duration > 0 ? 'completed' : 'missed'
                    },
                    time: new Date().toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                    }),
                    createdAt: new Date().toISOString(),
                    status: 'sent'
                };
                window.dispatchEvent(new CustomEvent('call:message_sent', {
                    detail: {
                        roomId: callData.roomId,
                        message: msgPayload
                    }
                }));
            } catch (err) {
                console.error("Failed to save call message:", err);
            }
        }
        endCall(duration);
    };
    const isGroup = Boolean(activeCall === null || activeCall === void 0 ? void 0 : activeCall.isGroup);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            incomingCall && !activeCall && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$ui$2f$IncomingCallModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IncomingCallModal"], {
                incomingCall: incomingCall,
                onAccept: acceptCall,
                onReject: rejectCall
            }, void 0, false, {
                fileName: "[project]/src/components/call/ui/GlobalCallUI.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this),
            activeCall && !isGroup && activeCall.callType === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2p$2f$P2PVideoCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P2PVideoCall"], {
                roomId: activeCall.roomId,
                targetUserId: activeCall.targetUserId,
                chatName: activeCall.callerName,
                avatarUrl: activeCall.callerAvatar,
                isAccepted: activeCall.isAccepted,
                isRingingStatus: activeCall.isRingingStatus,
                busyMessage: activeCall.busyMessage,
                onClose: handleCallClose
            }, void 0, false, {
                fileName: "[project]/src/components/call/ui/GlobalCallUI.tsx",
                lineNumber: 99,
                columnNumber: 9
            }, this),
            activeCall && !isGroup && activeCall.callType === 'audio' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2p$2f$P2PVoiceCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P2PVoiceCall"], {
                roomId: activeCall.roomId,
                targetUserId: activeCall.targetUserId,
                chatName: activeCall.callerName,
                avatarUrl: activeCall.callerAvatar,
                isAccepted: activeCall.isAccepted,
                isRingingStatus: activeCall.isRingingStatus,
                busyMessage: activeCall.busyMessage,
                onClose: handleCallClose
            }, void 0, false, {
                fileName: "[project]/src/components/call/ui/GlobalCallUI.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this),
            activeCall && isGroup && activeCall.callType === 'video' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2g$2f$GroupVideoCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupVideoCall"], {
                roomId: activeCall.roomId,
                targetUserId: activeCall.targetUserId,
                chatName: activeCall.callerName,
                avatarUrl: activeCall.callerAvatar,
                isAccepted: activeCall.isAccepted,
                isRingingStatus: activeCall.isRingingStatus,
                busyMessage: activeCall.busyMessage,
                onClose: handleCallClose
            }, void 0, false, {
                fileName: "[project]/src/components/call/ui/GlobalCallUI.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this),
            activeCall && isGroup && activeCall.callType === 'audio' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2g$2f$GroupVoiceCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupVoiceCall"], {
                roomId: activeCall.roomId,
                targetUserId: activeCall.targetUserId,
                chatName: activeCall.callerName,
                avatarUrl: activeCall.callerAvatar,
                isAccepted: activeCall.isAccepted,
                isRingingStatus: activeCall.isRingingStatus,
                busyMessage: activeCall.busyMessage,
                onClose: handleCallClose
            }, void 0, false, {
                fileName: "[project]/src/components/call/ui/GlobalCallUI.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(GlobalCallUI, "ur+cfeLrWxRPq4Fljlf5hFOH+L0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$context$2f$CallContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallContext"]
    ];
});
_c = GlobalCallUI;
var _c;
__turbopack_context__.k.register(_c, "GlobalCallUI");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/call/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

// ============================================================
// PingDart — Unified Call Subsystem (P2P & P2G Voice/Video)
// ============================================================
__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/types.ts [app-client] (ecmascript)");
// P2P 1-on-1 Calls
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2p$2f$P2PVoiceCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/p2p/P2PVoiceCall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2p$2f$P2PVideoCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/p2p/P2PVideoCall.tsx [app-client] (ecmascript)");
// P2G Group Calls
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2g$2f$GroupVoiceCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/p2g/GroupVoiceCall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2g$2f$GroupVideoCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/p2g/GroupVideoCall.tsx [app-client] (ecmascript)");
// Context & State
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$context$2f$CallContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/context/CallContext.tsx [app-client] (ecmascript)");
// UI
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$ui$2f$GlobalCallUI$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/ui/GlobalCallUI.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$ui$2f$IncomingCallModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/ui/IncomingCallModal.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/call/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CallProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$context$2f$CallContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallProvider"],
    "GlobalCallUI",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$ui$2f$GlobalCallUI$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GlobalCallUI"],
    "GroupVideoCall",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2g$2f$GroupVideoCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupVideoCall"],
    "GroupVoiceCall",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2g$2f$GroupVoiceCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupVoiceCall"],
    "IncomingCallModal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$ui$2f$IncomingCallModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IncomingCallModal"],
    "P2PVideoCall",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2p$2f$P2PVideoCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P2PVideoCall"],
    "P2PVoiceCall",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2p$2f$P2PVoiceCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["P2PVoiceCall"],
    "useCallContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$context$2f$CallContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallContext"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/call/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2p$2f$P2PVoiceCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/p2p/P2PVoiceCall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2p$2f$P2PVideoCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/p2p/P2PVideoCall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2g$2f$GroupVoiceCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/p2g/GroupVoiceCall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$p2g$2f$GroupVideoCall$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/p2g/GroupVideoCall.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$context$2f$CallContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/context/CallContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$ui$2f$GlobalCallUI$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/ui/GlobalCallUI.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$call$2f$ui$2f$IncomingCallModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/call/ui/IncomingCallModal.tsx [app-client] (ecmascript)");
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/80",
            outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
            destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            icon: "size-8",
            "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
            "icon-lg": "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        "data-variant": variant,
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript) <export * as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Root, {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Trigger, {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Portal, {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 31,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Overlay, {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Content, {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none  data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                        "data-slot": "dialog-close",
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            className: "absolute top-2 right-2",
                            size: "icon-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/ui/dialog.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/dialog.tsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/dialog.tsx",
                            lineNumber: 72,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, showCloseButton = false, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end", className),
        ...props,
        children: [
            children,
            showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dialog.tsx",
                    lineNumber: 118,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 117,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title, {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-heading text-base leading-none font-medium", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Description, {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript) <export * as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Root, {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_c = Sheet;
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Trigger, {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_c1 = SheetTrigger;
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
_c2 = SheetClose;
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Portal, {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 29,
        columnNumber: 10
    }, this);
}
_c3 = SheetPortal;
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Overlay, {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c4 = SheetOverlay;
function SheetContent({ className, children, side = "right", showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Content, {
                "data-slot": "sheet-content",
                "data-side": side,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                        "data-slot": "sheet-close",
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            className: "absolute top-3 right-3",
                            size: "icon-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {}, void 0, false, {
                                    fileName: "[project]/src/components/ui/sheet.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/sheet.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/sheet.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/sheet.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c5 = SheetContent;
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-0.5 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_c6 = SheetHeader;
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
}
_c7 = SheetFooter;
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title, {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-heading text-base font-medium text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_c8 = SheetTitle;
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Description, {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
_c9 = SheetDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Sheet");
__turbopack_context__.k.register(_c1, "SheetTrigger");
__turbopack_context__.k.register(_c2, "SheetClose");
__turbopack_context__.k.register(_c3, "SheetPortal");
__turbopack_context__.k.register(_c4, "SheetOverlay");
__turbopack_context__.k.register(_c5, "SheetContent");
__turbopack_context__.k.register(_c6, "SheetHeader");
__turbopack_context__.k.register(_c7, "SheetFooter");
__turbopack_context__.k.register(_c8, "SheetTitle");
__turbopack_context__.k.register(_c9, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/switch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Switch",
    ()=>Switch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Switch$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-switch/dist/index.mjs [app-client] (ecmascript) <export * as Switch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Switch({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Switch$3e$__["Switch"].Root, {
        "data-slot": "switch",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$switch$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Switch$3e$__["Switch"].Thumb, {
            "data-slot": "switch-thumb",
            className: "pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/switch.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/switch.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = Switch;
;
var _c;
__turbopack_context__.k.register(_c, "Switch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/VerifiedBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VERIFICATION_TIERS",
    ()=>VERIFICATION_TIERS,
    "VerifiedBadge",
    ()=>VerifiedBadge,
    "default",
    ()=>__TURBOPACK__default__export__,
    "getVerificationTierInfo",
    ()=>getVerificationTierInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.mjs [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.mjs [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
'use client';
;
;
const VERIFICATION_TIERS = {
    official: {
        key: 'official',
        name: 'Official',
        level: 5,
        iconText: '🔷',
        description: 'Official Account authenticated by PingDart',
        pillBg: 'bg-gradient-to-r from-blue-600/15 via-indigo-600/15 to-cyan-500/15',
        pillText: 'text-blue-600 dark:text-blue-400 font-semibold',
        pillBorder: 'border border-blue-500/30 dark:border-blue-400/30',
        iconBg: 'bg-blue-600 dark:bg-blue-500 text-white',
        iconColor: 'text-blue-600 dark:text-blue-400'
    },
    leader: {
        key: 'leader',
        name: 'Community Leader',
        level: 4,
        iconText: '👑',
        description: 'Community Leader with 5,000+ Followers and 500+ Posts',
        pillBg: 'bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-yellow-500/15',
        pillText: 'text-amber-600 dark:text-amber-400 font-semibold',
        pillBorder: 'border border-amber-500/30 dark:border-amber-400/30',
        iconBg: 'bg-gradient-to-tr from-amber-600 to-yellow-500 text-white',
        iconColor: 'text-amber-500 dark:text-amber-400'
    },
    trusted: {
        key: 'trusted',
        name: 'Trusted Member',
        level: 3,
        iconText: '🏆',
        description: 'Trusted Member with 2,000+ Followers and 100+ Posts',
        pillBg: 'bg-gradient-to-r from-emerald-500/15 via-teal-500/15 to-green-500/15',
        pillText: 'text-emerald-600 dark:text-emerald-400 font-semibold',
        pillBorder: 'border border-emerald-500/30 dark:border-emerald-400/30',
        iconBg: 'bg-emerald-600 dark:bg-emerald-500 text-white',
        iconColor: 'text-emerald-600 dark:text-emerald-400'
    },
    creator: {
        key: 'creator',
        name: 'Popular Creator',
        level: 2,
        iconText: '⭐',
        description: 'Popular Creator with 1,000+ Followers and 50+ Posts',
        pillBg: 'bg-gradient-to-r from-purple-500/15 via-violet-500/15 to-pink-500/15',
        pillText: 'text-purple-600 dark:text-purple-400 font-semibold',
        pillBorder: 'border border-purple-500/30 dark:border-purple-400/30',
        iconBg: 'bg-purple-600 dark:bg-purple-500 text-white',
        iconColor: 'text-purple-600 dark:text-purple-400'
    },
    verified: {
        key: 'verified',
        name: 'Verified',
        level: 1,
        iconText: '✅',
        description: 'Identity Verified by PingDart Administrators',
        pillBg: 'bg-blue-500/10',
        pillText: 'text-blue-600 dark:text-blue-400 font-semibold',
        pillBorder: 'border border-blue-500/25 dark:border-blue-400/25',
        iconBg: 'bg-blue-500 text-white',
        iconColor: 'text-blue-500 dark:text-blue-400'
    }
};
function getVerificationTierInfo(type) {
    if (!type || typeof type !== 'string') return null;
    const normalized = type.toLowerCase().trim();
    return VERIFICATION_TIERS[normalized] || null;
}
const VerifiedBadge = ({ type, variant = 'icon', size = 'sm', showTooltip = true, className = '', onClick })=>{
    const tier = getVerificationTierInfo(type);
    // If no tier or type is 'none', show NOTHING (no badge)
    if (!tier) {
        return null;
    }
    // Size dimensions for icons
    const iconSizeStyles = {
        xs: 'w-3 h-3',
        sm: 'w-3.5 h-3.5',
        md: 'w-4 h-4',
        lg: 'w-5 h-5'
    }[size];
    const pillPadding = {
        xs: 'px-1.5 py-0.5 text-[9px] gap-1',
        sm: 'px-2 py-0.5 text-[10px] gap-1.5',
        md: 'px-2.5 py-1 text-xs gap-1.5',
        lg: 'px-3 py-1.5 text-sm gap-2'
    }[size];
    // Render specific SVG or Icon based on tier
    const renderTierIcon = ()=>{
        switch(tier.key){
            case 'official':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `inline-flex items-center justify-center rounded-full shrink-0 ${tier.iconBg} ${size === 'xs' ? 'p-0.5' : size === 'sm' ? 'p-0.5' : 'p-1'}`,
                    title: "Official Account",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                        className: iconSizeStyles,
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/VerifiedBadge.tsx",
                        lineNumber: 147,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/VerifiedBadge.tsx",
                    lineNumber: 141,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'leader':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `inline-flex items-center justify-center rounded-full shrink-0 ${tier.iconBg} ${size === 'xs' ? 'p-0.5' : size === 'sm' ? 'p-0.5' : 'p-1'}`,
                    title: "Community Leader",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                        className: iconSizeStyles,
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/VerifiedBadge.tsx",
                        lineNumber: 158,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/VerifiedBadge.tsx",
                    lineNumber: 152,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'trusted':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `inline-flex items-center justify-center rounded-full shrink-0 ${tier.iconBg} ${size === 'xs' ? 'p-0.5' : size === 'sm' ? 'p-0.5' : 'p-1'}`,
                    title: "Trusted Member",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                        className: iconSizeStyles,
                        strokeWidth: 2.5
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/VerifiedBadge.tsx",
                        lineNumber: 169,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/VerifiedBadge.tsx",
                    lineNumber: 163,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'creator':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `inline-flex items-center justify-center rounded-full shrink-0 ${tier.iconBg} ${size === 'xs' ? 'p-0.5' : size === 'sm' ? 'p-0.5' : 'p-1'}`,
                    title: "Popular Creator",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                        className: iconSizeStyles,
                        strokeWidth: 2.5,
                        fill: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/VerifiedBadge.tsx",
                        lineNumber: 180,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/VerifiedBadge.tsx",
                    lineNumber: 174,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'verified':
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `inline-flex items-center justify-center rounded-full shrink-0 ${tier.iconBg} ${size === 'xs' ? 'p-0.5' : size === 'sm' ? 'p-0.5' : 'p-1'}`,
                    title: "Verified Account",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: iconSizeStyles,
                        strokeWidth: 3
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/VerifiedBadge.tsx",
                        lineNumber: 192,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/VerifiedBadge.tsx",
                    lineNumber: 186,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    const cursorStyle = onClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : '';
    if (variant === 'pill') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            onClick: onClick,
            title: showTooltip ? tier.description : undefined,
            className: `inline-flex items-center rounded-full font-medium ${tier.pillBg} ${tier.pillText} ${tier.pillBorder} ${pillPadding} ${cursorStyle} ${className}`,
            children: [
                renderTierIcon(),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: tier.name
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/VerifiedBadge.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/VerifiedBadge.tsx",
            lineNumber: 202,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Variant === 'icon'
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        onClick: onClick,
        title: showTooltip ? `${tier.name} — ${tier.description}` : undefined,
        className: `inline-flex items-center align-middle shrink-0 select-none ${cursorStyle} ${className}`,
        children: renderTierIcon()
    }, void 0, false, {
        fileName: "[project]/src/components/ui/VerifiedBadge.tsx",
        lineNumber: 215,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = VerifiedBadge;
const __TURBOPACK__default__export__ = VerifiedBadge;
var _c;
__turbopack_context__.k.register(_c, "VerifiedBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_ca487edd._.js.map