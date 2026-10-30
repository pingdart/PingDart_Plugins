module.exports = [
"[project]/src/modules/chat/ChatDetail.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatDetail",
    ()=>ChatDetail,
    "extractReactionsMap",
    ()=>extractReactionsMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$HappyIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/HappyIcon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$TickDouble01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/TickDouble01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pin.mjs [app-ssr] (ecmascript) <export default as Pin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$shared$2f$FilePreviewOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/shared/FilePreviewOverlay.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$CameraModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/CameraModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$ContactModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/ContactModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$PollModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/PollModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$EventModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/EventModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$MicModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/MicModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$LockChatModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/LockChatModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$ContactInfoSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/ContactInfoSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$MessageInfoSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/MessageInfoSidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$ChatHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/ChatDetails/ChatHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$ChatReplyBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/ChatDetails/ChatReplyBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$ChatInputBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/ChatDetails/ChatInputBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$ChatBody$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/ChatDetails/ChatBody.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$GroupChatBody$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/ChatDetails/GroupChatBody.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$DeleteMessageModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/DeleteMessageModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$PinDurationModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/PinDurationModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$PinnedMessagesModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/PinnedMessagesModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$ForwardDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/ForwardDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/localChatDb.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshChatManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/meshChatManager.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pinnedMessages.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$userPresenceService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/services/userPresenceService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/hooks/useChatHandlers.ts [app-ssr] (ecmascript)");
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
/**
 * Minimal ISO-3166-alpha2 → IANA timezone mapping.
 * Covers the most common countries; falls back to local browser timezone.
 */ const COUNTRY_TIMEZONE = {
    AF: 'Asia/Kabul',
    AL: 'Europe/Tirane',
    DZ: 'Africa/Algiers',
    AR: 'America/Argentina/Buenos_Aires',
    AU: 'Australia/Sydney',
    AT: 'Europe/Vienna',
    BD: 'Asia/Dhaka',
    BE: 'Europe/Brussels',
    BR: 'America/Sao_Paulo',
    CA: 'America/Toronto',
    CN: 'Asia/Shanghai',
    CO: 'America/Bogota',
    HR: 'Europe/Zagreb',
    CZ: 'Europe/Prague',
    DK: 'Europe/Copenhagen',
    EG: 'Africa/Cairo',
    ET: 'Africa/Addis_Ababa',
    FI: 'Europe/Helsinki',
    FR: 'Europe/Paris',
    DE: 'Europe/Berlin',
    GH: 'Africa/Accra',
    GR: 'Europe/Athens',
    HK: 'Asia/Hong_Kong',
    HU: 'Europe/Budapest',
    IN: 'Asia/Kolkata',
    ID: 'Asia/Jakarta',
    IR: 'Asia/Tehran',
    IQ: 'Asia/Baghdad',
    IE: 'Europe/Dublin',
    IL: 'Asia/Jerusalem',
    IT: 'Europe/Rome',
    JP: 'Asia/Tokyo',
    JO: 'Asia/Amman',
    KZ: 'Asia/Almaty',
    KE: 'Africa/Nairobi',
    KW: 'Asia/Kuwait',
    LB: 'Asia/Beirut',
    MY: 'Asia/Kuala_Lumpur',
    MX: 'America/Mexico_City',
    MA: 'Africa/Casablanca',
    NL: 'Europe/Amsterdam',
    NZ: 'Pacific/Auckland',
    NG: 'Africa/Lagos',
    NO: 'Europe/Oslo',
    PK: 'Asia/Karachi',
    PE: 'America/Lima',
    PH: 'Asia/Manila',
    PL: 'Europe/Warsaw',
    PT: 'Europe/Lisbon',
    QA: 'Asia/Qatar',
    RO: 'Europe/Bucharest',
    RU: 'Europe/Moscow',
    SA: 'Asia/Riyadh',
    SG: 'Asia/Singapore',
    ZA: 'Africa/Johannesburg',
    KR: 'Asia/Seoul',
    ES: 'Europe/Madrid',
    LK: 'Asia/Colombo',
    SE: 'Europe/Stockholm',
    CH: 'Europe/Zurich',
    TW: 'Asia/Taipei',
    TH: 'Asia/Bangkok',
    TR: 'Europe/Istanbul',
    UA: 'Europe/Kiev',
    AE: 'Asia/Dubai',
    GB: 'Europe/London',
    US: 'America/New_York',
    VN: 'Asia/Ho_Chi_Minh'
};
/**
 * Smart last-seen formatter (WhatsApp style).
 * If countryCode is provided it formats time in the other user's local timezone.
 * - Same day: "3:45 PM"
 * - Yesterday: "Yesterday at 3:45 PM"
 * - Within 6 days: "Monday at 3:45 PM"
 * - Older same year: "August 5 at 3:45 PM"
 * - Older different year: "August 5, 2024 at 3:45 PM"
 */ function formatLastSeen(dateInput, countryCode) {
    if (!dateInput) return null;
    let d;
    if (typeof dateInput === 'string') {
        let rawStr = dateInput.trim();
        if (!rawStr.includes('T') && rawStr.includes(' ')) {
            rawStr = rawStr.replace(' ', 'T');
        }
        if (!rawStr.endsWith('Z') && !rawStr.includes('+') && !rawStr.includes('-')) {
            rawStr += 'Z';
        }
        d = new Date(rawStr);
        if (isNaN(d.getTime())) {
            d = new Date(dateInput);
        }
    } else {
        d = dateInput;
    }
    if (isNaN(d.getTime())) return null;
    const tz = countryCode && COUNTRY_TIMEZONE[countryCode.toUpperCase()] || undefined;
    const timeStr = d.toLocaleTimeString(tz ? [
        'en-US'
    ] : [], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        ...tz ? {
            timeZone: tz
        } : {}
    });
    // Compare calendar dates in the target timezone
    const formatter = new Intl.DateTimeFormat('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        ...tz ? {
            timeZone: tz
        } : {}
    });
    const todayParts = formatter.format(new Date()).split('-').map(Number);
    const seenParts = formatter.format(d).split('-').map(Number);
    const todayStart = new Date(todayParts[0], todayParts[1] - 1, todayParts[2]);
    const seenStart = new Date(seenParts[0], seenParts[1] - 1, seenParts[2]);
    const diffDays = Math.round((todayStart.getTime() - seenStart.getTime()) / 86400000);
    if (diffDays === 0) return timeStr;
    if (diffDays === 1) return `Yesterday at ${timeStr}`;
    if (diffDays < 7) {
        const weekday = d.toLocaleDateString(tz ? 'en-US' : undefined, {
            weekday: 'long',
            ...tz ? {
                timeZone: tz
            } : {}
        });
        return `${weekday} at ${timeStr}`;
    }
    if (seenParts[0] === todayParts[0]) {
        const date = d.toLocaleDateString(tz ? 'en-US' : undefined, {
            month: 'long',
            day: 'numeric',
            ...tz ? {
                timeZone: tz
            } : {}
        });
        return `${date} at ${timeStr}`;
    }
    const date = d.toLocaleDateString(tz ? 'en-US' : undefined, {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        ...tz ? {
            timeZone: tz
        } : {}
    });
    return `${date} at ${timeStr}`;
}
function getEffectiveLastSeen(rawLastSeen, messages = [], currentUserId, otherUserId) {
    let bestDate = null;
    if (rawLastSeen) {
        let s = typeof rawLastSeen === 'string' ? rawLastSeen.trim() : rawLastSeen;
        if (typeof s === 'string') {
            if (!s.includes('T') && s.includes(' ')) s = s.replace(' ', 'T');
            if (!s.endsWith('Z') && !s.includes('+') && !s.includes('-')) s += 'Z';
        }
        const parsed = typeof s === 'string' ? new Date(s) : s;
        if (!isNaN(parsed.getTime())) bestDate = parsed;
    }
    if (messages && messages.length > 0) {
        for(let i = messages.length - 1; i >= 0; i--){
            const m = messages[i];
            const isOtherUserMessage = m.isMe === false || otherUserId && (String(m.senderId) === String(otherUserId) || String(m.userId) === String(otherUserId)) || currentUserId && String(m.senderId) !== String(currentUserId) && String(m.userId) !== String(currentUserId);
            if (isOtherUserMessage && m.createdAt) {
                let msgDateStr = typeof m.createdAt === 'string' ? m.createdAt.trim() : m.createdAt;
                if (typeof msgDateStr === 'string') {
                    if (!msgDateStr.includes('T') && msgDateStr.includes(' ')) msgDateStr = msgDateStr.replace(' ', 'T');
                    if (!msgDateStr.endsWith('Z') && !msgDateStr.includes('+') && !msgDateStr.includes('-')) msgDateStr += 'Z';
                }
                const msgDate = typeof msgDateStr === 'string' ? new Date(msgDateStr) : msgDateStr;
                if (!isNaN(msgDate.getTime())) {
                    if (!bestDate || msgDate.getTime() > bestDate.getTime()) {
                        bestDate = msgDate;
                    }
                    break;
                }
            }
        }
    }
    return bestDate;
}
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
// Sample chat messages – mix of incoming & outgoing
const buildMessages = (chat)=>[
        {
            id: 1,
            from: "them",
            text: chat.preview,
            time: "10:53 AM",
            status: null
        },
        {
            id: 2,
            from: "me",
            text: "Thanks for the update! Let me review this.",
            time: "10:55 AM",
            status: "read"
        },
        {
            id: 3,
            from: "them",
            text: chat.subject + "\n\n" + chat.preview,
            time: "10:57 AM",
            status: null
        },
        {
            id: 4,
            from: "me",
            text: "Got it. I'll get back to you shortly.",
            time: "11:00 AM",
            status: "read"
        },
        {
            id: 5,
            from: "them",
            text: "Please take your time. Let me know if you need anything else from my side.",
            time: "11:02 AM",
            status: null
        }
    ];
const GROUP_MEMBERS = [
    {
        id: 1,
        name: "Admin User",
        color: "#2563eb",
        avatar: "AD"
    },
    {
        id: 2,
        name: "Sreelatha ❤️",
        color: "#00a884",
        avatar: "S"
    },
    {
        id: 3,
        name: "User 3",
        color: "#059669",
        avatar: "US"
    },
    {
        id: 4,
        name: "User 4",
        color: "#d97706",
        avatar: "U4"
    }
];
;
function extractReactionsMap(msgs) {
    const result = {};
    if (!Array.isArray(msgs)) return result;
    for (const m of msgs){
        if (!m) continue;
        const rawR = m.data?.reactions || m.reactions;
        if (rawR && typeof rawR === 'object') {
            const norm = {};
            for (const [em, val] of Object.entries(rawR)){
                if (!em) continue;
                const count = Array.isArray(val) ? val.length : typeof val === 'number' ? val : Number(val) || 0;
                if (count > 0) {
                    norm[em] = count;
                }
            }
            if (Object.keys(norm).length > 0) {
                if (m.id !== undefined && m.id !== null) result[m.id] = norm;
                if (m.clientMessageId) result[m.clientMessageId] = norm;
            }
        }
    }
    return result;
}
function ChatDetail({ chat, onBack, onLockChat, onMessageSent, onMuteChange, onRoomUpdated, onDeleteChat, socket, className = "" }) {
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { isMobile, isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePlatform"])();
    const isMobileDevice = isMobile || isNative;
    // Always-fresh reference to messages — avoids stale closures in socket handlers
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const processedMessageIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const memCached = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].get(chat.id);
        if (memCached && memCached.length > 0) return memCached;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return [];
    });
    const [isLoadingMessages, setIsLoadingMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const memCached = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].get(chat.id);
        return !(memCached && memCached.length > 0);
    });
    const [isLoadingOlder, setIsLoadingOlder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasMoreOlder, setHasMoreOlder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const isLoadingOlderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hasMoreOlderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const [showEmojiPicker, setShowEmojiPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAttachmentMenu, setShowAttachmentMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeFileIndex, setActiveFileIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fileCaption, setFileCaption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [acceptedFileType, setAcceptedFileType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("*/*");
    const [showCameraModal, setShowCameraModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showContactModal, setShowContactModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPollModal, setShowPollModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEventModal, setShowEventModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMicModal, setShowMicModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLockModal, setShowLockModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSearchOpen, setIsSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSelectionMode, setIsSelectionMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedMessages, setSelectedMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleCancel = ()=>{
            setIsSelectionMode(false);
            setSelectedMessages([]);
        };
        window.addEventListener("app:cancel_selection", handleCancel);
        return ()=>window.removeEventListener("app:cancel_selection", handleCancel);
    }, []);
    const [chatWallpaper, setChatWallpaper] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return "";
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        chat.id
    ]);
    // Track which chat room is currently open so InAppChatToast can suppress
    // toasts only for the exact room the user is actively looking at.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return ()=>{
            // Clear when this chat is closed / component unmounts
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        };
    }, [
        chat.id
    ]);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(chat.isMuted || false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMuted(chat.isMuted || false);
    }, [
        chat.id,
        chat.isMuted
    ]);
    const handleToggleMute = async ()=>{
        const nextMuteState = !isMuted;
        setIsMuted(nextMuteState);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].muteRoom(chat.id);
            if (onMuteChange) {
                onMuteChange(chat.id, nextMuteState);
            }
        } catch (err) {
            console.error("Failed to toggle mute state:", err);
            setIsMuted(!nextMuteState);
        }
    };
    const [showContactInfo, setShowContactInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleOpenGroupInfo = (e)=>{
            if (e.detail?.roomId && String(e.detail.roomId) === String(chat.id)) {
                setShowContactInfo(true);
            }
        };
        window.addEventListener('app:open_group_info', handleOpenGroupInfo);
        return ()=>window.removeEventListener('app:open_group_info', handleOpenGroupInfo);
    }, [
        chat.id
    ]);
    const [showMessageInfo, setShowMessageInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [infoMessage, setInfoMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredMessageId, setHoveredMessageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [messageMenuId, setMessageMenuId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const isGroupChat = Boolean(chat.isGroup || chat.type === 'group' || chat.is_group || chat.sender && (chat.sender.toLowerCase().includes('team') || chat.sender.toLowerCase().includes('group') || chat.sender.toLowerCase().includes('dept')));
    const [mentionListVisible, setMentionListVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mentionQuery, setMentionQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [mentionStartIndex, setMentionStartIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatMessagesContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messagesInnerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [replyTarget, setReplyTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [forwardMsg, setForwardMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [forwardOpen, setForwardOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reactions, setReactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>extractReactionsMap(messages));
    const [deleteModalOpen, setDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteMsgTarget, setDeleteMsgTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isBulkDelete, setIsBulkDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastSelectedIndex, setLastSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editModalOpen, setEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editMsgTarget, setEditMsgTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editText, setEditText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isEditingSaving, setIsEditingSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEditEmojiPicker, setShowEditEmojiPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showScrollBottom, setShowScrollBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [unreadCount, setUnreadCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isOtherUserOnline, setIsOtherUserOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!!chat.isOnline);
    const [otherUserCountryCode, setOtherUserCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(chat.countryCode ?? null);
    const [otherUserLastSeen, setOtherUserLastSeen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(formatLastSeen(chat.lastSeen, chat.countryCode));
    const [isOtherUserTyping, setIsOtherUserTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [typingUsername, setTypingUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const typingTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleOpenEditModal = (msg)=>{
        setEditMsgTarget(msg);
        setEditText(msg.text || "");
        setEditModalOpen(true);
    };
    const handleSaveEdit = async ()=>{
        if (!editMsgTarget || !editText.trim()) return;
        setIsEditingSaving(true);
        const newText = editText.trim();
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].editMessage(editMsgTarget.id, newText);
            if (res.success) {
                setMessages((prev)=>prev.map((m)=>String(m.id) === String(editMsgTarget.id) ? {
                            ...m,
                            text: newText,
                            isEdited: true,
                            data: {
                                ...m.data,
                                isEdited: true
                            }
                        } : m));
                if (onRoomUpdated) {
                    let updatedPreview = newText;
                    if (isGroupChat && chat.preview && typeof chat.preview === 'string' && chat.preview.includes(' — ')) {
                        const prefix = chat.preview.split(' — ')[0];
                        updatedPreview = `${prefix} — ${newText}`;
                    }
                    onRoomUpdated(chat.id, {
                        preview: updatedPreview
                    });
                }
                setEditModalOpen(false);
                setEditMsgTarget(null);
                setEditText("");
            }
        } catch (err) {
            alert(err?.response?.data?.message || "Failed to edit message");
        } finally{
            setIsEditingSaving(false);
        }
    };
    const [localChat, setLocalChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(chat);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setLocalChat(chat);
    }, [
        chat
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!socket) return;
        const handleRoomUpdated = (data)=>{
            if (data && String(data.roomId) === String(chat.id)) {
                const updates = data.updates || {};
                setLocalChat((prev)=>({
                        ...prev,
                        ...updates
                    }));
                if (onRoomUpdated) {
                    onRoomUpdated(chat.id, updates);
                }
            }
        };
        socket.on('chat:room_updated', handleRoomUpdated);
        return ()=>{
            socket.off('chat:room_updated', handleRoomUpdated);
        };
    }, [
        socket,
        chat.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleChatCleared = (e)=>{
            const customEvent = e;
            if (customEvent.detail?.roomId && String(customEvent.detail.roomId) === String(chat.id)) {
                setMessages([]);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].delete(Number(chat.id));
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearLocalRoomMessages"](Number(chat.id)).catch(()=>{});
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                if (onRoomUpdated) {
                    onRoomUpdated(chat.id, {
                        preview: "No messages yet",
                        time: undefined
                    });
                }
            }
        };
        window.addEventListener('chat_cleared', handleChatCleared);
        return ()=>{
            window.removeEventListener('chat_cleared', handleChatCleared);
        };
    }, [
        chat.id,
        onRoomUpdated
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!socket) return;
        const handleMessageEdited = (data)=>{
            if (data && String(data.roomId) === String(chat.id)) {
                setMessages((prev)=>prev.map((m)=>String(m.id) === String(data.id) ? {
                            ...m,
                            text: data.text,
                            status: data.status || m.status,
                            isEdited: true,
                            data: {
                                ...m.data || {},
                                ...data.data || {},
                                isEdited: true
                            }
                        } : m));
                // Sync reactions from the updated message's data.reactions
                const rawReactions = data?.data?.reactions;
                if (rawReactions && typeof rawReactions === 'object') {
                    const normalized = {};
                    for (const [emoji, reactors] of Object.entries(rawReactions)){
                        normalized[emoji] = Array.isArray(reactors) ? reactors.length : Number(reactors) || 0;
                    }
                    if (Object.keys(normalized).length > 0) {
                        setReactions((prev)=>({
                                ...prev,
                                [data.id]: normalized
                            }));
                    }
                }
            }
        };
        socket.on("message:edited", handleMessageEdited);
        socket.on("chat:message_edited", handleMessageEdited);
        socket.on("chat:message_update", handleMessageEdited);
        socket.on("chat:message_updated", handleMessageEdited);
        return ()=>{
            socket.off("message:edited", handleMessageEdited);
            socket.off("chat:message_edited", handleMessageEdited);
            socket.off("chat:message_update", handleMessageEdited);
            socket.off("chat:message_updated", handleMessageEdited);
        };
    }, [
        socket,
        chat.id
    ]);
    const [isBlocked, setIsBlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const checkBlockStatus = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].getBlockedContacts().then((res)=>{
            if (res.success && Array.isArray(res.blockedContacts)) {
                const targetId = chat.otherUserId || chat.senderId || chat.id;
                const targetEmail = chat.senderEmail;
                const targetPhone = chat.senderPhone;
                const blocked = res.blockedContacts.some((b)=>String(b) === String(targetId) || targetEmail && String(b).toLowerCase() === String(targetEmail).toLowerCase() || targetPhone && String(b) === String(targetPhone));
                setIsBlocked(blocked);
            }
        }).catch(()=>{});
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        checkBlockStatus();
        window.addEventListener('blocked_contacts_updated', checkBlockStatus);
        return ()=>{
            window.removeEventListener('blocked_contacts_updated', checkBlockStatus);
        };
    }, [
        chat.id,
        chat.otherUserId
    ]);
    const handleUnblockContact = async ()=>{
        const targetId = chat.otherUserId || chat.senderId || chat.id;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].unblockUser(targetId);
            setIsBlocked(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].delete(chat.id);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].getMessages(chat.id, 100).then((res)=>{
                const msgs = res && res.success ? res.data || res.messages : null;
                if (Array.isArray(msgs)) {
                    setMessages(msgs);
                }
            }).catch(()=>{});
        } catch (err) {
            console.error("Failed to unblock user:", err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isGroupChat) {
            setOtherUserLastSeen(null);
            return;
        }
        if (isBlocked || chat.canViewLastSeen === false) {
            setIsOtherUserOnline(false);
            setOtherUserLastSeen(null);
        } else {
            const live = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$userPresenceService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["userPresenceService"].getPresence(chat.otherUserId || chat.id);
            setIsOtherUserOnline(live !== null ? live.isOnline : !!chat.isOnline);
            setOtherUserCountryCode(chat.countryCode ?? null);
            const effective = getEffectiveLastSeen(live?.lastSeen ?? chat.lastSeen, messages, user?.id, chat.otherUserId);
            setOtherUserLastSeen(formatLastSeen(effective, chat.countryCode));
        }
    }, [
        isGroupChat,
        chat.id,
        chat.isOnline,
        chat.lastSeen,
        chat.countryCode,
        chat.canViewLastSeen,
        isBlocked,
        messages,
        user?.id,
        chat.otherUserId
    ]);
    // Keep messagesRef in sync with messages state (for stale-closure-free socket handlers)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        messagesRef.current = messages;
    }, [
        messages
    ]);
    const [pinnedMessages, setPinnedMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pinnedDecryptedMap, setPinnedDecryptedMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [isPinnedModalOpen, setIsPinnedModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!pinnedMessages?.length) return;
        let isMounted = true;
        const processPinDecryption = async ()=>{
            const newDecrypted = {};
            for (const lp of pinnedMessages){
                const rawText = lp?.text || lp?.data?.caption || '';
                const isEnc = typeof rawText === 'string' && (rawText.includes('__e2ee') || rawText.includes('_e2ee')) && rawText.trim().startsWith('{');
                if (isEnc && !pinnedDecryptedMap[lp.id]) {
                    const senderId = Number(lp.senderId || lp.sender_id || (typeof lp.sender === 'object' ? lp.sender?.id : null) || 0);
                    try {
                        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decryptMessage"](senderId, rawText, false, chat.id, lp.id);
                        if (res && isMounted) {
                            newDecrypted[lp.id] = res;
                        }
                    } catch (_) {}
                }
            }
            if (isMounted && Object.keys(newDecrypted).length > 0) {
                setPinnedDecryptedMap((prev)=>({
                        ...prev,
                        ...newDecrypted
                    }));
            }
        };
        processPinDecryption();
        return ()=>{
            isMounted = false;
        };
    }, [
        pinnedMessages,
        chat.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Load pinned messages from localStorage first (instant)
        setPinnedMessages((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPinnedMessages"])(chat.id));
        // Then fetch from server so BOTH users see each other's pins
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].getRoomPinnedMessages(chat.id).then((res)=>{
            if (res.success && Array.isArray(res.data) && res.data.length > 0) {
                res.data.forEach((msg)=>{
                    const pName = msg.pinnedByName || msg.senderName || "Someone";
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pinMessage"])(chat.id, {
                        ...msg,
                        pinnedByName: pName
                    }, 7, pName);
                });
                setPinnedMessages((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPinnedMessages"])(chat.id));
            }
        }).catch(()=>{});
        // Listen for any pin/unpin change (dispatched by pinnedMessages.ts util)
        const handlePinnedUpdate = (e)=>{
            const customEvent = e;
            const evtRoomId = customEvent.detail?.roomId;
            // Match current chat or no roomId in detail
            if (!evtRoomId || String(evtRoomId) === String(chat.id)) {
                // Dedupe: only re-render if pin list actually changed
                setPinnedMessages((prev)=>{
                    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPinnedMessages"])(chat.id);
                    return JSON.stringify(prev) === JSON.stringify(next) ? prev : next;
                });
            }
        };
        window.addEventListener("pinned_messages_updated", handlePinnedUpdate);
        return ()=>{
            window.removeEventListener("pinned_messages_updated", handlePinnedUpdate);
        };
    }, [
        chat.id
    ]);
    const [pinModalTarget, setPinModalTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleOpenPinModal = (e)=>{
            const customEvent = e;
            if (customEvent.detail && customEvent.detail.msg) {
                setPinModalTarget(customEvent.detail.msg);
            }
        };
        window.addEventListener("open_pin_duration_modal", handleOpenPinModal);
        return ()=>{
            window.removeEventListener("open_pin_duration_modal", handleOpenPinModal);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!socket) return;
        const targetOtherId = chat.otherUserId || chat.senderId;
        const handleUserOnlineStatus = (data)=>{
            if (targetOtherId && String(data.userId) === String(targetOtherId)) {
                const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
                const currentUserIdStr = String(currentUser?.id || '');
                const blockedList = Array.isArray(data.blockedContacts) ? data.blockedContacts.map(String) : [];
                const isBlockedByContact = currentUser && blockedList.includes(currentUserIdStr);
                let exceptions = data.privacyExceptions || {};
                if (typeof exceptions === 'string') {
                    try {
                        exceptions = JSON.parse(exceptions);
                    } catch (e) {
                        exceptions = {};
                    }
                }
                const privacy = data.privacy || 'Everyone';
                let canView = !isBlockedByContact && !isBlocked;
                if (canView) {
                    if (privacy === 'Nobody') {
                        canView = false;
                    } else if (privacy === 'Only share with...') {
                        const allowList = Array.isArray(exceptions.privacyLastSeen_only_share) ? exceptions.privacyLastSeen_only_share.map(String) : [];
                        if (!allowList.includes(currentUserIdStr)) {
                            canView = false;
                        }
                    } else if (privacy.includes('except...')) {
                        const blockList = Array.isArray(exceptions.privacyLastSeen) ? exceptions.privacyLastSeen.map(String) : [];
                        if (blockList.includes(currentUserIdStr)) {
                            canView = false;
                        }
                    }
                }
                if (canView) {
                    setIsOtherUserOnline(!!data.isOnline);
                    if (data.countryCode) setOtherUserCountryCode(data.countryCode);
                    const targetLastSeen = getEffectiveLastSeen(data.lastSeen ?? chat.lastSeen ?? null, messagesRef.current || messages, user?.id, targetOtherId);
                    setOtherUserLastSeen(formatLastSeen(targetLastSeen, data.countryCode || otherUserCountryCode));
                } else {
                    setIsOtherUserOnline(false);
                    setOtherUserLastSeen(null);
                }
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
            }
        };
        const handleBlockChanged = ()=>{
            checkBlockStatus();
        };
        socket.on('user:online_status', handleUserOnlineStatus);
        socket.on('user:block_changed', handleBlockChanged);
        const checkOnlineStatus = ()=>{
            if (targetOtherId && !isBlocked) {
                socket.emit('user:get_online_status', {
                    userId: targetOtherId
                }, (res)=>{
                    if (res) {
                        setIsOtherUserOnline(!!res.isOnline);
                        if (res.lastSeen) {
                            const effective = getEffectiveLastSeen(res.lastSeen, messagesRef.current || messages, user?.id, targetOtherId);
                            setOtherUserLastSeen(formatLastSeen(effective, otherUserCountryCode));
                        }
                        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                        ;
                    }
                });
            }
        };
        checkOnlineStatus();
        const presenceInterval = setInterval(checkOnlineStatus, 3000);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return ()=>{
            clearInterval(presenceInterval);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            socket.off('user:online_status', handleUserOnlineStatus);
            socket.off('user:block_changed', handleBlockChanged);
        };
    }, [
        socket,
        chat.id,
        chat.otherUserId,
        chat.senderId,
        isBlocked
    ]);
    const isNearBottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const prevMessagesLengthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isInitialLoadRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const scrollRafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = (behavior = 'smooth')=>{
        if (chatMessagesContainerRef.current) {
            chatMessagesContainerRef.current.scrollTo({
                top: chatMessagesContainerRef.current.scrollHeight,
                behavior
            });
        }
    };
    // Sync pagination refs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        isLoadingOlderRef.current = isLoadingOlder;
    }, [
        isLoadingOlder
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        hasMoreOlderRef.current = hasMoreOlder;
    }, [
        hasMoreOlder
    ]);
    const processRawMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (rawMsgs, currentOtherUserId, currentChatId)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ensureE2EEReady"]().catch(()=>{});
        const currentUserId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id;
        return Promise.all(rawMsgs.map(async (msg)=>{
            if (!msg.text || typeof msg.text !== 'string') return msg;
            const isEncrypted = (msg.text.includes('__e2ee') || msg.text.includes('_e2ee')) && msg.text.startsWith('{');
            if (!isEncrypted) return msg;
            try {
                const rawSenderId = Number(msg.senderId || msg.sender_id || (typeof msg.sender === 'object' ? msg.sender?.id : null) || 0);
                const isMsgMine = msg.from === 'me' || !!currentUserId && !!rawSenderId && String(rawSenderId) === String(currentUserId);
                const actualSenderId = isMsgMine ? currentUserId || rawSenderId : rawSenderId || currentOtherUserId || 0;
                let decryptedText = null;
                if (actualSenderId) {
                    decryptedText = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decryptMessage"](actualSenderId, msg.text, isMsgMine, currentOtherUserId || currentChatId, msg.id);
                }
                let fallbackText = msg.data?.pushPreview || msg.data?.preview || (msg.data?.text && typeof msg.data.text === 'string' && !msg.data.text.startsWith('{') ? msg.data.text : null);
                if (!fallbackText) {
                    try {
                        const p = JSON.parse(msg.text);
                        fallbackText = p.pushPreview || p.preview || (p.text && typeof p.text === 'string' && !p.text.startsWith('{') ? p.text : null);
                    } catch (_) {}
                }
                if (!fallbackText) {
                    const cached = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCachedPreview"](currentChatId, msg.id);
                    if (cached && cached !== '🔒 Encrypted message' && cached !== '⚠️ DECRYPT_FAILED') {
                        fallbackText = cached;
                    }
                }
                if (decryptedText && decryptedText !== '⚠️ DECRYPT_FAILED' && !decryptedText.includes('Unable to Decrypt')) {
                    let textToDisplay = decryptedText;
                    try {
                        const parsed = JSON.parse(decryptedText);
                        if (parsed && typeof parsed.text === 'string') {
                            textToDisplay = parsed.text;
                        }
                    } catch  {}
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCachedPreview"](currentChatId, textToDisplay, msg.id);
                    return {
                        ...msg,
                        text: textToDisplay,
                        decryptState: 'DECRYPTED'
                    };
                } else if (fallbackText) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCachedPreview"](currentChatId, fallbackText, msg.id);
                    return {
                        ...msg,
                        text: fallbackText,
                        decryptState: 'DECRYPTED',
                        fallbackPreview: fallbackText
                    };
                } else {
                    return {
                        ...msg,
                        text: '⚠️ DECRYPT_FAILED',
                        decryptState: 'DECRYPT_FAILED'
                    };
                }
            } catch (err) {
                const fallbackText = msg.data?.pushPreview || msg.data?.preview || (msg.data?.text && typeof msg.data.text === 'string' && !msg.data.text.startsWith('{') ? msg.data.text : null);
                if (fallbackText) {
                    return {
                        ...msg,
                        text: fallbackText,
                        decryptState: 'DECRYPTED',
                        fallbackPreview: fallbackText
                    };
                }
                return {
                    ...msg,
                    text: '⚠️ DECRYPT_FAILED',
                    decryptState: 'DECRYPT_FAILED'
                };
            }
            return msg;
        }));
    }, []);
    const sortMessagesList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((list)=>{
        return [
            ...list
        ].sort((a, b)=>{
            const getTime = (m)=>{
                if (m.createdAt) {
                    const t = new Date(m.createdAt).getTime();
                    if (!isNaN(t) && t > 0) return t;
                }
                if (m.timestamp) {
                    const t = new Date(m.timestamp).getTime();
                    if (!isNaN(t) && t > 0) return t;
                }
                const numId = parseInt(String(m.id));
                if (!isNaN(numId) && numId < 1000000000) return numId;
                return 0;
            };
            const timeA = getTime(a);
            const timeB = getTime(b);
            if (timeA > 0 && timeB > 0 && timeA !== timeB) {
                return timeA - timeB;
            }
            const aId = parseInt(String(a.id)) || 0;
            const bId = parseInt(String(b.id)) || 0;
            return aId - bId;
        });
    }, []);
    const fetchOlderMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (isLoadingOlderRef.current || !hasMoreOlderRef.current) return;
        const currentChatId = chat.id;
        const currentOtherUserId = chat.otherUserId;
        const validServerMsgs = messagesRef.current.filter((m)=>{
            const n = Number(m.id);
            return !isNaN(n) && n > 0 && n < 1000000000;
        });
        if (validServerMsgs.length === 0) {
            setHasMoreOlder(false);
            hasMoreOlderRef.current = false;
            return;
        }
        const oldestId = Math.min(...validServerMsgs.map((m)=>Number(m.id)));
        if (!oldestId || oldestId <= 1) {
            setHasMoreOlder(false);
            hasMoreOlderRef.current = false;
            return;
        }
        setIsLoadingOlder(true);
        isLoadingOlderRef.current = true;
        try {
            const container = chatMessagesContainerRef.current;
            const prevScrollHeight = container ? container.scrollHeight : 0;
            const prevScrollTop = container ? container.scrollTop : 0;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].getMessages(currentChatId, 50, oldestId);
            if (res && res.success && Array.isArray(res.data)) {
                if (res.data.length < 50) {
                    setHasMoreOlder(false);
                    hasMoreOlderRef.current = false;
                }
                if (res.data.length > 0) {
                    const processed = await processRawMessages(res.data, currentOtherUserId, currentChatId);
                    const olderReactions = extractReactionsMap(processed);
                    if (Object.keys(olderReactions).length > 0) {
                        setReactions((prev)=>({
                                ...olderReactions,
                                ...prev
                            }));
                    }
                    setMessages((prev)=>{
                        const existingIds = new Set(prev.map((m)=>String(m.id)));
                        const newMsgs = processed.filter((m)=>!existingIds.has(String(m.id)));
                        if (newMsgs.length === 0) return prev;
                        const merged = sortMessagesList([
                            ...newMsgs,
                            ...prev
                        ]);
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].set(currentChatId, merged);
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveLocalMessages"](Number(currentChatId), merged).catch(()=>{});
                        return merged;
                    });
                    // Anchor scroll position to prevent visual jump
                    requestAnimationFrame(()=>{
                        if (container) {
                            const newScrollHeight = container.scrollHeight;
                            container.scrollTop = prevScrollTop + (newScrollHeight - prevScrollHeight);
                        }
                    });
                }
            } else {
                setHasMoreOlder(false);
                hasMoreOlderRef.current = false;
            }
        } catch (err) {
            console.error("Failed to load older messages:", err);
        } finally{
            setIsLoadingOlder(false);
            isLoadingOlderRef.current = false;
        }
    }, [
        chat.id,
        chat.otherUserId,
        processRawMessages,
        sortMessagesList
    ]);
    // Throttled via requestAnimationFrame to avoid rapid state updates while
    // the user is flinging through the message list on Android.
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (scrollRafRef.current !== null) return;
        scrollRafRef.current = requestAnimationFrame(()=>{
            scrollRafRef.current = null;
            const container = chatMessagesContainerRef.current;
            if (!container) return;
            const { scrollTop, scrollHeight, clientHeight } = container;
            const distanceToBottom = scrollHeight - scrollTop - clientHeight;
            const isNear = distanceToBottom < 120;
            isNearBottomRef.current = isNear;
            if (isNear) {
                setShowScrollBottom(false);
                setUnreadCount(0);
            } else {
                setShowScrollBottom(true);
            }
            // Check if user reached top to fetch older messages
            if (scrollTop < 120 && !isLoadingOlderRef.current && hasMoreOlderRef.current) {
                fetchOlderMessages();
            }
        });
    }, [
        fetchOlderMessages
    ]);
    // Reset scroll state on chat switch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        isInitialLoadRef.current = true;
        isNearBottomRef.current = true;
        setShowScrollBottom(false);
        setUnreadCount(0);
        prevMessagesLengthRef.current = 0;
        setIsLoadingOlder(false);
        setHasMoreOlder(true);
        isLoadingOlderRef.current = false;
        hasMoreOlderRef.current = true;
    }, [
        chat.id
    ]);
    // Manage scrolling on message updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const currentLen = messages.length;
        const prevLen = prevMessagesLengthRef.current;
        prevMessagesLengthRef.current = currentLen;
        if (currentLen === 0) return;
        if (isInitialLoadRef.current) {
            requestAnimationFrame(()=>{
                requestAnimationFrame(()=>{
                    scrollToBottom('auto');
                    isInitialLoadRef.current = false;
                });
            });
            return;
        }
        // If we just prepended older messages via pagination, do not auto-scroll to bottom!
        if (isLoadingOlderRef.current) {
            return;
        }
        if (currentLen > prevLen) {
            const lastMsg = messages[messages.length - 1];
            const currentUserId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id;
            const isMe = lastMsg?.from === 'me' || lastMsg?.senderId && String(lastMsg.senderId) === String(currentUserId);
            if (isMe || isNearBottomRef.current) {
                requestAnimationFrame(()=>{
                    scrollToBottom('smooth');
                    setUnreadCount(0);
                });
            } else {
                const newIncoming = currentLen - prevLen;
                setUnreadCount((prev)=>prev + newIncoming);
                setShowScrollBottom(true);
            }
        }
    }, [
        messages,
        chat.id
    ]);
    // Keep scroll pinned to bottom when content resizes (e.g. image loads) if user is near bottom
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const innerEl = messagesInnerRef.current;
        if (!innerEl) return;
        const observer = new ResizeObserver(()=>{
            if (!isLoadingOlderRef.current && isNearBottomRef.current && chatMessagesContainerRef.current) {
                chatMessagesContainerRef.current.scrollTop = chatMessagesContainerRef.current.scrollHeight;
            }
        });
        observer.observe(innerEl);
        return ()=>observer.disconnect();
    }, []);
    const { theme, systemTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [currentTheme, setCurrentTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("light");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrentTheme(theme === "system" ? systemTheme : theme);
    }, [
        theme,
        systemTheme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let isCancelled = false;
        const currentChatId = chat.id; // capture at effect start to guard async callbacks
        const currentOtherUserId = chat.otherUserId; // capture primitive values to avoid stale closure
        // Reset reactions for the new chat immediately to prevent stale bleed-through
        setReactions({});
        // instant local cache hydration (0ms load time)
        const memCached = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].get(currentChatId);
        if (memCached && Array.isArray(memCached) && memCached.length > 0) {
            setMessages(memCached);
            const cachedReactions = extractReactionsMap(memCached);
            // Always replace reactions (not merge) so fresh chat data wins
            setReactions(cachedReactions);
            setIsLoadingMessages(false);
        } else {
            setMessages((prev)=>{
                if (prev && prev.length > 0) return prev;
                return prev;
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLocalMessages"](Number(currentChatId), undefined, 100).then((localMsgs)=>{
                if (!isCancelled && localMsgs && localMsgs.length > 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].set(currentChatId, localMsgs);
                    try {
                        localStorage.setItem(`ping_chat_msgs_${currentChatId}`, JSON.stringify(localMsgs.slice(-50)));
                    } catch (_) {}
                    setMessages(localMsgs);
                    const dbReactions = extractReactionsMap(localMsgs);
                    if (Object.keys(dbReactions).length > 0) {
                        // Replace instead of merge to avoid stale reactions from previous chat
                        setReactions(dbReactions);
                    }
                    setIsLoadingMessages(false);
                    requestAnimationFrame(()=>{
                        scrollToBottom('auto');
                    });
                }
            }).catch(()=>{});
        }
        const tryMarkRead = ()=>{
            if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].markAsRead(currentChatId).catch(()=>{});
            }
        };
        const fetchMessagesFromApi = ()=>{
            tryMarkRead();
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].getMessages(currentChatId, 100).then(async (res)=>{
                if (res.success && res.data && !isCancelled) {
                    const rawMsgs = res.data;
                    const currentUserId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id;
                    const processed = await processRawMessages(rawMsgs, currentOtherUserId, currentChatId);
                    const apiReactions = extractReactionsMap(processed);
                    // Replace with authoritative server reactions (don't merge to avoid stale data)
                    setReactions(apiReactions);
                    if (rawMsgs.length < 100) {
                        setHasMoreOlder(false);
                        hasMoreOlderRef.current = false;
                    } else {
                        setHasMoreOlder(true);
                        hasMoreOlderRef.current = true;
                    }
                    // Double-check: only apply results if this effect is still for the active chat
                    if (!isCancelled) {
                        // MERGE instead of replace: preserve any messages already in state from socket events
                        // that arrived while this API fetch was in-flight (race condition fix)
                        setMessages((prev)=>{
                            const apiIds = new Set(processed.map((m)=>String(m.id)));
                            // If API returned 0 messages (chat cleared or empty room),
                            // discard all stale cached messages. Only keep pending in-flight optimistic sending messages.
                            if (processed.length === 0) {
                                const pendingOptimistic = prev.filter((m)=>String(m.id).startsWith('temp-') || m.status === 'sending');
                                if (pendingOptimistic.length === 0) {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].delete(Number(currentChatId));
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearLocalRoomMessages"](Number(currentChatId)).catch(()=>{});
                                    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                                    ;
                                }
                                return pendingOptimistic;
                            }
                            // Keep optimistic in-flight messages OR socket messages received
                            // whose ID is newer than the newest message in this API batch,
                            // AND keep older messages that were previously loaded from localDb or older pagination!
                            const maxServerId = Math.max(...processed.map((m)=>Number(m.id) || 0));
                            const minServerId = Math.min(...processed.map((m)=>Number(m.id) || Infinity));
                            const socketOnlyMessages = prev.filter((m)=>{
                                if (apiIds.has(String(m.id))) return false;
                                if (String(m.id).startsWith('temp-') || m.status === 'sending') return true;
                                const numId = Number(m.id);
                                if (!isNaN(numId) && numId > maxServerId) return true;
                                if (!isNaN(numId) && numId < minServerId) return true;
                                return false;
                            });
                            const merged = sortMessagesList([
                                ...processed,
                                ...socketOnlyMessages
                            ]);
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].set(currentChatId, merged);
                            try {
                                localStorage.setItem(`ping_chat_msgs_${currentChatId}`, JSON.stringify(merged.slice(-50)));
                            } catch (_) {}
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveLocalMessages"](Number(currentChatId), merged).catch(()=>{});
                            return merged;
                        });
                        if (processed.length > 0) {
                            const lastMsg = processed[processed.length - 1];
                            let previewText = lastMsg.text;
                            if (lastMsg.type === 'sticker') previewText = '[sticker]';
                            else if (lastMsg.type === 'image') previewText = '📷 Photo';
                            else if (lastMsg.type === 'video') previewText = '🎥 Video';
                            else if (lastMsg.type === 'audio' || lastMsg.type === 'voice') previewText = '🎤 Voice message';
                            else if (lastMsg.type === 'document' || lastMsg.type === 'attachment') previewText = '📄 Document';
                            else if (lastMsg.type === 'location') previewText = '📍 Location';
                            else if (lastMsg.type === 'poll') previewText = '📊 Poll';
                            else if (lastMsg.type === 'contact') previewText = '👤 Contact';
                            if (previewText && previewText !== '🔒 Encrypted message') {
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCachedPreview"](currentChatId, previewText, lastMsg.id);
                                const isMsgMine = lastMsg.from === 'me' || !!currentUserId && !!lastMsg.senderId && String(lastMsg.senderId) === String(currentUserId);
                                if (onRoomUpdated) {
                                    setTimeout(()=>{
                                        onRoomUpdated(currentChatId, {
                                            preview: previewText,
                                            time: lastMsg.time,
                                            isMe: isMsgMine,
                                            lastMessageTimestamp: lastMsg.createdAt || lastMsg.timestamp,
                                            bumpToTop: false
                                        });
                                    }, 0);
                                }
                            }
                        } else {
                            // Room has no messages (e.g. cleared)
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCachedPreview"](currentChatId, 'No messages yet', 0);
                            if (onRoomUpdated) {
                                setTimeout(()=>{
                                    onRoomUpdated(currentChatId, {
                                        preview: 'No messages yet',
                                        time: undefined,
                                        isMe: false
                                    });
                                }, 0);
                            }
                        }
                    }
                }
            }).catch((err)=>console.error("Error fetching messages:", err)).finally(()=>{
                if (!isCancelled) {
                    setIsLoadingMessages(false);
                }
            });
        };
        fetchMessagesFromApi();
        // Track when the document was last hidden so we can skip refetches for brief
        // screen switches (e.g. Android back button, quick notification pull-down).
        // Only a genuine absence of ≥5 s warrants a full message resync.
        let hiddenAt = null;
        let focusDebounceTimer = null;
        const MIN_HIDDEN_MS = 5000; // only refetch if hidden for ≥ 5 s
        const DEBOUNCE_MS = 600; // coalesce rapid focus/visibility events
        const scheduleFetch = ()=>{
            if (focusDebounceTimer) clearTimeout(focusDebounceTimer);
            focusDebounceTimer = setTimeout(()=>{
                if (!isCancelled) fetchMessagesFromApi();
            }, DEBOUNCE_MS);
        };
        const handleVisibilityChange = ()=>{
            if (typeof document === 'undefined') return;
            if (document.visibilityState === 'hidden') {
                hiddenAt = Date.now();
            } else {
                if (currentChatId) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].markAsRead(currentChatId).catch(()=>{});
                }
                // Only refetch if absent long enough to have missed messages
                const hiddenDuration = hiddenAt ? Date.now() - hiddenAt : 0;
                hiddenAt = null;
                if (hiddenDuration >= MIN_HIDDEN_MS) {
                    scheduleFetch();
                }
            }
        };
        const handleFocus = ()=>{
            // window focus fires on every click/alt-tab; only act if visibilitychange
            // already noted a long absence, or if page was initially hidden (e.g. PWA cold open)
            if (currentChatId) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].markAsRead(currentChatId).catch(()=>{});
            }
            if (hiddenAt && Date.now() - hiddenAt >= MIN_HIDDEN_MS) {
                hiddenAt = null;
                scheduleFetch();
            }
        };
        const handleReconnectSync = (e)=>{
            const customEvent = e;
            if (!customEvent.detail?.roomId || String(customEvent.detail.roomId) === String(currentChatId)) {
                // Reconnect always warrants a resync regardless of hidden duration
                scheduleFetch();
            }
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return ()=>{
            isCancelled = true;
            if (focusDebounceTimer) clearTimeout(focusDebounceTimer);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        };
    }, [
        chat.id
    ]); // only depend on chat.id (primitive) — chat object reference changes on every parent socket update
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!socket) return;
        const handleNewMessage = async (data)=>{
            if (String(data.roomId) === String(chat.id)) {
                const currentUserId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id;
                const isSystem = data.type === 'system';
                const isFromOtherUser = String(data.senderId) !== String(currentUserId);
                const isMe = !isSystem && !isFromOtherUser;
                const rawId = data.messageId || data.id;
                if (rawId) {
                    const checkId = String(rawId);
                    if (processedMessageIds.current.has(checkId)) {
                        return;
                    }
                    processedMessageIds.current.add(checkId);
                    if (processedMessageIds.current.size > 1000) {
                        const first = processedMessageIds.current.values().next().value;
                        if (first) processedMessageIds.current.delete(first);
                    }
                }
                const msgId = rawId || Date.now();
                let rawText = data.text;
                let finalText = rawText;
                let decryptState = undefined;
                if (typeof rawText === 'string' && (rawText.includes('__e2ee') || rawText.includes('_e2ee')) && rawText.startsWith('{')) {
                    try {
                        const decrypted = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decryptMessage"](data.senderId, rawText, isMe, chat.id, msgId);
                        if (decrypted && decrypted !== '⚠️ DECRYPT_FAILED' && !decrypted.includes('Unable to Decrypt')) {
                            try {
                                const parsed = JSON.parse(decrypted);
                                if (parsed && typeof parsed.text === 'string') {
                                    finalText = parsed.text;
                                } else {
                                    finalText = decrypted;
                                }
                            } catch  {
                                finalText = decrypted;
                            }
                            decryptState = 'DECRYPTED';
                        } else {
                            const fallback = data.data?.pushPreview || data.data?.preview || data.pushPreview || (()=>{
                                try {
                                    const p = JSON.parse(rawText);
                                    return p.pushPreview || p.preview || null;
                                } catch  {
                                    return null;
                                }
                            })();
                            if (fallback) {
                                finalText = fallback;
                                decryptState = 'DECRYPTED';
                            } else {
                                finalText = '⚠️ DECRYPT_FAILED';
                                decryptState = 'DECRYPT_FAILED';
                            }
                        }
                    } catch (e) {
                        const fallback = data.data?.pushPreview || data.data?.preview || data.pushPreview;
                        if (fallback) {
                            finalText = fallback;
                            decryptState = 'DECRYPTED';
                        } else {
                            finalText = '⚠️ DECRYPT_FAILED';
                            decryptState = 'DECRYPT_FAILED';
                        }
                    }
                }
                let previewText = finalText;
                if (data.type === 'sticker') previewText = '[sticker]';
                else if (data.type === 'image') previewText = '📷 Photo';
                else if (data.type === 'video') previewText = '🎥 Video';
                else if (data.type === 'audio' || data.type === 'voice') previewText = '🎤 Voice message';
                else if (data.type === 'document' || data.type === 'attachment') previewText = '📄 Document';
                // Guard: never send raw E2EE JSON or empty text as the room preview.
                // Only propagate if we have a real plaintext result.
                const isE2EEJson = typeof previewText === 'string' && (previewText.includes('"__e2ee"') || previewText.startsWith('{"__e2ee'));
                if (previewText && previewText !== '🔒 Encrypted message' && !isE2EEJson) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCachedPreview"](chat.id, previewText, msgId);
                    if (onRoomUpdated) {
                        setTimeout(()=>{
                            onRoomUpdated(chat.id, {
                                preview: previewText,
                                time: new Date().toLocaleTimeString("en-US", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: true
                                }),
                                lastMessageTimestamp: new Date().toISOString(),
                                bumpToTop: true,
                                isMe
                            });
                        }, 0);
                    }
                }
                setMessages((prev)=>{
                    if (prev.some((m)=>String(m.id) === String(msgId))) {
                        return prev;
                    }
                    // If this message is from current user, check if we already have an optimistic message in state
                    const clientMsgId = data.clientMessageId || data.data?.clientMessageId;
                    const optimisticIdx = prev.findIndex((m)=>{
                        if (m.from !== 'me') return false;
                        if (clientMsgId && (String(m.id) === String(clientMsgId) || m.clientMessageId === String(clientMsgId))) {
                            return true;
                        }
                        if (typeof m.id === 'number' && m.id > 1000000000000 && isMe) {
                            if (m.status === 'sending' && (m.text === finalText || m.type === data.type)) {
                                return true;
                            }
                        }
                        return false;
                    });
                    if (optimisticIdx !== -1) {
                        // Reconcile optimistic message in place to prevent duplicate message cards!
                        const updated = [
                            ...prev
                        ];
                        const oldMsg = updated[optimisticIdx];
                        updated[optimisticIdx] = {
                            ...oldMsg,
                            id: msgId,
                            status: isMe ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHighestMessageStatus"])(oldMsg.status === 'sending' ? 'sent' : oldMsg.status, data.status) : 'delivered',
                            createdAt: data.createdAt || oldMsg.createdAt,
                            data: {
                                ...oldMsg.data || {},
                                ...data.data || {}
                            }
                        };
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, updated);
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveLocalMessage"](Number(chat.id), updated[optimisticIdx]).catch(()=>{});
                        return updated;
                    }
                    const newMsgObj = {
                        id: msgId,
                        roomId: Number(chat.id),
                        from: isMe ? "me" : "them",
                        senderId: data.senderId,
                        senderName: data.senderName || (isMe ? "You" : "User"),
                        text: finalText,
                        decryptState: decryptState,
                        type: data.type || "text",
                        data: data.data || null,
                        time: new Date().toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true
                        }),
                        createdAt: data.createdAt || new Date().toISOString(),
                        status: isMe ? "sent" : "delivered"
                    };
                    const next = [
                        ...prev,
                        newMsgObj
                    ];
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveLocalMessage"](Number(chat.id), newMsgObj).catch(()=>{});
                    if (finalText.includes("pinned a message") || finalText.includes("unpinned a message")) {
                        setTimeout(()=>{
                            setPinnedMessages((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPinnedMessages"])(chat.id));
                        }, 100);
                    }
                    return next;
                });
                // Always mark as delivered to server when message received in chat from another user
                if (isFromOtherUser) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].markAsDelivered(chat.id, data.id ? [
                        data.id
                    ] : undefined).catch(()=>{});
                }
                // Mark room as read if user is viewing this chat
                if (isFromOtherUser && typeof document !== 'undefined' && document.visibilityState === 'visible') {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].markAsRead(chat.id).catch(()=>{});
                }
            }
        };
        const handleMessagesRead = (data)=>{
            if (String(data.roomId) === String(chat.id)) {
                if (data.messageIds && Array.isArray(data.messageIds)) {
                    data.messageIds.forEach((id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalReadReceipts"].add(String(id)));
                }
                setMessages((prev)=>{
                    const next = prev.map((m)=>{
                        if (m.from === 'me') {
                            if (!data.messageIds || data.messageIds.length === 0 || data.messageIds.some((id)=>String(id) === String(m.id))) {
                                try {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateLocalMessageStatus"](Number(m.id), 'read').catch(()=>{});
                                } catch (_) {}
                                return {
                                    ...m,
                                    status: 'read'
                                };
                            }
                        }
                        return m;
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                    return next;
                });
            }
        };
        const handleMessagesDelivered = (data)=>{
            if (String(data.roomId) === String(chat.id)) {
                const deliveredIds = Array.isArray(data.messageIds) ? data.messageIds.map((id)=>String(id)) : [];
                deliveredIds.forEach((id)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalDeliveredReceipts"].add(id);
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalDeliveredReceipts"].size > 500) {
                        const oldestId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalDeliveredReceipts"].values().next().value;
                        if (oldestId) __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalDeliveredReceipts"].delete(oldestId);
                    }
                });
                setMessages((prev)=>{
                    const next = prev.map((m)=>{
                        const isMe = m.from === 'me' || m.isMe;
                        if (isMe && m.status !== 'read') {
                            const matchesMsg = !data.messageIds || data.messageIds.length === 0 || data.messageIds.some((id)=>String(id) === String(m.id) || m.clientMessageId && String(id) === String(m.clientMessageId));
                            if (matchesMsg) {
                                try {
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateLocalMessageStatus"](Number(m.id), 'delivered').catch(()=>{});
                                } catch (_) {}
                                return {
                                    ...m,
                                    status: 'delivered'
                                };
                            }
                        }
                        return m;
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                    return next;
                });
            }
        };
        const handleReaction = (data)=>{
            if (!data) return;
            if (String(data.roomId) === String(chat.id)) {
                const msgId = data.messageId || data.id;
                if (!msgId) return;
                // If server sent full normalized reactions object
                if (data.reactions && typeof data.reactions === 'object') {
                    const normalized = {};
                    for (const [em, reactors] of Object.entries(data.reactions)){
                        const count = Array.isArray(reactors) ? reactors.length : Number(reactors) || 0;
                        if (count > 0) normalized[em] = count;
                    }
                    setReactions((prev)=>({
                            ...prev,
                            [msgId]: normalized
                        }));
                } else {
                    setReactions((prev)=>{
                        const msgR = {
                            ...prev[msgId] || {}
                        };
                        const em = data.emoji || data.reaction;
                        if (em) {
                            if (data.removed) {
                                const count = (msgR[em] || 1) - 1;
                                if (count <= 0) delete msgR[em];
                                else msgR[em] = count;
                            } else {
                                msgR[em] = (msgR[em] || 0) + 1;
                            }
                        }
                        return {
                            ...prev,
                            [msgId]: msgR
                        };
                    });
                }
                // Also update message in messages array so it stays persisted in cache & localStorage
                setMessages((prev)=>{
                    const next = prev.map((m)=>{
                        if (String(m.id) === String(msgId) || m.clientMessageId && String(m.clientMessageId) === String(msgId)) {
                            return {
                                ...m,
                                data: {
                                    ...m.data || {},
                                    reactions: data.reactions || data.message?.data?.reactions || m.data?.reactions
                                }
                            };
                        }
                        return m;
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                    try {
                        localStorage.setItem(`ping_chat_msgs_${chat.id}`, JSON.stringify(next.slice(-50)));
                    } catch (_) {}
                    return next;
                });
            }
        };
        const handleTyping = (data)=>{
            if (String(data.roomId) === String(chat.id)) {
                const currentUserId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id;
                if (String(data.userId) === String(currentUserId)) return;
                if (data.isTyping) {
                    setIsOtherUserTyping(true);
                    setTypingUsername(data.username || "Someone");
                    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
                    typingTimerRef.current = setTimeout(()=>{
                        setIsOtherUserTyping(false);
                    }, 3000);
                } else {
                    setIsOtherUserTyping(false);
                    if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
                }
            }
        };
        const handleMessageDeleted = (data)=>{
            if (String(data.roomId) === String(chat.id)) {
                setMessages((prev)=>{
                    const next = prev.map((m)=>{
                        if (String(m.id) === String(data.messageId)) {
                            return {
                                ...m,
                                type: 'deleted',
                                text: '🚫 This message was deleted',
                                data: null
                            };
                        }
                        return m;
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                    return next;
                });
            }
        };
        const handlePinnedUpdated = (data)=>{
            if (data && String(data.roomId) === String(chat.id)) {
                const pName = data.pinnedByName || data.message?.pinnedByName || data.message?.senderName || "Someone";
                if (data.isPinned) {
                    // Find message in current list, fallback to socket payload
                    let targetMsg = messagesRef.current.find((m)=>String(m.id) === String(data.messageId));
                    if (!targetMsg && data.message) targetMsg = data.message;
                    const msgToPin = targetMsg ? {
                        ...targetMsg,
                        pinnedByName: pName,
                        pinnedBy: data.pinnedBy
                    } : {
                        id: data.messageId,
                        text: data.message?.text || data.message?.data?.caption || "Pinned message",
                        roomId: chat.id,
                        pinnedByName: pName,
                        pinnedBy: data.pinnedBy
                    };
                    // pinMessage writes to localStorage + dispatches pinned_messages_updated (caught by handlePinnedUpdate)
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pinMessage"])(chat.id, msgToPin, data.durationDays || 7, pName);
                } else {
                    // unpinMessage writes to localStorage + dispatches pinned_messages_updated
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unpinMessage"])(chat.id, data.messageId);
                }
            // handlePinnedUpdate (window listener) will catch the event and run deduped setPinnedMessages
            // No separate API call needed here — initial load covers server sync
            }
        };
        const handleChatClearedSocket = (data)=>{
            if (data && String(data.roomId) === String(chat.id)) {
                setMessages([]);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].delete(Number(chat.id));
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearLocalRoomMessages"](Number(chat.id)).catch(()=>{});
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                if (onRoomUpdated) {
                    onRoomUpdated(chat.id, {
                        preview: "No messages yet",
                        time: undefined
                    });
                }
            }
        };
        socket.emit('join:chat', chat.id);
        socket.on('chat:new_message', handleNewMessage);
        socket.on('chat:messages_read', handleMessagesRead);
        socket.on('chat:messages_delivered', handleMessagesDelivered);
        socket.on('chat:reaction', handleReaction);
        socket.on('chat:typing', handleTyping);
        socket.on('chat:message_deleted', handleMessageDeleted);
        socket.on('chat:pinned_updated', handlePinnedUpdated);
        socket.on('chat:cleared', handleChatClearedSocket);
        return ()=>{
            socket.emit('leave:chat', chat.id);
            socket.off('chat:new_message', handleNewMessage);
            socket.off('chat:messages_read', handleMessagesRead);
            socket.off('chat:messages_delivered', handleMessagesDelivered);
            socket.off('chat:reaction', handleReaction);
            socket.off('chat:typing', handleTyping);
            socket.off('chat:message_deleted', handleMessageDeleted);
            socket.off('chat:pinned_updated', handlePinnedUpdated);
            socket.off('chat:cleared', handleChatClearedSocket);
        };
    // NOTE: messages is intentionally NOT in deps — we use messagesRef.current
    // inside handlers to avoid stale closures without re-registering listeners.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        socket,
        chat.id,
        chat.otherUserId
    ]);
    // Listen for call:message_sent event dispatched by GlobalCallUI after a call ends
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleCallMessageSent = (e)=>{
            const { roomId, message } = e.detail;
            if (String(roomId) !== String(chat.id)) return;
            setMessages((prev)=>{
                if (prev.some((m)=>String(m.id) === String(message.id))) return prev;
                const next = [
                    ...prev,
                    message
                ];
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                return next;
            });
        };
        window.addEventListener('call:message_sent', handleCallMessageSent);
        const handleOutboxSynced = (e)=>{
            const { tempId, serverId, roomId, status } = e.detail;
            if (String(roomId) !== String(chat.id)) return;
            setMessages((prev)=>{
                const next = prev.map((m)=>String(m.id) === String(tempId) ? {
                        ...m,
                        id: serverId,
                        status: status || 'sent'
                    } : m);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                return next;
            });
        };
        window.addEventListener('chat:message_status_synced', handleOutboxSynced);
        // Send offline BLE read receipt and clear unread badge locally whenever room is opened
        if (chat.id) {
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshChatManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshChatManager"].sendReadReceipt(chat.id, chat.otherUserId);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }
        // Listen for offline mesh message received in real-time
        const handleMeshMessageReceived = (e)=>{
            const msg = e.detail;
            if (!msg || String(msg.roomId) !== String(chat.id)) return;
            setMessages((prev)=>{
                if (prev.some((m)=>String(m.id) === String(msg.id))) return prev;
                const next = [
                    ...prev,
                    msg
                ];
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                return next;
            });
            // Acknowledge read immediately since user is actively looking at this chat
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshChatManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["meshChatManager"].sendReadReceipt(chat.id, chat.otherUserId);
            window.dispatchEvent(new CustomEvent('chat:messages_read', {
                detail: {
                    roomId: String(chat.id),
                    userId: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id
                }
            }));
        };
        window.addEventListener('chat:new_message', handleMeshMessageReceived);
        // Listen for offline mesh delivery ACKs in real-time
        const handleMeshDelivered = (e)=>{
            const { roomId, messageIds } = e.detail || {};
            if (String(roomId) !== String(chat.id)) return;
            setMessages((prev)=>{
                const next = prev.map((m)=>{
                    if (m.from === 'me' && (!messageIds || messageIds.some((id)=>String(id) === String(m.id)))) {
                        return {
                            ...m,
                            status: 'delivered'
                        };
                    }
                    return m;
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                return next;
            });
        };
        window.addEventListener('chat:messages_delivered', handleMeshDelivered);
        // Listen for offline mesh read ACKs in real-time (turns sent messages into blue double ticks)
        const handleMeshRead = (e)=>{
            const { roomId, userId } = e.detail || {};
            if (String(roomId) !== String(chat.id)) return;
            const currentUserId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user?.id;
            if (!userId || String(userId) !== String(currentUserId)) {
                setMessages((prev)=>{
                    const next = prev.map((m)=>{
                        if (m.from === 'me' || m.isMe) {
                            return {
                                ...m,
                                status: 'read'
                            };
                        }
                        return m;
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                    return next;
                });
            }
        };
        window.addEventListener('chat:messages_read', handleMeshRead);
        return ()=>{
            window.removeEventListener('call:message_sent', handleCallMessageSent);
            window.removeEventListener('chat:message_status_synced', handleOutboxSynced);
            window.removeEventListener('chat:new_message', handleMeshMessageReceived);
            window.removeEventListener('chat:messages_delivered', handleMeshDelivered);
            window.removeEventListener('chat:messages_read', handleMeshRead);
        };
    }, [
        chat.id,
        chat.otherUserId
    ]);
    const handleQuickGreeting = (text)=>{
        setMessage(text);
        if (textareaRef.current) {
            textareaRef.current.focus();
        }
    };
    const onEmojiClick = (emojiData)=>{
        setMessage((prev)=>prev + emojiData.emoji);
    };
    const { handleInput, handleMentionSelect, handleReply, handleDeleteMessage, handleForward, handleReact, sendMessage, handleAttachment, onFileChange, handleSendAttachment, handleCameraCapture, handleSendContact, handleSendPoll, handleSendEvent, handleSendVoice, handleCallEnd, linkPreview, onRemoveLinkPreview } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChatHandlers"])({
        chat,
        socket,
        message,
        setMessage,
        setMessages,
        textareaRef,
        isGroupChat,
        setMentionStartIndex,
        setMentionQuery,
        setMentionListVisible,
        mentionStartIndex,
        mentionQuery,
        setReplyTarget,
        replyTarget,
        isBulkDelete,
        selectedMessages,
        setSelectedMessages,
        setIsSelectionMode,
        setDeleteModalOpen,
        deleteMsgTarget,
        setDeleteMsgTarget,
        setForwardMsg,
        setForwardOpen,
        setReactions,
        setShowEmojiPicker,
        onMessageSent,
        onRoomUpdated,
        showAttachmentMenu,
        setShowAttachmentMenu,
        selectedFiles,
        setSelectedFiles,
        setActiveFileIndex,
        setFileCaption,
        setShowCameraModal,
        setShowContactModal,
        setShowPollModal,
        setShowEventModal,
        setShowMicModal
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex w-full h-full relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-col h-full transition-all duration-300 ${(showContactInfo || showMessageInfo) && !isMobileDevice ? 'md:w-[calc(100%-400px)] md:border-r border-[#d1d7db] dark:border-[#2d3139] w-full' : 'w-full'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$shared$2f$FilePreviewOverlay$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilePreviewOverlay"], {
                        selectedFiles: selectedFiles,
                        activeFileIndex: activeFileIndex,
                        setActiveFileIndex: setActiveFileIndex,
                        fileCaption: fileCaption,
                        setFileCaption: setFileCaption,
                        onClose: ()=>{
                            setSelectedFiles([]);
                            setFileCaption("");
                            setActiveFileIndex(0);
                        },
                        onSend: handleSendAttachment,
                        onAddMore: ()=>fileInputRef.current?.click()
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 1903,
                        columnNumber: 9
                    }, this),
                    showCameraModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$CameraModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CameraModal"], {
                        onClose: ()=>setShowCameraModal(false),
                        onCapture: handleCameraCapture
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 1914,
                        columnNumber: 29
                    }, this),
                    showContactModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$ContactModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContactModal"], {
                        onClose: ()=>setShowContactModal(false),
                        onSend: handleSendContact
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 1915,
                        columnNumber: 30
                    }, this),
                    showPollModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$PollModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PollModal"], {
                        onClose: ()=>setShowPollModal(false),
                        onSend: handleSendPoll
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 1916,
                        columnNumber: 27
                    }, this),
                    showEventModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$EventModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EventModal"], {
                        onClose: ()=>setShowEventModal(false),
                        onSend: handleSendEvent
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 1917,
                        columnNumber: 28
                    }, this),
                    showMicModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$MicModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MicModal"], {
                        onClose: ()=>setShowMicModal(false),
                        onSend: handleSendVoice
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 1918,
                        columnNumber: 26
                    }, this),
                    showLockModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$LockChatModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LockChatModal"], {
                        onClose: ()=>setShowLockModal(false),
                        onLock: (code, isHidden)=>{
                            onLockChat(chat.id, code, isHidden);
                            onBack();
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 1920,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$ChatHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatHeader"], {
                        chat: {
                            ...chat,
                            isTyping: isOtherUserTyping || chat.isTyping,
                            typingUsername: typingUsername || chat.typingUsername
                        },
                        isSelectionMode: isSelectionMode,
                        setIsSelectionMode: setIsSelectionMode,
                        selectedMessages: selectedMessages,
                        setSelectedMessages: setSelectedMessages,
                        setIsBulkDelete: setIsBulkDelete,
                        setDeleteModalOpen: setDeleteModalOpen,
                        onBack: onBack,
                        isSearchOpen: isSearchOpen,
                        setIsSearchOpen: setIsSearchOpen,
                        searchQuery: searchQuery,
                        setSearchQuery: setSearchQuery,
                        setShowContactInfo: setShowContactInfo,
                        getAvatarColor: getAvatarColor,
                        isOtherUserOnline: isOtherUserOnline,
                        otherUserLastSeen: otherUserLastSeen,
                        isMuted: isMuted,
                        setIsMuted: handleToggleMute,
                        setShowLockModal: setShowLockModal,
                        onLockChat: onLockChat,
                        chatWallpaper: chatWallpaper,
                        setChatWallpaper: setChatWallpaper,
                        setMessages: setMessages,
                        messages: messages,
                        onDeleteChat: onDeleteChat,
                        socket: socket,
                        onRoomUpdated: onRoomUpdated,
                        handleReply: handleReply,
                        handleForward: handleForward,
                        setShowMessageInfo: setShowMessageInfo,
                        setInfoMessage: setInfoMessage,
                        onEditMessage: handleOpenEditModal,
                        handleReact: handleReact
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 1930,
                        columnNumber: 9
                    }, this),
                    (()=>{
                        const isParticipant = chat.membershipStatus ? chat.membershipStatus === 'active' : !chat.isRemoved && (!isGroupChat || !chat.members || chat.members.some((m)=>(String(m.id) === String(user?.id) || String(m.userId || '') === String(user?.id)) && m.status !== 'removed' && m.status !== 'left'));
                        return isParticipant && pinnedMessages.length > 0;
                    })() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-2 bg-white/95 dark:bg-[#111b21]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 z-20 shrink-0 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>{
                                    if (pinnedMessages.length > 1) {
                                        setIsPinnedModalOpen(true);
                                    } else {
                                        const latestPinned = pinnedMessages[pinnedMessages.length - 1];
                                        if (latestPinned) {
                                            const el = document.getElementById(`msg-${latestPinned.id}`);
                                            if (el) {
                                                el.scrollIntoView({
                                                    behavior: 'smooth',
                                                    block: 'center'
                                                });
                                                el.classList.add('ring-2', 'ring-indigo-500', 'transition-all');
                                                setTimeout(()=>el.classList.remove('ring-2', 'ring-indigo-500'), 2000);
                                            }
                                        }
                                    }
                                },
                                className: "flex items-center gap-2.5 flex-1 min-w-0 cursor-pointer group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pin$3e$__["Pin"], {
                                            size: 14,
                                            className: "transform rotate-45"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                            lineNumber: 1997,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                        lineNumber: 1996,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col min-w-0",
                                        children: [
                                            (()=>{
                                                const latestPinned = pinnedMessages[pinnedMessages.length - 1];
                                                const pName = latestPinned?.pinnedByName;
                                                // Use userId comparison first, fall back to name match
                                                const isMePin = user && (latestPinned?.pinnedBy && String(latestPinned.pinnedBy) === String(user.id) || pName && pName.toLowerCase() === (user.fullName || user.full_name || '').toLowerCase() || pName && pName.toLowerCase() === (user.email?.split('@')[0] || '').toLowerCase());
                                                const displayName = isMePin ? "You" : pName;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[14px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1.5 truncate",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Pinned Message"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                            lineNumber: 2012,
                                                            columnNumber: 25
                                                        }, this),
                                                        displayName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-slate-500 dark:text-slate-400 font-medium normal-case truncate",
                                                            children: [
                                                                "• Pinned by ",
                                                                displayName
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                            lineNumber: 2014,
                                                            columnNumber: 27
                                                        }, this),
                                                        pinnedMessages.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-indigo-600 text-white text-[9px] px-1.5 py-0.2 rounded-full font-bold shrink-0",
                                                            children: pinnedMessages.length
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                            lineNumber: 2019,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                    lineNumber: 2011,
                                                    columnNumber: 23
                                                }, this);
                                            })(),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-800 dark:text-slate-200 font-semibold truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors",
                                                children: (()=>{
                                                    const lp = pinnedMessages[pinnedMessages.length - 1];
                                                    if (!lp) return 'Pinned content';
                                                    // 1. Look up in active decrypted messages array
                                                    const matchedInState = messages.find((m)=>String(m.id) === String(lp.id));
                                                    if (matchedInState?.text) {
                                                        const stateText = matchedInState.text;
                                                        const isEnc = typeof stateText === 'string' && (stateText.includes('__e2ee') || stateText.includes('_e2ee')) && stateText.trim().startsWith('{');
                                                        if (!isEnc) return stateText;
                                                    }
                                                    // 2. Look up in pinnedDecryptedMap
                                                    if (pinnedDecryptedMap[lp.id]) {
                                                        return pinnedDecryptedMap[lp.id];
                                                    }
                                                    // 3. Fallback rawText check
                                                    const rawText = lp.text || lp.data?.caption || '';
                                                    const isEnc = typeof rawText === 'string' && (rawText.includes('__e2ee') || rawText.includes('_e2ee')) && rawText.trim().startsWith('{');
                                                    if (isEnc) return '🔒 Encrypted message';
                                                    return rawText || lp.type || 'Pinned content';
                                                })()
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                lineNumber: 2026,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                        lineNumber: 1999,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                lineNumber: 1978,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    pinnedMessages.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: (e)=>{
                                            e.stopPropagation();
                                            setIsPinnedModalOpen(true);
                                        },
                                        className: "text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline px-2.5 py-1 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors shrink-0",
                                        children: [
                                            "View all (",
                                            pinnedMessages.length,
                                            ")"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                        lineNumber: 2056,
                                        columnNumber: 19
                                    }, this),
                                    (()=>{
                                        const latestPinned = pinnedMessages[pinnedMessages.length - 1];
                                        const isMyPin = latestPinned && user && (latestPinned.pinnedBy && String(latestPinned.pinnedBy) === String(user.id) || (latestPinned.pinnedByName || '').toLowerCase() === (user.fullName || user.full_name || '').toLowerCase() || (latestPinned.pinnedByName || '').toLowerCase() === (user.email?.split('@')[0] || '').toLowerCase());
                                        return isMyPin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: async ()=>{
                                                if (latestPinned) {
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["unpinMessage"])(chat.id, latestPinned.id);
                                                    setPinnedMessages((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPinnedMessages"])(chat.id));
                                                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].pinMessage(chat.id, latestPinned.id, false);
                                                }
                                            },
                                            className: "p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",
                                            title: "Unpin message",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                lineNumber: 2087,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                            lineNumber: 2075,
                                            columnNumber: 21
                                        }, this) : null;
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                lineNumber: 2054,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 1977,
                        columnNumber: 13
                    }, this),
                    isGroupChat ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$GroupChatBody$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GroupChatBody"], {
                        chatMessagesContainerRef: chatMessagesContainerRef,
                        handleScroll: handleScroll,
                        chatWallpaper: chatWallpaper,
                        messagesInnerRef: messagesInnerRef,
                        messages: messages,
                        searchQuery: searchQuery,
                        selectedMessages: selectedMessages,
                        isSelectionMode: isSelectionMode,
                        setIsSelectionMode: setIsSelectionMode,
                        lastSelectedIndex: lastSelectedIndex,
                        setLastSelectedIndex: setLastSelectedIndex,
                        setSelectedMessages: setSelectedMessages,
                        hoveredMessageId: hoveredMessageId,
                        setHoveredMessageId: setHoveredMessageId,
                        messageMenuId: messageMenuId,
                        setMessageMenuId: setMessageMenuId,
                        handleReact: handleReact,
                        handleReply: handleReply,
                        handleForward: handleForward,
                        setShowContactInfo: setShowContactInfo,
                        setInfoMessage: setInfoMessage,
                        setShowMessageInfo: setShowMessageInfo,
                        setDeleteMsgTarget: setDeleteMsgTarget,
                        setIsBulkDelete: setIsBulkDelete,
                        setDeleteModalOpen: setDeleteModalOpen,
                        chat: chat,
                        reactions: reactions,
                        showScrollBottom: showScrollBottom,
                        scrollToBottom: scrollToBottom,
                        setUnreadCount: setUnreadCount,
                        setShowScrollBottom: setShowScrollBottom,
                        unreadCount: unreadCount,
                        onEditMessage: handleOpenEditModal,
                        isLoading: isLoadingMessages,
                        isLoadingOlder: isLoadingOlder,
                        onQuickGreeting: handleQuickGreeting
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 2097,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$ChatBody$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatBody"], {
                        chatMessagesContainerRef: chatMessagesContainerRef,
                        handleScroll: handleScroll,
                        chatWallpaper: chatWallpaper,
                        messagesInnerRef: messagesInnerRef,
                        messages: messages,
                        searchQuery: searchQuery,
                        selectedMessages: selectedMessages,
                        isSelectionMode: isSelectionMode,
                        setIsSelectionMode: setIsSelectionMode,
                        lastSelectedIndex: lastSelectedIndex,
                        setLastSelectedIndex: setLastSelectedIndex,
                        setSelectedMessages: setSelectedMessages,
                        hoveredMessageId: hoveredMessageId,
                        setHoveredMessageId: setHoveredMessageId,
                        messageMenuId: messageMenuId,
                        setMessageMenuId: setMessageMenuId,
                        handleReact: handleReact,
                        handleReply: handleReply,
                        handleForward: handleForward,
                        setShowContactInfo: setShowContactInfo,
                        setInfoMessage: setInfoMessage,
                        setShowMessageInfo: setShowMessageInfo,
                        setDeleteMsgTarget: setDeleteMsgTarget,
                        setIsBulkDelete: setIsBulkDelete,
                        setDeleteModalOpen: setDeleteModalOpen,
                        chat: chat,
                        reactions: reactions,
                        showScrollBottom: showScrollBottom,
                        scrollToBottom: scrollToBottom,
                        setUnreadCount: setUnreadCount,
                        setShowScrollBottom: setShowScrollBottom,
                        unreadCount: unreadCount,
                        onEditMessage: handleOpenEditModal,
                        isLoading: isLoadingMessages,
                        isLoadingOlder: isLoadingOlder,
                        onQuickGreeting: handleQuickGreeting
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 2136,
                        columnNumber: 11
                    }, this),
                    !isSelectionMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$ChatReplyBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatReplyBar"], {
                        replyTarget: replyTarget,
                        setReplyTarget: setReplyTarget
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 2177,
                        columnNumber: 11
                    }, this),
                    isSelectionMode ? null : (chat.membershipStatus ? chat.membershipStatus !== 'active' : chat.isRemoved || chat.type === 'group' && chat.members && !chat.members.some((m)=>(String(m.id) === String(user?.id) || String(m.userId || '') === String(user?.id)) && m.status !== 'removed' && m.status !== 'left')) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#f0f2f5] dark:bg-[#1a1c20] border-t border-[#d1d7db] dark:border-[#2d3139] py-3.5 px-4 flex items-center justify-center gap-2 z-20 shrink-0 select-none shadow-inner",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs md:text-sm text-[#54656f] dark:text-[#8696a0] font-medium text-center",
                            children: "You can't send messages to this group because you're no longer a participant."
                        }, void 0, false, {
                            fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                            lineNumber: 2182,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 2181,
                        columnNumber: 11
                    }, this) : isBlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#f0f2f5] dark:bg-[#1a1c20] border-t border-[#d1d7db] dark:border-[#2d3139] py-3.5 px-4 flex items-center justify-center gap-2 z-20 shrink-0 select-none shadow-inner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs md:text-sm text-[#54656f] dark:text-[#a0abb2]",
                                children: "🚫 You blocked this contact."
                            }, void 0, false, {
                                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                lineNumber: 2188,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleUnblockContact,
                                className: "text-xs md:text-sm font-semibold text-[#00a884] hover:underline cursor-pointer",
                                children: "Tap to unblock."
                            }, void 0, false, {
                                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                lineNumber: 2191,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 2187,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$ChatInputBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChatInputBar"], {
                        showEmojiPicker: showEmojiPicker,
                        setShowEmojiPicker: setShowEmojiPicker,
                        onEmojiClick: onEmojiClick,
                        currentTheme: currentTheme,
                        fileInputRef: fileInputRef,
                        onFileChange: onFileChange,
                        acceptedFileType: acceptedFileType,
                        setAcceptedFileType: setAcceptedFileType,
                        showAttachmentMenu: showAttachmentMenu,
                        setShowAttachmentMenu: setShowAttachmentMenu,
                        handleAttachment: handleAttachment,
                        setShowCameraModal: setShowCameraModal,
                        setShowContactModal: setShowContactModal,
                        setShowPollModal: setShowPollModal,
                        setShowEventModal: setShowEventModal,
                        mentionListVisible: mentionListVisible,
                        isGroupChat: isGroupChat,
                        mentionQuery: mentionQuery,
                        handleMentionSelect: handleMentionSelect,
                        GROUP_MEMBERS: GROUP_MEMBERS,
                        textareaRef: textareaRef,
                        message: message,
                        handleInput: handleInput,
                        sendMessage: sendMessage,
                        setShowMicModal: setShowMicModal,
                        chat: localChat,
                        linkPreview: linkPreview,
                        onRemoveLinkPreview: onRemoveLinkPreview
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 2199,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$ForwardDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ForwardDialog"], {
                        open: forwardOpen,
                        onClose: ()=>setForwardOpen(false),
                        message: forwardMsg
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 2230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$DeleteMessageModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DeleteMessageModal"], {
                        open: deleteModalOpen,
                        onClose: ()=>{
                            setDeleteModalOpen(false);
                            if (!isBulkDelete) setDeleteMsgTarget(null);
                        },
                        onDelete: handleDeleteMessage,
                        canDeleteForAll: isBulkDelete ? selectedMessages.every((id)=>messages.find((m)=>m.id === id)?.from === 'me') : deleteMsgTarget?.from === 'me',
                        isBulk: isBulkDelete,
                        count: selectedMessages.length
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 2232,
                        columnNumber: 9
                    }, this),
                    editModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-[#111b21] rounded-3xl p-5 w-full max-w-lg shadow-2xl border border-gray-100 dark:border-[#202c33] animate-in fade-in zoom-in-95 flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setEditModalOpen(false);
                                                setEditMsgTarget(null);
                                                setShowEditEmojiPicker(false);
                                            },
                                            className: "p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition text-[#54656f] dark:text-[#a0abb2] cursor-pointer",
                                            title: "Close",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                lineNumber: 2258,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                            lineNumber: 2253,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-medium text-[#111b21] dark:text-[#e9edef]",
                                            children: "Edit message"
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                            lineNumber: 2260,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                    lineNumber: 2252,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-44 rounded-2xl relative p-4 flex items-center justify-end overflow-hidden border border-black/5 dark:border-white/10 shadow-inner select-none",
                                    style: {
                                        background: "#efeae2",
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='40' r='1' fill='%23c8b89a' fill-opacity='0.3'/%3E%3C/svg%3E")`
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative max-w-[85%] px-3.5 py-2 shadow-sm rounded-[16px_16px_4px_16px] text-left",
                                        style: {
                                            background: "#d9fdd3"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -right-[7px] top-0 w-0 h-0 border-t-[8px] border-t-transparent border-l-[8px] border-l-[#d9fdd3]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                lineNumber: 2278,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[14.5px] text-[#111b21] whitespace-pre-wrap break-words leading-[1.4] pr-2",
                                                children: editText || " "
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                lineNumber: 2279,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-end gap-1 mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-[#667781]",
                                                        children: editMsgTarget?.time || new Date().toLocaleTimeString('en-US', {
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                            hour12: true
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                        lineNumber: 2283,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$TickDouble01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TickDouble01Icon"], {
                                                        size: 14,
                                                        className: "text-[#53bdeb]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                        lineNumber: 2286,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                lineNumber: 2282,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                        lineNumber: 2274,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                    lineNumber: 2266,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative pt-1",
                                    children: [
                                        showEditEmojiPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-16 right-12 z-50 shadow-2xl rounded-2xl overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                theme: currentTheme === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Theme"].DARK : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Theme"].LIGHT,
                                                onEmojiClick: (emojiData)=>setEditText((prev)=>prev + emojiData.emoji)
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                lineNumber: 2295,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                            lineNumber: 2294,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 border-b-2 border-[#00a884] pb-2 px-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: editText,
                                                    onChange: (e)=>setEditText(e.target.value),
                                                    onKeyDown: (e)=>{
                                                        if (e.key === 'Enter') handleSaveEdit();
                                                    },
                                                    placeholder: "Edit message",
                                                    className: "flex-1 bg-transparent text-[16px] text-[#111b21] dark:text-[#e9edef] focus:outline-none placeholder:text-[#8696a0]",
                                                    autoFocus: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                    lineNumber: 2303,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowEditEmojiPicker(!showEditEmojiPicker),
                                                    className: "p-1.5 text-[#54656f] hover:text-[#111b21] dark:text-[#a0abb2] dark:hover:text-[#e9edef] transition cursor-pointer",
                                                    title: "Choose emoji",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$HappyIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HappyIcon"], {
                                                        size: 22
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                        lineNumber: 2321,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                    lineNumber: 2315,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleSaveEdit,
                                                    disabled: isEditingSaving || !editText.trim(),
                                                    className: "w-10 h-10 rounded-full bg-[#00a884] hover:bg-[#008f70] disabled:opacity-50 text-white flex items-center justify-center shadow-md transition-transform active:scale-95 cursor-pointer shrink-0",
                                                    title: "Save edit",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                        size: 22,
                                                        className: "stroke-[3]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                        lineNumber: 2330,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                    lineNumber: 2324,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                            lineNumber: 2302,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                    lineNumber: 2292,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                            lineNumber: 2249,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 2248,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                lineNumber: 1900,
                columnNumber: 7
            }, this),
            showContactInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$ContactInfoSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContactInfoSidebar"], {
                chat: chat,
                onClose: ()=>setShowContactInfo(false),
                isMuted: isMuted,
                onToggleMute: ()=>setIsMuted(!isMuted),
                messages: messages,
                onDeleteChat: onDeleteChat,
                onUpdateChat: (updates)=>{
                    if (onRoomUpdated) onRoomUpdated(chat.id, updates);
                }
            }, void 0, false, {
                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                lineNumber: 2341,
                columnNumber: 9
            }, this),
            showMessageInfo && infoMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$MessageInfoSidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageInfoSidebar"], {
                message: infoMessage,
                onClose: ()=>{
                    setShowMessageInfo(false);
                    setInfoMessage(null);
                }
            }, void 0, false, {
                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                lineNumber: 2354,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$PinDurationModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PinDurationModal"], {
                open: !!pinModalTarget,
                onClose: ()=>setPinModalTarget(null),
                onConfirmPin: async (durationDays)=>{
                    if (pinModalTarget) {
                        const targetRoomId = chat.id || pinModalTarget.roomId;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["pinMessage"])(targetRoomId, pinModalTarget, durationDays);
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["chatApi"].pinMessage(targetRoomId, pinModalTarget.id, true, durationDays);
                        setPinModalTarget(null);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                lineNumber: 2362,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$PinnedMessagesModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PinnedMessagesModal"], {
                open: isPinnedModalOpen,
                onClose: ()=>setIsPinnedModalOpen(false),
                pinnedMessages: pinnedMessages,
                roomId: chat.id,
                onUnpin: (msgId)=>{
                    setPinnedMessages((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPinnedMessages"])(chat.id));
                },
                onJumpToMessage: (msgId)=>{
                    const el = document.getElementById(`msg-${msgId}`);
                    if (el) {
                        el.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                        el.classList.add('ring-2', 'ring-indigo-500', 'transition-all');
                        setTimeout(()=>el.classList.remove('ring-2', 'ring-indigo-500'), 2000);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                lineNumber: 2374,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
        lineNumber: 1899,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_modules_chat_ChatDetail_tsx_429edca1._.js.map