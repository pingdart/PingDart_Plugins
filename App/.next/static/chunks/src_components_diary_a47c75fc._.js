(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/diary/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "MOODS",
    ()=>MOODS
]);
const MOODS = [
    {
        emoji: "😄",
        label: "Happy",
        activeColor: "bg-amber-500/15 border-amber-500/40 text-amber-600 dark:text-amber-300 ring-2 ring-amber-500/30"
    },
    {
        emoji: "🧘",
        label: "Calm",
        activeColor: "bg-emerald-500/15 border-emerald-500/40 text-emerald-600 dark:text-emerald-300 ring-2 ring-emerald-500/30"
    },
    {
        emoji: "🔥",
        label: "Motivated",
        activeColor: "bg-blue-500/15 border-blue-500/40 text-blue-600 dark:text-blue-300 ring-2 ring-blue-500/30"
    },
    {
        emoji: "💡",
        label: "Creative",
        activeColor: "bg-purple-500/15 border-purple-500/40 text-purple-600 dark:text-purple-300 ring-2 ring-purple-500/30"
    },
    {
        emoji: "🤯",
        label: "Stressed",
        activeColor: "bg-rose-500/15 border-rose-500/40 text-rose-600 dark:text-rose-300 ring-2 ring-rose-500/30"
    },
    {
        emoji: "😴",
        label: "Tired",
        activeColor: "bg-slate-500/15 border-slate-500/40 text-slate-600 dark:text-slate-300 ring-2 ring-slate-500/30"
    }
];
const CATEGORIES = [
    "Work",
    "Personal",
    "Health",
    "Finance",
    "General"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/diary/utils/diaryCrypto.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decryptDiaryText",
    ()=>decryptDiaryText,
    "encryptDiaryText",
    ()=>encryptDiaryText,
    "getOrCreateDiaryKey",
    ()=>getOrCreateDiaryKey,
    "hasDiaryPin",
    ()=>hasDiaryPin,
    "setDiaryPin",
    ()=>setDiaryPin,
    "sha256",
    ()=>sha256,
    "verifyDiaryPin",
    ()=>verifyDiaryPin
]);
"use client";
/**
 * diaryCrypto.ts - End-to-End Encryption (AES-256-GCM) for Ping AI Diary
 * Key is generated & retained on device. Server stores ciphertext only.
 */ const DIARY_KEY_STORAGE_KEY = "ping_ai_diary_device_key_raw";
const DIARY_PIN_STORAGE_KEY = "ping_ai_diary_pin_hash";
const DIARY_SALT_STORAGE_KEY = "ping_ai_diary_salt";
// Convert ArrayBuffer <-> Base64
function bufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for(let i = 0; i < bytes.byteLength; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}
function base64ToBuffer(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i++){
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
}
async function sha256(text) {
    var _window_crypto;
    if ("object" === "undefined" || !((_window_crypto = window.crypto) === null || _window_crypto === void 0 ? void 0 : _window_crypto.subtle)) return text;
    const msgUint8 = new TextEncoder().encode(text);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", msgUint8);
    return bufferToBase64(hashBuffer);
}
async function getOrCreateDiaryKey() {
    var _window_crypto;
    if ("object" === "undefined" || !((_window_crypto = window.crypto) === null || _window_crypto === void 0 ? void 0 : _window_crypto.subtle)) return null;
    try {
        const existingRaw = localStorage.getItem(DIARY_KEY_STORAGE_KEY);
        if (existingRaw) {
            const rawBuffer = base64ToBuffer(existingRaw);
            return await window.crypto.subtle.importKey("raw", rawBuffer, {
                name: "AES-GCM",
                length: 256
            }, true, [
                "encrypt",
                "decrypt"
            ]);
        }
        // Generate brand new 256-bit AES-GCM key
        const newKey = await window.crypto.subtle.generateKey({
            name: "AES-GCM",
            length: 256
        }, true, [
            "encrypt",
            "decrypt"
        ]);
        const exported = await window.crypto.subtle.exportKey("raw", newKey);
        localStorage.setItem(DIARY_KEY_STORAGE_KEY, bufferToBase64(exported));
        return newKey;
    } catch (err) {
        console.warn("[DiaryCrypto] Key generation warning:", err);
        return null;
    }
}
async function encryptDiaryText(plaintext) {
    var _window_crypto;
    if (!plaintext) return {
        ciphertext: "",
        iv: ""
    };
    if ("object" === "undefined" || !((_window_crypto = window.crypto) === null || _window_crypto === void 0 ? void 0 : _window_crypto.subtle)) {
        return {
            ciphertext: plaintext,
            iv: ""
        };
    }
    try {
        const key = await getOrCreateDiaryKey();
        if (!key) return {
            ciphertext: plaintext,
            iv: ""
        };
        const iv = window.crypto.getRandomValues(new Uint8Array(12)); // 96-bit IV for AES-GCM
        const encoded = new TextEncoder().encode(plaintext);
        const encryptedBuffer = await window.crypto.subtle.encrypt({
            name: "AES-GCM",
            iv
        }, key, encoded);
        return {
            ciphertext: bufferToBase64(encryptedBuffer),
            iv: bufferToBase64(iv.buffer)
        };
    } catch (err) {
        console.warn("[DiaryCrypto encrypt error]:", err);
        return {
            ciphertext: plaintext,
            iv: ""
        };
    }
}
async function decryptDiaryText(ciphertext, ivBase64) {
    var _window_crypto;
    if (!ciphertext) return "";
    if (!ivBase64) return ciphertext;
    if ("object" === "undefined" || !((_window_crypto = window.crypto) === null || _window_crypto === void 0 ? void 0 : _window_crypto.subtle)) return ciphertext;
    try {
        const key = await getOrCreateDiaryKey();
        if (!key) return ciphertext;
        const ivBuffer = base64ToBuffer(ivBase64);
        const cipherBuffer = base64ToBuffer(ciphertext);
        const decryptedBuffer = await window.crypto.subtle.decrypt({
            name: "AES-GCM",
            iv: new Uint8Array(ivBuffer)
        }, key, cipherBuffer);
        return new TextDecoder().decode(decryptedBuffer);
    } catch (err) {
        // If decryption fails (e.g. plaintext or different device key), return original
        return ciphertext;
    }
}
function hasDiaryPin() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return Boolean(localStorage.getItem(DIARY_PIN_STORAGE_KEY));
}
async function setDiaryPin(pin) {
    if ("object" === "undefined" || !pin) return false;
    const hash = await sha256(pin + "_pingdart_salt_2026");
    localStorage.setItem(DIARY_PIN_STORAGE_KEY, hash);
    return true;
}
async function verifyDiaryPin(pin) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const stored = localStorage.getItem(DIARY_PIN_STORAGE_KEY);
    if (!stored) return true; // No PIN set yet
    const hash = await sha256(pin + "_pingdart_salt_2026");
    return stored === hash;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/diary/utils/diarySubscription.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_SUBSCRIPTION",
    ()=>DEFAULT_SUBSCRIPTION,
    "claimConversionOffer",
    ()=>claimConversionOffer,
    "fetchActiveConversionOffer",
    ()=>fetchActiveConversionOffer,
    "fetchSubscriptionStatus",
    ()=>fetchSubscriptionStatus,
    "optOutConversionOffers",
    ()=>optOutConversionOffers,
    "recordConversionEvent",
    ()=>recordConversionEvent,
    "triggerExitIntentPaywall",
    ()=>triggerExitIntentPaywall,
    "upgradeSubscription",
    ()=>upgradeSubscription
]);
/**
 * diarySubscription.ts - Freemium Limits & Ping Pro Subscription Helper
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
"use client";
;
const DEFAULT_SUBSCRIPTION = {
    plan: "free",
    isPro: false,
    status: "active",
    voiceNotesUsed: 0,
    voiceNotesLimit: 30,
    secondBrainSearchesUsed: 0,
    secondBrainSearchesLimit: 3,
    monthlyReportsUsed: 0,
    monthlyReportsLimit: 1,
    maxEntriesLimit: 100,
    historyDaysLimit: 7
};
async function fetchSubscriptionStatus() {
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/subscription");
        if (res.data.success && res.data.data) {
            return res.data.data;
        }
    } catch (err) {
        console.warn("[DiarySubscription fetch warning]", err);
    }
    return DEFAULT_SUBSCRIPTION;
}
async function upgradeSubscription(plan) {
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/ai-diary/subscription/upgrade", {
        plan
    });
    if (res.data.success) {
        var _res_data_data;
        return {
            ...DEFAULT_SUBSCRIPTION,
            plan,
            isPro: true,
            voiceNotesLimit: null,
            secondBrainSearchesLimit: null,
            monthlyReportsLimit: null,
            maxEntriesLimit: null,
            historyDaysLimit: null,
            expiresAt: (_res_data_data = res.data.data) === null || _res_data_data === void 0 ? void 0 : _res_data_data.expiresAt
        };
    }
    throw new Error(res.data.message || "Upgrade failed");
}
async function recordConversionEvent(eventType, eventValue, metadata) {
    try {
        var _res_data;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/ai-diary/conversion/event", {
            eventType,
            eventValue,
            metadata
        });
        return (_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.data;
    } catch (err) {
        console.warn("[Conversion Event Warning]", err);
        return null;
    }
}
async function fetchActiveConversionOffer() {
    try {
        var _res_data, _res_data_data;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/conversion/active-offer");
        if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && ((_res_data_data = res.data.data) === null || _res_data_data === void 0 ? void 0 : _res_data_data.hasActiveOffer)) {
            return res.data.data.offer;
        }
    } catch (err) {
        console.warn("[Active Offer fetch warning]", err);
    }
    return null;
}
async function triggerExitIntentPaywall(quotaUsedRatio) {
    try {
        var _res_data, _res_data_data;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/ai-diary/conversion/exit-intent", {
            quotaUsedRatio
        });
        if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && ((_res_data_data = res.data.data) === null || _res_data_data === void 0 ? void 0 : _res_data_data.eligible)) {
            return {
                eligible: true,
                offer: res.data.data.offer
            };
        }
    } catch (err) {
        console.warn("[Exit Intent Warning]", err);
    }
    return {
        eligible: false
    };
}
async function optOutConversionOffers() {
    try {
        var _res_data;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/ai-diary/conversion/opt-out");
        return Boolean((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success);
    } catch (e) {
        return false;
    }
}
async function claimConversionOffer(couponCode, plan) {
    var _res_data, _res_data1;
    const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/ai-diary/conversion/claim-offer", {
        couponCode,
        plan
    });
    if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
        return res.data.data;
    }
    throw new Error(((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.message) || "Failed to claim discounted offer");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/diary/AiDiaryModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiDiaryModal",
    ()=>AiDiaryModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$BookOpen01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/BookOpen01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Brain01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Brain01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Target01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Target01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkSquare01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkSquare01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mic01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Activity01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Activity01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AlertCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/AlertCircleIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$CalendarStrip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/CalendarStrip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$TasksTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/TasksTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$JournalTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/JournalTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$SecondBrainTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/SecondBrainTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$TimelineGoalsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/TimelineGoalsTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$ExecutiveReviewTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/ExecutiveReviewTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$AddEntryModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/AddEntryModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$AddTaskModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/AddTaskModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$DiaryLockScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/DiaryLockScreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$VoiceRecordModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/VoiceRecordModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$PingProModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/PingProModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$AiDiaryExitIntentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/AiDiaryExitIntentModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$MilestoneCelebrationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/MilestoneCelebrationModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$PersonalCoachCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/PersonalCoachCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$MemoryFlashbackBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/MemoryFlashbackBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$ActionSuggestionsBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/ActionSuggestionsBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$LifePatternsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/LifePatternsCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$LifeTrajectoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/LifeTrajectoryCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$LivingLifeMapCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/LivingLifeMapCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$GuidedReflectionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/GuidedReflectionModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$LifeStoryModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/LifeStoryModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$FutureSelfLetterModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/FutureSelfLetterModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$CompanionMemoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/CompanionMemoryCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$AccountabilityBriefingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/AccountabilityBriefingModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$RelationshipIntelligenceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/RelationshipIntelligenceCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$DecisionMemoryModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/DecisionMemoryModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$PersonalCeoReportModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/PersonalCeoReportModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$LifeAreasHeatmapCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/LifeAreasHeatmapCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$SundayWeeklyReviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/SundayWeeklyReviewModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$PersonalKnowledgeGraphModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/PersonalKnowledgeGraphModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$VoiceCompanionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/VoiceCompanionModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$utils$2f$diaryCrypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/utils/diaryCrypto.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$utils$2f$diarySubscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/utils/diarySubscription.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$DiarySidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/DiarySidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$DiaryHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/diary/components/DiaryHeader.tsx [app-client] (ecmascript)");
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
function AiDiaryModal({ isOpen, onClose, isModal = true }) {
    _s();
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Level 4 Device Security Lock State
    const [isLocked, setIsLocked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Freemium Subscription State
    const [subscription, setSubscription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$utils$2f$diarySubscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SUBSCRIPTION"]);
    const [isProModalOpen, setIsProModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [proTriggerReason, setProTriggerReason] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(undefined);
    // Smart Conversion Engine States
    const [activeOffer, setActiveOffer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isExitIntentOpen, setIsExitIntentOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasShownExitIntentSession, setHasShownExitIntentSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiDiaryModal.useEffect": ()=>{
            if (isOpen) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$utils$2f$diarySubscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordConversionEvent"])("DIARY_OPENED");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$utils$2f$diarySubscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchActiveConversionOffer"])().then({
                    "AiDiaryModal.useEffect": (offer)=>{
                        if (offer) setActiveOffer(offer);
                    }
                }["AiDiaryModal.useEffect"]);
            }
        }
    }["AiDiaryModal.useEffect"], [
        isOpen
    ]);
    const handleSafeClose = async ()=>{
        if (!subscription.isPro && !hasShownExitIntentSession && subscription.voiceNotesLimit && subscription.voiceNotesUsed / subscription.voiceNotesLimit >= 0.7) {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$utils$2f$diarySubscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerExitIntentPaywall"])(subscription.voiceNotesUsed / subscription.voiceNotesLimit);
            if (res.eligible && res.offer) {
                setActiveOffer(res.offer);
                setIsExitIntentOpen(true);
                setHasShownExitIntentSession(true);
                return;
            }
        }
        onClose();
    };
    // Default to clean "todo" view
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("todo");
    // Date & Calendar Strip State
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "AiDiaryModal.useState": ()=>new Date()
    }["AiDiaryModal.useState"]);
    const [weekOffset, setWeekOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Dedicated Modal Popup States
    const [isAddModalOpen, setIsAddModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAddTaskModalOpen, setIsAddTaskModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVoiceRecordOpen, setIsVoiceRecordOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Journal Feed & Entry State
    const [entries, setEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedMood, setSelectedMood] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOODS"][0]);
    const [energyScore, setEnergyScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8);
    const [journalContent, setJournalContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [attachedImages, setAttachedImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isGeneratingAi, setIsGeneratingAi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchFilter, setSearchFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Voice AI States
    const [isListening, setIsListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [speakingEntryId, setSpeakingEntryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Tasks, Reminders & Follow-Ups State
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [reminders, setReminders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [followUps, setFollowUps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Second Brain Q&A State
    const [brainQuery, setBrainQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAskingBrain, setIsAskingBrain] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [brainAnswer, setBrainAnswer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [brainSources, setBrainSources] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [brainConfidence, setBrainConfidence] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [brainConfidenceLevel, setBrainConfidenceLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [evidenceCount, setEvidenceCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [oldestSourceDate, setOldestSourceDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newestSourceDate, setNewestSourceDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [firstMentionDate, setFirstMentionDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [confidenceFactors, setConfidenceFactors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Timeline & Goals State
    const [timelineData, setTimelineData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [goals, setGoals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Executive Insights State
    const [weeklyReview, setWeeklyReview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Phase 1: Retention, Habit & Coach States
    const [habitData, setHabitData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingCelebration, setPendingCelebration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [coachData, setCoachData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCoachLoading, setIsCoachLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [flashbacksData, setFlashbacksData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [trialLifecycle, setTrialLifecycle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Phase 2: AI Companion & Accountability Briefing States
    const [companionData, setCompanionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [briefingData, setBriefingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isBriefingOpen, setIsBriefingOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Phase 3: AI Life Intelligence Platform States
    const [relationshipData, setRelationshipData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [lifeScoreData, setLifeScoreData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDecisionModalOpen, setIsDecisionModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCeoReportModalOpen, setIsCeoReportModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Phase 4: AI Life Knowledge & Forecast Layer States
    const [isSundayReviewOpen, setIsSundayReviewOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isKnowledgeGraphOpen, setIsKnowledgeGraphOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVoiceCompanionOpen, setIsVoiceCompanionOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Phase 5: Core AI Diary Moat States
    const [actionSuggestions, setActionSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [lifePatterns, setLifePatterns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLifePatternsLoading, setIsLifePatternsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Phase 6: AI Life Narrative Engine States
    const [trajectoryForecast, setTrajectoryForecast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isTrajectoryLoading, setIsTrajectoryLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedReflectionEntry, setSelectedReflectionEntry] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isReflectionModalOpen, setIsReflectionModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLifeStoryModalOpen, setIsLifeStoryModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isFutureLetterModalOpen, setIsFutureLetterModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Fetch initial data when open & unlocked
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AiDiaryModal.useEffect": ()=>{
            if (!isOpen || isLocked) return;
            fetchSubscription();
            fetchEntries();
            fetchTasks();
            fetchReminders();
            fetchFollowUps();
            fetchGoals();
            fetchTimeline();
            fetchWeeklyReview();
            fetchHabitData();
            fetchCoachData();
            fetchFlashbacks();
            fetchTrialLifecycle();
            fetchCompanionMemories();
            fetchAccountabilityBriefing();
            fetchRelationships();
            fetchLifeScore();
            fetchActionSuggestions();
            fetchLifePatterns();
            fetchTrajectoryForecast();
        }
    }["AiDiaryModal.useEffect"], [
        isOpen,
        isLocked
    ]);
    const fetchSubscription = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$utils$2f$diarySubscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSubscriptionStatus"])().then(setSubscription);
    };
    const fetchEntries = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/entries").then(async (res)=>{
            if (res.data.success && Array.isArray(res.data.data)) {
                const decrypted = await Promise.all(res.data.data.map(async (e)=>{
                    if (e.isEncrypted && e.encryptedContent && e.iv) {
                        const plain = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$utils$2f$diaryCrypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decryptDiaryText"])(e.encryptedContent, e.iv);
                        return {
                            ...e,
                            content: plain || e.content
                        };
                    }
                    return e;
                }));
                setEntries(decrypted);
            }
        }).catch((err)=>console.warn("[AiDiary fetchEntries]", err.message));
    };
    const fetchTasks = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/tasks").then((res)=>{
            if (res.data.success && Array.isArray(res.data.data)) {
                setTasks(res.data.data);
            }
        }).catch((err)=>console.warn("[AiDiary fetchTasks]", err.message));
    };
    const fetchReminders = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/reminders").then((res)=>{
            if (res.data.success && Array.isArray(res.data.data)) {
                setReminders(res.data.data);
            }
        }).catch((err)=>console.warn("[AiDiary fetchReminders]", err.message));
    };
    const fetchFollowUps = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/follow-ups").then((res)=>{
            if (res.data.success && Array.isArray(res.data.data)) {
                setFollowUps(res.data.data);
            }
        }).catch((err)=>console.warn("[AiDiary fetchFollowUps]", err.message));
    };
    const fetchGoals = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/goals").then((res)=>{
            if (res.data.success && Array.isArray(res.data.data)) {
                setGoals(res.data.data);
            }
        }).catch((err)=>console.warn("[AiDiary fetchGoals]", err.message));
    };
    const fetchTimeline = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/timeline").then((res)=>{
            if (res.data.success && Array.isArray(res.data.data)) {
                setTimelineData(res.data.data);
            }
        }).catch((err)=>console.warn("[AiDiary fetchTimeline]", err.message));
    };
    const fetchWeeklyReview = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/summaries/weekly").then((res)=>{
            if (res.data.success && res.data.data) {
                setWeeklyReview(res.data.data);
            }
        }).catch((err)=>console.warn("[AiDiary fetchWeeklyReview]", err.message));
    };
    const fetchHabitData = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/habits").then((res)=>{
            if (res.data.success && res.data.data) {
                setHabitData(res.data.data);
                if (res.data.data.pendingCelebration) {
                    setPendingCelebration(res.data.data.pendingCelebration);
                }
            }
        }).catch((err)=>console.warn("[AiDiary fetchHabitData]", err.message));
    };
    const fetchCoachData = ()=>{
        setIsCoachLoading(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/coach").then((res)=>{
            if (res.data.success && res.data.data) {
                setCoachData(res.data.data);
            }
        }).catch((err)=>console.warn("[AiDiary fetchCoachData]", err.message)).finally(()=>setIsCoachLoading(false));
    };
    const fetchFlashbacks = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/flashbacks").then((res)=>{
            if (res.data.success && res.data.data) {
                setFlashbacksData(res.data.data);
            }
        }).catch((err)=>console.warn("[AiDiary fetchFlashbacks]", err.message));
    };
    const fetchTrialLifecycle = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/trial-lifecycle").then((res)=>{
            if (res.data.success && res.data.data) {
                setTrialLifecycle(res.data.data);
            }
        }).catch((err)=>console.warn("[AiDiary fetchTrialLifecycle]", err.message));
    };
    const fetchCompanionMemories = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/companion/memories").then((res)=>{
            if (res.data.success && res.data.data) {
                setCompanionData(res.data.data);
            }
        }).catch((err)=>console.warn("[AiDiary fetchCompanionMemories]", err.message));
    };
    const fetchAccountabilityBriefing = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/accountability/briefing").then((res)=>{
            if (res.data.success && res.data.data) {
                setBriefingData(res.data.data);
            }
        }).catch((err)=>console.warn("[AiDiary fetchAccountabilityBriefing]", err.message));
    };
    const fetchRelationships = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/relationships").then((res)=>{
            if (res.data.success && res.data.data) {
                setRelationshipData(res.data.data);
            }
        }).catch((err)=>console.warn("[AiDiary fetchRelationships]", err.message));
    };
    const fetchLifeScore = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/life-score").then((res)=>{
            if (res.data.success && res.data.data) {
                setLifeScoreData(res.data.data);
            }
        }).catch((err)=>console.warn("[AiDiary fetchLifeScore]", err.message));
    };
    const fetchActionSuggestions = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/suggestions").then((res)=>{
            var _res_data;
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && Array.isArray(res.data.data)) {
                setActionSuggestions(res.data.data);
            }
        }).catch((err)=>console.warn("[AiDiary fetchActionSuggestions]", err.message));
    };
    const fetchLifePatterns = ()=>{
        setIsLifePatternsLoading(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/analytics/life-patterns").then((res)=>{
            var _res_data;
            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) && res.data.data) {
                setLifePatterns(res.data.data);
            }
        }).catch((err)=>console.warn("[AiDiary fetchLifePatterns]", err.message)).finally(()=>setIsLifePatternsLoading(false));
    };
    const handleAcceptSuggestion = async (id)=>{
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/ai-diary/suggestions/${id}/accept`, {});
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(res.data.message || "Reminder created & action scheduled!");
                fetchReminders();
                fetchTasks();
                fetchActionSuggestions();
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to accept suggestion");
        }
    };
    const handleDismissSuggestion = async (id)=>{
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/ai-diary/suggestions/${id}/dismiss`, {});
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Suggestion dismissed");
                fetchActionSuggestions();
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to dismiss suggestion");
        }
    };
    const fetchTrajectoryForecast = ()=>{
        setIsTrajectoryLoading(true);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/ai-diary/trajectory/forecast").then((res)=>{
            var _res_data;
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                setTrajectoryForecast(res.data);
            }
        }).catch((err)=>console.warn("[AiDiary fetchTrajectoryForecast]", err.message)).finally(()=>setIsTrajectoryLoading(false));
    };
    const handleUpdateImportance = async (entryId, rank)=>{
        try {
            var _res_data;
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/ai-diary/entries/${entryId}/importance`, {
                importanceRank: rank
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Memory calibrated to ${rank} star${rank > 1 ? "s" : ""}`);
                setEntries((prev)=>prev.map((e)=>e.id === entryId ? {
                            ...e,
                            importanceRank: rank,
                            isMilestone: rank >= 4
                        } : e));
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to update memory importance");
        }
    };
    const handleStartReflection = (entry)=>{
        setSelectedReflectionEntry(entry);
        setIsReflectionModalOpen(true);
    };
    const handleClaimFreeze = ()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/ai-diary/habits/freeze", {}).then((res)=>{
            if (res.data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(res.data.message || "Streak freeze banked!");
                fetchHabitData();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(res.data.message || "Could not claim freeze");
            }
        }).catch((err)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message));
    };
    const handleDismissCelebration = (milestoneKey)=>{
        setPendingCelebration(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/ai-diary/milestones/${milestoneKey}/seen`, {}).catch((err)=>console.warn("[DismissCelebration]", err.message));
    };
    const handleFlashbackSelect = (entryId)=>{
        setActiveTab("journal");
        setSearchFilter(String(entryId));
    };
    // Voice speech-to-text fallback
    const toggleSpeechRecognition = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Speech recognition is not supported in this browser.");
            return;
        }
        if (isListening) {
            if (recognitionRef.current) recognitionRef.current.stop();
            setIsListening(false);
            return;
        }
        try {
            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = "en-US";
            recognition.onstart = ()=>{
                setIsListening(true);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("🎙️ Listening... Speak naturally.");
            };
            recognition.onresult = (event)=>{
                let currentTranscript = "";
                for(let i = event.resultIndex; i < event.results.length; i++){
                    currentTranscript += event.results[i][0].transcript;
                }
                setJournalContent((prev)=>{
                    const trimmed = prev.trim();
                    return trimmed ? `${trimmed} ${currentTranscript}` : currentTranscript;
                });
            };
            recognition.onerror = ()=>{
                setIsListening(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Voice input error. Please try again.");
            };
            recognition.onend = ()=>setIsListening(false);
            recognitionRef.current = recognition;
            recognition.start();
        } catch (e) {
            setIsListening(false);
        }
    };
    // Text-To-Speech Playback
    const speakText = (id, text)=>{
        if ("object" === "undefined" || !("speechSynthesis" in window)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Audio playback not supported in this browser.");
            return;
        }
        if (speakingEntryId === id) {
            window.speechSynthesis.cancel();
            setSpeakingEntryId(null);
            return;
        }
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.onend = ()=>setSpeakingEntryId(null);
        utterance.onerror = ()=>setSpeakingEntryId(null);
        setSpeakingEntryId(id);
        window.speechSynthesis.speak(utterance);
    };
    // Image Upload handler
    const handleImageUpload = (e)=>{
        const files = e.target.files;
        if (!files) return;
        Array.from(files).forEach((file)=>{
            if (file.size > 5 * 1024 * 1024) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Image size must be under 5MB");
                return;
            }
            const reader = new FileReader();
            reader.onload = (uploadEvent)=>{
                var _uploadEvent_target;
                if ((_uploadEvent_target = uploadEvent.target) === null || _uploadEvent_target === void 0 ? void 0 : _uploadEvent_target.result) {
                    setAttachedImages((prev)=>[
                            ...prev,
                            uploadEvent.target.result
                        ]);
                }
            };
            reader.readAsDataURL(file);
        });
    };
    // Trigger Voice Record with Freemium Limit Check (PRD: 30 Voice Notes / Month for Free)
    const handleStartVoiceRecord = ()=>{
        if (!subscription.isPro && subscription.voiceNotesLimit !== null && subscription.voiceNotesUsed >= subscription.voiceNotesLimit) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$utils$2f$diarySubscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordConversionEvent"])("LIMIT_REACHED", "voice_limit_hit");
            setProTriggerReason(`You've reached your free limit of ${subscription.voiceNotesLimit} voice notes this month. Upgrade to Ping Pro for unlimited voice journaling.`);
            setIsProModalOpen(true);
            return;
        }
        setIsVoiceRecordOpen(true);
    };
    // Process Completed Voice Entry (Voice First Architecture)
    const handleCompleteVoiceEntry = async (transcriptText)=>{
        try {
            var _res_data;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$utils$2f$diarySubscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordConversionEvent"])("VOICE_NOTE_CREATED");
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/ai-diary/voice-reflect", {
                spokenText: transcriptText
            });
            if ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.success) {
                var _res_data_habit_newlyUnlockedMilestones, _res_data_habit;
                const { mood, moodLabel, energyScore, immediateReflection, extractedTasks } = res.data;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`🎙️ Spoken Reflection Saved (${moodLabel || "Reflective"} ${mood || "⚡"}, Energy: ${energyScore || 8}/10)`, {
                    description: immediateReflection
                });
                setSubscription((prev)=>({
                        ...prev,
                        voiceNotesUsed: prev.voiceNotesUsed + 1
                    }));
                fetchEntries();
                fetchTasks();
                fetchReminders();
                fetchFollowUps();
                fetchGoals();
                fetchTimeline();
                fetchWeeklyReview();
                fetchHabitData();
                fetchFlashbacks();
                fetchCoachData();
                fetchCompanionMemories();
                fetchAccountabilityBriefing();
                fetchRelationships();
                fetchLifeScore();
                fetchActionSuggestions();
                fetchLifePatterns();
                if (((_res_data_habit = res.data.habit) === null || _res_data_habit === void 0 ? void 0 : (_res_data_habit_newlyUnlockedMilestones = _res_data_habit.newlyUnlockedMilestones) === null || _res_data_habit_newlyUnlockedMilestones === void 0 ? void 0 : _res_data_habit_newlyUnlockedMilestones.length) > 0) {
                    setPendingCelebration(res.data.habit.newlyUnlockedMilestones[0]);
                }
                if ("TURBOPACK compile-time truthy", 1) {
                    window.dispatchEvent(new CustomEvent("diary_entry_created"));
                    window.dispatchEvent(new CustomEvent("ai_todo_changed"));
                }
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to process voice entry");
        }
    };
    // Save Daily Journal Entry (AES-256-GCM Encrypted)
    const handleSaveEntry = async ()=>{
        if (!journalContent.trim() && attachedImages.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please record a voice note, write a thought, or attach an image.");
            return;
        }
        setIsGeneratingAi(true);
        try {
            const now = selectedDate || new Date();
            const { ciphertext, iv } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$utils$2f$diaryCrypto$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encryptDiaryText"])(journalContent);
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/ai-diary/entries", {
                date: now.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                }),
                time: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                }),
                mood: selectedMood.emoji,
                moodLabel: selectedMood.label,
                energyScore,
                content: journalContent,
                encryptedContent: ciphertext,
                iv,
                isEncrypted: true,
                images: attachedImages,
                entryType: isListening ? "voice" : "text"
            });
            if (res.data.success) {
                var _res_data_habit_newlyUnlockedMilestones, _res_data_habit;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(res.data.isMilestone ? "🏆 Milestone Saved & Tasks Extracted!" : "✨ AI Journal Entry & Tasks Indexed!");
                setJournalContent("");
                setAttachedImages([]);
                setIsAddModalOpen(false);
                fetchEntries();
                fetchTasks();
                fetchReminders();
                fetchFollowUps();
                fetchGoals();
                fetchTimeline();
                fetchWeeklyReview();
                fetchHabitData();
                fetchFlashbacks();
                fetchCoachData();
                fetchCompanionMemories();
                fetchAccountabilityBriefing();
                fetchRelationships();
                fetchLifeScore();
                if (((_res_data_habit = res.data.habit) === null || _res_data_habit === void 0 ? void 0 : (_res_data_habit_newlyUnlockedMilestones = _res_data_habit.newlyUnlockedMilestones) === null || _res_data_habit_newlyUnlockedMilestones === void 0 ? void 0 : _res_data_habit_newlyUnlockedMilestones.length) > 0) {
                    setPendingCelebration(res.data.habit.newlyUnlockedMilestones[0]);
                }
                if ("TURBOPACK compile-time truthy", 1) {
                    window.dispatchEvent(new CustomEvent("diary_entry_created"));
                    window.dispatchEvent(new CustomEvent("ai_todo_changed"));
                }
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Failed to save entry");
        } finally{
            setIsGeneratingAi(false);
        }
    };
    // Delete Diary Entry
    const handleDeleteEntry = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/ai-diary/entries/${id}`);
            setEntries((prev)=>prev.filter((e)=>e.id !== id));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Entry removed");
            if ("TURBOPACK compile-time truthy", 1) {
                window.dispatchEvent(new CustomEvent("ai_todo_changed"));
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to delete entry");
        }
    };
    // Create Task with Full Date & Time Metadata
    const handleCreateTask = async (taskData)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/ai-diary/tasks", taskData);
            if (res.data.success) {
                setTasks((prev)=>[
                        res.data.data,
                        ...prev
                    ]);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Task scheduled on your plan");
                if ("TURBOPACK compile-time truthy", 1) {
                    window.dispatchEvent(new CustomEvent("goal_created"));
                    window.dispatchEvent(new CustomEvent("ai_todo_changed"));
                }
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to create task");
        }
    };
    // Delete Task
    const handleDeleteTask = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/ai-diary/tasks/${id}`);
            setTasks((prev)=>prev.filter((t)=>t.id !== id));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Task removed");
            if ("TURBOPACK compile-time truthy", 1) {
                window.dispatchEvent(new CustomEvent("ai_todo_changed"));
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to delete task");
        }
    };
    // Toggle Task Completion
    const handleToggleTask = async (id, currentStatus)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/ai-diary/tasks/${id}`, {
                completed: !currentStatus
            });
            setTasks((prev)=>prev.map((t)=>t.id === id ? {
                        ...t,
                        completed: !currentStatus
                    } : t));
            if ("TURBOPACK compile-time truthy", 1) {
                if (!currentStatus) {
                    window.dispatchEvent(new CustomEvent("goal_completed"));
                }
                window.dispatchEvent(new CustomEvent("ai_todo_changed"));
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to update task");
        }
    };
    // Accept Suggested Reminder (Confidence Engine)
    const handleAcceptReminder = async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/ai-diary/reminders/accept/${id}`);
            if (res.data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("🔔 Reminder confirmed! Scheduled automatically.");
                fetchReminders();
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to accept reminder");
        }
    };
    // Resolve Follow-Up Item
    const handleResolveFollowUp = async (id)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/ai-diary/follow-ups/${id}/resolve`);
            if (res.data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Follow-up marked resolved! 🎉");
                fetchFollowUps();
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to resolve follow-up");
        }
    };
    // Ask Second Brain Q&A (Vector Search + Semantic)
    // PRD: 3 Free Second Brain Searches preview on Free Plan; unlimited on Ping Pro
    const handleAskSecondBrain = async (customQuery)=>{
        const q = customQuery || brainQuery;
        if (!q.trim()) return;
        if (!subscription.isPro && subscription.secondBrainSearchesLimit !== null && subscription.secondBrainSearchesUsed >= subscription.secondBrainSearchesLimit) {
            setProTriggerReason(`You've used all ${subscription.secondBrainSearchesLimit} free Second Brain searches. Upgrade to Ping Pro to unlock unlimited AI memory queries.`);
            setIsProModalOpen(true);
            return;
        }
        setIsAskingBrain(true);
        setBrainAnswer(null);
        setBrainSources([]);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/ai-diary/ask-second-brain", {
                query: q
            });
            if (res.data.success) {
                setBrainAnswer(res.data.answer);
                setBrainSources(res.data.sources || []);
                setBrainConfidence(res.data.confidence || null);
                setBrainConfidenceLevel(res.data.confidenceLevel || null);
                var _res_data_evidenceCount;
                setEvidenceCount((_res_data_evidenceCount = res.data.evidenceCount) !== null && _res_data_evidenceCount !== void 0 ? _res_data_evidenceCount : null);
                setOldestSourceDate(res.data.oldestSourceDate || null);
                setNewestSourceDate(res.data.newestSourceDate || null);
                setFirstMentionDate(res.data.firstMentionDate || null);
                setConfidenceFactors(res.data.confidenceFactors || []);
                setSubscription((prev)=>({
                        ...prev,
                        secondBrainSearchesUsed: prev.secondBrainSearchesUsed + 1
                    }));
            }
        } catch (err) {
            var _err_response_data, _err_response;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(((_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || "Second Brain search failed");
        } finally{
            setIsAskingBrain(false);
        }
    };
    // Create Goal in 4-Pillar Life OS
    const handleCreateGoal = async (e, title, targetValue, unit, pillar = "Business", milestones = [])=>{
        e.preventDefault();
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/ai-diary/operating-system/goals", {
                title,
                targetValue: parseFloat(targetValue) || 100,
                unit,
                pillar,
                milestones
            });
            if (res.data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("🎯 Goal created in 4-Pillar Life OS");
                fetchGoals();
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to create goal");
        }
    };
    const handleToggleGoalMilestone = async (goalId, milestoneId)=>{
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post(`/ai-diary/operating-system/goals/${goalId}/milestones/${milestoneId}/toggle`, {});
            if (res.data.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Milestone progress updated (${res.data.newProgress}%)`);
                fetchGoals();
            }
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to update milestone");
        }
    };
    if (!isOpen) return null;
    // Level 4 Biometric/PIN Device Security Screen
    if (isLocked) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: isModal ? "fixed inset-0 z-[200] bg-[#f8fafc] dark:bg-[#0b141a] text-[#111b21] dark:text-[#e9edef] flex w-full h-full overflow-hidden select-none animate-in fade-in duration-200" : "w-full h-full flex overflow-hidden bg-[#f8fafc] dark:bg-[#0b141a] text-[#111b21] dark:text-[#e9edef] relative select-none animate-in fade-in duration-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$DiaryLockScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiaryLockScreen"], {
                onUnlock: ()=>setIsLocked(false),
                onCancel: onClose,
                isEmbedded: !isModal
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 953,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
            lineNumber: 946,
            columnNumber: 7
        }, this);
    }
    const selectedFormatted = selectedDate.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric"
    });
    const pendingSuggestedReminders = reminders.filter((r)=>r.status === "suggested");
    const overdueFollowUps = followUps.filter((f)=>f.isOverdue && f.status === "pending");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: isModal ? "fixed inset-0 z-[200] bg-[#f8fafc] dark:bg-[#0b141a] text-[#111b21] dark:text-[#e9edef] flex w-full h-full overflow-hidden select-none animate-in fade-in duration-200" : "w-full h-full flex overflow-hidden bg-[#f8fafc] dark:bg-[#0b141a] text-[#111b21] dark:text-[#e9edef] relative select-none animate-in fade-in duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$DiarySidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiarySidebar"], {
                activeTab: activeTab,
                onTabSelect: setActiveTab,
                isMobileSidebarOpen: isMobileSidebarOpen,
                onCloseMobileSidebar: ()=>setIsMobileSidebarOpen(false),
                onClose: handleSafeClose,
                onOpenBriefing: ()=>setIsBriefingOpen(true),
                onOpenDecisions: ()=>setIsDecisionModalOpen(true),
                onOpenVoiceCompanion: ()=>setIsVoiceCompanionOpen(true),
                onOpenSundayReview: ()=>setIsSundayReviewOpen(true),
                onOpenKnowledgeGraph: ()=>setIsKnowledgeGraphOpen(true),
                onOpenLifeStory: ()=>setIsLifeStoryModalOpen(true),
                onOpenFutureLetter: ()=>setIsFutureLetterModalOpen(true),
                onOpenCeoReport: ()=>setIsCeoReportModalOpen(true),
                habitData: habitData,
                onClaimFreeze: handleClaimFreeze,
                lifeScore: (lifeScoreData === null || lifeScoreData === void 0 ? void 0 : lifeScoreData.compositeScore) || 78,
                isPro: subscription.isPro,
                onOpenProModal: ()=>{
                    setProTriggerReason(undefined);
                    setIsProModalOpen(true);
                },
                pendingRemindersCount: pendingSuggestedReminders.length
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 980,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col h-full min-w-0 overflow-hidden bg-[#f8fafc] dark:bg-[#0b141a]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$DiaryHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiaryHeader"], {
                        activeTab: activeTab,
                        onOpenMobileSidebar: ()=>setIsMobileSidebarOpen(true),
                        selectedDate: selectedDate,
                        onStartVoiceRecord: handleStartVoiceRecord,
                        onAddNote: ()=>setIsAddModalOpen(true),
                        onAddTask: ()=>setIsAddTaskModalOpen(true),
                        onClose: handleSafeClose,
                        isPro: subscription.isPro,
                        onOpenProModal: ()=>{
                            setProTriggerReason(undefined);
                            setIsProModalOpen(true);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                        lineNumber: 1008,
                        columnNumber: 9
                    }, this),
                    (activeTab === "todo" || activeTab === "journal") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$CalendarStrip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarStrip"], {
                        selectedDate: selectedDate,
                        setSelectedDate: setSelectedDate,
                        weekOffset: weekOffset,
                        setWeekOffset: setWeekOffset,
                        tasks: tasks,
                        entries: entries
                    }, void 0, false, {
                        fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                        lineNumber: 1025,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 max-w-5xl w-full mx-auto pb-[calc(5.5rem+env(safe-area-inset-bottom,16px))] md:pb-16`,
                        children: [
                            overdueFollowUps.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3 text-xs animate-in slide-in-from-top duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2.5 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-2 rounded-md bg-amber-500 text-white shadow-xs shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$AlertCircleIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertCircleIcon"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                                    lineNumber: 1044,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                                lineNumber: 1043,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-black text-amber-700 dark:text-amber-300 uppercase text-[10px] tracking-wider block",
                                                        children: "Pending Follow-Up (3+ Days Inactivity)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                                        lineNumber: 1047,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-800 dark:text-gray-200 truncate font-medium",
                                                        children: overdueFollowUps[0].checkInPrompt || `You were waiting for: "${overdueFollowUps[0].waitingFor}". Any update?`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                                        lineNumber: 1050,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                                lineNumber: 1046,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                        lineNumber: 1042,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleResolveFollowUp(overdueFollowUps[0].id),
                                        className: "px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shrink-0 cursor-pointer shadow-xs active:scale-95 transition-all",
                                        children: "Mark Resolved"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                        lineNumber: 1055,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                lineNumber: 1041,
                                columnNumber: 13
                            }, this),
                            activeTab === "todo" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$TasksTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TasksTab"], {
                                tasks: tasks,
                                reminders: reminders,
                                selectedDate: selectedDate,
                                onToggleTask: handleToggleTask,
                                onDeleteTask: handleDeleteTask,
                                onAcceptReminder: handleAcceptReminder,
                                onOpenAddTask: ()=>setIsAddTaskModalOpen(true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                lineNumber: 1066,
                                columnNumber: 11
                            }, this),
                            activeTab === "journal" && (()=>{
                                const sevenDaysAgo = new Date();
                                sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
                                const displayedJournalEntries = subscription.isPro ? entries : entries.filter((e)=>{
                                    const d = e.createdAt ? new Date(e.createdAt) : new Date(e.date);
                                    return isNaN(d.getTime()) || d >= sevenDaysAgo;
                                });
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$ActionSuggestionsBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionSuggestionsBanner"], {
                                            suggestions: actionSuggestions,
                                            onAccept: handleAcceptSuggestion,
                                            onDismiss: handleDismissSuggestion
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                            lineNumber: 1090,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$MemoryFlashbackBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MemoryFlashbackBanner"], {
                                            flashbacksData: flashbacksData,
                                            onSelectEntry: handleFlashbackSelect
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                            lineNumber: 1097,
                                            columnNumber: 15
                                        }, this),
                                        !subscription.isPro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-3 rounded-lg bg-white/60 dark:bg-white/5 border border-blue-200 dark:border-white/10 flex items-center justify-between gap-2 text-xs backdrop-blur-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-600 dark:text-gray-300 text-[11px] font-medium",
                                                    children: "Showing past 7 days of diary history (Free plan)."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                                    lineNumber: 1104,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>{
                                                        setProTriggerReason("Access your complete lifetime diary archive with Ping Pro.");
                                                        setIsProModalOpen(true);
                                                    },
                                                    className: "text-blue-600 dark:text-blue-400 font-bold hover:underline cursor-pointer text-[11px] shrink-0",
                                                    children: "Unlock Lifetime Archive →"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                                    lineNumber: 1107,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                            lineNumber: 1103,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$JournalTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JournalTab"], {
                                            entries: displayedJournalEntries,
                                            searchFilter: searchFilter,
                                            setSearchFilter: setSearchFilter,
                                            speakingEntryId: speakingEntryId,
                                            onSpeakText: speakText,
                                            onDeleteEntry: handleDeleteEntry,
                                            onOpenAddEntry: ()=>setIsAddModalOpen(true),
                                            onUpdateImportance: handleUpdateImportance,
                                            onStartReflection: handleStartReflection
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                            lineNumber: 1118,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                    lineNumber: 1088,
                                    columnNumber: 13
                                }, this);
                            })(),
                            activeTab === "secondbrain" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$SecondBrainTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SecondBrainTab"], {
                                brainQuery: brainQuery,
                                setBrainQuery: setBrainQuery,
                                isAskingBrain: isAskingBrain,
                                brainAnswer: brainAnswer,
                                brainSources: brainSources,
                                brainConfidence: brainConfidence,
                                confidenceLevel: brainConfidenceLevel,
                                evidenceCount: evidenceCount,
                                oldestSourceDate: oldestSourceDate,
                                newestSourceDate: newestSourceDate,
                                firstMentionDate: firstMentionDate,
                                confidenceFactors: confidenceFactors,
                                onAskSecondBrain: handleAskSecondBrain,
                                onSelectEntry: handleFlashbackSelect
                            }, void 0, false, {
                                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                lineNumber: 1134,
                                columnNumber: 11
                            }, this),
                            activeTab === "timeline" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$TimelineGoalsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimelineGoalsTab"], {
                                goals: goals,
                                timelineData: timelineData,
                                onCreateGoal: handleCreateGoal,
                                onToggleMilestone: handleToggleGoalMilestone
                            }, void 0, false, {
                                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                lineNumber: 1153,
                                columnNumber: 11
                            }, this),
                            activeTab === "insights" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$LivingLifeMapCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LivingLifeMapCard"], {
                                        onRefresh: fetchTrajectoryForecast
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                        lineNumber: 1164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$LifeTrajectoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LifeTrajectoryCard"], {
                                        forecast: trajectoryForecast,
                                        isLoading: isTrajectoryLoading,
                                        onRefresh: fetchTrajectoryForecast
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                        lineNumber: 1167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$LifePatternsCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LifePatternsCard"], {
                                        patterns: lifePatterns,
                                        isLoading: isLifePatternsLoading,
                                        onRefresh: fetchLifePatterns
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                        lineNumber: 1174,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$RelationshipIntelligenceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RelationshipIntelligenceCard"], {
                                        data: relationshipData,
                                        onRefresh: fetchRelationships
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                        lineNumber: 1181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$CompanionMemoryCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompanionMemoryCard"], {
                                        data: companionData
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                        lineNumber: 1187,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$PersonalCoachCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersonalCoachCard"], {
                                        coachData: coachData,
                                        isLoading: isCoachLoading,
                                        onRefresh: fetchCoachData,
                                        onActionClick: (directive)=>{
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`Coach Directive: ${directive}`);
                                            setActiveTab("journal");
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                        lineNumber: 1190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$ExecutiveReviewTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExecutiveReviewTab"], {
                                        weeklyReview: weeklyReview
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                        lineNumber: 1200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$LifeAreasHeatmapCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LifeAreasHeatmapCard"], {}, void 0, false, {
                                        fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                        lineNumber: 1203,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                lineNumber: 1162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                        lineNumber: 1036,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1006,
                columnNumber: 7
            }, this),
            (isMobile || isNative) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed bottom-[calc(4.8rem+env(safe-area-inset-bottom,12px))] right-4 z-30 flex items-center gap-2 md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleStartVoiceRecord,
                    className: "flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-blue-950 font-black text-xs shadow-xl active:scale-95 transition-all cursor-pointer ring-2 ring-amber-400/40 touch-manipulation",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mic01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mic01Icon"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                            lineNumber: 1216,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Record Voice"
                        }, void 0, false, {
                            fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                            lineNumber: 1217,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                    lineNumber: 1212,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1211,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `md:hidden fixed bottom-0 left-0 right-0 z-25 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md border-t border-slate-200/80 dark:border-[#2d3139] px-2 pt-2 transition-all select-none shadow-[0_-4px_20px_rgba(0,0,0,0.05)] ${isNative || isMobile ? "pb-[calc(0.6rem+env(safe-area-inset-bottom,12px))]" : "pb-2"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-around max-w-lg mx-auto",
                    children: [
                        {
                            id: "todo",
                            label: "Tasks",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkSquare01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkSquare01Icon"],
                            badge: pendingSuggestedReminders.length > 0 ? String(pendingSuggestedReminders.length) : undefined
                        },
                        {
                            id: "journal",
                            label: "Journal",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$BookOpen01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BookOpen01Icon"]
                        },
                        {
                            id: "secondbrain",
                            label: "Brain AI",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Brain01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Brain01Icon"],
                            badge: "AI"
                        },
                        {
                            id: "timeline",
                            label: "Goals",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Target01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Target01Icon"]
                        },
                        {
                            id: "insights",
                            label: "Reports",
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Activity01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Activity01Icon"]
                        }
                    ].map((item)=>{
                        const isActive = activeTab === item.id;
                        const IconComp = item.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setActiveTab(item.id),
                            className: `flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-lg text-[10px] font-bold transition-all relative cursor-pointer touch-manipulation active:scale-95 ${isActive ? "text-blue-600 dark:text-blue-400 font-extrabold" : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComp, {
                                            size: 20,
                                            className: `transition-transform duration-150 ${isActive ? "scale-110 text-blue-600 dark:text-blue-400" : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                            lineNumber: 1257,
                                            columnNumber: 19
                                        }, this),
                                        item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `absolute -top-1 -right-2 px-1 py-0.2 rounded-full text-[8px] font-black ${isActive ? "bg-blue-600 text-white" : "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"}`,
                                            children: item.badge
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                            lineNumber: 1264,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                    lineNumber: 1256,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-1 leading-none tracking-tight",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                                    lineNumber: 1275,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                            lineNumber: 1246,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                    lineNumber: 1230,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$VoiceRecordModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceRecordModal"], {
                isOpen: isVoiceRecordOpen,
                onClose: ()=>setIsVoiceRecordOpen(false),
                onCompleteVoiceEntry: handleCompleteVoiceEntry
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$AddEntryModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddEntryModal"], {
                isOpen: isAddModalOpen,
                onClose: ()=>setIsAddModalOpen(false),
                selectedMood: selectedMood,
                setSelectedMood: setSelectedMood,
                energyScore: energyScore,
                setEnergyScore: setEnergyScore,
                journalContent: journalContent,
                setJournalContent: setJournalContent,
                attachedImages: attachedImages,
                setAttachedImages: setAttachedImages,
                isListening: isListening,
                isGeneratingAi: isGeneratingAi,
                onToggleSpeech: toggleSpeechRecognition,
                onImageUpload: handleImageUpload,
                onSaveEntry: handleSaveEntry
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$AddTaskModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddTaskModal"], {
                isOpen: isAddTaskModalOpen,
                onClose: ()=>setIsAddTaskModalOpen(false),
                defaultDate: selectedDate,
                onCreateTask: handleCreateTask
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$AccountabilityBriefingModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountabilityBriefingModal"], {
                isOpen: isBriefingOpen,
                onClose: ()=>setIsBriefingOpen(false),
                briefing: briefingData,
                onSelectPriority: (taskTitle)=>{
                    setIsBriefingOpen(false);
                    setActiveTab("todo");
                }
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$MilestoneCelebrationModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MilestoneCelebrationModal"], {
                badge: pendingCelebration,
                onDismiss: handleDismissCelebration
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1328,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$PingProModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PingProModal"], {
                isOpen: isProModalOpen,
                onClose: ()=>setIsProModalOpen(false),
                onSubscriptionUpdated: (sub)=>setSubscription(sub),
                currentPlan: subscription.plan,
                triggerReason: proTriggerReason
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$AiDiaryExitIntentModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiDiaryExitIntentModal"], {
                isOpen: isExitIntentOpen,
                onClose: ()=>setIsExitIntentOpen(false),
                onUpgradeSuccess: (upgraded)=>{
                    if (upgraded) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$utils$2f$diarySubscription$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSubscriptionStatus"])().then(setSubscription);
                    }
                },
                offer: activeOffer
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$DecisionMemoryModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecisionMemoryModal"], {
                isOpen: isDecisionModalOpen,
                onClose: ()=>setIsDecisionModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1355,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$PersonalCeoReportModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersonalCeoReportModal"], {
                isOpen: isCeoReportModalOpen,
                onClose: ()=>setIsCeoReportModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1361,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$SundayWeeklyReviewModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SundayWeeklyReviewModal"], {
                isOpen: isSundayReviewOpen,
                onClose: ()=>setIsSundayReviewOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1367,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$PersonalKnowledgeGraphModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersonalKnowledgeGraphModal"], {
                isOpen: isKnowledgeGraphOpen,
                onClose: ()=>setIsKnowledgeGraphOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1373,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$VoiceCompanionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceCompanionModal"], {
                isOpen: isVoiceCompanionOpen,
                onClose: ()=>setIsVoiceCompanionOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1379,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$GuidedReflectionModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuidedReflectionModal"], {
                isOpen: isReflectionModalOpen,
                onClose: ()=>setIsReflectionModalOpen(false),
                diaryEntry: selectedReflectionEntry,
                onCompleted: ()=>{
                    fetchEntries();
                    fetchTrajectoryForecast();
                }
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1385,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$LifeStoryModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LifeStoryModal"], {
                isOpen: isLifeStoryModalOpen,
                onClose: ()=>setIsLifeStoryModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1396,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$diary$2f$components$2f$FutureSelfLetterModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FutureSelfLetterModal"], {
                isOpen: isFutureLetterModalOpen,
                onClose: ()=>setIsFutureLetterModalOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
                lineNumber: 1402,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/diary/AiDiaryModal.tsx",
        lineNumber: 972,
        columnNumber: 5
    }, this);
}
_s(AiDiaryModal, "e8LbKixO2VBWo1R5AMgX+txbKek=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = AiDiaryModal;
var _c;
__turbopack_context__.k.register(_c, "AiDiaryModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_diary_a47c75fc._.js.map