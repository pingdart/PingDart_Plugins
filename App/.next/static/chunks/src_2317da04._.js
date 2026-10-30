(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/api.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/api.ts [app-client] (ecmascript) <export api as default>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
}),
"[project]/src/services/notificationApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "notificationApi",
    ()=>notificationApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
const notificationApi = {
    // Get list of notifications from DB
    getNotifications: async (unreadOnly = false, limit = 50)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get(`/notifications?unreadOnly=${unreadOnly}&limit=${limit}`);
        return response.data;
    },
    // Get unread badge count
    getUnreadCount: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get('/notifications/unread-count');
        return response.data;
    },
    // Mark a single notification as read
    markAsRead: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch(`/notifications/${id}/read`);
        return response.data;
    },
    // Mark all notifications as read
    markAllAsRead: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].patch('/notifications/read-all');
        return response.data;
    },
    // Delete single notification
    deleteNotification: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/notifications/${id}`);
        return response.data;
    },
    // Clear all notifications
    clearAll: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete('/notifications/clear-all');
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/currencyService.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COUNTRY_CODE_TO_CURRENCY",
    ()=>COUNTRY_CODE_TO_CURRENCY,
    "CURRENCY_MAP",
    ()=>CURRENCY_MAP,
    "CURRENCY_SYMBOLS",
    ()=>CURRENCY_SYMBOLS,
    "DIAL_CODE_TO_CURRENCY",
    ()=>DIAL_CODE_TO_CURRENCY,
    "SUPPORTED_CURRENCIES",
    ()=>SUPPORTED_CURRENCIES,
    "detectCountryCurrency",
    ()=>detectCountryCurrency,
    "formatCurrencyAmount",
    ()=>formatCurrencyAmount,
    "getOrDetectUserCurrency",
    ()=>getOrDetectUserCurrency,
    "setUserPreferredCurrency",
    ()=>setUserPreferredCurrency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUserCurrency.ts [app-client] (ecmascript)");
"use client";
const SUPPORTED_CURRENCIES = [
    {
        code: "INR",
        symbol: "₹",
        name: "Indian Rupee",
        country: "India",
        flag: "🇮🇳",
        locale: "en-IN"
    },
    {
        code: "USD",
        symbol: "$",
        name: "US Dollar",
        country: "United States",
        flag: "🇺🇸",
        locale: "en-US"
    },
    {
        code: "EUR",
        symbol: "€",
        name: "Euro",
        country: "European Union",
        flag: "🇪🇺",
        locale: "de-DE"
    },
    {
        code: "GBP",
        symbol: "£",
        name: "British Pound",
        country: "United Kingdom",
        flag: "🇬🇧",
        locale: "en-GB"
    },
    {
        code: "AED",
        symbol: "AED ",
        name: "UAE Dirham",
        country: "United Arab Emirates",
        flag: "🇦🇪",
        locale: "ar-AE"
    },
    {
        code: "CAD",
        symbol: "C$",
        name: "Canadian Dollar",
        country: "Canada",
        flag: "🇨🇦",
        locale: "en-CA"
    },
    {
        code: "AUD",
        symbol: "A$",
        name: "Australian Dollar",
        country: "Australia",
        flag: "🇦🇺",
        locale: "en-AU"
    },
    {
        code: "SGD",
        symbol: "S$",
        name: "Singapore Dollar",
        country: "Singapore",
        flag: "🇸🇬",
        locale: "en-SG"
    },
    {
        code: "SAR",
        symbol: "SAR ",
        name: "Saudi Riyal",
        country: "Saudi Arabia",
        flag: "🇸🇦",
        locale: "ar-SA"
    },
    {
        code: "JPY",
        symbol: "¥",
        name: "Japanese Yen",
        country: "Japan",
        flag: "🇯🇵",
        locale: "ja-JP"
    },
    {
        code: "CHF",
        symbol: "CHF ",
        name: "Swiss Franc",
        country: "Switzerland",
        flag: "🇨🇭",
        locale: "de-CH"
    },
    {
        code: "BRL",
        symbol: "R$",
        name: "Brazilian Real",
        country: "Brazil",
        flag: "🇧🇷",
        locale: "pt-BR"
    },
    {
        code: "ZAR",
        symbol: "R",
        name: "South African Rand",
        country: "South Africa",
        flag: "🇿🇦",
        locale: "en-ZA"
    },
    {
        code: "BDT",
        symbol: "৳",
        name: "Bangladeshi Taka",
        country: "Bangladesh",
        flag: "🇧🇩",
        locale: "bn-BD"
    },
    {
        code: "PKR",
        symbol: "₨",
        name: "Pakistani Rupee",
        country: "Pakistan",
        flag: "🇵🇰",
        locale: "ur-PK"
    },
    {
        code: "PHP",
        symbol: "₱",
        name: "Philippine Peso",
        country: "Philippines",
        flag: "🇵🇭",
        locale: "en-PH"
    },
    {
        code: "MYR",
        symbol: "RM",
        name: "Malaysian Ringgit",
        country: "Malaysia",
        flag: "🇲🇾",
        locale: "ms-MY"
    },
    {
        code: "IDR",
        symbol: "Rp",
        name: "Indonesian Rupiah",
        country: "Indonesia",
        flag: "🇮🇩",
        locale: "id-ID"
    }
];
const CURRENCY_MAP = SUPPORTED_CURRENCIES.reduce(_c = (acc, curr)=>{
    acc[curr.code] = curr;
    return acc;
}, {});
_c1 = CURRENCY_MAP;
const CURRENCY_SYMBOLS = SUPPORTED_CURRENCIES.reduce(_c2 = (acc, curr)=>{
    acc[curr.code] = curr.symbol;
    return acc;
}, {});
_c3 = CURRENCY_SYMBOLS;
const PREFERRED_CURRENCY_KEY = "pingdart_preferred_currency";
const AUTO_DETECT_ENABLED_KEY = "pingdart_currency_autodetect_enabled";
const COUNTRY_CODE_TO_CURRENCY = {
    IN: "INR",
    US: "USD",
    PR: "USD",
    VI: "USD",
    GU: "USD",
    GB: "GBP",
    UK: "GBP",
    CA: "CAD",
    AU: "AUD",
    AE: "AED",
    SA: "SAR",
    SG: "SGD",
    JP: "JPY",
    CH: "CHF",
    BR: "BRL",
    ZA: "ZAR",
    BD: "BDT",
    PK: "PKR",
    PH: "PHP",
    MY: "MYR",
    ID: "IDR",
    // Eurozone
    DE: "EUR",
    FR: "EUR",
    IT: "EUR",
    ES: "EUR",
    NL: "EUR",
    BE: "EUR",
    AT: "EUR",
    IE: "EUR",
    PT: "EUR",
    FI: "EUR",
    GR: "EUR",
    CY: "EUR",
    EE: "EUR",
    LV: "EUR",
    LT: "EUR",
    LU: "EUR",
    MT: "EUR",
    SK: "EUR",
    SI: "EUR"
};
const DIAL_CODE_TO_CURRENCY = {
    "+91": "INR",
    "+1": "USD",
    "+44": "GBP",
    "+971": "AED",
    "+966": "SAR",
    "+61": "AUD",
    "+65": "SGD",
    "+81": "JPY",
    "+41": "CHF",
    "+55": "BRL",
    "+27": "ZAR",
    "+880": "BDT",
    "+92": "PKR",
    "+63": "PHP",
    "+60": "MYR",
    "+62": "IDR",
    "+49": "EUR",
    "+33": "EUR",
    "+39": "EUR",
    "+34": "EUR",
    "+31": "EUR",
    "+32": "EUR",
    "+43": "EUR",
    "+353": "EUR",
    "+351": "EUR",
    "+358": "EUR",
    "+30": "EUR"
};
function detectCountryCurrency(user) {
    // 1. Direct country code check (e.g. "US", "IN", "GB")
    if (user === null || user === void 0 ? void 0 : user.countryCode) {
        const code = user.countryCode.trim().toUpperCase();
        const currCode = COUNTRY_CODE_TO_CURRENCY[code];
        if (currCode && CURRENCY_MAP[currCode]) {
            const c = CURRENCY_MAP[currCode];
            return {
                code: c.code,
                symbol: c.symbol,
                countryName: c.country,
                flag: c.flag,
                detectionSource: `Country Code (${code})`
            };
        }
    }
    // 2. Direct dial code check (e.g. "+1", "+91", "+44", "+971")
    if (user === null || user === void 0 ? void 0 : user.dialCode) {
        let d = user.dialCode.trim();
        if (!d.startsWith("+")) d = `+${d}`;
        const currCode = DIAL_CODE_TO_CURRENCY[d];
        if (currCode && CURRENCY_MAP[currCode]) {
            const c = CURRENCY_MAP[currCode];
            return {
                code: c.code,
                symbol: c.symbol,
                countryName: c.country,
                flag: c.flag,
                detectionSource: `Dial Code (${d})`
            };
        }
    }
    // 3. User phone string check (e.g. "+1 555-...", "+91 98765-...")
    if (user === null || user === void 0 ? void 0 : user.phone) {
        const p = user.phone.trim();
        const sortedDialCodes = Object.keys(DIAL_CODE_TO_CURRENCY).sort((a, b)=>b.length - a.length);
        for (const dial of sortedDialCodes){
            const dialDigits = dial.replace("+", "");
            if (p.startsWith(dial) || p.startsWith(`${dial} `) || p.startsWith(`${dialDigits} `) || p.startsWith(`00${dialDigits}`)) {
                const currCode = DIAL_CODE_TO_CURRENCY[dial];
                if (currCode && CURRENCY_MAP[currCode]) {
                    const c = CURRENCY_MAP[currCode];
                    return {
                        code: c.code,
                        symbol: c.symbol,
                        countryName: c.country,
                        flag: c.flag,
                        detectionSource: `Phone (${dial})`
                    };
                }
            }
        }
    }
    // 4. Check user profile location / country name string
    const loc = `${(user === null || user === void 0 ? void 0 : user.location) || ""} ${(user === null || user === void 0 ? void 0 : user.country) || ""}`.toLowerCase();
    if (loc) {
        if (loc.includes("india") || loc.includes("bharat") || /\b(in|ind)\b/i.test(loc)) {
            return {
                code: "INR",
                symbol: "₹",
                countryName: "India",
                flag: "🇮🇳",
                detectionSource: "Location (India)"
            };
        }
        if (loc.includes("united states") || loc.includes("usa") || loc.includes("america") || /\b(us)\b/i.test(loc)) {
            return {
                code: "USD",
                symbol: "$",
                countryName: "United States",
                flag: "🇺🇸",
                detectionSource: "Location (US)"
            };
        }
        if (loc.includes("united kingdom") || loc.includes("britain") || loc.includes("england") || loc.includes("london") || /\b(uk|gb)\b/i.test(loc)) {
            return {
                code: "GBP",
                symbol: "£",
                countryName: "United Kingdom",
                flag: "🇬🇧",
                detectionSource: "Location (UK)"
            };
        }
        if (loc.includes("canada") || /\b(ca)\b/i.test(loc)) {
            return {
                code: "CAD",
                symbol: "C$",
                countryName: "Canada",
                flag: "🇨🇦",
                detectionSource: "Location (Canada)"
            };
        }
        if (loc.includes("australia") || loc.includes("sydney") || /\b(au)\b/i.test(loc)) {
            return {
                code: "AUD",
                symbol: "A$",
                countryName: "Australia",
                flag: "🇦🇺",
                detectionSource: "Location (Australia)"
            };
        }
        if (loc.includes("emirates") || loc.includes("uae") || loc.includes("dubai") || loc.includes("abu dhabi")) {
            return {
                code: "AED",
                symbol: "AED ",
                countryName: "United Arab Emirates",
                flag: "🇦🇪",
                detectionSource: "Location (UAE)"
            };
        }
        if (loc.includes("saudi") || loc.includes("riyadh") || loc.includes("ksa")) {
            return {
                code: "SAR",
                symbol: "SAR ",
                countryName: "Saudi Arabia",
                flag: "🇸🇦",
                detectionSource: "Location (Saudi)"
            };
        }
        if (loc.includes("singapore")) {
            return {
                code: "SGD",
                symbol: "S$",
                countryName: "Singapore",
                flag: "🇸🇬",
                detectionSource: "Location (Singapore)"
            };
        }
        if (loc.includes("japan") || loc.includes("tokyo")) {
            return {
                code: "JPY",
                symbol: "¥",
                countryName: "Japan",
                flag: "🇯🇵",
                detectionSource: "Location (Japan)"
            };
        }
        if (loc.includes("switzerland") || loc.includes("swiss")) {
            return {
                code: "CHF",
                symbol: "CHF ",
                countryName: "Switzerland",
                flag: "🇨🇭",
                detectionSource: "Location (Switzerland)"
            };
        }
        if (loc.includes("brazil") || loc.includes("brasil")) {
            return {
                code: "BRL",
                symbol: "R$",
                countryName: "Brazil",
                flag: "🇧🇷",
                detectionSource: "Location (Brazil)"
            };
        }
        if (loc.includes("south africa")) {
            return {
                code: "ZAR",
                symbol: "R",
                countryName: "South Africa",
                flag: "🇿🇦",
                detectionSource: "Location (South Africa)"
            };
        }
        if (loc.includes("bangladesh") || loc.includes("dhaka")) {
            return {
                code: "BDT",
                symbol: "৳",
                countryName: "Bangladesh",
                flag: "🇧🇩",
                detectionSource: "Location (Bangladesh)"
            };
        }
        if (loc.includes("pakistan") || loc.includes("karachi") || loc.includes("lahore")) {
            return {
                code: "PKR",
                symbol: "₨",
                countryName: "Pakistan",
                flag: "🇵🇰",
                detectionSource: "Location (Pakistan)"
            };
        }
        if (loc.includes("philippines") || loc.includes("manila")) {
            return {
                code: "PHP",
                symbol: "₱",
                countryName: "Philippines",
                flag: "🇵🇭",
                detectionSource: "Location (Philippines)"
            };
        }
        if (loc.includes("malaysia") || loc.includes("kuala lumpur")) {
            return {
                code: "MYR",
                symbol: "RM",
                countryName: "Malaysia",
                flag: "🇲🇾",
                detectionSource: "Location (Malaysia)"
            };
        }
        if (loc.includes("indonesia") || loc.includes("jakarta")) {
            return {
                code: "IDR",
                symbol: "Rp",
                countryName: "Indonesia",
                flag: "🇮🇩",
                detectionSource: "Location (Indonesia)"
            };
        }
        if (loc.includes("germany") || loc.includes("france") || loc.includes("italy") || loc.includes("spain") || loc.includes("netherlands") || loc.includes("europe")) {
            return {
                code: "EUR",
                symbol: "€",
                countryName: "European Union",
                flag: "🇪🇺",
                detectionSource: "Location (Europe)"
            };
        }
    }
    // 5. Client-side browser checks (Timezone & Language)
    if ("TURBOPACK compile-time truthy", 1) {
        // Browser timezone
        try {
            const tz = (Intl.DateTimeFormat().resolvedOptions().timeZone || "").toLowerCase();
            if (tz.includes("kolkata") || tz.includes("calcutta") || tz.includes("india") || tz === "asia/calcutta") {
                return {
                    code: "INR",
                    symbol: "₹",
                    countryName: "India",
                    flag: "🇮🇳",
                    detectionSource: "Timezone (India)"
                };
            }
            if (tz.includes("new_york") || tz.includes("los_angeles") || tz.includes("chicago") || tz.includes("denver")) {
                return {
                    code: "USD",
                    symbol: "$",
                    countryName: "United States",
                    flag: "🇺🇸",
                    detectionSource: "Timezone (US)"
                };
            }
            if (tz.includes("london")) {
                return {
                    code: "GBP",
                    symbol: "£",
                    countryName: "United Kingdom",
                    flag: "🇬🇧",
                    detectionSource: "Timezone (UK)"
                };
            }
            if (tz.includes("dubai")) {
                return {
                    code: "AED",
                    symbol: "AED ",
                    countryName: "United Arab Emirates",
                    flag: "🇦🇪",
                    detectionSource: "Timezone (UAE)"
                };
            }
            if (tz.includes("riyadh")) {
                return {
                    code: "SAR",
                    symbol: "SAR ",
                    countryName: "Saudi Arabia",
                    flag: "🇸🇦",
                    detectionSource: "Timezone (Saudi)"
                };
            }
            if (tz.includes("berlin") || tz.includes("paris") || tz.includes("rome") || tz.includes("madrid") || tz.includes("amsterdam")) {
                return {
                    code: "EUR",
                    symbol: "€",
                    countryName: "European Union",
                    flag: "🇪🇺",
                    detectionSource: "Timezone (Europe)"
                };
            }
        } catch (_) {}
        // Browser language / locale
        try {
            const lang = (navigator.language || navigator.languages && navigator.languages[0] || "").toLowerCase();
            if (lang.endsWith("-in") || lang.startsWith("hi") || lang.startsWith("te") || lang.startsWith("ta") || lang.startsWith("mr") || lang.startsWith("bn") || lang.startsWith("gu") || lang.startsWith("kn") || lang.startsWith("ml") || lang.startsWith("pa")) {
                return {
                    code: "INR",
                    symbol: "₹",
                    countryName: "India",
                    flag: "🇮🇳",
                    detectionSource: "Browser Language (India)"
                };
            }
            if (lang.endsWith("-us")) {
                return {
                    code: "USD",
                    symbol: "$",
                    countryName: "United States",
                    flag: "🇺🇸",
                    detectionSource: "Browser Language (US)"
                };
            }
            if (lang.endsWith("-gb")) {
                return {
                    code: "GBP",
                    symbol: "£",
                    countryName: "United Kingdom",
                    flag: "🇬🇧",
                    detectionSource: "Browser Language (UK)"
                };
            }
        } catch (_) {}
    }
    // 6. Any other country / international -> default to USD ($)
    return {
        code: "USD",
        symbol: "$",
        countryName: "United States",
        flag: "🇺🇸",
        detectionSource: "Default (Global USD)"
    };
}
function getOrDetectUserCurrency(user) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const saved = localStorage.getItem(PREFERRED_CURRENCY_KEY);
        if (saved && CURRENCY_MAP[saved]) {
            return saved;
        }
        // Auto-detect if not set
        const detected = detectCountryCurrency(user);
        localStorage.setItem(PREFERRED_CURRENCY_KEY, detected.code);
        return detected.code || "USD";
    } catch (e) {
        return "USD";
    }
}
function setUserPreferredCurrency(code, userId = "guest") {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        localStorage.setItem(PREFERRED_CURRENCY_KEY, code);
        // Also update budget state if it exists in localStorage
        const budgetKey = `pingdart_budget_vault_v1_${userId}`;
        const rawBudget = localStorage.getItem(budgetKey);
        if (rawBudget) {
            try {
                const parsed = JSON.parse(rawBudget);
                parsed.currency = code;
                localStorage.setItem(budgetKey, JSON.stringify(parsed));
            } catch (_) {}
        }
        // Broadcast change to reactive listeners
        window.dispatchEvent(new CustomEvent("pingdart_currency_changed", {
            detail: {
                currency: code
            }
        }));
    } catch (err) {
        console.error("[currencyService] Failed to set currency:", err);
    }
}
function formatCurrencyAmount(amount, currencyCode = "INR") {
    const item = CURRENCY_MAP[currencyCode] || {
        symbol: "₹",
        locale: "en-IN"
    };
    try {
        return `${item.symbol}${amount.toLocaleString(item.locale || "en-IN")}`;
    } catch (e) {
        return `${item.symbol}${amount.toLocaleString()}`;
    }
}
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CURRENCY_MAP$SUPPORTED_CURRENCIES.reduce");
__turbopack_context__.k.register(_c1, "CURRENCY_MAP");
__turbopack_context__.k.register(_c2, "CURRENCY_SYMBOLS$SUPPORTED_CURRENCIES.reduce");
__turbopack_context__.k.register(_c3, "CURRENCY_SYMBOLS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/currencyUtils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DIAL_CODE_TO_CURRENCY",
    ()=>DIAL_CODE_TO_CURRENCY,
    "FALLBACK_FX_RATES",
    ()=>FALLBACK_FX_RATES,
    "WORLD_CURRENCIES",
    ()=>WORLD_CURRENCIES,
    "convertCurrency",
    ()=>convertCurrency,
    "convertCurrencySync",
    ()=>convertCurrencySync,
    "detectDefaultCurrency",
    ()=>detectDefaultCurrency,
    "fetchLiveExchangeRates",
    ()=>fetchLiveExchangeRates,
    "formatCurrencyAmount",
    ()=>formatCurrencyAmount,
    "getCurrencySymbol",
    ()=>getCurrencySymbol,
    "getExchangeRate",
    ()=>getExchangeRate,
    "getExchangeRateSync",
    ()=>getExchangeRateSync,
    "getExchangeRatesSync",
    ()=>getExchangeRatesSync
]);
const WORLD_CURRENCIES = [
    {
        code: "INR",
        symbol: "₹",
        name: "Indian Rupee",
        country: "India",
        flag: "🇮🇳",
        locale: "en-IN"
    },
    {
        code: "USD",
        symbol: "$",
        name: "US Dollar",
        country: "United States",
        flag: "🇺🇸",
        locale: "en-US"
    },
    {
        code: "EUR",
        symbol: "€",
        name: "Euro",
        country: "European Union",
        flag: "🇪🇺",
        locale: "de-DE"
    },
    {
        code: "GBP",
        symbol: "£",
        name: "British Pound",
        country: "United Kingdom",
        flag: "🇬🇧",
        locale: "en-GB"
    },
    {
        code: "AED",
        symbol: "AED ",
        name: "UAE Dirham",
        country: "United Arab Emirates",
        flag: "🇦🇪",
        locale: "ar-AE"
    },
    {
        code: "SAR",
        symbol: "SAR ",
        name: "Saudi Riyal",
        country: "Saudi Arabia",
        flag: "🇸🇦",
        locale: "ar-SA"
    },
    {
        code: "QAR",
        symbol: "QAR ",
        name: "Qatari Riyal",
        country: "Qatar",
        flag: "🇶🇦",
        locale: "ar-QA"
    },
    {
        code: "KWD",
        symbol: "KWD ",
        name: "Kuwaiti Dinar",
        country: "Kuwait",
        flag: "🇰🇼",
        locale: "ar-KW"
    },
    {
        code: "CAD",
        symbol: "CA$",
        name: "Canadian Dollar",
        country: "Canada",
        flag: "🇨🇦",
        locale: "en-CA"
    },
    {
        code: "AUD",
        symbol: "AU$",
        name: "Australian Dollar",
        country: "Australia",
        flag: "🇦🇺",
        locale: "en-AU"
    },
    {
        code: "SGD",
        symbol: "SG$",
        name: "Singapore Dollar",
        country: "Singapore",
        flag: "🇸🇬",
        locale: "en-SG"
    },
    {
        code: "JPY",
        symbol: "¥",
        name: "Japanese Yen",
        country: "Japan",
        flag: "🇯🇵",
        locale: "ja-JP"
    },
    {
        code: "CNY",
        symbol: "¥",
        name: "Chinese Yuan",
        country: "China",
        flag: "🇨🇳",
        locale: "zh-CN"
    },
    {
        code: "HKD",
        symbol: "HK$",
        name: "Hong Kong Dollar",
        country: "Hong Kong",
        flag: "🇭🇰",
        locale: "zh-HK"
    },
    {
        code: "MYR",
        symbol: "RM ",
        name: "Malaysian Ringgit",
        country: "Malaysia",
        flag: "🇲🇾",
        locale: "ms-MY"
    },
    {
        code: "THB",
        symbol: "฿",
        name: "Thai Baht",
        country: "Thailand",
        flag: "🇹🇭",
        locale: "th-TH"
    },
    {
        code: "IDR",
        symbol: "Rp ",
        name: "Indonesian Rupiah",
        country: "Indonesia",
        flag: "🇮🇩",
        locale: "id-ID"
    },
    {
        code: "PHP",
        symbol: "₱",
        name: "Philippine Peso",
        country: "Philippines",
        flag: "🇵🇭",
        locale: "en-PH"
    },
    {
        code: "VND",
        symbol: "₫",
        name: "Vietnamese Dong",
        country: "Vietnam",
        flag: "🇻🇳",
        locale: "vi-VN"
    },
    {
        code: "KRW",
        symbol: "₩",
        name: "South Korean Won",
        country: "South Korea",
        flag: "🇰🇷",
        locale: "ko-KR"
    },
    {
        code: "BRL",
        symbol: "R$",
        name: "Brazilian Real",
        country: "Brazil",
        flag: "🇧🇷",
        locale: "pt-BR"
    },
    {
        code: "MXN",
        symbol: "Mex$",
        name: "Mexican Peso",
        country: "Mexico",
        flag: "🇲🇽",
        locale: "es-MX"
    },
    {
        code: "ZAR",
        symbol: "R ",
        name: "South African Rand",
        country: "South Africa",
        flag: "🇿🇦",
        locale: "en-ZA"
    },
    {
        code: "NGN",
        symbol: "₦",
        name: "Nigerian Naira",
        country: "Nigeria",
        flag: "🇳🇬",
        locale: "en-NG"
    },
    {
        code: "KES",
        symbol: "KSh ",
        name: "Kenyan Shilling",
        country: "Kenya",
        flag: "🇰🇪",
        locale: "en-KE"
    },
    {
        code: "EGP",
        symbol: "E£ ",
        name: "Egyptian Pound",
        country: "Egypt",
        flag: "🇪🇬",
        locale: "ar-EG"
    },
    {
        code: "PKR",
        symbol: "PKR ",
        name: "Pakistani Rupee",
        country: "Pakistan",
        flag: "🇵🇰",
        locale: "ur-PK"
    },
    {
        code: "BDT",
        symbol: "৳",
        name: "Bangladeshi Taka",
        country: "Bangladesh",
        flag: "🇧🇩",
        locale: "bn-BD"
    },
    {
        code: "LKR",
        symbol: "Rs ",
        name: "Sri Lankan Rupee",
        country: "Sri Lanka",
        flag: "🇱🇰",
        locale: "si-LK"
    },
    {
        code: "NPR",
        symbol: "Rs ",
        name: "Nepalese Rupee",
        country: "Nepal",
        flag: "🇳🇵",
        locale: "ne-NP"
    },
    {
        code: "NZD",
        symbol: "NZ$",
        name: "New Zealand Dollar",
        country: "New Zealand",
        flag: "🇳🇿",
        locale: "en-NZ"
    },
    {
        code: "CHF",
        symbol: "CHF ",
        name: "Swiss Franc",
        country: "Switzerland",
        flag: "🇨🇭",
        locale: "de-CH"
    },
    {
        code: "SEK",
        symbol: "kr ",
        name: "Swedish Krona",
        country: "Sweden",
        flag: "🇸🇪",
        locale: "sv-SE"
    },
    {
        code: "NOK",
        symbol: "kr ",
        name: "Norwegian Krone",
        country: "Norway",
        flag: "🇳🇴",
        locale: "nb-NO"
    },
    {
        code: "DKK",
        symbol: "kr ",
        name: "Danish Krone",
        country: "Denmark",
        flag: "🇩🇰",
        locale: "da-DK"
    },
    {
        code: "PLN",
        symbol: "zł ",
        name: "Polish Zloty",
        country: "Poland",
        flag: "🇵🇱",
        locale: "pl-PL"
    },
    {
        code: "TRY",
        symbol: "₺",
        name: "Turkish Lira",
        country: "Turkey",
        flag: "🇹🇷",
        locale: "tr-TR"
    },
    {
        code: "RUB",
        symbol: "₽",
        name: "Russian Ruble",
        country: "Russia",
        flag: "🇷🇺",
        locale: "ru-RU"
    }
];
const DIAL_CODE_TO_CURRENCY = {
    "+91": "INR",
    "+1": "USD",
    "+44": "GBP",
    "+971": "AED",
    "+966": "SAR",
    "+974": "QAR",
    "+965": "KWD",
    "+61": "AUD",
    "+64": "NZD",
    "+65": "SGD",
    "+60": "MYR",
    "+66": "THB",
    "+62": "IDR",
    "+63": "PHP",
    "+84": "VND",
    "+81": "JPY",
    "+82": "KRW",
    "+86": "CNY",
    "+852": "HKD",
    "+92": "PKR",
    "+880": "BDT",
    "+94": "LKR",
    "+977": "NPR",
    "+49": "EUR",
    "+33": "EUR",
    "+39": "EUR",
    "+34": "EUR",
    "+31": "EUR",
    "+32": "EUR",
    "+353": "EUR",
    "+43": "EUR",
    "+351": "EUR",
    "+30": "EUR",
    "+358": "EUR",
    "+41": "CHF",
    "+46": "SEK",
    "+47": "NOK",
    "+45": "DKK",
    "+48": "PLN",
    "+90": "TRY",
    "+27": "ZAR",
    "+234": "NGN",
    "+254": "KES",
    "+20": "EGP",
    "+55": "BRL",
    "+52": "MXN",
    "+7": "RUB"
};
const FALLBACK_FX_RATES = {
    USD: 1,
    INR: 83.5,
    EUR: 0.92,
    GBP: 0.79,
    AED: 3.67,
    SAR: 3.75,
    QAR: 3.64,
    KWD: 0.31,
    CAD: 1.36,
    AUD: 1.52,
    SGD: 1.34,
    JPY: 155.0,
    CNY: 7.23,
    HKD: 7.82,
    MYR: 4.70,
    THB: 36.5,
    IDR: 16200,
    PHP: 58.0,
    VND: 25400,
    KRW: 1375,
    BRL: 5.40,
    MXN: 18.2,
    ZAR: 18.2,
    NGN: 1500,
    KES: 130,
    EGP: 48.0,
    PKR: 278,
    BDT: 117,
    LKR: 300,
    NPR: 133.5,
    NZD: 1.63,
    CHF: 0.90,
    SEK: 10.5,
    NOK: 10.6,
    DKK: 6.87,
    PLN: 3.96,
    TRY: 32.5,
    RUB: 91.0
};
const FX_CACHE_KEY = "pingdart_live_fx_rates_usd_v1";
const FX_CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour cache duration
// In-memory runtime cache for instantaneous access across the application
let inMemoryRates = {
    ...FALLBACK_FX_RATES
};
let inMemoryLastUpdated = 0;
let pendingFetchPromise = null;
function detectDefaultCurrency(phoneOrCountry) {
    if (!phoneOrCountry) return "USD";
    const clean = phoneOrCountry.trim();
    // Check prefix match
    for (const [dial, curr] of Object.entries(DIAL_CODE_TO_CURRENCY)){
        if (clean.startsWith(dial) || clean.startsWith(dial.replace("+", ""))) {
            return curr;
        }
    }
    // Country code match
    if (clean.toUpperCase() === "IN" || clean.toLowerCase() === "india") return "INR";
    if (clean.toUpperCase() === "GB" || clean.toUpperCase() === "UK") return "GBP";
    if (clean.toUpperCase() === "AE" || clean.toUpperCase() === "UAE") return "AED";
    if (clean.toUpperCase() === "CA") return "CAD";
    if (clean.toUpperCase() === "AU") return "AUD";
    if (clean.toUpperCase() === "SG") return "SGD";
    if (clean.toUpperCase() === "JP") return "JPY";
    if (clean.toUpperCase() === "US") return "USD";
    return "USD";
}
function getCurrencySymbol(code) {
    const match = WORLD_CURRENCIES.find((c)=>c.code.toUpperCase() === (code || "").toUpperCase());
    return (match === null || match === void 0 ? void 0 : match.symbol) || "$";
}
/**
 * Reads cached live exchange rates from localStorage if valid
 */ function readStorageRates() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(FX_CACHE_KEY);
        if (!raw) return null;
        const parsed = JSON.parse(raw);
        if (parsed && parsed.rates && typeof parsed.rates === "object") {
            return {
                rates: parsed.rates,
                timestamp: parsed.timestamp || 0
            };
        }
    } catch (e) {}
    return null;
}
/**
 * Initializes in-memory rates from storage on client load
 */ if ("TURBOPACK compile-time truthy", 1) {
    const cached = readStorageRates();
    if (cached && Object.keys(cached.rates).length > 0) {
        inMemoryRates = {
            ...FALLBACK_FX_RATES,
            ...cached.rates
        };
        inMemoryLastUpdated = cached.timestamp;
    }
}
async function fetchLiveExchangeRates(forceRefresh = false) {
    const now = Date.now();
    // Return cached rates if fresh and not forcing refresh
    if (!forceRefresh && inMemoryLastUpdated > 0 && now - inMemoryLastUpdated < FX_CACHE_TTL_MS) {
        return inMemoryRates;
    }
    // Deduplicate concurrent network calls
    if (pendingFetchPromise) {
        return pendingFetchPromise;
    }
    pendingFetchPromise = (async ()=>{
        try {
            // 1. Try primary endpoint: open.er-api.com
            const res = await fetch("https://open.er-api.com/v6/latest/USD", {
                headers: {
                    Accept: "application/json"
                },
                cache: "no-store"
            });
            if (res.ok) {
                const data = await res.json();
                if ((data === null || data === void 0 ? void 0 : data.rates) && typeof data.rates === "object") {
                    const merged = {
                        ...FALLBACK_FX_RATES,
                        ...data.rates
                    };
                    inMemoryRates = merged;
                    inMemoryLastUpdated = now;
                    if ("TURBOPACK compile-time truthy", 1) {
                        try {
                            localStorage.setItem(FX_CACHE_KEY, JSON.stringify({
                                rates: merged,
                                timestamp: now
                            }));
                            window.dispatchEvent(new CustomEvent("pingdart_rates_updated", {
                                detail: {
                                    rates: merged,
                                    timestamp: now
                                }
                            }));
                        } catch (e) {}
                    }
                    return merged;
                }
            }
        } catch (err) {
            console.warn("[currencyUtils] Primary live exchange API failed, trying backup:", err);
        }
        try {
            // 2. Try backup endpoint: api.exchangerate-api.com
            const backupRes = await fetch("https://api.exchangerate-api.com/v4/latest/USD", {
                headers: {
                    Accept: "application/json"
                },
                cache: "no-store"
            });
            if (backupRes.ok) {
                const backupData = await backupRes.json();
                if ((backupData === null || backupData === void 0 ? void 0 : backupData.rates) && typeof backupData.rates === "object") {
                    const merged = {
                        ...FALLBACK_FX_RATES,
                        ...backupData.rates
                    };
                    inMemoryRates = merged;
                    inMemoryLastUpdated = now;
                    if ("TURBOPACK compile-time truthy", 1) {
                        try {
                            localStorage.setItem(FX_CACHE_KEY, JSON.stringify({
                                rates: merged,
                                timestamp: now
                            }));
                            window.dispatchEvent(new CustomEvent("pingdart_rates_updated", {
                                detail: {
                                    rates: merged,
                                    timestamp: now
                                }
                            }));
                        } catch (e) {}
                    }
                    return merged;
                }
            }
        } catch (err) {
            console.warn("[currencyUtils] Backup live exchange API failed, using fallback:", err);
        }
        return inMemoryRates;
    })().finally(()=>{
        pendingFetchPromise = null;
    });
    return pendingFetchPromise;
}
function getExchangeRatesSync() {
    return inMemoryRates;
}
function getExchangeRateSync(fromCurrency = "INR", toCurrency = "USD") {
    const fromCode = fromCurrency.toUpperCase();
    const toCode = toCurrency.toUpperCase();
    if (fromCode === toCode) return 1;
    const rates = inMemoryRates;
    const fromRate = rates[fromCode] || FALLBACK_FX_RATES[fromCode] || 1;
    const toRate = rates[toCode] || FALLBACK_FX_RATES[toCode] || 1;
    return toRate / fromRate;
}
async function getExchangeRate(fromCurrency = "INR", toCurrency = "USD") {
    await fetchLiveExchangeRates();
    return getExchangeRateSync(fromCurrency, toCurrency);
}
function convertCurrencySync(amount, fromCurrency = "INR", toCurrency = "USD") {
    const num = Number(amount) || 0;
    if (num === 0) return 0;
    const rate = getExchangeRateSync(fromCurrency, toCurrency);
    return Number((num * rate).toFixed(2));
}
async function convertCurrency(amount, fromCurrency = "INR", toCurrency = "USD") {
    const num = Number(amount) || 0;
    if (num === 0) return 0;
    const rate = await getExchangeRate(fromCurrency, toCurrency);
    return Number((num * rate).toFixed(2));
}
function formatCurrencyAmount(amount, currencyCode = "INR", options) {
    const code = (currencyCode || "INR").toUpperCase();
    const match = WORLD_CURRENCIES.find((c)=>c.code === code) || {
        symbol: getCurrencySymbol(code),
        locale: "en-US"
    };
    const num = Number(amount) || 0;
    try {
        var _options_minimumFractionDigits, _options_maximumFractionDigits;
        const formatted = num.toLocaleString(match.locale || "en-US", {
            minimumFractionDigits: (_options_minimumFractionDigits = options === null || options === void 0 ? void 0 : options.minimumFractionDigits) !== null && _options_minimumFractionDigits !== void 0 ? _options_minimumFractionDigits : 2,
            maximumFractionDigits: (_options_maximumFractionDigits = options === null || options === void 0 ? void 0 : options.maximumFractionDigits) !== null && _options_maximumFractionDigits !== void 0 ? _options_maximumFractionDigits : 2,
            ...options
        });
        return `${match.symbol}${formatted}`;
    } catch (e) {
        return `${match.symbol}${num.toFixed(2)}`;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/generateInvoicePdf.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadInvoicePdf",
    ()=>downloadInvoicePdf,
    "getHsnSacCode",
    ()=>getHsnSacCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf/dist/jspdf.es.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$ViewInvoiceModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/crm/components/modals/ViewInvoiceModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
/**
 * Loads an image from a URL or data URI into a base64 string for embedding into jsPDF
 */ async function getBase64Image(rawUrl) {
    if (!rawUrl) return null;
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveMediaUrl"])(rawUrl) || rawUrl;
    if (url.startsWith("data:image/")) return url;
    try {
        const res = await fetch(url, {
            mode: "cors"
        });
        if (!res.ok) return null;
        const blob = await res.blob();
        return new Promise((resolve)=>{
            const reader = new FileReader();
            reader.onloadend = ()=>resolve(reader.result);
            reader.onerror = ()=>resolve(null);
            reader.readAsDataURL(blob);
        });
    } catch (e) {
        return null;
    }
}
function getHsnSacCode(item) {
    const direct = item.hsnSacCode || item.hsnCode || item.sacCode || item.sac || item.hsn || item.hsn_sac_code || item.hsn_code || item.sac_code;
    if (direct && typeof direct === "string" && direct.trim() && direct.trim() !== "—" && direct.trim() !== "--") {
        return direct.trim();
    }
    if (item.productId && "object" !== "undefined") {
        try {
            const savedProds = localStorage.getItem("crm_products_services");
            if (savedProds) {
                const prods = JSON.parse(savedProds);
                const match = prods.find((p)=>String(p.id) === String(item.productId));
                if ((match === null || match === void 0 ? void 0 : match.hsnSacCode) && match.hsnSacCode.trim()) {
                    return match.hsnSacCode.trim();
                }
            }
        } catch (_) {}
    }
    const combinedText = `${item.name || ""} ${item.description || ""}`;
    const match = combinedText.match(/(?:SAC|HSN)[\s/:]*(\d{4,8})/i);
    if (match && match[1]) {
        return match[1];
    }
    const lower = combinedText.toLowerCase();
    if (lower.includes("marketing") || lower.includes("social media") || lower.includes("advertising") || lower.includes("seo") || lower.includes("lead gen") || lower.includes("campaign")) {
        return "998314";
    }
    if (lower.includes("software") || lower.includes("development") || lower.includes("consulting") || lower.includes("tech") || lower.includes("cloud") || lower.includes("web") || lower.includes("app") || lower.includes("saas") || lower.includes("coding")) {
        return "998313";
    }
    if (lower.includes("hosting") || lower.includes("server") || lower.includes("domain") || lower.includes("maintenance") || lower.includes("infrastructure")) {
        return "998315";
    }
    if (lower.includes("design") || lower.includes("graphics") || lower.includes("creative") || lower.includes("ui")) {
        return "998391";
    }
    return "998314";
}
async function downloadInvoicePdf({ invoice, companyProfile: passedCompany, billingConfig: passedBilling }) {
    const company = passedCompany || {};
    const billing = passedBilling || {};
    const custom = invoice.customFields || {};
    const isIntraState = custom.isIntraState !== undefined ? custom.isIntraState : (custom.placeOfSupply || "36").toString().startsWith("36");
    var _invoice_total, _ref;
    const rawTotal = (_ref = (_invoice_total = invoice.total) !== null && _invoice_total !== void 0 ? _invoice_total : invoice.amount) !== null && _ref !== void 0 ? _ref : 0;
    var _invoice_subtotal;
    const subtotal = (_invoice_subtotal = invoice.subtotal) !== null && _invoice_subtotal !== void 0 ? _invoice_subtotal : rawTotal ? rawTotal / 1.18 : 0;
    const cgst = custom.cgstAmount !== undefined ? custom.cgstAmount : isIntraState ? subtotal * 0.09 : 0;
    const sgst = custom.sgstAmount !== undefined ? custom.sgstAmount : isIntraState ? subtotal * 0.09 : 0;
    const igst = custom.igstAmount !== undefined ? custom.igstAmount : !isIntraState ? subtotal * 0.18 : 0;
    const totalTax = isIntraState ? cgst + sgst : igst;
    const grandTotal = invoice.total || invoice.amount || subtotal + totalTax;
    const items = invoice.items && invoice.items.length > 0 ? invoice.items : [
        {
            id: "item-default",
            name: invoice.projectName || "Invoice Service",
            description: "",
            quantity: 1,
            unitPrice: subtotal,
            amount: subtotal,
            taxRate: 18
        }
    ];
    // UPI QR Code url (only if UPI ID configured)
    const upiId = billing.bankUpiId || "";
    const payeeName = encodeURIComponent(company.companyDisplayName || company.legalEntityName || "");
    const upiPayload = upiId ? `upi://pay?pa=${upiId}&pn=${payeeName}&am=${grandTotal.toFixed(2)}&cu=INR&tn=${encodeURIComponent(invoice.invoiceNumber)}` : "";
    const qrCodeUrl = upiPayload ? `https://api.qrserver.com/v1/create-qr-code/?size=140x140&margin=2&data=${encodeURIComponent(upiPayload)}` : "";
    // Pre-load images (logo, signature, QR)
    const [logoBase64, sigBase64, qrBase64] = await Promise.all([
        company.logoUrl ? getBase64Image(company.logoUrl) : Promise.resolve(null),
        company.authorizedSignatorySignature ? getBase64Image(company.authorizedSignatorySignature) : Promise.resolve(null),
        qrCodeUrl ? getBase64Image(qrCodeUrl) : Promise.resolve(null)
    ]);
    const doc = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2f$dist$2f$jspdf$2e$es$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsPDF"]({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
    });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 12;
    const contentWidth = pageWidth - margin * 2;
    // ── 1. HEADER (Supplier Info & Tax Invoice Stamp) ───────────────────
    let curY = 12;
    // Top Indigo Accent Line
    doc.setFillColor(79, 70, 229); // indigo-600
    doc.rect(margin, curY, contentWidth, 2, "F");
    curY += 6;
    // Left side: Company Logo & Details
    if (logoBase64) {
        try {
            doc.addImage(logoBase64, "PNG", margin, curY, 32, 12, undefined, "FAST");
            curY += 14;
        } catch (e) {
        // Fallback
        }
    }
    const compTitle = company.legalEntityName || company.companyDisplayName || "";
    if (compTitle) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(13);
        doc.setTextColor(15, 23, 42); // slate-900
        doc.text(compTitle.toUpperCase(), margin, curY + 4);
        curY += 6;
    }
    const addrParts = [
        company.registeredAddress,
        company.city,
        company.state,
        company.pincode,
        company.country
    ].filter(Boolean);
    if (addrParts.length > 0) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(7.5);
        doc.setTextColor(71, 85, 105); // slate-600
        const compAddr = addrParts.join(", ");
        doc.text(doc.splitTextToSize(compAddr, 105), margin, curY + 3);
        curY += 6;
    }
    if (company.gstVatNumber) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        doc.setTextColor(67, 56, 202); // indigo-700
        doc.text(`GSTIN: ${company.gstVatNumber}`, margin, curY + 3);
        curY += 5;
    }
    if (company.panTaxId) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(7.5);
        doc.setTextColor(71, 85, 105);
        const panStr = `PAN: ${company.panTaxId}${company.stateCode ? `  |  State: ${company.stateCode} ${company.state ? `(${company.state})` : ""}` : ""}`;
        doc.text(panStr, margin, curY + 3);
        curY += 5;
    }
    if (company.supportEmail || company.supportPhone) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(7.5);
        doc.setTextColor(71, 85, 105);
        doc.text(`${company.supportEmail || ""} ${company.supportPhone ? " • " + company.supportPhone : ""}`.trim(), margin, curY + 3);
        curY += 5;
    }
    // Right side: Tax Invoice Pill & Document Metadata
    const rightX = pageWidth - margin;
    // TAX INVOICE pill
    doc.setFillColor(238, 242, 255); // indigo-50
    doc.setDrawColor(199, 210, 254); // indigo-200
    doc.roundedRect(rightX - 45, 18, 45, 8, 2, 2, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(67, 56, 202);
    doc.text("TAX INVOICE", rightX - 22.5, 23.5, {
        align: "center"
    });
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6.5);
    doc.setTextColor(100, 116, 139);
    doc.text("ORIGINAL FOR RECIPIENT (RULE 46)", rightX, 29, {
        align: "right"
    });
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(30, 41, 59);
    doc.text(`Invoice No:  ${invoice.invoiceNumber}`, rightX, 35, {
        align: "right"
    });
    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);
    doc.text(`Invoice Date:  ${invoice.issueDate || "—"}`, rightX, 39.5, {
        align: "right"
    });
    doc.text(`Payment Due:  ${invoice.dueDate || "—"}`, rightX, 44, {
        align: "right"
    });
    if (custom.placeOfSupply) {
        doc.text(`Place of Supply:  ${custom.placeOfSupply}`, rightX, 48.5, {
            align: "right"
        });
    }
    doc.text("Reverse Charge:  No", rightX, custom.placeOfSupply ? 53 : 48.5, {
        align: "right"
    });
    curY = Math.max(curY + 4, 58);
    // Divider Line
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.4);
    doc.line(margin, curY, pageWidth - margin, curY);
    curY += 4;
    // ── 2. BILLED TO & ENGAGEMENT DETAILS (2-Column Cards) ─────────────
    const cardW = (contentWidth - 6) / 2;
    const cardH = 34;
    // Left Box: Billed To
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(margin, curY, cardW, cardH, 2, 2, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(67, 56, 202);
    doc.text("BILLED TO (CUSTOMER DETAILS)", margin + 4, curY + 6);
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(invoice.clientName || "Customer", margin + 4, curY + 11.5);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(71, 85, 105);
    let bLine = curY + 16.5;
    if (custom.customerGstin) {
        doc.setFont("helvetica", "bold");
        doc.setTextColor(30, 41, 59);
        doc.text(`GSTIN: ${custom.customerGstin}`, margin + 4, bLine);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(71, 85, 105);
        bLine += 4.5;
    }
    if (custom.billingAddress) {
        const clientAddrLines = doc.splitTextToSize(custom.billingAddress, cardW - 8);
        doc.text(clientAddrLines.slice(0, 2), margin + 4, bLine);
        bLine += 5;
    }
    if (custom.contactEmail || custom.contactPhone) {
        doc.text(`${custom.contactEmail || ""} ${custom.contactPhone ? " • " + custom.contactPhone : ""}`.trim(), margin + 4, curY + 30);
    }
    // Right Box: Engagement & Delivery Details
    const rightBoxX = margin + cardW + 6;
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(rightBoxX, curY, cardW, cardH, 2, 2, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7);
    doc.setTextColor(100, 116, 139);
    doc.text("ENGAGEMENT & DELIVERY DETAILS", rightBoxX + 4, curY + 6);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(71, 85, 105);
    let rLine = curY + 11.5;
    if (invoice.projectName) {
        doc.text("Related Project:", rightBoxX + 4, rLine);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(15, 23, 42);
        const projNameLines = doc.splitTextToSize(invoice.projectName, cardW - 32);
        doc.text(projNameLines.slice(0, 1), rightBoxX + 28, rLine);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(71, 85, 105);
        rLine += 5.5;
    }
    if (custom.purchaseOrderNumber) {
        doc.text("PO / Ref No:", rightBoxX + 4, rLine);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(30, 41, 59);
        doc.text(custom.purchaseOrderNumber, rightBoxX + 28, rLine);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(71, 85, 105);
        rLine += 5.5;
    }
    doc.text("Tax Regime:", rightBoxX + 4, rLine);
    doc.text(isIntraState ? "Intra-State (CGST 9% + SGST 9%)" : "Inter-State (IGST 18%)", rightBoxX + 28, rLine);
    rLine += 5.5;
    doc.text("Payment Status:", rightBoxX + 4, curY + 28);
    doc.setFont("helvetica", "bold");
    if (invoice.status === "Paid") {
        doc.setTextColor(16, 185, 129); // emerald-500
        doc.text("PAID IN FULL", rightBoxX + 28, curY + 28);
    } else if (invoice.status === "Overdue") {
        doc.setTextColor(220, 38, 38); // rose-600
        doc.text("OVERDUE", rightBoxX + 28, curY + 28);
    } else {
        doc.setTextColor(217, 119, 6); // amber-600
        doc.text("SENT / AWAITING PAYMENT", rightBoxX + 28, curY + 28);
    }
    curY += cardH + 6;
    // ── 3. ITEMIZED TAX INVOICE TABLE (autoTable) ──────────────────────
    const tableRows = items.map((item, index)=>{
        const sac = getHsnSacCode(item);
        const qty = (item.quantity || 1).toString();
        const rate = `₹${Number(item.unitPrice || 0).toLocaleString("en-IN", {
            minimumFractionDigits: 2
        })}`;
        const amount = `₹${Number(item.amount || item.unitPrice || 0).toLocaleString("en-IN", {
            minimumFractionDigits: 2
        })}`;
        const desc = item.description || "";
        return [
            (index + 1).toString(),
            item.name + (desc ? "\n" + desc : ""),
            sac,
            qty,
            rate,
            amount
        ];
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jspdf$2d$autotable$2f$dist$2f$jspdf$2e$plugin$2e$autotable$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(doc, {
        startY: curY,
        margin: {
            left: margin,
            right: margin
        },
        head: [
            [
                "#",
                "Description of Goods / Services",
                "HSN/SAC",
                "Qty",
                "Unit Rate (₹)",
                "Taxable Value (₹)"
            ]
        ],
        body: tableRows,
        theme: "striped",
        headStyles: {
            fillColor: [
                241,
                245,
                249
            ],
            textColor: [
                30,
                41,
                59
            ],
            fontSize: 8,
            fontStyle: "bold",
            halign: "left",
            cellPadding: 3
        },
        columnStyles: {
            0: {
                cellWidth: 8,
                halign: "center",
                fontStyle: "bold",
                textColor: [
                    100,
                    116,
                    139
                ]
            },
            1: {
                cellWidth: "auto",
                halign: "left"
            },
            2: {
                cellWidth: 20,
                halign: "center",
                textColor: [
                    71,
                    85,
                    105
                ]
            },
            3: {
                cellWidth: 14,
                halign: "center",
                fontStyle: "bold"
            },
            4: {
                cellWidth: 28,
                halign: "right"
            },
            5: {
                cellWidth: 32,
                halign: "right",
                fontStyle: "bold",
                textColor: [
                    15,
                    23,
                    42
                ]
            }
        },
        styles: {
            fontSize: 7.5,
            cellPadding: 3.5,
            overflow: "linebreak"
        },
        didParseCell: (data)=>{
            if (data.section === "head") {
                if (data.column.index === 0 || data.column.index === 2 || data.column.index === 3) {
                    data.cell.styles.halign = "center";
                } else if (data.column.index === 4 || data.column.index === 5) {
                    data.cell.styles.halign = "right";
                }
            }
        }
    });
    const finalTableY = doc.lastAutoTable.finalY + 6;
    curY = finalTableY;
    if (curY > pageHeight - 90) {
        doc.addPage();
        curY = 14;
    }
    // ── 4. REMITTANCE & TAX BREAKDOWN (2 Columns) ─────────────────────
    const splitW = (contentWidth - 6) / 2;
    // Left Column: Words + Bank Remittance + UPI QR
    let leftY = curY;
    // Amount in words box
    doc.setFillColor(238, 242, 255);
    doc.setDrawColor(199, 210, 254);
    doc.roundedRect(margin, leftY, splitW, 13, 2, 2, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6.5);
    doc.setTextColor(67, 56, 202);
    doc.text("INVOICE AMOUNT IN WORDS", margin + 3.5, leftY + 4.5);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(30, 41, 59);
    const wordsLines = doc.splitTextToSize((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$crm$2f$components$2f$modals$2f$ViewInvoiceModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToWordsINR"])(grandTotal), splitW - 7);
    doc.text(wordsLines.slice(0, 2), margin + 3.5, leftY + 9);
    leftY += 16;
    // Bank Remittance Box (only if user provided bank info)
    const hasBankInfo = !!(billing.bankName || billing.bankAccountNumber || billing.bankIfscCode || billing.bankUpiId);
    if (hasBankInfo) {
        doc.setFillColor(248, 250, 252);
        doc.setDrawColor(226, 232, 240);
        doc.roundedRect(margin, leftY, splitW, 36, 2, 2, "FD");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(6.5);
        doc.setTextColor(100, 116, 139);
        doc.text("OFFICIAL BANK REMITTANCE (NEFT / RTGS / IMPS)", margin + 3.5, leftY + 5);
        const bankRows = [
            billing.bankName ? [
                "Bank Name:",
                billing.bankName
            ] : null,
            billing.bankAccountName ? [
                "A/C Name:",
                billing.bankAccountName
            ] : null,
            billing.bankAccountNumber ? [
                "A/C Number:",
                billing.bankAccountNumber
            ] : null,
            billing.bankIfscCode ? [
                "IFSC Code:",
                billing.bankIfscCode
            ] : null,
            billing.bankBranch ? [
                "Branch:",
                billing.bankBranch
            ] : null,
            billing.bankUpiId ? [
                "UPI VPA:",
                billing.bankUpiId
            ] : null
        ].filter(Boolean);
        bankRows.forEach(([lbl, val], idx)=>{
            const rowY = leftY + 9.5 + idx * 4.3;
            doc.setFont("helvetica", "normal");
            doc.setFontSize(7.5);
            doc.setTextColor(100, 116, 139);
            doc.text(lbl, margin + 3.5, rowY);
            doc.setFont("helvetica", "bold");
            if (lbl.includes("Number") || lbl.includes("IFSC")) {
                doc.setTextColor(15, 23, 42);
            } else if (lbl.includes("UPI")) {
                doc.setTextColor(16, 185, 129);
            } else {
                doc.setTextColor(51, 65, 85);
            }
            doc.text(val, margin + 25, rowY);
        });
        if (qrBase64) {
            try {
                doc.setFillColor(255, 255, 255);
                doc.setDrawColor(199, 210, 254);
                doc.roundedRect(margin + splitW - 24, leftY + 9, 21, 21, 1, 1, "FD");
                doc.addImage(qrBase64, "PNG", margin + splitW - 23, leftY + 10, 19, 19, undefined, "FAST");
            } catch (e) {
            // Fallback
            }
        }
        leftY += 38;
    }
    // Right Column: Tax Breakdown Box
    let rightY = curY;
    const rightColX = margin + splitW + 6;
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(rightColX, rightY, splitW, 49, 2, 2, "FD");
    const addCalcLine = (label, amount, yPos, isBold = false, color = [
        71,
        85,
        105
    ])=>{
        doc.setFont("helvetica", isBold ? "bold" : "normal");
        doc.setFontSize(8);
        doc.setTextColor(color[0], color[1], color[2]);
        doc.text(label, rightColX + 5, yPos);
        doc.text(amount, rightColX + splitW - 5, yPos, {
            align: "right"
        });
    };
    addCalcLine("Taxable Service Amount:", `₹${subtotal.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`, rightY + 7, true, [
        15,
        23,
        42
    ]);
    if (isIntraState) {
        addCalcLine("Central GST (CGST 9%):", `+₹${cgst.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`, rightY + 13, false, [
            16,
            185,
            129
        ]);
        addCalcLine("State GST (SGST 9%):", `+₹${sgst.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`, rightY + 18.5, false, [
            16,
            185,
            129
        ]);
    } else {
        addCalcLine("Integrated GST (IGST 18%):", `+₹${igst.toLocaleString("en-IN", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}`, rightY + 15, false, [
            147,
            51,
            234
        ]);
    }
    addCalcLine("Total Tax Liability:", `₹${totalTax.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`, rightY + 24.5, true, [
        71,
        85,
        105
    ]);
    // Divider
    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.4);
    doc.line(rightColX + 4, rightY + 27.5, rightColX + splitW - 4, rightY + 27.5);
    // Grand Total
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text("Invoice Total:", rightColX + 5, rightY + 34);
    doc.setFontSize(12);
    doc.setTextColor(67, 56, 202); // indigo-700
    doc.text(`₹${grandTotal.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`, rightColX + splitW - 5, rightY + 34, {
        align: "right"
    });
    // Status banner inside breakdown
    if (invoice.status === "Paid") {
        doc.setFillColor(236, 253, 245);
        doc.setDrawColor(167, 243, 208);
        doc.roundedRect(rightColX + 4, rightY + 39, splitW - 8, 7, 1.5, 1.5, "FD");
        doc.setFontSize(7.5);
        doc.setTextColor(6, 95, 70);
        doc.text("✓  INVOICE PAID IN FULL", rightColX + splitW / 2, rightY + 43.8, {
            align: "center"
        });
    } else {
        doc.setFillColor(254, 243, 199);
        doc.setDrawColor(253, 230, 138);
        doc.roundedRect(rightColX + 4, rightY + 39, splitW - 8, 7, 1.5, 1.5, "FD");
        doc.setFontSize(7.5);
        doc.setTextColor(146, 64, 14);
        doc.text(`⏳  BALANCE PAYABLE: ₹${grandTotal.toLocaleString("en-IN", {
            minimumFractionDigits: 2
        })}`, rightColX + splitW / 2, rightY + 43.8, {
            align: "center"
        });
    }
    rightY += 52;
    curY = Math.max(leftY, rightY);
    // ── 5. STATUTORY TERMS & SIGNATORY ─────────────────────────────────
    // Divider
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.4);
    doc.line(margin, curY, pageWidth - margin, curY);
    curY += 5;
    // Terms & Conditions (Left)
    if (billing.invoiceTerms) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(6.5);
        doc.setTextColor(100, 116, 139);
        doc.text("TERMS & STATUTORY CONDITIONS", margin, curY + 2);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(6.5);
        doc.setTextColor(100, 116, 139);
        const termsLines = doc.splitTextToSize(billing.invoiceTerms, splitW);
        doc.text(termsLines.slice(0, 3), margin, curY + 6);
    }
    doc.setFont("helvetica", "normal");
    doc.setFontSize(6);
    doc.setTextColor(148, 163, 184);
    doc.text("This is a digitally generated tax invoice issued under Rule 46 of CGST Rules, 2017.", margin, curY + (billing.invoiceTerms ? 18 : 6));
    // Authorized Signatory (Right)
    const sigX = rightX;
    if (compTitle) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(7);
        doc.setTextColor(71, 85, 105);
        doc.text(`For ${compTitle.toUpperCase()}`, sigX, curY + 2, {
            align: "right"
        });
    }
    if (sigBase64) {
        try {
            doc.addImage(sigBase64, "PNG", sigX - 35, curY + 4, 35, 10, undefined, "FAST");
        } catch (e) {
        // Fallback
        }
    } else {
        doc.setFont("helvetica", "italic");
        doc.setFontSize(7.5);
        doc.setTextColor(148, 163, 184);
        doc.text("Digitally Verified Signatory", sigX, curY + 10, {
            align: "right"
        });
    }
    if (company.authorizedSignatoryName) {
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        doc.setTextColor(15, 23, 42);
        doc.text(company.authorizedSignatoryName, sigX, curY + 17, {
            align: "right"
        });
    }
    if (company.authorizedSignatoryDesignation) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(6.5);
        doc.setTextColor(100, 116, 139);
        doc.text(company.authorizedSignatoryDesignation, sigX, curY + 20.5, {
            align: "right"
        });
    }
    // ── 6. DIRECT FILE DOWNLOAD ────────────────────────────────────────
    const cleanInvNum = (invoice.invoiceNumber || "Invoice").replace(/[/\\?%*:|"<>]/g, "-");
    const cleanClient = (invoice.clientName || "Customer").replace(/[^a-zA-Z0-9]/g, "_");
    const fileName = `Tax_Invoice_${cleanInvNum}_${cleanClient}.pdf`;
    doc.save(fileName);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useUserCurrency.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FX_RATES_FROM_USD",
    ()=>FX_RATES_FROM_USD,
    "convertCurrency",
    ()=>convertCurrency,
    "default",
    ()=>__TURBOPACK__default__export__,
    "resolveUserCurrencyCode",
    ()=>resolveUserCurrencyCode,
    "useUserCurrency",
    ()=>useUserCurrency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/services/currencyService.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/currencyUtils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const PREFERRED_CURRENCY_KEY = "pingdart_preferred_currency";
const CRM_CURRENCY_STORAGE_KEY = "pingdart_crm_currency_mode";
const FX_RATES_FROM_USD = new Proxy({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FALLBACK_FX_RATES"]
}, {
    get (_target, prop) {
        const rates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExchangeRatesSync"])();
        var _rates_prop, _ref;
        return (_ref = (_rates_prop = rates[prop]) !== null && _rates_prop !== void 0 ? _rates_prop : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FALLBACK_FX_RATES"][prop]) !== null && _ref !== void 0 ? _ref : 1;
    },
    has (_target, prop) {
        const rates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExchangeRatesSync"])();
        return prop in rates || prop in __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FALLBACK_FX_RATES"];
    },
    ownKeys () {
        return Object.keys((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExchangeRatesSync"])());
    },
    getOwnPropertyDescriptor (_target, prop) {
        return {
            enumerable: true,
            configurable: true,
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExchangeRatesSync"])()[prop]
        };
    }
});
function convertCurrency(amount, fromCurrency = "INR", toCurrency = "USD") {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertCurrencySync"])(amount, fromCurrency, toCurrency);
}
function resolveUserCurrencyCode(user) {
    if ("TURBOPACK compile-time truthy", 1) {
        try {
            const saved = localStorage.getItem(PREFERRED_CURRENCY_KEY);
            if (saved && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][saved]) return saved;
            const crmSaved = localStorage.getItem(CRM_CURRENCY_STORAGE_KEY);
            if (crmSaved && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][crmSaved]) return crmSaved;
        } catch (e) {}
    }
    // Check authenticated user object
    const userCurr = (user === null || user === void 0 ? void 0 : user.currency_code) || (user === null || user === void 0 ? void 0 : user.currencyCode) || (user === null || user === void 0 ? void 0 : user.currency);
    if (userCurr && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][userCurr]) {
        return userCurr;
    }
    // Fallback to intelligent country detection (India -> INR, all other countries -> USD)
    const detected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["detectCountryCurrency"])(user);
    return detected.code || "USD";
}
function useUserCurrency() {
    _s();
    const { user, updateUser, accessToken } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const [currencyCode, setCurrencyCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useUserCurrency.useState": ()=>resolveUserCurrencyCode(user)
    }["useUserCurrency.useState"]);
    // Sync state whenever storage or custom events fire
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUserCurrency.useEffect": ()=>{
            const handleCurrencyUpdate = {
                "useUserCurrency.useEffect.handleCurrencyUpdate": ()=>{
                    const resolved = resolveUserCurrencyCode(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user);
                    setCurrencyCode(resolved);
                }
            }["useUserCurrency.useEffect.handleCurrencyUpdate"];
            // Initial check on mount & fetch latest live exchange rates
            handleCurrencyUpdate();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$currencyUtils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchLiveExchangeRates"])().then({
                "useUserCurrency.useEffect": ()=>{
                    handleCurrencyUpdate();
                }
            }["useUserCurrency.useEffect"]);
            const handleRatesUpdate = {
                "useUserCurrency.useEffect.handleRatesUpdate": ()=>{
                    setCurrencyCode({
                        "useUserCurrency.useEffect.handleRatesUpdate": (prev)=>prev
                    }["useUserCurrency.useEffect.handleRatesUpdate"]);
                }
            }["useUserCurrency.useEffect.handleRatesUpdate"];
            window.addEventListener("pingdart_rates_updated", handleRatesUpdate);
            window.addEventListener("pingdart_currency_changed", handleCurrencyUpdate);
            window.addEventListener("crm:currency_change", handleCurrencyUpdate);
            window.addEventListener("storage", handleCurrencyUpdate);
            // Also subscribe to authStore user changes
            const unsubAuth = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].subscribe({
                "useUserCurrency.useEffect.unsubAuth": (state)=>{
                    var _state_user, _state_user1, _state_user2;
                    const uCurr = ((_state_user = state.user) === null || _state_user === void 0 ? void 0 : _state_user.currency_code) || ((_state_user1 = state.user) === null || _state_user1 === void 0 ? void 0 : _state_user1.currencyCode) || ((_state_user2 = state.user) === null || _state_user2 === void 0 ? void 0 : _state_user2.currency);
                    if (uCurr && uCurr !== currencyCode && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][uCurr]) {
                        setCurrencyCode(uCurr);
                    }
                }
            }["useUserCurrency.useEffect.unsubAuth"]);
            return ({
                "useUserCurrency.useEffect": ()=>{
                    window.removeEventListener("pingdart_rates_updated", handleRatesUpdate);
                    window.removeEventListener("pingdart_currency_changed", handleCurrencyUpdate);
                    window.removeEventListener("crm:currency_change", handleCurrencyUpdate);
                    window.removeEventListener("storage", handleCurrencyUpdate);
                    unsubAuth();
                }
            })["useUserCurrency.useEffect"];
        }
    }["useUserCurrency.useEffect"], [
        currencyCode
    ]);
    const activeCurrencyItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][currencyCode] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"]["INR"] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SUPPORTED_CURRENCIES"][0];
    const currencySymbol = activeCurrencyItem.symbol;
    const isCreatedByMeddylistAdmin = Boolean((user === null || user === void 0 ? void 0 : user.createdByAdmin) === "admin@meddylist.com" || (user === null || user === void 0 ? void 0 : user.created_by_admin) === "admin@meddylist.com" || (user === null || user === void 0 ? void 0 : user.email) && user.email.toLowerCase().endsWith("@meddylist.com") && user.email.toLowerCase() !== "admin@meddylist.com");
    const isCurrencyLocked = Boolean((user === null || user === void 0 ? void 0 : user.isCurrencyLocked) || (user === null || user === void 0 ? void 0 : user.is_currency_locked) || isCreatedByMeddylistAdmin || "object" !== "undefined" && localStorage.getItem("pingdart_currency_locked") === "true");
    const lockedReason = isCreatedByMeddylistAdmin ? "Fixed by Organization Admin (admin@meddylist.com)" : (user === null || user === void 0 ? void 0 : user.currencyLockedReason) || (user === null || user === void 0 ? void 0 : user.currency_locked_reason) || (isCurrencyLocked ? "Configured during registration (one-time choice)" : null);
    /**
   * Sets currency globally (one-time lock):
   * 1. Checks if currency is already locked
   * 2. Updates localStorage and locks further modifications
   * 3. Updates local Zustand authStore
   * 4. Syncs with backend user profile if logged in
   * 5. Broadcasts custom event to re-render all subscribers immediately
   */ const setCurrency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserCurrency.useCallback[setCurrency]": async (newCode, force = false)=>{
            if (!newCode || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][newCode]) return false;
            // Prevent modification if already locked or fixed by admin@meddylist.com
            if (isCurrencyLocked && !force) {
                return false;
            }
            const item = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][newCode];
            setCurrencyCode(newCode);
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    localStorage.setItem(PREFERRED_CURRENCY_KEY, newCode);
                    localStorage.setItem(CRM_CURRENCY_STORAGE_KEY, newCode);
                    localStorage.setItem("pingdart_currency_locked", "true");
                } catch (e) {}
            }
            // Update auth store user if available
            const currentU = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
            if (currentU) {
                updateUser({
                    currency_code: newCode,
                    currencyCode: newCode,
                    currency_symbol: item.symbol,
                    currencySymbol: item.symbol,
                    currency: newCode,
                    isCurrencyLocked: true,
                    is_currency_locked: true,
                    currencyLockedReason: "One-time registration preference set"
                });
            }
            // Update legacy budget storage key
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setUserPreferredCurrency"])(newCode, (currentU === null || currentU === void 0 ? void 0 : currentU.id) || "guest");
            // Broadcast to all reactive listeners
            if ("TURBOPACK compile-time truthy", 1) {
                window.dispatchEvent(new CustomEvent("pingdart_currency_changed", {
                    detail: {
                        currency: newCode,
                        symbol: item.symbol
                    }
                }));
                window.dispatchEvent(new CustomEvent("crm:currency_change", {
                    detail: {
                        currency: newCode,
                        currencySymbol: item.symbol
                    }
                }));
            }
            // Persist to backend user profile if authenticated
            const token = accessToken || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().accessToken;
            if (token) {
                try {
                    await fetch(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiBaseUrl"])()}/api/users/profile`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            currency_code: newCode,
                            currencyCode: newCode,
                            currency_symbol: item.symbol,
                            currencySymbol: item.symbol,
                            isCurrencyLocked: true
                        })
                    });
                } catch (err) {
                    console.warn("[useUserCurrency] Background currency sync error:", err);
                }
            }
            return true;
        }
    }["useUserCurrency.useCallback[setCurrency]"], [
        updateUser,
        accessToken,
        isCurrencyLocked
    ]);
    /**
   * Formats a monetary value with currency symbol and appropriate locale.
   * If overrideCurrency is provided (e.g. from a specific CRM deal/quote), uses that instead.
   */ const formatAmount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserCurrency.useCallback[formatAmount]": (val, overrideCurrency)=>{
            const num = Number(val) || 0;
            const targetCode = overrideCurrency && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][overrideCurrency] ? overrideCurrency : currencyCode;
            const targetItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][targetCode] || activeCurrencyItem;
            try {
                return `${targetItem.symbol}${num.toLocaleString(targetItem.locale || "en-US", {
                    minimumFractionDigits: num % 1 !== 0 ? 2 : 0,
                    maximumFractionDigits: 2
                })}`;
            } catch (e) {
                return `${targetItem.symbol}${num.toLocaleString()}`;
            }
        }
    }["useUserCurrency.useCallback[formatAmount]"], [
        currencyCode,
        activeCurrencyItem
    ]);
    /**
   * Formats a large monetary value into compact notation (e.g. ₹50L, ₹2.5Cr, $1.2M, €800K).
   */ const formatCompact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserCurrency.useCallback[formatCompact]": (val, overrideCurrency)=>{
            const num = Number(val) || 0;
            const targetCode = overrideCurrency && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][overrideCurrency] ? overrideCurrency : currencyCode;
            const targetItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][targetCode] || activeCurrencyItem;
            if (targetCode === "INR") {
                if (num >= 10000000) return `₹${(num / 10000000).toFixed(1)}Cr`;
                if (num >= 100000) return `₹${(num / 100000).toFixed(1)}L`;
                if (num >= 1000) return `₹${(num / 1000).toFixed(0)}K`;
                return `₹${num}`;
            } else {
                if (num >= 1000000000) return `${targetItem.symbol}${(num / 1000000000).toFixed(1)}B`;
                if (num >= 1000000) return `${targetItem.symbol}${(num / 1000000).toFixed(1)}M`;
                if (num >= 1000) return `${targetItem.symbol}${(num / 1000).toFixed(0)}K`;
                return `${targetItem.symbol}${num}`;
            }
        }
    }["useUserCurrency.useCallback[formatCompact]"], [
        currencyCode,
        activeCurrencyItem
    ]);
    /**
   * Helper to retrieve symbol for any given currency code.
   */ const getSymbol = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserCurrency.useCallback[getSymbol]": (code)=>{
            var _CURRENCY_MAP_code;
            if (!code) return currencySymbol;
            return ((_CURRENCY_MAP_code = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][code]) === null || _CURRENCY_MAP_code === void 0 ? void 0 : _CURRENCY_MAP_code.symbol) || code;
        }
    }["useUserCurrency.useCallback[getSymbol]"], [
        currencySymbol
    ]);
    /**
   * Converts a base system USD amount into the target currency using standard FX rates.
   */ const convertFromUSD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserCurrency.useCallback[convertFromUSD]": (usdAmount, targetCurrency)=>{
            if (!usdAmount || usdAmount === 0) return 0;
            const target = targetCurrency || currencyCode;
            const rate = FX_RATES_FROM_USD[target] || 1;
            return Math.round(usdAmount * rate);
        }
    }["useUserCurrency.useCallback[convertFromUSD]"], [
        currencyCode
    ]);
    /**
   * Converts and formats a base system USD amount into the user's localized currency string.
   * e.g. formatFromUSD(250) -> "$250" when user is USD, "₹20,875" when user is INR, "€230" when EUR.
   */ const formatFromUSD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUserCurrency.useCallback[formatFromUSD]": (usdAmount, targetCurrency)=>{
            const target = targetCurrency || currencyCode;
            const targetItem = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"][target] || activeCurrencyItem;
            if (!usdAmount || usdAmount === 0) {
                return `${targetItem.symbol}0`;
            }
            const converted = convertFromUSD(usdAmount, target);
            try {
                return `${targetItem.symbol}${converted.toLocaleString(targetItem.locale || "en-US")}`;
            } catch (e) {
                return `${targetItem.symbol}${converted.toLocaleString()}`;
            }
        }
    }["useUserCurrency.useCallback[formatFromUSD]"], [
        currencyCode,
        activeCurrencyItem,
        convertFromUSD
    ]);
    return {
        // Current active currency state
        currency: currencyCode,
        currencyCode,
        symbol: currencySymbol,
        currencySymbol,
        currencyItem: activeCurrencyItem,
        isIndia: currencyCode === "INR",
        isCurrencyLocked,
        isCreatedByMeddylistAdmin,
        lockedReason,
        // Supported catalog
        supportedCurrencies: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SUPPORTED_CURRENCIES"],
        currencyMap: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CURRENCY_MAP"],
        fxRates: FX_RATES_FROM_USD,
        // Mutation & formatting methods
        setCurrency,
        formatAmount,
        formatCompact,
        getSymbol,
        // FX Conversion from System USD / INR
        convertFromUSD,
        formatFromUSD,
        convertCurrency,
        convertFromINR: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
            "useUserCurrency.useCallback": (inrAmount, targetCurrency)=>{
                return convertCurrency(inrAmount, "INR", targetCurrency || currencyCode);
            }
        }["useUserCurrency.useCallback"], [
            currencyCode
        ])
    };
}
_s(useUserCurrency, "OIJSnx5p8W+eODWRt/r8aVQ0DJs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
const __TURBOPACK__default__export__ = useUserCurrency;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSiteSettings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_BOTTOM_LINKS",
    ()=>DEFAULT_BOTTOM_LINKS,
    "DEFAULT_FOOTER_SECTIONS",
    ()=>DEFAULT_FOOTER_SECTIONS,
    "useSiteSettings",
    ()=>useSiteSettings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const DEFAULT_FOOTER_SECTIONS = [
    {
        id: "product",
        title: "Product",
        links: [
            {
                id: "p0",
                href: "/download",
                label: "Download Desktop Apps",
                isExternal: false
            },
            {
                id: "p1",
                href: "/database",
                label: "PingDart Cluster DB",
                isExternal: false
            },
            {
                id: "p2",
                href: "https://cloud.pingdart.com",
                label: "PingDart Cloud Workspace",
                isExternal: true
            },
            {
                id: "p3",
                href: "/pricing",
                label: "Plans & Pricing",
                isExternal: false
            },
            {
                id: "p4",
                href: "/solutions",
                label: "AI Solutions",
                isExternal: false
            },
            {
                id: "p5",
                href: "/shop",
                label: "AI Hardware",
                isExternal: false
            },
            {
                id: "p6",
                href: "/connect-apps",
                label: "Connect Email Apps",
                isExternal: false
            },
            {
                id: "p7",
                href: "/outlook-setup",
                label: "Outlook Setup Guide",
                isExternal: false
            }
        ]
    },
    {
        id: "email",
        title: "Email & Apps",
        links: [
            {
                id: "em1",
                href: "/connect-apps",
                label: "Connect Any Email App",
                isExternal: false
            },
            {
                id: "em2",
                href: "/outlook-setup",
                label: "Outlook Setup Guide",
                isExternal: false
            },
            {
                id: "em3",
                href: "/login?redirect=/user?tab=Mail",
                label: "PingDart Webmail",
                isExternal: false
            },
            {
                id: "em4",
                href: "/download",
                label: "Desktop Email Client",
                isExternal: false
            }
        ]
    },
    {
        id: "company",
        title: "Company",
        links: [
            {
                id: "c1",
                href: "/about",
                label: "About PingDart",
                isExternal: false
            },
            {
                id: "c2",
                href: "/services",
                label: "Services",
                isExternal: false
            },
            {
                id: "c3",
                href: "/privacy",
                label: "Privacy Policy",
                isExternal: false
            },
            {
                id: "c4",
                href: "/account_delete",
                label: "Delete Account",
                isExternal: false
            },
            {
                id: "c5",
                href: "/contact",
                label: "Contact Us",
                isExternal: false
            }
        ]
    },
    {
        id: "cloudservices",
        title: "CloudServices",
        links: [
            {
                id: "cs1",
                href: "https://cloud.pingdart.com",
                label: "cloud.pingdart.com",
                isExternal: true
            },
            {
                id: "cs2",
                href: "/services",
                label: "Enterprise AI Consulting",
                isExternal: false
            },
            {
                id: "cs3",
                href: "/register",
                label: "Get Started Free",
                isExternal: false
            },
            {
                id: "cs4",
                href: "/login",
                label: "Sign In to Cloud",
                isExternal: false
            }
        ]
    }
];
const DEFAULT_BOTTOM_LINKS = [
    {
        id: "b0",
        href: "/download",
        label: "Download App",
        isExternal: false
    },
    {
        id: "b1",
        href: "/terms",
        label: "Terms",
        isExternal: false
    },
    {
        id: "b2",
        href: "/privacy",
        label: "Privacy",
        isExternal: false
    },
    {
        id: "b3",
        href: "/account_delete",
        label: "Delete Account",
        isExternal: false
    },
    {
        id: "b4",
        href: "/connect-apps",
        label: "Connect Apps",
        isExternal: false
    },
    {
        id: "b5",
        href: "/outlook-setup",
        label: "Outlook Setup",
        isExternal: false
    },
    {
        id: "b6",
        href: "/shop",
        label: "Shop",
        isExternal: false
    }
];
const DEFAULT_SITE_SETTINGS = {
    appName: "PingDart",
    appLogoText: "PingDart",
    appLogoImage: "/logo.png",
    appLogoDark: "/logo_light.png",
    appLogoDarkImage: "/logo_light.png",
    appTagline: "PingDart is a next-generation chat, mail, custom AI & enterprise cloud platform.",
    appEmail: "support@pingdart.com",
    appPhone: "+91 9491565633",
    appAddress: "Kalyanpuri Colony Rd, near community hall, NGRI, Uppal, Hyderabad, Telangana 500039",
    twitterUrl: "https://x.com/DartPing26370",
    instagramUrl: "https://www.instagram.com/ping.dart",
    linkedinUrl: "https://www.linkedin.com/in/ping-dart",
    youtubeUrl: "https://www.youtube.com/@PingDart",
    githubUrl: "",
    discordUrl: "",
    facebookUrl: "",
    footerSections: DEFAULT_FOOTER_SECTIONS,
    footerBottomLinks: DEFAULT_BOTTOM_LINKS,
    footerCopyright: "© 2026 PingDart. All rights reserved."
};
function sanitizeLogoUrl(url, fallback = "/logo.png") {
    if (!url || typeof url !== "string") return fallback;
    const trimmed = url.trim();
    if (!trimmed || trimmed.includes("storage.pingdart.com/public/logos/")) return fallback;
    return trimmed;
}
function useSiteSettings() {
    _s();
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useSiteSettings.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                try {
                    const cached = localStorage.getItem("pingdart_site_settings");
                    if (cached) {
                        if (cached.includes("data:image") || cached.length > 20000) {
                            localStorage.removeItem("pingdart_site_settings");
                        } else {
                            const parsed = JSON.parse(cached);
                            if (parsed && typeof parsed === "object") {
                                return {
                                    ...DEFAULT_SITE_SETTINGS,
                                    ...parsed,
                                    appLogoImage: sanitizeLogoUrl(parsed.appLogoImage, "/logo.png"),
                                    appLogoDark: sanitizeLogoUrl(parsed.appLogoDark, "/logo_light.png"),
                                    appLogoDarkImage: sanitizeLogoUrl(parsed.appLogoDarkImage || parsed.appLogoDark, "/logo.png")
                                };
                            }
                        }
                    }
                } catch (_) {}
            }
            return DEFAULT_SITE_SETTINGS;
        }
    }["useSiteSettings.useState"]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSiteSettings.useEffect": ()=>{
            async function fetchSettings() {
                try {
                    const apiUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])();
                    const res = await fetch(`${apiUrl}/site-settings`);
                    if (res.ok) {
                        const data = await res.json();
                        if (data.success && data.settings) {
                            const raw = data.settings;
                            const updated = {
                                ...raw,
                                appLogoImage: sanitizeLogoUrl(raw.appLogoImage, "/logo.png"),
                                appLogoDark: sanitizeLogoUrl(raw.appLogoDark, "/logo_light.png"),
                                appLogoDarkImage: sanitizeLogoUrl(raw.appLogoDarkImage || raw.appLogoDark, "/logo.png")
                            };
                            setSettings({
                                "useSiteSettings.useEffect.fetchSettings": (prev)=>({
                                        ...prev,
                                        ...updated
                                    })
                            }["useSiteSettings.useEffect.fetchSettings"]);
                            try {
                                var _forStorage_appLogoImage, _forStorage_appLogoImage1, _forStorage_appLogoDark, _forStorage_appLogoDark1, _forStorage_appLogoDarkImage, _forStorage_appLogoDarkImage1;
                                const forStorage = {
                                    ...updated
                                };
                                if (((_forStorage_appLogoImage = forStorage.appLogoImage) === null || _forStorage_appLogoImage === void 0 ? void 0 : _forStorage_appLogoImage.startsWith('data:')) || (((_forStorage_appLogoImage1 = forStorage.appLogoImage) === null || _forStorage_appLogoImage1 === void 0 ? void 0 : _forStorage_appLogoImage1.length) || 0) > 500) {
                                    delete forStorage.appLogoImage;
                                }
                                if (((_forStorage_appLogoDark = forStorage.appLogoDark) === null || _forStorage_appLogoDark === void 0 ? void 0 : _forStorage_appLogoDark.startsWith('data:')) || (((_forStorage_appLogoDark1 = forStorage.appLogoDark) === null || _forStorage_appLogoDark1 === void 0 ? void 0 : _forStorage_appLogoDark1.length) || 0) > 500) {
                                    delete forStorage.appLogoDark;
                                }
                                if (((_forStorage_appLogoDarkImage = forStorage.appLogoDarkImage) === null || _forStorage_appLogoDarkImage === void 0 ? void 0 : _forStorage_appLogoDarkImage.startsWith('data:')) || (((_forStorage_appLogoDarkImage1 = forStorage.appLogoDarkImage) === null || _forStorage_appLogoDarkImage1 === void 0 ? void 0 : _forStorage_appLogoDarkImage1.length) || 0) > 500) {
                                    delete forStorage.appLogoDarkImage;
                                }
                                localStorage.setItem("pingdart_site_settings", JSON.stringify(forStorage));
                            } catch (_) {}
                        }
                    }
                } catch (err) {
                    console.error("Error fetching site settings:", err);
                } finally{
                    setLoading(false);
                }
            }
            fetchSettings();
        }
    }["useSiteSettings.useEffect"], []);
    const updateSettings = async (newSettings)=>{
        try {
            const apiUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getApiV1Url"])();
            const token = localStorage.getItem("token") || "";
            const res = await fetch(`${apiUrl}/site-settings/admin`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token ? `Bearer ${token}` : ""
                },
                body: JSON.stringify(newSettings)
            });
            if (res.ok) {
                const data = await res.json();
                if (data.success && data.settings) {
                    setSettings(data.settings);
                    return true;
                }
            }
        } catch (err) {
            console.error("Error updating site settings:", err);
        }
        return false;
    };
    return {
        settings,
        loading,
        updateSettings
    };
}
_s(useSiteSettings, "cu8K/UCOsrwWDFSjSKAes8+XQ1E=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_2317da04._.js.map