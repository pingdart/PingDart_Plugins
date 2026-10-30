(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/services/resellerApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resellerApi",
    ()=>resellerApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
const resellerApi = {
    // Get active reseller subscription
    getCurrentSubscription: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/reseller/subscription");
        return response.data;
    },
    // Create checkout order with gateway
    createCheckoutOrder: async (payload)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/reseller/checkout/order", payload);
        return response.data;
    },
    // Verify payment signature & activate subscription
    verifyPayment: async (payload)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/reseller/checkout/verify", payload);
        return response.data;
    },
    // Get invoice records
    getInvoices: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/reseller/invoices");
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/reseller/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLOR_PRESETS",
    ()=>COLOR_PRESETS,
    "SUPPORTED_CURRENCIES",
    ()=>SUPPORTED_CURRENCIES,
    "formatCurrencyAmount",
    ()=>formatCurrencyAmount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/services/currencyService.ts [app-client] (ecmascript) <locals>");
;
const SUPPORTED_CURRENCIES = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SUPPORTED_CURRENCIES"];
function formatCurrencyAmount(amount, currencyCode = "USD") {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$currencyService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["formatCurrencyAmount"])(amount, currencyCode);
}
const COLOR_PRESETS = [
    {
        name: "PingIndigo",
        hex: "#4338ca"
    },
    {
        name: "Emerald",
        hex: "#059669"
    },
    {
        name: "RoyalBlue",
        hex: "#2563eb"
    },
    {
        name: "AmberGold",
        hex: "#d97706"
    },
    {
        name: "Purple",
        hex: "#7c3aed"
    },
    {
        name: "Rose",
        hex: "#e11d48"
    },
    {
        name: "DarkSlate",
        hex: "#0f172a"
    },
    {
        name: "Cyan",
        hex: "#0891b2"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResellerSidebar",
    ()=>ResellerSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FlashIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Globe02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Settings01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Building01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mail01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SidebarLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SidebarLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Cancel01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CheckmarkCircle02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CrownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CrownIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ResellerSidebar({ activeTab, onTabSelect, isMobileSidebarOpen, onCloseMobileSidebar, onBack, domainsCount = 0, tenantsCount = 0, activePlan = null, selectedCurrency, onCurrencyChange, portalName = "Partner Portal", estimatedRevenue = 0 }) {
    _s();
    const [isCollapsed, setIsCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const NAV_SECTIONS = [
        {
            group: "CORE MANAGEMENT",
            items: [
                {
                    id: "overview",
                    label: "Partner Overview",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"]
                },
                {
                    id: "subscription",
                    label: "Subscription (3 Plans)",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CrownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrownIcon"],
                    badge: activePlan ? `Plan ${activePlan}` : "Select Plan",
                    badgeColor: activePlan ? "bg-emerald-600 text-white" : "bg-gradient-to-r from-amber-500 to-orange-500 text-white animate-pulse"
                },
                {
                    id: "domain",
                    label: "Custom Domains (Add)",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"],
                    badge: domainsCount > 0 ? `${domainsCount}` : undefined,
                    badgeColor: "bg-blue-500 text-white"
                },
                {
                    id: "tenants",
                    label: "Client Tenants",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"],
                    badge: tenantsCount > 0 ? `${tenantsCount}` : undefined,
                    badgeColor: "bg-amber-500 text-white"
                }
            ]
        },
        {
            group: "WHITE-LABEL & BRANDING",
            items: [
                {
                    id: "config",
                    label: "White-Label Config",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Settings01Icon"]
                },
                {
                    id: "dns-guide",
                    label: "DNS & SSL Health",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield01Icon"]
                }
            ]
        },
        {
            group: "SERVICES & DELIVERY",
            items: [
                {
                    id: "smtp",
                    label: "SMTP Outgoing Relay",
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mail01Icon"]
                }
            ]
        }
    ];
    const sidebarContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `shrink-0 flex flex-col h-full border-r border-slate-200/80 dark:border-slate-800 bg-white dark:bg-[#111827] select-none overflow-hidden shadow-2xl md:shadow-none transition-all duration-300 ${isCollapsed ? "w-18" : "w-full md:w-[270px] lg:w-[290px] xl:w-[305px]"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-b border-slate-100 dark:border-slate-800 shrink-0 pt-[calc(0.75rem+env(safe-area-inset-top,0px))] md:pt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 min-w-0 flex-1",
                                children: [
                                    onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onBack,
                                        className: "w-9 h-9 rounded-xl shrink-0 flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer",
                                        title: "Back to Apps & Workspace",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this),
                                    !isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2.5 min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 flex items-center justify-center text-white shadow-md shadow-orange-500/20 shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0 flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs font-black text-slate-900 dark:text-white truncate",
                                                                children: "Reseller Hub"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                                                lineNumber: 157,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-amber-600 dark:text-amber-400 font-bold tracking-tight block truncate",
                                                        children: "White-Label Distribution"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 via-orange-600 to-red-600 flex items-center justify-center text-white shadow-md shadow-orange-500/20 mx-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Building01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Building01Icon"], {
                                            size: 20
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                        lineNumber: 165,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setIsCollapsed((prev)=>!prev),
                                className: "hidden md:flex w-9 h-9 rounded-xl items-center justify-center text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition cursor-pointer shrink-0",
                                title: isCollapsed ? "Expand sidebar" : "Collapse sidebar",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SidebarLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarLeft01Icon"], {
                                    size: 18,
                                    className: isCollapsed ? "rotate-180" : ""
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onCloseMobileSidebar,
                                className: "md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer",
                                title: "Close menu",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Cancel01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel01Icon"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>{
                            onTabSelect("subscription");
                            onCloseMobileSidebar();
                        },
                        className: "mt-3 p-2.5 rounded-[10px] bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-amber-200/80 dark:border-amber-900/60 cursor-pointer hover:border-amber-400 dark:hover:border-amber-700 transition group",
                        title: "Click to view subscription plans (555, 999, 1999)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CrownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrownIcon"], {
                                                size: 14,
                                                className: "text-amber-500 group-hover:scale-110 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                                lineNumber: 204,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[11px] font-extrabold text-amber-700 dark:text-amber-300",
                                                children: activePlan ? `Plan ${activePlan} Active` : "No Active Subscription"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                        lineNumber: 203,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-black text-slate-900 dark:text-white",
                                        children: activePlan ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyAmount"])(Number(activePlan), selectedCurrency)}/mo` : "Choose Plan →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            domainsCount,
                                            " domain(s) connected"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, this),
                                    domainsCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-0.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CheckmarkCircle02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckmarkCircle02Icon"], {
                                                size: 10
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                                lineNumber: 217,
                                                columnNumber: 19
                                            }, this),
                                            " Live"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                        lineNumber: 216,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-amber-600 dark:text-amber-400 font-semibold group-hover:underline",
                                        children: "Unlock 3 Plans →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                        lineNumber: 220,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-2.5 space-y-4 no-scrollbar",
                children: NAV_SECTIONS.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-2 pb-1.5 text-[10px] font-black tracking-wider text-slate-400 dark:text-slate-500 uppercase",
                                children: section.group
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                lineNumber: 234,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1",
                                children: section.items.map((item)=>{
                                    const isActive = activeTab === item.id;
                                    const IconComponent = item.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            onTabSelect(item.id);
                                            onCloseMobileSidebar();
                                        },
                                        title: isCollapsed ? item.label : undefined,
                                        className: `w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${isActive ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-sm shadow-orange-500/20" : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"} ${isCollapsed ? "justify-center px-0 h-10" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                size: 18,
                                                className: `shrink-0 ${isActive ? "text-white" : "text-slate-400 group-hover:text-slate-600 dark:text-slate-500"}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                                lineNumber: 256,
                                                columnNumber: 21
                                            }, this),
                                            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex-1 text-left truncate",
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                                lineNumber: 262,
                                                columnNumber: 23
                                            }, this),
                                            !isCollapsed && item.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[9.5px] px-1.5 py-0.5 rounded-full font-black ${isActive ? "bg-white/20 text-white" : item.badgeColor || "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"}`,
                                                children: item.badge
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                                lineNumber: 265,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                        lineNumber: 243,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this)
                        ]
                    }, section.group, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 border-t border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50/60 dark:bg-slate-900/40 space-y-2",
                children: !isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider",
                                    children: "Reseller Currency:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400",
                                    children: selectedCurrency
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                    lineNumber: 290,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 overflow-x-auto no-scrollbar pb-1",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_CURRENCIES"].slice(0, 4).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onCurrencyChange(c.code),
                                    className: `px-2 py-1 rounded-md text-[10px] font-bold transition-all cursor-pointer flex items-center gap-1 shrink-0 ${selectedCurrency === c.code ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs border border-blue-200 dark:border-blue-900" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: c.flag
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                            lineNumber: 305,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: c.code
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                            lineNumber: 306,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, c.code, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                    lineNumber: 296,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                            lineNumber: 294,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-400 font-medium",
                                    children: "Monthly MRR:"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-black text-emerald-600 dark:text-emerald-400",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyAmount"])(estimatedRevenue, selectedCurrency)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                                    lineNumber: 313,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                            lineNumber: 311,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                    lineNumber: 285,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-black text-amber-500",
                        children: selectedCurrency
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                        lineNumber: 320,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                    lineNumber: 319,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "hidden md:flex h-full shrink-0 z-20",
                children: sidebarContent
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this),
            isMobileSidebarOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 md:hidden flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: onCloseMobileSidebar,
                        className: "fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 w-[82vw] max-w-[320px] h-full shadow-2xl animate-in slide-in-from-left duration-200",
                        children: sidebarContent
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                        lineNumber: 342,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx",
                lineNumber: 334,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(ResellerSidebar, "XL80Ke9pMdZ2JRKLtHkkSCCoQZ0=");
_c = ResellerSidebar;
var _c;
__turbopack_context__.k.register(_c, "ResellerSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResellerHeader",
    ()=>ResellerHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Menu01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Menu01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Globe02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Coins01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Coins01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Add01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowLeft01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowDown01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowDown01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CreditCardIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CreditCardIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const TAB_TITLES = {
    overview: {
        title: "Partner Overview & Hub",
        subtitle: "Custom domains, client seats, and monthly subscription billings"
    },
    subscription: {
        title: "Partner Subscription & Plans",
        subtitle: "Select any 1 of the 3 partner tiers (555, 999, 1999) to activate reseller hub"
    },
    domain: {
        title: "Custom Domains (Add Domain)",
        subtitle: "Map your agency domain with CNAME / TXT records & automated SSL"
    },
    config: {
        title: "White-Label Brand Config",
        subtitle: "Brand identity, logos, color scheme, support links & masked emails"
    },
    packages: {
        title: "Pricing Packages (555, 999, 1999)",
        subtitle: "Multi-currency turnkey tiers supported in USD ($), INR (₹) & all currencies"
    },
    tenants: {
        title: "Client Tenant Workspaces",
        subtitle: "Provision and allocate seats for branded client accounts"
    },
    "dns-guide": {
        title: "DNS Setup & SSL Verification",
        subtitle: "Configuration guide for Cloudflare, GoDaddy, Namecheap & AWS Route53"
    },
    smtp: {
        title: "White-Label SMTP & Email Relay",
        subtitle: "Configure outgoing email delivery headers and zero-PingDart masking"
    }
};
function ResellerHeader({ activeTab, onOpenMobileSidebar, onBack, domainsCount = 0, tenantsCount = 0, estimatedRevenue = 0, selectedCurrency, onCurrencyChange, onOpenAddTenantModal, onOpenPackageModal, onTabSelect, activePlan = null }) {
    _s();
    const meta = TAB_TITLES[activeTab] || {
        title: "Reseller & White-Label Partner Hub",
        subtitle: "Custom domain mapping, brand masking & distribution tiers"
    };
    const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isQuickActionOpen, setIsQuickActionOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeCurrencyObj = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_CURRENCIES"].find((c)=>c.code === selectedCurrency) || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_CURRENCIES"][0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-30 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 px-4 sm:px-6 py-2.5 sm:py-3 select-none transition-colors",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onOpenMobileSidebar,
                            className: "md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer shrink-0 transition",
                            "aria-label": "Open sidebar menu",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Menu01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Menu01Icon"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onBack,
                            className: "md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer shrink-0 transition",
                            title: "Back",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowLeft01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowLeft01Icon"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "min-w-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-base sm:text-lg font-black text-slate-900 dark:text-white truncate tracking-tight",
                                            children: meta.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this),
                                        activePlan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline-flex text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900 shrink-0",
                                            children: [
                                                "Plan ",
                                                activePlan
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 truncate hidden sm:block font-medium",
                                    children: meta.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 sm:gap-3 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden xl:flex items-center gap-2.5 px-3.5 h-10 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-800 text-xs",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Coins01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Coins01Icon"], {
                                    size: 15,
                                    className: "text-emerald-500 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] uppercase font-bold text-slate-400",
                                            children: "MRR:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-extrabold text-emerald-600 dark:text-emerald-400",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyAmount"])(estimatedRevenue, selectedCurrency)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-slate-300 dark:text-slate-700 font-bold",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"], {
                                            size: 14,
                                            className: "text-blue-500 shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-extrabold text-slate-700 dark:text-slate-200",
                                            children: [
                                                domainsCount,
                                                " Domain",
                                                domainsCount === 1 ? "" : "s"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsCurrencyDropdownOpen((prev)=>!prev),
                                    className: "h-10 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-800/60 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5 transition cursor-pointer",
                                    title: "Change Currency (USD, INR, all currencies supported)",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: activeCurrencyObj.flag
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: activeCurrencyObj.code
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowDown01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowDown01Icon"], {
                                            size: 14,
                                            className: "text-slate-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this),
                                isCurrencyDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fixed inset-0 z-40",
                                            onClick: ()=>setIsCurrencyDropdownOpen(false)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                            lineNumber: 169,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl py-1.5 z-50 animate-in fade-in zoom-in-95",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800",
                                                    children: "Select Currency:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 19
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_CURRENCIES"].map((curr)=>{
                                                    const isSelected = selectedCurrency === curr.code;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            onCurrencyChange(curr.code);
                                                            setIsCurrencyDropdownOpen(false);
                                                        },
                                                        className: `w-full px-3 py-2 text-xs font-semibold flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer ${isSelected ? "text-blue-600 dark:text-blue-400 font-bold bg-blue-50/50 dark:bg-blue-950/30" : "text-slate-700 dark:text-slate-300"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: curr.flag
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                                        lineNumber: 194,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: curr.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                                        lineNumber: 195,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono text-slate-400",
                                                                children: curr.code
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, curr.code, true, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 23
                                                    }, this);
                                                })
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setIsQuickActionOpen((prev)=>!prev),
                                    className: "h-10 px-3.5 sm:px-4 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 active:scale-[0.98] text-white shadow-sm shadow-orange-500/20 transition flex items-center gap-1.5 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Add01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Add01Icon"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Partner Action"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowDown01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowDown01Icon"], {
                                            size: 14,
                                            className: "text-white/80"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this),
                                isQuickActionOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "fixed inset-0 z-40",
                                            onClick: ()=>setIsQuickActionOpen(false)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                            lineNumber: 220,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-0 mt-2 w-56 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl py-1.5 z-50 animate-in fade-in zoom-in-95",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800",
                                                    children: "Quick Partner Actions"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        onTabSelect("domain");
                                                        setIsQuickActionOpen(false);
                                                    },
                                                    className: "w-full px-3.5 py-2.5 text-xs font-semibold flex items-center gap-2.5 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"], {
                                                            size: 16,
                                                            className: "text-blue-500 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-bold",
                                                                    children: "Add Custom Domain"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-slate-400",
                                                                    children: "Map portal.agency.com"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                                    lineNumber: 240,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                    lineNumber: 229,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        onOpenAddTenantModal();
                                                        setIsQuickActionOpen(false);
                                                    },
                                                    className: "w-full px-3.5 py-2.5 text-xs font-semibold flex items-center gap-2.5 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"], {
                                                            size: 16,
                                                            className: "text-amber-500 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                            lineNumber: 252,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-bold",
                                                                    children: "Provision Client Tenant"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                                    lineNumber: 254,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-slate-400",
                                                                    children: "Create workspace with seats"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                                    lineNumber: 255,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                            lineNumber: 253,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border-t border-slate-100 dark:border-slate-800 my-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        onOpenPackageModal("999");
                                                        setIsQuickActionOpen(false);
                                                    },
                                                    className: "w-full px-3.5 py-2.5 text-xs font-semibold flex items-center gap-2.5 text-amber-600 dark:text-amber-400 hover:bg-amber-50/50 dark:hover:bg-amber-950/20 cursor-pointer text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CreditCardIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreditCardIcon"], {
                                                            size: 16,
                                                            className: "shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-bold",
                                                                    children: "Upgrade Partner Package"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-[10px] text-slate-400",
                                                                    children: "Tiers: 555, 999, 1999"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                                    lineNumber: 272,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
            lineNumber: 94,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(ResellerHeader, "UBCsxnfokncbSkJYMxwGmyx5giw=");
_c = ResellerHeader;
var _c;
__turbopack_context__.k.register(_c, "ResellerHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/reseller/components/layout/ResellerBottomNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResellerBottomNav",
    ()=>ResellerBottomNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/FlashIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Globe02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Settings01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CreditCardIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CreditCardIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-client] (ecmascript)");
"use client";
;
;
function ResellerBottomNav({ activeTab, onTabSelect, domainsCount = 0, tenantsCount = 0 }) {
    const BOTTOM_TABS = [
        {
            id: "overview",
            label: "Overview",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$FlashIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlashIcon"]
        },
        {
            id: "subscription",
            label: "Plans",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CreditCardIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreditCardIcon"],
            badgeText: "3 Tiers"
        },
        {
            id: "domain",
            label: "Domains",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"],
            badge: domainsCount
        },
        {
            id: "config",
            label: "Branding",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Settings01Icon"]
        },
        {
            id: "tenants",
            label: "Tenants",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"],
            badge: tenantsCount
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md border-t border-slate-200/80 dark:border-slate-800 px-2 py-1 select-none flex items-center justify-around pb-[calc(0.25rem+env(safe-area-inset-bottom,0px))] shadow-lg",
        children: BOTTOM_TABS.map((tab)=>{
            const isActive = activeTab === tab.id || tab.id === "subscription" && activeTab === "packages";
            const Icon = tab.icon;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onTabSelect(tab.id),
                className: `flex flex-col items-center justify-center py-1 px-2.5 rounded-lg transition relative cursor-pointer ${isActive ? "text-amber-600 dark:text-amber-400 font-bold" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerBottomNav.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this),
                            tab.badge !== undefined && tab.badge > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -top-1 -right-2 bg-amber-600 text-white text-[9px] font-black rounded-full h-3.5 min-w-3.5 px-0.5 flex items-center justify-center",
                                children: tab.badge
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerBottomNav.tsx",
                                lineNumber: 53,
                                columnNumber: 17
                            }, this),
                            tab.badgeText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute -top-1 -right-3 bg-emerald-600 text-white text-[8px] font-black rounded-full h-3.5 px-1 flex items-center justify-center",
                                children: tab.badgeText
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerBottomNav.tsx",
                                lineNumber: 58,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerBottomNav.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] mt-0.5 font-medium",
                        children: tab.label
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerBottomNav.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this)
                ]
            }, tab.id, true, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerBottomNav.tsx",
                lineNumber: 41,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/modules/reseller/components/layout/ResellerBottomNav.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = ResellerBottomNav;
var _c;
__turbopack_context__.k.register(_c, "ResellerBottomNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResellerOverviewTab",
    ()=>ResellerOverviewTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Globe02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CrownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CrownIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Coins01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Coins01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/ArrowRight01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/SparklesIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Copy01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Copy01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Settings01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/types.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function ResellerOverviewTab({ domains, tenants, totalSeatsAllocated, activePlan, selectedCurrency, estimatedRevenue, activeDomainName, config, setActiveTab }) {
    var _config_portalName, _config_portalName1, _config_tagline;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-slate-400 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-bold uppercase tracking-wider",
                                        children: "Custom Domains"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"], {
                                        size: 16,
                                        className: "text-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-black text-slate-900 dark:text-white",
                                children: domains.length
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-1 flex items-center gap-1",
                                children: domains.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, this),
                                        domains.filter((d)=>d.status === "active").length,
                                        " Live & SSL Verified"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this) : "0 connected domains"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-slate-400 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-bold uppercase tracking-wider",
                                        children: "Client Tenants"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"], {
                                        size: 16,
                                        className: "text-amber-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-black text-slate-900 dark:text-white",
                                children: tenants.length
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-1",
                                children: [
                                    totalSeatsAllocated,
                                    " active user seats deployed"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setActiveTab("subscription"),
                        className: "p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs cursor-pointer hover:border-purple-300 dark:hover:border-purple-800 transition",
                        title: "Click to view subscription plans (555, 999, 1999)",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-slate-400 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-bold uppercase tracking-wider",
                                        children: "Partner Subscription"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CrownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrownIcon"], {
                                        size: 16,
                                        className: "text-purple-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl font-black text-purple-600 dark:text-purple-400 truncate",
                                children: activePlan ? `Tier ${activePlan}` : "No Subscription"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-1",
                                children: activePlan ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyAmount"])(Number(activePlan), selectedCurrency)} / month` : "Choose 1 of 3 plans →"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between text-slate-400 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[11px] font-bold uppercase tracking-wider",
                                        children: "Monthly Client Billings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Coins01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Coins01Icon"], {
                                        size: 16,
                                        className: "text-emerald-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-2xl font-black text-emerald-600 dark:text-emerald-400",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyAmount"])(estimatedRevenue, selectedCurrency)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-500 dark:text-slate-400 font-medium mt-1",
                                children: tenants.length > 0 ? "Gross client subscriptions MRR" : "No active tenant billings"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setActiveTab("domain"),
                        className: "p-5 rounded-xl bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent border border-blue-200 dark:border-blue-900/60 hover:border-blue-400 transition-all cursor-pointer group shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-3 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-slate-900 dark:text-white flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Add & Connect Domain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 128,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                        size: 14,
                                        className: "text-blue-500 group-hover:translate-x-1 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed",
                                children: "Map your agency domain (e.g. portal.myagency.com) with automated SSL and instant DNS instructions."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setActiveTab("config"),
                        className: "p-5 rounded-xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-amber-200 dark:border-amber-900/60 hover:border-amber-400 transition-all cursor-pointer group shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-lg bg-amber-500 text-white flex items-center justify-center mb-3 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Settings01Icon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-slate-900 dark:text-white flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "White-Label Branding"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                        size: 14,
                                        className: "text-amber-500 group-hover:translate-x-1 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed",
                                children: "Upload your brand logo, set theme colors, customize support links, and mask all PingDart mentions."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setActiveTab("subscription"),
                        className: "p-5 rounded-xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border border-emerald-200 dark:border-emerald-900/60 hover:border-emerald-400 transition-all cursor-pointer group shadow-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CrownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrownIcon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-slate-900 dark:text-white flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Subscription (3 Plans: 555, 999, 1999)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 160,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$ArrowRight01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ArrowRight01Icon"], {
                                        size: 14,
                                        className: "text-emerald-500 group-hover:translate-x-1 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed",
                                children: "Choose any 1 partner tier to unlock custom domains, portal branding & tenant quotas."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$SparklesIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SparklesIcon"], {
                                                size: 16,
                                                className: "text-amber-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                                lineNumber: 174,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Client Portal Live Preview"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                                lineNumber: 175,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 dark:text-slate-400",
                                        children: activeDomainName ? "This is what your clients see when logging in through your custom domain:" : "Connect your custom domain and configure your brand to see live client preview:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            activeDomainName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-mono text-slate-500 dark:text-slate-400 px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700",
                                        children: [
                                            "https://",
                                            activeDomainName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            navigator.clipboard.writeText(`https://${activeDomainName}`);
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Domain URL copied to clipboard!");
                                        },
                                        className: "p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 cursor-pointer",
                                        title: "Copy URL",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Copy01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Copy01Icon"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                            lineNumber: 196,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-inner bg-slate-900 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2 bg-slate-800 border-b border-slate-700 flex items-center gap-2 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                                lineNumber: 207,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                                lineNumber: 209,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1 max-w-sm mx-auto px-3 py-1 rounded bg-slate-900/80 border border-slate-700 text-slate-300 font-mono text-[11px] flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                                size: 11,
                                                className: activeDomainName ? "text-emerald-400" : "text-slate-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                                lineNumber: 212,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "truncate",
                                                children: activeDomainName ? `https://${activeDomainName}/login` : "https://portal.yourbrand.com/login"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                                lineNumber: 213,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-8 text-center space-y-4 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            backgroundColor: config.primaryColor || "#4338ca"
                                        },
                                        className: "w-12 h-12 rounded-xl text-white mx-auto flex items-center justify-center font-black text-xl shadow-lg",
                                        children: (((_config_portalName = config.portalName) === null || _config_portalName === void 0 ? void 0 : _config_portalName.trim()) || "PD").substring(0, 2).toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-bold text-white",
                                                children: ((_config_portalName1 = config.portalName) === null || _config_portalName1 === void 0 ? void 0 : _config_portalName1.trim()) || "Your White-Label Brand"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                                lineNumber: 228,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-slate-400 max-w-md mx-auto mt-1",
                                                children: ((_config_tagline = config.tagline) === null || _config_tagline === void 0 ? void 0 : _config_tagline.trim()) || "Unified Team Collaboration & Secure Client Workspaces"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-center gap-3 pt-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: {
                                                    backgroundColor: config.primaryColor || "#4338ca"
                                                },
                                                className: "px-4 py-2 rounded-lg text-xs font-bold text-white shadow-md hover:opacity-90 cursor-pointer",
                                                children: "Client Sign In"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                                lineNumber: 236,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-4 py-2 rounded-lg text-xs font-bold bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 cursor-pointer",
                                                children: "Documentation & API"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[11px] text-slate-500 pt-3",
                                        children: activeDomainName ? `Powered by ${activeDomainName} infrastructure • 256-bit E2EE Security` : "Connect your custom domain in the Domains tab to deploy your live portal"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = ResellerOverviewTab;
var _c;
__turbopack_context__.k.register(_c, "ResellerOverviewTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResellerDomainTab",
    ()=>ResellerDomainTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Globe02Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Copy01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Copy01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/RefreshIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Link01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Link01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Delete01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CrownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CrownIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function ResellerDomainTab({ domains, activePlan, newDomainInput, setNewDomainInput, isVerifyingDns, handleAddDomain, handleVerifyDns, handleSetPrimaryDomain, handleDeleteDomain, setActiveTab }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            !activePlan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 border border-amber-300 dark:border-amber-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CrownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrownIcon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                    lineNumber: 48,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                lineNumber: 47,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-extrabold text-amber-900 dark:text-amber-200",
                                                children: "Reseller Subscription Required"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200 uppercase",
                                                children: "Step 1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                lineNumber: 55,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-amber-700 dark:text-amber-300/90 mt-0.5 leading-relaxed",
                                        children: [
                                            "To link custom domains and generate automated SSL certificates, please subscribe to any 1 of the 3 partner plans (",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "555"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                lineNumber: 60,
                                                columnNumber: 131
                                            }, this),
                                            ", ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "999"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                lineNumber: 60,
                                                columnNumber: 153
                                            }, this),
                                            ", or ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "1999"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                lineNumber: 60,
                                                columnNumber: 178
                                            }, this),
                                            ")."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab("subscription"),
                        className: "px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shrink-0 shadow-md shadow-orange-500/20 cursor-pointer flex items-center gap-1.5 self-start sm:self-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CrownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrownIcon"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "View 3 Plans →"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                lineNumber: 45,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"], {
                                        size: 18,
                                        className: "text-blue-600 dark:text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Connect Custom Domain (Add Domain)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed",
                                children: "Deploy client chat workspaces and administration under your own custom domain or subdomain. Automated Let's Encrypt Wildcard SSL is generated and renewed automatically."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleAddDomain,
                        className: "flex flex-col sm:flex-row gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"], {
                                        size: 16,
                                        className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: newDomainInput,
                                        onChange: (e)=>setNewDomainInput(e.target.value),
                                        placeholder: "e.g. portal.myagency.com or chat.companybrand.io",
                                        className: "w-full pl-10 pr-4 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-xs hover:opacity-95 shadow-md shadow-blue-500/20 flex items-center justify-center gap-1.5 cursor-pointer shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Add Domain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/60 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-blue-900 dark:text-blue-300 font-bold text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                                        size: 16,
                                        className: "text-blue-600 dark:text-blue-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Required DNS Records for Verification"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-left text-xs text-slate-700 dark:text-slate-300 border-collapse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-blue-200/60 dark:border-blue-900/40 text-[11px] font-bold text-slate-500 dark:text-slate-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-1.5 pr-4",
                                                        children: "Type"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                        lineNumber: 116,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-1.5 pr-4",
                                                        children: "Name / Host"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-1.5 pr-4",
                                                        children: "Value / Target"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-1.5 pr-4",
                                                        children: "TTL"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "py-1.5",
                                                        children: "Action"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                lineNumber: 115,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                            lineNumber: 114,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            className: "divide-y divide-blue-200/40 dark:divide-blue-900/20 font-mono text-[11px]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 font-bold text-blue-600 dark:text-blue-400",
                                                            children: "CNAME"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                            lineNumber: 125,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 text-slate-800 dark:text-slate-200",
                                                            children: "portal (or @)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                            lineNumber: 126,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 text-slate-800 dark:text-slate-200",
                                                            children: "cname.pingdart.com"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 text-slate-400",
                                                            children: "Auto"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    navigator.clipboard.writeText("cname.pingdart.com");
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("CNAME target copied!");
                                                                },
                                                                className: "text-blue-600 hover:underline flex items-center gap-1 font-sans cursor-pointer text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Copy01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Copy01Icon"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                                        lineNumber: 138,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Copy"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                                        lineNumber: 139,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                                lineNumber: 130,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                            lineNumber: 129,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 font-bold text-amber-600 dark:text-amber-400",
                                                            children: "TXT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                            lineNumber: 144,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 text-slate-800 dark:text-slate-200",
                                                            children: "@ (or _pingdart)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 text-slate-800 dark:text-slate-200",
                                                            children: "pingdart-verify=pd_res_948a27b"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2 text-slate-400",
                                                            children: "Auto"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "py-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    navigator.clipboard.writeText("pingdart-verify=pd_res_948a27b");
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("TXT record copied!");
                                                                },
                                                                className: "text-amber-600 hover:underline flex items-center gap-1 font-sans cursor-pointer text-xs",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Copy01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Copy01Icon"], {
                                                                        size: 12
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                                        lineNumber: 157,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Copy"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                                        lineNumber: 158,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                                lineNumber: 149,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-bold text-slate-900 dark:text-white",
                                    children: [
                                        "Connected Domains (",
                                        domains.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                    children: "Manage active endpoints, SSL certs, and set the default portal domain."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    domains.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 text-center bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"], {
                                size: 32,
                                className: "text-slate-400 mx-auto mb-2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                lineNumber: 183,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-bold text-slate-700 dark:text-slate-300",
                                children: "No domains added yet"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-slate-400 mt-1",
                                children: "Use the form above to connect your first domain."
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divide-y divide-slate-100 dark:divide-slate-800",
                        children: domains.map((dom)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Globe02Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Globe02Icon"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                lineNumber: 192,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 flex-wrap",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-extrabold text-slate-900 dark:text-white font-mono",
                                                                children: dom.domain
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 23
                                                            }, this),
                                                            dom.isPrimary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900",
                                                                children: "Primary Domain"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${dom.status === "active" ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900" : "bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900"}`,
                                                                children: dom.status === "active" ? "✓ Verified & SSL Active" : "Pending DNS Verification"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-[11px] text-slate-400 mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "CNAME: ",
                                                                    dom.cnameTarget
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                                lineNumber: 216,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "Added: ",
                                                                    dom.createdAt
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                                lineNumber: 218,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "SSL Valid until: ",
                                                                    dom.sslExpires
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                        lineNumber: 191,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 self-end sm:self-center shrink-0",
                                        children: [
                                            dom.status !== "active" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: isVerifyingDns,
                                                onClick: ()=>handleVerifyDns(dom.id),
                                                className: "px-3 py-1.5 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white flex items-center gap-1 cursor-pointer shadow-xs disabled:opacity-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$RefreshIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RefreshIcon"], {
                                                        size: 12,
                                                        className: isVerifyingDns ? "animate-spin" : ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Verify DNS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                lineNumber: 227,
                                                columnNumber: 21
                                            }, this),
                                            !dom.isPrimary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleSetPrimaryDomain(dom.id),
                                                className: "px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 cursor-pointer",
                                                children: "Make Primary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                lineNumber: 238,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `https://${dom.domain}`,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                className: "px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 cursor-pointer flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Link01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link01Icon"], {
                                                        size: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Test"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                lineNumber: 246,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>handleDeleteDomain(dom.id),
                                                className: "p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 cursor-pointer transition-colors",
                                                title: "Delete domain",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Delete01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Delete01Icon"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                    lineNumber: 261,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                                lineNumber: 255,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                        lineNumber: 225,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, dom.id, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                                lineNumber: 190,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c = ResellerDomainTab;
var _c;
__turbopack_context__.k.register(_c, "ResellerDomainTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResellerConfigTab",
    ()=>ResellerConfigTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Settings01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CrownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/CrownIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/types.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ResellerConfigTab({ activePlan, config, setConfig, handleSaveConfig, setActiveTab }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            !activePlan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/30 border border-amber-300 dark:border-amber-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CrownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrownIcon"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                    lineNumber: 33,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-sm font-extrabold text-amber-900 dark:text-amber-200",
                                                children: "Reseller Subscription Required"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900 text-amber-900 dark:text-amber-200 uppercase",
                                                children: "Step 1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-amber-700 dark:text-amber-300/90 mt-0.5 leading-relaxed",
                                        children: [
                                            "To save custom logos, colors, and email relays, please subscribe to any 1 of the 3 partner plans (",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "555"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 45,
                                                columnNumber: 115
                                            }, this),
                                            ", ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "999"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 45,
                                                columnNumber: 137
                                            }, this),
                                            ", or ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "1999"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 45,
                                                columnNumber: 162
                                            }, this),
                                            ")."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab("subscription"),
                        className: "px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white shrink-0 shadow-md shadow-orange-500/20 cursor-pointer flex items-center gap-1.5 self-start sm:self-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$CrownIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CrownIcon"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "View 3 Plans →"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Settings01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Settings01Icon"], {
                                                size: 18,
                                                className: "text-amber-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "White-Label Branding & Portal Configuration"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 dark:text-slate-400 mt-1",
                                        children: "Customize your company branding, primary accent colors, custom logo, and outgoing email sender headers."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSaveConfig,
                                className: "px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-xs hover:opacity-95 shadow-md shadow-orange-500/20 flex items-center gap-1.5 cursor-pointer shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Save Configuration"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 75,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1",
                                        children: "Brand / Portal Name *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: config.portalName,
                                        onChange: (e)=>setConfig({
                                                ...config,
                                                portalName: e.target.value
                                            }),
                                        placeholder: "e.g. Apex Workspace Solutions",
                                        className: "w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1",
                                        children: "Portal Tagline / Hero Subtitle"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: config.tagline,
                                        onChange: (e)=>setConfig({
                                                ...config,
                                                tagline: e.target.value
                                            }),
                                        placeholder: "e.g. Unified Team Chat & Client Workspaces",
                                        className: "w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1",
                                        children: "Custom Logo URL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: config.logoUrl,
                                        onChange: (e)=>setConfig({
                                                ...config,
                                                logoUrl: e.target.value
                                            }),
                                        placeholder: "https://yourbrand.com/logo.png",
                                        className: "w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1",
                                        children: "Custom Favicon URL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: config.faviconUrl,
                                        onChange: (e)=>setConfig({
                                                ...config,
                                                faviconUrl: e.target.value
                                            }),
                                        placeholder: "https://yourbrand.com/favicon.ico",
                                        className: "w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 124,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2",
                                children: "Portal Primary Brand Color"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 flex-wrap",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_PRESETS"].map((color)=>{
                                        const isSelected = config.primaryColor.toLowerCase() === color.hex.toLowerCase();
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setConfig({
                                                    ...config,
                                                    primaryColor: color.hex
                                                }),
                                            style: {
                                                backgroundColor: color.hex
                                            },
                                            className: `w-8 h-8 rounded-full transition-all cursor-pointer flex items-center justify-center text-white ${isSelected ? "ring-4 ring-amber-400 scale-110 shadow-md" : "hover:scale-105"}`,
                                            title: color.name,
                                            children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                                size: 14,
                                                strokeWidth: 3
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 153,
                                                columnNumber: 34
                                            }, this)
                                        }, color.name, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-1.5 ml-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-slate-400 font-mono",
                                                children: "Hex:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 158,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: config.primaryColor,
                                                onChange: (e)=>setConfig({
                                                        ...config,
                                                        primaryColor: e.target.value
                                                    }),
                                                className: "w-24 px-2 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 uppercase"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 159,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 157,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1",
                                        children: "Support Email Address"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: config.supportEmail,
                                        onChange: (e)=>setConfig({
                                                ...config,
                                                supportEmail: e.target.value
                                            }),
                                        placeholder: "support@yourbrand.com",
                                        className: "w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1",
                                        children: "Helpdesk / Knowledge Base URL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: config.helpdeskUrl,
                                        onChange: (e)=>setConfig({
                                                ...config,
                                                helpdeskUrl: e.target.value
                                            }),
                                        placeholder: "https://help.yourbrand.com",
                                        className: "w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1",
                                        children: "Terms of Service URL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: config.termsUrl,
                                        onChange: (e)=>setConfig({
                                                ...config,
                                                termsUrl: e.target.value
                                            }),
                                        placeholder: "https://yourbrand.com/terms",
                                        className: "w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1",
                                        children: "Privacy Policy URL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: config.privacyUrl,
                                        onChange: (e)=>setConfig({
                                                ...config,
                                                privacyUrl: e.target.value
                                            }),
                                        placeholder: "https://yourbrand.com/privacy",
                                        className: "w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500/40"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2 border-t border-slate-100 dark:border-slate-800 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider",
                                                children: "White-Label SMTP & Email Delivery Masking"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 228,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-slate-400",
                                                children: "Deliver client invitation emails and password resets from your own company domain."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900",
                                        children: "DKIM & SPF Supported"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[11px] font-semibold text-slate-500 mb-1",
                                                children: "Sender Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 242,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: config.smtpSenderName,
                                                onChange: (e)=>setConfig({
                                                        ...config,
                                                        smtpSenderName: e.target.value
                                                    }),
                                                placeholder: "Notifications Team",
                                                className: "w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 245,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[11px] font-semibold text-slate-500 mb-1",
                                                children: "From Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 254,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                value: config.smtpFromEmail,
                                                onChange: (e)=>setConfig({
                                                        ...config,
                                                        smtpFromEmail: e.target.value
                                                    }),
                                                placeholder: "no-reply@yourbrand.com",
                                                className: "w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 257,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-[11px] font-semibold text-slate-500 mb-1",
                                                children: "SMTP Host & Port"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                value: `${config.smtpHost}:${config.smtpPort}`,
                                                onChange: (e)=>{
                                                    const [h, p] = e.target.value.split(":");
                                                    setConfig({
                                                        ...config,
                                                        smtpHost: h || "mail.yourbrand.com",
                                                        smtpPort: Number(p) || 587
                                                    });
                                                },
                                                className: "w-full px-3 py-2 rounded-lg text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-4 flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSaveConfig,
                            className: "px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 text-white font-bold text-xs hover:opacity-95 shadow-md shadow-orange-500/20 flex items-center gap-2 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Save All Reseller Settings"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = ResellerConfigTab;
var _c;
__turbopack_context__.k.register(_c, "ResellerConfigTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResellerSubscriptionTab",
    ()=>ResellerSubscriptionTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.mjs [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.mjs [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.mjs [app-client] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUserCurrency.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const RESELLER_PACKAGES = [
    {
        id: "555",
        name: "Starter White-Label",
        badge: "Package 555",
        tagline: "Entry white-label package for solo consultants and boutique service providers launching their first branded portal.",
        monthlyPriceInr: 555,
        annualPriceInr: 6660,
        monthlyPriceUsd: 6.99,
        annualPriceUsd: 83.88,
        domains: "1 Custom Domain",
        storage: "100 GB Storage",
        subAccounts: "50 Sub-Accounts",
        features: [
            "1 Custom Domain with auto SSL certificate",
            "Full White-Labeling (logo, portal name, brand colors)",
            "Up to 50 Client Sub-Accounts with self-serve login",
            "100 GB High-Performance Encrypted Workspace Storage",
            "Standard REST API & Webhook Dispatch",
            "Community & Standard Partner Support"
        ]
    },
    {
        id: "999",
        name: "Pro Reseller Partner",
        badge: "Package 999",
        isPopular: true,
        tagline: "Built for scaling digital agencies, MSPs, and IT vendors serving multiple business clients under their umbrella.",
        monthlyPriceInr: 999,
        annualPriceInr: 11988,
        monthlyPriceUsd: 11.99,
        annualPriceUsd: 143.88,
        domains: "5 Custom Domains",
        storage: "500 GB Storage",
        subAccounts: "250 Sub-Accounts",
        features: [
            "5 Custom Domains with Wildcard SSL",
            "100% Zero-PingDart Brand Masking",
            "Up to 250 Client Sub-Accounts with role-based access",
            "500 GB Dedicated Encrypted Workspace Storage",
            "Custom Outgoing SMTP & Email Delivery Server",
            "Automated Client Invoicing & Billing Ledger",
            "Priority 24/7 Partner Engineering Support"
        ]
    },
    {
        id: "1999",
        name: "Enterprise Franchise",
        badge: "Package 1999",
        tagline: "Unrestricted franchise infrastructure for telecoms, large SaaS aggregators, and enterprise network operators.",
        monthlyPriceInr: 1999,
        annualPriceInr: 23988,
        monthlyPriceUsd: 19.99,
        annualPriceUsd: 239.88,
        domains: "Unlimited Domains",
        storage: "2 TB Storage",
        subAccounts: "Unlimited Accounts",
        features: [
            "Unlimited Custom Domains & Multi-Tenant Routing",
            "Complete Code-Level CSS & Custom Theme Injection",
            "Unlimited Client Sub-Accounts with high concurrency",
            "2 TB Dedicated Isolated Cloud Storage & Database",
            "Custom Branded Mobile App Builds (Android / iOS)",
            "99.99% Guaranteed SLA with Multi-Region Failover",
            "Dedicated 1-on-1 Solutions Architect & VIP Hotline"
        ]
    }
];
function ResellerSubscriptionTab({ activePlan, selectedCurrency: propCurrency, handleCurrencyChange, billingCycle, setBillingCycle, onSelectPackage, setActiveTab }) {
    _s();
    const { currencyCode: hookCurrency, currency: userCurrency, setCurrency, formatAmount, supportedCurrencies } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserCurrency"])();
    const currentCurrency = (propCurrency || hookCurrency || userCurrency || "USD").toUpperCase();
    const isINR = currentCurrency === "INR";
    const TAX_RATE = 0.18;
    const isIndia = isINR;
    const taxLabel = isIndia ? "GST (18%)" : "Tax (18%)";
    const onCurrencySelect = (code)=>{
        setCurrency(code, true);
        handleCurrencyChange === null || handleCurrencyChange === void 0 ? void 0 : handleCurrencyChange(code);
    };
    const getPackageCalculations = (pkg)=>{
        const isAnnual = billingCycle === "annual";
        const monthlyBase = isINR ? pkg.monthlyPriceInr : pkg.monthlyPriceUsd;
        const baseCost = isAnnual ? monthlyBase * 12 : monthlyBase;
        const taxAmount = isINR ? Math.round(baseCost * TAX_RATE) : Number((baseCost * TAX_RATE).toFixed(2));
        const totalAmount = isINR ? baseCost + taxAmount : Number((baseCost + taxAmount).toFixed(2));
        const formatVal = (val)=>{
            if (isINR) {
                return `₹${Math.round(val).toLocaleString("en-IN")}`;
            }
            if (currentCurrency === "USD") {
                return `$${val.toFixed(2)}`;
            }
            return formatAmount(val, currentCurrency);
        };
        return {
            monthlyBase,
            baseCost,
            taxAmount,
            totalAmount,
            formattedMonthlyBase: formatVal(monthlyBase),
            formattedBaseCost: formatVal(baseCost),
            formattedTaxAmount: formatVal(taxAmount),
            formattedTotal: formatVal(totalAmount)
        };
    };
    const activePackage = RESELLER_PACKAGES.find((p)=>p.id === activePlan);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden rounded-[10px] p-4 sm:p-6 bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 text-white shadow-lg border border-indigo-700/50 select-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5 min-w-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-black uppercase tracking-wider text-indigo-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                                size: 11,
                                                className: "text-amber-300"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 190,
                                                columnNumber: 15
                                            }, this),
                                            activePlan ? `Active Reseller Subscription • Tier ${activePlan}` : "Reseller Partner Subscription Required"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: activePlan ? `${(activePackage === null || activePackage === void 0 ? void 0 : activePackage.name) || `Tier ${activePlan}`} Plan` : "Choose Your Reseller Partner Plan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this),
                                            activePlan ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        size: 11
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Active"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-black bg-amber-400/25 text-amber-200 border border-amber-400/40 px-2.5 py-0.5 rounded-full",
                                                children: "Step 1 Required"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 194,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-indigo-200 leading-snug",
                                        children: activePlan ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Package: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-white",
                                                    children: activePlan
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 28
                                                }, this),
                                                " • Billed: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-white capitalize",
                                                    children: billingCycle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 91
                                                }, this),
                                                " • Domains: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-white",
                                                    children: (activePackage === null || activePackage === void 0 ? void 0 : activePackage.domains) || "5 Custom"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 168
                                                }, this),
                                                " • Storage: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-white",
                                                    children: (activePackage === null || activePackage === void 0 ? void 0 : activePackage.storage) || "500 GB"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 258
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                "Select any 1 tier to unlock your white-label infrastructure. Powered by ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    className: "text-white",
                                                    children: "PingDart Universal Currency Engine"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 91
                                                }, this),
                                                "."
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-indigo-100/90 max-w-xl",
                                        children: "Unpaid plans: paid services stay available for 7 days after expiry (grace period). On day 15, workspace is terminated. INR via Razorpay (UPI/Cards) or USD via PayPal."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row items-center gap-2.5 shrink-0",
                                children: [
                                    activePlan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "button",
                                        onClick: ()=>setActiveTab("domain"),
                                        className: "w-full sm:w-auto h-9 px-3.5 rounded-[8px] bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 cursor-pointer flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Manage Domains →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-black/35 backdrop-blur-md p-1 rounded-[10px] border border-white/15 flex items-center shrink-0 w-full sm:w-auto justify-center shadow-inner",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setBillingCycle("monthly"),
                                                className: `flex-1 sm:flex-none px-4 py-1.5 rounded-[8px] text-xs font-bold transition-all flex items-center justify-center active:scale-95 cursor-pointer ${billingCycle === "monthly" ? "bg-white text-indigo-950 shadow-md font-black" : "text-indigo-200 hover:text-white"}`,
                                                children: "Monthly"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 239,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setBillingCycle("annual"),
                                                className: `flex-1 sm:flex-none px-4 py-1.5 rounded-[8px] text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-95 cursor-pointer ${billingCycle === "annual" ? "bg-white text-indigo-950 shadow-md font-black" : "text-indigo-200 hover:text-white"}`,
                                                children: [
                                                    "Yearly",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-indigo-500/80 text-white text-[9px] px-1.5 py-0.5 rounded-full font-black",
                                                        children: "12 Mos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 250,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 238,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-2.5 sm:p-3 rounded-[10px] bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                className: "w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Pricing & Payment Currency"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-slate-200/70 dark:bg-slate-900 p-0.5 rounded-[10px] border border-slate-300/60 dark:border-slate-700 flex items-center shadow-xs shrink-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onCurrencySelect("USD"),
                                        className: `px-3 h-7 rounded-[8px] text-xs font-bold transition-all flex items-center gap-1 cursor-pointer active:scale-95 ${currentCurrency === "USD" ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow-xs font-black" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "🇺🇸"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 288,
                                                columnNumber: 15
                                            }, this),
                                            " USD"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onCurrencySelect("INR"),
                                        className: `px-3 h-7 rounded-[8px] text-xs font-bold transition-all flex items-center gap-1 cursor-pointer active:scale-95 ${currentCurrency === "INR" ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow-xs font-black" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "🇮🇳"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, this),
                                            " INR"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 290,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: currentCurrency,
                                onChange: (e)=>onCurrencySelect(e.target.value),
                                className: "text-xs font-bold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-[8px] px-2 h-8 text-slate-700 dark:text-slate-300 cursor-pointer focus:outline-hidden",
                                title: "Select Currency",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "USD",
                                        children: "🇺🇸 USD ($)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "INR",
                                        children: "🇮🇳 INR (₹)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 311,
                                        columnNumber: 13
                                    }, this),
                                    supportedCurrencies.filter((c)=>c.code !== "USD" && c.code !== "INR").map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: c.code,
                                            children: [
                                                c.flag,
                                                " ",
                                                c.code,
                                                " (",
                                                c.symbol,
                                                ")"
                                            ]
                                        }, c.code, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                            lineNumber: 315,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6 pt-2",
                children: RESELLER_PACKAGES.map((pkg)=>{
                    const isCurrent = activePlan === pkg.id;
                    const pricing = getPackageCalculations(pkg);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative rounded-[10px] border flex flex-col p-4 sm:p-6 space-y-3 transition-all duration-300 ${pkg.isPopular ? "bg-gradient-to-b from-indigo-50/70 via-white to-white dark:from-indigo-950/40 dark:via-slate-900 dark:to-slate-900 border-indigo-500 shadow-md ring-2 ring-indigo-500/20" : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-xs"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pb-3 border-b border-slate-100 dark:border-slate-800 space-y-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "text-lg font-black tracking-tight text-slate-900 dark:text-white",
                                                children: pkg.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 341,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 shrink-0",
                                                children: [
                                                    pkg.isPopular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                size: 10
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                                lineNumber: 347,
                                                                columnNumber: 25
                                                            }, this),
                                                            " Popular"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                        lineNumber: 346,
                                                        columnNumber: 23
                                                    }, this),
                                                    isCurrent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-bold px-2 py-0.5 rounded-full border bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800",
                                                        children: "Current Plan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                        lineNumber: 351,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 344,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 340,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2",
                                        children: pkg.tagline
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 358,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pt-1.5 space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-baseline gap-1.5 flex-wrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight",
                                                        children: pricing.formattedTotal
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-slate-500 font-bold",
                                                        children: billingCycle === "annual" ? "/year" : "/month"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                        lineNumber: 367,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-extrabold px-1.5 py-0.5 rounded-sm bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-300/40",
                                                        children: [
                                                            "incl. 18% ",
                                                            isINR ? "GST" : "Tax"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                        lineNumber: 370,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 363,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[11px] text-slate-500 dark:text-slate-400 font-medium",
                                                children: billingCycle === "annual" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Base: ",
                                                        pricing.formattedBaseCost,
                                                        " (",
                                                        pricing.formattedMonthlyBase,
                                                        "/mo × 12) + ",
                                                        pricing.formattedTaxAmount,
                                                        " ",
                                                        taxLabel
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Base: ",
                                                        pricing.formattedBaseCost,
                                                        "/mo + ",
                                                        pricing.formattedTaxAmount,
                                                        " ",
                                                        taxLabel
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 375,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 362,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 339,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-2.5 flex flex-wrap gap-1.5 text-[11px] font-bold border-b border-slate-100 dark:border-slate-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-lg flex items-center gap-1 border border-emerald-200/60 dark:border-emerald-800/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 392,
                                                columnNumber: 19
                                            }, this),
                                            pkg.domains
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 391,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 px-2.5 py-1 rounded-lg flex items-center gap-1 border border-indigo-200/60 dark:border-indigo-800/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 396,
                                                columnNumber: 19
                                            }, this),
                                            pkg.storage
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 395,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 px-2.5 py-1 rounded-lg flex items-center gap-1 border border-purple-200/60 dark:border-purple-800/60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 12
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 400,
                                                columnNumber: 19
                                            }, this),
                                            pkg.subAccounts
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 399,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 390,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-3 flex-1 space-y-2 text-xs text-slate-700 dark:text-slate-300",
                                children: pkg.features.map((feat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 409,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "leading-snug text-xs font-medium",
                                                children: feat
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 410,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 408,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 406,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-2 mt-auto border-t border-slate-100 dark:border-slate-800 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        disabled: isCurrent,
                                        onClick: ()=>onSelectPackage(pkg.id),
                                        className: `w-full rounded-[10px] h-10 text-xs font-extrabold shadow-xs transition-all flex items-center justify-center cursor-pointer ${isCurrent ? "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-default" : pkg.isPopular ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 active:scale-98" : "bg-slate-900 hover:bg-black dark:bg-slate-800 dark:hover:bg-slate-700 text-white active:scale-98"}`,
                                        children: isCurrent ? "Active Plan" : `Choose ${pkg.name}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 417,
                                        columnNumber: 17
                                    }, this),
                                    !isCurrent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>onSelectPackage(pkg.id),
                                        className: "w-full h-8 text-[11px] font-black rounded-[8px] border border-amber-300/80 dark:border-amber-700/60 bg-gradient-to-r from-amber-50 to-orange-50 hover:from-amber-100 hover:to-orange-100 dark:from-amber-950/40 dark:to-orange-950/40 dark:hover:from-amber-900/40 dark:hover:to-orange-900/40 text-amber-900 dark:text-amber-200 transition-all flex items-center justify-center gap-1.5 active:scale-98 cursor-pointer shadow-2xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                size: 11,
                                                className: "text-amber-500 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 437,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Apply Promo / Checkout"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                                lineNumber: 438,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 432,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 416,
                                columnNumber: 15
                            }, this)
                        ]
                    }, pkg.id, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                        lineNumber: 330,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-[10px] border border-amber-200 bg-amber-50 p-3.5 dark:border-amber-900/50 dark:bg-amber-950/30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-1.5 text-[11px] font-black uppercase tracking-wider text-amber-800 dark:text-amber-200",
                                children: "Reseller Partner Terms & Provisioning Policy"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 450,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1 text-[11px] leading-snug text-amber-900/90 dark:text-amber-100/90",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• White-label permissions unlock instantly upon verified payment or proforma generation."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 454,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Paid partner plans must be renewed on or before the renewal date."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 455,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• All plan subscriptions include 18% GST/Tax (Yearly: 12 months base + 18% tax; Monthly: 1 month base + 18% tax)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 456,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• If renewal payment is missed, services stay fully active for 7 days (grace period)."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 457,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• On day 15, unpaid workspace is marked terminated. Renew anytime to restore your custom domains and tenant portals."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 458,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "• Payments charged in INR via Razorpay (UPI/Cards) or USD via PayPal only."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 459,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 453,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "py-2.5 px-3.5 rounded-[10px] bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-1.5 text-[11px] text-slate-600 dark:text-slate-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        size: 14,
                                        className: "text-emerald-500 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 466,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "256-bit Bank SSL"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 467,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 465,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline text-slate-300 dark:text-slate-700",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 469,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                        size: 13,
                                        className: "text-amber-500 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 471,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Instant Setup"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 472,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 470,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline text-slate-300 dark:text-slate-700",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 474,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                        size: 13,
                                        className: "text-indigo-500 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 476,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Cancel Anytime"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 475,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline text-slate-300 dark:text-slate-700",
                                children: "•"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 479,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                        size: 13,
                                        className: "text-indigo-500 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 481,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "White-Label Masking Guarantee"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                        lineNumber: 482,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                                lineNumber: 480,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                        lineNumber: 464,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
_s(ResellerSubscriptionTab, "65zxBCGNpDGSjHL61STuAnHZKHk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserCurrency"]
    ];
});
_c = ResellerSubscriptionTab;
var _c;
__turbopack_context__.k.register(_c, "ResellerSubscriptionTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResellerTenantsTab",
    ()=>ResellerTenantsTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/types.ts [app-client] (ecmascript)");
"use client";
;
;
;
function ResellerTenantsTab({ tenants, activeDomainName, selectedCurrency, onOpenAddTenant }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"], {
                                            size: 18,
                                            className: "text-amber-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                            lineNumber: 26,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Client Tenant Workspaces (",
                                                tenants.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500 dark:text-slate-400 mt-1",
                                    children: "Workspaces provisioned under your reseller portal with delegated admin rights and plan quotas."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onOpenAddTenant,
                            className: "px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-xs hover:opacity-95 shadow-md shadow-orange-500/20 flex items-center gap-1.5 cursor-pointer shrink-0 self-start sm:self-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "+ Provision New Tenant"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                tenants.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 text-center bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"], {
                            size: 32,
                            className: "text-slate-400 mx-auto mb-1"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-bold text-slate-700 dark:text-slate-300",
                            children: "No client tenants provisioned yet"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] text-slate-400 max-w-sm mx-auto",
                            children: 'Click "+ Provision New Tenant" to create your first client organization workspace with seat quotas.'
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-left text-xs border-collapse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2.5 px-3",
                                            children: "Tenant Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                            lineNumber: 56,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2.5 px-3",
                                            children: "Subdomain"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                            lineNumber: 57,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2.5 px-3",
                                            children: "Admin Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                            lineNumber: 58,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2.5 px-3",
                                            children: "Plan Tier"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                            lineNumber: 59,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2.5 px-3",
                                            children: "Seats"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2.5 px-3",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                            lineNumber: 61,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "py-2.5 px-3",
                                            children: "Created"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-200",
                                children: tenants.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-slate-50 dark:hover:bg-slate-800/40",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-3 font-bold text-slate-900 dark:text-white",
                                                children: t.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                                lineNumber: 68,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-3 font-mono text-blue-600 dark:text-blue-400",
                                                children: [
                                                    t.subdomain,
                                                    ".",
                                                    activeDomainName ? activeDomainName.replace(/^portal\./, "") : "yourbrand.com"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                                lineNumber: 71,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-3 text-slate-500",
                                                children: t.adminEmail
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                                lineNumber: 74,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded font-extrabold text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700",
                                                    children: [
                                                        "Tier ",
                                                        t.plan,
                                                        " (",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyAmount"])(Number(t.plan), selectedCurrency),
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                                lineNumber: 75,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-3 font-semibold",
                                                children: t.seats
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                                lineNumber: 80,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900",
                                                    children: "Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "py-3 px-3 text-slate-400",
                                                children: t.createdAt
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                                lineNumber: 86,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, t.id, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                        lineNumber: 67,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                        lineNumber: 53,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = ResellerTenantsTab;
var _c;
__turbopack_context__.k.register(_c, "ResellerTenantsTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResellerDnsGuideTab",
    ()=>ResellerDnsGuideTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Shield01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
"use client";
;
;
function ResellerDnsGuideTab({ setActiveTab }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Shield01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Shield01Icon"], {
                            size: 20,
                            className: "text-blue-600 dark:text-blue-400"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-base font-bold text-slate-900 dark:text-white",
                                    children: "DNS Setup & Automated SSL Guide"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                    children: "Step-by-step DNS pointing guide for common registrar providers."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-4 pt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-extrabold text-blue-600 dark:text-blue-400 uppercase",
                                    children: "Cloudflare"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-slate-500 dark:text-slate-400",
                                    children: [
                                        "Add a CNAME record with Proxy status turned ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "DNS Only (Grey Cloud)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                                            lineNumber: 33,
                                            columnNumber: 59
                                        }, this),
                                        " for automated Let's Encrypt renewal."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-extrabold text-amber-600 dark:text-amber-400 uppercase",
                                    children: "GoDaddy / Namecheap"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-slate-500 dark:text-slate-400",
                                    children: [
                                        "In the DNS Zone Editor, create CNAME pointing host ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "font-mono text-blue-500",
                                            children: "portal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                                            lineNumber: 42,
                                            columnNumber: 66
                                        }, this),
                                        " to ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "font-mono text-blue-500",
                                            children: "cname.pingdart.com"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                                            lineNumber: 42,
                                            columnNumber: 125
                                        }, this),
                                        " with TTL 300."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-extrabold text-emerald-600 dark:text-emerald-400 uppercase",
                                    children: "AWS Route 53"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-slate-500 dark:text-slate-400",
                                    children: [
                                        "Create standard CNAME routing traffic to ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "font-mono text-blue-500",
                                            children: "cname.pingdart.com"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                                            lineNumber: 51,
                                            columnNumber: 56
                                        }, this),
                                        " without alias."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/60 flex items-center justify-between text-xs text-emerald-800 dark:text-emerald-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                    size: 16,
                                    className: "text-emerald-500 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "PingDart Edge SSL automatically provisions a dedicated 2048-bit TLS certificate within 60 seconds of DNS propagation."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setActiveTab("domain"),
                            className: "px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs cursor-pointer shrink-0",
                            children: "Go to Add Domain →"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = ResellerDnsGuideTab;
var _c;
__turbopack_context__.k.register(_c, "ResellerDnsGuideTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResellerSmtpTab",
    ()=>ResellerSmtpTab
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Mail01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/Tick01Icon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function ResellerSmtpTab({ config, setConfig, handleSaveConfig, userEmail }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Mail01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mail01Icon"], {
                                    size: 20,
                                    className: "text-amber-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-base font-bold text-slate-900 dark:text-white",
                                            children: "White-Label Outgoing SMTP & Email Delivery"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                                            lineNumber: 28,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-slate-500 dark:text-slate-400",
                                            children: "Deliver tenant onboarding invites and password resets directly from your verified company email domain."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleSaveConfig,
                            className: "px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-xs hover:opacity-95 shadow-md shadow-orange-500/20 flex items-center gap-1.5 cursor-pointer shrink-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$Tick01Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tick01Icon"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Save SMTP Settings"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1",
                                    children: "Outgoing Sender Name"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: config.smtpSenderName,
                                    onChange: (e)=>setConfig({
                                            ...config,
                                            smtpSenderName: e.target.value
                                        }),
                                    placeholder: "Notifications Team",
                                    className: "w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1",
                                    children: "From Email Address"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    value: config.smtpFromEmail,
                                    onChange: (e)=>setConfig({
                                            ...config,
                                            smtpFromEmail: e.target.value
                                        }),
                                    placeholder: "no-reply@youragency.com",
                                    className: "w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1",
                                    children: "SMTP Host"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: config.smtpHost,
                                    onChange: (e)=>setConfig({
                                            ...config,
                                            smtpHost: e.target.value
                                        }),
                                    placeholder: "smtp.sendgrid.net or mail.yourbrand.com",
                                    className: "w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-mono"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1",
                                    children: "SMTP Port"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "number",
                                    value: config.smtpPort,
                                    onChange: (e)=>setConfig({
                                            ...config,
                                            smtpPort: Number(e.target.value) || 587
                                        }),
                                    className: "w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-mono"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-2 flex items-center justify-between text-xs text-slate-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "TLS / SSL encryption: Enabled (STARTTLS on port 587 or SSL on 465)"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Test email sent to " + (userEmail || "admin@yourdomain.com")),
                            className: "px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold cursor-pointer",
                            children: "Send Test Email"
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = ResellerSmtpTab;
var _c;
__turbopack_context__.k.register(_c, "ResellerSmtpTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/reseller/components/tabs/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerOverviewTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerDomainTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerConfigTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerSubscriptionTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerTenantsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerDnsGuideTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerSmtpTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx [app-client] (ecmascript)");
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
"[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddTenantModal",
    ()=>AddTenantModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/hugeicons-react/dist/esm/icons/UserGroupIcon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/types.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function AddTenantModal({ isOpen, onClose, onSubmit, newTenantForm, setNewTenantForm, activeDomainName, selectedCurrency }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.95,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                exit: {
                    scale: 0.95,
                    opacity: 0
                },
                className: "w-full max-w-md rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$UserGroupIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserGroupIcon"], {
                                        size: 16,
                                        className: "text-amber-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Provision Client Tenant Workspace"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                lineNumber: 50,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: onSubmit,
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1",
                                        children: "Client Organization Name *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                        lineNumber: 61,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        required: true,
                                        value: newTenantForm.name,
                                        onChange: (e)=>setNewTenantForm({
                                                ...newTenantForm,
                                                name: e.target.value
                                            }),
                                        placeholder: "e.g. Apex Global Advisors",
                                        className: "w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1",
                                        children: "Subdomain Prefix *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                value: newTenantForm.subdomain,
                                                onChange: (e)=>setNewTenantForm({
                                                        ...newTenantForm,
                                                        subdomain: e.target.value
                                                    }),
                                                placeholder: "apex",
                                                className: "flex-1 px-3 py-2 text-xs rounded-l-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono text-slate-900 dark:text-slate-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2.5 py-2 text-[11px] font-mono bg-slate-100 dark:bg-slate-700 border border-l-0 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 rounded-r-xl",
                                                children: [
                                                    ".",
                                                    activeDomainName ? activeDomainName.replace(/^portal\./, "") : "yourbrand.com"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1",
                                        children: "Client Admin Email *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        required: true,
                                        value: newTenantForm.adminEmail,
                                        onChange: (e)=>setNewTenantForm({
                                                ...newTenantForm,
                                                adminEmail: e.target.value
                                            }),
                                        placeholder: "admin@apexadvisors.com",
                                        className: "w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                lineNumber: 93,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1",
                                                children: "Assigned Plan"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: newTenantForm.plan,
                                                onChange: (e)=>setNewTenantForm({
                                                        ...newTenantForm,
                                                        plan: e.target.value
                                                    }),
                                                className: "w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "555",
                                                        children: [
                                                            "555 (",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyAmount"])(555, selectedCurrency),
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "999",
                                                        children: [
                                                            "999 (",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyAmount"])(999, selectedCurrency),
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "1999",
                                                        children: [
                                                            "1999 (",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyAmount"])(1999, selectedCurrency),
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                        lineNumber: 108,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1",
                                                children: "Max Seats"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "number",
                                                value: newTenantForm.seats,
                                                onChange: (e)=>setNewTenantForm({
                                                        ...newTenantForm,
                                                        seats: Number(e.target.value)
                                                    }),
                                                min: 1,
                                                max: 1000,
                                                className: "w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                lineNumber: 107,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-3 flex justify-end gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: onClose,
                                        className: "px-4 py-2 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer",
                                        children: "Cancel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white shadow-md cursor-pointer",
                                        children: "Create Workspace"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                                lineNumber: 137,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
                lineNumber: 39,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
            lineNumber: 38,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = AddTenantModal;
var _c;
__turbopack_context__.k.register(_c, "AddTenantModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/services/couponApi.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "couponApi",
    ()=>couponApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/api.ts [app-client] (ecmascript)");
;
const couponApi = {
    // Validate a coupon for checkout
    validateCoupon: async (payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/coupons/validate", payload);
        return res.data;
    },
    // Admin: list coupons with query filters
    listCoupons: async (params)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/coupons/admin", {
            params
        });
        return res.data;
    },
    // Admin: create single coupon
    createCoupon: async (data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/coupons/admin", data);
        return res.data;
    },
    // Admin: update coupon
    updateCoupon: async (id, data)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].put(`/coupons/admin/${id}`, data);
        return res.data;
    },
    // Admin: delete coupon
    deleteCoupon: async (id)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].delete(`/coupons/admin/${id}`);
        return res.data;
    },
    // Admin: bulk generate coupons
    bulkGenerate: async (payload)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].post("/coupons/admin/bulk", payload);
        return res.data;
    },
    // Admin: analytics summary
    getAnalytics: async ()=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/coupons/admin/analytics");
        return res.data;
    },
    // Admin: usage logs
    getUsageLogs: async (params)=>{
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/coupons/admin/logs", {
            params
        });
        return res.data;
    },
    // Alias for listCoupons
    getAll: async (params)=>{
        var _res_data_data, _res_data, _res_data1, _res_data2;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].get("/coupons/admin", {
            params
        });
        return ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : (_res_data_data = _res_data.data) === null || _res_data_data === void 0 ? void 0 : _res_data_data.coupons) || ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.coupons) || ((_res_data2 = res.data) === null || _res_data2 === void 0 ? void 0 : _res_data2.data) || res.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckoutModal",
    ()=>CheckoutModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.mjs [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.mjs [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.mjs [app-client] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.mjs [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.mjs [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.mjs [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.mjs [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.mjs [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUserCurrency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$couponApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/couponApi.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$resellerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/resellerApi.ts [app-client] (ecmascript)");
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
const RESELLER_TIER_DETAILS = {
    "555": {
        name: "Starter White-Label",
        monthlyPriceInr: 555,
        annualPriceInr: 6660,
        monthlyPriceUsd: 6.99,
        annualPriceUsd: 83.88,
        domains: "1 Custom Domain",
        subAccounts: "50 Client Accounts",
        storage: "100 GB Storage",
        tagline: "Entry white-label package for solo consultants and boutique service providers."
    },
    "999": {
        name: "Pro Reseller Partner",
        monthlyPriceInr: 999,
        annualPriceInr: 11988,
        monthlyPriceUsd: 11.99,
        annualPriceUsd: 143.88,
        domains: "5 Custom Domains",
        subAccounts: "250 Client Accounts",
        storage: "500 GB Storage",
        tagline: "Built for scaling digital agencies, MSPs, and IT vendors serving multiple business clients."
    },
    "1999": {
        name: "Enterprise White-Label",
        monthlyPriceInr: 1999,
        annualPriceInr: 23988,
        monthlyPriceUsd: 19.99,
        annualPriceUsd: 239.88,
        domains: "Unlimited Domains",
        subAccounts: "Unlimited Accounts",
        storage: "2 TB Storage",
        tagline: "Unrestricted franchise infrastructure for telecoms, SaaS aggregators, and networks."
    }
};
function CheckoutModal({ pkg, onClose, selectedCurrency: propCurrency, billingCycle, setBillingCycle, onSuccess, onCompletePayment }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { currencyCode: hookCurrency, formatAmount, currency: userCurrency, setCurrency } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserCurrency"])();
    const activeCurrency = (propCurrency || hookCurrency || userCurrency || "USD").toUpperCase();
    const isINR = activeCurrency === "INR";
    const [paymentGateway, setPaymentGateway] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(isINR ? "razorpay" : "paypal");
    const [isPaying, setIsPaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkoutOrder, setCheckoutOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Coupon / Promo Code State
    const [couponInput, setCouponInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isValidatingCoupon, setIsValidatingCoupon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [appliedCoupon, setAppliedCoupon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [couponError, setCouponError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Plan terms matching SubscriptionSettings
    const planTerms = [
        "Paid plans must be renewed on or before the renewal date.",
        "If payment is missed, paid services stay available for 7 days after expiry (grace period).",
        "On day 8, paid services stop. Campaigns, sub-accounts, custom domains revert to the starter configuration.",
        "On day 15, the unpaid reseller workspace is marked terminated. Renew to restore previous settings.",
        "Renewal is charged in INR (Razorpay) or USD (PayPal) only."
    ];
    const userDomain = ((user === null || user === void 0 ? void 0 : user.email) || "").split("@")[1] || "yourdomain.com";
    const tier = pkg ? RESELLER_TIER_DETAILS[pkg] : null;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutModal.useEffect": ()=>{
            if (isINR) {
                setPaymentGateway("razorpay");
            } else {
                setPaymentGateway("paypal");
            }
        }
    }["CheckoutModal.useEffect"], [
        isINR
    ]);
    // Tax and Price Calculations (Yearly: month cost * 12 + 18% tax; Monthly: month cost + 18% tax)
    const TAX_RATE = 0.18;
    const isIndia = isINR;
    const taxLabel = isIndia ? "GST (18%)" : "Tax (18%)";
    const monthlyCost = tier ? isINR ? tier.monthlyPriceInr : tier.monthlyPriceUsd : 0;
    const baseCost = tier ? billingCycle === "annual" ? monthlyCost * 12 : monthlyCost : 0;
    const taxAmount = isINR ? Math.round(baseCost * TAX_RATE) : Number((baseCost * TAX_RATE).toFixed(2));
    const subtotalWithTax = isINR ? baseCost + taxAmount : Number((baseCost + taxAmount).toFixed(2));
    const discountAmount = appliedCoupon ? appliedCoupon.discountAmount : 0;
    const finalAmount = Math.max(0, isINR ? Math.round(subtotalWithTax - discountAmount) : Number((subtotalWithTax - discountAmount).toFixed(2)));
    const isFreePlan = Boolean(appliedCoupon === null || appliedCoupon === void 0 ? void 0 : appliedCoupon.isFree) || (appliedCoupon ? finalAmount <= 0 : false);
    const formattedMonthlyCost = formatAmount(monthlyCost, activeCurrency);
    const formattedBaseCost = formatAmount(baseCost, activeCurrency);
    const formattedTaxAmount = formatAmount(taxAmount, activeCurrency);
    const formattedDiscountAmount = formatAmount(discountAmount, activeCurrency);
    const formattedFinalPrice = formatAmount(finalAmount, activeCurrency);
    // Coupon handling
    const handleApplyCoupon = async ()=>{
        const code = couponInput.trim();
        if (!code || !pkg) return;
        setIsValidatingCoupon(true);
        setCouponError(null);
        try {
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$couponApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["couponApi"].validateCoupon({
                code,
                planSlug: `reseller-${pkg}`,
                billingCycle: billingCycle === "annual" ? "yearly" : "monthly",
                currency: isINR ? "INR" : "USD"
            });
            if (res.success && res.data) {
                setAppliedCoupon(res.data);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Coupon ${code} applied successfully!`);
            } else {
                setCouponError(res.message || "Invalid or expired coupon code");
            }
        } catch (err) {
            var _err_response_data, _err_response;
            setCouponError((err === null || err === void 0 ? void 0 : (_err_response = err.response) === null || _err_response === void 0 ? void 0 : (_err_response_data = _err_response.data) === null || _err_response_data === void 0 ? void 0 : _err_response_data.message) || (err === null || err === void 0 ? void 0 : err.message) || "Invalid coupon code");
        } finally{
            setIsValidatingCoupon(false);
        }
    };
    const handleRemoveCoupon = ()=>{
        setAppliedCoupon(null);
        setCouponInput("");
        setCouponError(null);
    };
    // Script Loaders
    const loadRazorpayScript = ()=>{
        return new Promise((resolve)=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (window.Razorpay) return resolve(true);
            const script = document.createElement("script");
            script.id = "razorpay-checkout-sdk";
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = ()=>resolve(true);
            script.onerror = ()=>resolve(false);
            document.body.appendChild(script);
        });
    };
    const loadPayPalScript = ()=>{
        return new Promise((resolve)=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (window.paypal) return resolve(true);
            const clientId = ("TURBOPACK compile-time value", "paypal_live_pingdart_client_id") || "sb";
            const existing = document.getElementById("paypal-js-sdk");
            if (existing) return resolve(Boolean(window.paypal));
            const script = document.createElement("script");
            script.id = "paypal-js-sdk";
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
            script.onload = ()=>resolve(true);
            script.onerror = ()=>resolve(false);
            document.body.appendChild(script);
        });
    };
    // Mount PayPal Smart Buttons
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutModal.useEffect": ()=>{
            let isMounted = true;
            if (pkg && paymentGateway === "paypal" && !isINR && !isFreePlan) {
                loadPayPalScript().then({
                    "CheckoutModal.useEffect": (isLoaded)=>{
                        var _paypal;
                        if (!isMounted || !isLoaded) return;
                        const container = document.getElementById("paypal-button-container-reseller");
                        if (container && ((_paypal = window.paypal) === null || _paypal === void 0 ? void 0 : _paypal.Buttons)) {
                            container.innerHTML = "";
                            let pingOrderId = "";
                            try {
                                window.paypal.Buttons({
                                    style: {
                                        layout: "vertical",
                                        color: "gold",
                                        shape: "rect",
                                        label: "paypal"
                                    },
                                    createOrder: {
                                        "CheckoutModal.useEffect": async ()=>{
                                            var _res_data, _res_data1;
                                            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$resellerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resellerApi"].createCheckoutOrder({
                                                pkg,
                                                billingCycle,
                                                currency: "USD",
                                                paymentMethod: "paypal",
                                                couponCode: appliedCoupon ? appliedCoupon.coupon.code : undefined
                                            });
                                            if (!res.success) throw new Error(res.message || "Could not create PayPal order");
                                            if (((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.free) || ((_res_data1 = res.data) === null || _res_data1 === void 0 ? void 0 : _res_data1.activated)) {
                                                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(pkg, res.data);
                                                onCompletePayment === null || onCompletePayment === void 0 ? void 0 : onCompletePayment();
                                                onClose();
                                                throw new Error("FREE_PLAN");
                                            }
                                            pingOrderId = res.data.orderId;
                                            setCheckoutOrder(res.data);
                                            return res.data.gatewayOrderId;
                                        }
                                    }["CheckoutModal.useEffect"],
                                    onApprove: {
                                        "CheckoutModal.useEffect": async (data)=>{
                                            setIsPaying(true);
                                            try {
                                                const verify = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$resellerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resellerApi"].verifyPayment({
                                                    orderId: pingOrderId,
                                                    paypalOrderId: data.orderID,
                                                    paymentMethod: "paypal"
                                                });
                                                if (!verify.success) throw new Error(verify.message || "PayPal verification failed");
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(verify.message || `🎉 Successfully activated Tier ${pkg}!`);
                                                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(pkg, verify.data);
                                                onCompletePayment === null || onCompletePayment === void 0 ? void 0 : onCompletePayment();
                                                onClose();
                                            } catch (err) {
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((err === null || err === void 0 ? void 0 : err.message) || "PayPal verification failed");
                                            } finally{
                                                setIsPaying(false);
                                            }
                                        }
                                    }["CheckoutModal.useEffect"],
                                    onError: {
                                        "CheckoutModal.useEffect": (err)=>{
                                            if (String((err === null || err === void 0 ? void 0 : err.message) || err) === "FREE_PLAN") return;
                                            setIsPaying(false);
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`PayPal error: ${(err === null || err === void 0 ? void 0 : err.message) || err}`);
                                        }
                                    }["CheckoutModal.useEffect"]
                                }).render("#paypal-button-container-reseller");
                            } catch (e) {
                                console.error("PayPal render error:", e);
                            }
                        }
                    }
                }["CheckoutModal.useEffect"]);
            }
            return ({
                "CheckoutModal.useEffect": ()=>{
                    isMounted = false;
                }
            })["CheckoutModal.useEffect"];
        }
    }["CheckoutModal.useEffect"], [
        pkg,
        paymentGateway,
        billingCycle,
        isINR,
        appliedCoupon,
        isFreePlan
    ]);
    // Confirm Payment Handler (Razorpay, Wire, Free)
    const handleConfirmPayment = async ()=>{
        if (!pkg) return;
        setIsPaying(true);
        try {
            var _this, _this1, _this2;
            // 1. Free / 100% Promo Activation
            if (isFreePlan) {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$resellerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resellerApi"].createCheckoutOrder({
                    pkg,
                    billingCycle,
                    currency: activeCurrency,
                    paymentMethod: "razorpay",
                    couponCode: appliedCoupon ? appliedCoupon.coupon.code : undefined
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success((appliedCoupon === null || appliedCoupon === void 0 ? void 0 : appliedCoupon.benefitDescription) ? `${appliedCoupon.benefitDescription} applied! Tier ${pkg} is now active.` : `Tier ${pkg} Partner Plan is now active!`);
                onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(pkg, res.data);
                onCompletePayment === null || onCompletePayment === void 0 ? void 0 : onCompletePayment();
                onClose();
                return;
            }
            // 2. PayPal redirect alert if clicked main button
            if (!isINR && paymentGateway === "paypal") {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Please use the yellow PayPal buttons above to complete USD payment.");
                setIsPaying(false);
                return;
            }
            // 3. Razorpay (Live UPI, Cards, Netbanking)
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$resellerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resellerApi"].createCheckoutOrder({
                pkg,
                billingCycle,
                currency: "INR",
                paymentMethod: "razorpay",
                couponCode: appliedCoupon ? appliedCoupon.coupon.code : undefined
            });
            if (!res.success) throw new Error(res.message || "Failed to create payment order");
            const isLoaded = await loadRazorpayScript();
            if (!isLoaded) {
                throw new Error("Failed to load Razorpay SDK. Check your internet connection.");
            }
            const options = {
                key: res.data.keyId || ("TURBOPACK compile-time value", "rzp_live_ThPy7Qj0AvW37Z") || "rzp_live_ThPy7Qj0AvW37Z",
                amount: res.data.amountPaise || Math.round(finalAmount * 100),
                currency: "INR",
                name: "PingDart Reseller Hub",
                description: `Tier ${pkg} Partner Subscription (${billingCycle})`,
                image: "https://chat.pingdart.com/icons/icon-192x192.png",
                order_id: res.data.gatewayOrderId,
                handler: async function(response) {
                    try {
                        const verify = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$resellerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resellerApi"].verifyPayment({
                            orderId: res.data.orderId,
                            razorpayOrderId: response.razorpay_order_id || res.data.gatewayOrderId,
                            razorpayPaymentId: response.razorpay_payment_id,
                            razorpaySignature: response.razorpay_signature,
                            paymentMethod: "razorpay"
                        });
                        if (!verify.success) throw new Error(verify.message || "Payment verification failed");
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(verify.message || `🎉 Payment successful! Tier ${pkg} package activated.`);
                        onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess(pkg, verify.data);
                        onCompletePayment === null || onCompletePayment === void 0 ? void 0 : onCompletePayment();
                        onClose();
                    } catch (err) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((err === null || err === void 0 ? void 0 : err.message) || "Verification failed");
                    } finally{
                        setIsPaying(false);
                    }
                },
                modal: {
                    ondismiss: function() {
                        setIsPaying(false);
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Payment window dismissed.");
                    }
                },
                prefill: {
                    email: (user === null || user === void 0 ? void 0 : user.email) || "",
                    name: ((_this = user) === null || _this === void 0 ? void 0 : _this.name) || ((_this1 = user) === null || _this1 === void 0 ? void 0 : _this1.full_name) || ((_this2 = user) === null || _this2 === void 0 ? void 0 : _this2.username) || userDomain
                },
                theme: {
                    color: "#4f46e5"
                }
            };
            const rzp = new window.Razorpay(options);
            rzp.on("payment.failed", function(response) {
                var _response_error;
                setIsPaying(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Payment failed: ${((_response_error = response.error) === null || _response_error === void 0 ? void 0 : _response_error.description) || "Rejected by Razorpay"}`);
            });
            rzp.open();
        } catch (err) {
            setIsPaying(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error((err === null || err === void 0 ? void 0 : err.message) || "Checkout failed. Please try again.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: Boolean(pkg),
        onOpenChange: (open)=>{
            if (!open && !isPaying) {
                onClose();
                setAppliedCoupon(null);
                setCouponInput("");
                setCouponError(null);
            }
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-2xl sm:max-w-3xl w-[calc(100vw-1.5rem)] sm:w-full max-h-[92vh] sm:max-h-[88vh] rounded-[10px] sm:rounded-[10px] p-0 overflow-hidden bg-white dark:bg-[#0d121d] border border-slate-100 dark:border-slate-800 shadow-2xl flex flex-col focus:outline-hidden transition-all font-sans text-slate-900 dark:text-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "sr-only",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: [
                                "Secure Reseller Checkout - ",
                                (tier === null || tier === void 0 ? void 0 : tier.name) || `Tier ${pkg}`
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                            lineNumber: 450,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: "Upgrade your reseller portal infrastructure with instant provisioning."
                        }, void 0, false, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                            lineNumber: 451,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                    lineNumber: 449,
                    columnNumber: 9
                }, this),
                pkg && tier && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col h-full max-h-[92vh] sm:max-h-[88vh] overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative p-4 sm:p-6 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 text-white shrink-0 overflow-hidden select-none",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-16 -right-16 w-52 h-52 bg-white/10 rounded-full blur-3xl pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                    lineNumber: 460,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/25 rounded-full blur-2xl pointer-events-none"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                    lineNumber: 461,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 space-y-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-indigo-100 shadow-xs",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                                                size: 12,
                                                                className: "text-amber-300 shrink-0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                lineNumber: 467,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Reseller Partner Upgrade"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                        lineNumber: 466,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-300/30",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                lineNumber: 471,
                                                                columnNumber: 23
                                                            }, this),
                                                            "Instant Activation"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                lineNumber: 465,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 464,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row sm:items-baseline justify-between gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-2",
                                                    children: [
                                                        tier.name,
                                                        " (",
                                                        pkg,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 488,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-indigo-200 font-medium truncate max-w-full",
                                                    children: [
                                                        "Portal Domain:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-white bg-white/10 px-2 py-0.5 rounded-[10px] border border-white/15 underline underline-offset-2 decoration-indigo-300",
                                                            children: userDomain
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 493,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 491,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 487,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs sm:text-sm text-indigo-100/90 leading-relaxed max-w-xl line-clamp-2 sm:line-clamp-none",
                                            children: tier.tagline
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 499,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-0.5 flex flex-wrap gap-1.5 text-xs font-bold",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded-lg bg-black/25 backdrop-blur-md border border-white/15 text-white flex items-center gap-1 text-[10px] sm:text-[11px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                            size: 12,
                                                            className: "text-cyan-300 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 21
                                                        }, this),
                                                        tier.domains
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded-lg bg-black/25 backdrop-blur-md border border-white/15 text-white flex items-center gap-1 text-[10px] sm:text-[11px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            size: 12,
                                                            className: "text-emerald-300 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 510,
                                                            columnNumber: 21
                                                        }, this),
                                                        tier.subAccounts
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 509,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-2 py-0.5 rounded-lg bg-black/25 backdrop-blur-md border border-white/15 text-white flex items-center gap-1 text-[10px] sm:text-[11px]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
                                                            size: 12,
                                                            className: "text-amber-300 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 514,
                                                            columnNumber: 21
                                                        }, this),
                                                        tier.storage
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 504,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                    lineNumber: 463,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                            lineNumber: 459,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 sm:p-6 overflow-y-auto flex-1 space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-2.5 sm:p-3 rounded-[10px] bg-slate-50 dark:bg-[#131926] border border-slate-200/80 dark:border-slate-800/80 shadow-2xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-300 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                    className: "w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 526,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Checkout Currency"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 527,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 525,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-slate-200/70 dark:bg-slate-900 p-0.5 rounded-[10px] border border-slate-300/60 dark:border-slate-700 flex items-center shadow-xs shrink-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setCurrency("USD", true);
                                                        setPaymentGateway("paypal");
                                                    },
                                                    className: `px-3 h-7 rounded-[8px] text-xs font-bold transition-all flex items-center gap-1 cursor-pointer active:scale-95 ${!isINR ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow-xs font-black" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "🇺🇸"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 21
                                                        }, this),
                                                        " USD"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>{
                                                        setCurrency("INR", true);
                                                        setPaymentGateway("razorpay");
                                                    },
                                                    className: `px-3 h-7 rounded-[8px] text-xs font-bold transition-all flex items-center gap-1 cursor-pointer active:scale-95 ${isINR ? "bg-white dark:bg-slate-800 text-indigo-600 dark:text-white shadow-xs font-black" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "🇮🇳"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 555,
                                                            columnNumber: 21
                                                        }, this),
                                                        " INR"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 544,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 530,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                    lineNumber: 524,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3.5 sm:p-4 rounded-[10px] bg-slate-50 dark:bg-[#131926] border border-slate-200/80 dark:border-slate-800/80 space-y-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                            size: 13,
                                                            className: "text-indigo-600 dark:text-indigo-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 564,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Have a Partner Promo or Coupon Code?"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 565,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 563,
                                                    columnNumber: 19
                                                }, this),
                                                appliedCoupon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-[6px] border border-emerald-200 dark:border-emerald-800 flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                            size: 11
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 569,
                                                            columnNumber: 23
                                                        }, this),
                                                        " ",
                                                        appliedCoupon.benefitDescription
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 568,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 562,
                                            columnNumber: 17
                                        }, this),
                                        appliedCoupon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-2.5 rounded-[8px] bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-center justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 min-w-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-mono text-xs font-black text-emerald-800 dark:text-emerald-200 bg-white dark:bg-slate-900 px-2 py-0.5 rounded-[6px] border border-emerald-200 dark:border-emerald-700",
                                                            children: appliedCoupon.coupon.code
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 577,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold text-emerald-700 dark:text-emerald-300 truncate",
                                                            children: [
                                                                appliedCoupon.benefitDescription,
                                                                " applied!"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 580,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 576,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: handleRemoveCoupon,
                                                    className: "text-xs font-bold text-slate-400 hover:text-rose-600 p-1 cursor-pointer",
                                                    title: "Remove coupon",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                        lineNumber: 590,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 584,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 575,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            placeholder: "e.g. SAVE50, FLAT100, FREE30",
                                                            value: couponInput,
                                                            onChange: (e)=>{
                                                                setCouponInput(e.target.value.toUpperCase());
                                                                setCouponError(null);
                                                            },
                                                            onKeyDown: (e)=>{
                                                                if (e.key === "Enter") {
                                                                    e.preventDefault();
                                                                    handleApplyCoupon();
                                                                }
                                                            },
                                                            className: "flex-1 h-11 px-3.5 rounded-[8px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold uppercase text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 596,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            type: "button",
                                                            disabled: !couponInput.trim() || isValidatingCoupon,
                                                            onClick: handleApplyCoupon,
                                                            className: "h-11 px-4 rounded-[8px] bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black shadow-xs shrink-0 cursor-pointer active:scale-95",
                                                            children: isValidatingCoupon ? "Checking..." : "Apply"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 612,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 595,
                                                    columnNumber: 21
                                                }, this),
                                                couponError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[11px] font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 624,
                                                            columnNumber: 25
                                                        }, this),
                                                        " ",
                                                        couponError
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 623,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 flex-wrap pt-0.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-slate-400 font-semibold",
                                                            children: "Try:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 630,
                                                            columnNumber: 23
                                                        }, this),
                                                        [
                                                            "SAVE50",
                                                            "FLAT100",
                                                            "FREE30"
                                                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>{
                                                                    setCouponInput(s);
                                                                    setCouponError(null);
                                                                },
                                                                className: "text-[10px] font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 px-1.5 py-0.5 rounded-[6px] border border-indigo-200/60 dark:border-indigo-800/60 cursor-pointer transition-colors",
                                                                children: [
                                                                    "+",
                                                                    s
                                                                ]
                                                            }, s, true, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                lineNumber: 632,
                                                                columnNumber: 25
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 629,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 594,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                    lineNumber: 561,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3.5 sm:p-5 rounded-[10px] bg-slate-50 dark:bg-[#131926] border border-slate-200/80 dark:border-slate-800/80 space-y-3 shadow-2xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800 pb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                            size: 14,
                                                            className: "text-indigo-600 dark:text-indigo-400 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 653,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[11px] font-black uppercase tracking-wider text-slate-700 dark:text-slate-300",
                                                            children: "Order Summary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 654,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 652,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-[10px] border border-indigo-200/60 dark:border-indigo-800/60 text-[10px]",
                                                    children: isINR ? "🇮🇳 INR (₹)" : "🇺🇸 USD ($)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 658,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 651,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-1.5 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-slate-600 dark:text-slate-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Term:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 665,
                                                            columnNumber: 21
                                                        }, this),
                                                        setBillingCycle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "inline-flex items-center bg-slate-200/70 dark:bg-slate-800 p-0.5 rounded-[8px] border border-slate-300/60 dark:border-slate-700",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setBillingCycle("monthly"),
                                                                    className: `px-2.5 py-0.5 rounded-[6px] text-[10px] font-bold transition-all cursor-pointer ${billingCycle === "monthly" ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs font-black" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,
                                                                    children: "Monthly"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                    lineNumber: 668,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setBillingCycle("annual"),
                                                                    className: `px-2.5 py-0.5 rounded-[6px] text-[10px] font-bold transition-all flex items-center gap-1 cursor-pointer ${billingCycle === "annual" ? "bg-indigo-600 text-white shadow-xs font-black" : "text-slate-500 hover:text-slate-900 dark:hover:text-white"}`,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "Yearly (12 Mos)"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                        lineNumber: 686,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                    lineNumber: 678,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 667,
                                                            columnNumber: 23
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-slate-900 dark:text-white uppercase tracking-wider bg-white dark:bg-slate-800 px-2 py-0.5 rounded-[10px] border border-slate-200 dark:border-slate-700 text-[10px]",
                                                            children: billingCycle === "annual" ? "Yearly (12 Months)" : "Monthly"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 690,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 664,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-slate-600 dark:text-slate-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Package:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 696,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-slate-900 dark:text-slate-200",
                                                            children: tier.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 697,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 695,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-slate-600 dark:text-slate-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Portal:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 700,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-slate-900 dark:text-slate-200 truncate max-w-[180px] sm:max-w-[260px]",
                                                            children: userDomain
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 701,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 699,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-slate-600 dark:text-slate-400 pt-1.5 border-t border-slate-100 dark:border-slate-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Base Plan Fee:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                    lineNumber: 709,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[10px] text-slate-400 block",
                                                                    children: billingCycle === "annual" ? `(${formattedMonthlyCost}/mo × 12 months)` : `(${formattedMonthlyCost}/month)`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                    lineNumber: 710,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 708,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-slate-900 dark:text-slate-200",
                                                            children: formattedBaseCost
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 716,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 707,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-slate-600 dark:text-slate-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex items-center gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: taxLabel
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                    lineNumber: 722,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9px] px-1.5 py-0.2 rounded bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-extrabold border border-amber-300/40",
                                                                    children: "18%"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                    lineNumber: 723,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 721,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-bold text-amber-700 dark:text-amber-300",
                                                            children: [
                                                                "+",
                                                                formattedTaxAmount
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 727,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 720,
                                                    columnNumber: 19
                                                }, this),
                                                appliedCoupon && appliedCoupon.discountAmount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between text-emerald-600 dark:text-emerald-400 font-bold",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "Coupon (",
                                                                appliedCoupon.coupon.code,
                                                                "):"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 733,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                "-",
                                                                formattedDiscountAmount
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 734,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 732,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 663,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "pt-2.5 border-t border-slate-200/90 dark:border-slate-800 flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs font-bold text-slate-700 dark:text-slate-300 block",
                                                            children: "Total Due"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 741,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] text-slate-500",
                                                            children: (checkoutOrder === null || checkoutOrder === void 0 ? void 0 : checkoutOrder.orderId) ? `Order ${checkoutOrder.orderId}` : "Auto-provisions upon payment"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 742,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 740,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-right",
                                                    children: isFreePlan ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-baseline gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400 tracking-tight",
                                                                children: "FREE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                lineNumber: 749,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-emerald-600 font-bold",
                                                                children: [
                                                                    "(",
                                                                    (appliedCoupon === null || appliedCoupon === void 0 ? void 0 : appliedCoupon.benefitDescription) || "Promo",
                                                                    ")"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                lineNumber: 752,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                        lineNumber: 748,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight",
                                                                children: formattedFinalPrice
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                lineNumber: 758,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-slate-500 font-bold ml-0.5",
                                                                children: [
                                                                    "/",
                                                                    billingCycle === "annual" ? "yr" : "mo"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                lineNumber: 761,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                        lineNumber: 757,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 746,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 739,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                    lineNumber: 650,
                                    columnNumber: 15
                                }, this),
                                isFreePlan ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-[10px] bg-gradient-to-r from-emerald-500/10 via-purple-500/10 to-indigo-500/10 border border-emerald-300 dark:border-emerald-800 text-center space-y-1.5 select-none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-5 h-5 mx-auto text-emerald-600 dark:text-emerald-400"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 773,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-black text-slate-900 dark:text-white",
                                            children: [
                                                "100% Free Partner Promo Activation (",
                                                appliedCoupon === null || appliedCoupon === void 0 ? void 0 : appliedCoupon.coupon.code,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 774,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-slate-600 dark:text-slate-300",
                                            children: "No payment gateway or card required. Instant one-click reseller workspace activation."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 777,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                    lineNumber: 772,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-[11px] font-extrabold text-slate-600 dark:text-slate-300 uppercase tracking-wider block",
                                                    children: "Payment Method"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 784,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-slate-500 font-semibold flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                            size: 10,
                                                            className: "text-emerald-500 shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 788,
                                                            columnNumber: 23
                                                        }, this),
                                                        "Encrypted & Safe"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 787,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 783,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>isINR && setPaymentGateway("razorpay"),
                                                    className: `p-3 rounded-[10px] border-2 transition-all relative flex flex-col justify-between gap-2 select-none ${!isINR ? "opacity-40 pointer-events-none" : "cursor-pointer"} ${paymentGateway === "razorpay" ? "border-blue-600 bg-blue-50/70 dark:bg-blue-950/30 ring-2 ring-blue-500/20 shadow-xs" : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-[#131926]"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start justify-between gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-0.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-6 flex items-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "h-4.5 w-auto",
                                                                                viewBox: "0 0 130 28",
                                                                                fill: "none",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        d: "M11.85 2L1.5 18.5H10.2L14.4 2H11.85Z",
                                                                                        fill: "#0C2340",
                                                                                        className: "dark:fill-slate-100"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                                        lineNumber: 807,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        d: "M15.9 2L9.2 12.6H14.8L20.2 2H15.9Z",
                                                                                        fill: "#3395FF"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                                        lineNumber: 808,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        d: "M12.8 15.4L6.1 26H14.8L21.5 15.4H12.8Z",
                                                                                        fill: "#0C2340",
                                                                                        className: "dark:fill-slate-100"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                                        lineNumber: 809,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                                        x: "26",
                                                                                        y: "19",
                                                                                        fontFamily: "system-ui, sans-serif",
                                                                                        fontWeight: "800",
                                                                                        fontSize: "16",
                                                                                        letterSpacing: "-0.5px",
                                                                                        fill: "#0C2340",
                                                                                        className: "dark:fill-white",
                                                                                        children: "Razorpay"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                                        lineNumber: 810,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                                lineNumber: 806,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                            lineNumber: 805,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-slate-500 dark:text-slate-400 font-medium",
                                                                            children: "INR • UPI & cards"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                            lineNumber: 813,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                    lineNumber: 804,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all shrink-0 mt-0.5 ${paymentGateway === "razorpay" ? "border-blue-600 bg-blue-600 text-white shadow-xs" : "border-slate-300 dark:border-slate-600"}`,
                                                                    children: paymentGateway === "razorpay" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        size: 10,
                                                                        strokeWidth: 3
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                        lineNumber: 821,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                    lineNumber: 815,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 803,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1 pt-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9px] font-bold px-1.5 py-0.5 rounded-[6px] bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700",
                                                                    children: "UPI"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                    lineNumber: 826,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9px] font-bold px-1.5 py-0.5 rounded-[6px] bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700",
                                                                    children: "Cards"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                    lineNumber: 827,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 825,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 795,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onClick: ()=>!isINR && setPaymentGateway("paypal"),
                                                    className: `p-3 rounded-[10px] border-2 transition-all relative flex flex-col justify-between gap-2 select-none ${isINR ? "opacity-40 pointer-events-none" : "cursor-pointer"} ${paymentGateway === "paypal" ? "border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/30 ring-2 ring-indigo-500/20 shadow-xs" : "border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-white dark:bg-[#131926]"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start justify-between gap-1.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-0.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-6 flex items-center",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "h-4.5 w-auto",
                                                                                viewBox: "0 0 120 28",
                                                                                fill: "none",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        d: "M5.5 2h7.8c3.2 0 5.6 1.8 5.1 5.2-.6 3.8-3.4 5.8-6.8 5.8H8.7l-1.5 9H3.1L5.5 2z",
                                                                                        fill: "#003087"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                                        lineNumber: 844,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        d: "M9.8 6.5h7.2c3 0 5.2 1.6 4.7 4.8-.6 3.6-3.2 5.5-6.3 5.5H12.7l-1.4 8.2H7.5l2.3-18.5z",
                                                                                        fill: "#0079C1"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                                        lineNumber: 845,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                                                        x: "26",
                                                                                        y: "19",
                                                                                        fontFamily: "system-ui, sans-serif",
                                                                                        fontWeight: "800",
                                                                                        fontSize: "16",
                                                                                        letterSpacing: "-0.5px",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                                                                                                fill: "#003087",
                                                                                                className: "dark:fill-[#38bdf8]",
                                                                                                children: "Pay"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                                                lineNumber: 847,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tspan", {
                                                                                                fill: "#0079C1",
                                                                                                className: "dark:fill-[#60a5fa]",
                                                                                                children: "Pal"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                                                lineNumber: 848,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                                        lineNumber: 846,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                                lineNumber: 843,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                            lineNumber: 842,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-[10px] text-slate-500 dark:text-slate-400 font-medium",
                                                                            children: "USD • Global cards"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                            lineNumber: 852,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                    lineNumber: 841,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all shrink-0 mt-0.5 ${paymentGateway === "paypal" ? "border-indigo-600 bg-indigo-600 text-white shadow-xs" : "border-slate-300 dark:border-slate-600"}`,
                                                                    children: paymentGateway === "paypal" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                        size: 10,
                                                                        strokeWidth: 3
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                        lineNumber: 860,
                                                                        columnNumber: 59
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                    lineNumber: 854,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 840,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-1 pt-0.5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9px] font-bold px-1.5 py-0.5 rounded-[6px] bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700",
                                                                    children: "PayPal"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                    lineNumber: 865,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-[9px] font-bold px-1.5 py-0.5 rounded-[6px] bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700",
                                                                    children: "Visa/MC"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                                    lineNumber: 866,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                            lineNumber: 864,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 832,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 793,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            id: "paypal-button-container-reseller",
                                            className: paymentGateway === "paypal" && !isINR ? "pt-2 min-h-[110px]" : "hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 872,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                    lineNumber: 782,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-[10px] border border-amber-200 bg-amber-50 p-3 dark:border-amber-900/50 dark:bg-amber-950/30",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mb-1.5 text-[11px] font-black uppercase tracking-wider text-amber-800 dark:text-amber-200",
                                            children: "Reseller partner terms"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 881,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-1 text-[11px] leading-snug text-amber-900/90 dark:text-amber-100/90",
                                            children: planTerms.map((term, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        "• ",
                                                        term
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 886,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 884,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                    lineNumber: 880,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "py-2 px-3 rounded-[10px] bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-1.5 text-[11px] text-slate-600 dark:text-slate-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                    size: 14,
                                                    className: "text-emerald-500 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 894,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "256-bit Bank SSL"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 895,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 893,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline text-slate-300 dark:text-slate-700",
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 897,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    size: 13,
                                                    className: "text-amber-500 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 899,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Instant Setup"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 900,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 898,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline text-slate-300 dark:text-slate-700",
                                            children: "•"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 902,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    size: 13,
                                                    className: "text-indigo-500 shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 904,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Cancel Anytime"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                    lineNumber: 905,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                            lineNumber: 903,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                    lineNumber: 892,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                            lineNumber: 522,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3.5 sm:p-5 bg-white/95 dark:bg-[#0d121d]/95 backdrop-blur-md border-t border-slate-100 dark:border-slate-800/80 shrink-0 space-y-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "button",
                                    disabled: isPaying,
                                    onClick: handleConfirmPayment,
                                    className: `w-full h-12 rounded-[10px] text-xs sm:text-sm font-black shadow-xl active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer ${isFreePlan ? "bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-700 hover:to-indigo-700 text-white shadow-emerald-600/25" : "bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white shadow-indigo-600/25"}`,
                                    children: isPaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                lineNumber: 923,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: isFreePlan ? "Activating Free Promo..." : "Securing Payment & Activating Reseller Hub..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                lineNumber: 924,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : isFreePlan ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                size: 16,
                                                className: "text-amber-300 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                lineNumber: 932,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Activate Free Partner Plan Instantly"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                lineNumber: 933,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 15,
                                                className: "shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                lineNumber: 934,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : paymentGateway === "paypal" && !isINR ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                size: 15,
                                                className: "text-amber-200 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                lineNumber: 938,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Use PayPal buttons above (",
                                                    formattedFinalPrice,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                lineNumber: 939,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                size: 14,
                                                className: "text-indigo-200 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                lineNumber: 943,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "Pay ",
                                                    formattedFinalPrice,
                                                    " with Razorpay"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                lineNumber: 944,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 15,
                                                className: "shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                                lineNumber: 945,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                    lineNumber: 912,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    disabled: isPaying,
                                    onClick: onClose,
                                    className: "w-full py-1 text-center text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer",
                                    children: "Cancel & Return to Plans"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                                    lineNumber: 950,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                            lineNumber: 911,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
                    lineNumber: 457,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
            lineNumber: 448,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx",
        lineNumber: 437,
        columnNumber: 5
    }, this);
}
_s(CheckoutModal, "dMKZEO7Cn10AhWEaOQtIK8lAqxs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserCurrency"]
    ];
});
_c = CheckoutModal;
var _c;
__turbopack_context__.k.register(_c, "CheckoutModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/reseller/components/modals/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$modals$2f$AddTenantModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$modals$2f$CheckoutModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResellerScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/stores/useAuthStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/platform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUserCurrency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$resellerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/resellerApi.ts [app-client] (ecmascript)");
// Components & Types
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$layout$2f$ResellerSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/layout/ResellerSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$layout$2f$ResellerHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/layout/ResellerHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$layout$2f$ResellerBottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/layout/ResellerBottomNav.tsx [app-client] (ecmascript)");
// Tab Screens Components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/tabs/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerOverviewTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/tabs/ResellerOverviewTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerDomainTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDomainTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerConfigTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/tabs/ResellerConfigTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerSubscriptionTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSubscriptionTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerTenantsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/tabs/ResellerTenantsTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerDnsGuideTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/tabs/ResellerDnsGuideTab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerSmtpTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/tabs/ResellerSmtpTab.tsx [app-client] (ecmascript)");
// Modals
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$modals$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/modals/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$modals$2f$AddTenantModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/modals/AddTenantModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$modals$2f$CheckoutModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/components/modals/CheckoutModal.tsx [app-client] (ecmascript)");
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
function ResellerScreen({ onBack, onNavigateTab }) {
    _s();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    const { isNative, isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    // Universal Currency Hook
    const { currency: globalCurrency, setCurrency: setGlobalCurrency } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserCurrency"])();
    // Active Screen Tab
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overview");
    // Mobile Sidebar Drawer State
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Selected Currency for all packages & pricing, unified with global currency
    const selectedCurrency = globalCurrency || "USD";
    // Billing Cycle: monthly | annual
    const [billingCycle, setBillingCycle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("monthly");
    // Active Reseller Plan
    const [activePlan, setActivePlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ResellerScreen.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem("pingdart_reseller_active_plan");
                if (saved === "555" || saved === "999" || saved === "1999") return saved;
            }
            return null;
        }
    }["ResellerScreen.useState"]);
    // Domains State (empty by default, filter out any demo data)
    const [domains, setDomains] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ResellerScreen.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem("pingdart_reseller_domains");
                if (saved) {
                    try {
                        const parsed = JSON.parse(saved);
                        if (Array.isArray(parsed)) {
                            return parsed.filter({
                                "ResellerScreen.useState": (d)=>{
                                    var _d_domain;
                                    return !((_d_domain = d.domain) === null || _d_domain === void 0 ? void 0 : _d_domain.includes("acmeagency.com"));
                                }
                            }["ResellerScreen.useState"]);
                        }
                    } catch (e) {}
                }
            }
            return [];
        }
    }["ResellerScreen.useState"]);
    // Domain input form state
    const [newDomainInput, setNewDomainInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isVerifyingDns, setIsVerifyingDns] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // White-Label Configuration State (empty by default, filter out any demo data)
    const [config, setConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ResellerScreen.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem("pingdart_reseller_config");
                if (saved) {
                    try {
                        var _parsed_portalName;
                        const parsed = JSON.parse(saved);
                        if (parsed && typeof parsed === "object" && !((_parsed_portalName = parsed.portalName) === null || _parsed_portalName === void 0 ? void 0 : _parsed_portalName.includes("Acme"))) {
                            return parsed;
                        }
                    } catch (e) {}
                }
            }
            return {
                portalName: "",
                tagline: "",
                logoUrl: "",
                faviconUrl: "",
                primaryColor: "#4338ca",
                supportEmail: "",
                helpdeskUrl: "",
                termsUrl: "",
                privacyUrl: "",
                smtpSenderName: "",
                smtpFromEmail: "",
                smtpHost: "",
                smtpPort: 587,
                smtpSecure: true,
                currency: "USD"
            };
        }
    }["ResellerScreen.useState"]);
    // Client Tenants List (empty by default, filter out any demo data)
    const [tenants, setTenants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ResellerScreen.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem("pingdart_reseller_tenants");
                if (saved) {
                    try {
                        const parsed = JSON.parse(saved);
                        if (Array.isArray(parsed)) {
                            return parsed.filter({
                                "ResellerScreen.useState": (t)=>{
                                    var _t_name, _t_name1, _t_name2;
                                    return !((_t_name = t.name) === null || _t_name === void 0 ? void 0 : _t_name.includes("TechWave")) && !((_t_name1 = t.name) === null || _t_name1 === void 0 ? void 0 : _t_name1.includes("Zenith")) && !((_t_name2 = t.name) === null || _t_name2 === void 0 ? void 0 : _t_name2.includes("HyperScale"));
                                }
                            }["ResellerScreen.useState"]);
                        }
                    } catch (e) {}
                }
            }
            return [];
        }
    }["ResellerScreen.useState"]);
    // Clean up any old demo artifacts in localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResellerScreen.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const domStr = localStorage.getItem("pingdart_reseller_domains");
                if (domStr && domStr.includes("acmeagency.com")) {
                    localStorage.removeItem("pingdart_reseller_domains");
                }
                const tenStr = localStorage.getItem("pingdart_reseller_tenants");
                if (tenStr && (tenStr.includes("TechWave") || tenStr.includes("Zenith") || tenStr.includes("HyperScale"))) {
                    localStorage.removeItem("pingdart_reseller_tenants");
                }
                const cfgStr = localStorage.getItem("pingdart_reseller_config");
                if (cfgStr && cfgStr.includes("Acme")) {
                    localStorage.removeItem("pingdart_reseller_config");
                }
                const planStr = localStorage.getItem("pingdart_reseller_active_plan");
                if (planStr === "999" && (!tenStr || tenStr.includes("TechWave"))) {
                    localStorage.removeItem("pingdart_reseller_active_plan");
                }
            }
        }
    }["ResellerScreen.useEffect"], []);
    // Fetch active reseller subscription from backend
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResellerScreen.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$resellerApi$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resellerApi"].getCurrentSubscription().then({
                "ResellerScreen.useEffect": (res)=>{
                    var _res_data;
                    if ((res === null || res === void 0 ? void 0 : res.success) && ((_res_data = res.data) === null || _res_data === void 0 ? void 0 : _res_data.activePlan)) {
                        setActivePlan(res.data.activePlan);
                        try {
                            localStorage.setItem("pingdart_reseller_active_plan", res.data.activePlan);
                        } catch (e) {}
                    }
                }
            }["ResellerScreen.useEffect"]).catch({
                "ResellerScreen.useEffect": ()=>{}
            }["ResellerScreen.useEffect"]);
        }
    }["ResellerScreen.useEffect"], []);
    // Modal State for New Tenant
    const [isAddTenantOpen, setIsAddTenantOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newTenantForm, setNewTenantForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        subdomain: "",
        adminEmail: "",
        plan: "999",
        seats: 25
    });
    // Modal State for Package Checkout
    const [checkoutModalPackage, setCheckoutModalPackage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isProcessingPayment, setIsProcessingPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("card");
    // Save Config handler
    const handleSaveConfig = ()=>{
        try {
            localStorage.setItem("pingdart_reseller_config", JSON.stringify(config));
            localStorage.setItem("pingdart_reseller_currency", selectedCurrency);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("White-label configuration saved successfully!");
        } catch (e) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Failed to save configuration locally.");
        }
    };
    // Currency change handler synced with global useUserCurrency
    const handleCurrencyChange = async (newCode)=>{
        await setGlobalCurrency(newCode, true);
        setConfig((prev)=>({
                ...prev,
                currency: newCode
            }));
        try {
            localStorage.setItem("pingdart_reseller_currency", newCode);
        } catch (e) {}
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Currency switched to ${newCode}`);
    };
    // Add Domain Handler
    const handleAddDomain = (e)=>{
        if (e) e.preventDefault();
        const clean = newDomainInput.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/\/.*$/, "");
        if (!clean || !clean.includes(".")) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please enter a valid domain name (e.g., portal.mybrand.com)");
            return;
        }
        if (domains.some((d)=>d.domain === clean)) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("This domain is already added.");
            return;
        }
        const newRec = {
            id: `dom_${Date.now()}`,
            domain: clean,
            status: "pending_dns",
            isPrimary: domains.length === 0,
            sslExpires: "2027-04-12",
            createdAt: new Date().toISOString().split("T")[0],
            cnameTarget: "cname.pingdart.com",
            txtVerification: `pingdart-verify=pd_res_${Math.random().toString(36).substring(2, 10)}`
        };
        const updated = [
            ...domains,
            newRec
        ];
        setDomains(updated);
        setNewDomainInput("");
        try {
            localStorage.setItem("pingdart_reseller_domains", JSON.stringify(updated));
        } catch (e) {}
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Domain ${clean} added! Follow the DNS instructions below to complete verification.`);
    };
    // Verify DNS simulation
    const handleVerifyDns = (domainId)=>{
        setIsVerifyingDns(true);
        setTimeout(()=>{
            setIsVerifyingDns(false);
            setDomains((prev)=>{
                const next = prev.map((d)=>d.id === domainId ? {
                        ...d,
                        status: "active"
                    } : d);
                try {
                    localStorage.setItem("pingdart_reseller_domains", JSON.stringify(next));
                } catch (e) {}
                return next;
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("DNS and SSL verified successfully! Domain is now active.");
        }, 1200);
    };
    // Delete Domain
    const handleDeleteDomain = (domainId)=>{
        const updated = domains.filter((d)=>d.id !== domainId);
        setDomains(updated);
        try {
            localStorage.setItem("pingdart_reseller_domains", JSON.stringify(updated));
        } catch (e) {}
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info("Domain removed.");
    };
    // Set Primary Domain
    const handleSetPrimaryDomain = (domainId)=>{
        const updated = domains.map((d)=>({
                ...d,
                isPrimary: d.id === domainId
            }));
        setDomains(updated);
        try {
            localStorage.setItem("pingdart_reseller_domains", JSON.stringify(updated));
        } catch (e) {}
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Primary domain updated.");
    };
    // Add Tenant Handler
    const handleAddTenant = (e)=>{
        if (e) e.preventDefault();
        if (!newTenantForm.name.trim() || !newTenantForm.subdomain.trim() || !newTenantForm.adminEmail.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please fill in all required tenant details.");
            return;
        }
        const cleanSub = newTenantForm.subdomain.trim().toLowerCase().replace(/[^a-z0-9-]/g, "");
        const newTenant = {
            id: `ten_${Date.now()}`,
            name: newTenantForm.name.trim(),
            subdomain: cleanSub,
            adminEmail: newTenantForm.adminEmail.trim(),
            plan: newTenantForm.plan,
            status: "active",
            seats: Number(newTenantForm.seats) || 20,
            createdAt: new Date().toISOString().split("T")[0]
        };
        const updated = [
            newTenant,
            ...tenants
        ];
        setTenants(updated);
        try {
            localStorage.setItem("pingdart_reseller_tenants", JSON.stringify(updated));
        } catch (e) {}
        setIsAddTenantOpen(false);
        setNewTenantForm({
            name: "",
            subdomain: "",
            adminEmail: "",
            plan: "999",
            seats: 25
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Client portal "${newTenant.name}" created at ${newTenant.subdomain}.yourdomain.com!`);
    };
    // Complete Package Payment Success Handler
    const handlePaymentSuccess = (tier, details)=>{
        setActivePlan(tier);
        try {
            localStorage.setItem("pingdart_reseller_active_plan", tier);
        } catch (e) {}
        const pkgPrice = tier === "555" ? 555 : tier === "999" ? 999 : 1999;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`🎉 Successfully activated the ${tier} Package (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyAmount"])(pkgPrice, selectedCurrency)}/mo)!`);
        setCheckoutModalPackage(null);
    };
    // Calculations
    const totalSeatsAllocated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ResellerScreen.useMemo[totalSeatsAllocated]": ()=>tenants.reduce({
                "ResellerScreen.useMemo[totalSeatsAllocated]": (acc, t)=>acc + t.seats
            }["ResellerScreen.useMemo[totalSeatsAllocated]"], 0)
    }["ResellerScreen.useMemo[totalSeatsAllocated]"], [
        tenants
    ]);
    const estimatedRevenue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ResellerScreen.useMemo[estimatedRevenue]": ()=>{
            return tenants.reduce({
                "ResellerScreen.useMemo[estimatedRevenue]": (acc, t)=>{
                    const price = t.plan === "555" ? 555 : t.plan === "999" ? 999 : 1999;
                    return acc + price;
                }
            }["ResellerScreen.useMemo[estimatedRevenue]"], 0);
        }
    }["ResellerScreen.useMemo[estimatedRevenue]"], [
        tenants
    ]);
    const activeDomainName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ResellerScreen.useMemo[activeDomainName]": ()=>{
            const primary = domains.find({
                "ResellerScreen.useMemo[activeDomainName]": (d)=>d.isPrimary
            }["ResellerScreen.useMemo[activeDomainName]"]) || domains[0];
            return primary ? primary.domain : "";
        }
    }["ResellerScreen.useMemo[activeDomainName]"], [
        domains
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-full flex overflow-hidden bg-[#f8fafc] dark:bg-[#0b141a] text-slate-900 dark:text-white relative select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$layout$2f$ResellerSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResellerSidebar"], {
                activeTab: activeTab,
                onTabSelect: setActiveTab,
                isMobileSidebarOpen: isMobileSidebarOpen,
                onCloseMobileSidebar: ()=>setIsMobileSidebarOpen(false),
                onBack: onBack ? onBack : onNavigateTab ? ()=>onNavigateTab("more") : undefined,
                domainsCount: domains.length,
                tenantsCount: tenants.length,
                activePlan: activePlan,
                selectedCurrency: selectedCurrency,
                onCurrencyChange: handleCurrencyChange,
                portalName: config.portalName,
                estimatedRevenue: estimatedRevenue
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx",
                lineNumber: 359,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex flex-col h-full min-w-0 overflow-y-auto bg-[#f8fafc] dark:bg-[#0b141a]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$layout$2f$ResellerHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResellerHeader"], {
                        activeTab: activeTab,
                        onOpenMobileSidebar: ()=>setIsMobileSidebarOpen(true),
                        onBack: onBack ? onBack : onNavigateTab ? ()=>onNavigateTab("more") : undefined,
                        domainsCount: domains.length,
                        tenantsCount: tenants.length,
                        estimatedRevenue: estimatedRevenue,
                        selectedCurrency: selectedCurrency,
                        onCurrencyChange: handleCurrencyChange,
                        onOpenAddTenantModal: ()=>setIsAddTenantOpen(true),
                        onOpenPackageModal: (pkg)=>setCheckoutModalPackage(pkg),
                        onTabSelect: setActiveTab,
                        activePlan: activePlan
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx",
                        lineNumber: 377,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3.5 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full space-y-6 pb-28 md:pb-12",
                        children: [
                            activeTab === "overview" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerOverviewTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResellerOverviewTab"], {
                                domains: domains,
                                tenants: tenants,
                                totalSeatsAllocated: totalSeatsAllocated,
                                activePlan: activePlan,
                                selectedCurrency: selectedCurrency,
                                estimatedRevenue: estimatedRevenue,
                                activeDomainName: activeDomainName,
                                config: config,
                                setActiveTab: setActiveTab
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx",
                                lineNumber: 396,
                                columnNumber: 13
                            }, this),
                            activeTab === "domain" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerDomainTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResellerDomainTab"], {
                                domains: domains,
                                activePlan: activePlan,
                                newDomainInput: newDomainInput,
                                setNewDomainInput: setNewDomainInput,
                                isVerifyingDns: isVerifyingDns,
                                handleAddDomain: handleAddDomain,
                                handleVerifyDns: handleVerifyDns,
                                handleSetPrimaryDomain: handleSetPrimaryDomain,
                                handleDeleteDomain: handleDeleteDomain,
                                setActiveTab: setActiveTab
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx",
                                lineNumber: 411,
                                columnNumber: 13
                            }, this),
                            activeTab === "config" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerConfigTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResellerConfigTab"], {
                                activePlan: activePlan,
                                config: config,
                                setConfig: setConfig,
                                handleSaveConfig: handleSaveConfig,
                                setActiveTab: setActiveTab
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx",
                                lineNumber: 427,
                                columnNumber: 13
                            }, this),
                            (activeTab === "packages" || activeTab === "subscription") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerSubscriptionTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResellerSubscriptionTab"], {
                                activePlan: activePlan,
                                selectedCurrency: selectedCurrency,
                                handleCurrencyChange: handleCurrencyChange,
                                billingCycle: billingCycle,
                                setBillingCycle: setBillingCycle,
                                onSelectPackage: (pkg)=>setCheckoutModalPackage(pkg),
                                setActiveTab: setActiveTab
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx",
                                lineNumber: 438,
                                columnNumber: 13
                            }, this),
                            activeTab === "tenants" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerTenantsTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResellerTenantsTab"], {
                                tenants: tenants,
                                activeDomainName: activeDomainName,
                                selectedCurrency: selectedCurrency,
                                onOpenAddTenant: ()=>setIsAddTenantOpen(true)
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx",
                                lineNumber: 451,
                                columnNumber: 13
                            }, this),
                            activeTab === "dns-guide" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerDnsGuideTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResellerDnsGuideTab"], {
                                setActiveTab: setActiveTab
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx",
                                lineNumber: 461,
                                columnNumber: 13
                            }, this),
                            activeTab === "smtp" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$tabs$2f$ResellerSmtpTab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResellerSmtpTab"], {
                                config: config,
                                setConfig: setConfig,
                                handleSaveConfig: handleSaveConfig,
                                userEmail: user === null || user === void 0 ? void 0 : user.email
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx",
                                lineNumber: 466,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx",
                lineNumber: 375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$layout$2f$ResellerBottomNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResellerBottomNav"], {
                activeTab: activeTab,
                onTabSelect: setActiveTab,
                domainsCount: domains.length,
                tenantsCount: tenants.length
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx",
                lineNumber: 477,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$modals$2f$AddTenantModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AddTenantModal"], {
                isOpen: isAddTenantOpen,
                onClose: ()=>setIsAddTenantOpen(false),
                onSubmit: handleAddTenant,
                newTenantForm: newTenantForm,
                setNewTenantForm: setNewTenantForm,
                activeDomainName: activeDomainName,
                selectedCurrency: selectedCurrency
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx",
                lineNumber: 485,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$components$2f$modals$2f$CheckoutModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckoutModal"], {
                pkg: checkoutModalPackage,
                onClose: ()=>setCheckoutModalPackage(null),
                selectedCurrency: selectedCurrency,
                billingCycle: billingCycle,
                setBillingCycle: setBillingCycle,
                paymentMethod: paymentMethod,
                setPaymentMethod: setPaymentMethod,
                isProcessingPayment: isProcessingPayment,
                onCompletePayment: ()=>{
                    if (checkoutModalPackage) handlePaymentSuccess(checkoutModalPackage);
                },
                onSuccess: handlePaymentSuccess
            }, void 0, false, {
                fileName: "[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx",
                lineNumber: 495,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx",
        lineNumber: 357,
        columnNumber: 5
    }, this);
}
_s(ResellerScreen, "y8q5J/hiFKkGunMhxSLiztppPPU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$stores$2f$useAuthStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$platform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserCurrency"]
    ];
});
_c = ResellerScreen;
var _c;
__turbopack_context__.k.register(_c, "ResellerScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLOR_PRESETS",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLOR_PRESETS"],
    "SUPPORTED_CURRENCIES",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_CURRENCIES"],
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$ResellerScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    "formatCurrencyAmount",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyAmount"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$ResellerScreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/ResellerScreen.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$user$2f$components$2f$modules$2f$reseller$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/user/components/modules/reseller/types.ts [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=src_5bb91e38._.js.map