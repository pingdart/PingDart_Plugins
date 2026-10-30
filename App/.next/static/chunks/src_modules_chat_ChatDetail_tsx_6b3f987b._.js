(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/modules/chat/ChatDetail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatDetail",
    ()=>ChatDetail,
    "extractReactionsMap",
    ()=>extractReactionsMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$HappyIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/HappyIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$TickDouble01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/TickDouble01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pin.mjs [app-client] (ecmascript) <export default as Pin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$shared$2f$FilePreviewOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/shared/FilePreviewOverlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$CameraModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/CameraModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$ContactModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/ContactModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$PollModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/PollModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$EventModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/EventModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$MicModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/MicModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$LockChatModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/LockChatModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$ContactInfoSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/ContactInfoSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$MessageInfoSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/MessageInfoSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$ChatHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/ChatDetails/ChatHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$ChatReplyBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/ChatDetails/ChatReplyBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$ChatInputBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/ChatDetails/ChatInputBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$ChatBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/ChatDetails/ChatBody.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$GroupChatBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/ChatDetails/GroupChatBody.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$DeleteMessageModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/DeleteMessageModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$PinDurationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/PinDurationModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$PinnedMessagesModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/PinnedMessagesModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$ForwardDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/components/modals/ForwardDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/emoji-picker-react/dist/emoji-picker-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/e2ee/e2eeService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/localChatDb.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshChatManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/meshChatManager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/pinnedMessages.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$userPresenceService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/services/userPresenceService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/chat/hooks/useChatHandlers.ts [app-client] (ecmascript)");
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
        var _m_data;
        if (!m) continue;
        const rawR = ((_m_data = m.data) === null || _m_data === void 0 ? void 0 : _m_data.reactions) || m.reactions;
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
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { isMobile, isNative } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const isMobileDevice = isMobile || isNative;
    // Always-fresh reference to messages — avoids stale closures in socket handlers
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const processedMessageIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ChatDetail.useState": ()=>{
            const memCached = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].get(chat.id);
            if (memCached && memCached.length > 0) return memCached;
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const stored = localStorage.getItem(`ping_chat_msgs_${chat.id}`);
                    if (stored) {
                        const parsed = JSON.parse(stored);
                        if (Array.isArray(parsed) && parsed.length > 0) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, parsed);
                            return parsed;
                        }
                    }
                } catch (_) {}
            }
            return [];
        }
    }["ChatDetail.useState"]);
    const [isLoadingMessages, setIsLoadingMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ChatDetail.useState": ()=>{
            const memCached = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].get(chat.id);
            return !(memCached && memCached.length > 0);
        }
    }["ChatDetail.useState"]);
    const [isLoadingOlder, setIsLoadingOlder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasMoreOlder, setHasMoreOlder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const isLoadingOlderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const hasMoreOlderRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const [showEmojiPicker, setShowEmojiPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showAttachmentMenu, setShowAttachmentMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedFiles, setSelectedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activeFileIndex, setActiveFileIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [fileCaption, setFileCaption] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [acceptedFileType, setAcceptedFileType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("*/*");
    const [showCameraModal, setShowCameraModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showContactModal, setShowContactModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showPollModal, setShowPollModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEventModal, setShowEventModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMicModal, setShowMicModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLockModal, setShowLockModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSearchOpen, setIsSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSelectionMode, setIsSelectionMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedMessages, setSelectedMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            const handleCancel = {
                "ChatDetail.useEffect.handleCancel": ()=>{
                    setIsSelectionMode(false);
                    setSelectedMessages([]);
                }
            }["ChatDetail.useEffect.handleCancel"];
            window.addEventListener("app:cancel_selection", handleCancel);
            return ({
                "ChatDetail.useEffect": ()=>window.removeEventListener("app:cancel_selection", handleCancel)
            })["ChatDetail.useEffect"];
        }
    }["ChatDetail.useEffect"], []);
    const [chatWallpaper, setChatWallpaper] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ChatDetail.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                return localStorage.getItem(`chat_wallpaper_${chat.id}`) || localStorage.getItem("chat_wallpaper_color") || "";
            }
            //TURBOPACK unreachable
            ;
        }
    }["ChatDetail.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const loadWallpaper = {
                    "ChatDetail.useEffect.loadWallpaper": ()=>{
                        const specific = localStorage.getItem(`chat_wallpaper_${chat.id}`);
                        const global = localStorage.getItem("chat_wallpaper_color");
                        setChatWallpaper(specific || global || "");
                    }
                }["ChatDetail.useEffect.loadWallpaper"];
                loadWallpaper();
                const handleWallpaperChange = {
                    "ChatDetail.useEffect.handleWallpaperChange": ()=>loadWallpaper()
                }["ChatDetail.useEffect.handleWallpaperChange"];
                window.addEventListener("chat_wallpaper_updated", handleWallpaperChange);
                return ({
                    "ChatDetail.useEffect": ()=>window.removeEventListener("chat_wallpaper_updated", handleWallpaperChange)
                })["ChatDetail.useEffect"];
            }
        }
    }["ChatDetail.useEffect"], [
        chat.id
    ]);
    // Track which chat room is currently open so InAppChatToast can suppress
    // toasts only for the exact room the user is actively looking at.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    sessionStorage.setItem('pingdart_active_chat_room', String(chat.id));
                } catch (_) {}
            }
            return ({
                "ChatDetail.useEffect": ()=>{
                    // Clear when this chat is closed / component unmounts
                    if ("TURBOPACK compile-time truthy", 1) {
                        try {
                            const stored = sessionStorage.getItem('pingdart_active_chat_room');
                            if (stored === String(chat.id)) {
                                sessionStorage.removeItem('pingdart_active_chat_room');
                            }
                        } catch (_) {}
                    }
                }
            })["ChatDetail.useEffect"];
        }
    }["ChatDetail.useEffect"], [
        chat.id
    ]);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(chat.isMuted || false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            setIsMuted(chat.isMuted || false);
        }
    }["ChatDetail.useEffect"], [
        chat.id,
        chat.isMuted
    ]);
    const handleToggleMute = async ()=>{
        const nextMuteState = !isMuted;
        setIsMuted(nextMuteState);
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].muteRoom(chat.id);
            if (onMuteChange) {
                onMuteChange(chat.id, nextMuteState);
            }
        } catch (err) {
            console.error("Failed to toggle mute state:", err);
            setIsMuted(!nextMuteState);
        }
    };
    const [showContactInfo, setShowContactInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            const handleOpenGroupInfo = {
                "ChatDetail.useEffect.handleOpenGroupInfo": (e)=>{
                    var _e_detail;
                    if (((_e_detail = e.detail) === null || _e_detail === void 0 ? void 0 : _e_detail.roomId) && String(e.detail.roomId) === String(chat.id)) {
                        setShowContactInfo(true);
                    }
                }
            }["ChatDetail.useEffect.handleOpenGroupInfo"];
            window.addEventListener('app:open_group_info', handleOpenGroupInfo);
            return ({
                "ChatDetail.useEffect": ()=>window.removeEventListener('app:open_group_info', handleOpenGroupInfo)
            })["ChatDetail.useEffect"];
        }
    }["ChatDetail.useEffect"], [
        chat.id
    ]);
    const [showMessageInfo, setShowMessageInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [infoMessage, setInfoMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredMessageId, setHoveredMessageId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [messageMenuId, setMessageMenuId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const isGroupChat = Boolean(chat.isGroup || chat.type === 'group' || chat.is_group || chat.sender && (chat.sender.toLowerCase().includes('team') || chat.sender.toLowerCase().includes('group') || chat.sender.toLowerCase().includes('dept')));
    const [mentionListVisible, setMentionListVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mentionQuery, setMentionQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mentionStartIndex, setMentionStartIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chatMessagesContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messagesInnerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [replyTarget, setReplyTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [forwardMsg, setForwardMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [forwardOpen, setForwardOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reactions, setReactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ChatDetail.useState": ()=>extractReactionsMap(messages)
    }["ChatDetail.useState"]);
    const [deleteModalOpen, setDeleteModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteMsgTarget, setDeleteMsgTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isBulkDelete, setIsBulkDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastSelectedIndex, setLastSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editModalOpen, setEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editMsgTarget, setEditMsgTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editText, setEditText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isEditingSaving, setIsEditingSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEditEmojiPicker, setShowEditEmojiPicker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showScrollBottom, setShowScrollBottom] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [unreadCount, setUnreadCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isOtherUserOnline, setIsOtherUserOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!!chat.isOnline);
    var _chat_countryCode;
    const [otherUserCountryCode, setOtherUserCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_chat_countryCode = chat.countryCode) !== null && _chat_countryCode !== void 0 ? _chat_countryCode : null);
    const [otherUserLastSeen, setOtherUserLastSeen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(formatLastSeen(chat.lastSeen, chat.countryCode));
    const [isOtherUserTyping, setIsOtherUserTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [typingUsername, setTypingUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const typingTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].editMessage(editMsgTarget.id, newText);
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
            var _err_response_data, _err_response;
            alert((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to edit message");
        } finally{
            setIsEditingSaving(false);
        }
    };
    const [localChat, setLocalChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(chat);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            setLocalChat(chat);
        }
    }["ChatDetail.useEffect"], [
        chat
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            if (!socket) return;
            const handleRoomUpdated = {
                "ChatDetail.useEffect.handleRoomUpdated": (data)=>{
                    if (data && String(data.roomId) === String(chat.id)) {
                        const updates = data.updates || {};
                        setLocalChat({
                            "ChatDetail.useEffect.handleRoomUpdated": (prev)=>({
                                    ...prev,
                                    ...updates
                                })
                        }["ChatDetail.useEffect.handleRoomUpdated"]);
                        if (onRoomUpdated) {
                            onRoomUpdated(chat.id, updates);
                        }
                    }
                }
            }["ChatDetail.useEffect.handleRoomUpdated"];
            socket.on('chat:room_updated', handleRoomUpdated);
            return ({
                "ChatDetail.useEffect": ()=>{
                    socket.off('chat:room_updated', handleRoomUpdated);
                }
            })["ChatDetail.useEffect"];
        }
    }["ChatDetail.useEffect"], [
        socket,
        chat.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            const handleChatCleared = {
                "ChatDetail.useEffect.handleChatCleared": (e)=>{
                    var _customEvent_detail;
                    const customEvent = e;
                    if (((_customEvent_detail = customEvent.detail) === null || _customEvent_detail === void 0 ? void 0 : _customEvent_detail.roomId) && String(customEvent.detail.roomId) === String(chat.id)) {
                        setMessages([]);
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].delete(Number(chat.id));
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearLocalRoomMessages"](Number(chat.id)).catch({
                            "ChatDetail.useEffect.handleChatCleared": ()=>{}
                        }["ChatDetail.useEffect.handleChatCleared"]);
                        if ("TURBOPACK compile-time truthy", 1) {
                            try {
                                localStorage.removeItem(`ping_chat_msgs_${chat.id}`);
                            } catch (_) {}
                        }
                        if (onRoomUpdated) {
                            onRoomUpdated(chat.id, {
                                preview: "No messages yet",
                                time: undefined
                            });
                        }
                    }
                }
            }["ChatDetail.useEffect.handleChatCleared"];
            window.addEventListener('chat_cleared', handleChatCleared);
            return ({
                "ChatDetail.useEffect": ()=>{
                    window.removeEventListener('chat_cleared', handleChatCleared);
                }
            })["ChatDetail.useEffect"];
        }
    }["ChatDetail.useEffect"], [
        chat.id,
        onRoomUpdated
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            if (!socket) return;
            const handleMessageEdited = {
                "ChatDetail.useEffect.handleMessageEdited": (data)=>{
                    if (data && String(data.roomId) === String(chat.id)) {
                        var _data_data;
                        setMessages({
                            "ChatDetail.useEffect.handleMessageEdited": (prev)=>prev.map({
                                    "ChatDetail.useEffect.handleMessageEdited": (m)=>String(m.id) === String(data.id) ? {
                                            ...m,
                                            text: data.text,
                                            status: data.status || m.status,
                                            isEdited: true,
                                            data: {
                                                ...m.data || {},
                                                ...data.data || {},
                                                isEdited: true
                                            }
                                        } : m
                                }["ChatDetail.useEffect.handleMessageEdited"])
                        }["ChatDetail.useEffect.handleMessageEdited"]);
                        // Sync reactions from the updated message's data.reactions
                        const rawReactions = data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.reactions;
                        if (rawReactions && typeof rawReactions === 'object') {
                            const normalized = {};
                            for (const [emoji, reactors] of Object.entries(rawReactions)){
                                normalized[emoji] = Array.isArray(reactors) ? reactors.length : Number(reactors) || 0;
                            }
                            if (Object.keys(normalized).length > 0) {
                                setReactions({
                                    "ChatDetail.useEffect.handleMessageEdited": (prev)=>({
                                            ...prev,
                                            [data.id]: normalized
                                        })
                                }["ChatDetail.useEffect.handleMessageEdited"]);
                            }
                        }
                    }
                }
            }["ChatDetail.useEffect.handleMessageEdited"];
            socket.on("message:edited", handleMessageEdited);
            socket.on("chat:message_edited", handleMessageEdited);
            socket.on("chat:message_update", handleMessageEdited);
            socket.on("chat:message_updated", handleMessageEdited);
            return ({
                "ChatDetail.useEffect": ()=>{
                    socket.off("message:edited", handleMessageEdited);
                    socket.off("chat:message_edited", handleMessageEdited);
                    socket.off("chat:message_update", handleMessageEdited);
                    socket.off("chat:message_updated", handleMessageEdited);
                }
            })["ChatDetail.useEffect"];
        }
    }["ChatDetail.useEffect"], [
        socket,
        chat.id
    ]);
    const [isBlocked, setIsBlocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const checkBlockStatus = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].getBlockedContacts().then((res)=>{
            if (res.success && Array.isArray(res.blockedContacts)) {
                const targetId = chat.otherUserId || chat.senderId || chat.id;
                const targetEmail = chat.senderEmail;
                const targetPhone = chat.senderPhone;
                const blocked = res.blockedContacts.some((b)=>String(b) === String(targetId) || targetEmail && String(b).toLowerCase() === String(targetEmail).toLowerCase() || targetPhone && String(b) === String(targetPhone));
                setIsBlocked(blocked);
            }
        }).catch(()=>{});
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            checkBlockStatus();
            window.addEventListener('blocked_contacts_updated', checkBlockStatus);
            return ({
                "ChatDetail.useEffect": ()=>{
                    window.removeEventListener('blocked_contacts_updated', checkBlockStatus);
                }
            })["ChatDetail.useEffect"];
        }
    }["ChatDetail.useEffect"], [
        chat.id,
        chat.otherUserId
    ]);
    const handleUnblockContact = async ()=>{
        const targetId = chat.otherUserId || chat.senderId || chat.id;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].unblockUser(targetId);
            setIsBlocked(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].delete(chat.id);
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].getMessages(chat.id, 100).then((res)=>{
                const msgs = res && res.success ? res.data || res.messages : null;
                if (Array.isArray(msgs)) {
                    setMessages(msgs);
                }
            }).catch(()=>{});
        } catch (err) {
            console.error("Failed to unblock user:", err);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            if (isGroupChat) {
                setOtherUserLastSeen(null);
                return;
            }
            if (isBlocked || chat.canViewLastSeen === false) {
                setIsOtherUserOnline(false);
                setOtherUserLastSeen(null);
            } else {
                const live = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$services$2f$userPresenceService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userPresenceService"].getPresence(chat.otherUserId || chat.id);
                setIsOtherUserOnline(live !== null ? live.isOnline : !!chat.isOnline);
                var _chat_countryCode;
                setOtherUserCountryCode((_chat_countryCode = chat.countryCode) !== null && _chat_countryCode !== void 0 ? _chat_countryCode : null);
                var _live_lastSeen;
                const effective = getEffectiveLastSeen((_live_lastSeen = live === null || live === void 0 ? void 0 : live.lastSeen) !== null && _live_lastSeen !== void 0 ? _live_lastSeen : chat.lastSeen, messages, user === null || user === void 0 ? void 0 : user.id, chat.otherUserId);
                setOtherUserLastSeen(formatLastSeen(effective, chat.countryCode));
            }
        }
    }["ChatDetail.useEffect"], [
        isGroupChat,
        chat.id,
        chat.isOnline,
        chat.lastSeen,
        chat.countryCode,
        chat.canViewLastSeen,
        isBlocked,
        messages,
        user === null || user === void 0 ? void 0 : user.id,
        chat.otherUserId
    ]);
    // Keep messagesRef in sync with messages state (for stale-closure-free socket handlers)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            messagesRef.current = messages;
        }
    }["ChatDetail.useEffect"], [
        messages
    ]);
    const [pinnedMessages, setPinnedMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pinnedDecryptedMap, setPinnedDecryptedMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isPinnedModalOpen, setIsPinnedModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            if (!(pinnedMessages === null || pinnedMessages === void 0 ? void 0 : pinnedMessages.length)) return;
            let isMounted = true;
            const processPinDecryption = {
                "ChatDetail.useEffect.processPinDecryption": async ()=>{
                    const newDecrypted = {};
                    for (const lp of pinnedMessages){
                        var _lp_data;
                        const rawText = (lp === null || lp === void 0 ? void 0 : lp.text) || (lp === null || lp === void 0 ? void 0 : (_lp_data = lp.data) === null || _lp_data === void 0 ? void 0 : _lp_data.caption) || '';
                        const isEnc = typeof rawText === 'string' && (rawText.includes('__e2ee') || rawText.includes('_e2ee')) && rawText.trim().startsWith('{');
                        if (isEnc && !pinnedDecryptedMap[lp.id]) {
                            var _lp_sender;
                            const senderId = Number(lp.senderId || lp.sender_id || (typeof lp.sender === 'object' ? (_lp_sender = lp.sender) === null || _lp_sender === void 0 ? void 0 : _lp_sender.id : null) || 0);
                            try {
                                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptMessage"](senderId, rawText, false, chat.id, lp.id);
                                if (res && isMounted) {
                                    newDecrypted[lp.id] = res;
                                }
                            } catch (_) {}
                        }
                    }
                    if (isMounted && Object.keys(newDecrypted).length > 0) {
                        setPinnedDecryptedMap({
                            "ChatDetail.useEffect.processPinDecryption": (prev)=>({
                                    ...prev,
                                    ...newDecrypted
                                })
                        }["ChatDetail.useEffect.processPinDecryption"]);
                    }
                }
            }["ChatDetail.useEffect.processPinDecryption"];
            processPinDecryption();
            return ({
                "ChatDetail.useEffect": ()=>{
                    isMounted = false;
                }
            })["ChatDetail.useEffect"];
        }
    }["ChatDetail.useEffect"], [
        pinnedMessages,
        chat.id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            // Load pinned messages from localStorage first (instant)
            setPinnedMessages((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPinnedMessages"])(chat.id));
            // Then fetch from server so BOTH users see each other's pins
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].getRoomPinnedMessages(chat.id).then({
                "ChatDetail.useEffect": (res)=>{
                    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
                        res.data.forEach({
                            "ChatDetail.useEffect": (msg)=>{
                                const pName = msg.pinnedByName || msg.senderName || "Someone";
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pinMessage"])(chat.id, {
                                    ...msg,
                                    pinnedByName: pName
                                }, 7, pName);
                            }
                        }["ChatDetail.useEffect"]);
                        setPinnedMessages((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPinnedMessages"])(chat.id));
                    }
                }
            }["ChatDetail.useEffect"]).catch({
                "ChatDetail.useEffect": ()=>{}
            }["ChatDetail.useEffect"]);
            // Listen for any pin/unpin change (dispatched by pinnedMessages.ts util)
            const handlePinnedUpdate = {
                "ChatDetail.useEffect.handlePinnedUpdate": (e)=>{
                    var _customEvent_detail;
                    const customEvent = e;
                    const evtRoomId = (_customEvent_detail = customEvent.detail) === null || _customEvent_detail === void 0 ? void 0 : _customEvent_detail.roomId;
                    // Match current chat or no roomId in detail
                    if (!evtRoomId || String(evtRoomId) === String(chat.id)) {
                        // Dedupe: only re-render if pin list actually changed
                        setPinnedMessages({
                            "ChatDetail.useEffect.handlePinnedUpdate": (prev)=>{
                                const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPinnedMessages"])(chat.id);
                                return JSON.stringify(prev) === JSON.stringify(next) ? prev : next;
                            }
                        }["ChatDetail.useEffect.handlePinnedUpdate"]);
                    }
                }
            }["ChatDetail.useEffect.handlePinnedUpdate"];
            window.addEventListener("pinned_messages_updated", handlePinnedUpdate);
            return ({
                "ChatDetail.useEffect": ()=>{
                    window.removeEventListener("pinned_messages_updated", handlePinnedUpdate);
                }
            })["ChatDetail.useEffect"];
        }
    }["ChatDetail.useEffect"], [
        chat.id
    ]);
    const [pinModalTarget, setPinModalTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            const handleOpenPinModal = {
                "ChatDetail.useEffect.handleOpenPinModal": (e)=>{
                    const customEvent = e;
                    if (customEvent.detail && customEvent.detail.msg) {
                        setPinModalTarget(customEvent.detail.msg);
                    }
                }
            }["ChatDetail.useEffect.handleOpenPinModal"];
            window.addEventListener("open_pin_duration_modal", handleOpenPinModal);
            return ({
                "ChatDetail.useEffect": ()=>{
                    window.removeEventListener("open_pin_duration_modal", handleOpenPinModal);
                }
            })["ChatDetail.useEffect"];
        }
    }["ChatDetail.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            if (!socket) return;
            const targetOtherId = chat.otherUserId || chat.senderId;
            const handleUserOnlineStatus = {
                "ChatDetail.useEffect.handleUserOnlineStatus": (data)=>{
                    if (targetOtherId && String(data.userId) === String(targetOtherId)) {
                        const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
                        const currentUserIdStr = String((currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) || '');
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
                            var _data_lastSeen, _ref;
                            const targetLastSeen = getEffectiveLastSeen((_ref = (_data_lastSeen = data.lastSeen) !== null && _data_lastSeen !== void 0 ? _data_lastSeen : chat.lastSeen) !== null && _ref !== void 0 ? _ref : null, messagesRef.current || messages, user === null || user === void 0 ? void 0 : user.id, targetOtherId);
                            setOtherUserLastSeen(formatLastSeen(targetLastSeen, data.countryCode || otherUserCountryCode));
                        } else {
                            setIsOtherUserOnline(false);
                            setOtherUserLastSeen(null);
                        }
                        if ("object" !== 'undefined' && targetOtherId) {
                            var _data_lastSeen1, _ref1;
                            window.dispatchEvent(new CustomEvent('user:presence_sync', {
                                detail: {
                                    userId: targetOtherId,
                                    isOnline: canView ? !!data.isOnline : false,
                                    lastSeen: canView ? (_ref1 = (_data_lastSeen1 = data.lastSeen) !== null && _data_lastSeen1 !== void 0 ? _data_lastSeen1 : chat.lastSeen) !== null && _ref1 !== void 0 ? _ref1 : null : null,
                                    roomId: chat.id
                                }
                            }));
                        }
                    }
                }
            }["ChatDetail.useEffect.handleUserOnlineStatus"];
            const handleBlockChanged = {
                "ChatDetail.useEffect.handleBlockChanged": ()=>{
                    checkBlockStatus();
                }
            }["ChatDetail.useEffect.handleBlockChanged"];
            socket.on('user:online_status', handleUserOnlineStatus);
            socket.on('user:block_changed', handleBlockChanged);
            const checkOnlineStatus = {
                "ChatDetail.useEffect.checkOnlineStatus": ()=>{
                    if (targetOtherId && !isBlocked) {
                        socket.emit('user:get_online_status', {
                            userId: targetOtherId
                        }, {
                            "ChatDetail.useEffect.checkOnlineStatus": (res)=>{
                                if (res) {
                                    setIsOtherUserOnline(!!res.isOnline);
                                    if (res.lastSeen) {
                                        const effective = getEffectiveLastSeen(res.lastSeen, messagesRef.current || messages, user === null || user === void 0 ? void 0 : user.id, targetOtherId);
                                        setOtherUserLastSeen(formatLastSeen(effective, otherUserCountryCode));
                                    }
                                    if ("object" !== 'undefined' && targetOtherId) {
                                        window.dispatchEvent(new CustomEvent('user:presence_sync', {
                                            detail: {
                                                userId: targetOtherId,
                                                isOnline: !!res.isOnline,
                                                lastSeen: res.lastSeen || null,
                                                roomId: chat.id
                                            }
                                        }));
                                    }
                                }
                            }
                        }["ChatDetail.useEffect.checkOnlineStatus"]);
                    }
                }
            }["ChatDetail.useEffect.checkOnlineStatus"];
            checkOnlineStatus();
            const presenceInterval = setInterval(checkOnlineStatus, 3000);
            if ("TURBOPACK compile-time truthy", 1) {
                window.addEventListener('focus', checkOnlineStatus);
            }
            return ({
                "ChatDetail.useEffect": ()=>{
                    clearInterval(presenceInterval);
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.removeEventListener('focus', checkOnlineStatus);
                    }
                    socket.off('user:online_status', handleUserOnlineStatus);
                    socket.off('user:block_changed', handleBlockChanged);
                }
            })["ChatDetail.useEffect"];
        }
    }["ChatDetail.useEffect"], [
        socket,
        chat.id,
        chat.otherUserId,
        chat.senderId,
        isBlocked
    ]);
    const isNearBottomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const prevMessagesLengthRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isInitialLoadRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const scrollRafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollToBottom = (behavior = 'smooth')=>{
        if (chatMessagesContainerRef.current) {
            chatMessagesContainerRef.current.scrollTo({
                top: chatMessagesContainerRef.current.scrollHeight,
                behavior
            });
        }
    };
    // Sync pagination refs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            isLoadingOlderRef.current = isLoadingOlder;
        }
    }["ChatDetail.useEffect"], [
        isLoadingOlder
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            hasMoreOlderRef.current = hasMoreOlder;
        }
    }["ChatDetail.useEffect"], [
        hasMoreOlder
    ]);
    const processRawMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatDetail.useCallback[processRawMessages]": async (rawMsgs, currentOtherUserId, currentChatId)=>{
            var _useAuthStore_getState_user;
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureE2EEReady"]().catch({
                "ChatDetail.useCallback[processRawMessages]": ()=>{}
            }["ChatDetail.useCallback[processRawMessages]"]);
            const currentUserId = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
            return Promise.all(rawMsgs.map({
                "ChatDetail.useCallback[processRawMessages]": async (msg)=>{
                    if (!msg.text || typeof msg.text !== 'string') return msg;
                    const isEncrypted = (msg.text.includes('__e2ee') || msg.text.includes('_e2ee')) && msg.text.startsWith('{');
                    if (!isEncrypted) return msg;
                    try {
                        var _msg_sender, _msg_data, _msg_data1, _msg_data2;
                        const rawSenderId = Number(msg.senderId || msg.sender_id || (typeof msg.sender === 'object' ? (_msg_sender = msg.sender) === null || _msg_sender === void 0 ? void 0 : _msg_sender.id : null) || 0);
                        const isMsgMine = msg.from === 'me' || !!currentUserId && !!rawSenderId && String(rawSenderId) === String(currentUserId);
                        const actualSenderId = isMsgMine ? currentUserId || rawSenderId : rawSenderId || currentOtherUserId || 0;
                        let decryptedText = null;
                        if (actualSenderId) {
                            decryptedText = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptMessage"](actualSenderId, msg.text, isMsgMine, currentOtherUserId || currentChatId, msg.id);
                        }
                        let fallbackText = ((_msg_data = msg.data) === null || _msg_data === void 0 ? void 0 : _msg_data.pushPreview) || ((_msg_data1 = msg.data) === null || _msg_data1 === void 0 ? void 0 : _msg_data1.preview) || (((_msg_data2 = msg.data) === null || _msg_data2 === void 0 ? void 0 : _msg_data2.text) && typeof msg.data.text === 'string' && !msg.data.text.startsWith('{') ? msg.data.text : null);
                        if (!fallbackText) {
                            try {
                                const p = JSON.parse(msg.text);
                                fallbackText = p.pushPreview || p.preview || (p.text && typeof p.text === 'string' && !p.text.startsWith('{') ? p.text : null);
                            } catch (_) {}
                        }
                        if (!fallbackText) {
                            const cached = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCachedPreview"](currentChatId, msg.id);
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
                            } catch (e) {}
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCachedPreview"](currentChatId, textToDisplay, msg.id);
                            return {
                                ...msg,
                                text: textToDisplay,
                                decryptState: 'DECRYPTED'
                            };
                        } else if (fallbackText) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCachedPreview"](currentChatId, fallbackText, msg.id);
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
                        var _msg_data3, _msg_data4, _msg_data5;
                        const fallbackText = ((_msg_data3 = msg.data) === null || _msg_data3 === void 0 ? void 0 : _msg_data3.pushPreview) || ((_msg_data4 = msg.data) === null || _msg_data4 === void 0 ? void 0 : _msg_data4.preview) || (((_msg_data5 = msg.data) === null || _msg_data5 === void 0 ? void 0 : _msg_data5.text) && typeof msg.data.text === 'string' && !msg.data.text.startsWith('{') ? msg.data.text : null);
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
                }
            }["ChatDetail.useCallback[processRawMessages]"]));
        }
    }["ChatDetail.useCallback[processRawMessages]"], []);
    const sortMessagesList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatDetail.useCallback[sortMessagesList]": (list)=>{
            return [
                ...list
            ].sort({
                "ChatDetail.useCallback[sortMessagesList]": (a, b)=>{
                    const getTime = {
                        "ChatDetail.useCallback[sortMessagesList].getTime": (m)=>{
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
                        }
                    }["ChatDetail.useCallback[sortMessagesList].getTime"];
                    const timeA = getTime(a);
                    const timeB = getTime(b);
                    if (timeA > 0 && timeB > 0 && timeA !== timeB) {
                        return timeA - timeB;
                    }
                    const aId = parseInt(String(a.id)) || 0;
                    const bId = parseInt(String(b.id)) || 0;
                    return aId - bId;
                }
            }["ChatDetail.useCallback[sortMessagesList]"]);
        }
    }["ChatDetail.useCallback[sortMessagesList]"], []);
    const fetchOlderMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatDetail.useCallback[fetchOlderMessages]": async ()=>{
            if (isLoadingOlderRef.current || !hasMoreOlderRef.current) return;
            const currentChatId = chat.id;
            const currentOtherUserId = chat.otherUserId;
            const validServerMsgs = messagesRef.current.filter({
                "ChatDetail.useCallback[fetchOlderMessages].validServerMsgs": (m)=>{
                    const n = Number(m.id);
                    return !isNaN(n) && n > 0 && n < 1000000000;
                }
            }["ChatDetail.useCallback[fetchOlderMessages].validServerMsgs"]);
            if (validServerMsgs.length === 0) {
                setHasMoreOlder(false);
                hasMoreOlderRef.current = false;
                return;
            }
            const oldestId = Math.min(...validServerMsgs.map({
                "ChatDetail.useCallback[fetchOlderMessages].oldestId": (m)=>Number(m.id)
            }["ChatDetail.useCallback[fetchOlderMessages].oldestId"]));
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
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].getMessages(currentChatId, 50, oldestId);
                if (res && res.success && Array.isArray(res.data)) {
                    if (res.data.length < 50) {
                        setHasMoreOlder(false);
                        hasMoreOlderRef.current = false;
                    }
                    if (res.data.length > 0) {
                        const processed = await processRawMessages(res.data, currentOtherUserId, currentChatId);
                        const olderReactions = extractReactionsMap(processed);
                        if (Object.keys(olderReactions).length > 0) {
                            setReactions({
                                "ChatDetail.useCallback[fetchOlderMessages]": (prev)=>({
                                        ...olderReactions,
                                        ...prev
                                    })
                            }["ChatDetail.useCallback[fetchOlderMessages]"]);
                        }
                        setMessages({
                            "ChatDetail.useCallback[fetchOlderMessages]": (prev)=>{
                                const existingIds = new Set(prev.map({
                                    "ChatDetail.useCallback[fetchOlderMessages]": (m)=>String(m.id)
                                }["ChatDetail.useCallback[fetchOlderMessages]"]));
                                const newMsgs = processed.filter({
                                    "ChatDetail.useCallback[fetchOlderMessages].newMsgs": (m)=>!existingIds.has(String(m.id))
                                }["ChatDetail.useCallback[fetchOlderMessages].newMsgs"]);
                                if (newMsgs.length === 0) return prev;
                                const merged = sortMessagesList([
                                    ...newMsgs,
                                    ...prev
                                ]);
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].set(currentChatId, merged);
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveLocalMessages"](Number(currentChatId), merged).catch({
                                    "ChatDetail.useCallback[fetchOlderMessages]": ()=>{}
                                }["ChatDetail.useCallback[fetchOlderMessages]"]);
                                return merged;
                            }
                        }["ChatDetail.useCallback[fetchOlderMessages]"]);
                        // Anchor scroll position to prevent visual jump
                        requestAnimationFrame({
                            "ChatDetail.useCallback[fetchOlderMessages]": ()=>{
                                if (container) {
                                    const newScrollHeight = container.scrollHeight;
                                    container.scrollTop = prevScrollTop + (newScrollHeight - prevScrollHeight);
                                }
                            }
                        }["ChatDetail.useCallback[fetchOlderMessages]"]);
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
        }
    }["ChatDetail.useCallback[fetchOlderMessages]"], [
        chat.id,
        chat.otherUserId,
        processRawMessages,
        sortMessagesList
    ]);
    // Throttled via requestAnimationFrame to avoid rapid state updates while
    // the user is flinging through the message list on Android.
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ChatDetail.useCallback[handleScroll]": ()=>{
            if (scrollRafRef.current !== null) return;
            scrollRafRef.current = requestAnimationFrame({
                "ChatDetail.useCallback[handleScroll]": ()=>{
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
                }
            }["ChatDetail.useCallback[handleScroll]"]);
        }
    }["ChatDetail.useCallback[handleScroll]"], [
        fetchOlderMessages
    ]);
    // Reset scroll state on chat switch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            isInitialLoadRef.current = true;
            isNearBottomRef.current = true;
            setShowScrollBottom(false);
            setUnreadCount(0);
            prevMessagesLengthRef.current = 0;
            setIsLoadingOlder(false);
            setHasMoreOlder(true);
            isLoadingOlderRef.current = false;
            hasMoreOlderRef.current = true;
        }
    }["ChatDetail.useEffect"], [
        chat.id
    ]);
    // Manage scrolling on message updates
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            const currentLen = messages.length;
            const prevLen = prevMessagesLengthRef.current;
            prevMessagesLengthRef.current = currentLen;
            if (currentLen === 0) return;
            if (isInitialLoadRef.current) {
                requestAnimationFrame({
                    "ChatDetail.useEffect": ()=>{
                        requestAnimationFrame({
                            "ChatDetail.useEffect": ()=>{
                                scrollToBottom('auto');
                                isInitialLoadRef.current = false;
                            }
                        }["ChatDetail.useEffect"]);
                    }
                }["ChatDetail.useEffect"]);
                return;
            }
            // If we just prepended older messages via pagination, do not auto-scroll to bottom!
            if (isLoadingOlderRef.current) {
                return;
            }
            if (currentLen > prevLen) {
                var _useAuthStore_getState_user;
                const lastMsg = messages[messages.length - 1];
                const currentUserId = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
                const isMe = (lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.from) === 'me' || (lastMsg === null || lastMsg === void 0 ? void 0 : lastMsg.senderId) && String(lastMsg.senderId) === String(currentUserId);
                if (isMe || isNearBottomRef.current) {
                    requestAnimationFrame({
                        "ChatDetail.useEffect": ()=>{
                            scrollToBottom('smooth');
                            setUnreadCount(0);
                        }
                    }["ChatDetail.useEffect"]);
                } else {
                    const newIncoming = currentLen - prevLen;
                    setUnreadCount({
                        "ChatDetail.useEffect": (prev)=>prev + newIncoming
                    }["ChatDetail.useEffect"]);
                    setShowScrollBottom(true);
                }
            }
        }
    }["ChatDetail.useEffect"], [
        messages,
        chat.id
    ]);
    // Keep scroll pinned to bottom when content resizes (e.g. image loads) if user is near bottom
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            const innerEl = messagesInnerRef.current;
            if (!innerEl) return;
            const observer = new ResizeObserver({
                "ChatDetail.useEffect": ()=>{
                    if (!isLoadingOlderRef.current && isNearBottomRef.current && chatMessagesContainerRef.current) {
                        chatMessagesContainerRef.current.scrollTop = chatMessagesContainerRef.current.scrollHeight;
                    }
                }
            }["ChatDetail.useEffect"]);
            observer.observe(innerEl);
            return ({
                "ChatDetail.useEffect": ()=>observer.disconnect()
            })["ChatDetail.useEffect"];
        }
    }["ChatDetail.useEffect"], []);
    const { theme, systemTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [currentTheme, setCurrentTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            setCurrentTheme(theme === "system" ? systemTheme : theme);
        }
    }["ChatDetail.useEffect"], [
        theme,
        systemTheme
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            let isCancelled = false;
            const currentChatId = chat.id; // capture at effect start to guard async callbacks
            const currentOtherUserId = chat.otherUserId; // capture primitive values to avoid stale closure
            // Reset reactions for the new chat immediately to prevent stale bleed-through
            setReactions({});
            // instant local cache hydration (0ms load time)
            const memCached = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].get(currentChatId);
            if (memCached && Array.isArray(memCached) && memCached.length > 0) {
                setMessages(memCached);
                const cachedReactions = extractReactionsMap(memCached);
                // Always replace reactions (not merge) so fresh chat data wins
                setReactions(cachedReactions);
                setIsLoadingMessages(false);
            } else {
                setMessages({
                    "ChatDetail.useEffect": (prev)=>{
                        if (prev && prev.length > 0) return prev;
                        return prev;
                    }
                }["ChatDetail.useEffect"]);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalMessages"](Number(currentChatId), undefined, 100).then({
                    "ChatDetail.useEffect": (localMsgs)=>{
                        if (!isCancelled && localMsgs && localMsgs.length > 0) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].set(currentChatId, localMsgs);
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
                            requestAnimationFrame({
                                "ChatDetail.useEffect": ()=>{
                                    scrollToBottom('auto');
                                }
                            }["ChatDetail.useEffect"]);
                        }
                    }
                }["ChatDetail.useEffect"]).catch({
                    "ChatDetail.useEffect": ()=>{}
                }["ChatDetail.useEffect"]);
            }
            const tryMarkRead = {
                "ChatDetail.useEffect.tryMarkRead": ()=>{
                    if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].markAsRead(currentChatId).catch({
                            "ChatDetail.useEffect.tryMarkRead": ()=>{}
                        }["ChatDetail.useEffect.tryMarkRead"]);
                    }
                }
            }["ChatDetail.useEffect.tryMarkRead"];
            const fetchMessagesFromApi = {
                "ChatDetail.useEffect.fetchMessagesFromApi": ()=>{
                    tryMarkRead();
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].getMessages(currentChatId, 100).then({
                        "ChatDetail.useEffect.fetchMessagesFromApi": async (res)=>{
                            if (res.success && res.data && !isCancelled) {
                                var _useAuthStore_getState_user;
                                const rawMsgs = res.data;
                                const currentUserId = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
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
                                    setMessages({
                                        "ChatDetail.useEffect.fetchMessagesFromApi": (prev)=>{
                                            const apiIds = new Set(processed.map({
                                                "ChatDetail.useEffect.fetchMessagesFromApi": (m)=>String(m.id)
                                            }["ChatDetail.useEffect.fetchMessagesFromApi"]));
                                            // If API returned 0 messages (chat cleared or empty room),
                                            // discard all stale cached messages. Only keep pending in-flight optimistic sending messages.
                                            if (processed.length === 0) {
                                                const pendingOptimistic = prev.filter({
                                                    "ChatDetail.useEffect.fetchMessagesFromApi.pendingOptimistic": (m)=>String(m.id).startsWith('temp-') || m.status === 'sending'
                                                }["ChatDetail.useEffect.fetchMessagesFromApi.pendingOptimistic"]);
                                                if (pendingOptimistic.length === 0) {
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].delete(Number(currentChatId));
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearLocalRoomMessages"](Number(currentChatId)).catch({
                                                        "ChatDetail.useEffect.fetchMessagesFromApi": ()=>{}
                                                    }["ChatDetail.useEffect.fetchMessagesFromApi"]);
                                                    if ("TURBOPACK compile-time truthy", 1) {
                                                        try {
                                                            localStorage.removeItem(`ping_chat_msgs_${currentChatId}`);
                                                        } catch (_) {}
                                                    }
                                                }
                                                return pendingOptimistic;
                                            }
                                            // Keep optimistic in-flight messages OR socket messages received
                                            // whose ID is newer than the newest message in this API batch,
                                            // AND keep older messages that were previously loaded from localDb or older pagination!
                                            const maxServerId = Math.max(...processed.map({
                                                "ChatDetail.useEffect.fetchMessagesFromApi.maxServerId": (m)=>Number(m.id) || 0
                                            }["ChatDetail.useEffect.fetchMessagesFromApi.maxServerId"]));
                                            const minServerId = Math.min(...processed.map({
                                                "ChatDetail.useEffect.fetchMessagesFromApi.minServerId": (m)=>Number(m.id) || Infinity
                                            }["ChatDetail.useEffect.fetchMessagesFromApi.minServerId"]));
                                            const socketOnlyMessages = prev.filter({
                                                "ChatDetail.useEffect.fetchMessagesFromApi.socketOnlyMessages": (m)=>{
                                                    if (apiIds.has(String(m.id))) return false;
                                                    if (String(m.id).startsWith('temp-') || m.status === 'sending') return true;
                                                    const numId = Number(m.id);
                                                    if (!isNaN(numId) && numId > maxServerId) return true;
                                                    if (!isNaN(numId) && numId < minServerId) return true;
                                                    return false;
                                                }
                                            }["ChatDetail.useEffect.fetchMessagesFromApi.socketOnlyMessages"]);
                                            const merged = sortMessagesList([
                                                ...processed,
                                                ...socketOnlyMessages
                                            ]);
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].set(currentChatId, merged);
                                            try {
                                                localStorage.setItem(`ping_chat_msgs_${currentChatId}`, JSON.stringify(merged.slice(-50)));
                                            } catch (_) {}
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveLocalMessages"](Number(currentChatId), merged).catch({
                                                "ChatDetail.useEffect.fetchMessagesFromApi": ()=>{}
                                            }["ChatDetail.useEffect.fetchMessagesFromApi"]);
                                            return merged;
                                        }
                                    }["ChatDetail.useEffect.fetchMessagesFromApi"]);
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
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCachedPreview"](currentChatId, previewText, lastMsg.id);
                                            const isMsgMine = lastMsg.from === 'me' || !!currentUserId && !!lastMsg.senderId && String(lastMsg.senderId) === String(currentUserId);
                                            if (onRoomUpdated) {
                                                setTimeout({
                                                    "ChatDetail.useEffect.fetchMessagesFromApi": ()=>{
                                                        onRoomUpdated(currentChatId, {
                                                            preview: previewText,
                                                            time: lastMsg.time,
                                                            isMe: isMsgMine,
                                                            lastMessageTimestamp: lastMsg.createdAt || lastMsg.timestamp,
                                                            bumpToTop: false
                                                        });
                                                    }
                                                }["ChatDetail.useEffect.fetchMessagesFromApi"], 0);
                                            }
                                        }
                                    } else {
                                        // Room has no messages (e.g. cleared)
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCachedPreview"](currentChatId, 'No messages yet', 0);
                                        if (onRoomUpdated) {
                                            setTimeout({
                                                "ChatDetail.useEffect.fetchMessagesFromApi": ()=>{
                                                    onRoomUpdated(currentChatId, {
                                                        preview: 'No messages yet',
                                                        time: undefined,
                                                        isMe: false
                                                    });
                                                }
                                            }["ChatDetail.useEffect.fetchMessagesFromApi"], 0);
                                        }
                                    }
                                }
                            }
                        }
                    }["ChatDetail.useEffect.fetchMessagesFromApi"]).catch({
                        "ChatDetail.useEffect.fetchMessagesFromApi": (err)=>console.error("Error fetching messages:", err)
                    }["ChatDetail.useEffect.fetchMessagesFromApi"]).finally({
                        "ChatDetail.useEffect.fetchMessagesFromApi": ()=>{
                            if (!isCancelled) {
                                setIsLoadingMessages(false);
                            }
                        }
                    }["ChatDetail.useEffect.fetchMessagesFromApi"]);
                }
            }["ChatDetail.useEffect.fetchMessagesFromApi"];
            fetchMessagesFromApi();
            // Track when the document was last hidden so we can skip refetches for brief
            // screen switches (e.g. Android back button, quick notification pull-down).
            // Only a genuine absence of ≥5 s warrants a full message resync.
            let hiddenAt = null;
            let focusDebounceTimer = null;
            const MIN_HIDDEN_MS = 5000; // only refetch if hidden for ≥ 5 s
            const DEBOUNCE_MS = 600; // coalesce rapid focus/visibility events
            const scheduleFetch = {
                "ChatDetail.useEffect.scheduleFetch": ()=>{
                    if (focusDebounceTimer) clearTimeout(focusDebounceTimer);
                    focusDebounceTimer = setTimeout({
                        "ChatDetail.useEffect.scheduleFetch": ()=>{
                            if (!isCancelled) fetchMessagesFromApi();
                        }
                    }["ChatDetail.useEffect.scheduleFetch"], DEBOUNCE_MS);
                }
            }["ChatDetail.useEffect.scheduleFetch"];
            const handleVisibilityChange = {
                "ChatDetail.useEffect.handleVisibilityChange": ()=>{
                    if (typeof document === 'undefined') return;
                    if (document.visibilityState === 'hidden') {
                        hiddenAt = Date.now();
                    } else {
                        if (currentChatId) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].markAsRead(currentChatId).catch({
                                "ChatDetail.useEffect.handleVisibilityChange": ()=>{}
                            }["ChatDetail.useEffect.handleVisibilityChange"]);
                        }
                        // Only refetch if absent long enough to have missed messages
                        const hiddenDuration = hiddenAt ? Date.now() - hiddenAt : 0;
                        hiddenAt = null;
                        if (hiddenDuration >= MIN_HIDDEN_MS) {
                            scheduleFetch();
                        }
                    }
                }
            }["ChatDetail.useEffect.handleVisibilityChange"];
            const handleFocus = {
                "ChatDetail.useEffect.handleFocus": ()=>{
                    // window focus fires on every click/alt-tab; only act if visibilitychange
                    // already noted a long absence, or if page was initially hidden (e.g. PWA cold open)
                    if (currentChatId) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].markAsRead(currentChatId).catch({
                            "ChatDetail.useEffect.handleFocus": ()=>{}
                        }["ChatDetail.useEffect.handleFocus"]);
                    }
                    if (hiddenAt && Date.now() - hiddenAt >= MIN_HIDDEN_MS) {
                        hiddenAt = null;
                        scheduleFetch();
                    }
                }
            }["ChatDetail.useEffect.handleFocus"];
            const handleReconnectSync = {
                "ChatDetail.useEffect.handleReconnectSync": (e)=>{
                    var _customEvent_detail;
                    const customEvent = e;
                    if (!((_customEvent_detail = customEvent.detail) === null || _customEvent_detail === void 0 ? void 0 : _customEvent_detail.roomId) || String(customEvent.detail.roomId) === String(currentChatId)) {
                        // Reconnect always warrants a resync regardless of hidden duration
                        scheduleFetch();
                    }
                }
            }["ChatDetail.useEffect.handleReconnectSync"];
            if ("TURBOPACK compile-time truthy", 1) {
                window.addEventListener('focus', handleFocus);
                document.addEventListener('visibilitychange', handleVisibilityChange);
                window.addEventListener('app:reconnect_sync', handleReconnectSync);
            }
            return ({
                "ChatDetail.useEffect": ()=>{
                    isCancelled = true;
                    if (focusDebounceTimer) clearTimeout(focusDebounceTimer);
                    if ("TURBOPACK compile-time truthy", 1) {
                        window.removeEventListener('focus', handleFocus);
                        document.removeEventListener('visibilitychange', handleVisibilityChange);
                        window.removeEventListener('app:reconnect_sync', handleReconnectSync);
                    }
                }
            })["ChatDetail.useEffect"];
        }
    }["ChatDetail.useEffect"], [
        chat.id
    ]); // only depend on chat.id (primitive) — chat object reference changes on every parent socket update
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            if (!socket) return;
            const handleNewMessage = {
                "ChatDetail.useEffect.handleNewMessage": async (data)=>{
                    if (String(data.roomId) === String(chat.id)) {
                        var _useAuthStore_getState_user;
                        const currentUserId = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
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
                                const decrypted = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptMessage"](data.senderId, rawText, isMe, chat.id, msgId);
                                if (decrypted && decrypted !== '⚠️ DECRYPT_FAILED' && !decrypted.includes('Unable to Decrypt')) {
                                    try {
                                        const parsed = JSON.parse(decrypted);
                                        if (parsed && typeof parsed.text === 'string') {
                                            finalText = parsed.text;
                                        } else {
                                            finalText = decrypted;
                                        }
                                    } catch (e) {
                                        finalText = decrypted;
                                    }
                                    decryptState = 'DECRYPTED';
                                } else {
                                    var _data_data, _data_data1;
                                    const fallback = ((_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.pushPreview) || ((_data_data1 = data.data) === null || _data_data1 === void 0 ? void 0 : _data_data1.preview) || data.pushPreview || ({
                                        "ChatDetail.useEffect.handleNewMessage": ()=>{
                                            try {
                                                const p = JSON.parse(rawText);
                                                return p.pushPreview || p.preview || null;
                                            } catch (e) {
                                                return null;
                                            }
                                        }
                                    })["ChatDetail.useEffect.handleNewMessage"]();
                                    if (fallback) {
                                        finalText = fallback;
                                        decryptState = 'DECRYPTED';
                                    } else {
                                        finalText = '⚠️ DECRYPT_FAILED';
                                        decryptState = 'DECRYPT_FAILED';
                                    }
                                }
                            } catch (e) {
                                var _data_data2, _data_data3;
                                const fallback = ((_data_data2 = data.data) === null || _data_data2 === void 0 ? void 0 : _data_data2.pushPreview) || ((_data_data3 = data.data) === null || _data_data3 === void 0 ? void 0 : _data_data3.preview) || data.pushPreview;
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
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$e2ee$2f$e2eeService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCachedPreview"](chat.id, previewText, msgId);
                            if (onRoomUpdated) {
                                setTimeout({
                                    "ChatDetail.useEffect.handleNewMessage": ()=>{
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
                                    }
                                }["ChatDetail.useEffect.handleNewMessage"], 0);
                            }
                        }
                        setMessages({
                            "ChatDetail.useEffect.handleNewMessage": (prev)=>{
                                var _data_data;
                                if (prev.some({
                                    "ChatDetail.useEffect.handleNewMessage": (m)=>String(m.id) === String(msgId)
                                }["ChatDetail.useEffect.handleNewMessage"])) {
                                    return prev;
                                }
                                // If this message is from current user, check if we already have an optimistic message in state
                                const clientMsgId = data.clientMessageId || ((_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.clientMessageId);
                                const optimisticIdx = prev.findIndex({
                                    "ChatDetail.useEffect.handleNewMessage.optimisticIdx": (m)=>{
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
                                    }
                                }["ChatDetail.useEffect.handleNewMessage.optimisticIdx"]);
                                if (optimisticIdx !== -1) {
                                    // Reconcile optimistic message in place to prevent duplicate message cards!
                                    const updated = [
                                        ...prev
                                    ];
                                    const oldMsg = updated[optimisticIdx];
                                    updated[optimisticIdx] = {
                                        ...oldMsg,
                                        id: msgId,
                                        status: isMe ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHighestMessageStatus"])(oldMsg.status === 'sending' ? 'sent' : oldMsg.status, data.status) : 'delivered',
                                        createdAt: data.createdAt || oldMsg.createdAt,
                                        data: {
                                            ...oldMsg.data || {},
                                            ...data.data || {}
                                        }
                                    };
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, updated);
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveLocalMessage"](Number(chat.id), updated[optimisticIdx]).catch({
                                        "ChatDetail.useEffect.handleNewMessage": ()=>{}
                                    }["ChatDetail.useEffect.handleNewMessage"]);
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
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveLocalMessage"](Number(chat.id), newMsgObj).catch({
                                    "ChatDetail.useEffect.handleNewMessage": ()=>{}
                                }["ChatDetail.useEffect.handleNewMessage"]);
                                if (finalText.includes("pinned a message") || finalText.includes("unpinned a message")) {
                                    setTimeout({
                                        "ChatDetail.useEffect.handleNewMessage": ()=>{
                                            setPinnedMessages((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPinnedMessages"])(chat.id));
                                        }
                                    }["ChatDetail.useEffect.handleNewMessage"], 100);
                                }
                                return next;
                            }
                        }["ChatDetail.useEffect.handleNewMessage"]);
                        // Always mark as delivered to server when message received in chat from another user
                        if (isFromOtherUser) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].markAsDelivered(chat.id, data.id ? [
                                data.id
                            ] : undefined).catch({
                                "ChatDetail.useEffect.handleNewMessage": ()=>{}
                            }["ChatDetail.useEffect.handleNewMessage"]);
                        }
                        // Mark room as read if user is viewing this chat
                        if (isFromOtherUser && typeof document !== 'undefined' && document.visibilityState === 'visible') {
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].markAsRead(chat.id).catch({
                                "ChatDetail.useEffect.handleNewMessage": ()=>{}
                            }["ChatDetail.useEffect.handleNewMessage"]);
                        }
                    }
                }
            }["ChatDetail.useEffect.handleNewMessage"];
            const handleMessagesRead = {
                "ChatDetail.useEffect.handleMessagesRead": (data)=>{
                    if (String(data.roomId) === String(chat.id)) {
                        if (data.messageIds && Array.isArray(data.messageIds)) {
                            data.messageIds.forEach({
                                "ChatDetail.useEffect.handleMessagesRead": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalReadReceipts"].add(String(id))
                            }["ChatDetail.useEffect.handleMessagesRead"]);
                        }
                        setMessages({
                            "ChatDetail.useEffect.handleMessagesRead": (prev)=>{
                                const next = prev.map({
                                    "ChatDetail.useEffect.handleMessagesRead.next": (m)=>{
                                        if (m.from === 'me') {
                                            if (!data.messageIds || data.messageIds.length === 0 || data.messageIds.some({
                                                "ChatDetail.useEffect.handleMessagesRead.next": (id)=>String(id) === String(m.id)
                                            }["ChatDetail.useEffect.handleMessagesRead.next"])) {
                                                try {
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalMessageStatus"](Number(m.id), 'read').catch({
                                                        "ChatDetail.useEffect.handleMessagesRead.next": ()=>{}
                                                    }["ChatDetail.useEffect.handleMessagesRead.next"]);
                                                } catch (_) {}
                                                return {
                                                    ...m,
                                                    status: 'read'
                                                };
                                            }
                                        }
                                        return m;
                                    }
                                }["ChatDetail.useEffect.handleMessagesRead.next"]);
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                                return next;
                            }
                        }["ChatDetail.useEffect.handleMessagesRead"]);
                    }
                }
            }["ChatDetail.useEffect.handleMessagesRead"];
            const handleMessagesDelivered = {
                "ChatDetail.useEffect.handleMessagesDelivered": (data)=>{
                    if (String(data.roomId) === String(chat.id)) {
                        const deliveredIds = Array.isArray(data.messageIds) ? data.messageIds.map({
                            "ChatDetail.useEffect.handleMessagesDelivered": (id)=>String(id)
                        }["ChatDetail.useEffect.handleMessagesDelivered"]) : [];
                        deliveredIds.forEach({
                            "ChatDetail.useEffect.handleMessagesDelivered": (id)=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalDeliveredReceipts"].add(id);
                                if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalDeliveredReceipts"].size > 500) {
                                    const oldestId = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalDeliveredReceipts"].values().next().value;
                                    if (oldestId) __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalDeliveredReceipts"].delete(oldestId);
                                }
                            }
                        }["ChatDetail.useEffect.handleMessagesDelivered"]);
                        setMessages({
                            "ChatDetail.useEffect.handleMessagesDelivered": (prev)=>{
                                const next = prev.map({
                                    "ChatDetail.useEffect.handleMessagesDelivered.next": (m)=>{
                                        const isMe = m.from === 'me' || m.isMe;
                                        if (isMe && m.status !== 'read') {
                                            const matchesMsg = !data.messageIds || data.messageIds.length === 0 || data.messageIds.some({
                                                "ChatDetail.useEffect.handleMessagesDelivered.next": (id)=>String(id) === String(m.id) || m.clientMessageId && String(id) === String(m.clientMessageId)
                                            }["ChatDetail.useEffect.handleMessagesDelivered.next"]);
                                            if (matchesMsg) {
                                                try {
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLocalMessageStatus"](Number(m.id), 'delivered').catch({
                                                        "ChatDetail.useEffect.handleMessagesDelivered.next": ()=>{}
                                                    }["ChatDetail.useEffect.handleMessagesDelivered.next"]);
                                                } catch (_) {}
                                                return {
                                                    ...m,
                                                    status: 'delivered'
                                                };
                                            }
                                        }
                                        return m;
                                    }
                                }["ChatDetail.useEffect.handleMessagesDelivered.next"]);
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                                return next;
                            }
                        }["ChatDetail.useEffect.handleMessagesDelivered"]);
                    }
                }
            }["ChatDetail.useEffect.handleMessagesDelivered"];
            const handleReaction = {
                "ChatDetail.useEffect.handleReaction": (data)=>{
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
                            setReactions({
                                "ChatDetail.useEffect.handleReaction": (prev)=>({
                                        ...prev,
                                        [msgId]: normalized
                                    })
                            }["ChatDetail.useEffect.handleReaction"]);
                        } else {
                            setReactions({
                                "ChatDetail.useEffect.handleReaction": (prev)=>{
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
                                }
                            }["ChatDetail.useEffect.handleReaction"]);
                        }
                        // Also update message in messages array so it stays persisted in cache & localStorage
                        setMessages({
                            "ChatDetail.useEffect.handleReaction": (prev)=>{
                                const next = prev.map({
                                    "ChatDetail.useEffect.handleReaction.next": (m)=>{
                                        if (String(m.id) === String(msgId) || m.clientMessageId && String(m.clientMessageId) === String(msgId)) {
                                            var _data_message_data, _data_message, _m_data;
                                            return {
                                                ...m,
                                                data: {
                                                    ...m.data || {},
                                                    reactions: data.reactions || ((_data_message = data.message) === null || _data_message === void 0 ? void 0 : (_data_message_data = _data_message.data) === null || _data_message_data === void 0 ? void 0 : _data_message_data.reactions) || ((_m_data = m.data) === null || _m_data === void 0 ? void 0 : _m_data.reactions)
                                                }
                                            };
                                        }
                                        return m;
                                    }
                                }["ChatDetail.useEffect.handleReaction.next"]);
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                                try {
                                    localStorage.setItem(`ping_chat_msgs_${chat.id}`, JSON.stringify(next.slice(-50)));
                                } catch (_) {}
                                return next;
                            }
                        }["ChatDetail.useEffect.handleReaction"]);
                    }
                }
            }["ChatDetail.useEffect.handleReaction"];
            const handleTyping = {
                "ChatDetail.useEffect.handleTyping": (data)=>{
                    if (String(data.roomId) === String(chat.id)) {
                        var _useAuthStore_getState_user;
                        const currentUserId = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
                        if (String(data.userId) === String(currentUserId)) return;
                        if (data.isTyping) {
                            setIsOtherUserTyping(true);
                            setTypingUsername(data.username || "Someone");
                            if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
                            typingTimerRef.current = setTimeout({
                                "ChatDetail.useEffect.handleTyping": ()=>{
                                    setIsOtherUserTyping(false);
                                }
                            }["ChatDetail.useEffect.handleTyping"], 3000);
                        } else {
                            setIsOtherUserTyping(false);
                            if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
                        }
                    }
                }
            }["ChatDetail.useEffect.handleTyping"];
            const handleMessageDeleted = {
                "ChatDetail.useEffect.handleMessageDeleted": (data)=>{
                    if (String(data.roomId) === String(chat.id)) {
                        setMessages({
                            "ChatDetail.useEffect.handleMessageDeleted": (prev)=>{
                                const next = prev.map({
                                    "ChatDetail.useEffect.handleMessageDeleted.next": (m)=>{
                                        if (String(m.id) === String(data.messageId)) {
                                            return {
                                                ...m,
                                                type: 'deleted',
                                                text: '🚫 This message was deleted',
                                                data: null
                                            };
                                        }
                                        return m;
                                    }
                                }["ChatDetail.useEffect.handleMessageDeleted.next"]);
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                                return next;
                            }
                        }["ChatDetail.useEffect.handleMessageDeleted"]);
                    }
                }
            }["ChatDetail.useEffect.handleMessageDeleted"];
            const handlePinnedUpdated = {
                "ChatDetail.useEffect.handlePinnedUpdated": (data)=>{
                    if (data && String(data.roomId) === String(chat.id)) {
                        var _data_message, _data_message1;
                        const pName = data.pinnedByName || ((_data_message = data.message) === null || _data_message === void 0 ? void 0 : _data_message.pinnedByName) || ((_data_message1 = data.message) === null || _data_message1 === void 0 ? void 0 : _data_message1.senderName) || "Someone";
                        if (data.isPinned) {
                            var _data_message2, _data_message_data, _data_message3;
                            // Find message in current list, fallback to socket payload
                            let targetMsg = messagesRef.current.find({
                                "ChatDetail.useEffect.handlePinnedUpdated.targetMsg": (m)=>String(m.id) === String(data.messageId)
                            }["ChatDetail.useEffect.handlePinnedUpdated.targetMsg"]);
                            if (!targetMsg && data.message) targetMsg = data.message;
                            const msgToPin = targetMsg ? {
                                ...targetMsg,
                                pinnedByName: pName,
                                pinnedBy: data.pinnedBy
                            } : {
                                id: data.messageId,
                                text: ((_data_message2 = data.message) === null || _data_message2 === void 0 ? void 0 : _data_message2.text) || ((_data_message3 = data.message) === null || _data_message3 === void 0 ? void 0 : (_data_message_data = _data_message3.data) === null || _data_message_data === void 0 ? void 0 : _data_message_data.caption) || "Pinned message",
                                roomId: chat.id,
                                pinnedByName: pName,
                                pinnedBy: data.pinnedBy
                            };
                            // pinMessage writes to localStorage + dispatches pinned_messages_updated (caught by handlePinnedUpdate)
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pinMessage"])(chat.id, msgToPin, data.durationDays || 7, pName);
                        } else {
                            // unpinMessage writes to localStorage + dispatches pinned_messages_updated
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unpinMessage"])(chat.id, data.messageId);
                        }
                    // handlePinnedUpdate (window listener) will catch the event and run deduped setPinnedMessages
                    // No separate API call needed here — initial load covers server sync
                    }
                }
            }["ChatDetail.useEffect.handlePinnedUpdated"];
            const handleChatClearedSocket = {
                "ChatDetail.useEffect.handleChatClearedSocket": (data)=>{
                    if (data && String(data.roomId) === String(chat.id)) {
                        setMessages([]);
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].delete(Number(chat.id));
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$localChatDb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearLocalRoomMessages"](Number(chat.id)).catch({
                            "ChatDetail.useEffect.handleChatClearedSocket": ()=>{}
                        }["ChatDetail.useEffect.handleChatClearedSocket"]);
                        if ("TURBOPACK compile-time truthy", 1) {
                            try {
                                localStorage.removeItem(`ping_chat_msgs_${chat.id}`);
                            } catch (_) {}
                        }
                        if (onRoomUpdated) {
                            onRoomUpdated(chat.id, {
                                preview: "No messages yet",
                                time: undefined
                            });
                        }
                    }
                }
            }["ChatDetail.useEffect.handleChatClearedSocket"];
            socket.emit('join:chat', chat.id);
            socket.on('chat:new_message', handleNewMessage);
            socket.on('chat:messages_read', handleMessagesRead);
            socket.on('chat:messages_delivered', handleMessagesDelivered);
            socket.on('chat:reaction', handleReaction);
            socket.on('chat:typing', handleTyping);
            socket.on('chat:message_deleted', handleMessageDeleted);
            socket.on('chat:pinned_updated', handlePinnedUpdated);
            socket.on('chat:cleared', handleChatClearedSocket);
            return ({
                "ChatDetail.useEffect": ()=>{
                    socket.emit('leave:chat', chat.id);
                    socket.off('chat:new_message', handleNewMessage);
                    socket.off('chat:messages_read', handleMessagesRead);
                    socket.off('chat:messages_delivered', handleMessagesDelivered);
                    socket.off('chat:reaction', handleReaction);
                    socket.off('chat:typing', handleTyping);
                    socket.off('chat:message_deleted', handleMessageDeleted);
                    socket.off('chat:pinned_updated', handlePinnedUpdated);
                    socket.off('chat:cleared', handleChatClearedSocket);
                }
            })["ChatDetail.useEffect"];
        // NOTE: messages is intentionally NOT in deps — we use messagesRef.current
        // inside handlers to avoid stale closures without re-registering listeners.
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ChatDetail.useEffect"], [
        socket,
        chat.id,
        chat.otherUserId
    ]);
    // Listen for call:message_sent event dispatched by GlobalCallUI after a call ends
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatDetail.useEffect": ()=>{
            const handleCallMessageSent = {
                "ChatDetail.useEffect.handleCallMessageSent": (e)=>{
                    const { roomId, message } = e.detail;
                    if (String(roomId) !== String(chat.id)) return;
                    setMessages({
                        "ChatDetail.useEffect.handleCallMessageSent": (prev)=>{
                            if (prev.some({
                                "ChatDetail.useEffect.handleCallMessageSent": (m)=>String(m.id) === String(message.id)
                            }["ChatDetail.useEffect.handleCallMessageSent"])) return prev;
                            const next = [
                                ...prev,
                                message
                            ];
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                            return next;
                        }
                    }["ChatDetail.useEffect.handleCallMessageSent"]);
                }
            }["ChatDetail.useEffect.handleCallMessageSent"];
            window.addEventListener('call:message_sent', handleCallMessageSent);
            const handleOutboxSynced = {
                "ChatDetail.useEffect.handleOutboxSynced": (e)=>{
                    const { tempId, serverId, roomId, status } = e.detail;
                    if (String(roomId) !== String(chat.id)) return;
                    setMessages({
                        "ChatDetail.useEffect.handleOutboxSynced": (prev)=>{
                            const next = prev.map({
                                "ChatDetail.useEffect.handleOutboxSynced.next": (m)=>String(m.id) === String(tempId) ? {
                                        ...m,
                                        id: serverId,
                                        status: status || 'sent'
                                    } : m
                            }["ChatDetail.useEffect.handleOutboxSynced.next"]);
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                            return next;
                        }
                    }["ChatDetail.useEffect.handleOutboxSynced"]);
                }
            }["ChatDetail.useEffect.handleOutboxSynced"];
            window.addEventListener('chat:message_status_synced', handleOutboxSynced);
            // Send offline BLE read receipt and clear unread badge locally whenever room is opened
            if (chat.id) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshChatManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshChatManager"].sendReadReceipt(chat.id, chat.otherUserId);
                if ("TURBOPACK compile-time truthy", 1) {
                    var _useAuthStore_getState_user;
                    window.dispatchEvent(new CustomEvent('chat:messages_read', {
                        detail: {
                            roomId: String(chat.id),
                            userId: (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id
                        }
                    }));
                }
            }
            // Listen for offline mesh message received in real-time
            const handleMeshMessageReceived = {
                "ChatDetail.useEffect.handleMeshMessageReceived": (e)=>{
                    var _useAuthStore_getState_user;
                    const msg = e.detail;
                    if (!msg || String(msg.roomId) !== String(chat.id)) return;
                    setMessages({
                        "ChatDetail.useEffect.handleMeshMessageReceived": (prev)=>{
                            if (prev.some({
                                "ChatDetail.useEffect.handleMeshMessageReceived": (m)=>String(m.id) === String(msg.id)
                            }["ChatDetail.useEffect.handleMeshMessageReceived"])) return prev;
                            const next = [
                                ...prev,
                                msg
                            ];
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                            return next;
                        }
                    }["ChatDetail.useEffect.handleMeshMessageReceived"]);
                    // Acknowledge read immediately since user is actively looking at this chat
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$meshChatManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["meshChatManager"].sendReadReceipt(chat.id, chat.otherUserId);
                    window.dispatchEvent(new CustomEvent('chat:messages_read', {
                        detail: {
                            roomId: String(chat.id),
                            userId: (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id
                        }
                    }));
                }
            }["ChatDetail.useEffect.handleMeshMessageReceived"];
            window.addEventListener('chat:new_message', handleMeshMessageReceived);
            // Listen for offline mesh delivery ACKs in real-time
            const handleMeshDelivered = {
                "ChatDetail.useEffect.handleMeshDelivered": (e)=>{
                    const { roomId, messageIds } = e.detail || {};
                    if (String(roomId) !== String(chat.id)) return;
                    setMessages({
                        "ChatDetail.useEffect.handleMeshDelivered": (prev)=>{
                            const next = prev.map({
                                "ChatDetail.useEffect.handleMeshDelivered.next": (m)=>{
                                    if (m.from === 'me' && (!messageIds || messageIds.some({
                                        "ChatDetail.useEffect.handleMeshDelivered.next": (id)=>String(id) === String(m.id)
                                    }["ChatDetail.useEffect.handleMeshDelivered.next"]))) {
                                        return {
                                            ...m,
                                            status: 'delivered'
                                        };
                                    }
                                    return m;
                                }
                            }["ChatDetail.useEffect.handleMeshDelivered.next"]);
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                            return next;
                        }
                    }["ChatDetail.useEffect.handleMeshDelivered"]);
                }
            }["ChatDetail.useEffect.handleMeshDelivered"];
            window.addEventListener('chat:messages_delivered', handleMeshDelivered);
            // Listen for offline mesh read ACKs in real-time (turns sent messages into blue double ticks)
            const handleMeshRead = {
                "ChatDetail.useEffect.handleMeshRead": (e)=>{
                    var _useAuthStore_getState_user;
                    const { roomId, userId } = e.detail || {};
                    if (String(roomId) !== String(chat.id)) return;
                    const currentUserId = (_useAuthStore_getState_user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user) === null || _useAuthStore_getState_user === void 0 ? void 0 : _useAuthStore_getState_user.id;
                    if (!userId || String(userId) !== String(currentUserId)) {
                        setMessages({
                            "ChatDetail.useEffect.handleMeshRead": (prev)=>{
                                const next = prev.map({
                                    "ChatDetail.useEffect.handleMeshRead.next": (m)=>{
                                        if (m.from === 'me' || m.isMe) {
                                            return {
                                                ...m,
                                                status: 'read'
                                            };
                                        }
                                        return m;
                                    }
                                }["ChatDetail.useEffect.handleMeshRead.next"]);
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["globalMessageCache"].set(chat.id, next);
                                return next;
                            }
                        }["ChatDetail.useEffect.handleMeshRead"]);
                    }
                }
            }["ChatDetail.useEffect.handleMeshRead"];
            window.addEventListener('chat:messages_read', handleMeshRead);
            return ({
                "ChatDetail.useEffect": ()=>{
                    window.removeEventListener('call:message_sent', handleCallMessageSent);
                    window.removeEventListener('chat:message_status_synced', handleOutboxSynced);
                    window.removeEventListener('chat:new_message', handleMeshMessageReceived);
                    window.removeEventListener('chat:messages_delivered', handleMeshDelivered);
                    window.removeEventListener('chat:messages_read', handleMeshRead);
                }
            })["ChatDetail.useEffect"];
        }
    }["ChatDetail.useEffect"], [
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
    const { handleInput, handleMentionSelect, handleReply, handleDeleteMessage, handleForward, handleReact, sendMessage, handleAttachment, onFileChange, handleSendAttachment, handleCameraCapture, handleSendContact, handleSendPoll, handleSendEvent, handleSendVoice, handleCallEnd, linkPreview, onRemoveLinkPreview } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatHandlers"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex w-full h-full relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex flex-col h-full transition-all duration-300 ${(showContactInfo || showMessageInfo) && !isMobileDevice ? 'md:w-[calc(100%-400px)] md:border-r border-[#d1d7db] dark:border-[#2d3139] w-full' : 'w-full'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$shared$2f$FilePreviewOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilePreviewOverlay"], {
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
                        onAddMore: ()=>{
                            var _fileInputRef_current;
                            return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 1903,
                        columnNumber: 9
                    }, this),
                    showCameraModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$CameraModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CameraModal"], {
                        onClose: ()=>setShowCameraModal(false),
                        onCapture: handleCameraCapture
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 1914,
                        columnNumber: 29
                    }, this),
                    showContactModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$ContactModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactModal"], {
                        onClose: ()=>setShowContactModal(false),
                        onSend: handleSendContact
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 1915,
                        columnNumber: 30
                    }, this),
                    showPollModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$PollModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PollModal"], {
                        onClose: ()=>setShowPollModal(false),
                        onSend: handleSendPoll
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 1916,
                        columnNumber: 27
                    }, this),
                    showEventModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$EventModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventModal"], {
                        onClose: ()=>setShowEventModal(false),
                        onSend: handleSendEvent
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 1917,
                        columnNumber: 28
                    }, this),
                    showMicModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$MicModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MicModal"], {
                        onClose: ()=>setShowMicModal(false),
                        onSend: handleSendVoice
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 1918,
                        columnNumber: 26
                    }, this),
                    showLockModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$LockChatModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LockChatModal"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$ChatHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatHeader"], {
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
                        const isParticipant = chat.membershipStatus ? chat.membershipStatus === 'active' : !chat.isRemoved && (!isGroupChat || !chat.members || chat.members.some((m)=>(String(m.id) === String(user === null || user === void 0 ? void 0 : user.id) || String(m.userId || '') === String(user === null || user === void 0 ? void 0 : user.id)) && m.status !== 'removed' && m.status !== 'left'));
                        return isParticipant && pinnedMessages.length > 0;
                    })() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-2 bg-white/95 dark:bg-[#111b21]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 z-20 shrink-0 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pin$3e$__["Pin"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col min-w-0",
                                        children: [
                                            (()=>{
                                                var _user_email;
                                                const latestPinned = pinnedMessages[pinnedMessages.length - 1];
                                                const pName = latestPinned === null || latestPinned === void 0 ? void 0 : latestPinned.pinnedByName;
                                                // Use userId comparison first, fall back to name match
                                                const isMePin = user && ((latestPinned === null || latestPinned === void 0 ? void 0 : latestPinned.pinnedBy) && String(latestPinned.pinnedBy) === String(user.id) || pName && pName.toLowerCase() === (user.fullName || user.full_name || '').toLowerCase() || pName && pName.toLowerCase() === (((_user_email = user.email) === null || _user_email === void 0 ? void 0 : _user_email.split('@')[0]) || '').toLowerCase());
                                                const displayName = isMePin ? "You" : pName;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[14px] font-extrabold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider flex items-center gap-1.5 truncate",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Pinned Message"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                            lineNumber: 2012,
                                                            columnNumber: 25
                                                        }, this),
                                                        displayName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                        pinnedMessages.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-800 dark:text-slate-200 font-semibold truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors",
                                                children: (()=>{
                                                    var _lp_data;
                                                    const lp = pinnedMessages[pinnedMessages.length - 1];
                                                    if (!lp) return 'Pinned content';
                                                    // 1. Look up in active decrypted messages array
                                                    const matchedInState = messages.find((m)=>String(m.id) === String(lp.id));
                                                    if (matchedInState === null || matchedInState === void 0 ? void 0 : matchedInState.text) {
                                                        const stateText = matchedInState.text;
                                                        const isEnc = typeof stateText === 'string' && (stateText.includes('__e2ee') || stateText.includes('_e2ee')) && stateText.trim().startsWith('{');
                                                        if (!isEnc) return stateText;
                                                    }
                                                    // 2. Look up in pinnedDecryptedMap
                                                    if (pinnedDecryptedMap[lp.id]) {
                                                        return pinnedDecryptedMap[lp.id];
                                                    }
                                                    // 3. Fallback rawText check
                                                    const rawText = lp.text || ((_lp_data = lp.data) === null || _lp_data === void 0 ? void 0 : _lp_data.caption) || '';
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    pinnedMessages.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                        var _user_email;
                                        const latestPinned = pinnedMessages[pinnedMessages.length - 1];
                                        const isMyPin = latestPinned && user && (latestPinned.pinnedBy && String(latestPinned.pinnedBy) === String(user.id) || (latestPinned.pinnedByName || '').toLowerCase() === (user.fullName || user.full_name || '').toLowerCase() || (latestPinned.pinnedByName || '').toLowerCase() === (((_user_email = user.email) === null || _user_email === void 0 ? void 0 : _user_email.split('@')[0]) || '').toLowerCase());
                                        return isMyPin ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: async ()=>{
                                                if (latestPinned) {
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unpinMessage"])(chat.id, latestPinned.id);
                                                    setPinnedMessages((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPinnedMessages"])(chat.id));
                                                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].pinMessage(chat.id, latestPinned.id, false);
                                                }
                                            },
                                            className: "p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",
                                            title: "Unpin message",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
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
                    isGroupChat ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$GroupChatBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupChatBody"], {
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
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$ChatBody$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatBody"], {
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
                    !isSelectionMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$ChatReplyBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatReplyBar"], {
                        replyTarget: replyTarget,
                        setReplyTarget: setReplyTarget
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 2177,
                        columnNumber: 11
                    }, this),
                    isSelectionMode ? null : (chat.membershipStatus ? chat.membershipStatus !== 'active' : chat.isRemoved || chat.type === 'group' && chat.members && !chat.members.some((m)=>(String(m.id) === String(user === null || user === void 0 ? void 0 : user.id) || String(m.userId || '') === String(user === null || user === void 0 ? void 0 : user.id)) && m.status !== 'removed' && m.status !== 'left')) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#f0f2f5] dark:bg-[#1a1c20] border-t border-[#d1d7db] dark:border-[#2d3139] py-3.5 px-4 flex items-center justify-center gap-2 z-20 shrink-0 select-none shadow-inner",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    }, this) : isBlocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#f0f2f5] dark:bg-[#1a1c20] border-t border-[#d1d7db] dark:border-[#2d3139] py-3.5 px-4 flex items-center justify-center gap-2 z-20 shrink-0 select-none shadow-inner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs md:text-sm text-[#54656f] dark:text-[#a0abb2]",
                                children: "🚫 You blocked this contact."
                            }, void 0, false, {
                                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                lineNumber: 2188,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$ChatDetails$2f$ChatInputBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatInputBar"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$ForwardDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForwardDialog"], {
                        open: forwardOpen,
                        onClose: ()=>setForwardOpen(false),
                        message: forwardMsg
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 2230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$DeleteMessageModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeleteMessageModal"], {
                        open: deleteModalOpen,
                        onClose: ()=>{
                            setDeleteModalOpen(false);
                            if (!isBulkDelete) setDeleteMsgTarget(null);
                        },
                        onDelete: handleDeleteMessage,
                        canDeleteForAll: isBulkDelete ? selectedMessages.every((id)=>{
                            var _messages_find;
                            return ((_messages_find = messages.find((m)=>m.id === id)) === null || _messages_find === void 0 ? void 0 : _messages_find.from) === 'me';
                        }) : (deleteMsgTarget === null || deleteMsgTarget === void 0 ? void 0 : deleteMsgTarget.from) === 'me',
                        isBulk: isBulkDelete,
                        count: selectedMessages.length
                    }, void 0, false, {
                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                        lineNumber: 2232,
                        columnNumber: 9
                    }, this),
                    editModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white dark:bg-[#111b21] rounded-3xl p-5 w-full max-w-lg shadow-2xl border border-gray-100 dark:border-[#202c33] animate-in fade-in zoom-in-95 flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setEditModalOpen(false);
                                                setEditMsgTarget(null);
                                                setShowEditEmojiPicker(false);
                                            },
                                            className: "p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition text-[#54656f] dark:text-[#a0abb2] cursor-pointer",
                                            title: "Close",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full h-44 rounded-2xl relative p-4 flex items-center justify-end overflow-hidden border border-black/5 dark:border-white/10 shadow-inner select-none",
                                    style: {
                                        background: "#efeae2",
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Ccircle cx='40' cy='40' r='1' fill='%23c8b89a' fill-opacity='0.3'/%3E%3C/svg%3E")`
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative max-w-[85%] px-3.5 py-2 shadow-sm rounded-[16px_16px_4px_16px] text-left",
                                        style: {
                                            background: "#d9fdd3"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute -right-[7px] top-0 w-0 h-0 border-t-[8px] border-t-transparent border-l-[8px] border-l-[#d9fdd3]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                lineNumber: 2278,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[14.5px] text-[#111b21] whitespace-pre-wrap break-words leading-[1.4] pr-2",
                                                children: editText || " "
                                            }, void 0, false, {
                                                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                lineNumber: 2279,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-end gap-1 mt-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] text-[#667781]",
                                                        children: (editMsgTarget === null || editMsgTarget === void 0 ? void 0 : editMsgTarget.time) || new Date().toLocaleTimeString('en-US', {
                                                            hour: '2-digit',
                                                            minute: '2-digit',
                                                            hour12: true
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                                                        lineNumber: 2283,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$TickDouble01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TickDouble01Icon"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative pt-1",
                                    children: [
                                        showEditEmojiPicker && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-16 right-12 z-50 shadow-2xl rounded-2xl overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                theme: currentTheme === 'dark' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Theme"].DARK : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$emoji$2d$picker$2d$react$2f$dist$2f$emoji$2d$picker$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Theme"].LIGHT,
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3 border-b-2 border-[#00a884] pb-2 px-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowEditEmojiPicker(!showEditEmojiPicker),
                                                    className: "p-1.5 text-[#54656f] hover:text-[#111b21] dark:text-[#a0abb2] dark:hover:text-[#e9edef] transition cursor-pointer",
                                                    title: "Choose emoji",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$HappyIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HappyIcon"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleSaveEdit,
                                                    disabled: isEditingSaving || !editText.trim(),
                                                    className: "w-10 h-10 rounded-full bg-[#00a884] hover:bg-[#008f70] disabled:opacity-50 text-white flex items-center justify-center shadow-md transition-transform active:scale-95 cursor-pointer shrink-0",
                                                    title: "Save edit",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
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
            showContactInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$ContactInfoSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactInfoSidebar"], {
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
            showMessageInfo && infoMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$MessageInfoSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageInfoSidebar"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$PinDurationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinDurationModal"], {
                open: !!pinModalTarget,
                onClose: ()=>setPinModalTarget(null),
                onConfirmPin: async (durationDays)=>{
                    if (pinModalTarget) {
                        const targetRoomId = chat.id || pinModalTarget.roomId;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pinMessage"])(targetRoomId, pinModalTarget, durationDays);
                        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chatApi"].pinMessage(targetRoomId, pinModalTarget.id, true, durationDays);
                        setPinModalTarget(null);
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/modules/chat/ChatDetail.tsx",
                lineNumber: 2362,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$components$2f$modals$2f$PinnedMessagesModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinnedMessagesModal"], {
                open: isPinnedModalOpen,
                onClose: ()=>setIsPinnedModalOpen(false),
                pinnedMessages: pinnedMessages,
                roomId: chat.id,
                onUnpin: (msgId)=>{
                    setPinnedMessages((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$pinnedMessages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPinnedMessages"])(chat.id));
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
_s(ChatDetail, "opxXM858DZ6s/sLyqOgbx0MTCUo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$chat$2f$hooks$2f$useChatHandlers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useChatHandlers"]
    ];
});
_c = ChatDetail;
var _c;
__turbopack_context__.k.register(_c, "ChatDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_modules_chat_ChatDetail_tsx_6b3f987b._.js.map