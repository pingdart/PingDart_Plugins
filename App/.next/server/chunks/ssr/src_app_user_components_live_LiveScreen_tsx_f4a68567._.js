module.exports = [
"[project]/src/app/user/components/live/LiveScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LiveScreen",
    ()=>LiveScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$LiveDashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/live/LiveDashboard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$LiveRoom$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/live/LiveRoom.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm-debug/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$LiveSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/live/components/LiveSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$LiveExploreGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/live/components/LiveExploreGrid.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$RoomDetailPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/live/components/RoomDetailPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$EditRoomModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/live/components/EditRoomModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$GuestJoinModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/live/components/GuestJoinModal.tsx [app-ssr] (ecmascript)");
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
function LiveScreen({ onBack }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('explore');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedCategory, setSelectedCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('All');
    const [activeRooms, setActiveRooms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedRoom, setSelectedRoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [previewRoom, setPreviewRoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [privateRoomPreview, setPrivateRoomPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [requestStatus, setRequestStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [editingRoom, setEditingRoom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])((state)=>state.user);
    const fetchIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchActiveRooms();
        fetchIntervalRef.current = setInterval(()=>fetchActiveRooms(false), 10000);
        const token = localStorage.getItem('access_token');
        const socketUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiBaseUrl"])();
        const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2d$debug$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(`${socketUrl}/api/realtime/`, {
            query: {
                token
            },
            transports: [
                'polling',
                'websocket'
            ],
            upgrade: true
        });
        socket.on('live:room_started', (data)=>{
            if (data?.room) setActiveRooms((prev)=>{
                const exists = prev.some((r)=>String(r.id) === String(data.room.id));
                if (exists) return prev.map((r)=>String(r.id) === String(data.room.id) ? {
                        ...r,
                        ...data.room,
                        status: 'live'
                    } : r);
                return [
                    {
                        ...data.room,
                        status: 'live'
                    },
                    ...prev
                ];
            });
            fetchActiveRooms(false);
        });
        socket.on('live:room_ended', (data)=>{
            setActiveRooms((prev)=>prev.filter((r)=>r.id !== data.roomId));
            setPrivateRoomPreview((prev)=>prev?.id === data.roomId ? null : prev);
            setPreviewRoom((prev)=>prev?.id === data.roomId ? null : prev);
        });
        socket.on('live:room_updated', (data)=>{
            if (data?.room) {
                setActiveRooms((prev)=>prev.map((r)=>String(r.id) === String(data.room.id) ? {
                            ...r,
                            ...data.room
                        } : r));
                setPreviewRoom((prev)=>prev && String(prev.id) === String(data.room.id) ? {
                        ...prev,
                        ...data.room
                    } : prev);
            }
        });
        socket.on('live:room_deleted', (data)=>{
            if (data?.roomId) {
                setActiveRooms((prev)=>prev.filter((r)=>String(r.id) !== String(data.roomId)));
                setMyRoomsList((prev)=>prev.filter((r)=>String(r.id) !== String(data.roomId)));
                setPreviewRoom((prev)=>prev && String(prev.id) === String(data.roomId) ? null : prev);
                setPrivateRoomPreview((prev)=>prev && String(prev.id) === String(data.roomId) ? null : prev);
            }
        });
        socket.on('live:request_accepted', (data)=>{
            if (data?.roomId) setPrivateRoomPreview((prev)=>{
                if (prev && String(prev.id) === String(data.roomId)) {
                    handleJoinRoom({
                        ...prev,
                        isApproved: true
                    });
                    return null;
                }
                return prev;
            });
        });
        socket.on('live:like_updated', (data)=>{
            setActiveRooms((prev)=>prev.map((r)=>String(r.id) === String(data.roomId) ? {
                        ...r,
                        likeCount: data.count
                    } : r));
        });
        return ()=>{
            socket.disconnect();
            if (fetchIntervalRef.current) clearInterval(fetchIntervalRef.current);
        };
    }, []);
    const [myRoomsList, setMyRoomsList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const fetchActiveRooms = async (showLoading = true)=>{
        try {
            if (showLoading) setLoading(true);
            const apiV1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiV1Url"])();
            const res = await fetch(`${apiV1}/live/active`).catch(()=>null);
            if (res?.ok) {
                const data = await res.json().catch(()=>null);
                if (data?.success && Array.isArray(data.rooms)) {
                    const map = new Map();
                    data.rooms.forEach((r)=>{
                        if (r && r.id) map.set(String(r.id), r);
                    });
                    setActiveRooms(Array.from(map.values()));
                }
            }
            const token = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        } catch (err) {
            console.error('Failed to fetch rooms', err);
        } finally{
            setLoading(false);
        }
    };
    const initialUrlResolvedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Sync URL and localStorage whenever selected or previewed room changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const url = undefined;
    }, [
        selectedRoom,
        previewRoom
    ]);
    const [showGuestModal, setShowGuestModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [guestName, setGuestName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [guestEmail, setGuestEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [guestPhone, setGuestPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [guestSubmitting, setGuestSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pendingJoinRoomId, setPendingJoinRoomId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Initial Room Resolver: runs immediately on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const urlParams = undefined;
        const rawParam = undefined;
        let roomCodeParam;
    }, []);
    // Keep previewed room data refreshed in background without resetting user's manual selection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!previewRoom?.id || activeRooms.length === 0) return;
        const freshData = activeRooms.find((r)=>String(r.id) === String(previewRoom.id));
        if (freshData) {
            setPreviewRoom((prev)=>prev && String(prev.id) === String(freshData.id) ? {
                    ...prev,
                    ...freshData
                } : prev);
        }
    }, [
        activeRooms
    ]);
    const handleGuestSubmit = async (e)=>{
        e.preventDefault();
        if (!guestName.trim()) {
            alert('Please enter your Name.');
            return;
        }
        let finalEmail = guestEmail.trim().toLowerCase();
        if (!finalEmail) {
            const s = guestName.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
            finalEmail = `${s || 'guest'}${Math.floor(Math.random() * 899 + 100)}@pingdart.com`;
        }
        setGuestSubmitting(true);
        try {
            const apiV1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiV1Url"])();
            const res = await fetch(`${apiV1}/live/guest-register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fullName: guestName,
                    email: finalEmail,
                    phone: guestPhone
                })
            });
            const data = await res.json();
            if (!data.success) throw new Error(data.message);
            localStorage.setItem('access_token', data.accessToken);
            localStorage.setItem('user', JSON.stringify(data.user));
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().setAuth(data.user, data.accessToken, data.accessToken);
            setShowGuestModal(false);
            const targetId = pendingJoinRoomId || new URLSearchParams(window.location.search).get('roomId');
            const realId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decryptLiveRoomId"])(targetId);
            if (realId) {
                const found = activeRooms.find((r)=>String(r.id) === String(realId));
                handleJoinRoom(found || {
                    id: realId,
                    title: `Live Room #${realId}`,
                    roomType: 'free'
                });
            }
        } catch (err) {
            alert(err.message || 'Failed to register guest');
        } finally{
            setGuestSubmitting(false);
        }
    };
    const handleJoinRoom = async (room)=>{
        if (!room) return;
        const token = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
        if (!token && !user) {
            setPendingJoinRoomId(room.id);
            setShowGuestModal(true);
            return;
        }
        if (room.roomType === 'private' && room.hostId !== user?.id && !room.isApproved) {
            setPrivateRoomPreview(room);
            setRequestStatus('');
            return;
        }
        setPrivateRoomPreview(null);
        try {
            const apiV1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiV1Url"])();
            const res = await fetch(`${apiV1}/live/join/${room.id}`, {
                headers: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : {}
            });
            const data = await res.json();
            const finalRoom = data.room || room;
            const targetHostId = finalRoom.hostId || room.hostId;
            setSelectedRoom({
                ...room,
                ...finalRoom,
                hostId: targetHostId,
                isHost: Boolean(targetHostId && user?.id && String(targetHostId) === String(user.id))
            });
        } catch (err) {
            const targetHostId = room.hostId;
            setSelectedRoom({
                ...room,
                hostId: targetHostId,
                isHost: Boolean(targetHostId && user?.id && String(targetHostId) === String(user.id))
            });
        }
    };
    const handleSendRequest = async ()=>{
        if (!privateRoomPreview) return;
        try {
            setRequestStatus('sending');
            const token = localStorage.getItem('access_token');
            const apiV1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getApiV1Url"])();
            const res = await fetch(`${apiV1}/live/request-join`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    roomId: privateRoomPreview.id
                })
            });
            const data = await res.json();
            setRequestStatus(data.success ? 'sent' : 'error');
        } catch (err) {
            setRequestStatus('error');
        }
    };
    const myRooms = myRoomsList.length > 0 ? myRoomsList : activeRooms.filter((r)=>user?.id && String(r.hostId) === String(user.id));
    const displayRooms = activeTab === 'my_rooms' ? myRooms : activeRooms;
    const filteredRooms = displayRooms.filter((r)=>{
        const isOwner = !!(user?.id && String(r.hostId) === String(user.id));
        if (r.roomType === 'private' && !isOwner) return false;
        const matchSearch = !searchQuery || r.title?.toLowerCase().includes(searchQuery.toLowerCase()) || r.id?.toString() === searchQuery;
        const matchCategory = selectedCategory === 'All' || r.category === selectedCategory;
        return matchSearch && matchCategory;
    });
    if (selectedRoom) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$LiveRoom$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LiveRoom"], {
            onLeave: ()=>{
                setSelectedRoom(null);
                setPreviewRoom(null);
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                fetchActiveRooms(false);
            },
            isHost: selectedRoom.isHost,
            roomTitle: selectedRoom.title,
            roomId: selectedRoom.id,
            hostId: selectedRoom.hostId,
            roomFormat: selectedRoom.roomFormat || 'broadcast',
            broadcastType: selectedRoom.broadcastType || 'video'
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
            lineNumber: 293,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full w-full bg-white dark:bg-[#111827] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `w-full md:w-[380px] lg:w-[400px] shrink-0 border-r border-gray-200 dark:border-gray-800 ${previewRoom || privateRoomPreview || activeTab === 'create' ? 'hidden md:flex' : 'flex'} flex-col h-full`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$LiveSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    onBack: onBack,
                    activeTab: activeTab,
                    setActiveTab: (t)=>{
                        setActiveTab(t);
                        if (t === 'explore') setPreviewRoom(null);
                    },
                    searchQuery: searchQuery,
                    setSearchQuery: setSearchQuery,
                    selectedCategory: selectedCategory,
                    setSelectedCategory: setSelectedCategory,
                    filteredRooms: filteredRooms,
                    loading: loading,
                    user: user,
                    previewRoom: previewRoom,
                    setPreviewRoom: setPreviewRoom,
                    setEditingRoom: setEditingRoom,
                    onJoinRoom: (room)=>handleJoinRoom(room)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                    lineNumber: 325,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex-1 bg-gray-50 dark:bg-[#0f172a] relative overflow-hidden ${!previewRoom && !privateRoomPreview && activeTab !== 'create' ? 'hidden md:flex' : 'flex'} flex-col h-full`,
                children: activeTab === 'create' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$LiveDashboard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LiveDashboard"], {
                    onBack: ()=>setActiveTab('explore'),
                    onCreated: (newRoom)=>{
                        setSelectedRoom(newRoom);
                        fetchActiveRooms(false);
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                    lineNumber: 351,
                    columnNumber: 11
                }, this) : privateRoomPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full flex flex-col items-center justify-center p-6 pt-[calc(2.2rem+env(safe-area-inset-top))]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-20 h-20 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-[10px] flex items-center justify-center text-white text-2xl font-bold shadow-md mb-4",
                            children: privateRoomPreview.title.substring(0, 2).toUpperCase()
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                            lineNumber: 354,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-black text-gray-900 dark:text-white mb-1",
                            children: privateRoomPreview.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                            lineNumber: 357,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-1.5 font-medium",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                                    lineNumber: 359,
                                    columnNumber: 15
                                }, this),
                                " Hosted by ",
                                privateRoomPreview.host?.fullName || 'Anonymous'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                            lineNumber: 358,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-gray-800 p-6 rounded-[10px] border border-gray-200 dark:border-gray-700 max-w-sm w-full text-center shadow-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                    className: "w-10 h-10 text-purple-500 mx-auto mb-3"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                                    lineNumber: 362,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-bold text-gray-900 dark:text-white mb-1.5",
                                    children: "Private Broadcast Room"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                                    lineNumber: 363,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500 dark:text-gray-400 mb-5",
                                    children: "You must request permission from the host to join this live broadcast."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                                    lineNumber: 364,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSendRequest,
                                    disabled: requestStatus === 'sending' || requestStatus === 'sent',
                                    className: "w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-300 text-white font-bold text-xs rounded-[8px] transition-all shadow-2xs cursor-pointer",
                                    children: requestStatus === 'sending' ? 'Sending Request...' : requestStatus === 'sent' ? 'Request Pending Approval' : 'Request to Join'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                                    lineNumber: 365,
                                    columnNumber: 15
                                }, this),
                                requestStatus === 'sent' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-emerald-600 mt-2.5 font-bold",
                                    children: "✓ Request sent! Waiting for host."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                                    lineNumber: 372,
                                    columnNumber: 44
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                            lineNumber: 361,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setPrivateRoomPreview(null),
                            className: "mt-4 text-xs font-bold text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition-colors cursor-pointer",
                            children: "← Back to Rooms"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                            lineNumber: 374,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                    lineNumber: 353,
                    columnNumber: 11
                }, this) : previewRoom ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$RoomDetailPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    room: previewRoom,
                    user: user,
                    onJoin: ()=>handleJoinRoom(previewRoom),
                    onEdit: ()=>setEditingRoom(previewRoom),
                    onClose: ()=>setPreviewRoom(null),
                    onDelete: ()=>{
                        const targetId = previewRoom?.id;
                        setActiveRooms((prev)=>prev.filter((r)=>String(r.id) !== String(targetId)));
                        setMyRoomsList((prev)=>prev.filter((r)=>String(r.id) !== String(targetId)));
                        setPreviewRoom(null);
                        fetchActiveRooms(false);
                    },
                    isOwner: !!(user?.id && String(previewRoom.hostId) === String(user.id))
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                    lineNumber: 382,
                    columnNumber: 11
                }, this) : /* Live Explore Grid Component when no single room preview selected */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$LiveExploreGrid$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    rooms: displayRooms,
                    user: user,
                    onSelectRoom: (room)=>setPreviewRoom(room),
                    onJoinRoom: (room)=>handleJoinRoom(room),
                    onCreateRoom: ()=>setActiveTab('create')
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                    lineNumber: 399,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            editingRoom && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$EditRoomModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                room: editingRoom,
                onClose: ()=>setEditingRoom(null),
                onSaved: (updated)=>{
                    setActiveRooms((prev)=>prev.map((r)=>String(r.id) === String(updated.id) ? {
                                ...r,
                                ...updated
                            } : r));
                    setMyRoomsList((prev)=>prev.map((r)=>String(r.id) === String(updated.id) ? {
                                ...r,
                                ...updated
                            } : r));
                    setPreviewRoom((prev)=>prev && String(prev.id) === String(updated.id) ? {
                            ...prev,
                            ...updated
                        } : prev);
                    setEditingRoom(null);
                }
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                lineNumber: 411,
                columnNumber: 9
            }, this),
            showGuestModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$live$2f$components$2f$GuestJoinModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                guestName: guestName,
                setGuestName: setGuestName,
                guestPhone: guestPhone,
                setGuestPhone: setGuestPhone,
                guestEmail: guestEmail,
                setGuestEmail: setGuestEmail,
                guestSubmitting: guestSubmitting,
                handleGuestSubmit: handleGuestSubmit,
                onClose: ()=>setShowGuestModal(false)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
                lineNumber: 421,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/live/LiveScreen.tsx",
        lineNumber: 320,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_user_components_live_LiveScreen_tsx_f4a68567._.js.map